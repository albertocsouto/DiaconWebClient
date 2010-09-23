package com.diacon.webclient.shared.diary;

import com.google.gwt.user.client.ui.HasText;

public class FieldVerifier {

	public static boolean isÉmpty(HasText textField) {		
		return (textField.getText().equals(""));
	}
}
