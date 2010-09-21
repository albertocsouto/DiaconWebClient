package com.diacon.webclient.client.diary.event;

import java.util.Date;

import com.google.gwt.event.shared.GwtEvent;

public class ShowCalendarEvent extends GwtEvent<ShowCalendarEventHandler> {
  public static Type<ShowCalendarEventHandler> TYPE = new Type<ShowCalendarEventHandler>();
  
  private final Date date;
  
  public ShowCalendarEvent(Date date) {
	  this.date = date;
  }

  public Date getDate() { return date; }


  @Override
  public Type<ShowCalendarEventHandler> getAssociatedType() {
	  return TYPE;
  }

  @Override
  protected void dispatch(ShowCalendarEventHandler handler) {
	  handler.onShowCalendar(this);
  }
}
