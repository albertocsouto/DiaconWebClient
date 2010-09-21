package com.diacon.webclient.client;

public class DiaryHTTPService {
	
	private final String JSON_URL = "http://89.130.251.75:8000/diaconserver?json=";

	public String getURL() {
		return this.JSON_URL;
	}
}
