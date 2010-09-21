package com.diacon.webclient.client.diary.view;

import java.util.Date;
import java.util.List;

import com.diacon.webclient.client.diary.common.ColumnDefinition;
import com.diacon.webclient.shared.diary.DayTime;
import com.diacon.webclient.shared.diary.EntryType;
import com.diacon.webclient.shared.diary.FieldVerifier;
import com.diacon.webclient.shared.diary.FoodTime;
import com.google.gwt.core.client.GWT;
import com.google.gwt.dom.client.Document;
import com.google.gwt.dom.client.Element;
import com.google.gwt.dom.client.EventTarget;
import com.google.gwt.dom.client.Node;
import com.google.gwt.dom.client.TableCellElement;
import com.google.gwt.dom.client.TableElement;
import com.google.gwt.dom.client.TableRowElement;
import com.google.gwt.dom.client.TableSectionElement;
import com.google.gwt.event.dom.client.ChangeEvent;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.KeyCodes;
import com.google.gwt.event.dom.client.KeyPressEvent;
import com.google.gwt.event.dom.client.MouseOutEvent;
import com.google.gwt.event.dom.client.MouseOutHandler;
import com.google.gwt.event.dom.client.MouseOverEvent;
import com.google.gwt.event.logical.shared.SelectionEvent;
import com.google.gwt.event.logical.shared.SelectionHandler;
import com.google.gwt.event.logical.shared.ValueChangeEvent;
import com.google.gwt.event.logical.shared.ValueChangeHandler;
import com.google.gwt.i18n.client.DateTimeFormat;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.uibinder.client.UiTemplate;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.user.client.Event;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.DialogBox;
import com.google.gwt.user.client.ui.HTML;
import com.google.gwt.user.client.ui.HasVerticalAlignment;
import com.google.gwt.user.client.ui.HorizontalPanel;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.ListBox;
import com.google.gwt.user.client.ui.PopupPanel;
import com.google.gwt.user.client.ui.TextBox;
import com.google.gwt.user.client.ui.Tree;
import com.google.gwt.user.client.ui.TreeItem;
import com.google.gwt.user.client.ui.Widget;
import com.google.gwt.user.datepicker.client.DatePicker;
import com.gwtincubator.widgets.client.timepicker.TimeModelConverter;
import com.gwtincubator.widgets.client.timepicker.TimePicker;


public class DiaryViewImpl<T> extends Composite implements DiaryView<T>  {
	@UiTemplate("DiaryView.ui.xml")
	interface DiaryViewUiBinder extends UiBinder<Widget, DiaryViewImpl> {}
	private static DiaryViewUiBinder uiBinder = 
		GWT.create(DiaryViewUiBinder.class);

	@UiField DatePicker calendar;
	@UiField TimePicker timePicker;
	@UiField HTML diaryTable;
	@UiField ListBox actionList;
	@UiField ListBox foodList;
	@UiField Tree foodTree;
	@UiField Label foodChooser;
	@UiField Label insulineLabel;
	@UiField ListBox insulineList;
	@UiField TextBox foodQuantityText;
	@UiField Label foodLabel;
	@UiField ListBox timeList;
	@UiField TextBox measureText;
	@UiField Label measureLabel;
	@UiField Button addButton;
	@UiField Button deleteButton;

	private PopupPanel foodDialogBox;
	private Presenter<T> presenter;
	private List<ColumnDefinition<T>> columnDefinitions;
	private List<T> rowData;

	public DiaryViewImpl() {
		
		initWidget(uiBinder.createAndBindUi(this));
		
		// FIXME: Some tricky initializations here. Should be a better way...
		timePicker.setTime(0, 0);
		timePicker.setReadOnly(true);
		
		for (EntryType e: EntryType.values()) {
			actionList.addItem(e.getValue(), e.toString());
		}
		
		for (FoodTime f: FoodTime.values()) {
			foodList.addItem(f.getValue(), f.toString());
		}
		
		for (DayTime d: DayTime.values()) {
			timeList.addItem(d.getValue(), d.toString());
		}
		
		for (int i=1; i < 10; i++) {
			insulineList.addItem(Integer.valueOf(i).toString());
		}
				
		populateFoodTree();
	
		// FIXME: I'm not able to use UiBinder to do this
		calendar.addValueChangeHandler(new ValueChangeHandler<Date>() {
			public void onValueChange(ValueChangeEvent<Date> event) {
				onCalendarValueChange(event);				
			}			
		});
		
		foodTree.addSelectionHandler(new SelectionHandler<TreeItem>() {
			public void onSelection(SelectionEvent<TreeItem> event) {
				onSelectedFood(event);		
			}
			
		});
		

		foodTree.addMouseOutHandler(new MouseOutHandler() {
			public void onMouseOut(MouseOutEvent event) {
				onMouseOutTree(event);				
			}
		});
		
		
		foodDialogBox = new PopupPanel();
		foodDialogBox.add(foodTree);
		
		deleteButton.setVisible(false);
		
	}
	
