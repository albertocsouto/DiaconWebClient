package com.diacon.webclient.client;

import java.util.Date;

import com.diacon.webclient.client.diary.common.DiaryColumnDefinitionsFactory;
import com.diacon.webclient.client.diary.event.AddEntryEvent;
import com.diacon.webclient.client.diary.event.AddEntryEventHandler;
import com.diacon.webclient.client.diary.event.ShowCalendarEvent;
import com.diacon.webclient.client.diary.event.ShowCalendarEventHandler;
import com.diacon.webclient.client.diary.presenter.DiaryPresenter;
import com.diacon.webclient.client.diary.presenter.Presenter;
import com.diacon.webclient.client.diary.view.DiaryView;
import com.diacon.webclient.client.diary.view.DiaryViewImpl;
import com.diacon.webclient.shared.diary.DiaryEntry;
import com.google.gwt.core.client.GWT;
import com.google.gwt.core.client.RunAsyncCallback;
import com.google.gwt.event.logical.shared.ValueChangeEvent;
import com.google.gwt.event.logical.shared.ValueChangeHandler;
import com.google.gwt.event.shared.HandlerManager;
import com.google.gwt.i18n.client.DateTimeFormat;
import com.google.gwt.user.client.History;
import com.google.gwt.user.client.ui.HasWidgets;


public class AppController implements Presenter, ValueChangeHandler<String> {
	
	private final HandlerManager eventBus;
	private final DiaryHTTPService diaryService; 
	private HasWidgets container;
	private DiaryView<DiaryEntry> diaryView;
	private String date;

	public AppController(final DiaryHTTPService diaryService,
			final HandlerManager eventBus) {
		this.diaryService = diaryService;
		this.eventBus = eventBus;
		bind();
	}
	
	private void bind() {
	    History.addValueChangeHandler(this);

	    eventBus.addHandler(AddEntryEvent.TYPE,
	        new AddEntryEventHandler() {
	          public void onAddEntry(AddEntryEvent event) {
	            //doAddNewEntry();
	          }
	        });  

	    eventBus.addHandler(ShowCalendarEvent.TYPE,
	    	new ShowCalendarEventHandler() {
	    		public void onShowCalendar(ShowCalendarEvent event) {
	    			doShowCalendar(event.getDate());
	    		}
	    });

	  }


	public void go(final HasWidgets container) {
	    this.container = container;
	    
	    if ("".equals(History.getToken())) {
	    	History.newItem("list" + DateTimeFormat.getFormat("yyyyMMdd").format(new Date()));
	    }
	    else {
	    	History.fireCurrentHistoryState();
	    }
	}

	public void doShowCalendar(Date date) {		
		History.newItem("list" + DateTimeFormat.getFormat("yyyyMMdd").format(date));
	}
	
	public void onValueChange(ValueChangeEvent<String> event) {
		
		String token = event.getValue();
	    if (token != null) {
	    	Presenter presenter = null;
	    	
	    	if (token.length() >= 4) {
	    		if (token.substring(0,4).equals("list")) {
	    			date = token.substring(4);	    			
	    			
	    			GWT.runAsync(new RunAsyncCallback() {
	    				public void onSuccess() {
	    		            // lazily initialize our views, and keep them around to be reused
	    		            //
	    					if (diaryView == null) {
	    						diaryView = new DiaryViewImpl<DiaryEntry>();	    			              
	    			        }
	    		       
	    		            new DiaryPresenter(diaryService, eventBus, diaryView, 
	    		            		DiaryColumnDefinitionsFactory.getDiaryColumnDefinitions(), date)
	    		            		.go(container);
	    		        }
						
	    				public void onFailure(Throwable reason) {							
						}
	    		    });

	    		}
	    	}
	    	
	      /*
	      else if (token.equals("add")) {
	        presenter = new EditContactPresenter(rpcService, eventBus, new EditContactView());
	      }
	      else if (token.equals("edit")) {
	        presenter = new EditContactPresenter(rpcService, eventBus, new EditContactView());
	      }
	      */
	    	if (presenter != null) {
	    		presenter.go(container);
	    	}
	    }
		
	}
}
