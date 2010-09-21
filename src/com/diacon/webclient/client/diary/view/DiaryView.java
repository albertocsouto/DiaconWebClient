package com.diacon.webclient.client.diary.view;

import java.util.Date;
import java.util.List;

import com.diacon.webclient.client.diary.common.ColumnDefinition;
import com.diacon.webclient.shared.diary.DayTime;
import com.diacon.webclient.shared.diary.EntryType;
import com.diacon.webclient.shared.diary.FoodTime;
import com.google.gwt.user.client.ui.Widget;


public interface DiaryView<T> {

	public interface Presenter<T> {
		void onAddButtonClicked();
		void onCalendarChanged(Date date);
		void onActionChanged();
		void onCheckClicked(T selectedItem);
	}

	void setDate(String stringDate);
	void setPresenter(Presenter<T> presenter);
	void setColumnDefinitions(List<ColumnDefinition<T>> columnDefinitions);
	void setRowData(List<T> rowData);
	void changeAction();
	void showDeleteButton(boolean show);
	EntryType getAction();
	DayTime getDayTime();
	FoodTime getFoodTime();
	float getFoodQuantity();
	float getMeasure();
	int getInsuline();
	String getFood();
	String getTime();
	Widget asWidget();

}


	