	public void showDeleteButton() {

	}
	
	public void changeAction() {
		EntryType action = EntryType.valueOf(actionList.getValue(actionList.getSelectedIndex()));		
	
		insulineLabel.setVisible(action == EntryType.MEDICATION);
		insulineList.setVisible(action == EntryType.MEDICATION);
		timeList.setVisible(action == EntryType.MEASURE);
		measureText.setVisible(action == EntryType.MEASURE);
		measureLabel.setVisible(action == EntryType.MEASURE);
		foodList.setVisible(action == EntryType.FOOD);
		foodQuantityText.setVisible(action == EntryType.FOOD);
		foodLabel.setVisible(action == EntryType.FOOD);
		foodChooser.setVisible(action==EntryType.FOOD);
	}
	
	public EntryType getAction() {
		return EntryType.valueOf((actionList.getValue(actionList.getSelectedIndex())));
	}
	
	public FoodTime getFoodTime() {
		return FoodTime.valueOf(foodList.getValue(foodList.getSelectedIndex()));
	}
	
	public DayTime getDayTime() {
		return DayTime.valueOf(timeList.getValue(timeList.getSelectedIndex()));
	}
	
	public float getFoodQuantity() {
		return Float.parseFloat(foodQuantityText.getValue());
	}
	
	public String getTime() {		
		String hour = String.valueOf(timePicker.getHour());
		if (hour.length() == 1) {hour = "0" + hour;}
		String minute = String.valueOf(timePicker.getMinute());
		if (minute.length() == 1) {minute = "0" + minute;}
		return hour + ":" + minute;
	}
	
	public float getMeasure() {
		return Float.parseFloat(measureText.getValue());
	}
	
	public int getInsuline() {
		return Integer.parseInt(insulineList.getValue(insulineList.getSelectedIndex()));
	}
	
		
	public void setPresenter(Presenter<T> presenter) {
	    this.presenter = presenter;
	}

	public String getFood() {
		return foodTree.getSelectedItem().getText();
	}
	
	public Widget asWidget() {
		return this;
	}

	public void setDate(String stringDate) {
		
		Date date = DateTimeFormat.getFormat("yyyyMMdd").parse(stringDate);

		calendar.setValue(date);
		calendar.setCurrentMonth(date);
	}
	
	public void setRowData(List<T> rowData) {
		this.rowData = rowData;
		
		TableElement table = Document.get().createTableElement();
		TableSectionElement tbody;
		table.appendChild(tbody = Document.get().createTBodyElement());
		if (rowData.size() == 0) {
			TableRowElement row = tbody.insertRow(-1);			
			TableCellElement cell = row.insertCell(-1);
			cell.addClassName("error-Message");
			cell.setInnerHTML("<div>Sorry, no entries found</div>");
		} 
		
		for (int i = 0; i < rowData.size(); ++i) {
			TableRowElement row = tbody.insertRow(-1);

			row.addClassName("diary-ListRow");

			T t = rowData.get(i);
			for (int j = 0; j < columnDefinitions.size(); ++j) {

				TableCellElement cell = row.insertCell(-1);
				StringBuilder sb = new StringBuilder();
				columnDefinitions.get(j).render(t, sb);
				
				switch (j) {
				case 0:
					cell.addClassName("diary-CheckCell");
					break;
				case 1:
					cell.addClassName("diary-HourCell");
					break;
				case 2:
					cell.addClassName("diary-ActionCell");
					break;
				default:
					cell.addClassName("diary-DataCell");
					break;
				}				
					
				cell.setInnerHTML(sb.toString());

				// TODO: Really total hack! There's gotta be a better way...
				Element child = cell.getFirstChildElement();
				if (child != null) {
					Event.sinkEvents(child, Event.ONFOCUS | Event.ONBLUR);
				}
			}

		}
		diaryTable.setHTML(table.getInnerHTML());
	}
	
	@UiHandler("addButton")
	void onAddButtonClicked(ClickEvent event) {
		if (presenter != null) {
			presenter.onAddButtonClicked();
		}
	}

