package com.diacon.webclient.shared.diary;

import com.diacon.webclient.shared.diary.jso.DiaryDataMedicationJSO;

@SuppressWarnings("serial")
public class DiaryDataMedication extends DiaryData {

	private int insulineUnits;
	
	public DiaryDataMedication(DiaryDataMedicationJSO jso) {
		this.insulineUnits = jso.getMedication();
	}
	
	public DiaryDataMedication(int insulineUnits) {
		this.insulineUnits = insulineUnits;
	}
	
	public void setInsulineUnits(int insulineUnits) {
		this.insulineUnits = insulineUnits;
	}
	
	public int getInsulineUnits() {
		return(this.insulineUnits);
	}
	
	public String getFormattedData() {
		return(String.valueOf(this.insulineUnits) + " Insuline Units");
	}

	public String toJSON() {
		return("{\"insulineUnits\":" + this.insulineUnits + "}");
	}

}
