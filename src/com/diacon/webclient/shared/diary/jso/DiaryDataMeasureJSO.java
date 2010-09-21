package com.diacon.webclient.shared.diary.jso;

public class DiaryDataMeasureJSO extends DiaryDataJSO{

	protected DiaryDataMeasureJSO() {	}

	public final native String getDayTime() /*-{ return this.dayTime; }-*/;
	public final native float getMeasure() /*-{ return this.measure; }-*/;

}
