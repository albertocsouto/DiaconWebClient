package com.diacon.webclient.shared.diary.jso;

public class DiaryDataFoodJSO extends DiaryDataJSO {
	
	protected DiaryDataFoodJSO() {	}

	public final native String getFood() /*-{ return this.food; }-*/;
	public final native String getFoodTime() /*-{ return this.foodTime; }-*/;
	public final native float getFoodQuantity() /*-{ return this.foodQuantity; }-*/;
	
}
