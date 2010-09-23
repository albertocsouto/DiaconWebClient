package com.diacon.webclient.client.diary.presenter;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import com.diacon.webclient.client.DiaryHTTPService;
import com.diacon.webclient.client.diary.common.ColumnDefinition;
import com.diacon.webclient.client.diary.common.SelectionModel;
import com.diacon.webclient.client.diary.event.ShowCalendarEvent;
import com.diacon.webclient.client.diary.view.DiaryView;
import com.diacon.webclient.request.JSONRequest;
import com.diacon.webclient.request.JSONRequestHandler;
import com.diacon.webclient.request.RequestBuilder;
import com.diacon.webclient.shared.diary.DiaryDataFood;
import com.diacon.webclient.shared.diary.DiaryDataMeasure;
import com.diacon.webclient.shared.diary.DiaryDataMedication;
import com.diacon.webclient.shared.diary.DiaryEntry;
import com.diacon.webclient.shared.diary.EntryType;
import com.diacon.webclient.shared.diary.FieldVerifier;
import com.diacon.webclient.shared.diary.jso.DiaryEntryJSO;
import com.google.gwt.core.client.JavaScriptObject;
import com.google.gwt.event.shared.HandlerManager;
import com.google.gwt.i18n.client.DateTimeFormat;
import com.google.gwt.json.client.JSONObject;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.HasText;
import com.google.gwt.user.client.ui.HasWidgets;

public class DiaryPresenter implements Presenter, 
	DiaryView.Presenter<DiaryEntry> {

	private List<DiaryEntry> diaryEntries;
	private String date;
	private DiaryEntry newDiaryEntry;
	private final DiaryHTTPService diaryService;
	private final HandlerManager eventBus;
	private final DiaryView<DiaryEntry> view;
	private final SelectionModel<DiaryEntry> selectionModel;
	  
	public DiaryPresenter(DiaryHTTPService diaryService, HandlerManager eventBus, 
			DiaryView<DiaryEntry> view, 
			List<ColumnDefinition<DiaryEntry>> columnDefinitions,
			String date) {
	    this.diaryService = diaryService;
	    this.eventBus = eventBus;
	    this.view = view;
	    this.view.setPresenter(this);
	    this.view.setColumnDefinitions(columnDefinitions);
	    this.selectionModel = new SelectionModel<DiaryEntry>();
	    this.date = date;
	}
	
	public void go(final HasWidgets container) {
		container.clear();
		container.add(view.asWidget());
		fetchDiaryEntries(date);
		onActionChanged();
		view.enableAddButton(false);
	}

	public void sortDiaryEntries() {

		//TODO: I need to retrieve the result ordered from the server...
		for (int i = 0; i < diaryEntries.size(); ++i) {
			for (int j = 0; j < diaryEntries.size() - 1; ++j) {
				if (diaryEntries.get(j).getTime().compareToIgnoreCase(diaryEntries.get(j + 1).getTime()) >= 0) {
					DiaryEntry tmp = diaryEntries.get(j);
					diaryEntries.set(j, diaryEntries.get(j + 1));
					diaryEntries.set(j + 1, tmp);
				}
			}
		}
	}
	
	public void onAddButtonClicked () {
		RequestBuilder request = new RequestBuilder(diaryService);
		request.setAction("createDiaryEntry");
		EntryType action = view.getAction();
		
		switch (action) {
		case FOOD:
			newDiaryEntry = new DiaryEntry(action, date, view.getTime(), 
				new DiaryDataFood(view.getFoodTime(), view.getFood(), view.getFoodQuantity()));
			break;
		case MEDICATION:
			newDiaryEntry = new DiaryEntry(action, date, view.getTime(), 
					new DiaryDataMedication(view.getInsuline()));
			break;
		case MEASURE:
			newDiaryEntry = new DiaryEntry(action, date, view.getTime(), 
					new DiaryDataMeasure(view.getDayTime(), view.getMeasure()));
			break;
		}

		
		request.addParameterWithoutFormat("entry", newDiaryEntry.toJSON());
		

		JSONRequest.get(request.getUrl(), new JSONRequestHandler(){
			public void onRequestComplete(JavaScriptObject json) {
				JSONObject response = new JSONObject(json);
				if (!response.get("result").isNumber().equals(0)) {
					fetchDiaryEntries(date);
				} else {
					Window.alert(response.toString());
				}
			}			
		});

	}
	
	public void onDeleteButtonClicked() {
		RequestBuilder request = new RequestBuilder(diaryService);
		request.setAction("removeDiaryEntry");
		String parameter = "[";
		for (int i=0;i<selectionModel.size();i++) {			
			if (i==0) {
				parameter = parameter + selectionModel.getSelectedItems().get(i).getId();
			} else {
				parameter = parameter + "," + selectionModel.getSelectedItems().get(i).getId();
			}			
		}
		parameter = parameter + "]";
	    request.addParameterWithoutFormat("id", parameter);	
		JSONRequest.get(request.getUrl(), new JSONRequestHandler(){
			public void onRequestComplete(JavaScriptObject json) {
					JSONObject response = new JSONObject(json);
				if (response.get("result").isString().stringValue().equals("ok")) {
					selectionModel.getSelectedItems().clear();
					fetchDiaryEntries(date);					
				}
			}			
		});
		
	}
	
	public void onCalendarChanged(Date date) {
		eventBus.fireEvent(new ShowCalendarEvent(date));
	}
	
	public void onActionChanged() {
		view.changeAction();
	}
	
	public void onCheckClicked(DiaryEntry diaryEntry) {
		if (selectionModel.isSelected(diaryEntry)) {
			selectionModel.removeSelection(diaryEntry);
		}
		else {
			selectionModel.addSelection(diaryEntry);
		}
		view.showDeleteButton(selectionModel.size() != 0);
			
	}
	
	private void fetchDiaryEntries(String date) {
		RequestBuilder request = new RequestBuilder(diaryService);
		request.setAction("getDiaryEntries");
		if (date == "") {
			date = DateTimeFormat.getFormat("yyyyMMdd").format(new Date());
		}
		
		request.addParameter("date", date);
		JSONRequest.get(request.getUrl(), new JSONRequestHandler(){
			public void onRequestComplete(JavaScriptObject json) {
				parseDiaryEntries(json);				
			}			
		});
		
		view.setDate(date);
	}
	
	private void parseDiaryEntries (JavaScriptObject json) {
		
		diaryEntries = new ArrayList<DiaryEntry>();
		
		JSONObject response = new JSONObject(json);
		Integer index = 0;

		try {
			while (response.keySet().contains(index.toString())) {		
				DiaryEntry diaryEntry = 
					new DiaryEntry(DiaryEntryJSO.parseJSON(response.get(index.toString()).toString()));
				diaryEntries.add(diaryEntry);
				index ++;
			}
		} catch (Exception e) {
			Window.alert("Exception in parseDiaryEntries: " + e.toString());
		}

		sortDiaryEntries();
		view.setRowData(diaryEntries);
		view.showDeleteButton(selectionModel.size() > 0);
	}

	public void onTextChanged(HasText textField) {
		view.enableAddButton(!FieldVerifier.isÉmpty(textField));	
	}

	public void setDiaryEntries (List<DiaryEntry> diaryEntries) {
		this.diaryEntries = diaryEntries;
	}
}
