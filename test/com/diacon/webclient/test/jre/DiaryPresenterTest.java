package com.diacon.webclient.test.jre;

import java.util.ArrayList;
import java.util.List;

import com.diacon.webclient.client.DiaryHTTPService;
import com.diacon.webclient.client.diary.common.DiaryColumnDefinitionsFactory;
import com.diacon.webclient.client.diary.presenter.DiaryPresenter;
import com.diacon.webclient.client.diary.view.DiaryView;
import com.diacon.webclient.shared.diary.DiaryDataMedication;
import com.diacon.webclient.shared.diary.DiaryEntry;
import com.diacon.webclient.shared.diary.EntryType;
import com.google.gwt.core.client.GWT;
import com.google.gwt.event.shared.HandlerManager;


import junit.framework.TestCase;

public class DiaryPresenterTest extends TestCase {
	  private DiaryPresenter diaryPresenter;
	  private DiaryHTTPService mockHTTPService;
	  private HandlerManager mockEventBus;
	  private DiaryView<DiaryEntry> mockView;
	  private List<DiaryEntry> diaryEntries;

	  @SuppressWarnings("unchecked")
	  protected void setUp() {
	    mockHTTPService = GWT.create(DiaryHTTPService.class);
	    mockEventBus = new HandlerManager(null);
	    mockView = GWT.create(DiaryView.class);
	    diaryPresenter = new DiaryPresenter(mockHTTPService, mockEventBus, 
	        mockView, 
	        DiaryColumnDefinitionsFactory.getDiaryColumnDefinitions(), "20100101");
	  }
	  
	  @SuppressWarnings("unchecked")
	  public void testDeleteButton() {
	    diaryEntries = new ArrayList<DiaryEntry>();
	    diaryEntries.add(new DiaryEntry(EntryType.MEDICATION, "20100101", "00:00", 
	    		new DiaryDataMedication(5)));
	    diaryPresenter.setDiaryEntries(diaryEntries);
	    
	    /*
	    mockRpcService.deleteContacts(isA(ArrayList.class), 
	        isA(AsyncCallback.class));
	    
	    
	    expectLastCall().andAnswer(new IAnswer() {
	      public Object answer() throws Throwable {
	        final Object[] arguments = getCurrentArguments();
	        AsyncCallback callback =
	                (AsyncCallback) arguments[arguments.length - 1];
	        callback.onSuccess(new ArrayList<ContactDetails>());
	        return null;
	      }
	    });
	    
	    replay(mockRpcService);
	    contactsPresenter.onDeleteButtonClicked();
	    verify(mockRpcService);
	    
	    List<ContactDetails> updatedContactDetails = 
	      contactsPresenter.getContactDetails();
	    
	    assertEquals(0, updatedContactDetails.size());
	    */
	  }
}
