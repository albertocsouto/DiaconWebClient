package com.diacon.webclient.client.diary.event;

import com.google.gwt.event.shared.GwtEvent;

public class AddEntryEvent extends GwtEvent<AddEntryEventHandler> {
  public static Type<AddEntryEventHandler> TYPE = new Type<AddEntryEventHandler>();
  
  @Override
  public Type<AddEntryEventHandler> getAssociatedType() {
    return TYPE;
  }

  @Override
  protected void dispatch(AddEntryEventHandler handler) {
    handler.onAddEntry(this);
  }
}
