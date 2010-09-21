package com.diacon.webclient.client.diary.common;

import com.diacon.webclient.shared.diary.DiaryEntry;

import java.util.List;

public class DiaryColumnDefinitionsFactory<T> {
	public static List<ColumnDefinition<DiaryEntry>> 
	getDiaryColumnDefinitions() {
		return DiaryColumnDefinitionsImpl.getInstance();
	}
}
