package com.diacon.webclient.client;

import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.core.client.GWT;
import com.google.gwt.event.shared.HandlerManager;
import com.google.gwt.user.client.ui.RootPanel;

/**
 * Entry point classes define <code>onModuleLoad()</code>.
 */
public class DiaconWebClient implements EntryPoint {
	
	public void onModuleLoad() {
	    DiaryHTTPService diaryService = GWT.create(DiaryHTTPService.class);
	    HandlerManager eventBus = new HandlerManager(null);
	    AppController appViewer = new AppController(diaryService, eventBus);
	    appViewer.go(RootPanel.get("mainPanel"));
	  }


}
