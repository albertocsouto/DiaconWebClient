package com.diacon.webclient.shared.diary;

public enum DayTime {
	
	AFTER_WAKEUP ("After Wake Up"),
	BEFORE_BREAKFAST ("Before Breakfast"), 
	AFTER_BREAKFAST ("After Breakfast"), 
	BEFORE_LUNCH ("Before Lunch"),
	AFTER_LUNCH ("After Lunch"),
	BEFORE_DINNER ("Before Dinner"),
	AFTER_DINNER ("After Dinner"),
	OTHER ("Other");
	
	private final String value;
	
	DayTime(String value) {
		this.value = value;
	}
	
	public String getValue() {
		return value;
	}

}
