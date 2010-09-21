package com.diacon.webclient.shared.diary;

import java.io.Serializable;

import com.google.gwt.json.client.JSONObject;

@SuppressWarnings("serial")
public abstract class DiaryData implements Serializable {
	public abstract String getFormattedData();
	public abstract String toJSON();
}