	@UiHandler("actionList")
	void onActionChanged(ChangeEvent event) {
		if (presenter != null) {
			presenter.onActionChanged();
		}
	}
	
	@UiHandler("measureText")
	void onMeassureKeyPressed(KeyPressEvent event) {
		onlyNumeric(measureText, event);
	}
	
	@UiHandler("foodQuantityText")
	void onFoodQuantityKeyPressed(KeyPressEvent event) {
		onlyNumeric(foodQuantityText, event);
	}
	
	@UiHandler("foodChooser")
	void onMouseOverFood(MouseOverEvent event) {
		
		foodDialogBox.setPopupPosition(foodChooser.getAbsoluteLeft(), 
				foodChooser.getAbsoluteTop() + foodChooser.getOffsetHeight());
		foodDialogBox.show();
	}
	
	@UiHandler("diaryTable")
	void onTableClicked(ClickEvent event) {
		if (presenter != null) {
			EventTarget target = event.getNativeEvent().getEventTarget();
			Node node = Node.as(target);
			TableCellElement cell = findNearestParentCell(node);
			if (cell == null) {
				return;
			}

			TableRowElement tr = TableRowElement.as(cell.getParentElement());
			int row = tr.getSectionRowIndex();

			if (cell != null) {

				ColumnDefinition<T> columnDefinition = 
					columnDefinitions.get(cell.getCellIndex());

				if (columnDefinition != null) {
					if (columnDefinition.isSelectable()) {
						presenter.onCheckClicked(rowData.get(row));
					}   
				}
			}
		}
	}
	
	private TableCellElement findNearestParentCell(Node node) {
		while ((node != null)) {
			if (Element.is(node)) {
				Element elem = Element.as(node);

				String tagName = elem.getTagName();
				if ("td".equalsIgnoreCase(tagName) || "th".equalsIgnoreCase(tagName)) {
					return elem.cast();
				}
			}
			node = node.getParentNode();
		}
		return null;
	}
	
	
	// FIXME: Use UiHandler???? (I don't know how)
	void onSelectedFood(SelectionEvent<TreeItem> event) {
		
		if (event.getSelectedItem().getChildCount() == 0) {
			foodDialogBox.hide();
			foodChooser.setText(event.getSelectedItem().getText());
		}
	}
	
	void onMouseOutTree(MouseOutEvent event) {
		foodDialogBox.hide();
	}
	
	// FIXME: Use UiHandler???? (I don't know how)
	void onCalendarValueChange(ValueChangeEvent<Date> event) {
		if (presenter != null) {
			presenter.onCalendarChanged(event.getValue());
		}
	}
	
	public void setColumnDefinitions(List<ColumnDefinition<T>> columnDefinitions) {
		this.columnDefinitions = columnDefinitions;
		
	}
	
	private void onlyNumeric(TextBox textBox, KeyPressEvent event) {
		int keyCode = event.getCharCode();

		// allow special keys
        if ((keyCode == KeyCodes.KEY_BACKSPACE)
                || ( keyCode == KeyCodes.KEY_DELETE )
                || ( keyCode == KeyCodes.KEY_ENTER ) || ( keyCode == KeyCodes.KEY_ESCAPE ) || ( keyCode == KeyCodes.KEY_RIGHT )
                || ( keyCode == KeyCodes.KEY_LEFT ) || ( keyCode == KeyCodes.KEY_TAB ) )
            return;

        // filter out non-digits
        if (Character.isDigit(event.getCharCode()))
            return;

        textBox.cancelKey();
	}
	
	private void populateFoodTree() {
		TreeItem fats = new TreeItem("Fats, Oils and Sweets");
		fats.addItem("Olive Oil");
		fats.addItem("Butter");
		foodTree.addItem(fats);
		
		TreeItem milk = new TreeItem("Milk"); 
		milk.addItem("Cheese");
		milk.addItem("Milk");
		foodTree.addItem(milk);
		
		TreeItem meat = new TreeItem("Meat and Other Proteins");
		meat.addItem("Pork Steak");
		meat.addItem("Chicken");
		foodTree.addItem(meat);
		
		TreeItem veggies = new TreeItem("Fruits and Vegetables");
		veggies.addItem("Tomato");
		veggies.addItem("Carrot");
		veggies.addItem("Apple");		
		foodTree.addItem(veggies);
		
		TreeItem bread = new TreeItem("Bread, Grains and Other Starches");
		bread.addItem("White Bread");
		foodTree.addItem(bread);
	}

	public void showDeleteButton(boolean show) {
		deleteButton.setVisible(show);
		
	}
	

}
