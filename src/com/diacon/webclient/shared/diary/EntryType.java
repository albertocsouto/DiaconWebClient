package com.diacon.webclient.shared.diary;

public enum EntryType {
	
	MEASURE ("Measure"),
	FOOD ("Food"), 
	MEDICATION ("Medication");
	
	private final String value;
	
	EntryType(String value) {
		this.value = value;
	}
	
	public String getValue() {
		return value;
	}
	
}
