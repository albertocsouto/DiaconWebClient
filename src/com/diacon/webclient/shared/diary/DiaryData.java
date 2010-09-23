package com.diacon.webclient.shared.diary;

import java.io.Serializable;

@SuppressWarnings("serial")
public abstract class DiaryData implements Serializable {
	public abstract String getFormattedData();
	public abstract String toJSON();
}
