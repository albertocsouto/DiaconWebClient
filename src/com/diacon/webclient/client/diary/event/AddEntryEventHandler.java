package com.diacon.webclient.client.diary.event;

import com.google.gwt.event.shared.EventHandler;

public interface AddEntryEventHandler extends EventHandler {
  void onAddEntry(AddEntryEvent event);
}
