package com.diacon.webclient.shared.diary;

import java.io.Serializable;

import com.diacon.webclient.shared.diary.jso.DiaryDataFoodJSO;
import com.diacon.webclient.shared.diary.jso.DiaryDataMeasureJSO;
import com.diacon.webclient.shared.diary.jso.DiaryDataMedicationJSO;
import com.diacon.webclient.shared.diary.jso.DiaryEntryJSO;

@SuppressWarnings("serial")
public class DiaryEntry implements Serializable {
	
	private int id;
	private String date;
	private String time;
	private EntryType type;
	private DiaryData data;
	
	public DiaryEntry (EntryType type, String date, String time, DiaryData data) {
		this.id = 0;
		this.date = date;
		this.time = time;
		this.type = type;
		this.data = data;
		
	}
	
	public DiaryEntry (DiaryEntryJSO diaryEntry) {
		this.id = diaryEntry.getId();
		this.date = diaryEntry.getDate();
		this.time = diaryEntry.getTime();
		this.type = EntryType.valueOf(diaryEntry.getType());
		
		switch (this.type) {
		case FOOD:
			DiaryDataFoodJSO foodData = (DiaryDataFoodJSO) diaryEntry.getData();
			this.data = new DiaryDataFood(foodData);
			break;
		case MEDICATION:
			DiaryDataMedicationJSO medicationData = (DiaryDataMedicationJSO) diaryEntry.getData();
			this.data = new DiaryDataMedication(medicationData);
			break;
		case MEASURE:
			DiaryDataMeasureJSO measureData = (DiaryDataMeasureJSO) diaryEntry.getData();
			this.data = new DiaryDataMeasure(measureData);
			break;
		}
	}
	
	public void setId(int newId) {
		this.id = newId;
	}
	
	public int getId() {
		return(this.id);
	}
	
	public void setDate(String date) {
		this.date = date;
	}
	
	public String getDate() {
		return(this.date);
	}
	
	public void setTime(String time) {
		this.time = time;
	}
	
	public String getTime() {
		return(this.time);
	}
	
	public void setType(EntryType type) {
		this.type = type;
	}
	
	public EntryType getType() {
		return(this.type);
	}
	
	public DiaryData getData() {
		return(this.data);
	}
	
	public String toJSON() {
		return("{\"type\":\"" + this.type.toString() + "\",\"date\":\"" + this.date +
		"\",\"time\":\"" + this.time + "\",\"data\":" + data.toJSON() + "}");

	}

}
