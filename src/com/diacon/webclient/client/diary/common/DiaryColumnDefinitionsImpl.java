package com.diacon.webclient.client.diary.common;

import java.util.ArrayList;

import com.diacon.webclient.shared.diary.DiaryEntry;

@SuppressWarnings("serial")
public class DiaryColumnDefinitionsImpl extends
    ArrayList<ColumnDefinition<DiaryEntry>> {
    	  
    	  private static DiaryColumnDefinitionsImpl instance = null;
    	  
    	  public static DiaryColumnDefinitionsImpl getInstance() {
    	    if (instance == null) {
    	      instance = new DiaryColumnDefinitionsImpl();
    	    }
    	    
    	    return instance;
    	  }
    	  
    	  protected DiaryColumnDefinitionsImpl() {

    		this.add(new ColumnDefinition<DiaryEntry>() {
    	      public void render(DiaryEntry d, StringBuilder sb) {
    	        sb.append("<input type='checkbox'/>");
    	      }
    	      
    	      public boolean isSelectable() {
    	        return true;
    	      }
    	    });

    	    this.add(new ColumnDefinition<DiaryEntry>() {
    	      public void render(DiaryEntry d, StringBuilder sb) {        
    	    	  sb.append("<div id='" + d.getId() + "'>" + d.getTime() + "</div>");
    	      }
    	      
    	      public boolean isClickable() {
    	        return false;
    	      }
    	    });

    	    this.add(new ColumnDefinition<DiaryEntry>() {
        	      public void render(DiaryEntry d, StringBuilder sb) {        
        	    	  sb.append("<div id='" + d.getId() + "'>" + d.getType().getValue() + "</div>");
        	      }
        	      
        	      public boolean isClickable() {
        	        return false;
        	      }
    	    });

    	    this.add(new ColumnDefinition<DiaryEntry>() {
    	    	public void render(DiaryEntry d, StringBuilder sb) {        
    	    		sb.append("<div id='" + d.getId() + "'>" + d.getData().getFormattedData() + "</div>");
    	    	}
    	    	
    	    	public boolean isClickable() {
    	    		return false;
    	    	}
    	    });
    	    
    	  }
}
