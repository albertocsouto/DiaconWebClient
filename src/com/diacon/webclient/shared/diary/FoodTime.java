package com.diacon.webclient.shared.diary;

public enum FoodTime {
	
	BREAKFAST ("Breakfast"), 
	LUNCH ("Lunch"),
	DINNER ("Dinner"),
	OTHER ("Other");
	
	private final String value;
	
	FoodTime(String value) {
		this.value = value;
	}
	
	public String getValue() {
		return value;
	}
	
}
