package com.diacon.webclient.shared.diary;

import com.diacon.webclient.shared.diary.jso.DiaryDataFoodJSO;

@SuppressWarnings("serial")
public class DiaryDataFood extends DiaryData {

	private String food;
	private FoodTime foodTime;
	private float foodQuantity;
	
	public DiaryDataFood(DiaryDataFoodJSO jso) {
		this.food = jso.getFood();
		this.foodTime = FoodTime.valueOf(jso.getFoodTime());
		this.foodQuantity = jso.getFoodQuantity();
	}
	
	public DiaryDataFood(FoodTime foodTime, String food, float foodQuantity) {
		this.food = food;
		this.foodTime = foodTime;
		this.foodQuantity = foodQuantity;
	}

	public void setFoodTime (FoodTime foodTime) {
		this.foodTime = foodTime;
	}
	
	public FoodTime getFoodTime() {
		return(this.foodTime);
	}
	
	public void setFoodQuantity(float foodQuantity) {
		this.foodQuantity = foodQuantity;
	}
	
	public float getFoodQuantity() {
		return(this.foodQuantity);
	}
	
	public String getFormattedData() {
		return(this.foodTime.getValue() + " " + this.foodQuantity + " gr. of " + this.food);
	}
	
	public String toJSON() {
		// Dirty as hell...
		return("{\"food\":\"" + this.food + "\",\"foodTime\":\"" + foodTime.toString() + "\",\"foodQuantity\":" + 
			String.valueOf(foodQuantity) +	"}");
	}
}
