package com.diacon.webclient.shared.diary.jso;

import com.google.gwt.core.client.JavaScriptObject;

public abstract class DiaryEntryJSO extends JavaScriptObject {

	  protected DiaryEntryJSO() { } 
	    
	  public static final native DiaryEntryJSO parseJSON ( String json ) /*-{ return eval ( '(' + json + ')' ); }-*/;
	  	  
	  public final native String getDate ()  /*-{ return this.date;  }-*/;
	  public final native String getTime () /*-{ return this.time; }-*/;
	  public final native int getId() /*-{ return this.id; }-*/;
	  public final native String getType () /*-{ return this.type; }-*/;
	  public final native JavaScriptObject getData () /*-{ return this.data; }-*/;

}
