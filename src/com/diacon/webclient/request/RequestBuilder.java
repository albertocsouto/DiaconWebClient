package com.diacon.webclient.request;

import com.diacon.webclient.client.DiaryHTTPService;
import com.google.gwt.http.client.URL;

public class RequestBuilder {
	
	private String action;
	private String[] parameters = new String[10];
	private int parameterNumber = 0;
	private DiaryHTTPService diaryService;
	
	public RequestBuilder(DiaryHTTPService diaryService) {
		this.diaryService = diaryService;
	}
	
	public void setAction(String actionName){
		this.action = "\"" + actionName + "\"";
	}

	public void addParameter(String parameterName, String parameterValue) {
		this.parameters[this.parameterNumber] = "\"" + parameterName + 
			"\":\"" + parameterValue + "\"";
		this.parameterNumber++;
	}
	
	public void addParameter(String parameterName, Long parameterValue) {
		this.parameters[this.parameterNumber] = "\"" + parameterName + 
		"\":" + parameterValue.toString();
		this.parameterNumber++;
	}
	
	public void addParameter(String parameterName, Integer parameterValue) {
		this.parameters[this.parameterNumber] = "\"" + parameterName + 
		"\":" + parameterValue.toString();
		this.parameterNumber++;
	}
	public void addParameterWithoutFormat(String parameterName, String parameterValue) {
		this.parameters[this.parameterNumber] = "\"" + parameterName + 
			"\":" + parameterValue;
		this.parameterNumber++;
	}
	
	public String getUrl() {
		String url = this.diaryService.getURL() + "{\"action\":" + this.action + ",\"parameters\":{";
		for (int i = 0; i < this.parameterNumber; i++) {
			if (i > 0) url = url + ",";
			url = url + this.parameters[i];
		}
		url = url + "}}";
		
		// Append the name of the callback function to the JSON URL.
		url = URL.encode(url) + "&callback=";
	
		return(url);	
	}

}
