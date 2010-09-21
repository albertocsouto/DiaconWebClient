package com.diacon.webclient.shared.diary;

import com.diacon.webclient.shared.diary.jso.DiaryDataMeasureJSO;

@SuppressWarnings("serial")
public class DiaryDataMeasure extends DiaryData {

	private DayTime dayTime;
	private float measure;
	
	public DiaryDataMeasure (DiaryDataMeasureJSO jso) {
		this.dayTime = DayTime.valueOf(jso.getDayTime());
		this.measure = jso.getMeasure();
	}
	
	public DiaryDataMeasure (DayTime dayTime, float measure) {
		this.dayTime = dayTime;
		this.measure = measure;
	}
	
	public void setDayTime(DayTime dayTime) {
		this.dayTime = dayTime;
	}
	
	public DayTime getDayTime() {
		return this.dayTime;
	}
	
	public void setMeasure(float measure) {
		this.measure = measure;
	}
	
	public float getMeasure() {
		return(this.measure);
	}
	
	public String getFormattedData() {
		return(this.dayTime.getValue() + ": " +  String.valueOf(this.measure) + " mg/dl");
	}

	public String toJSON() {
		return("{\"dayTime\":\"" + dayTime.toString() + "\",\"measure\":" + this.measure + "}");
	}

}
