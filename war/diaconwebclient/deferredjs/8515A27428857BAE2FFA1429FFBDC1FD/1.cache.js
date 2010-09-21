function getClass_0(){
  return Ljava_lang_Object_2_classLit;
}

function toString_0(){
  return (this.typeMarker$ == nullMethod || this.typeId$ == 2?this.getClass$():Lcom_google_gwt_core_client_JavaScriptObject_2_classLit).typeName + '@' + toPowerOfTwoString(this.typeMarker$ == nullMethod || this.typeId$ == 2?this.hashCode$():this.$H || (this.$H = ++sNextHashId), 4);
}

_ = Object_0.prototype;
_.getClass$ = getClass_0;
_.toString$ = toString_0;
function $doShowCalendar(date){
  $clinit_256();
  newItem('list' + $format($DateTimeFormat(new DateTimeFormat, 'yyyyMMdd', $getDateTimeConstants(($clinit_202() , $clinit_202() , instance_0))), date), true);
}

function getClass_1(){
  return Lcom_diacon_webclient_client_AppController_2_classLit;
}

_ = AppController.prototype;
_.getClass$ = getClass_1;
function getClass_2(){
  return Lcom_diacon_webclient_client_AppController$1_2_classLit;
}

_ = AppController$1.prototype;
_.getClass$ = getClass_2;
function getClass_3(){
  return Lcom_diacon_webclient_client_AppController$2_2_classLit;
}

_ = AppController$2.prototype;
_.getClass$ = getClass_3;
function $onSuccess(this$static){
  !this$static.this$0.diaryView && (this$static.this$0.diaryView = $DiaryViewImpl(new DiaryViewImpl));
  $go_0($DiaryPresenter(new DiaryPresenter, this$static.this$0.eventBus, this$static.this$0.diaryView, (!instance && (instance = $DiaryColumnDefinitionsImpl(new DiaryColumnDefinitionsImpl)) , instance), this$static.this$0.date_0), this$static.this$0.container);
}

function getClass_4(){
  return Lcom_diacon_webclient_client_AppController$3_2_classLit;
}

_ = AppController$3.prototype;
_.getClass$ = getClass_4;
function getClass_5(){
  return Lcom_diacon_webclient_client_diary_common_ColumnDefinition_2_classLit;
}

function isSelectable(){
  return false;
}

function ColumnDefinition(){
}

_ = ColumnDefinition.prototype = new Object_0;
_.getClass$ = getClass_5;
_.isSelectable = isSelectable;
_.typeId$ = 6;
function $toString(this$static){
  var comma, iter, sb;
  sb = $StringBuffer(new StringBuffer);
  comma = null;
  sb.impl.string += '[';
  iter = this$static.iterator_0();
  while (iter.hasNext()) {
    comma != null?(sb.impl.string += comma , undefined):(comma = ', ');
    $append_6(sb, '' + iter.next_0());
  }
  sb.impl.string += ']';
  return sb.impl.string;
}

function getClass_6(){
  return Ljava_util_AbstractCollection_2_classLit;
}

function toString_1(){
  return $toString(this);
}

_ = AbstractCollection.prototype;
_.getClass$ = getClass_6;
_.toString$ = toString_1;
function $indexOf(this$static, toFind){
  var i, n;
  for (i = 0 , n = this$static.array.length; i < n; ++i) {
    if (toFind == null?(checkIndex(i, this$static.array.length) , this$static.array[i]) == null:equals__devirtual$(toFind, (checkIndex(i, this$static.array.length) , this$static.array[i]))) {
      return i;
    }
  }
  return -1;
}

function getClass_7(){
  return Ljava_util_AbstractList_2_classLit;
}

_ = AbstractList.prototype;
_.getClass$ = getClass_7;
function $remove(this$static, index){
  var previous;
  previous = (checkIndex(index, this$static.size_0) , this$static.array[index]);
  this$static.array.splice(index, 1);
  --this$static.size_0;
  return previous;
}

function $remove_0(this$static, o){
  var i;
  i = $indexOf_0(this$static, o, 0);
  if (i == -1) {
    return false;
  }
  $remove(this$static, i);
  return true;
}

function $set(this$static, index, o){
  var previous;
  previous = (checkIndex(index, this$static.size_0) , this$static.array[index]);
  setCheck(this$static.array, index, o);
  return previous;
}

function getClass_8(){
  return Ljava_util_ArrayList_2_classLit;
}

_ = ArrayList.prototype;
_.getClass$ = getClass_8;
function $DiaryColumnDefinitionsImpl(this$static){
  this$static.array = initDim(_3Ljava_lang_Object_2_classLit, 227, 0, 0, 0);
  $add(this$static, new DiaryColumnDefinitionsImpl$1);
  $add(this$static, new DiaryColumnDefinitionsImpl$2);
  $add(this$static, new DiaryColumnDefinitionsImpl$3);
  $add(this$static, new DiaryColumnDefinitionsImpl$4);
  return this$static;
}

function getClass_9(){
  return Lcom_diacon_webclient_client_diary_common_DiaryColumnDefinitionsImpl_2_classLit;
}

function DiaryColumnDefinitionsImpl(){
}

_ = DiaryColumnDefinitionsImpl.prototype = new ArrayList;
_.getClass$ = getClass_9;
_.typeId$ = 9;
var instance = null;
function getClass_10(){
  return Lcom_diacon_webclient_client_diary_common_DiaryColumnDefinitionsImpl$1_2_classLit;
}

function isSelectable_0(){
  return true;
}

function render(p0, p1){
  (dynamicCast(p0, 2) , p1).impl.string += "<input type='checkbox'/>";
}

function DiaryColumnDefinitionsImpl$1(){
}

_ = DiaryColumnDefinitionsImpl$1.prototype = new ColumnDefinition;
_.getClass$ = getClass_10;
_.isSelectable = isSelectable_0;
_.render = render;
_.typeId$ = 10;
function $render(d, sb){
  $append_7(sb, "<div id='" + d.id_0 + "'>" + d.time_0 + '<\/div>');
}

function getClass_11(){
  return Lcom_diacon_webclient_client_diary_common_DiaryColumnDefinitionsImpl$2_2_classLit;
}

function render_0(p0, p1){
  $render(dynamicCast(p0, 2), p1);
}

function DiaryColumnDefinitionsImpl$2(){
}

_ = DiaryColumnDefinitionsImpl$2.prototype = new ColumnDefinition;
_.getClass$ = getClass_11;
_.render = render_0;
_.typeId$ = 11;
function $render_0(d, sb){
  $append_7(sb, "<div id='" + d.id_0 + "'>" + d.type_0.value_0 + '<\/div>');
}

function getClass_12(){
  return Lcom_diacon_webclient_client_diary_common_DiaryColumnDefinitionsImpl$3_2_classLit;
}

function render_1(p0, p1){
  $render_0(dynamicCast(p0, 2), p1);
}

function DiaryColumnDefinitionsImpl$3(){
}

_ = DiaryColumnDefinitionsImpl$3.prototype = new ColumnDefinition;
_.getClass$ = getClass_12;
_.render = render_1;
_.typeId$ = 12;
function $render_1(d, sb){
  $append_7(sb, "<div id='" + d.id_0 + "'>" + d.data_0.getFormattedData() + '<\/div>');
}

function getClass_13(){
  return Lcom_diacon_webclient_client_diary_common_DiaryColumnDefinitionsImpl$4_2_classLit;
}

function render_2(p0, p1){
  $render_1(dynamicCast(p0, 2), p1);
}

function DiaryColumnDefinitionsImpl$4(){
}

_ = DiaryColumnDefinitionsImpl$4.prototype = new ColumnDefinition;
_.getClass$ = getClass_13;
_.render = render_2;
_.typeId$ = 13;
function $SelectionModel(this$static){
  this$static.selectedItems = $ArrayList(new ArrayList);
  return this$static;
}

function getClass_14(){
  return Lcom_diacon_webclient_client_diary_common_SelectionModel_2_classLit;
}

function SelectionModel(){
}

_ = SelectionModel.prototype = new Object_0;
_.getClass$ = getClass_14;
_.typeId$ = 0;
function getClass_15(){
  return Lcom_google_gwt_event_shared_GwtEvent_2_classLit;
}

function toString_2(){
  return 'An event type';
}

_ = GwtEvent.prototype;
_.getClass$ = getClass_15;
_.toString$ = toString_2;
function $ShowCalendarEvent(this$static, date){
  $clinit_18();
  this$static.date_0 = date;
  return this$static;
}

function $dispatch(this$static){
  $doShowCalendar(this$static.date_0);
}

function dispatch(p0){
  $dispatch(this, dynamicCast(p0, 3));
}

function getAssociatedType(){
  return TYPE_0;
}

function getClass_16(){
  return Lcom_diacon_webclient_client_diary_event_ShowCalendarEvent_2_classLit;
}

function ShowCalendarEvent(){
}

_ = ShowCalendarEvent.prototype = new GwtEvent;
_.dispatch = dispatch;
_.getAssociatedType = getAssociatedType;
_.getClass$ = getClass_16;
_.typeId$ = 0;
_.date_0 = null;
function $DiaryPresenter(this$static, eventBus, view, columnDefinitions, date){
  this$static.eventBus = eventBus;
  this$static.view = view;
  this$static.view.presenter = this$static;
  this$static.view.columnDefinitions = columnDefinitions;
  this$static.selectionModel = $SelectionModel(new SelectionModel);
  this$static.date_0 = date;
  return this$static;
}

function $fetchDiaryEntries(this$static, date){
  var request;
  request = $RequestBuilder(new RequestBuilder);
  request.action = '"getDiaryEntries"';
  date == '' && (date = $format($DateTimeFormat(new DateTimeFormat, 'yyyyMMdd', $getDateTimeConstants(($clinit_202() , $clinit_202() , instance_0))), $Date(new Date_0)));
  request.parameters[request.parameterNumber] = '"date":"' + date + '"';
  ++request.parameterNumber;
  get_0($getUrl(request), $DiaryPresenter$2(new DiaryPresenter$2, this$static));
  $setDate(this$static.view, date);
}

function $go_0(this$static, container){
  $clear_0(container);
  $add_2(container, this$static.view);
  $fetchDiaryEntries(this$static, this$static.date_0);
  $changeAction(this$static.view);
  this$static.view.deleteButton.element.style.display = 'none';
}

function $onAddButtonClicked(this$static){
  var action, request;
  request = $RequestBuilder(new RequestBuilder);
  request.action = '"createDiaryEntry"';
  action = $getAction(this$static.view);
  switch (action.ordinal) {
    case 1:
      this$static.newDiaryEntry = $DiaryEntry(new DiaryEntry, action, this$static.date_0, $getTime(this$static.view), $DiaryDataFood_0(new DiaryDataFood, $getFoodTime(this$static.view), $getInnerText(($clinit_96() , impl), this$static.view.foodTree.curSelection.contentElem), __parseAndValidateDouble($getPropertyString(this$static.view.foodQuantityText.element, 'value'))));
      break;
    case 2:
      this$static.newDiaryEntry = $DiaryEntry(new DiaryEntry, action, this$static.date_0, $getTime(this$static.view), $DiaryDataMedication_0(new DiaryDataMedication, $getInsuline(this$static.view)));
      break;
    case 0:
      this$static.newDiaryEntry = $DiaryEntry(new DiaryEntry, action, this$static.date_0, $getTime(this$static.view), $DiaryDataMeasure_0(new DiaryDataMeasure, $getDayTime(this$static.view), __parseAndValidateDouble($getPropertyString(this$static.view.measureText.element, 'value'))));
  }
  $addParameterWithoutFormat(request, 'entry', $toJSON(this$static.newDiaryEntry));
  get_0($getUrl(request), $DiaryPresenter$1(new DiaryPresenter$1, this$static));
}

function $onCheckClicked(this$static, diaryEntry){
  $indexOf_0(this$static.selectionModel.selectedItems, diaryEntry, 0) != -1?($remove_0(this$static.selectionModel.selectedItems, diaryEntry) , undefined):($add(this$static.selectionModel.selectedItems, diaryEntry) , undefined);
  this$static.view.deleteButton.element.style.display = this$static.selectionModel.selectedItems.size_0 != 0?'':'none';
}

function $parseDiaryEntries(this$static, json){
  var $e0, diaryEntry, e, index, response, keys;
  this$static.diaryEntries = $ArrayList(new ArrayList);
  response = $JSONObject(new JSONObject, json);
  index = valueOf_3(0);
  try {
    while ($contains_0((keys = $computeKeys0(response, initDim(_3Ljava_lang_String_2_classLit, 229, 1, 0, 0)) , $JSONObject$1(new JSONObject$1, response, keys)), '' + index.value_0)) {
      diaryEntry = $DiaryEntry_0(new DiaryEntry, eval('(' + $get_3(response, '' + index.value_0).toString$() + ')'));
      $add(this$static.diaryEntries, diaryEntry);
      index = valueOf_3(index.value_0 + 1);
    }
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (instanceOf($e0, 4)) {
      e = $e0;
      $wnd.alert('Exception in parseDiaryEntries: ' + $toString_2(e));
    }
     else 
      throw $e0;
  }
  $sortDiaryEntries(this$static);
  $setRowData(this$static.view, this$static.diaryEntries);
}

function $sortDiaryEntries(this$static){
  var i, j, tmp;
  for (i = 0; i < this$static.diaryEntries.size_0; ++i) {
    for (j = 0; j < this$static.diaryEntries.size_0 - 1; ++j) {
      if ($compareToIgnoreCase(dynamicCast($get(this$static.diaryEntries, j), 2).time_0, dynamicCast($get(this$static.diaryEntries, j + 1), 2).time_0) >= 0) {
        tmp = dynamicCast($get(this$static.diaryEntries, j), 2);
        $set(this$static.diaryEntries, j, dynamicCast($get(this$static.diaryEntries, j + 1), 2));
        $set(this$static.diaryEntries, j + 1, tmp);
      }
    }
  }
}

function getClass_17(){
  return Lcom_diacon_webclient_client_diary_presenter_DiaryPresenter_2_classLit;
}

function DiaryPresenter(){
}

_ = DiaryPresenter.prototype = new Object_0;
_.getClass$ = getClass_17;
_.typeId$ = 0;
_.date_0 = null;
_.diaryEntries = null;
_.eventBus = null;
_.newDiaryEntry = null;
_.selectionModel = null;
_.view = null;
function $DiaryPresenter$1(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function getClass_18(){
  return Lcom_diacon_webclient_client_diary_presenter_DiaryPresenter$1_2_classLit;
}

function onRequestComplete(json){
  var response;
  response = $JSONObject(new JSONObject, json);
  $equals_2($get_3(response, 'result').isNumber(), valueOf_3(0))?($wnd.alert($toString_4(response)) , undefined):$fetchDiaryEntries(this.this$0, this.this$0.date_0);
}

function DiaryPresenter$1(){
}

_ = DiaryPresenter$1.prototype = new Object_0;
_.getClass$ = getClass_18;
_.onRequestComplete = onRequestComplete;
_.typeId$ = 0;
_.this$0 = null;
function $DiaryPresenter$2(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function getClass_19(){
  return Lcom_diacon_webclient_client_diary_presenter_DiaryPresenter$2_2_classLit;
}

function onRequestComplete_0(json){
  $parseDiaryEntries(this.this$0, json);
}

function DiaryPresenter$2(){
}

_ = DiaryPresenter$2.prototype = new Object_0;
_.getClass$ = getClass_19;
_.onRequestComplete = onRequestComplete_0;
_.typeId$ = 0;
_.this$0 = null;
function $addStyleDependentName(this$static, styleSuffix){
  $addStyleName(this$static, getStylePrimaryName(this$static.element) + '-' + styleSuffix);
}

function $addStyleName(this$static, style){
  setStyleName(this$static.getStyleElement(), style, true);
}

function $removeStyleDependentName(this$static, styleSuffix){
  $removeStyleName(this$static, getStylePrimaryName(this$static.element) + '-' + styleSuffix);
}

function $removeStyleName(this$static, style){
  setStyleName(this$static.element, style, false);
}

function $replaceNode(node, newNode){
  var p = node.parentNode;
  if (!p) {
    return;
  }
  p.insertBefore(newNode, node);
  p.removeChild(node);
}

function $setElement(this$static, elem){
  this$static.element = elem;
}

function $setStyleName(this$static, style){
  this$static.getStyleElement()['className'] = style;
}

function getClass_20(){
  return Lcom_google_gwt_user_client_ui_UIObject_2_classLit;
}

function getOffsetHeight(){
  return parseInt(this.element['offsetHeight']) || 0;
}

function getStyleElement(){
  return this.element;
}

function getStylePrimaryName(elem){
  var fullClassName, spaceIdx;
  fullClassName = elem['className'] == null?null:String(elem['className']);
  spaceIdx = fullClassName.indexOf(fromCodePoint(32));
  if (spaceIdx >= 0) {
    return fullClassName.substr(0, spaceIdx - 0);
  }
  return fullClassName;
}

function setHeight(height){
  this.element.style['height'] = height;
}

function setStyleName(elem, style, add){
  if (!elem) {
    throw $RuntimeException(new RuntimeException, 'Null widget handle. If you are creating a composite, ensure that initWidget() has been called.');
  }
  style = $trim(style);
  if (style.length == 0) {
    throw $IllegalArgumentException(new IllegalArgumentException, 'Style names cannot be empty');
  }
  add?$addClassName(elem, style):$removeClassName(elem, style);
}

function setWidth(width){
  this.element.style['width'] = width;
}

function toString_3(){
  if (!this.element) {
    return '(null handle)';
  }
  return ($clinit_96() , this.element).outerHTML;
}

_ = UIObject.prototype;
_.getClass$ = getClass_20;
_.getOffsetHeight = getOffsetHeight;
_.getStyleElement = getStyleElement;
_.setHeight = setHeight;
_.setWidth = setWidth;
_.toString$ = toString_3;
function $addDomHandler(this$static, handler, type){
  $sinkEvents(this$static, $eventGetTypeInt(type.name_0));
  return $addHandler_0(!this$static.handlerManager?(this$static.handlerManager = $HandlerManager(new HandlerManager, this$static)):this$static.handlerManager, type, handler);
}

function $addHandler(this$static, handler, type){
  return $addHandler_0(!this$static.handlerManager?(this$static.handlerManager = $HandlerManager(new HandlerManager, this$static)):this$static.handlerManager, type, handler);
}

function $removeFromParent(this$static){
  if (!this$static.parent_0) {
    $clinit_327();
    $containsKey_0(widgetsToDetach.map, this$static) && detachNow(this$static);
  }
   else if (instanceOf(this$static.parent_0, 89)) {
    dynamicCast(this$static.parent_0, 89).remove(this$static);
  }
   else if (this$static.parent_0) {
    throw $IllegalStateException_0(new IllegalStateException, "This widget's parent does not implement HasWidgets");
  }
}

function $replaceElement_0(this$static, elem){
  this$static.attached && (this$static.element.__listener = null , undefined);
  !!this$static.element && $replaceNode(this$static.element, elem);
  this$static.element = elem;
  this$static.attached && (this$static.element.__listener = this$static , undefined);
}

function $setParent(this$static, parent_0){
  var oldParent;
  oldParent = this$static.parent_0;
  if (!parent_0) {
    try {
      !!oldParent && oldParent.isAttached() && this$static.onDetach();
    }
     finally {
      this$static.parent_0 = null;
    }
  }
   else {
    if (oldParent) {
      throw $IllegalStateException_0(new IllegalStateException, 'Cannot set a new parent without first clearing the old parent');
    }
    this$static.parent_0 = parent_0;
    parent_0.isAttached() && this$static.onAttach();
  }
}

function getClass_21(){
  return Lcom_google_gwt_user_client_ui_Widget_2_classLit;
}

_ = Widget.prototype;
_.getClass$ = getClass_21;
function $initWidget(this$static, widget){
  if (this$static.widget) {
    throw $IllegalStateException_0(new IllegalStateException, 'Composite.initWidget() may only be called once.');
  }
  $removeFromParent(widget);
  $setElement(this$static, widget.element);
  this$static.widget = widget;
  $setParent(widget, this$static);
}

function $isAttached_0(this$static){
  if (this$static.widget) {
    return this$static.widget.attached;
  }
  return false;
}

function getClass_22(){
  return Lcom_google_gwt_user_client_ui_Composite_2_classLit;
}

function isAttached_0(){
  return $isAttached_0(this);
}

function onAttach_0(){
  if (this.eventsToSink != -1) {
    $sinkEvents(this.widget, this.eventsToSink);
    this.eventsToSink = -1;
  }
  $onAttach(this.widget);
  this.element.__listener = this;
  this.onLoad();
}

function onBrowserEvent_0(event_0){
  $onBrowserEvent(this, event_0);
  this.widget.onBrowserEvent(event_0);
}

function onDetach_0(){
  $onDetach(this.widget);
}

function Composite(){
}

_ = Composite.prototype = new Widget;
_.getClass$ = getClass_22;
_.isAttached = isAttached_0;
_.onAttach = onAttach_0;
_.onBrowserEvent = onBrowserEvent_0;
_.onDetach = onDetach_0;
_.typeId$ = 16;
_.widget = null;
function $DiaryViewImpl(this$static){
  var d, d$array, d$index, d$max, e, e$array, e$index, e$max, f, f$array, f$index, f$max, i, actionList, addButton, attachRecord0, calendar, deleteButton, diaryTable, domId0, domId0Element, domId1, domId10, domId10Element, domId11, domId11Element, domId12, domId12Element, domId13, domId13Element, domId14, domId14Element, domId15, domId15Element, domId16, domId16Element, domId17, domId17Element, domId1Element, domId2, domId2Element, domId3, domId3Element, domId4, domId4Element, domId5, domId5Element, domId6, domId6Element, domId7, domId7Element, domId8, domId8Element, domId9, domId9Element, f_DecoratorPanel1, f_HTMLPanel2, f_Label3, f_Label4, foodChooser, foodLabel, foodList, foodQuantityText, foodTree, handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2, handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3, handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames4, handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames5, handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames6, insulineLabel, insulineList, measureLabel, measureText, timeList, timePicker, bread, fats, meat, milk, veggies, ret, ret_0, ret_1, ret_2, ret_3, ret_4, ret_5, ret_6, ret_7, ret_8;
  $initWidget(this$static, (!style_4 && (style_4 = new com_diacon_webclient_client_diary_view_DiaryViewImpl_DiaryViewUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$1) , domId0 = $createUniqueId($doc) , calendar = $DatePicker(new DatePicker) , domId1 = $createUniqueId($doc) , f_Label3 = $Label(new Label) , domId2 = $createUniqueId($doc) , diaryTable = $HTML(new HTML) , domId3 = $createUniqueId($doc) , deleteButton = $Button(new Button) , domId4 = $createUniqueId($doc) , f_Label4 = $Label(new Label) , domId5 = $createUniqueId($doc) , timePicker = $TimePicker(new TimePicker) , domId6 = $createUniqueId($doc) , actionList = $ListBox(new ListBox) , domId7 = $createUniqueId($doc) , foodList = $ListBox(new ListBox) , domId8 = $createUniqueId($doc) , foodChooser = $Label(new Label) , domId9 = $createUniqueId($doc) , foodTree = $Tree(new Tree) , domId10 = $createUniqueId($doc) , foodQuantityText = $TextBox(new TextBox) , domId11 = $createUniqueId($doc) , foodLabel = $Label(new Label) , domId12 = $createUniqueId($doc) , insulineLabel = $Label(new Label) , domId13 = $createUniqueId($doc) , insulineList = $ListBox(new ListBox) , domId14 = $createUniqueId($doc) , timeList = $ListBox(new ListBox) , domId15 = $createUniqueId($doc) , measureText = $TextBox(new TextBox) , domId16 = $createUniqueId($doc) , measureLabel = $Label(new Label) , domId17 = $createUniqueId($doc) , addButton = $Button(new Button) , f_HTMLPanel2 = $HTMLPanel(new HTMLPanel, "<table> <tr> <td style='vertical-align:top;padding-right:7px;'> <span id='" + domId0 + "'><\/span> <\/td> <td> <table class='diaryContent'> <tr> <td style='vertical-align:top;'> <span id='" + domId1 + "'><\/span> <\/td> <\/tr> <tr> <td style='vertical-align:top;text-align:center'> <span id='" + domId2 + "'><\/span> <\/td> <\/tr> <tr> <td height='40px'> <span id='" + domId3 + "'><\/span> <\/td> <\/tr> <tr> <table class='diaryMenu'> <tr height='50px' width='100%'> <td> <span id='" + domId4 + "'><\/span> <\/td> <td> <span id='" + domId5 + "'><\/span> <\/td> <td> <span id='" + domId6 + "'><\/span> <\/td> <td> <span id='" + domId7 + "'><\/span> <\/td> <td> <span id='" + domId8 + "'><\/span> <\/td> <td> <span id='" + domId9 + "'><\/span> <\/td> <td> <span id='" + domId10 + "'><\/span> <\/td> <td> <span id='" + domId11 + "'><\/span> <\/td> <td style='text-align:right'> <span id='" + domId12 + "'><\/span> <\/td> <td> <span id='" + domId13 + "'><\/span> <\/td> <td> <span id='" + domId14 + "'><\/span> <\/td> <td> <span id='" + domId15 + "'><\/span> <\/td> <td> <span id='" + domId16 + "'><\/span> <\/td> <td style='text-align:right;' width='100%'> <span id='" + domId17 + "'><\/span> <\/td> <\/tr> <\/table> <\/tr> <\/table> <\/td> <\/tr> <\/table>") , f_DecoratorPanel1 = $DecoratorPanel(new DecoratorPanel) , $setInnerText(($clinit_96() , f_Label3.element), 'Diary Entries') , setStyleName(f_Label3.element, 'G1gdndmpF', true) , setStyleName(diaryTable.element, 'G1gdndmpD', true) , deleteButton.element.innerHTML = 'Delete Entries' , setStyleName(deleteButton.element, 'G1gdndmpC', true) , $setInnerText(f_Label4.element, 'Hour') , f_Label4.element.style['width'] = '30px' , $getTimeTextBox(timePicker).element.style['width'] = '50px' , actionList.element.style['width'] = '110px' , $setInnerText(foodChooser.element, 'Choose Food') , setStyleName(foodChooser.element, 'G1gdndmpE', true) , foodQuantityText.element.style['width'] = '40px' , $setInnerText(foodLabel.element, 'gr') , $setInnerText(insulineLabel.element, 'Insuline Units') , insulineLabel.element.style['width'] = '120px' , insulineList.element.style['width'] = '50px' , measureText.element.style['width'] = '40px' , $setInnerText(measureLabel.element, 'mg/dl') , addButton.element.innerHTML = 'Add' , setStyleName(addButton.element, 'G1gdndmpA', true) , $add_3(f_DecoratorPanel1, f_HTMLPanel2) , setStyleName(f_DecoratorPanel1.element, 'G1gdndmpB', true) , f_DecoratorPanel1.element.style['height'] = '450px' , f_DecoratorPanel1.element.style['width'] = '800px' , attachRecord0 = attachToDom(f_HTMLPanel2.element) , domId0Element = $doc.getElementById(domId0) , domId1Element = $doc.getElementById(domId1) , domId2Element = $doc.getElementById(domId2) , domId3Element = $doc.getElementById(domId3) , domId4Element = $doc.getElementById(domId4) , domId5Element = $doc.getElementById(domId5) , domId6Element = $doc.getElementById(domId6) , domId7Element = $doc.getElementById(domId7) , domId8Element = $doc.getElementById(domId8) , domId9Element = $doc.getElementById(domId9) , domId10Element = $doc.getElementById(domId10) , domId11Element = $doc.getElementById(domId11) , domId12Element = $doc.getElementById(domId12) , domId13Element = $doc.getElementById(domId13) , domId14Element = $doc.getElementById(domId14) , domId15Element = $doc.getElementById(domId15) , domId16Element = $doc.getElementById(domId16) , domId17Element = $doc.getElementById(domId17) , attachRecord0.origParent?attachRecord0.origParent.insertBefore(attachRecord0.element, attachRecord0.origSibling):orphan(attachRecord0.element) , $removeFromParent(calendar) , $add_6(f_HTMLPanel2.children_0, calendar) , domId0Element.parentNode.replaceChild(calendar.element, domId0Element) , $setParent(calendar, f_HTMLPanel2) , $removeFromParent(f_Label3) , $add_6(f_HTMLPanel2.children_0, f_Label3) , domId1Element.parentNode.replaceChild(f_Label3.element, domId1Element) , $setParent(f_Label3, f_HTMLPanel2) , $removeFromParent(diaryTable) , $add_6(f_HTMLPanel2.children_0, diaryTable) , domId2Element.parentNode.replaceChild(diaryTable.element, domId2Element) , $setParent(diaryTable, f_HTMLPanel2) , $removeFromParent(deleteButton) , $add_6(f_HTMLPanel2.children_0, deleteButton) , domId3Element.parentNode.replaceChild(deleteButton.element, domId3Element) , $setParent(deleteButton, f_HTMLPanel2) , $removeFromParent(f_Label4) , $add_6(f_HTMLPanel2.children_0, f_Label4) , domId4Element.parentNode.replaceChild(f_Label4.element, domId4Element) , $setParent(f_Label4, f_HTMLPanel2) , $removeFromParent(timePicker) , $add_6(f_HTMLPanel2.children_0, timePicker) , domId5Element.parentNode.replaceChild(timePicker.element, domId5Element) , $setParent(timePicker, f_HTMLPanel2) , $removeFromParent(actionList) , $add_6(f_HTMLPanel2.children_0, actionList) , domId6Element.parentNode.replaceChild(actionList.element, domId6Element) , $setParent(actionList, f_HTMLPanel2) , $removeFromParent(foodList) , $add_6(f_HTMLPanel2.children_0, foodList) , domId7Element.parentNode.replaceChild(foodList.element, domId7Element) , $setParent(foodList, f_HTMLPanel2) , $removeFromParent(foodChooser) , $add_6(f_HTMLPanel2.children_0, foodChooser) , domId8Element.parentNode.replaceChild(foodChooser.element, domId8Element) , $setParent(foodChooser, f_HTMLPanel2) , $removeFromParent(foodTree) , $add_6(f_HTMLPanel2.children_0, foodTree) , domId9Element.parentNode.replaceChild(foodTree.element, domId9Element) , $setParent(foodTree, f_HTMLPanel2) , $removeFromParent(foodQuantityText) , $add_6(f_HTMLPanel2.children_0, foodQuantityText) , domId10Element.parentNode.replaceChild(foodQuantityText.element, domId10Element) , $setParent(foodQuantityText, f_HTMLPanel2) , $removeFromParent(foodLabel) , $add_6(f_HTMLPanel2.children_0, foodLabel) , domId11Element.parentNode.replaceChild(foodLabel.element, domId11Element) , $setParent(foodLabel, f_HTMLPanel2) , $removeFromParent(insulineLabel) , $add_6(f_HTMLPanel2.children_0, insulineLabel) , domId12Element.parentNode.replaceChild(insulineLabel.element, domId12Element) , $setParent(insulineLabel, f_HTMLPanel2) , $removeFromParent(insulineList) , $add_6(f_HTMLPanel2.children_0, insulineList) , domId13Element.parentNode.replaceChild(insulineList.element, domId13Element) , $setParent(insulineList, f_HTMLPanel2) , $removeFromParent(timeList) , $add_6(f_HTMLPanel2.children_0, timeList) , domId14Element.parentNode.replaceChild(timeList.element, domId14Element) , $setParent(timeList, f_HTMLPanel2) , $removeFromParent(measureText) , $add_6(f_HTMLPanel2.children_0, measureText) , domId15Element.parentNode.replaceChild(measureText.element, domId15Element) , $setParent(measureText, f_HTMLPanel2) , $removeFromParent(measureLabel) , $add_6(f_HTMLPanel2.children_0, measureLabel) , domId16Element.parentNode.replaceChild(measureLabel.element, domId16Element) , $setParent(measureLabel, f_HTMLPanel2) , $removeFromParent(addButton) , $add_6(f_HTMLPanel2.children_0, addButton) , domId17Element.parentNode.replaceChild(addButton.element, domId17Element) , $setParent(addButton, f_HTMLPanel2) , handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = $DiaryViewImpl_DiaryViewUiBinderImpl$1(new DiaryViewImpl_DiaryViewUiBinderImpl$1, this$static) , $addDomHandler(addButton, handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, ($clinit_133() , $clinit_133() , TYPE_2)) , handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2 = $DiaryViewImpl_DiaryViewUiBinderImpl$2(new DiaryViewImpl_DiaryViewUiBinderImpl$2, this$static) , $addDomHandler(actionList, handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2, ($clinit_131() , $clinit_131() , TYPE_1)) , handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3 = $DiaryViewImpl_DiaryViewUiBinderImpl$3(new DiaryViewImpl_DiaryViewUiBinderImpl$3, this$static) , $addDomHandler(measureText, handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3, ($clinit_159() , $clinit_159() , TYPE_4)) , handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames4 = $DiaryViewImpl_DiaryViewUiBinderImpl$4(new DiaryViewImpl_DiaryViewUiBinderImpl$4, this$static) , $addDomHandler(foodQuantityText, handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames4, TYPE_4) , handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames5 = $DiaryViewImpl_DiaryViewUiBinderImpl$5(new DiaryViewImpl_DiaryViewUiBinderImpl$5, this$static) , $addDomHandler(foodChooser, handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames5, ($clinit_164() , $clinit_164() , TYPE_6)) , handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames6 = $DiaryViewImpl_DiaryViewUiBinderImpl$6(new DiaryViewImpl_DiaryViewUiBinderImpl$6, this$static) , $addDomHandler(diaryTable, handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames6, TYPE_2) , this$static.actionList = actionList , this$static.calendar = calendar , this$static.deleteButton = deleteButton , this$static.diaryTable = diaryTable , this$static.foodChooser = foodChooser , this$static.foodLabel = foodLabel , this$static.foodList = foodList , this$static.foodQuantityText = foodQuantityText , this$static.foodTree = foodTree , this$static.insulineLabel = insulineLabel , this$static.insulineList = insulineList , this$static.measureLabel = measureLabel , this$static.measureText = measureText , this$static.timeList = timeList , this$static.timePicker = timePicker , $ensureInjected((!style_4 && (style_4 = new com_diacon_webclient_client_diary_view_DiaryViewImpl_DiaryViewUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$1) , style_4)) , f_DecoratorPanel1));
  $setTime_0(this$static.timePicker, 0, 0);
  $setReadOnly($getTimeTextBox(this$static.timePicker), true);
  for (e$array = ($clinit_53() , initValues(_3Lcom_diacon_webclient_shared_diary_EntryType_2_classLit, 179, 26, [MEASURE, FOOD, MEDICATION])) , e$index = 0 , e$max = e$array.length; e$index < e$max; ++e$index) {
    e = e$array[e$index];
    $insertItem_0(this$static.actionList, e.value_0, e.name_0, -1);
  }
  for (f$array = ($clinit_54() , initValues(_3Lcom_diacon_webclient_shared_diary_FoodTime_2_classLit, 180, 27, [BREAKFAST, LUNCH, DINNER, OTHER_0])) , f$index = 0 , f$max = f$array.length; f$index < f$max; ++f$index) {
    f = f$array[f$index];
    $insertItem_0(this$static.foodList, f.value_0, f.name_0, -1);
  }
  for (d$array = ($clinit_47() , initValues(_3Lcom_diacon_webclient_shared_diary_DayTime_2_classLit, 178, 25, [AFTER_WAKEUP, BEFORE_BREAKFAST, AFTER_BREAKFAST, BEFORE_LUNCH, AFTER_LUNCH, BEFORE_DINNER, AFTER_DINNER, OTHER])) , d$index = 0 , d$max = d$array.length; d$index < d$max; ++d$index) {
    d = d$array[d$index];
    $insertItem_0(this$static.timeList, d.value_0, d.name_0, -1);
  }
  for (i = 1; i < 10; ++i) {
    $insertItem(this$static.insulineList, '' + valueOf_3(i).value_0, -1);
  }
  fats = $TreeItem_0(new TreeItem, 'Fats, Oils and Sweets');
  ret = $TreeItem_0(new TreeItem, 'Olive Oil');
  fats.addItem(ret);
  ret_0 = $TreeItem_0(new TreeItem, 'Butter');
  fats.addItem(ret_0);
  $addItem_1(this$static.foodTree.root, fats);
  milk = $TreeItem_0(new TreeItem, 'Milk');
  ret_1 = $TreeItem_0(new TreeItem, 'Cheese');
  milk.addItem(ret_1);
  ret_2 = $TreeItem_0(new TreeItem, 'Milk');
  milk.addItem(ret_2);
  $addItem_1(this$static.foodTree.root, milk);
  meat = $TreeItem_0(new TreeItem, 'Meat and Other Proteins');
  ret_3 = $TreeItem_0(new TreeItem, 'Pork Steak');
  meat.addItem(ret_3);
  ret_4 = $TreeItem_0(new TreeItem, 'Chicken');
  meat.addItem(ret_4);
  $addItem_1(this$static.foodTree.root, meat);
  veggies = $TreeItem_0(new TreeItem, 'Fruits and Vegetables');
  ret_5 = $TreeItem_0(new TreeItem, 'Tomato');
  veggies.addItem(ret_5);
  ret_6 = $TreeItem_0(new TreeItem, 'Carrot');
  veggies.addItem(ret_6);
  ret_7 = $TreeItem_0(new TreeItem, 'Apple');
  veggies.addItem(ret_7);
  $addItem_1(this$static.foodTree.root, veggies);
  bread = $TreeItem_0(new TreeItem, 'Bread, Grains and Other Starches');
  ret_8 = $TreeItem_0(new TreeItem, 'White Bread');
  bread.addItem(ret_8);
  $addItem_1(this$static.foodTree.root, bread);
  $addHandler(this$static.calendar, $DiaryViewImpl$1(new DiaryViewImpl$1, this$static), getType_1());
  $addHandler(this$static.foodTree, $DiaryViewImpl$2(new DiaryViewImpl$2, this$static), (!TYPE_11 && (TYPE_11 = $GwtEvent$Type(new GwtEvent$Type)) , TYPE_11));
  $addDomHandler(this$static.foodTree, $DiaryViewImpl$3(new DiaryViewImpl$3, this$static), ($clinit_162() , $clinit_162() , TYPE_5));
  this$static.foodDialogBox = $PopupPanel(new PopupPanel);
  $add_3(this$static.foodDialogBox, this$static.foodTree);
  this$static.deleteButton.element.style.display = 'none';
  return this$static;
}

function $changeAction(this$static){
  var action;
  action = ($clinit_53() , valueOf(enum$map_0, $getValue_1(this$static.actionList, this$static.actionList.element.selectedIndex)));
  this$static.insulineLabel.element.style.display = action == MEDICATION?'':'none';
  this$static.insulineList.element.style.display = action == MEDICATION?'':'none';
  this$static.timeList.element.style.display = action == MEASURE?'':'none';
  this$static.measureText.element.style.display = action == MEASURE?'':'none';
  this$static.measureLabel.element.style.display = action == MEASURE?'':'none';
  this$static.foodList.element.style.display = action == FOOD?'':'none';
  this$static.foodQuantityText.element.style.display = action == FOOD?'':'none';
  this$static.foodLabel.element.style.display = action == FOOD?'':'none';
  this$static.foodChooser.element.style.display = action == FOOD?'':'none';
}

function $findNearestParentCell(node){
  var elem, tagName;
  while (node) {
    if (!!node && node.nodeType == 1) {
      elem = node;
      tagName = ($clinit_96() , elem).tagName;
      if ($equalsIgnoreCase('td', tagName) || $equalsIgnoreCase('th', tagName)) {
        return elem;
      }
    }
    node = node.parentNode;
  }
  return null;
}

function $getAction(this$static){
  return $clinit_53() , valueOf(enum$map_0, $getValue_1(this$static.actionList, this$static.actionList.element.selectedIndex));
}

function $getDayTime(this$static){
  return $clinit_47() , valueOf(enum$map, $getValue_1(this$static.timeList, this$static.timeList.element.selectedIndex));
}

function $getFoodTime(this$static){
  return $clinit_54() , valueOf(enum$map_1, $getValue_1(this$static.foodList, this$static.foodList.element.selectedIndex));
}

function $getInsuline(this$static){
  return __parseAndValidateInt($getValue_1(this$static.insulineList, this$static.insulineList.element.selectedIndex), 10, -2147483648, 2147483647);
}

function $getTime(this$static){
  var hour, minute;
  hour = '' + this$static.timePicker.timeModel.hour;
  hour.length == 1 && (hour = '0' + hour);
  minute = '' + this$static.timePicker.timeModel.minute;
  minute.length == 1 && (minute = '0' + minute);
  return hour + ':' + minute;
}

function $onActionChanged(this$static){
  !!this$static.presenter && $changeAction(this$static.presenter.view);
}

function $onAddButtonClicked_0(this$static){
  !!this$static.presenter && $onAddButtonClicked(this$static.presenter);
}

function $onCalendarValueChange(this$static, event_0){
  !!this$static.presenter && ($fireEvent_0(this$static.presenter.eventBus, $ShowCalendarEvent(new ShowCalendarEvent, dynamicCast(event_0.getValue(), 6))) , undefined);
}

function $onMouseOverFood(this$static){
  $setPopupPosition(this$static.foodDialogBox, $getAbsoluteLeft(($clinit_96() , this$static.foodChooser.element)), $getAbsoluteTop(this$static.foodChooser.element) + (parseInt(this$static.foodChooser.element['offsetHeight']) || 0));
  $show(this$static.foodDialogBox);
}

function $onSelectedFood(this$static, event_0){
  if ($getChildCount(event_0.selectedItem) == 0) {
    $hide(this$static.foodDialogBox);
    $setInnerText_0(this$static.foodChooser.element, $getInnerText(($clinit_96() , impl), event_0.selectedItem.contentElem));
  }
}

function $onTableClicked(this$static, event_0){
  var cell, columnDefinition, node, row, target, tr, parent_0;
  if (this$static.presenter) {
    target = ($clinit_96() , event_0.nativeEvent).target;
    node = target;
    cell = $findNearestParentCell(node);
    if (!cell) {
      return;
    }
    tr = (parent_0 = cell.parentNode , (!parent_0 || parent_0.nodeType != 1) && (parent_0 = null) , parent_0);
    row = tr.sectionRowIndex;
    if (cell) {
      columnDefinition = dynamicCast($get(this$static.columnDefinitions, cell.cellIndex), 5);
      !!columnDefinition && columnDefinition.isSelectable() && $onCheckClicked(this$static.presenter, dynamicCast($get(this$static.rowData, row), 2));
    }
  }
}

function $onlyNumeric(textBox, event_0){
  var keyCode;
  keyCode = $getCharCode(event_0.nativeEvent);
  if (keyCode == 8 || keyCode == 46 || keyCode == 13 || keyCode == 27 || keyCode == 39 || keyCode == 37 || keyCode == 9)
    return;
  if (null != String.fromCharCode($getCharCode(event_0.nativeEvent)).match(/\d/))
    return;
  !!textBox.currentEvent && (($clinit_96() , textBox.currentEvent).preventDefault() , undefined);
}

function $setDate(this$static, stringDate){
  var date;
  date = $parse($DateTimeFormat(new DateTimeFormat, 'yyyyMMdd', $getDateTimeConstants(($clinit_202() , $clinit_202() , instance_0))), stringDate, false);
  $setValue_0(this$static.calendar, date, false);
  $setCurrentMonth_0(this$static.calendar, date);
}

function $setRowData(this$static, rowData){
  var cell, child, i, j, row, sb, t, table, tbody;
  this$static.rowData = rowData;
  table = ($clinit_96() , $doc).createElement('table');
  table.appendChild(tbody = $doc.createElement('tbody'));
  if (rowData.size_0 == 0) {
    row = tbody.insertRow(-1);
    cell = row.insertCell(-1);
    $addClassName(cell, 'error-Message');
    cell.innerHTML = '<div>Sorry, no entries found<\/div>';
  }
  for (i = 0; i < rowData.size_0; ++i) {
    row = tbody.insertRow(-1);
    $addClassName(row, 'diary-ListRow');
    t = (checkIndex(i, rowData.size_0) , rowData.array[i]);
    for (j = 0; j < this$static.columnDefinitions.size_0; ++j) {
      cell = row.insertCell(-1);
      sb = $StringBuilder(new StringBuilder);
      dynamicCast($get(this$static.columnDefinitions, j), 5).render(t, sb);
      switch (j) {
        case 0:
          $addClassName(cell, 'diary-CheckCell');
          break;
        case 1:
          $addClassName(cell, 'diary-HourCell');
          break;
        case 2:
          $addClassName(cell, 'diary-ActionCell');
          break;
        default:$addClassName(cell, 'diary-DataCell');
      }
      cell.innerHTML = sb.impl.string || '';
      child = $getFirstChildElement(cell);
      if (child) {
        $maybeInitializeEventSystem();
        $sinkEventsImpl(child, 6144);
      }
    }
  }
  $setInnerHTML(this$static.diaryTable.element, table.innerHTML);
}

function getClass_23(){
  return Lcom_diacon_webclient_client_diary_view_DiaryViewImpl_2_classLit;
}

function DiaryViewImpl(){
}

_ = DiaryViewImpl.prototype = new Composite;
_.getClass$ = getClass_23;
_.typeId$ = 17;
_.actionList = null;
_.calendar = null;
_.columnDefinitions = null;
_.deleteButton = null;
_.diaryTable = null;
_.foodChooser = null;
_.foodDialogBox = null;
_.foodLabel = null;
_.foodList = null;
_.foodQuantityText = null;
_.foodTree = null;
_.insulineLabel = null;
_.insulineList = null;
_.measureLabel = null;
_.measureText = null;
_.presenter = null;
_.rowData = null;
_.timeList = null;
_.timePicker = null;
function $DiaryViewImpl$1(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function getClass_24(){
  return Lcom_diacon_webclient_client_diary_view_DiaryViewImpl$1_2_classLit;
}

function onValueChange_0(event_0){
  $onCalendarValueChange(this.this$0, event_0);
}

function DiaryViewImpl$1(){
}

_ = DiaryViewImpl$1.prototype = new Object_0;
_.getClass$ = getClass_24;
_.onValueChange = onValueChange_0;
_.typeId$ = 18;
_.this$0 = null;
function $DiaryViewImpl$2(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function getClass_25(){
  return Lcom_diacon_webclient_client_diary_view_DiaryViewImpl$2_2_classLit;
}

function DiaryViewImpl$2(){
}

_ = DiaryViewImpl$2.prototype = new Object_0;
_.getClass$ = getClass_25;
_.typeId$ = 19;
_.this$0 = null;
function $DiaryViewImpl$3(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function getClass_26(){
  return Lcom_diacon_webclient_client_diary_view_DiaryViewImpl$3_2_classLit;
}

function DiaryViewImpl$3(){
}

_ = DiaryViewImpl$3.prototype = new Object_0;
_.getClass$ = getClass_26;
_.typeId$ = 20;
_.this$0 = null;
function $DiaryViewImpl_DiaryViewUiBinderImpl$1(this$static, val$owner){
  this$static.val$owner = val$owner;
  return this$static;
}

function getClass_27(){
  return Lcom_diacon_webclient_client_diary_view_DiaryViewImpl_1DiaryViewUiBinderImpl$1_2_classLit;
}

function onClick(event_0){
  $onAddButtonClicked_0(this.val$owner);
}

function DiaryViewImpl_DiaryViewUiBinderImpl$1(){
}

_ = DiaryViewImpl_DiaryViewUiBinderImpl$1.prototype = new Object_0;
_.getClass$ = getClass_27;
_.onClick = onClick;
_.typeId$ = 21;
_.val$owner = null;
function $DiaryViewImpl_DiaryViewUiBinderImpl$2(this$static, val$owner){
  this$static.val$owner = val$owner;
  return this$static;
}

function getClass_28(){
  return Lcom_diacon_webclient_client_diary_view_DiaryViewImpl_1DiaryViewUiBinderImpl$2_2_classLit;
}

function DiaryViewImpl_DiaryViewUiBinderImpl$2(){
}

_ = DiaryViewImpl_DiaryViewUiBinderImpl$2.prototype = new Object_0;
_.getClass$ = getClass_28;
_.typeId$ = 22;
_.val$owner = null;
function $DiaryViewImpl_DiaryViewUiBinderImpl$3(this$static, val$owner){
  this$static.val$owner = val$owner;
  return this$static;
}

function getClass_29(){
  return Lcom_diacon_webclient_client_diary_view_DiaryViewImpl_1DiaryViewUiBinderImpl$3_2_classLit;
}

function onKeyPress(event_0){
  $onlyNumeric(this.val$owner.measureText, event_0);
}

function DiaryViewImpl_DiaryViewUiBinderImpl$3(){
}

_ = DiaryViewImpl_DiaryViewUiBinderImpl$3.prototype = new Object_0;
_.getClass$ = getClass_29;
_.onKeyPress = onKeyPress;
_.typeId$ = 23;
_.val$owner = null;
function $DiaryViewImpl_DiaryViewUiBinderImpl$4(this$static, val$owner){
  this$static.val$owner = val$owner;
  return this$static;
}

function getClass_30(){
  return Lcom_diacon_webclient_client_diary_view_DiaryViewImpl_1DiaryViewUiBinderImpl$4_2_classLit;
}

function onKeyPress_0(event_0){
  $onlyNumeric(this.val$owner.foodQuantityText, event_0);
}

function DiaryViewImpl_DiaryViewUiBinderImpl$4(){
}

_ = DiaryViewImpl_DiaryViewUiBinderImpl$4.prototype = new Object_0;
_.getClass$ = getClass_30;
_.onKeyPress = onKeyPress_0;
_.typeId$ = 24;
_.val$owner = null;
function $DiaryViewImpl_DiaryViewUiBinderImpl$5(this$static, val$owner){
  this$static.val$owner = val$owner;
  return this$static;
}

function getClass_31(){
  return Lcom_diacon_webclient_client_diary_view_DiaryViewImpl_1DiaryViewUiBinderImpl$5_2_classLit;
}

function onMouseOver(event_0){
  $onMouseOverFood(this.val$owner);
}

function DiaryViewImpl_DiaryViewUiBinderImpl$5(){
}

_ = DiaryViewImpl_DiaryViewUiBinderImpl$5.prototype = new Object_0;
_.getClass$ = getClass_31;
_.onMouseOver = onMouseOver;
_.typeId$ = 25;
_.val$owner = null;
function $DiaryViewImpl_DiaryViewUiBinderImpl$6(this$static, val$owner){
  this$static.val$owner = val$owner;
  return this$static;
}

function getClass_32(){
  return Lcom_diacon_webclient_client_diary_view_DiaryViewImpl_1DiaryViewUiBinderImpl$6_2_classLit;
}

function onClick_0(event_0){
  $onTableClicked(this.val$owner, event_0);
}

function DiaryViewImpl_DiaryViewUiBinderImpl$6(){
}

_ = DiaryViewImpl_DiaryViewUiBinderImpl$6.prototype = new Object_0;
_.getClass$ = getClass_32;
_.onClick = onClick_0;
_.typeId$ = 26;
_.val$owner = null;
var style_4 = null;
function $ensureInjected(this$static){
  if (!this$static.injected) {
    this$static.injected = true;
    $clinit_124();
    $push_0(toInject, ($clinit_202() , '.G1gdndmpB{border:solid #69aae2 1px;background-color:#d0e4f6;}.G1gdndmpF{font-size:1.2em;font-weight:bold;background-color:#69aae2;color:white;text-align:center;}.G1gdndmpC{margin-left:5px;margin-bottom:5px;background:#d0e4f6;color:#4f9bde;border:solid #69aae2 1px;}.G1gdndmpE{text-align:center;padding:4px;width:150px;background:#d0e4f6;color:#4f9bde;border:solid #4f9bde 1px;margin-right:6px;}.G1gdndmpA{background:#69aae2;color:white;}.G1gdndmpD{width:100%;height:400px;vertical-align:top;}'));
    schedule();
    return true;
  }
  return false;
}

function getClass_33(){
  return Lcom_diacon_webclient_client_diary_view_com_1diacon_1webclient_1client_1diary_1view_1DiaryViewImpl_1DiaryViewUiBinderImpl_1GenBundle_1default_1InlineClientBundleGenerator$1_2_classLit;
}

function com_diacon_webclient_client_diary_view_DiaryViewImpl_DiaryViewUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$1(){
}

_ = com_diacon_webclient_client_diary_view_DiaryViewImpl_DiaryViewUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$1.prototype = new Object_0;
_.getClass$ = getClass_33;
_.typeId$ = 0;
_.injected = false;
function createCallbackFunction(obj, callbackName){
  tmpcallback = function(j){
    obj.onRequestComplete(j);
  }
  ;
  eval('window.' + callbackName + '=tmpcallback');
}

function get_0(url, handler){
  var callbackName, scr;
  callbackName = 'callback' + (handler.typeMarker$ == nullMethod || handler.typeId$ == 2?handler.hashCode$():handler.$H || (handler.$H = ++sNextHashId));
  createCallbackFunction(handler, callbackName);
  scr = document.createElement('script');
  scr.setAttribute('language', 'JavaScript');
  scr.setAttribute('src', url + callbackName);
  document.getElementsByTagName('body')[0].appendChild(scr);
}

function $RequestBuilder(this$static){
  this$static.parameters = initDim(_3Ljava_lang_String_2_classLit, 229, 1, 10, 0);
  return this$static;
}

function $addParameterWithoutFormat(this$static, parameterName, parameterValue){
  this$static.parameters[this$static.parameterNumber] = '"' + parameterName + '":' + parameterValue;
  ++this$static.parameterNumber;
}

function $getUrl(this$static){
  var i, url;
  url = 'http://89.130.251.75:8000/diaconserver?json={"action":' + this$static.action + ',"parameters":{';
  for (i = 0; i < this$static.parameterNumber; ++i) {
    i > 0 && (url = url + ',');
    url = url + this$static.parameters[i];
  }
  url = url + '}}';
  url = (throwIfNull('decodedURL', url) , encodeURI(url)) + '&callback=';
  return url;
}

function getClass_34(){
  return Lcom_diacon_webclient_request_RequestBuilder_2_classLit;
}

function RequestBuilder(){
}

_ = RequestBuilder.prototype = new Object_0;
_.getClass$ = getClass_34;
_.typeId$ = 0;
_.action = null;
_.parameterNumber = 0;
function equals_1(other){
  return this === (other == null?null:other);
}

function getClass_35(){
  return Ljava_lang_Enum_2_classLit;
}

function hashCode_2(){
  return this.$H || (this.$H = ++sNextHashId);
}

function toString_4(){
  return this.name_0;
}

function valueOf(map, name_0){
  var result;
  result = map['_' + name_0];
  if (!result) {
    throw $IllegalArgumentException(new IllegalArgumentException, name_0);
  }
  return result;
}

function Enum(){
}

_ = Enum.prototype = new Object_0;
_.equals$ = equals_1;
_.getClass$ = getClass_35;
_.hashCode$ = hashCode_2;
_.toString$ = toString_4;
_.typeId$ = 27;
_.name_0 = null;
_.ordinal = 0;
function $clinit_47(){
  $clinit_47 = nullMethod;
  AFTER_WAKEUP = $DayTime(new DayTime, 'AFTER_WAKEUP', 0, 'After Wake Up');
  BEFORE_BREAKFAST = $DayTime(new DayTime, 'BEFORE_BREAKFAST', 1, 'Before Breakfast');
  AFTER_BREAKFAST = $DayTime(new DayTime, 'AFTER_BREAKFAST', 2, 'After Breakfast');
  BEFORE_LUNCH = $DayTime(new DayTime, 'BEFORE_LUNCH', 3, 'Before Lunch');
  AFTER_LUNCH = $DayTime(new DayTime, 'AFTER_LUNCH', 4, 'After Lunch');
  BEFORE_DINNER = $DayTime(new DayTime, 'BEFORE_DINNER', 5, 'Before Dinner');
  AFTER_DINNER = $DayTime(new DayTime, 'AFTER_DINNER', 6, 'After Dinner');
  OTHER = $DayTime(new DayTime, 'OTHER', 7, 'Other');
  enum$map = {_AFTER_WAKEUP:AFTER_WAKEUP, _BEFORE_BREAKFAST:BEFORE_BREAKFAST, _AFTER_BREAKFAST:AFTER_BREAKFAST, _BEFORE_LUNCH:BEFORE_LUNCH, _AFTER_LUNCH:AFTER_LUNCH, _BEFORE_DINNER:BEFORE_DINNER, _AFTER_DINNER:AFTER_DINNER, _OTHER:OTHER};
}

function $DayTime(this$static, enum$name, enum$ordinal, value){
  $clinit_47();
  this$static.name_0 = enum$name;
  this$static.ordinal = enum$ordinal;
  this$static.value_0 = value;
  return this$static;
}

function getClass_36(){
  return Lcom_diacon_webclient_shared_diary_DayTime_2_classLit;
}

function values_0(){
  $clinit_47();
  return initValues(_3Lcom_diacon_webclient_shared_diary_DayTime_2_classLit, 178, 25, [AFTER_WAKEUP, BEFORE_BREAKFAST, AFTER_BREAKFAST, BEFORE_LUNCH, AFTER_LUNCH, BEFORE_DINNER, AFTER_DINNER, OTHER]);
}

function DayTime(){
}

_ = DayTime.prototype = new Enum;
_.getClass$ = getClass_36;
_.typeId$ = 28;
_.value_0 = null;
var AFTER_BREAKFAST, AFTER_DINNER, AFTER_LUNCH, AFTER_WAKEUP, BEFORE_BREAKFAST, BEFORE_DINNER, BEFORE_LUNCH, OTHER, enum$map = null;
function getClass_37(){
  return Lcom_diacon_webclient_shared_diary_DiaryData_2_classLit;
}

function DiaryData(){
}

_ = DiaryData.prototype = new Object_0;
_.getClass$ = getClass_37;
_.typeId$ = 29;
function $DiaryDataFood(this$static, jso){
  this$static.food_0 = jso.food;
  this$static.foodTime_0 = ($clinit_54() , valueOf(enum$map_1, jso.foodTime));
  this$static.foodQuantity_0 = jso.foodQuantity;
  return this$static;
}

function $DiaryDataFood_0(this$static, foodTime, food, foodQuantity){
  this$static.food_0 = food;
  this$static.foodTime_0 = foodTime;
  this$static.foodQuantity_0 = foodQuantity;
  return this$static;
}

function getClass_38(){
  return Lcom_diacon_webclient_shared_diary_DiaryDataFood_2_classLit;
}

function getFormattedData(){
  return this.foodTime_0.value_0 + ' ' + this.foodQuantity_0 + ' gr. of ' + this.food_0;
}

function toJSON(){
  return '{"food":"' + this.food_0 + '","foodTime":"' + this.foodTime_0.name_0 + '","foodQuantity":' + this.foodQuantity_0 + '}';
}

function DiaryDataFood(){
}

_ = DiaryDataFood.prototype = new DiaryData;
_.getClass$ = getClass_38;
_.getFormattedData = getFormattedData;
_.toJSON = toJSON;
_.typeId$ = 30;
_.food_0 = null;
_.foodQuantity_0 = 0;
_.foodTime_0 = null;
function $DiaryDataMeasure(this$static, jso){
  this$static.dayTime_0 = ($clinit_47() , valueOf(enum$map, jso.dayTime));
  this$static.measure_0 = jso.measure;
  return this$static;
}

function $DiaryDataMeasure_0(this$static, dayTime, measure){
  this$static.dayTime_0 = dayTime;
  this$static.measure_0 = measure;
  return this$static;
}

function getClass_39(){
  return Lcom_diacon_webclient_shared_diary_DiaryDataMeasure_2_classLit;
}

function getFormattedData_0(){
  return this.dayTime_0.value_0 + ': ' + this.measure_0 + ' mg/dl';
}

function toJSON_0(){
  return '{"dayTime":"' + this.dayTime_0.name_0 + '","measure":' + this.measure_0 + '}';
}

function DiaryDataMeasure(){
}

_ = DiaryDataMeasure.prototype = new DiaryData;
_.getClass$ = getClass_39;
_.getFormattedData = getFormattedData_0;
_.toJSON = toJSON_0;
_.typeId$ = 31;
_.dayTime_0 = null;
_.measure_0 = 0;
function $DiaryDataMedication(this$static, jso){
  this$static.insulineUnits_0 = jso.insulineUnits;
  return this$static;
}

function $DiaryDataMedication_0(this$static, insulineUnits){
  this$static.insulineUnits_0 = insulineUnits;
  return this$static;
}

function getClass_40(){
  return Lcom_diacon_webclient_shared_diary_DiaryDataMedication_2_classLit;
}

function getFormattedData_1(){
  return '' + this.insulineUnits_0 + ' Insuline Units';
}

function toJSON_1(){
  return '{"insulineUnits":' + this.insulineUnits_0 + '}';
}

function DiaryDataMedication(){
}

_ = DiaryDataMedication.prototype = new DiaryData;
_.getClass$ = getClass_40;
_.getFormattedData = getFormattedData_1;
_.toJSON = toJSON_1;
_.typeId$ = 32;
_.insulineUnits_0 = 0;
function $DiaryEntry(this$static, type, date, time, data){
  this$static.id_0 = 0;
  this$static.date_0 = date;
  this$static.time_0 = time;
  this$static.type_0 = type;
  this$static.data_0 = data;
  return this$static;
}

function $DiaryEntry_0(this$static, diaryEntry){
  var foodData, measureData, medicationData;
  this$static.id_0 = diaryEntry.id;
  this$static.date_0 = diaryEntry.date;
  this$static.time_0 = diaryEntry.time;
  this$static.type_0 = ($clinit_53() , valueOf(enum$map_0, diaryEntry.type));
  switch (this$static.type_0.ordinal) {
    case 1:
      foodData = diaryEntry.data;
      this$static.data_0 = $DiaryDataFood(new DiaryDataFood, foodData);
      break;
    case 2:
      medicationData = diaryEntry.data;
      this$static.data_0 = $DiaryDataMedication(new DiaryDataMedication, medicationData);
      break;
    case 0:
      measureData = diaryEntry.data;
      this$static.data_0 = $DiaryDataMeasure(new DiaryDataMeasure, measureData);
  }
  return this$static;
}

function $toJSON(this$static){
  return '{"type":"' + this$static.type_0.name_0 + '","date":"' + this$static.date_0 + '","time":"' + this$static.time_0 + '","data":' + this$static.data_0.toJSON() + '}';
}

function getClass_41(){
  return Lcom_diacon_webclient_shared_diary_DiaryEntry_2_classLit;
}

function DiaryEntry(){
}

_ = DiaryEntry.prototype = new Object_0;
_.getClass$ = getClass_41;
_.typeId$ = 33;
_.data_0 = null;
_.date_0 = null;
_.id_0 = 0;
_.time_0 = null;
_.type_0 = null;
function $clinit_53(){
  $clinit_53 = nullMethod;
  MEASURE = $EntryType(new EntryType, 'MEASURE', 0, 'Measure');
  FOOD = $EntryType(new EntryType, 'FOOD', 1, 'Food');
  MEDICATION = $EntryType(new EntryType, 'MEDICATION', 2, 'Medication');
  enum$map_0 = {_MEASURE:MEASURE, _FOOD:FOOD, _MEDICATION:MEDICATION};
}

function $EntryType(this$static, enum$name, enum$ordinal, value){
  $clinit_53();
  this$static.name_0 = enum$name;
  this$static.ordinal = enum$ordinal;
  this$static.value_0 = value;
  return this$static;
}

function getClass_42(){
  return Lcom_diacon_webclient_shared_diary_EntryType_2_classLit;
}

function values_1(){
  $clinit_53();
  return initValues(_3Lcom_diacon_webclient_shared_diary_EntryType_2_classLit, 179, 26, [MEASURE, FOOD, MEDICATION]);
}

function EntryType(){
}

_ = EntryType.prototype = new Enum;
_.getClass$ = getClass_42;
_.typeId$ = 34;
_.value_0 = null;
var FOOD, MEASURE, MEDICATION, enum$map_0 = null;
function $clinit_54(){
  $clinit_54 = nullMethod;
  BREAKFAST = $FoodTime(new FoodTime, 'BREAKFAST', 0, 'Breakfast');
  LUNCH = $FoodTime(new FoodTime, 'LUNCH', 1, 'Lunch');
  DINNER = $FoodTime(new FoodTime, 'DINNER', 2, 'Dinner');
  OTHER_0 = $FoodTime(new FoodTime, 'OTHER', 3, 'Other');
  enum$map_1 = {_BREAKFAST:BREAKFAST, _LUNCH:LUNCH, _DINNER:DINNER, _OTHER:OTHER_0};
}

function $FoodTime(this$static, enum$name, enum$ordinal, value){
  $clinit_54();
  this$static.name_0 = enum$name;
  this$static.ordinal = enum$ordinal;
  this$static.value_0 = value;
  return this$static;
}

function getClass_43(){
  return Lcom_diacon_webclient_shared_diary_FoodTime_2_classLit;
}

function values_2(){
  $clinit_54();
  return initValues(_3Lcom_diacon_webclient_shared_diary_FoodTime_2_classLit, 180, 27, [BREAKFAST, LUNCH, DINNER, OTHER_0]);
}

function FoodTime(){
}

_ = FoodTime.prototype = new Enum;
_.getClass$ = getClass_43;
_.typeId$ = 35;
_.value_0 = null;
var BREAKFAST, DINNER, LUNCH, OTHER_0, enum$map_1 = null;
function $cancel(this$static){
  if (!this$static.running) {
    return;
  }
  $remove_0(animations, this$static);
  this$static.started && this$static.onComplete();
  this$static.started = false;
  this$static.running = false;
}

function $run(this$static, duration, startTime){
  $cancel(this$static);
  this$static.running = true;
  this$static.duration = duration;
  this$static.startTime = startTime;
  if ($update(this$static, (new Date).getTime())) {
    return;
  }
  if (!animations) {
    animations = $ArrayList(new ArrayList);
    animationTimer = ($clinit_63() , $clinit_62() , new Animation$1);
  }
  $add(animations, this$static);
  animations.size_0 == 1 && $schedule(animationTimer, 25);
}

function $update(this$static, curTime){
  var finished, progress;
  finished = curTime >= this$static.startTime + this$static.duration;
  if (this$static.started && !finished) {
    progress = (curTime - this$static.startTime) / this$static.duration;
    this$static.onUpdate((1 + Math.cos(3.141592653589793 + progress * 3.141592653589793)) / 2);
    return false;
  }
  if (!this$static.started && curTime >= this$static.startTime) {
    this$static.started = true;
    this$static.onStart();
  }
  if (finished) {
    this$static.onComplete();
    this$static.started = false;
    this$static.running = false;
    return true;
  }
  return false;
}

function getClass_45(){
  return Lcom_google_gwt_animation_client_Animation_2_classLit;
}

function onComplete(){
  this.onUpdate((1 + Math.cos(6.283185307179586)) / 2);
}

function onStart(){
  this.onUpdate((1 + Math.cos(3.141592653589793)) / 2);
}

function updateAnimations(){
  var animation, animation$array, animation$index, animation$max, curAnimations, curTime;
  curAnimations = initDim(_3Lcom_google_gwt_animation_client_Animation_2_classLit, 181, 28, animations.size_0, 0);
  curAnimations = dynamicCast($toArray_0(animations, curAnimations), 7);
  curTime = (new Date).getTime();
  for (animation$array = curAnimations , animation$index = 0 , animation$max = animation$array.length; animation$index < animation$max; ++animation$index) {
    animation = animation$array[animation$index];
    animation.running && $update(animation, curTime) && $remove_0(animations, animation);
  }
  animations.size_0 > 0 && $schedule(animationTimer, 25);
}

function Animation(){
}

_ = Animation.prototype = new Object_0;
_.getClass$ = getClass_45;
_.onComplete = onComplete;
_.onStart = onStart;
_.typeId$ = 36;
_.duration = -1;
_.running = false;
_.startTime = -1;
_.started = false;
var animationTimer = null, animations = null;
function $clinit_62(){
  $clinit_62 = nullMethod;
  timers = $ArrayList(new ArrayList);
  addCloseHandler(new Timer$1);
}

function $cancel_0(this$static){
  this$static.isRepeating?($wnd.clearInterval(this$static.timerId) , undefined):($wnd.clearTimeout(this$static.timerId) , undefined);
  $remove_0(timers, this$static);
}

function $schedule(this$static, delayMillis){
  if (delayMillis <= 0) {
    throw $IllegalArgumentException(new IllegalArgumentException, 'must be positive');
  }
  $cancel_0(this$static);
  this$static.isRepeating = false;
  this$static.timerId = createTimeout(this$static, delayMillis);
  $add(timers, this$static);
}

function createTimeout(timer, delay){
  return $wnd.setTimeout($entry(function(){
    timer.fire();
  }
  ), delay);
}

function fire(){
  !this.isRepeating && $remove_0(timers, this);
  this.run();
}

function getClass_46(){
  return Lcom_google_gwt_user_client_Timer_2_classLit;
}

function Timer(){
}

_ = Timer.prototype = new Object_0;
_.fire = fire;
_.getClass$ = getClass_46;
_.typeId$ = 37;
_.isRepeating = false;
_.timerId = 0;
var timers;
function $clinit_63(){
  $clinit_63 = nullMethod;
  $clinit_62();
}

function getClass_47(){
  return Lcom_google_gwt_animation_client_Animation$1_2_classLit;
}

function run(){
  updateAnimations();
}

function Animation$1(){
}

_ = Animation$1.prototype = new Timer;
_.getClass$ = getClass_47;
_.run = run;
_.typeId$ = 38;
function $toString_2(this$static){
  var className, msg;
  className = this$static.getClass$().typeName;
  msg = this$static.getMessage();
  if (msg != null) {
    return className + ': ' + msg;
  }
   else {
    return className;
  }
}

function getClass_48(){
  return Ljava_lang_Throwable_2_classLit;
}

function getMessage(){
  return this.detailMessage;
}

function toString_6(){
  return $toString_2(this);
}

_ = Throwable.prototype;
_.getClass$ = getClass_48;
_.getMessage = getMessage;
_.toString$ = toString_6;
function getClass_49(){
  return Ljava_lang_Exception_2_classLit;
}

_ = Exception.prototype;
_.getClass$ = getClass_49;
function $RuntimeException(this$static, message){
  $fillInStackTrace();
  this$static.detailMessage = message;
  return this$static;
}

function getClass_50(){
  return Ljava_lang_RuntimeException_2_classLit;
}

_ = RuntimeException.prototype;
_.getClass$ = getClass_50;
function getClass_51(){
  return Lcom_google_gwt_core_client_JavaScriptException_2_classLit;
}

function getDescription(e){
  if (e != null && e.typeMarker$ != nullMethod && e.typeId$ != 2) {
    return getDescription0(dynamicCastJso(e));
  }
   else {
    return e + '';
  }
}

function getDescription0(e){
  return e == null?null:e.message;
}

function getMessage_0(){
  this.message_0 == null && (this.name_0 = getName(this.e) , this.description = getDescription(this.e) , this.message_0 = '(' + this.name_0 + '): ' + this.description + getProperties(this.e) , undefined);
  return this.message_0;
}

function getName(e){
  if (e == null) {
    return 'null';
  }
   else if (e != null && e.typeMarker$ != nullMethod && e.typeId$ != 2) {
    return getName0(dynamicCastJso(e));
  }
   else if (e != null && canCast(e.typeId$, 1)) {
    return 'String';
  }
   else {
    return (e.typeMarker$ == nullMethod || e.typeId$ == 2?e.getClass$():Lcom_google_gwt_core_client_JavaScriptObject_2_classLit).typeName;
  }
}

function getName0(e){
  return e == null?null:e.name;
}

function getProperties(e){
  return e != null && e.typeMarker$ != nullMethod && e.typeId$ != 2?getProperties0(dynamicCastJso(e)):'';
}

function getProperties0(e){
  var result = '';
  try {
    for (prop in e) {
      if (prop != 'name' && prop != 'message' && prop != 'toString') {
        try {
          result += '\n ' + prop + ': ' + e[prop];
        }
         catch (ignored) {
        }
      }
    }
  }
   catch (ignored) {
  }
  return result;
}

_ = JavaScriptException.prototype;
_.getClass$ = getClass_51;
_.getMessage = getMessage_0;
function $push_0(this$static, value){
  this$static[this$static.length] = value;
}

function $clinit_72(){
  var out;
  $clinit_72 = nullMethod;
  escapeTable = (out = ['\\u0000', '\\u0001', '\\u0002', '\\u0003', '\\u0004', '\\u0005', '\\u0006', '\\u0007', '\\b', '\\t', '\\n', '\\u000B', '\\f', '\\r', '\\u000E', '\\u000F', '\\u0010', '\\u0011', '\\u0012', '\\u0013', '\\u0014', '\\u0015', '\\u0016', '\\u0017', '\\u0018', '\\u0019', '\\u001A', '\\u001B', '\\u001C', '\\u001D', '\\u001E', '\\u001F'] , out[34] = '\\"' , out[92] = '\\\\' , out[8232] = '\\u2028' , out[8233] = '\\u2029' , out);
}

function escapeValue(toEscape){
  $clinit_72();
  var s = toEscape.replace(/[\x00-\x1F\u2028\u2029"\\]/g, function(x){
    var lookedUp;
    return lookedUp = escapeTable[x.charCodeAt(0)] , lookedUp == null?x:lookedUp;
  }
  );
  return '"' + s + '"';
}

var escapeTable;
function getClass_52(){
  return Lcom_google_gwt_core_client_Scheduler_2_classLit;
}

_ = Scheduler.prototype;
_.getClass$ = getClass_52;
function getClass_53(){
  return Lcom_google_gwt_core_client_impl_AsyncFragmentLoader_2_classLit;
}

_ = AsyncFragmentLoader.prototype;
_.getClass$ = getClass_53;
function getClass_54(){
  return Lcom_google_gwt_core_client_impl_AsyncFragmentLoader$BoundedIntQueue_2_classLit;
}

_ = AsyncFragmentLoader$BoundedIntQueue.prototype;
_.getClass$ = getClass_54;
function getClass_55(){
  return Lcom_google_gwt_core_client_impl_AsyncFragmentLoader$HttpDownloadFailure_2_classLit;
}

_ = AsyncFragmentLoader$HttpDownloadFailure.prototype;
_.getClass$ = getClass_55;
function getClass_56(){
  return Lcom_google_gwt_core_client_impl_AsyncFragmentLoader$InitialFragmentDownloadFailed_2_classLit;
}

_ = AsyncFragmentLoader$InitialFragmentDownloadFailed.prototype;
_.getClass$ = getClass_56;
function getClass_57(){
  return Lcom_google_gwt_core_client_impl_AsyncFragmentLoader$XhrLoadingStrategy$1_2_classLit;
}

_ = AsyncFragmentLoader$XhrLoadingStrategy$1.prototype;
_.getClass$ = getClass_57;
function getClass_58(){
  return Lcom_google_gwt_core_client_impl_SchedulerImpl_2_classLit;
}

_ = SchedulerImpl.prototype;
_.getClass$ = getClass_58;
function getClass_59(){
  return Lcom_google_gwt_core_client_impl_SchedulerImpl$1_2_classLit;
}

_ = SchedulerImpl$1.prototype;
_.getClass$ = getClass_59;
function getClass_60(){
  return Lcom_google_gwt_core_client_impl_SchedulerImpl$2_2_classLit;
}

_ = SchedulerImpl$2.prototype;
_.getClass$ = getClass_60;
function getClass_61(){
  return Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2_classLit;
}

_ = StackTraceCreator$Collector.prototype;
_.getClass$ = getClass_61;
function getClass_62(){
  return Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorMoz_2_classLit;
}

_ = StackTraceCreator$CollectorMoz.prototype;
_.getClass$ = getClass_62;
function getClass_63(){
  return Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorChrome_2_classLit;
}

_ = StackTraceCreator$CollectorChrome.prototype;
_.getClass$ = getClass_63;
function getClass_64(){
  return Lcom_google_gwt_core_client_impl_StringBufferImpl_2_classLit;
}

_ = StringBufferImpl.prototype;
_.getClass$ = getClass_64;
function getClass_65(){
  return Lcom_google_gwt_core_client_impl_StringBufferImplAppend_2_classLit;
}

_ = StringBufferImplAppend.prototype;
_.getClass$ = getClass_65;
function $eventGetKeyCode(evt){
  return evt.which || evt.keyCode || 0;
}

function $getBodyOffsetLeft(){
  return 0;
}

function $getBodyOffsetTop(){
  return 0;
}

function $getFirstChildElement(elem){
  var child = elem.firstChild;
  while (child && child.nodeType != 1)
    child = child.nextSibling;
  return child;
}

function $getInnerText(this$static, node){
  var text = '', child = node.firstChild;
  while (child) {
    child.nodeType == 1?(text += this$static.getInnerText(child)):child.nodeValue && (text += child.nodeValue);
    child = child.nextSibling;
  }
  return text;
}

function $getNextSiblingElement(elem){
  var sib = elem.nextSibling;
  while (sib && sib.nodeType != 1)
    sib = sib.nextSibling;
  return sib;
}

function $scrollIntoView(elem){
  var left = elem.offsetLeft, top_0 = elem.offsetTop;
  var width = elem.offsetWidth, height = elem.offsetHeight;
  if (elem.parentNode != elem.offsetParent) {
    left -= elem.parentNode.offsetLeft;
    top_0 -= elem.parentNode.offsetTop;
  }
  var cur = elem.parentNode;
  while (cur && cur.nodeType == 1) {
    left < cur.scrollLeft && (cur.scrollLeft = left);
    left + width > cur.scrollLeft + cur.clientWidth && (cur.scrollLeft = left + width - cur.clientWidth);
    top_0 < cur.scrollTop && (cur.scrollTop = top_0);
    top_0 + height > cur.scrollTop + cur.clientHeight && (cur.scrollTop = top_0 + height - cur.clientHeight);
    var offsetLeft = cur.offsetLeft, offsetTop = cur.offsetTop;
    if (cur.parentNode != cur.offsetParent) {
      offsetLeft -= cur.parentNode.offsetLeft;
      offsetTop -= cur.parentNode.offsetTop;
    }
    left += offsetLeft - cur.scrollLeft;
    top_0 += offsetTop - cur.scrollTop;
    cur = cur.parentNode;
  }
}

function $setInnerText(elem, text){
  while (elem.firstChild) {
    elem.removeChild(elem.firstChild);
  }
  text != null && elem.appendChild(elem.ownerDocument.createTextNode(text));
}

function getClass_66(){
  return Lcom_google_gwt_dom_client_DOMImpl_2_classLit;
}

function getInnerText(node){
  return $getInnerText(this, node);
}

_ = DOMImpl.prototype;
_.getClass$ = getClass_66;
_.getInnerText = getInnerText;
function $createMouseEvent(doc, type, canBubble, cancelable, detail, screenX, screenY, clientX, clientY, ctrlKey, altKey, shiftKey, metaKey, button, relatedTarget){
  button == 1?(button = 0):button == 4?(button = 1):(button = 2);
  var evt = doc.createEvent('MouseEvents');
  evt.initMouseEvent(type, canBubble, cancelable, null, detail, screenX, screenY, clientX, clientY, ctrlKey, altKey, shiftKey, metaKey, button, relatedTarget);
  return evt;
}

function $eventGetButton(evt){
  var button = evt.button;
  if (button == 1) {
    return 4;
  }
   else if (button == 2) {
    return 2;
  }
  return 1;
}

function getClass_67(){
  return Lcom_google_gwt_dom_client_DOMImplStandard_2_classLit;
}

_ = DOMImplStandard.prototype;
_.getClass$ = getClass_67;
function $getAbsoluteLeft(elem){
  if (elem.offsetLeft == null) {
    return 0;
  }
  var left = 0;
  var doc = elem.ownerDocument;
  var curr = elem.parentNode;
  if (curr) {
    while (curr.offsetParent) {
      left -= curr.scrollLeft;
      doc.defaultView.getComputedStyle(curr, '').getPropertyValue('direction') == 'rtl' && (left += curr.scrollWidth - curr.clientWidth);
      curr = curr.parentNode;
    }
  }
  while (elem) {
    left += elem.offsetLeft;
    if (doc.defaultView.getComputedStyle(elem, '')['position'] == 'fixed') {
      left += doc.body.scrollLeft;
      return left;
    }
    var parent_0 = elem.offsetParent;
    parent_0 && $wnd.devicePixelRatio && (left += parseInt(doc.defaultView.getComputedStyle(parent_0, '').getPropertyValue('border-left-width')));
    if (parent_0 && parent_0.tagName == 'BODY' && elem.style.position == 'absolute') {
      break;
    }
    elem = parent_0;
  }
  return left;
}

function $getAbsoluteTop(elem){
  if (elem.offsetTop == null) {
    return 0;
  }
  var top_0 = 0;
  var doc = elem.ownerDocument;
  var curr = elem.parentNode;
  if (curr) {
    while (curr.offsetParent) {
      top_0 -= curr.scrollTop;
      curr = curr.parentNode;
    }
  }
  while (elem) {
    top_0 += elem.offsetTop;
    if (doc.defaultView.getComputedStyle(elem, '')['position'] == 'fixed') {
      top_0 += doc.body.scrollTop;
      return top_0;
    }
    var parent_0 = elem.offsetParent;
    parent_0 && $wnd.devicePixelRatio && (top_0 += parseInt(doc.defaultView.getComputedStyle(parent_0, '').getPropertyValue('border-top-width')));
    if (parent_0 && parent_0.tagName == 'BODY' && elem.style.position == 'absolute') {
      break;
    }
    elem = parent_0;
  }
  return top_0;
}

function getClass_68(){
  return Lcom_google_gwt_dom_client_DOMImplSafari_2_classLit;
}

_ = DOMImplSafari.prototype;
_.getClass$ = getClass_68;
function $createUniqueId(this$static){
  !this$static.gwt_uid && (this$static.gwt_uid = 1);
  return 'gwt-uid-' + this$static.gwt_uid++;
}

function $getBodyOffsetLeft_0(){
  return $getBodyOffsetLeft($clinit_96());
}

function $getBodyOffsetTop_0(){
  return $getBodyOffsetTop($clinit_96());
}

function $getClientHeight(this$static){
  return ($equals_3(this$static.compatMode, 'CSS1Compat')?this$static.documentElement:this$static.body).clientHeight;
}

function $getClientWidth(this$static){
  return ($equals_3(this$static.compatMode, 'CSS1Compat')?this$static.documentElement:this$static.body).clientWidth;
}

function $getScrollHeight(this$static){
  return ($equals_3(this$static.compatMode, 'CSS1Compat')?this$static.documentElement:this$static.body).scrollHeight || 0;
}

function $getScrollWidth(this$static){
  return ($equals_3(this$static.compatMode, 'CSS1Compat')?this$static.documentElement:this$static.body).scrollWidth || 0;
}

function $addClassName(this$static, className){
  var idx, last, lastPos, oldClassName;
  className = $trim(className);
  oldClassName = this$static.className;
  idx = oldClassName.indexOf(className);
  while (idx != -1) {
    if (idx == 0 || oldClassName.charCodeAt(idx - 1) == 32) {
      last = idx + className.length;
      lastPos = oldClassName.length;
      if (last == lastPos || last < lastPos && oldClassName.charCodeAt(last) == 32) {
        break;
      }
    }
    idx = oldClassName.indexOf(className, idx + 1);
  }
  if (idx == -1) {
    oldClassName.length > 0 && (oldClassName += ' ');
    this$static.className = oldClassName + className;
  }
}

function $getPropertyString(this$static, name_0){
  return this$static[name_0] == null?null:String(this$static[name_0]);
}

function $removeClassName(this$static, className){
  var begin, end, idx, last, lastPos, newClassName, oldStyle;
  className = $trim(className);
  oldStyle = this$static.className;
  idx = oldStyle.indexOf(className);
  while (idx != -1) {
    if (idx == 0 || oldStyle.charCodeAt(idx - 1) == 32) {
      last = idx + className.length;
      lastPos = oldStyle.length;
      if (last == lastPos || last < lastPos && oldStyle.charCodeAt(last) == 32) {
        break;
      }
    }
    idx = oldStyle.indexOf(className, idx + 1);
  }
  if (idx != -1) {
    begin = $trim(oldStyle.substr(0, idx - 0));
    end = $trim($substring(oldStyle, idx + className.length));
    begin.length == 0?(newClassName = end):end.length == 0?(newClassName = begin):(newClassName = begin + ' ' + end);
    this$static.className = newClassName;
  }
}

function $setInnerHTML(this$static, html){
  this$static.innerHTML = html || '';
}

function $setInnerText_0(this$static, text){
  $setInnerText(($clinit_96() , this$static), text);
}

function is_0(o){
  if (!!o && !!o.nodeType) {
    return !!o && o.nodeType == 1;
  }
  return false;
}

function $clinit_108(){
  $clinit_108 = nullMethod;
  NONE = $Style$Display$1(new Style$Display$1, 'NONE', 0);
  BLOCK = $Style$Display$2(new Style$Display$2, 'BLOCK', 1);
  INLINE = $Style$Display$3(new Style$Display$3, 'INLINE', 2);
  INLINE_BLOCK = $Style$Display$4(new Style$Display$4, 'INLINE_BLOCK', 3);
}

function getClass_69(){
  return Lcom_google_gwt_dom_client_Style$Display_2_classLit;
}

function values_3(){
  $clinit_108();
  return initValues(_3Lcom_google_gwt_dom_client_Style$Display_2_classLit, 182, 29, [NONE, BLOCK, INLINE, INLINE_BLOCK]);
}

function Style$Display(){
}

_ = Style$Display.prototype = new Enum;
_.getClass$ = getClass_69;
_.typeId$ = 45;
var BLOCK, INLINE, INLINE_BLOCK, NONE;
function $clinit_109(){
  $clinit_109 = nullMethod;
  $clinit_108();
}

function $Style$Display$1(this$static, enum$name, enum$ordinal){
  $clinit_109();
  this$static.name_0 = enum$name;
  this$static.ordinal = enum$ordinal;
  return this$static;
}

function getClass_70(){
  return Lcom_google_gwt_dom_client_Style$Display$1_2_classLit;
}

function Style$Display$1(){
}

_ = Style$Display$1.prototype = new Style$Display;
_.getClass$ = getClass_70;
_.typeId$ = 46;
function $clinit_110(){
  $clinit_110 = nullMethod;
  $clinit_108();
}

function $Style$Display$2(this$static, enum$name, enum$ordinal){
  $clinit_110();
  this$static.name_0 = enum$name;
  this$static.ordinal = enum$ordinal;
  return this$static;
}

function getClass_71(){
  return Lcom_google_gwt_dom_client_Style$Display$2_2_classLit;
}

function Style$Display$2(){
}

_ = Style$Display$2.prototype = new Style$Display;
_.getClass$ = getClass_71;
_.typeId$ = 47;
function $clinit_111(){
  $clinit_111 = nullMethod;
  $clinit_108();
}

function $Style$Display$3(this$static, enum$name, enum$ordinal){
  $clinit_111();
  this$static.name_0 = enum$name;
  this$static.ordinal = enum$ordinal;
  return this$static;
}

function getClass_72(){
  return Lcom_google_gwt_dom_client_Style$Display$3_2_classLit;
}

function Style$Display$3(){
}

_ = Style$Display$3.prototype = new Style$Display;
_.getClass$ = getClass_72;
_.typeId$ = 48;
function $clinit_112(){
  $clinit_112 = nullMethod;
  $clinit_108();
}

function $Style$Display$4(this$static, enum$name, enum$ordinal){
  $clinit_112();
  this$static.name_0 = enum$name;
  this$static.ordinal = enum$ordinal;
  return this$static;
}

function getClass_73(){
  return Lcom_google_gwt_dom_client_Style$Display$4_2_classLit;
}

function Style$Display$4(){
}

_ = Style$Display$4.prototype = new Style$Display;
_.getClass$ = getClass_73;
_.typeId$ = 49;
function $clinit_114(){
  $clinit_114 = nullMethod;
  PX = $Style$Unit$1(new Style$Unit$1, 'PX', 0);
  PCT = $Style$Unit$2(new Style$Unit$2, 'PCT', 1);
  EM = $Style$Unit$3(new Style$Unit$3, 'EM', 2);
  EX = $Style$Unit$4(new Style$Unit$4, 'EX', 3);
  PT = $Style$Unit$5(new Style$Unit$5, 'PT', 4);
  PC = $Style$Unit$6(new Style$Unit$6, 'PC', 5);
  IN = $Style$Unit$7(new Style$Unit$7, 'IN', 6);
  CM = $Style$Unit$8(new Style$Unit$8, 'CM', 7);
  MM = $Style$Unit$9(new Style$Unit$9, 'MM', 8);
}

function getClass_74(){
  return Lcom_google_gwt_dom_client_Style$Unit_2_classLit;
}

function values_4(){
  $clinit_114();
  return initValues(_3Lcom_google_gwt_dom_client_Style$Unit_2_classLit, 184, 31, [PX, PCT, EM, EX, PT, PC, IN, CM, MM]);
}

function Style$Unit(){
}

_ = Style$Unit.prototype = new Enum;
_.getClass$ = getClass_74;
_.typeId$ = 50;
var CM, EM, EX, IN, MM, PC, PCT, PT, PX;
function $clinit_115(){
  $clinit_115 = nullMethod;
  $clinit_114();
}

function $Style$Unit$1(this$static, enum$name, enum$ordinal){
  $clinit_115();
  this$static.name_0 = enum$name;
  this$static.ordinal = enum$ordinal;
  return this$static;
}

function getClass_75(){
  return Lcom_google_gwt_dom_client_Style$Unit$1_2_classLit;
}

function Style$Unit$1(){
}

_ = Style$Unit$1.prototype = new Style$Unit;
_.getClass$ = getClass_75;
_.typeId$ = 51;
function $clinit_116(){
  $clinit_116 = nullMethod;
  $clinit_114();
}

function $Style$Unit$2(this$static, enum$name, enum$ordinal){
  $clinit_116();
  this$static.name_0 = enum$name;
  this$static.ordinal = enum$ordinal;
  return this$static;
}

function getClass_76(){
  return Lcom_google_gwt_dom_client_Style$Unit$2_2_classLit;
}

function Style$Unit$2(){
}

_ = Style$Unit$2.prototype = new Style$Unit;
_.getClass$ = getClass_76;
_.typeId$ = 52;
function $clinit_117(){
  $clinit_117 = nullMethod;
  $clinit_114();
}

function $Style$Unit$3(this$static, enum$name, enum$ordinal){
  $clinit_117();
  this$static.name_0 = enum$name;
  this$static.ordinal = enum$ordinal;
  return this$static;
}

function getClass_77(){
  return Lcom_google_gwt_dom_client_Style$Unit$3_2_classLit;
}

function Style$Unit$3(){
}

_ = Style$Unit$3.prototype = new Style$Unit;
_.getClass$ = getClass_77;
_.typeId$ = 53;
function $clinit_118(){
  $clinit_118 = nullMethod;
  $clinit_114();
}

function $Style$Unit$4(this$static, enum$name, enum$ordinal){
  $clinit_118();
  this$static.name_0 = enum$name;
  this$static.ordinal = enum$ordinal;
  return this$static;
}

function getClass_78(){
  return Lcom_google_gwt_dom_client_Style$Unit$4_2_classLit;
}

function Style$Unit$4(){
}

_ = Style$Unit$4.prototype = new Style$Unit;
_.getClass$ = getClass_78;
_.typeId$ = 54;
function $clinit_119(){
  $clinit_119 = nullMethod;
  $clinit_114();
}

function $Style$Unit$5(this$static, enum$name, enum$ordinal){
  $clinit_119();
  this$static.name_0 = enum$name;
  this$static.ordinal = enum$ordinal;
  return this$static;
}

function getClass_79(){
  return Lcom_google_gwt_dom_client_Style$Unit$5_2_classLit;
}

function Style$Unit$5(){
}

_ = Style$Unit$5.prototype = new Style$Unit;
_.getClass$ = getClass_79;
_.typeId$ = 55;
function $clinit_120(){
  $clinit_120 = nullMethod;
  $clinit_114();
}

function $Style$Unit$6(this$static, enum$name, enum$ordinal){
  $clinit_120();
  this$static.name_0 = enum$name;
  this$static.ordinal = enum$ordinal;
  return this$static;
}

function getClass_80(){
  return Lcom_google_gwt_dom_client_Style$Unit$6_2_classLit;
}

function Style$Unit$6(){
}

_ = Style$Unit$6.prototype = new Style$Unit;
_.getClass$ = getClass_80;
_.typeId$ = 56;
function $clinit_121(){
  $clinit_121 = nullMethod;
  $clinit_114();
}

function $Style$Unit$7(this$static, enum$name, enum$ordinal){
  $clinit_121();
  this$static.name_0 = enum$name;
  this$static.ordinal = enum$ordinal;
  return this$static;
}

function getClass_81(){
  return Lcom_google_gwt_dom_client_Style$Unit$7_2_classLit;
}

function Style$Unit$7(){
}

_ = Style$Unit$7.prototype = new Style$Unit;
_.getClass$ = getClass_81;
_.typeId$ = 57;
function $clinit_122(){
  $clinit_122 = nullMethod;
  $clinit_114();
}

function $Style$Unit$8(this$static, enum$name, enum$ordinal){
  $clinit_122();
  this$static.name_0 = enum$name;
  this$static.ordinal = enum$ordinal;
  return this$static;
}

function getClass_82(){
  return Lcom_google_gwt_dom_client_Style$Unit$8_2_classLit;
}

function Style$Unit$8(){
}

_ = Style$Unit$8.prototype = new Style$Unit;
_.getClass$ = getClass_82;
_.typeId$ = 58;
function $clinit_123(){
  $clinit_123 = nullMethod;
  $clinit_114();
}

function $Style$Unit$9(this$static, enum$name, enum$ordinal){
  $clinit_123();
  this$static.name_0 = enum$name;
  this$static.ordinal = enum$ordinal;
  return this$static;
}

function getClass_83(){
  return Lcom_google_gwt_dom_client_Style$Unit$9_2_classLit;
}

function Style$Unit$9(){
}

_ = Style$Unit$9.prototype = new Style$Unit;
_.getClass$ = getClass_83;
_.typeId$ = 59;
function $clinit_124(){
  $clinit_124 = nullMethod;
  toInject = [];
  toInjectAtEnd = [];
  toInjectAtStart = [];
  flusher = new StyleInjector$1;
}

function flush(which){
  $clinit_124();
  var css, maybeReturn, toReturn;
  toReturn = null;
  if (toInjectAtStart.length != 0) {
    css = toInjectAtStart.join('');
    maybeReturn = $injectStyleSheetAtStart(($clinit_126() , IMPL), css);
    toInjectAtStart == which && (toReturn = maybeReturn);
    toInjectAtStart.length = 0;
  }
  if (toInject.length != 0) {
    css = toInject.join('');
    maybeReturn = $injectStyleSheet(($clinit_126() , IMPL), css);
    toInject == which && (toReturn = maybeReturn);
    toInject.length = 0;
  }
  if (toInjectAtEnd.length != 0) {
    css = toInjectAtEnd.join('');
    maybeReturn = $injectStyleSheet(($clinit_126() , IMPL), css);
    toInjectAtEnd == which && (toReturn = maybeReturn);
    toInjectAtEnd.length = 0;
  }
  needsInjection = false;
  return toReturn;
}

function schedule(){
  if (!needsInjection) {
    needsInjection = true;
    $push(($clinit_86() , INSTANCE).finallyCommands, [flusher, false]);
  }
}

var flusher, needsInjection = false, toInject, toInjectAtEnd, toInjectAtStart;
function execute_2(){
  ($clinit_124() , needsInjection) && flush(null);
}

function getClass_84(){
  return Lcom_google_gwt_dom_client_StyleInjector$1_2_classLit;
}

function StyleInjector$1(){
}

_ = StyleInjector$1.prototype = new Object_0;
_.execute_0 = execute_2;
_.getClass$ = getClass_84;
_.typeId$ = 0;
function $clinit_126(){
  $clinit_126 = nullMethod;
  IMPL = ($clinit_126() , new StyleInjector$StyleInjectorImpl);
}

function $createElement_1(contents){
  var style;
  style = ($clinit_96() , $doc).createElement('style');
  style['language'] = 'text/css';
  $setInnerText(style, contents);
  return style;
}

function $getHead(this$static){
  var elt;
  if (!this$static.head) {
    elt = $doc.getElementsByTagName('head')[0];
    this$static.head = elt;
  }
  return this$static.head;
}

function $injectStyleSheet(this$static, contents){
  var style;
  style = $createElement_1(contents);
  $getHead(this$static).appendChild(style);
  return style;
}

function $injectStyleSheetAtStart(this$static, contents){
  var style;
  style = $createElement_1(contents);
  $getHead(this$static).insertBefore(style, this$static.head.firstChild);
  return style;
}

function getClass_85(){
  return Lcom_google_gwt_dom_client_StyleInjector$StyleInjectorImpl_2_classLit;
}

function StyleInjector$StyleInjectorImpl(){
}

_ = StyleInjector$StyleInjectorImpl.prototype = new Object_0;
_.getClass$ = getClass_85;
_.typeId$ = 0;
_.head = null;
var IMPL;
function getAssociatedType_0(){
  return this.getAssociatedType_0();
}

function getClass_86(){
  return Lcom_google_gwt_event_dom_client_DomEvent_2_classLit;
}

function setNativeEvent(nativeEvent){
  this.nativeEvent = nativeEvent;
}

function setRelativeElement(relativeElem){
  this.relativeElem = relativeElem;
}

function DomEvent(){
}

_ = DomEvent.prototype = new GwtEvent;
_.getAssociatedType = getAssociatedType_0;
_.getClass$ = getClass_86;
_.setNativeEvent = setNativeEvent;
_.setRelativeElement = setRelativeElement;
_.typeId$ = 0;
_.nativeEvent = null;
_.relativeElem = null;
function $clinit_131(){
  $clinit_131 = nullMethod;
  TYPE_1 = $DomEvent$Type(new DomEvent$Type, 'change', ($clinit_131() , new ChangeEvent));
}

function dispatch_0(p0){
  $onActionChanged(dynamicCast(p0, 10).val$owner);
}

function getAssociatedType_1(){
  return TYPE_1;
}

function getClass_87(){
  return Lcom_google_gwt_event_dom_client_ChangeEvent_2_classLit;
}

function ChangeEvent(){
}

_ = ChangeEvent.prototype = new DomEvent;
_.dispatch = dispatch_0;
_.getAssociatedType_0 = getAssociatedType_1;
_.getClass$ = getClass_87;
_.typeId$ = 0;
var TYPE_1;
function $clinit_133(){
  $clinit_133 = nullMethod;
  TYPE_2 = $DomEvent$Type(new DomEvent$Type, 'click', ($clinit_133() , new ClickEvent));
}

function dispatch_1(p0){
  dynamicCast(p0, 11).onClick(this);
}

function getAssociatedType_2(){
  return TYPE_2;
}

function getClass_88(){
  return Lcom_google_gwt_event_dom_client_ClickEvent_2_classLit;
}

function ClickEvent(){
}

_ = ClickEvent.prototype = new DomEvent;
_.dispatch = dispatch_1;
_.getAssociatedType_0 = getAssociatedType_2;
_.getClass$ = getClass_88;
_.typeId$ = 0;
var TYPE_2;
function getClass_89(){
  return Lcom_google_gwt_event_shared_GwtEvent$Type_2_classLit;
}

function toString_7(){
  return 'Event type';
}

_ = GwtEvent$Type.prototype;
_.getClass$ = getClass_89;
_.toString$ = toString_7;
function $DomEvent$Type(this$static, eventName, flyweight){
  this$static.index = ++nextHashCode;
  this$static.flyweight = flyweight;
  !registered && (registered = $PrivateMap(new PrivateMap));
  registered.map[eventName] = this$static;
  this$static.name_0 = eventName;
  return this$static;
}

function getClass_90(){
  return Lcom_google_gwt_event_dom_client_DomEvent$Type_2_classLit;
}

function DomEvent$Type(){
}

_ = DomEvent$Type.prototype = new GwtEvent$Type;
_.getClass$ = getClass_90;
_.typeId$ = 60;
_.flyweight = null;
_.name_0 = null;
function $clinit_137(){
  $clinit_137 = nullMethod;
  TYPE_3 = $DomEvent$Type(new DomEvent$Type, 'focus', ($clinit_137() , new FocusEvent));
}

function $dispatch_1(this$static, handler){
  $process(handler, dynamicCast(this$static.source, 13));
}

function dispatch_2(p0){
  $dispatch_1(this, dynamicCast(p0, 14));
}

function getAssociatedType_3(){
  return TYPE_3;
}

function getClass_91(){
  return Lcom_google_gwt_event_dom_client_FocusEvent_2_classLit;
}

function FocusEvent(){
}

_ = FocusEvent.prototype = new DomEvent;
_.dispatch = dispatch_2;
_.getAssociatedType_0 = getAssociatedType_3;
_.getClass$ = getClass_91;
_.typeId$ = 0;
var TYPE_3;
function getClass_92(){
  return Lcom_google_gwt_event_dom_client_KeyEvent_2_classLit;
}

function KeyEvent(){
}

_ = KeyEvent.prototype = new DomEvent;
_.getClass$ = getClass_92;
_.typeId$ = 0;
function $clinit_159(){
  $clinit_159 = nullMethod;
  TYPE_4 = $DomEvent$Type(new DomEvent$Type, 'keypress', ($clinit_159() , new KeyPressEvent));
}

function $getCharCode(e){
  return e.charCode || e.keyCode;
}

function dispatch_3(p0){
  dynamicCast(p0, 15).onKeyPress(this);
}

function getAssociatedType_4(){
  return TYPE_4;
}

function getClass_93(){
  return Lcom_google_gwt_event_dom_client_KeyPressEvent_2_classLit;
}

function KeyPressEvent(){
}

_ = KeyPressEvent.prototype = new KeyEvent;
_.dispatch = dispatch_3;
_.getAssociatedType_0 = getAssociatedType_4;
_.getClass$ = getClass_93;
_.typeId$ = 0;
var TYPE_4;
function getClass_94(){
  return Lcom_google_gwt_event_dom_client_MouseEvent_2_classLit;
}

function MouseEvent(){
}

_ = MouseEvent.prototype = new DomEvent;
_.getClass$ = getClass_94;
_.typeId$ = 0;
function $clinit_162(){
  $clinit_162 = nullMethod;
  TYPE_5 = $DomEvent$Type(new DomEvent$Type, 'mouseout', ($clinit_162() , new MouseOutEvent));
}

function dispatch_4(p0){
  $hide(dynamicCast(p0, 16).this$0.foodDialogBox);
}

function getAssociatedType_5(){
  return TYPE_5;
}

function getClass_95(){
  return Lcom_google_gwt_event_dom_client_MouseOutEvent_2_classLit;
}

function MouseOutEvent(){
}

_ = MouseOutEvent.prototype = new MouseEvent;
_.dispatch = dispatch_4;
_.getAssociatedType_0 = getAssociatedType_5;
_.getClass$ = getClass_95;
_.typeId$ = 0;
var TYPE_5;
function $clinit_164(){
  $clinit_164 = nullMethod;
  TYPE_6 = $DomEvent$Type(new DomEvent$Type, 'mouseover', ($clinit_164() , new MouseOverEvent));
}

function dispatch_5(p0){
  dynamicCast(p0, 17).onMouseOver(this);
}

function getAssociatedType_6(){
  return TYPE_6;
}

function getClass_96(){
  return Lcom_google_gwt_event_dom_client_MouseOverEvent_2_classLit;
}

function MouseOverEvent(){
}

_ = MouseOverEvent.prototype = new MouseEvent;
_.dispatch = dispatch_5;
_.getAssociatedType_0 = getAssociatedType_6;
_.getClass$ = getClass_96;
_.typeId$ = 0;
var TYPE_6;
function $clinit_166(){
  $clinit_166 = nullMethod;
  TYPE_7 = $DomEvent$Type(new DomEvent$Type, 'mouseup', ($clinit_166() , new MouseUpEvent));
}

function dispatch_6(p0){
  dynamicCast(p0, 18).onMouseUp(this);
}

function getAssociatedType_7(){
  return TYPE_7;
}

function getClass_97(){
  return Lcom_google_gwt_event_dom_client_MouseUpEvent_2_classLit;
}

function MouseUpEvent(){
}

_ = MouseUpEvent.prototype = new MouseEvent;
_.dispatch = dispatch_6;
_.getAssociatedType_0 = getAssociatedType_7;
_.getClass$ = getClass_97;
_.typeId$ = 0;
var TYPE_7;
function $PrivateMap(this$static){
  this$static.map = {};
  return this$static;
}

function getClass_98(){
  return Lcom_google_gwt_event_dom_client_PrivateMap_2_classLit;
}

function unsafeGet(key){
  return this.map[key];
}

function PrivateMap(){
}

_ = PrivateMap.prototype = new Object_0;
_.getClass$ = getClass_98;
_.unsafeGet = unsafeGet;
_.typeId$ = 0;
_.map = null;
function getClass_99(){
  return Lcom_google_gwt_event_logical_shared_CloseEvent_2_classLit;
}

_ = CloseEvent.prototype;
_.getClass$ = getClass_99;
function dispatch_8(p0){
  throwClassCastExceptionUnlessNull(p0);
  null.nullMethod();
}

function getAssociatedType_9(){
  return TYPE_9;
}

function getClass_100(){
  return Lcom_google_gwt_event_logical_shared_HighlightEvent_2_classLit;
}

function HighlightEvent(){
}

_ = HighlightEvent.prototype = new GwtEvent;
_.dispatch = dispatch_8;
_.getAssociatedType = getAssociatedType_9;
_.getClass$ = getClass_100;
_.typeId$ = 0;
var TYPE_9 = null;
function $dispatch_6(){
  $onResize();
}

function dispatch_9(p0){
  $dispatch_6(dynamicCast(p0, 20));
}

function fire_1(source){
  var event_0;
  if (TYPE_10) {
    event_0 = new ResizeEvent;
    $fireEvent_0(source, event_0);
  }
}

function getAssociatedType_10(){
  return TYPE_10;
}

function getClass_101(){
  return Lcom_google_gwt_event_logical_shared_ResizeEvent_2_classLit;
}

function ResizeEvent(){
}

_ = ResizeEvent.prototype = new GwtEvent;
_.dispatch = dispatch_9;
_.getAssociatedType = getAssociatedType_10;
_.getClass$ = getClass_101;
_.typeId$ = 0;
var TYPE_10 = null;
function $SelectionEvent(this$static, selectedItem){
  this$static.selectedItem = selectedItem;
  return this$static;
}

function dispatch_10(p0){
  $onSelectedFood(dynamicCast(p0, 21).this$0, this);
}

function fire_2(source, selectedItem){
  var event_0;
  if (TYPE_11) {
    event_0 = $SelectionEvent(new SelectionEvent, selectedItem);
    !!source.handlerManager && $fireEvent_0(source.handlerManager, event_0);
  }
}

function getAssociatedType_11(){
  return TYPE_11;
}

function getClass_102(){
  return Lcom_google_gwt_event_logical_shared_SelectionEvent_2_classLit;
}

function SelectionEvent(){
}

_ = SelectionEvent.prototype = new GwtEvent;
_.dispatch = dispatch_10;
_.getAssociatedType = getAssociatedType_11;
_.getClass$ = getClass_102;
_.typeId$ = 0;
_.selectedItem = null;
var TYPE_11 = null;
function getClass_103(){
  return Lcom_google_gwt_event_logical_shared_ValueChangeEvent_2_classLit;
}

_ = ValueChangeEvent.prototype;
_.getClass$ = getClass_103;
function $removeHandler(this$static){
  $removeHandler_0(this$static.manager, this$static.type_0, this$static.handler);
}

function getClass_104(){
  return Lcom_google_gwt_event_shared_DefaultHandlerRegistration_2_classLit;
}

_ = DefaultHandlerRegistration.prototype;
_.getClass$ = getClass_104;
function $removeHandler_0(this$static, type, handler){
  this$static.firingDepth > 0?$defer(this$static, $HandlerManager$2(new HandlerManager$2, this$static, type, handler)):$removeHandler_1(this$static.registry, type, handler);
}

function getClass_105(){
  return Lcom_google_gwt_event_shared_HandlerManager_2_classLit;
}

_ = HandlerManager.prototype;
_.getClass$ = getClass_105;
function getClass_106(){
  return Lcom_google_gwt_event_shared_HandlerManager$1_2_classLit;
}

_ = HandlerManager$1.prototype;
_.getClass$ = getClass_106;
function $HandlerManager$2(this$static, this$0, val$type, val$handler){
  this$static.this$0 = this$0;
  this$static.val$type = val$type;
  this$static.val$handler = val$handler;
  return this$static;
}

function execute_4(){
  $removeHandler_1(this.this$0.registry, this.val$type, this.val$handler);
}

function getClass_107(){
  return Lcom_google_gwt_event_shared_HandlerManager$2_2_classLit;
}

function HandlerManager$2(){
}

_ = HandlerManager$2.prototype = new Object_0;
_.execute_0 = execute_4;
_.getClass$ = getClass_107;
_.typeId$ = 62;
_.this$0 = null;
_.val$handler = null;
_.val$type = null;
function $removeHandler_1(this$static, eventKey, handler){
  var l, result;
  l = dynamicCast($get_5(this$static.map, eventKey), 24);
  result = !!l && $remove_0(l, handler);
  result && l.size_0 == 0 && $remove_12(this$static.map, eventKey);
}

function getClass_108(){
  return Lcom_google_gwt_event_shared_HandlerManager$HandlerRegistry_2_classLit;
}

_ = HandlerManager$HandlerRegistry.prototype;
_.getClass$ = getClass_108;
function throwIfNull(name_0, value){
  if (null == value) {
    throw $NullPointerException_0(new NullPointerException, name_0 + ' cannot be null');
  }
}

function $matchString(text, start, data, pos){
  var bestMatch, bestMatchLength, count, i, length_0, textInLowerCase;
  count = data.length;
  bestMatchLength = 0;
  bestMatch = -1;
  textInLowerCase = text.substr(start, text.length - start).toLowerCase();
  for (i = 0; i < count; ++i) {
    length_0 = data[i].length;
    if (length_0 > bestMatchLength && textInLowerCase.indexOf(data[i].toLowerCase()) == 0) {
      bestMatch = i;
      bestMatchLength = length_0;
    }
  }
  bestMatch >= 0 && (pos[0] = start + bestMatchLength);
  return bestMatch;
}

function $parse(this$static, text, strict){
  var charsConsumed, curDate, date;
  curDate = $Date(new Date_0);
  date = $Date_0(new Date_0, (curDate.checkJsDate() , curDate.jsdate.getFullYear() - 1900), (curDate.checkJsDate() , curDate.jsdate.getMonth()), (curDate.checkJsDate() , curDate.jsdate.getDate()));
  charsConsumed = $parse_0(this$static, text, 0, date, strict);
  if (charsConsumed == 0 || charsConsumed < text.length) {
    throw $IllegalArgumentException(new IllegalArgumentException, text);
  }
  return date;
}

function $parse_0(this$static, text, start, date, strict){
  var abutPass, abutPat, abutStart, cal, count, i, parsePos, part, s;
  cal = $DateRecord(new DateRecord);
  parsePos = initValues(_3I_classLit, 220, -1, [start]);
  abutPat = -1;
  abutStart = 0;
  abutPass = 0;
  for (i = 0; i < this$static.patternParts.size_0; ++i) {
    part = dynamicCast($get(this$static.patternParts, i), 75);
    if (part.count > 0) {
      if (abutPat < 0 && part.abutStart) {
        abutPat = i;
        abutStart = start;
        abutPass = 0;
      }
      if (abutPat >= 0) {
        count = part.count;
        if (i == abutPat) {
          count -= abutPass++;
          if (count == 0) {
            return 0;
          }
        }
        if (!$subParse(this$static, text, parsePos, part, count, cal)) {
          i = abutPat - 1;
          parsePos[0] = abutStart;
          continue;
        }
      }
       else {
        abutPat = -1;
        if (!$subParse(this$static, text, parsePos, part, 0, cal)) {
          return 0;
        }
      }
    }
     else {
      abutPat = -1;
      if (part.text_0.charCodeAt(0) == 32) {
        s = parsePos[0];
        $skipSpace(text, parsePos);
        if (parsePos[0] > s) {
          continue;
        }
      }
       else if ($startsWith(text, part.text_0, parsePos[0])) {
        parsePos[0] += part.text_0.length;
        continue;
      }
      return 0;
    }
  }
  if (!$calcDate(cal, date, strict)) {
    return 0;
  }
  return parsePos[0] - start;
}

function $parseInt(text, pos){
  var ch, ind, ret;
  ret = 0;
  ind = pos[0];
  ch = text.charCodeAt(ind);
  while (ch >= 48 && ch <= 57) {
    ret = ret * 10 + (ch - 48);
    ++ind;
    if (ind >= text.length) {
      break;
    }
    ch = text.charCodeAt(ind);
  }
  ind > pos[0]?(pos[0] = ind):(ret = -1);
  return ret;
}

function $parseTimeZoneOffset(text, pos, cal){
  var offset, sign, st, value;
  if (pos[0] >= text.length) {
    cal.tzOffset = 0;
    return true;
  }
  switch (text.charCodeAt(pos[0])) {
    case 43:
      sign = 1;
      break;
    case 45:
      sign = -1;
      break;
    default:cal.tzOffset = 0;
      return true;
  }
  ++pos[0];
  st = pos[0];
  value = $parseInt(text, pos);
  if (value == 0 && pos[0] == st) {
    return false;
  }
  if (pos[0] < text.length && text.charCodeAt(pos[0]) == 58) {
    offset = value * 60;
    ++pos[0];
    st = pos[0];
    value = $parseInt(text, pos);
    if (value == 0 && pos[0] == st) {
      return false;
    }
    offset += value;
  }
   else {
    offset = value;
    offset < 24 && pos[0] - st <= 2?(offset *= 60):(offset = offset % 100 + ~~(offset / 100) * 60);
  }
  offset *= sign;
  cal.tzOffset = -offset;
  return true;
}

function $skipSpace(text, pos){
  while (pos[0] < text.length && ' \t\r\n'.indexOf(fromCodePoint(text.charCodeAt(pos[0]))) >= 0) {
    ++pos[0];
  }
}

function $subParse(this$static, text, pos, part, digitCount, cal){
  var ch, start, value;
  $skipSpace(text, pos);
  start = pos[0];
  ch = part.text_0.charCodeAt(0);
  value = -1;
  if ($isNumeric(part)) {
    if (digitCount > 0) {
      if (start + digitCount > text.length) {
        return false;
      }
      value = $parseInt(text.substr(0, start + digitCount - 0), pos);
    }
     else {
      value = $parseInt(text, pos);
    }
  }
  switch (ch) {
    case 71:
      value = $matchString(text, start, $eras(this$static.dateTimeConstants), pos);
      cal.era = value;
      return true;
    case 77:
      return $subParseMonth(this$static, text, pos, cal, value, start);
    case 76:
      return $subParseStandaloneMonth(this$static, text, pos, cal, value, start);
    case 69:
      return $subParseDayOfWeek(this$static, text, pos, start, cal);
    case 99:
      return $subParseStandaloneDay(this$static, text, pos, start, cal);
    case 97:
      value = $matchString(text, start, $ampms(this$static.dateTimeConstants), pos);
      cal.ampm = value;
      return true;
    case 121:
      return $subParseYear(text, pos, start, value, part, cal);
    case 100:
      if (value <= 0) {
        return false;
      }

      cal.dayOfMonth = value;
      return true;
    case 83:
      return $subParseFractionalSeconds(value, start, pos[0], cal);
    case 104:
      value == 12 && (value = 0);
    case 75:
    case 72:
      cal.hours = value;
      return true;
    case 107:
      cal.hours = value;
      return true;
    case 109:
      cal.minutes = value;
      return true;
    case 115:
      cal.seconds = value;
      return true;
    case 122:
    case 90:
    case 118:
      return $subParseTimeZoneInGMT(text, start, pos, cal);
    default:return false;
  }
}

function $subParseDayOfWeek(this$static, text, pos, start, cal){
  var value;
  value = $matchString(text, start, $weekdays(this$static.dateTimeConstants), pos);
  value < 0 && (value = $matchString(text, start, $shortWeekdays(this$static.dateTimeConstants), pos));
  if (value < 0) {
    return false;
  }
  cal.dayOfWeek = value;
  return true;
}

function $subParseFractionalSeconds(value, start, end, cal){
  var a, i;
  i = end - start;
  if (i < 3) {
    while (i < 3) {
      value *= 10;
      ++i;
    }
  }
   else {
    a = 1;
    while (i > 3) {
      a *= 10;
      --i;
    }
    value = ~~((value + (~~a >> 1)) / a);
  }
  cal.milliseconds = value;
  return true;
}

function $subParseMonth(this$static, text, pos, cal, value, start){
  if (value < 0) {
    value = $matchString(text, start, $months(this$static.dateTimeConstants), pos);
    value < 0 && (value = $matchString(text, start, $shortMonths(this$static.dateTimeConstants), pos));
    if (value < 0) {
      return false;
    }
    cal.month = value;
    return true;
  }
   else if (value > 0) {
    cal.month = value - 1;
    return true;
  }
  return false;
}

function $subParseStandaloneDay(this$static, text, pos, start, cal){
  var value;
  value = $matchString(text, start, $standaloneWeekdays(this$static.dateTimeConstants), pos);
  value < 0 && (value = $matchString(text, start, $standaloneShortWeekdays(this$static.dateTimeConstants), pos));
  if (value < 0) {
    return false;
  }
  cal.dayOfWeek = value;
  return true;
}

function $subParseStandaloneMonth(this$static, text, pos, cal, value, start){
  if (value < 0) {
    value = $matchString(text, start, $standaloneMonths(this$static.dateTimeConstants), pos);
    value < 0 && (value = $matchString(text, start, $standaloneShortMonths(this$static.dateTimeConstants), pos));
    if (value < 0) {
      return false;
    }
    cal.month = value;
    return true;
  }
   else if (value > 0) {
    cal.month = value - 1;
    return true;
  }
  return false;
}

function $subParseTimeZoneInGMT(text, start, pos, cal){
  if ($startsWith(text, 'GMT', start)) {
    pos[0] = start + 3;
    return $parseTimeZoneOffset(text, pos, cal);
  }
  return $parseTimeZoneOffset(text, pos, cal);
}

function $subParseYear(text, pos, start, value, part, cal){
  var ambiguousTwoDigitYear, ch, date, defaultCenturyStartYear;
  ch = 32;
  if (value < 0) {
    ch = text.charCodeAt(pos[0]);
    if (ch != 43 && ch != 45) {
      return false;
    }
    ++pos[0];
    value = $parseInt(text, pos);
    if (value < 0) {
      return false;
    }
    ch == 45 && (value = -value);
  }
  if (ch == 32 && pos[0] - start == 2 && part.count == 2) {
    date = $Date(new Date_0);
    defaultCenturyStartYear = (date.checkJsDate() , date.jsdate.getFullYear() - 1900) + 1900 - 80;
    ambiguousTwoDigitYear = defaultCenturyStartYear % 100;
    cal.ambiguousYear = value == ambiguousTwoDigitYear;
    value += ~~(defaultCenturyStartYear / 100) * 100 + (value < ambiguousTwoDigitYear?100:0);
  }
  cal.year = value;
  return true;
}

function getClass_109(){
  return Lcom_google_gwt_i18n_client_DateTimeFormat_2_classLit;
}

_ = DateTimeFormat.prototype;
_.getClass$ = getClass_109;
function getClass_110(){
  return Lcom_google_gwt_i18n_client_DateTimeFormat$PatternPart_2_classLit;
}

_ = DateTimeFormat$PatternPart.prototype;
_.getClass$ = getClass_110;
function getClass_111(){
  return Lcom_google_gwt_i18n_client_LocaleInfo_2_classLit;
}

_ = LocaleInfo.prototype;
_.getClass$ = getClass_111;
function getClass_112(){
  return Lcom_google_gwt_i18n_client_TimeZone_2_classLit;
}

_ = TimeZone.prototype;
_.getClass$ = getClass_112;
function $weekendRange(this$static){
  var args, writer;
  args = dynamicCast($get_5(this$static.cache, 'weekendRange'), 76);
  if (args == null) {
    writer = initValues(_3Ljava_lang_String_2_classLit, 229, 1, ['7', '1']);
    $put_0(this$static.cache, 'weekendRange', writer);
    return writer;
  }
   else {
    return args;
  }
}

function getClass_113(){
  return Lcom_google_gwt_i18n_client_constants_DateTimeConstantsImpl_1_2_classLit;
}

_ = DateTimeConstantsImpl_.prototype;
_.getClass$ = getClass_113;
function $Date_0(this$static, year, month, date){
  $clinit_209();
  this$static.jsdate = new Date;
  this$static.checkJsDate();
  this$static.jsdate.setFullYear(year + 1900, month, date);
  this$static.jsdate.setHours(0, 0, 0, 0);
  this$static.fixDaylightSavings(0);
  return this$static;
}

function $setDate_0(this$static, date){
  this$static.checkJsDate();
  var hours = this$static.jsdate.getHours();
  this$static.jsdate.setDate(date);
  this$static.fixDaylightSavings(hours);
}

function $setTime0(this$static, time){
  this$static.checkJsDate();
  this$static.jsdate.setTime(time);
}

function fixDaylightSavings(hours){
  if (this.jsdate.getHours() % 24 != hours % 24) {
    var d = new Date;
    d.setTime(this.jsdate.getTime());
    var noff = d.getTimezoneOffset();
    d.setDate(d.getDate() + 1);
    var loff = d.getTimezoneOffset();
    var timeDiff = noff - loff;
    if (timeDiff > 0) {
      var year = this.jsdate.getYear() + 1900;
      var month = this.jsdate.getMonth();
      var day = this.jsdate.getDate();
      var badHours = this.jsdate.getHours();
      var minute = this.jsdate.getMinutes();
      var second = this.jsdate.getSeconds();
      badHours + timeDiff / 60 >= 24 && day++;
      var newTime = new Date(year, month, day, hours + timeDiff / 60, minute + timeDiff % 60, second);
      this.jsdate.setTime(newTime.getTime());
    }
  }
}

function getClass_114(){
  return Ljava_util_Date_2_classLit;
}

function padTwo_0(number){
  if (number < 10) {
    return '0' + number;
  }
   else {
    return '' + number;
  }
}

function setHours(hours){
  this.checkJsDate();
  this.jsdate.setHours(hours);
  this.fixDaylightSavings(hours);
}

function setMinutes(minutes){
  this.checkJsDate();
  var hours = this.jsdate.getHours() + minutes / 60;
  this.jsdate.setMinutes(minutes);
  this.fixDaylightSavings(hours);
}

function setMonth(month){
  this.checkJsDate();
  var hours = this.jsdate.getHours();
  this.jsdate.setMonth(month);
  this.fixDaylightSavings(hours);
}

function setSeconds(seconds){
  this.checkJsDate();
  var hours = this.jsdate.getHours() + seconds / (60 * 60);
  this.jsdate.setSeconds(seconds);
  this.fixDaylightSavings(hours);
}

function setYear(year){
  this.checkJsDate();
  var hours = this.jsdate.getHours();
  this.jsdate.setFullYear(year + 1900);
  this.fixDaylightSavings(hours);
}

function toString_8(){
  this.checkJsDate();
  var d = this.jsdate;
  var padTwo = padTwo_0;
  var day = DAYS[d.getDay()];
  var month = MONTHS[d.getMonth()];
  var offset = -d.getTimezoneOffset();
  var hourOffset = String(offset >= 0?'+' + Math.floor(offset / 60):Math.ceil(offset / 60));
  var minuteOffset = padTwo(Math.abs(offset) % 60);
  return day + ' ' + month + ' ' + padTwo(d.getDate()) + ' ' + padTwo(d.getHours()) + ':' + padTwo(d.getMinutes()) + ':' + padTwo(d.getSeconds()) + ' GMT' + hourOffset + minuteOffset + ' ' + d.getFullYear();
}

_ = Date_0.prototype;
_.fixDaylightSavings = fixDaylightSavings;
_.getClass$ = getClass_114;
_.setHours_0 = setHours;
_.setMinutes_0 = setMinutes;
_.setMonth_0 = setMonth;
_.setSeconds_0 = setSeconds;
_.setYear = setYear;
_.toString$ = toString_8;
function $clinit_210(){
  $clinit_210 = nullMethod;
  $clinit_209();
}

function $DateRecord(this$static){
  $clinit_210();
  this$static.jsdate = new Date;
  this$static.era = -1;
  this$static.ambiguousYear = false;
  this$static.year = -2147483648;
  this$static.month = -1;
  this$static.dayOfMonth = -1;
  this$static.ampm = -1;
  this$static.hours = -1;
  this$static.minutes = -1;
  this$static.seconds = -1;
  this$static.milliseconds = -1;
  this$static.dayOfWeek = -1;
  this$static.tzOffset = -2147483648;
  return this$static;
}

function $calcDate(this$static, date, strict){
  var adjustment, defaultCenturyStart, offset, orgDayOfMonth, orgMonth;
  this$static.era == 0 && this$static.year > 0 && (this$static.year = -(this$static.year - 1));
  this$static.year > -2147483648 && date.setYear(this$static.year - 1900);
  orgDayOfMonth = (date.checkJsDate() , date.jsdate.getDate());
  $setDate_0(date, 1);
  this$static.month >= 0 && date.setMonth_0(this$static.month);
  this$static.dayOfMonth >= 0?$setDate_0(date, this$static.dayOfMonth):$setDate_0(date, orgDayOfMonth);
  this$static.hours < 0 && (this$static.hours = (date.checkJsDate() , date.jsdate.getHours()));
  this$static.ampm > 0 && this$static.hours < 12 && (this$static.hours += 12);
  date.setHours_0(this$static.hours);
  this$static.minutes >= 0 && date.setMinutes_0(this$static.minutes);
  this$static.seconds >= 0 && date.setSeconds_0(this$static.seconds);
  this$static.milliseconds >= 0 && $setTime0(date, toDouble(add_5(mul(div_0(fromDouble((date.checkJsDate() , date.jsdate.getTime())), P3e8_longLit), P3e8_longLit), fromInt(this$static.milliseconds))));
  if (strict) {
    if (this$static.year > -2147483648 && this$static.year - 1900 != (date.checkJsDate() , date.jsdate.getFullYear() - 1900)) {
      return false;
    }
    if (this$static.month >= 0 && this$static.month != (date.checkJsDate() , date.jsdate.getMonth())) {
      return false;
    }
    if (this$static.dayOfMonth >= 0 && this$static.dayOfMonth != (date.checkJsDate() , date.jsdate.getDate())) {
      return false;
    }
    if (this$static.hours >= 24) {
      return false;
    }
    if (this$static.minutes >= 60) {
      return false;
    }
    if (this$static.seconds >= 60) {
      return false;
    }
    if (this$static.milliseconds >= 1000) {
      return false;
    }
  }
  if (this$static.tzOffset > -2147483648) {
    offset = (date.checkJsDate() , date.jsdate.getTimezoneOffset());
    $setTime0(date, toDouble(add_5(fromDouble((date.checkJsDate() , date.jsdate.getTime())), fromInt((this$static.tzOffset - offset) * 60 * 1000))));
  }
  if (this$static.ambiguousYear) {
    defaultCenturyStart = $Date(new Date_0);
    defaultCenturyStart.setYear((defaultCenturyStart.checkJsDate() , defaultCenturyStart.jsdate.getFullYear() - 1900) - 80);
    compare_0(fromDouble((date.checkJsDate() , date.jsdate.getTime())), fromDouble((defaultCenturyStart.checkJsDate() , defaultCenturyStart.jsdate.getTime()))) < 0 && date.setYear((defaultCenturyStart.checkJsDate() , defaultCenturyStart.jsdate.getFullYear() - 1900) + 100);
  }
  if (this$static.dayOfWeek >= 0) {
    if (this$static.dayOfMonth == -1) {
      adjustment = (7 + this$static.dayOfWeek - (date.checkJsDate() , date.jsdate.getDay())) % 7;
      adjustment > 3 && (adjustment -= 7);
      orgMonth = (date.checkJsDate() , date.jsdate.getMonth());
      $setDate_0(date, (date.checkJsDate() , date.jsdate.getDate()) + adjustment);
      (date.checkJsDate() , date.jsdate.getMonth()) != orgMonth && $setDate_0(date, (date.checkJsDate() , date.jsdate.getDate()) + (adjustment > 0?-7:7));
    }
     else {
      if ((date.checkJsDate() , date.jsdate.getDay()) != this$static.dayOfWeek) {
        return false;
      }
    }
  }
  return true;
}

function getClass_115(){
  return Lcom_google_gwt_i18n_client_impl_DateRecord_2_classLit;
}

function setHours_0(hours){
  this.hours = hours;
}

function setMinutes_0(minutes){
  this.minutes = minutes;
}

function setMonth_0(month){
  this.month = month;
}

function setSeconds_0(seconds){
  this.seconds = seconds;
}

function setYear_0(value){
  this.year = value;
}

function DateRecord(){
}

_ = DateRecord.prototype = new Date_0;
_.getClass$ = getClass_115;
_.setHours_0 = setHours_0;
_.setMinutes_0 = setMinutes_0;
_.setMonth_0 = setMonth_0;
_.setSeconds_0 = setSeconds_0;
_.setYear = setYear_0;
_.typeId$ = 65;
_.ambiguousYear = false;
_.ampm = 0;
_.dayOfMonth = 0;
_.dayOfWeek = 0;
_.era = 0;
_.hours = 0;
_.milliseconds = 0;
_.minutes = 0;
_.month = 0;
_.seconds = 0;
_.tzOffset = 0;
_.year = 0;
function getClass_116(){
  return Lcom_google_gwt_json_client_JSONValue_2_classLit;
}

function isNumber(){
  return null;
}

function JSONValue(){
}

_ = JSONValue.prototype = new Object_0;
_.getClass$ = getClass_116;
_.isNumber = isNumber;
_.typeId$ = 0;
function $JSONArray(this$static, arr){
  this$static.jsArray = arr;
  return this$static;
}

function equals_4(other){
  if (!(other != null && canCast(other.typeId$, 77))) {
    return false;
  }
  return this.jsArray == dynamicCast(other, 77).jsArray;
}

function getClass_117(){
  return Lcom_google_gwt_json_client_JSONArray_2_classLit;
}

function hashCode_6(){
  return getHashCode(this.jsArray);
}

function toString_9(){
  var c, i, sb, v, func;
  sb = $StringBuffer(new StringBuffer);
  sb.impl.string += '[';
  for (i = 0 , c = this.jsArray.length; i < c; ++i) {
    i > 0 && (sb.impl.string += ',' , undefined);
    $append_5(sb, (v = this.jsArray[i] , func = ($clinit_220() , typeMap)[typeof v] , func?func(v):throwUnknownTypeException(typeof v)));
  }
  sb.impl.string += ']';
  return sb.impl.string;
}

function JSONArray(){
}

_ = JSONArray.prototype = new JSONValue;
_.equals$ = equals_4;
_.getClass$ = getClass_117;
_.hashCode$ = hashCode_6;
_.toString$ = toString_9;
_.typeId$ = 66;
_.jsArray = null;
function $clinit_213(){
  $clinit_213 = nullMethod;
  FALSE = $JSONBoolean(new JSONBoolean, false);
  TRUE = $JSONBoolean(new JSONBoolean, true);
}

function $JSONBoolean(this$static, value){
  $clinit_213();
  this$static.value_0 = value;
  return this$static;
}

function getClass_118(){
  return Lcom_google_gwt_json_client_JSONBoolean_2_classLit;
}

function getInstance_0(b){
  $clinit_213();
  if (b) {
    return TRUE;
  }
   else {
    return FALSE;
  }
}

function toString_10(){
  return $clinit_402() , '' + this.value_0;
}

function JSONBoolean(){
}

_ = JSONBoolean.prototype = new JSONValue;
_.getClass$ = getClass_118;
_.toString$ = toString_10;
_.typeId$ = 0;
_.value_0 = false;
var FALSE, TRUE;
function $JSONException(this$static, message){
  $fillInStackTrace();
  this$static.detailMessage = message;
  return this$static;
}

function getClass_119(){
  return Lcom_google_gwt_json_client_JSONException_2_classLit;
}

function JSONException(){
}

_ = JSONException.prototype = new RuntimeException;
_.getClass$ = getClass_119;
_.typeId$ = 67;
function $clinit_215(){
  $clinit_215 = nullMethod;
  instance_1 = ($clinit_215() , new JSONNull);
}

function getClass_120(){
  return Lcom_google_gwt_json_client_JSONNull_2_classLit;
}

function toString_11(){
  return 'null';
}

function JSONNull(){
}

_ = JSONNull.prototype = new JSONValue;
_.getClass$ = getClass_120;
_.toString$ = toString_11;
_.typeId$ = 0;
var instance_1;
function $JSONNumber(this$static, value){
  this$static.value_0 = value;
  return this$static;
}

function $equals_2(this$static, other){
  if (!(other != null && canCast(other.typeId$, 78))) {
    return false;
  }
  return this$static.value_0 == dynamicCast(other, 78).value_0;
}

function equals_5(other){
  return $equals_2(this, other);
}

function getClass_121(){
  return Lcom_google_gwt_json_client_JSONNumber_2_classLit;
}

function hashCode_7(){
  return ~~Math.max(Math.min($Double(new Double, this.value_0).value_0, 2147483647), -2147483648);
}

function isNumber_0(){
  return this;
}

function toString_12(){
  return this.value_0 + '';
}

function JSONNumber(){
}

_ = JSONNumber.prototype = new JSONValue;
_.equals$ = equals_5;
_.getClass$ = getClass_121;
_.hashCode$ = hashCode_7;
_.isNumber = isNumber_0;
_.toString$ = toString_12;
_.typeId$ = 68;
_.value_0 = 0;
function $JSONObject(this$static, jsValue){
  this$static.jsObject = jsValue;
  return this$static;
}

function $computeKeys0(this$static, result){
  var jsObject = this$static.jsObject;
  var i = 0;
  for (var key in jsObject) {
    jsObject.hasOwnProperty(key) && (result[i++] = key);
  }
  return result;
}

function $containsKey(this$static, key){
  return key in this$static.jsObject;
}

function $get_3(this$static, key){
  if (key == null) {
    throw $NullPointerException(new NullPointerException);
  }
  return $get0(this$static, key);
}

function $get0(this$static, key){
  var jsObject = this$static.jsObject;
  var v;
  key = String(key);
  jsObject.hasOwnProperty(key) && (v = jsObject[key]);
  var func = ($clinit_220() , typeMap)[typeof v];
  var ret = func?func(v):throwUnknownTypeException(typeof v);
  return ret;
}

function $toString_4(this$static){
  var first, key, key$array, key$index, key$max, keys, sb;
  sb = $StringBuffer(new StringBuffer);
  sb.impl.string += '{';
  first = true;
  keys = $computeKeys0(this$static, initDim(_3Ljava_lang_String_2_classLit, 229, 1, 0, 0));
  for (key$array = keys , key$index = 0 , key$max = key$array.length; key$index < key$max; ++key$index) {
    key = key$array[key$index];
    first?(first = false):(sb.impl.string += ', ' , undefined);
    $append_6(sb, escapeValue(key));
    sb.impl.string += ':';
    $append_5(sb, $get_3(this$static, key));
  }
  sb.impl.string += '}';
  return sb.impl.string;
}

function equals_6(other){
  if (!(other != null && canCast(other.typeId$, 79))) {
    return false;
  }
  return this.jsObject == dynamicCast(other, 79).jsObject;
}

function getClass_122(){
  return Lcom_google_gwt_json_client_JSONObject_2_classLit;
}

function hashCode_8(){
  return getHashCode(this.jsObject);
}

function toString_13(){
  return $toString_4(this);
}

function JSONObject(){
}

_ = JSONObject.prototype = new JSONValue;
_.equals$ = equals_6;
_.getClass$ = getClass_122;
_.hashCode$ = hashCode_8;
_.toString$ = toString_13;
_.typeId$ = 69;
_.jsObject = null;
function getClass_123(){
  return Ljava_util_AbstractSet_2_classLit;
}

_ = AbstractSet.prototype;
_.getClass$ = getClass_123;
function $JSONObject$1(this$static, this$0, val$keys){
  this$static.this$0 = this$0;
  this$static.val$keys = val$keys;
  return this$static;
}

function $contains_0(this$static, o){
  return o != null && canCast(o.typeId$, 1) && $containsKey(this$static.this$0, dynamicCast(o, 1));
}

function contains_1(o){
  return o != null && canCast(o.typeId$, 1) && $containsKey(this.this$0, dynamicCast(o, 1));
}

function getClass_124(){
  return Lcom_google_gwt_json_client_JSONObject$1_2_classLit;
}

function iterator_0(){
  return $AbstractList$IteratorImpl(new AbstractList$IteratorImpl, $Arrays$ArrayList(new Arrays$ArrayList, this.val$keys));
}

function size_1(){
  return this.val$keys.length;
}

function JSONObject$1(){
}

_ = JSONObject$1.prototype = new AbstractSet;
_.contains = contains_1;
_.getClass$ = getClass_124;
_.iterator_0 = iterator_0;
_.size_1 = size_1;
_.typeId$ = 71;
_.this$0 = null;
_.val$keys = null;
function $clinit_220(){
  $clinit_220 = nullMethod;
  typeMap = {'boolean':createBoolean, number:createNumber, string:createString, object:createObject_0, 'function':createObject_0, undefined:createUndefined};
}

function createBoolean(v){
  return getInstance_0(v);
}

function createNumber(v){
  return $JSONNumber(new JSONNumber, v);
}

function createObject_0(o){
  if (!o) {
    return $clinit_215() , instance_1;
  }
  var v = o.valueOf?o.valueOf():o;
  if (v !== o) {
    var func = typeMap[typeof v];
    return func?func(v):throwUnknownTypeException(typeof v);
  }
   else if (o instanceof Array || o instanceof $wnd.Array) {
    return $JSONArray(new JSONArray, o);
  }
   else {
    return $JSONObject(new JSONObject, o);
  }
}

function createString(v){
  return $JSONString(new JSONString, v);
}

function createUndefined(){
  return null;
}

function throwUnknownTypeException(typeString){
  $clinit_220();
  throw $JSONException(new JSONException, "Unexpected typeof result '" + typeString + "'; please report this bug to the GWT team");
}

var typeMap;
function $JSONString(this$static, value){
  if (value == null) {
    throw $NullPointerException(new NullPointerException);
  }
  this$static.value_0 = value;
  return this$static;
}

function equals_8(other){
  if (!(other != null && canCast(other.typeId$, 80))) {
    return false;
  }
  return $equals_3(this.value_0, dynamicCast(other, 80).value_0);
}

function getClass_125(){
  return Lcom_google_gwt_json_client_JSONString_2_classLit;
}

function hashCode_10(){
  return getHashCode_0(this.value_0);
}

function toString_14(){
  return escapeValue(this.value_0);
}

function JSONString(){
}

_ = JSONString.prototype = new JSONValue;
_.equals$ = equals_8;
_.getClass$ = getClass_125;
_.hashCode$ = hashCode_10;
_.toString$ = toString_14;
_.typeId$ = 72;
_.value_0 = null;
function getClass_127(){
  return Lcom_google_gwt_lang_asyncloaders_AsyncLoader1_1_1Super_2_classLit;
}

_ = AsyncLoader1__Super.prototype;
_.getClass$ = getClass_127;
function getClass_128(){
  return Lcom_google_gwt_lang_asyncloaders_AsyncLoader1_2_classLit;
}

function onLoad_0(){
  loaded = true;
  instance_2 = ($clinit_234() , new AsyncLoader1);
  $fragmentHasLoaded(($clinit_77() , BROWSER_LOADER), 1);
  !!$stats && $stats($createStatsEvent('runCallbacks1', 'begin', null, null));
  instance_2.runCallbacks();
  !!$stats && $stats($createStatsEvent('runCallbacks1', 'end', null, null));
}

function runCallbacks_0(){
  var next;
  while (callbacksHead) {
    next = callbacksHead;
    callbacksHead = callbacksHead.next;
    !callbacksHead && (callbacksTail = null);
    $onSuccess(next.callback);
  }
}

function AsyncLoader1(){
}

_ = AsyncLoader1.prototype = new AsyncLoader1__Super;
_.getClass$ = getClass_128;
_.runCallbacks = runCallbacks_0;
_.typeId$ = 0;
function getClass_129(){
  return Lcom_google_gwt_lang_asyncloaders_AsyncLoader1$1_2_classLit;
}

_ = AsyncLoader1$1.prototype;
_.getClass$ = getClass_129;
function getClass_130(){
  return Lcom_google_gwt_lang_asyncloaders_AsyncLoader1_1_1Callback_2_classLit;
}

_ = AsyncLoader1__Callback.prototype;
_.getClass$ = getClass_130;
function $ImageResourcePrototype(this$static, url, left, top_0, width, height){
  this$static.left = left;
  this$static.top_0 = top_0;
  this$static.height_0 = height;
  this$static.width_0 = width;
  this$static.url = url;
  return this$static;
}

function getClass_131(){
  return Lcom_google_gwt_resources_client_impl_ImageResourcePrototype_2_classLit;
}

function ImageResourcePrototype(){
}

_ = ImageResourcePrototype.prototype = new Object_0;
_.getClass$ = getClass_131;
_.typeId$ = 0;
_.height_0 = 0;
_.left = 0;
_.top_0 = 0;
_.url = null;
_.width_0 = 0;
function attachToDom(element){
  var origParent, origSibling, parent_0;
  ensureHiddenDiv();
  origParent = (parent_0 = ($clinit_96() , element).parentNode , (!parent_0 || parent_0.nodeType != 1) && (parent_0 = null) , parent_0);
  origSibling = $getNextSiblingElement(element);
  hiddenDiv.appendChild(element);
  return $UiBinderUtil$TempAttachment(new UiBinderUtil$TempAttachment, origParent, origSibling, element);
}

function ensureHiddenDiv(){
  if (!hiddenDiv) {
    hiddenDiv = ($clinit_96() , $doc).createElement('div');
    hiddenDiv.style.display = 'none';
    ($clinit_327() , $doc.body).appendChild(hiddenDiv);
  }
}

function orphan(node){
  node.parentNode.removeChild(node);
}

var hiddenDiv = null;
function $UiBinderUtil$TempAttachment(this$static, origParent, origSibling, element){
  this$static.origParent = origParent;
  this$static.origSibling = origSibling;
  this$static.element = element;
  return this$static;
}

function getClass_132(){
  return Lcom_google_gwt_uibinder_client_UiBinderUtil$TempAttachment_2_classLit;
}

function UiBinderUtil$TempAttachment(){
}

_ = UiBinderUtil$TempAttachment.prototype = new Object_0;
_.getClass$ = getClass_132;
_.typeId$ = 0;
_.element = null;
_.origParent = null;
_.origSibling = null;
function $CommandCanceledException(this$static){
  $fillInStackTrace();
  return this$static;
}

function getClass_133(){
  return Lcom_google_gwt_user_client_CommandCanceledException_2_classLit;
}

function CommandCanceledException(){
}

_ = CommandCanceledException.prototype = new RuntimeException;
_.getClass$ = getClass_133;
_.typeId$ = 74;
function $CommandExecutor(this$static){
  this$static.cancellationTimer = $CommandExecutor$1(new CommandExecutor$1, this$static);
  this$static.commands = $ArrayList(new ArrayList);
  this$static.executionTimer = $CommandExecutor$2(new CommandExecutor$2, this$static);
  this$static.iterator = $CommandExecutor$CircularIterator(new CommandExecutor$CircularIterator, this$static);
  return this$static;
}

function $doCommandCanceled(this$static){
  var cmd;
  cmd = $getLast(this$static.iterator);
  $remove_2(this$static.iterator);
  cmd != null && canCast(cmd.typeId$, 81) && $CommandCanceledException(new CommandCanceledException, dynamicCast(cmd, 81));
  this$static.executing = false;
  $maybeStartExecutionTimer(this$static);
}

function $doExecuteCommands(this$static, startTimeMillis){
  var command, element, wasCanceled;
  wasCanceled = false;
  try {
    this$static.executing = true;
    this$static.iterator.end = this$static.commands.size_0;
    $schedule(this$static.cancellationTimer, 10000);
    while ($hasNext(this$static.iterator)) {
      element = $next(this$static.iterator);
      try {
        if (element == null) {
          return;
        }
        if (element != null && canCast(element.typeId$, 81)) {
          command = dynamicCast(element, 81);
          $run(command.this$1, 200, (new Date).getTime());
        }
      }
       finally {
        wasCanceled = this$static.iterator.last == -1;
        if (wasCanceled) {
          return;
        }
        $remove_2(this$static.iterator);
      }
      if ((new Date).getTime() - startTimeMillis >= 100) {
        return;
      }
    }
  }
   finally {
    if (!wasCanceled) {
      $cancel_0(this$static.cancellationTimer);
      this$static.executing = false;
      $maybeStartExecutionTimer(this$static);
    }
  }
}

function $maybeStartExecutionTimer(this$static){
  if (this$static.commands.size_0 != 0 && !this$static.executionTimerPending && !this$static.executing) {
    this$static.executionTimerPending = true;
    $schedule(this$static.executionTimer, 1);
  }
}

function $submit(this$static, command){
  $add(this$static.commands, command);
  $maybeStartExecutionTimer(this$static);
}

function getClass_134(){
  return Lcom_google_gwt_user_client_CommandExecutor_2_classLit;
}

function CommandExecutor(){
}

_ = CommandExecutor.prototype = new Object_0;
_.getClass$ = getClass_134;
_.typeId$ = 0;
_.executing = false;
_.executionTimerPending = false;
function $clinit_246(){
  $clinit_246 = nullMethod;
  $clinit_62();
}

function $CommandExecutor$1(this$static, this$0){
  $clinit_246();
  this$static.this$0 = this$0;
  return this$static;
}

function getClass_135(){
  return Lcom_google_gwt_user_client_CommandExecutor$1_2_classLit;
}

function run_0(){
  if (!this.this$0.executing) {
    return;
  }
  $doCommandCanceled(this.this$0);
}

function CommandExecutor$1(){
}

_ = CommandExecutor$1.prototype = new Timer;
_.getClass$ = getClass_135;
_.run = run_0;
_.typeId$ = 75;
_.this$0 = null;
function $clinit_247(){
  $clinit_247 = nullMethod;
  $clinit_62();
}

function $CommandExecutor$2(this$static, this$0){
  $clinit_247();
  this$static.this$0 = this$0;
  return this$static;
}

function getClass_136(){
  return Lcom_google_gwt_user_client_CommandExecutor$2_2_classLit;
}

function run_1(){
  this.this$0.executionTimerPending = false;
  $doExecuteCommands(this.this$0, (new Date).getTime());
}

function CommandExecutor$2(){
}

_ = CommandExecutor$2.prototype = new Timer;
_.getClass$ = getClass_136;
_.run = run_1;
_.typeId$ = 76;
_.this$0 = null;
function $CommandExecutor$CircularIterator(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function $getLast(this$static){
  return $get(this$static.this$0.commands, this$static.last);
}

function $hasNext(this$static){
  return this$static.next < this$static.end;
}

function $next(this$static){
  var command;
  this$static.last = this$static.next;
  command = $get(this$static.this$0.commands, this$static.next++);
  this$static.next >= this$static.end && (this$static.next = 0);
  return command;
}

function $remove_2(this$static){
  $remove(this$static.this$0.commands, this$static.last);
  --this$static.end;
  this$static.last <= this$static.next && --this$static.next < 0 && (this$static.next = 0);
  this$static.last = -1;
}

function getClass_137(){
  return Lcom_google_gwt_user_client_CommandExecutor$CircularIterator_2_classLit;
}

function hasNext(){
  return this.next < this.end;
}

function next_0(){
  return $next(this);
}

function CommandExecutor$CircularIterator(){
}

_ = CommandExecutor$CircularIterator.prototype = new Object_0;
_.getClass$ = getClass_137;
_.hasNext = hasNext;
_.next_0 = next_0;
_.typeId$ = 0;
_.end = 0;
_.last = -1;
_.next = 0;
_.this$0 = null;
function getFirstChild(elem){
  return $getFirstChildElement(($clinit_96() , elem));
}

function getParent(elem){
  var parent_0;
  return parent_0 = ($clinit_96() , elem).parentNode , (!parent_0 || parent_0.nodeType != 1) && (parent_0 = null) , parent_0;
}

function isOrHasChild(parent_0, child){
  return $isOrHasChild(($clinit_96() , parent_0), child);
}

function releaseCapture(elem){
  !!sCaptureElem && elem == sCaptureElem && (sCaptureElem = null);
  $maybeInitializeEventSystem();
  elem === captureElem && (captureElem = null);
}

function setCapture(elem){
  sCaptureElem = elem;
  $maybeInitializeEventSystem();
  captureElem = elem;
}

function $clinit_250(){
  $clinit_250 = nullMethod;
  commandExecutor = $CommandExecutor(new CommandExecutor);
}

function addCommand(cmd){
  $clinit_250();
  if (!cmd) {
    throw $NullPointerException_0(new NullPointerException, 'cmd cannot be null');
  }
  $submit(commandExecutor, cmd);
}

var commandExecutor;
function addNativePreviewHandler(handler){
  $maybeInitializeEventSystem();
  !TYPE_13 && (TYPE_13 = $GwtEvent$Type(new GwtEvent$Type));
  if (!handlers_0) {
    handlers_0 = $HandlerManager_0(new HandlerManager, null, true);
    singleton = new Event$NativePreviewEvent;
  }
  return $addHandler_0(handlers_0, TYPE_13, handler);
}

function dispatch_12(p0){
  $previewNativeEvent(dynamicCast(p0, 82).this$0, this);
  singleton.isFirstHandler = false;
}

function getAssociatedType_13(){
  return TYPE_13;
}

function getClass_138(){
  return Lcom_google_gwt_user_client_Event$NativePreviewEvent_2_classLit;
}

function isCanceled(){
  return this.isCanceled;
}

function isConsumed(){
  return this.isConsumed;
}

function revive_0(){
  this.dead = false;
  this.source = null;
  this.isCanceled = false;
  this.isConsumed = false;
  this.isFirstHandler = true;
  this.nativeEvent = null;
}

function setNativeEvent_0(nativeEvent){
  this.nativeEvent = nativeEvent;
}

function Event$NativePreviewEvent(){
}

_ = Event$NativePreviewEvent.prototype = new GwtEvent;
_.dispatch = dispatch_12;
_.getAssociatedType = getAssociatedType_13;
_.getClass$ = getClass_138;
_.isCanceled_0 = isCanceled;
_.isConsumed_0 = isConsumed;
_.revive = revive_0;
_.setNativeEvent_0 = setNativeEvent_0;
_.typeId$ = 0;
_.isCanceled = false;
_.isConsumed = false;
_.isFirstHandler = false;
_.nativeEvent = null;
function addValueChangeHandler(handler){
  $clinit_256();
  return impl_0?$addValueChangeHandler(impl_0, handler):null;
}

function getClass_139(){
  return Lcom_google_gwt_user_client_Timer$1_2_classLit;
}

function onClose(event_0){
  while (($clinit_62() , timers).size_0 > 0) {
    $cancel_0(dynamicCast($get(timers, 0), 83));
  }
}

function Timer$1(){
}

_ = Timer$1.prototype = new Object_0;
_.getClass$ = getClass_139;
_.onClose = onClose;
_.typeId$ = 77;
function addResizeHandler(handler){
  maybeInitializeCloseHandlers();
  maybeInitializeResizeHandlers();
  return addHandler((!TYPE_10 && (TYPE_10 = $GwtEvent$Type(new GwtEvent$Type)) , TYPE_10), handler);
}

function maybeInitializeResizeHandlers(){
  if (!resizeHandlersInitialized) {
    $initWindowResizeHandler();
    resizeHandlersInitialized = true;
  }
}

function onResize(){
  var height, width;
  if (resizeHandlersInitialized) {
    width = $getClientWidth($doc);
    height = $getClientHeight($doc);
    if (lastResizeWidth != width || lastResizeHeight != height) {
      lastResizeWidth = width;
      lastResizeHeight = height;
      fire_1(getHandlers());
    }
  }
}

var lastResizeHeight = 0, lastResizeWidth = 0, resizeHandlersInitialized = false;
function getClass_140(){
  return Lcom_google_gwt_user_client_Window$ClosingEvent_2_classLit;
}

_ = Window$ClosingEvent.prototype;
_.getClass$ = getClass_140;
function getClass_141(){
  return Lcom_google_gwt_user_client_Window$WindowHandlers_2_classLit;
}

_ = Window$WindowHandlers.prototype;
_.getClass$ = getClass_141;
function $eventGetFromElement(evt){
  if ($equals_3(($clinit_96() , evt).type, 'mouseover')) {
    return evt.relatedTarget;
  }
  if ($equals_3(evt.type, 'mouseout')) {
    return evt.target;
  }
  return null;
}

function $eventGetToElement(evt){
  if ($equals_3(($clinit_96() , evt).type, 'mouseover')) {
    return evt.target;
  }
  if ($equals_3(evt.type, 'mouseout')) {
    return evt.relatedTarget;
  }
  return null;
}

function $getChild(elem, index){
  var count = 0, child = elem.firstChild;
  while (child) {
    var next = child.nextSibling;
    if (child.nodeType == 1) {
      if (index == count)
        return child;
      ++count;
    }
    child = next;
  }
  return null;
}

function $insertChild(parent_0, toAdd, index){
  var count = 0, child = parent_0.firstChild, before = null;
  while (child) {
    if (child.nodeType == 1) {
      if (count == index) {
        before = child;
        break;
      }
      ++count;
    }
    child = child.nextSibling;
  }
  parent_0.insertBefore(toAdd, before);
}

function $ElementMapperImpl(this$static){
  this$static.uiObjectList = $ArrayList(new ArrayList);
  return this$static;
}

function $get_4(this$static, elem){
  var index, index_0;
  index = (index_0 = elem['__uiObjectID'] , index_0 == null?-1:index_0);
  if (index < 0) {
    return null;
  }
  return dynamicCast($get(this$static.uiObjectList, index), 61);
}

function $put(this$static, uiObject){
  var index;
  if (!this$static.freeList) {
    index = this$static.uiObjectList.size_0;
    $add(this$static.uiObjectList, uiObject);
  }
   else {
    index = this$static.freeList.index;
    $set(this$static.uiObjectList, index, uiObject);
    this$static.freeList = this$static.freeList.next;
  }
  uiObject.element['__uiObjectID'] = index;
}

function $removeByElement(this$static, elem){
  var index, index_0;
  index = (index_0 = elem['__uiObjectID'] , index_0 == null?-1:index_0);
  elem['__uiObjectID'] = null;
  $set(this$static.uiObjectList, index, null);
  this$static.freeList = $ElementMapperImpl$FreeNode(new ElementMapperImpl$FreeNode, index, this$static.freeList);
}

function getClass_142(){
  return Lcom_google_gwt_user_client_impl_ElementMapperImpl_2_classLit;
}

function ElementMapperImpl(){
}

_ = ElementMapperImpl.prototype = new Object_0;
_.getClass$ = getClass_142;
_.typeId$ = 0;
_.freeList = null;
function $ElementMapperImpl$FreeNode(this$static, index, next){
  this$static.index = index;
  this$static.next = next;
  return this$static;
}

function getClass_143(){
  return Lcom_google_gwt_user_client_impl_ElementMapperImpl$FreeNode_2_classLit;
}

function ElementMapperImpl$FreeNode(){
}

_ = ElementMapperImpl$FreeNode.prototype = new Object_0;
_.getClass$ = getClass_143;
_.typeId$ = 0;
_.index = 0;
_.next = null;
function getClass_144(){
  return Lcom_google_gwt_user_client_impl_HistoryImpl_2_classLit;
}

_ = HistoryImpl.prototype;
_.getClass$ = getClass_144;
function getClass_145(){
  return Lcom_google_gwt_user_client_impl_HistoryImplTimer_2_classLit;
}

_ = HistoryImplTimer.prototype;
_.getClass$ = getClass_145;
function getClass_146(){
  return Lcom_google_gwt_user_client_impl_HistoryImplSafari_2_classLit;
}

_ = HistoryImplSafari.prototype;
_.getClass$ = getClass_146;
function $initWindowResizeHandler(){
  var oldOnResize = $wnd.onresize;
  $wnd.onresize = $entry(function(evt){
    try {
      onResize();
    }
     finally {
      oldOnResize && oldOnResize(evt);
    }
  }
  );
}

function $clear_0(this$static){
  var it;
  it = $WidgetCollection$WidgetIterator(new WidgetCollection$WidgetIterator, this$static.children_0);
  while (it.index < it.this$0.size_0 - 1) {
    $next_2(it);
    $remove_11(it);
  }
}

function getClass_147(){
  return Lcom_google_gwt_user_client_ui_Panel_2_classLit;
}

_ = Panel.prototype;
_.getClass$ = getClass_147;
function $add_1(this$static, child, container){
  $removeFromParent(child);
  $add_6(this$static.children_0, child);
  container.appendChild(child.element);
  $setParent(child, this$static);
}

function $remove_3(this$static, w){
  var elem, parent_0;
  if (w.parent_0 != this$static) {
    return false;
  }
  try {
    $setParent(w, null);
  }
   finally {
    elem = w.element;
    (parent_0 = ($clinit_96() , elem).parentNode , (!parent_0 || parent_0.nodeType != 1) && (parent_0 = null) , parent_0).removeChild(elem);
    $remove_10(this$static.children_0, w);
  }
  return true;
}

function getClass_148(){
  return Lcom_google_gwt_user_client_ui_ComplexPanel_2_classLit;
}

function remove(w){
  return $remove_3(this, w);
}

_ = ComplexPanel.prototype;
_.getClass$ = getClass_148;
_.remove = remove;
function $add_2(this$static, w){
  $add_1(this$static, w, this$static.element);
}

function $remove_4(this$static, w){
  var removed;
  removed = $remove_3(this$static, w);
  removed && changeToStaticPositioning(w.element);
  return removed;
}

function changeToStaticPositioning(elem){
  elem.style['left'] = '';
  elem.style['top'] = '';
  elem.style['position'] = '';
}

function getClass_149(){
  return Lcom_google_gwt_user_client_ui_AbsolutePanel_2_classLit;
}

function remove_0(w){
  var removed;
  return removed = $remove_3(this, w) , removed && changeToStaticPositioning(w.element) , removed;
}

_ = AbsolutePanel.prototype;
_.getClass$ = getClass_149;
_.remove = remove_0;
function create_1(resource){
  return $ClippedImagePrototype(new ClippedImagePrototype, resource.url, resource.left, resource.top_0, resource.width_0, resource.height_0);
}

function getClass_150(){
  return Lcom_google_gwt_user_client_ui_AbstractImagePrototype_2_classLit;
}

function AbstractImagePrototype(){
}

_ = AbstractImagePrototype.prototype = new Object_0;
_.getClass$ = getClass_150;
_.typeId$ = 0;
function getClass_151(){
  return Lcom_google_gwt_user_client_ui_AttachDetachException_2_classLit;
}

_ = AttachDetachException.prototype;
_.getClass$ = getClass_151;
function getClass_152(){
  return Lcom_google_gwt_user_client_ui_AttachDetachException$1_2_classLit;
}

_ = AttachDetachException$1.prototype;
_.getClass$ = getClass_152;
function getClass_153(){
  return Lcom_google_gwt_user_client_ui_AttachDetachException$2_2_classLit;
}

_ = AttachDetachException$2.prototype;
_.getClass$ = getClass_153;
function $clinit_277(){
  $clinit_277 = nullMethod;
  $clinit_356();
}

function $FocusWidget(this$static, elem){
  $clinit_277();
  this$static.element = elem;
  this$static.element.tabIndex = 0;
  return this$static;
}

function getClass_154(){
  return Lcom_google_gwt_user_client_ui_FocusWidget_2_classLit;
}

function setTabIndex(index){
  this.element.tabIndex = index;
}

function FocusWidget(){
}

_ = FocusWidget.prototype = new Widget;
_.getClass$ = getClass_154;
_.setTabIndex = setTabIndex;
_.typeId$ = 86;
function $clinit_278(){
  $clinit_278 = nullMethod;
  $clinit_277();
}

function $ButtonBase(this$static, elem){
  $clinit_278();
  this$static.element = elem;
  this$static.setTabIndex(0);
  return this$static;
}

function getClass_155(){
  return Lcom_google_gwt_user_client_ui_ButtonBase_2_classLit;
}

function ButtonBase(){
}

_ = ButtonBase.prototype = new FocusWidget;
_.getClass$ = getClass_155;
_.typeId$ = 87;
function $clinit_279(){
  $clinit_279 = nullMethod;
  $clinit_278();
}

function $Button(this$static){
  var e;
  $clinit_279();
  $ButtonBase(this$static, (e = ($clinit_96() , $doc).createElement('BUTTON') , e.setAttribute('type', 'button') , e));
  this$static.element['className'] = 'gwt-Button';
  return this$static;
}

function getClass_156(){
  return Lcom_google_gwt_user_client_ui_Button_2_classLit;
}

function Button(){
}

_ = Button.prototype = new ButtonBase;
_.getClass$ = getClass_156;
_.typeId$ = 88;
function $CellPanel(this$static){
  this$static.children_0 = $WidgetCollection(new WidgetCollection, this$static);
  this$static.table = ($clinit_96() , $doc).createElement('table');
  this$static.body_0 = $doc.createElement('tbody');
  this$static.table.appendChild(this$static.body_0);
  this$static.element = this$static.table;
  return this$static;
}

function getClass_157(){
  return Lcom_google_gwt_user_client_ui_CellPanel_2_classLit;
}

function CellPanel(){
}

_ = CellPanel.prototype = new ComplexPanel;
_.getClass$ = getClass_157;
_.typeId$ = 89;
_.body_0 = null;
_.table = null;
function $clinit_281(){
  $clinit_281 = nullMethod;
  $clinit_278();
}

function $cleanupCaptureState(this$static){
  if (this$static.isCapturing || this$static.isFocusing) {
    releaseCapture(this$static.element);
    this$static.isCapturing = false;
    this$static.isFocusing = false;
    false != (1 & (!this$static.curFace && $setCurrentFace(this$static, this$static.up) , this$static.curFace.val$faceID)) > 0 && $toggleDown(this$static);
  }
}

function $createFace(this$static, delegateTo, name_0, faceID){
  return $CustomButton$2(new CustomButton$2, delegateTo, this$static, name_0, faceID);
}

function $getCurrentFace(this$static){
  !this$static.curFace && $setCurrentFace(this$static, this$static.up);
  return this$static.curFace;
}

function $getDownFace(this$static){
  !this$static.down && (this$static.down = $createFace(this$static, this$static.up, 'down', 1) , undefined);
  return this$static.down;
}

function $getFaceFromID(this$static, id){
  switch (id) {
    case 1:
      return $getDownFace(this$static);
    case 0:
      return this$static.up;
    case 3:
      return !this$static.downHovering && (this$static.downHovering = $createFace(this$static, $getDownFace(this$static), 'down-hovering', 3) , undefined) , this$static.downHovering;
    case 2:
      return !this$static.upHovering && (this$static.upHovering = $createFace(this$static, this$static.up, 'up-hovering', 2) , undefined) , this$static.upHovering;
    case 4:
      return !this$static.upDisabled && (this$static.upDisabled = $createFace(this$static, this$static.up, 'up-disabled', 4) , undefined) , this$static.upDisabled;
    case 5:
      return !this$static.downDisabled && (this$static.downDisabled = $createFace(this$static, $getDownFace(this$static), 'down-disabled', 5) , undefined) , this$static.downDisabled;
    default:throw $IllegalStateException_0(new IllegalStateException, id + ' is not a known face id.');
  }
}

function $onClick(this$static){
  var evt;
  this$static.allowClick = true;
  evt = $createMouseEvent(($clinit_96() , $doc), 'click', true, true, 1, 0, 0, 0, 0, false, false, false, false, 1, null);
  this$static.element.dispatchEvent(evt);
  this$static.allowClick = false;
}

function $setCurrentFace(this$static, newFace){
  var pressed;
  if (this$static.curFace != newFace) {
    !!this$static.curFace && $removeStyleDependentName(this$static, this$static.curFace.val$name);
    this$static.curFace = newFace;
    $setCurrentFaceElement(this$static, $getFace(newFace));
    $addStyleDependentName(this$static, this$static.curFace.val$name);
    !this$static.element['disabled'] && (pressed = (newFace.val$faceID & 1) == 1 , this$static.element.setAttribute('aria-pressed', pressed?'true':'false') , undefined);
  }
}

function $setCurrentFaceElement(this$static, newFaceElement){
  if (this$static.curFaceElement != newFaceElement) {
    !!this$static.curFaceElement && this$static.element.removeChild(this$static.curFaceElement);
    this$static.curFaceElement = newFaceElement;
    this$static.element.appendChild(this$static.curFaceElement);
  }
}

function $setDown(this$static, down){
  down != (1 & (!this$static.curFace && $setCurrentFace(this$static, this$static.up) , this$static.curFace.val$faceID)) > 0 && $toggleDown(this$static);
}

function $setHovering(this$static, hovering){
  var newFaceID, newFace;
  hovering != (2 & (!this$static.curFace && $setCurrentFace(this$static, this$static.up) , this$static.curFace.val$faceID)) > 0 && (newFaceID = (!this$static.curFace && $setCurrentFace(this$static, this$static.up) , this$static.curFace.val$faceID) ^ 2 , newFaceID &= -5 , newFace = $getFaceFromID(this$static, newFaceID) , $setCurrentFace(this$static, newFace) , undefined);
}

function $toggleDown(this$static){
  var newFaceID, newFace;
  newFaceID = (!this$static.curFace && $setCurrentFace(this$static, this$static.up) , this$static.curFace.val$faceID) ^ 1;
  newFace = $getFaceFromID(this$static, newFaceID);
  $setCurrentFace(this$static, newFace);
}

function getClass_158(){
  return Lcom_google_gwt_user_client_ui_CustomButton_2_classLit;
}

function onAttach_1(){
  !this.curFace && $setCurrentFace(this, this.up);
  $onAttach(this);
}

function onBrowserEvent_1(event_0){
  var keyCode, to, type;
  if (this.element['disabled']) {
    return;
  }
  type = $eventGetTypeInt(($clinit_96() , event_0).type);
  switch (type) {
    case 1:
      if (!this.allowClick) {
        event_0.stopPropagation();
        return;
      }

      break;
    case 4:
      if ($eventGetButton(event_0) == 1) {
        $focus(($clinit_290() , this.element));
        $setDown(dynamicCast(this, 85), true);
        setCapture(this.element);
        this.isCapturing = true;
        event_0.preventDefault();
      }

      break;
    case 8:
      if (this.isCapturing) {
        this.isCapturing = false;
        releaseCapture(this.element);
        if ((2 & $getCurrentFace(dynamicCast(this, 85)).val$faceID) > 0 && $eventGetButton(event_0) == 1) {
          $setDown(dynamicCast(this, 85), false);
          $onClick(dynamicCast(this, 85));
        }
      }

      break;
    case 64:
      this.isCapturing && (event_0.preventDefault() , undefined);
      break;
    case 32:
      to = $eventGetToElement(event_0);
      if ($isOrHasChild(this.element, event_0.target) && (!to || !$isOrHasChild(this.element, to))) {
        this.isCapturing && $setDown(dynamicCast(this, 85), false);
        $setHovering(this, false);
      }

      break;
    case 16:
      if ($isOrHasChild(this.element, event_0.target)) {
        $setHovering(this, true);
        this.isCapturing && $setDown(dynamicCast(this, 85), true);
      }

      break;
    case 4096:
      if (this.isFocusing) {
        this.isFocusing = false;
        $setDown(dynamicCast(this, 85), false);
      }

      break;
    case 8192:
      if (this.isCapturing) {
        this.isCapturing = false;
        $setDown(dynamicCast(this, 85), false);
      }

  }
  $onBrowserEvent(this, event_0);
  if (($eventGetTypeInt(event_0.type) & 896) != 0) {
    keyCode = (event_0.which || event_0.keyCode || 0) & 65535;
    switch (type) {
      case 128:
        if (keyCode == 32) {
          this.isFocusing = true;
          $setDown(dynamicCast(this, 85), true);
        }

        break;
      case 512:
        if (this.isFocusing && keyCode == 32) {
          this.isFocusing = false;
          $setDown(dynamicCast(this, 85), false);
          $onClick(dynamicCast(this, 85));
        }

        break;
      case 256:
        if (keyCode == 10 || keyCode == 13) {
          $setDown(dynamicCast(this, 85), true);
          $setDown(dynamicCast(this, 85), false);
          $onClick(dynamicCast(this, 85));
        }

    }
  }
}

function onDetach_1(){
  $onDetach(this);
  $cleanupCaptureState(this);
  $setHovering(this, false);
}

function setTabIndex_0(index){
  ($clinit_290() , this.element).tabIndex = index;
}

function CustomButton(){
}

_ = CustomButton.prototype = new ButtonBase;
_.getClass$ = getClass_158;
_.onAttach = onAttach_1;
_.onBrowserEvent = onBrowserEvent_1;
_.onDetach = onDetach_1;
_.setTabIndex = setTabIndex_0;
_.typeId$ = 90;
_.allowClick = false;
_.curFace = null;
_.curFaceElement = null;
_.down = null;
_.downDisabled = null;
_.downHovering = null;
_.isCapturing = false;
_.isFocusing = false;
_.up = null;
_.upDisabled = null;
_.upHovering = null;
function $getFace(this$static){
  if (!this$static.face) {
    if (!this$static.delegateTo) {
      this$static.face = ($clinit_96() , $doc).createElement('div');
      return this$static.face;
    }
     else {
      return $getFace(this$static.delegateTo);
    }
  }
   else {
    return this$static.face;
  }
}

function $setHTML_0(this$static, html){
  this$static.face = ($clinit_96() , $doc).createElement('div');
  setStyleName(this$static.face, 'html-face', true);
  this$static.face.innerHTML = html || '';
  !!this$static.this$0.curFace && $getFace(this$static.this$0.curFace) == $getFace(this$static) && $setCurrentFaceElement(this$static.this$0, this$static.face);
}

function getClass_159(){
  return Lcom_google_gwt_user_client_ui_CustomButton$Face_2_classLit;
}

function toString_16(){
  return dynamicCast(this, 86).val$name;
}

function CustomButton$Face(){
}

_ = CustomButton$Face.prototype = new Object_0;
_.getClass$ = getClass_159;
_.toString$ = toString_16;
_.typeId$ = 91;
_.delegateTo = null;
_.face = null;
_.this$0 = null;
function $CustomButton$2(this$static, $anonymous0, this$0, val$name, val$faceID){
  this$static.val$name = val$name;
  this$static.val$faceID = val$faceID;
  this$static.this$0 = this$0;
  this$static.delegateTo = $anonymous0;
  return this$static;
}

function getClass_160(){
  return Lcom_google_gwt_user_client_ui_CustomButton$2_2_classLit;
}

function CustomButton$2(){
}

_ = CustomButton$2.prototype = new CustomButton$Face;
_.getClass$ = getClass_160;
_.typeId$ = 92;
_.val$faceID = 0;
_.val$name = null;
function $add_3(this$static, w){
  if (this$static.widget) {
    throw $IllegalStateException_0(new IllegalStateException, 'SimplePanel can only contain one child widget');
  }
  this$static.setWidget(w);
}

function $remove_5(this$static, w){
  if (this$static.widget != w) {
    return false;
  }
  try {
    $setParent(w, null);
  }
   finally {
    this$static.getContainerElement().removeChild(w.element);
    this$static.widget = null;
  }
  return true;
}

function $setWidget(this$static, w){
  if (w == this$static.widget) {
    return;
  }
  !!w && $removeFromParent(w);
  !!this$static.widget && $remove_5(this$static, this$static.widget);
  this$static.widget = w;
  if (w) {
    this$static.getContainerElement().appendChild(this$static.widget.element);
    $setParent(w, this$static);
  }
}

function getClass_161(){
  return Lcom_google_gwt_user_client_ui_SimplePanel_2_classLit;
}

function getContainerElement(){
  return this.element;
}

function iterator_2(){
  return $SimplePanel$1(new SimplePanel$1, this);
}

function remove_1(w){
  return $remove_5(this, w);
}

function setWidget(w){
  $setWidget(this, w);
}

_ = SimplePanel.prototype;
_.getClass$ = getClass_161;
_.getContainerElement = getContainerElement;
_.iterator_0 = iterator_2;
_.remove = remove_1;
_.setWidget = setWidget;
function $clinit_285(){
  $clinit_285 = nullMethod;
  DEFAULT_ROW_STYLENAMES = initValues(_3Ljava_lang_String_2_classLit, 229, 1, ['top', 'middle', 'bottom']);
}

function $DecoratorPanel(this$static){
  $clinit_285();
  $DecoratorPanel_0(this$static, DEFAULT_ROW_STYLENAMES, 1);
  return this$static;
}

function $DecoratorPanel_0(this$static, rowStyles, containerIndex){
  var i, row, table, trElem;
  $clinit_285();
  this$static.element = ($clinit_96() , $doc).createElement('table');
  table = this$static.element;
  this$static.tbody = $doc.createElement('tbody');
  table.appendChild(this$static.tbody);
  table['cellSpacing'] = 0;
  table['cellPadding'] = 0;
  for (i = 0; i < rowStyles.length; ++i) {
    row = (trElem = $doc.createElement('tr') , trElem['className'] = rowStyles[i] , $clinit_202() , trElem.appendChild(createTD(rowStyles[i] + 'Left')) , trElem.appendChild(createTD(rowStyles[i] + 'Center')) , trElem.appendChild(createTD(rowStyles[i] + 'Right')) , trElem);
    this$static.tbody.appendChild(row);
    i == containerIndex && (this$static.containerElem = $getFirstChildElement($getChild(row, 1)));
  }
  this$static.element['className'] = 'gwt-DecoratorPanel';
  return this$static;
}

function createTD(styleName){
  var inner, tdElem;
  tdElem = ($clinit_96() , $doc).createElement('td');
  inner = $doc.createElement('div');
  tdElem.appendChild(inner);
  tdElem['className'] = styleName;
  inner['className'] = styleName + 'Inner';
  return tdElem;
}

function getClass_162(){
  return Lcom_google_gwt_user_client_ui_DecoratorPanel_2_classLit;
}

function getContainerElement_0(){
  return this.containerElem;
}

function DecoratorPanel(){
}

_ = DecoratorPanel.prototype = new SimplePanel;
_.getClass$ = getClass_162;
_.getContainerElement = getContainerElement_0;
_.typeId$ = 94;
_.containerElem = null;
_.tbody = null;
var DEFAULT_ROW_STYLENAMES;
function $HTMLTable(this$static){
  this$static.widgetMap = $ElementMapperImpl(new ElementMapperImpl);
  this$static.tableElem = ($clinit_96() , $doc).createElement('table');
  this$static.bodyElem = $doc.createElement('tbody');
  this$static.tableElem.appendChild(this$static.bodyElem);
  this$static.element = this$static.tableElem;
  return this$static;
}

function $checkCellBounds(this$static, row, column){
  var cellSize;
  $checkRowBounds(this$static, row);
  if (column < 0) {
    throw $IndexOutOfBoundsException_0(new IndexOutOfBoundsException, 'Column ' + column + ' must be non-negative: ' + column);
  }
  cellSize = this$static.getCellCount(row);
  if (cellSize <= column) {
    throw $IndexOutOfBoundsException_0(new IndexOutOfBoundsException, 'Column index: ' + column + ', Column size: ' + this$static.getCellCount(row));
  }
}

function $checkRowBounds(this$static, row){
  var rowSize;
  rowSize = this$static.getRowCount();
  if (row >= rowSize || row < 0) {
    throw $IndexOutOfBoundsException_0(new IndexOutOfBoundsException, 'Row index: ' + row + ', Row size: ' + rowSize);
  }
}

function $clearCell(this$static, row, column){
  var td;
  td = $getElement(this$static.cellFormatter, row, column);
  return $internalClearCell(this$static, td, true);
}

function $getEventTargetCell(this$static, event_0){
  var body, td, tr, parent_0, parent_1, parent_2;
  td = ($clinit_96() , event_0).target;
  for (; td; td = (parent_0 = td.parentNode , (!parent_0 || parent_0.nodeType != 1) && (parent_0 = null) , parent_0)) {
    if ($equalsIgnoreCase(td['tagName'] == null?null:String(td['tagName']), 'td')) {
      tr = (parent_1 = td.parentNode , (!parent_1 || parent_1.nodeType != 1) && (parent_1 = null) , parent_1);
      body = (parent_2 = tr.parentNode , (!parent_2 || parent_2.nodeType != 1) && (parent_2 = null) , parent_2);
      if (body == this$static.bodyElem) {
        return td;
      }
    }
    if (td == this$static.bodyElem) {
      return null;
    }
  }
  return null;
}

function $getWidgetImpl(this$static, row, column){
  var child, e;
  e = this$static.cellFormatter.this$0.bodyElem.rows[row].cells[column];
  child = $getFirstChildElement(($clinit_96() , e));
  if (!child) {
    return null;
  }
   else {
    return dynamicCast($get_4(this$static.widgetMap, child), 13);
  }
}

function $internalClearCell(this$static, td, clearInnerHTML){
  var maybeChild, widget;
  maybeChild = $getFirstChildElement(($clinit_96() , td));
  widget = null;
  !!maybeChild && (widget = dynamicCast($get_4(this$static.widgetMap, maybeChild), 13));
  if (widget) {
    $remove_6(this$static, widget);
    return true;
  }
   else {
    clearInnerHTML && (td.innerHTML = '' , undefined);
    return false;
  }
}

function $isCellPresent(this$static, row, column){
  if (row >= this$static.bodyElem.rows.length || row < 0) {
    return false;
  }
  if (column < 0 || column >= ($checkRowBounds(this$static, row) , this$static.bodyElem.rows[row].cells.length)) {
    return false;
  }
   else {
    return true;
  }
}

function $remove_6(this$static, widget){
  var elem, parent_0;
  if (widget.parent_0 != this$static) {
    return false;
  }
  try {
    $setParent(widget, null);
  }
   finally {
    elem = widget.element;
    (parent_0 = ($clinit_96() , elem).parentNode , (!parent_0 || parent_0.nodeType != 1) && (parent_0 = null) , parent_0).removeChild(elem);
    $removeByElement(this$static.widgetMap, elem);
  }
  return true;
}

function $removeCell(this$static, row, column){
  var td, tr, td_0;
  $checkCellBounds(this$static, row, column);
  td = (td_0 = this$static.cellFormatter.this$0.bodyElem.rows[row].cells[column] , $internalClearCell(this$static, td_0, false) , td_0);
  tr = this$static.bodyElem.rows[row];
  tr.removeChild(td);
}

function $removeRow(this$static, row){
  var column, columnCount, td;
  columnCount = this$static.getCellCount(row);
  for (column = 0; column < columnCount; ++column) {
    td = this$static.cellFormatter.this$0.bodyElem.rows[row].cells[column];
    $internalClearCell(this$static, td, false);
  }
  this$static.bodyElem.removeChild(this$static.bodyElem.rows[row]);
}

function $setColumnFormatter(this$static, formatter){
  this$static.columnFormatter = formatter;
  $prepareColumnGroup(this$static.columnFormatter);
}

function $setText_0(this$static, row, column, text){
  var td, td_0;
  $prepareCell(this$static, row, column);
  td = (td_0 = this$static.cellFormatter.this$0.bodyElem.rows[row].cells[column] , $internalClearCell(this$static, td_0, text == null) , td_0);
  text != null && $setInnerText(($clinit_96() , td), text);
}

function $setWidget_0(this$static, row, column, widget){
  var td, td_0;
  this$static.prepareCell(row, column);
  if (widget) {
    $removeFromParent(widget);
    td = (td_0 = this$static.cellFormatter.this$0.bodyElem.rows[row].cells[column] , $internalClearCell(this$static, td_0, true) , td_0);
    $put(this$static.widgetMap, widget);
    td.appendChild(widget.element);
    $setParent(widget, this$static);
  }
}

function getClass_163(){
  return Lcom_google_gwt_user_client_ui_HTMLTable_2_classLit;
}

function iterator_3(){
  return $HTMLTable$1(new HTMLTable$1, this);
}

function remove_2(widget){
  return $remove_6(this, widget);
}

function HTMLTable(){
}

_ = HTMLTable.prototype = new Panel;
_.getClass$ = getClass_163;
_.iterator_0 = iterator_3;
_.remove = remove_2;
_.typeId$ = 95;
_.bodyElem = null;
_.cellFormatter = null;
_.columnFormatter = null;
_.tableElem = null;
function $prepareRow(this$static, row){
  var i, rowCount, tr;
  if (row < 0) {
    throw $IndexOutOfBoundsException_0(new IndexOutOfBoundsException, 'Cannot create a row with a negative index: ' + row);
  }
  rowCount = this$static.bodyElem.rows.length;
  for (i = rowCount; i <= row; ++i) {
    i != this$static.bodyElem.rows.length && $checkRowBounds(this$static, i);
    tr = ($clinit_96() , $doc).createElement('tr');
    $insertChild(this$static.bodyElem, tr, i);
  }
}

function addCells(table, row, num){
  var rowElem = table.rows[row];
  for (var i = 0; i < num; i++) {
    var cell = $doc.createElement('td');
    rowElem.appendChild(cell);
  }
}

function getCellCount(row){
  return $checkRowBounds(this, row) , this.bodyElem.rows[row].cells.length;
}

function getClass_164(){
  return Lcom_google_gwt_user_client_ui_FlexTable_2_classLit;
}

function getRowCount(){
  return this.bodyElem.rows.length;
}

function prepareCell(row, column){
  var cellCount, required;
  $prepareRow(this, row);
  if (column < 0) {
    throw $IndexOutOfBoundsException_0(new IndexOutOfBoundsException, 'Cannot create a column with a negative index: ' + column);
  }
  cellCount = ($checkRowBounds(this, row) , this.bodyElem.rows[row].cells.length);
  required = column + 1 - cellCount;
  required > 0 && addCells(this.bodyElem, row, required);
}

function FlexTable(){
}

_ = FlexTable.prototype = new HTMLTable;
_.getCellCount = getCellCount;
_.getClass$ = getClass_164;
_.getRowCount = getRowCount;
_.prepareCell = prepareCell;
_.typeId$ = 96;
function $HTMLTable$CellFormatter(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function $getElement(this$static, row, column){
  $checkCellBounds(this$static.this$0, row, column);
  return this$static.this$0.bodyElem.rows[row].cells[column];
}

function $setStyleName_0(this$static, row, column, styleName){
  this$static.this$0.prepareCell(row, column);
  this$static.this$0.bodyElem.rows[row].cells[column]['className'] = styleName;
}

function getClass_165(){
  return Lcom_google_gwt_user_client_ui_HTMLTable$CellFormatter_2_classLit;
}

function HTMLTable$CellFormatter(){
}

_ = HTMLTable$CellFormatter.prototype = new Object_0;
_.getClass$ = getClass_165;
_.typeId$ = 0;
_.this$0 = null;
function $FlexTable$FlexCellFormatter(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function getClass_166(){
  return Lcom_google_gwt_user_client_ui_FlexTable$FlexCellFormatter_2_classLit;
}

function FlexTable$FlexCellFormatter(){
}

_ = FlexTable$FlexCellFormatter.prototype = new HTMLTable$CellFormatter;
_.getClass$ = getClass_166;
_.typeId$ = 0;
function $clinit_290(){
  $clinit_290 = nullMethod;
  impl_1 = ($clinit_356() , $clinit_356() , implPanel);
}

var impl_1;
function $Grid(this$static){
  $HTMLTable(this$static);
  this$static.cellFormatter = $HTMLTable$CellFormatter(new HTMLTable$CellFormatter, this$static);
  $setColumnFormatter(this$static, $HTMLTable$ColumnFormatter(new HTMLTable$ColumnFormatter, this$static));
  return this$static;
}

function $Grid_0(this$static, rows, columns){
  $Grid(this$static);
  $resizeColumns(this$static, columns);
  $resizeRows(this$static, rows);
  return this$static;
}

function $prepareCell(this$static, row, column){
  $prepareRow_0(this$static, row);
  if (column < 0) {
    throw $IndexOutOfBoundsException_0(new IndexOutOfBoundsException, 'Cannot access a column with a negative index: ' + column);
  }
  if (column >= this$static.numColumns) {
    throw $IndexOutOfBoundsException_0(new IndexOutOfBoundsException, 'Column index: ' + column + ', Column size: ' + this$static.numColumns);
  }
}

function $prepareRow_0(this$static, row){
  if (row < 0) {
    throw $IndexOutOfBoundsException_0(new IndexOutOfBoundsException, 'Cannot access a row with a negative index: ' + row);
  }
  if (row >= this$static.numRows) {
    throw $IndexOutOfBoundsException_0(new IndexOutOfBoundsException, 'Row index: ' + row + ', Row size: ' + this$static.numRows);
  }
}

function $removeRow_0(this$static, row){
  $removeRow(this$static, row);
  --this$static.numRows;
}

function $resizeColumns(this$static, columns){
  var i, j, td_1, tr_0, td_2;
  if (this$static.numColumns == columns) {
    return;
  }
  if (columns < 0) {
    throw $IndexOutOfBoundsException_0(new IndexOutOfBoundsException, 'Cannot set number of columns to ' + columns);
  }
  if (this$static.numColumns > columns) {
    for (i = 0; i < this$static.numRows; ++i) {
      for (j = this$static.numColumns - 1; j >= columns; --j) {
        $removeCell(this$static, i, j);
      }
    }
  }
   else {
    for (i = 0; i < this$static.numRows; ++i) {
      for (j = this$static.numColumns; j < columns; ++j) {
        tr_0 = this$static.bodyElem.rows[i];
        td_1 = (td_2 = ($clinit_96() , $doc).createElement('td') , td_2.innerHTML = '&nbsp;' , td_2);
        $insertChild(tr_0, td_1, j);
      }
    }
  }
  this$static.numColumns = columns;
}

function $resizeRows(this$static, rows){
  if (this$static.numRows == rows) {
    return;
  }
  if (rows < 0) {
    throw $IndexOutOfBoundsException_0(new IndexOutOfBoundsException, 'Cannot set number of rows to ' + rows);
  }
  if (this$static.numRows < rows) {
    addRows(this$static.bodyElem, rows - this$static.numRows, this$static.numColumns);
    this$static.numRows = rows;
  }
   else {
    while (this$static.numRows > rows) {
      $removeRow_0(this$static, this$static.numRows - 1);
    }
  }
}

function addRows(table, rows, columns){
  var td = $doc.createElement('td');
  td.innerHTML = '&nbsp;';
  var row = $doc.createElement('tr');
  for (var cellNum = 0; cellNum < columns; cellNum++) {
    var cell = td.cloneNode(true);
    row.appendChild(cell);
  }
  table.appendChild(row);
  for (var rowNum = 1; rowNum < rows; rowNum++) {
    table.appendChild(row.cloneNode(true));
  }
}

function getCellCount_0(row){
  return this.numColumns;
}

function getClass_167(){
  return Lcom_google_gwt_user_client_ui_Grid_2_classLit;
}

function getRowCount_0(){
  return this.numRows;
}

function prepareCell_0(row, column){
  $prepareCell(this, row, column);
}

function Grid(){
}

_ = Grid.prototype = new HTMLTable;
_.getCellCount = getCellCount_0;
_.getClass$ = getClass_167;
_.getRowCount = getRowCount_0;
_.prepareCell = prepareCell_0;
_.typeId$ = 97;
_.numColumns = 0;
_.numRows = 0;
function $Label(this$static){
  this$static.element = ($clinit_96() , $doc).createElement('div');
  this$static.element['className'] = 'gwt-Label';
  return this$static;
}

function getClass_168(){
  return Lcom_google_gwt_user_client_ui_Label_2_classLit;
}

function Label(){
}

_ = Label.prototype = new Widget;
_.getClass$ = getClass_168;
_.typeId$ = 98;
function $HTML(this$static){
  this$static.element = ($clinit_96() , $doc).createElement('div');
  this$static.element['className'] = 'gwt-HTML';
  return this$static;
}

function getClass_169(){
  return Lcom_google_gwt_user_client_ui_HTML_2_classLit;
}

function HTML(){
}

_ = HTML.prototype = new Label;
_.getClass$ = getClass_169;
_.typeId$ = 99;
function $HTMLPanel(this$static, html){
  this$static.children_0 = $WidgetCollection(new WidgetCollection, this$static);
  this$static.element = ($clinit_96() , $doc).createElement('div');
  this$static.element.innerHTML = html || '';
  return this$static;
}

function getClass_170(){
  return Lcom_google_gwt_user_client_ui_HTMLPanel_2_classLit;
}

function HTMLPanel(){
}

_ = HTMLPanel.prototype = new ComplexPanel;
_.getClass$ = getClass_170;
_.typeId$ = 100;
function $HTMLTable$1(this$static, this$0){
  this$static.this$0 = this$0;
  this$static.widgetList = this$static.this$0.widgetMap.uiObjectList;
  $findNext(this$static);
  return this$static;
}

function $findNext(this$static){
  while (++this$static.nextIndex < this$static.widgetList.size_0) {
    if ($get(this$static.widgetList, this$static.nextIndex) != null) {
      return;
    }
  }
}

function $next_0(this$static){
  var result;
  if (this$static.nextIndex >= this$static.widgetList.size_0) {
    throw $NoSuchElementException(new NoSuchElementException);
  }
  result = dynamicCast($get(this$static.widgetList, this$static.nextIndex), 13);
  $findNext(this$static);
  return result;
}

function getClass_171(){
  return Lcom_google_gwt_user_client_ui_HTMLTable$1_2_classLit;
}

function hasNext_0(){
  return this.nextIndex < this.widgetList.size_0;
}

function next_1(){
  return $next_0(this);
}

function HTMLTable$1(){
}

_ = HTMLTable$1.prototype = new Object_0;
_.getClass$ = getClass_171;
_.hasNext = hasNext_0;
_.next_0 = next_1;
_.typeId$ = 0;
_.nextIndex = -1;
_.this$0 = null;
function $HTMLTable$ColumnFormatter(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function $prepareColumnGroup(this$static){
  if (!this$static.columnGroup) {
    this$static.columnGroup = ($clinit_96() , $doc).createElement('colgroup');
    $insertChild(this$static.this$0.tableElem, this$static.columnGroup, 0);
    this$static.columnGroup.appendChild($doc.createElement('col'));
  }
}

function getClass_172(){
  return Lcom_google_gwt_user_client_ui_HTMLTable$ColumnFormatter_2_classLit;
}

function HTMLTable$ColumnFormatter(){
}

_ = HTMLTable$ColumnFormatter.prototype = new Object_0;
_.getClass$ = getClass_172;
_.typeId$ = 0;
_.columnGroup = null;
_.this$0 = null;
function $clinit_303(){
  $clinit_303 = nullMethod;
  $HasHorizontalAlignment$HorizontalAlignmentConstant(new HasHorizontalAlignment$HorizontalAlignmentConstant, 'center');
  ALIGN_LEFT = $HasHorizontalAlignment$HorizontalAlignmentConstant(new HasHorizontalAlignment$HorizontalAlignmentConstant, 'left');
  $HasHorizontalAlignment$HorizontalAlignmentConstant(new HasHorizontalAlignment$HorizontalAlignmentConstant, 'right');
  ALIGN_DEFAULT = ($clinit_202() , ALIGN_LEFT);
}

var ALIGN_DEFAULT, ALIGN_LEFT;
function $HasHorizontalAlignment$HorizontalAlignmentConstant(this$static, textAlignString){
  this$static.textAlignString = textAlignString;
  return this$static;
}

function getClass_173(){
  return Lcom_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_2_classLit;
}

function HasHorizontalAlignment$HorizontalAlignmentConstant(){
}

_ = HasHorizontalAlignment$HorizontalAlignmentConstant.prototype = new Object_0;
_.getClass$ = getClass_173;
_.typeId$ = 0;
_.textAlignString = null;
function $clinit_308(){
  $clinit_308 = nullMethod;
  $HasVerticalAlignment$VerticalAlignmentConstant(new HasVerticalAlignment$VerticalAlignmentConstant, 'bottom');
  $HasVerticalAlignment$VerticalAlignmentConstant(new HasVerticalAlignment$VerticalAlignmentConstant, 'middle');
  ALIGN_TOP = $HasVerticalAlignment$VerticalAlignmentConstant(new HasVerticalAlignment$VerticalAlignmentConstant, 'top');
}

var ALIGN_TOP;
function $HasVerticalAlignment$VerticalAlignmentConstant(this$static, verticalAlignString){
  this$static.verticalAlignString = verticalAlignString;
  return this$static;
}

function getClass_174(){
  return Lcom_google_gwt_user_client_ui_HasVerticalAlignment$VerticalAlignmentConstant_2_classLit;
}

function HasVerticalAlignment$VerticalAlignmentConstant(){
}

_ = HasVerticalAlignment$VerticalAlignmentConstant.prototype = new Object_0;
_.getClass$ = getClass_174;
_.typeId$ = 0;
_.verticalAlignString = null;
function $HorizontalPanel(this$static){
  $CellPanel(this$static);
  this$static.horzAlign = ($clinit_303() , ALIGN_DEFAULT);
  this$static.vertAlign = ($clinit_308() , ALIGN_TOP);
  this$static.tableRow = ($clinit_96() , $doc).createElement('tr');
  this$static.body_0.appendChild(this$static.tableRow);
  this$static.table['cellSpacing'] = '0';
  this$static.table['cellPadding'] = '0';
  return this$static;
}

function $add_4(this$static, w){
  var td, td_0;
  td = (td_0 = ($clinit_96() , $doc).createElement('td') , td_0['align'] = this$static.horzAlign.textAlignString , td_0.style['verticalAlign'] = this$static.vertAlign.verticalAlignString , td_0);
  this$static.tableRow.appendChild(td);
  $removeFromParent(w);
  $add_6(this$static.children_0, w);
  td.appendChild(w.element);
  $setParent(w, this$static);
}

function getClass_175(){
  return Lcom_google_gwt_user_client_ui_HorizontalPanel_2_classLit;
}

function remove_3(w){
  var removed, td;
  td = getParent(w.element);
  removed = $remove_3(this, w);
  removed && this.tableRow.removeChild(td);
  return removed;
}

function HorizontalPanel(){
}

_ = HorizontalPanel.prototype = new CellPanel;
_.getClass$ = getClass_175;
_.remove = remove_3;
_.typeId$ = 101;
_.tableRow = null;
function $clinit_313(){
  $clinit_313 = nullMethod;
  $clearImpl(new HashMap);
}

function $Image(this$static, url, left, top_0, width, height){
  $clinit_313();
  this$static.state = $Image$ClippedState(new Image$ClippedState, this$static, url, left, top_0, width, height);
  this$static.element['className'] = 'gwt-Image';
  return this$static;
}

function getClass_176(){
  return Lcom_google_gwt_user_client_ui_Image_2_classLit;
}

function Image_0(){
}

_ = Image_0.prototype = new Widget;
_.getClass$ = getClass_176;
_.typeId$ = 102;
_.state = null;
function getClass_177(){
  return Lcom_google_gwt_user_client_ui_Image$State_2_classLit;
}

function Image$State(){
}

_ = Image$State.prototype = new Object_0;
_.getClass$ = getClass_177;
_.typeId$ = 0;
function $Image$ClippedState(this$static, image, url, left, top_0, width, height){
  var tmp, style_1;
  this$static.width_0 = width;
  $replaceElement_0(image, (tmp = ($clinit_96() , $doc).createElement('span') , tmp.innerHTML = (style_1 = 'width: ' + width + 'px; height: ' + height + 'px; background: url(' + url + ') no-repeat ' + -left + 'px ' + -top_0 + 'px' , "<img src='" + $moduleBase + "clear.cache.gif' style='" + style_1 + "' border='0'>") || '' , $getFirstChildElement(tmp)));
  $sinkEvents(image, 163965);
  return this$static;
}

function getClass_178(){
  return Lcom_google_gwt_user_client_ui_Image$ClippedState_2_classLit;
}

function Image$ClippedState(){
}

_ = Image$ClippedState.prototype = new Image$State;
_.getClass$ = getClass_178;
_.typeId$ = 0;
_.width_0 = 0;
function $clinit_318(){
  $clinit_318 = nullMethod;
  $clinit_277();
}

function $ListBox(this$static){
  var select;
  $clinit_318();
  $FocusWidget(this$static, (select = ($clinit_96() , $doc).createElement('select') , select));
  this$static.element['className'] = 'gwt-ListBox';
  return this$static;
}

function $checkIndex(this$static, index){
  if (index < 0 || index >= ($clinit_96() , this$static.element).children.length) {
    throw $IndexOutOfBoundsException(new IndexOutOfBoundsException);
  }
}

function $getValue_1(this$static, index){
  $checkIndex(this$static, index);
  return ($clinit_96() , this$static.element).children[index].value;
}

function $insertItem(this$static, item, index){
  $insertItem_0(this$static, item, item, index);
}

function $insertItem_0(this$static, item, value, index){
  var before, option, select;
  select = this$static.element;
  option = ($clinit_96() , $doc).createElement('option');
  option.text = item;
  option.value = value;
  if (index == -1 || index == select.children.length) {
    select.add(option, null);
  }
   else {
    before = select.children[index];
    select.add(option, before);
  }
}

function getClass_179(){
  return Lcom_google_gwt_user_client_ui_ListBox_2_classLit;
}

function ListBox(){
}

_ = ListBox.prototype = new FocusWidget;
_.getClass$ = getClass_179;
_.typeId$ = 103;
function $PopupPanel(this$static){
  var parent_0;
  this$static.element = ($clinit_96() , $doc).createElement('div');
  this$static.glassResizer = new PopupPanel$1;
  this$static.animType = ($clinit_323() , CENTER);
  this$static.resizeAnimation = $PopupPanel$ResizeAnimation(new PopupPanel$ResizeAnimation, this$static);
  this$static.element.appendChild($doc.createElement('div'));
  $setPopupPosition(this$static, 0, 0);
  (parent_0 = $getFirstChildElement(this$static.element).parentNode , (!parent_0 || parent_0.nodeType != 1) && (parent_0 = null) , parent_0)['className'] = 'gwt-PopupPanel';
  $getFirstChildElement(this$static.element)['className'] = 'popupContent';
  return this$static;
}

function $PopupPanel_0(this$static, autoHide){
  $PopupPanel(this$static);
  this$static.autoHide = autoHide;
  this$static.autoHideOnHistoryEvents = autoHide;
  return this$static;
}

function $eventTargetsPopup(this$static, event_0){
  var target;
  target = ($clinit_96() , event_0).target;
  if (is_0(target)) {
    return $isOrHasChild(this$static.element, target);
  }
  return false;
}

function $hide(this$static){
  if (!this$static.showing) {
    return;
  }
  $setState(this$static, false, true);
  fire_0(this$static);
}

function $maybeUpdateSize(this$static){
  var w;
  w = this$static.widget;
  if (w) {
    this$static.desiredHeight != null && w.setHeight(this$static.desiredHeight);
    this$static.desiredWidth != null && w.setWidth(this$static.desiredWidth);
  }
}

function $previewNativeEvent(this$static, event_0){
  var eventTargetsPopupOrPartner, nativeEvent, target, type;
  if (event_0.isCanceled || !this$static.previewAllNativeEvents && event_0.isConsumed) {
    this$static.modal && (event_0.isCanceled = true);
    return;
  }
  if (event_0.isCanceled) {
    return;
  }
  nativeEvent = event_0.nativeEvent;
  eventTargetsPopupOrPartner = $eventTargetsPopup(this$static, nativeEvent);
  eventTargetsPopupOrPartner && (event_0.isConsumed = true);
  this$static.modal && (event_0.isCanceled = true);
  type = $eventGetTypeInt(($clinit_96() , nativeEvent).type);
  switch (type) {
    case 128:
      {
        (nativeEvent.which || nativeEvent.keyCode || 0) & 65535;
        (nativeEvent.shiftKey?1:0) | (nativeEvent.metaKey?8:0) | (nativeEvent.ctrlKey?2:0) | (nativeEvent.altKey?4:0);
        return;
      }

    case 512:
      {
        (nativeEvent.which || nativeEvent.keyCode || 0) & 65535;
        (nativeEvent.shiftKey?1:0) | (nativeEvent.metaKey?8:0) | (nativeEvent.ctrlKey?2:0) | (nativeEvent.altKey?4:0);
        return;
      }

    case 256:
      {
        (nativeEvent.which || nativeEvent.keyCode || 0) & 65535;
        (nativeEvent.shiftKey?1:0) | (nativeEvent.metaKey?8:0) | (nativeEvent.ctrlKey?2:0) | (nativeEvent.altKey?4:0);
        return;
      }

    case 4:
      if (sCaptureElem) {
        event_0.isConsumed = true;
        return;
      }

      if (!eventTargetsPopupOrPartner && this$static.autoHide) {
        $hide(this$static);
        return;
      }

      break;
    case 8:
    case 64:
    case 1:
    case 2:
      {
        if (sCaptureElem) {
          event_0.isConsumed = true;
          return;
        }
        break;
      }

    case 2048:
      {
        target = nativeEvent.target;
        if (this$static.modal && !eventTargetsPopupOrPartner && !!target) {
          target.blur && target != $doc.body && target.blur();
          event_0.isCanceled = true;
          return;
        }
        break;
      }

  }
}

function $setPopupPosition(this$static, left, top_0){
  var elem;
  this$static.leftPosition = left;
  this$static.topPosition = top_0;
  left -= $getBodyOffsetLeft_0($doc);
  top_0 -= $getBodyOffsetTop_0($doc);
  elem = this$static.element;
  elem.style['left'] = left + ($clinit_114() , 'px');
  elem.style['top'] = top_0 + 'px';
}

function $setState(this$static, showing, maybeAnimate){
  maybeAnimate?$setState_0(this$static.resizeAnimation, showing):$cancel(this$static.resizeAnimation);
  this$static.showing = showing;
  if (showing) {
    this$static.nativePreviewHandlerRegistration = addNativePreviewHandler($PopupPanel$3(new PopupPanel$3, this$static));
    this$static.historyHandlerRegistration = addValueChangeHandler($PopupPanel$4(new PopupPanel$4, this$static));
  }
   else {
    if (this$static.nativePreviewHandlerRegistration) {
      $removeHandler(this$static.nativePreviewHandlerRegistration);
      this$static.nativePreviewHandlerRegistration = null;
    }
    if (this$static.historyHandlerRegistration) {
      $removeHandler(this$static.historyHandlerRegistration);
      this$static.historyHandlerRegistration = null;
    }
  }
}

function $show(this$static){
  if (this$static.showing) {
    return;
  }
  $setState(this$static, true, true);
}

function getClass_180(){
  return Lcom_google_gwt_user_client_ui_PopupPanel_2_classLit;
}

function getContainerElement_1(){
  return $getFirstChildElement(($clinit_96() , this.element));
}

function getOffsetHeight_0(){
  return parseInt(this.element['offsetHeight']) || 0;
}

function getStyleElement_0(){
  return $getStyleElement_1($getFirstChildElement(($clinit_96() , this.element)));
}

function onUnload_1(){
  this.showing && $setState(this, false, false);
}

function setHeight_0(height){
  this.desiredHeight = height;
  $maybeUpdateSize(this);
  height.length == 0 && (this.desiredHeight = null);
}

function setWidget_0(w){
  $setWidget(this, w);
  $maybeUpdateSize(this);
}

function setWidth_0(width){
  this.desiredWidth = width;
  $maybeUpdateSize(this);
  width.length == 0 && (this.desiredWidth = null);
}

function PopupPanel(){
}

_ = PopupPanel.prototype = new SimplePanel;
_.getClass$ = getClass_180;
_.getContainerElement = getContainerElement_1;
_.getOffsetHeight = getOffsetHeight_0;
_.getStyleElement = getStyleElement_0;
_.onUnload = onUnload_1;
_.setHeight = setHeight_0;
_.setWidget = setWidget_0;
_.setWidth = setWidth_0;
_.typeId$ = 104;
_.autoHide = false;
_.autoHideOnHistoryEvents = false;
_.desiredHeight = null;
_.desiredWidth = null;
_.glass = null;
_.historyHandlerRegistration = null;
_.isGlassEnabled = false;
_.leftPosition = -1;
_.modal = false;
_.nativePreviewHandlerRegistration = null;
_.previewAllNativeEvents = false;
_.showing = false;
_.topPosition = -1;
function $onResize(){
  var height, width, winHeight, winWidth;
  null.nullMethod();
  winWidth = $getClientWidth($doc);
  winHeight = $getClientHeight($doc);
  null.nullMethod($clinit_108());
  null.nullMethod(0 + ($clinit_114() , 'px'));
  null.nullMethod('0px');
  width = $getScrollWidth($doc);
  height = $getScrollHeight($doc);
  null.nullMethod((width > winWidth?width:winWidth) + 'px');
  null.nullMethod((height > winHeight?height:winHeight) + 'px');
  null.nullMethod($clinit_108());
}

function getClass_181(){
  return Lcom_google_gwt_user_client_ui_PopupPanel$1_2_classLit;
}

function PopupPanel$1(){
}

_ = PopupPanel$1.prototype = new Object_0;
_.getClass$ = getClass_181;
_.typeId$ = 105;
function $PopupPanel$3(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function getClass_182(){
  return Lcom_google_gwt_user_client_ui_PopupPanel$3_2_classLit;
}

function PopupPanel$3(){
}

_ = PopupPanel$3.prototype = new Object_0;
_.getClass$ = getClass_182;
_.typeId$ = 106;
_.this$0 = null;
function $PopupPanel$4(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function getClass_183(){
  return Lcom_google_gwt_user_client_ui_PopupPanel$4_2_classLit;
}

function onValueChange_1(event_0){
  this.this$0.autoHideOnHistoryEvents && $hide(this.this$0);
}

function PopupPanel$4(){
}

_ = PopupPanel$4.prototype = new Object_0;
_.getClass$ = getClass_183;
_.onValueChange = onValueChange_1;
_.typeId$ = 107;
_.this$0 = null;
function $clinit_323(){
  $clinit_323 = nullMethod;
  CENTER = $PopupPanel$AnimationType(new PopupPanel$AnimationType, 'CENTER', 0);
  ONE_WAY_CORNER = $PopupPanel$AnimationType(new PopupPanel$AnimationType, 'ONE_WAY_CORNER', 1);
  ROLL_DOWN = $PopupPanel$AnimationType(new PopupPanel$AnimationType, 'ROLL_DOWN', 2);
}

function $PopupPanel$AnimationType(this$static, enum$name, enum$ordinal){
  $clinit_323();
  this$static.name_0 = enum$name;
  this$static.ordinal = enum$ordinal;
  return this$static;
}

function getClass_184(){
  return Lcom_google_gwt_user_client_ui_PopupPanel$AnimationType_2_classLit;
}

function values_5(){
  $clinit_323();
  return initValues(_3Lcom_google_gwt_user_client_ui_PopupPanel$AnimationType_2_classLit, 209, 56, [CENTER, ONE_WAY_CORNER, ROLL_DOWN]);
}

function PopupPanel$AnimationType(){
}

_ = PopupPanel$AnimationType.prototype = new Enum;
_.getClass$ = getClass_184;
_.typeId$ = 108;
var CENTER, ONE_WAY_CORNER, ROLL_DOWN;
function $PopupPanel$ResizeAnimation(this$static, panel){
  this$static.curPanel = panel;
  return this$static;
}

function $maybeShowGlass(this$static){
  if (this$static.showing) {
    if (this$static.curPanel.isGlassEnabled) {
      $doc.body.appendChild(this$static.curPanel.glass);
      this$static.resizeRegistration = addResizeHandler(this$static.curPanel.glassResizer);
      $onResize();
      this$static.glassShowing = true;
    }
  }
   else if (this$static.glassShowing) {
    $doc.body.removeChild(this$static.curPanel.glass);
    $removeHandler(this$static.resizeRegistration);
    this$static.resizeRegistration = null;
    this$static.glassShowing = false;
  }
}

function $onInstantaneousRun(this$static){
  $maybeShowGlass(this$static);
  if (this$static.showing) {
    this$static.curPanel.element.style['position'] = 'absolute';
    this$static.curPanel.topPosition != -1 && $setPopupPosition(this$static.curPanel, this$static.curPanel.leftPosition, this$static.curPanel.topPosition);
    $add_2(($clinit_327() , get_2(null)), this$static.curPanel);
  }
   else {
    $remove_4(($clinit_327() , get_2(null)), this$static.curPanel);
  }
  this$static.curPanel.element.style['overflow'] = 'visible';
}

function $onUpdate(this$static, progress){
  var bottom, height, left, right, top_0, width;
  !this$static.showing && (progress = 1 - progress);
  top_0 = 0;
  left = 0;
  right = 0;
  bottom = 0;
  height = ~~Math.max(Math.min(progress * this$static.offsetHeight_0, 2147483647), -2147483648);
  width = ~~Math.max(Math.min(progress * this$static.offsetWidth_0, 2147483647), -2147483648);
  switch (this$static.curPanel.animType.ordinal) {
    case 2:
      right = this$static.offsetWidth_0;
      bottom = height;
      break;
    case 0:
      top_0 = ~~(this$static.offsetHeight_0 - height) >> 1;
      left = ~~(this$static.offsetWidth_0 - width) >> 1;
      right = left + width;
      bottom = top_0 + height;
      break;
    case 1:
      {
        $clinit_202();
      }

      right = left + width;
      bottom = top_0 + height;
  }
  this$static.curPanel.element.style['clip'] = 'rect(' + top_0 + 'px, ' + right + 'px, ' + bottom + 'px, ' + left + 'px)';
}

function $setState_0(this$static, showing){
  var animate;
  $cancel(this$static);
  animate = false;
  this$static.curPanel.animType != ($clinit_323() , CENTER) && !showing && (animate = false);
  this$static.showing = showing;
  if (animate) {
    if (showing) {
      $maybeShowGlass(this$static);
      this$static.curPanel.element.style['position'] = 'absolute';
      this$static.curPanel.topPosition != -1 && $setPopupPosition(this$static.curPanel, this$static.curPanel.leftPosition, this$static.curPanel.topPosition);
      this$static.curPanel.element.style['clip'] = 'rect(0px, 0px, 0px, 0px)';
      $add_2(($clinit_327() , get_2(null)), this$static.curPanel);
    }
    addCommand($PopupPanel$ResizeAnimation$1(new PopupPanel$ResizeAnimation$1, this$static));
  }
   else {
    $onInstantaneousRun(this$static);
  }
}

function getClass_185(){
  return Lcom_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_2_classLit;
}

function onComplete_0(){
  if (!this.showing) {
    $maybeShowGlass(this);
    $remove_4(($clinit_327() , get_2(null)), this.curPanel);
  }
  this.curPanel.element.style['clip'] = 'rect(auto, auto, auto, auto)';
  this.curPanel.element.style['overflow'] = 'visible';
}

function onStart_0(){
  this.offsetHeight_0 = parseInt(this.curPanel.element['offsetHeight']) || 0;
  this.offsetWidth_0 = parseInt(this.curPanel.element['offsetWidth']) || 0;
  this.curPanel.element.style['overflow'] = 'hidden';
  $onUpdate(this, (1 + Math.cos(3.141592653589793)) / 2);
}

function onUpdate(progress){
  $onUpdate(this, progress);
}

function PopupPanel$ResizeAnimation(){
}

_ = PopupPanel$ResizeAnimation.prototype = new Animation;
_.getClass$ = getClass_185;
_.onComplete = onComplete_0;
_.onStart = onStart_0;
_.onUpdate = onUpdate;
_.typeId$ = 109;
_.curPanel = null;
_.glassShowing = false;
_.offsetHeight_0 = 0;
_.offsetWidth_0 = -1;
_.resizeRegistration = null;
_.showing = false;
function $PopupPanel$ResizeAnimation$1(this$static, this$1){
  this$static.this$1 = this$1;
  return this$static;
}

function getClass_186(){
  return Lcom_google_gwt_user_client_ui_PopupPanel$ResizeAnimation$1_2_classLit;
}

function PopupPanel$ResizeAnimation$1(){
}

_ = PopupPanel$ResizeAnimation$1.prototype = new Object_0;
_.getClass$ = getClass_186;
_.typeId$ = 110;
_.this$1 = null;
function $clinit_326(){
  $clinit_326 = nullMethod;
  $clinit_281();
}

function $PushButton(this$static){
  $clinit_326();
  $ButtonBase(this$static, $createFocusable(($clinit_290() , impl_1)));
  $sinkEvents(this$static, 7165);
  this$static.up = $CustomButton$2(new CustomButton$2, null, this$static, 'up', 0);
  this$static.element['className'] = 'gwt-CustomButton';
  this$static.element.setAttribute('role', 'button');
  this$static.element['className'] = 'gwt-PushButton';
  return this$static;
}

function getClass_187(){
  return Lcom_google_gwt_user_client_ui_PushButton_2_classLit;
}

function PushButton(){
}

_ = PushButton.prototype = new CustomButton;
_.getClass$ = getClass_187;
_.typeId$ = 111;
function detachNow(widget){
  $clinit_327();
  try {
    widget.onDetach();
  }
   finally {
    $remove_12(widgetsToDetach.map, widget) != null;
  }
}

function getClass_188(){
  return Lcom_google_gwt_user_client_ui_RootPanel_2_classLit;
}

_ = RootPanel.prototype;
_.getClass$ = getClass_188;
function getClass_189(){
  return Lcom_google_gwt_user_client_ui_RootPanel$1_2_classLit;
}

_ = RootPanel$1.prototype;
_.getClass$ = getClass_189;
function getClass_190(){
  return Lcom_google_gwt_user_client_ui_RootPanel$2_2_classLit;
}

_ = RootPanel$2.prototype;
_.getClass$ = getClass_190;
function getClass_191(){
  return Lcom_google_gwt_user_client_ui_RootPanel$DefaultRootPanel_2_classLit;
}

_ = RootPanel$DefaultRootPanel.prototype;
_.getClass$ = getClass_191;
function $SimplePanel$1(this$static, this$0){
  this$static.this$0 = this$0;
  this$static.hasElement = !!this$static.this$0.widget;
  return this$static;
}

function $next_1(this$static){
  if (!this$static.hasElement || !this$static.this$0.widget) {
    throw $NoSuchElementException(new NoSuchElementException);
  }
  this$static.hasElement = false;
  return this$static.this$0.widget;
}

function getClass_192(){
  return Lcom_google_gwt_user_client_ui_SimplePanel$1_2_classLit;
}

function hasNext_1(){
  return this.hasElement;
}

function next_2(){
  return $next_1(this);
}

function SimplePanel$1(){
}

_ = SimplePanel$1.prototype = new Object_0;
_.getClass$ = getClass_192;
_.hasNext = hasNext_1;
_.next_0 = next_2;
_.typeId$ = 0;
_.this$0 = null;
function $clinit_341(){
  $clinit_341 = nullMethod;
  $clinit_277();
}

function $setReadOnly(this$static, readOnly){
  this$static.element['readOnly'] = readOnly;
  readOnly?$addStyleName(this$static, getStylePrimaryName(this$static.element) + '-readonly'):$removeStyleName(this$static, getStylePrimaryName(this$static.element) + '-readonly');
}

function $setText_2(this$static, text){
  this$static.element['value'] = text != null?text:'';
}

function getClass_193(){
  return Lcom_google_gwt_user_client_ui_TextBoxBase_2_classLit;
}

function onBrowserEvent_2(event_0){
  var type;
  type = $eventGetTypeInt(($clinit_96() , event_0).type);
  if ((type & 896) != 0) {
    this.currentEvent = event_0;
    $onBrowserEvent(this, event_0);
    this.currentEvent = null;
  }
   else {
    $onBrowserEvent(this, event_0);
  }
}

function TextBoxBase(){
}

_ = TextBoxBase.prototype = new FocusWidget;
_.getClass$ = getClass_193;
_.onBrowserEvent = onBrowserEvent_2;
_.typeId$ = 115;
_.currentEvent = null;
function $clinit_342(){
  $clinit_342 = nullMethod;
  $clinit_341();
}

function $TextBox(this$static){
  var e;
  $clinit_342();
  $TextBox_0(this$static, (e = ($clinit_96() , $doc).createElement('INPUT') , e.type = 'text' , e), 'gwt-TextBox');
  return this$static;
}

function $TextBox_0(this$static, element, styleName){
  $clinit_342();
  this$static.element = element;
  this$static.element.tabIndex = 0;
  styleName != null && (this$static.element['className'] = styleName , undefined);
  return this$static;
}

function getClass_194(){
  return Lcom_google_gwt_user_client_ui_TextBox_2_classLit;
}

function TextBox(){
}

_ = TextBox.prototype = new TextBoxBase;
_.getClass$ = getClass_194;
_.typeId$ = 116;
function $Tree(this$static){
  this$static.childWidgets = $HashMap(new HashMap);
  $init_4(this$static, $Tree$ImageAdapter(new Tree$ImageAdapter), false);
  return this$static;
}

function $collectElementChain(this$static, chain, hRoot, hElem){
  var parent_0;
  if (!hElem || hElem == hRoot) {
    return;
  }
  $collectElementChain(this$static, chain, hRoot, (parent_0 = ($clinit_96() , hElem).parentNode , (!parent_0 || parent_0.nodeType != 1) && (parent_0 = null) , parent_0));
  setCheck(chain.array, chain.size_0++, hElem);
}

function $elementClicked(this$static, hElem){
  var chain, item;
  chain = $ArrayList(new ArrayList);
  $collectElementChain(this$static, chain, this$static.element, hElem);
  item = $findItemByChain(this$static, chain, 0, this$static.root);
  if (!!item && item != this$static.root) {
    if ($getChildCount(item) > 0 && isOrHasChild($getFirstChildElement(($clinit_96() , !item.imageHolder && $convertToFullNode(item) , item.imageHolder)), hElem)) {
      $setState_1(item, !item.open_0, true);
      return true;
    }
     else if ($isOrHasChild(($clinit_96() , item.element), hElem)) {
      $onSelection(this$static, item, true, !shouldTreeDelegateFocusToElement(hElem));
      return true;
    }
  }
  return false;
}

function $findDeepestOpenChild(this$static, item){
  if (!item.open_0) {
    return item;
  }
  return $findDeepestOpenChild(this$static, $getChild_0(item, $getChildCount(item) - 1));
}

function $findItemByChain(this$static, chain, idx, root){
  var child, hCurElem, i, n, retItem;
  if (idx == chain.size_0) {
    return root;
  }
  hCurElem = dynamicCastJso((checkIndex(idx, chain.size_0) , chain.array[idx]));
  for (i = 0 , n = $getChildCount(root); i < n; ++i) {
    child = $getChild_0(root, i);
    if (child.element == hCurElem) {
      retItem = $findItemByChain(this$static, chain, idx + 1, $getChild_0(root, i));
      if (!retItem) {
        return child;
      }
      return retItem;
    }
  }
  return $findItemByChain(this$static, chain, idx + 1, root);
}

function $fireStateChanged(this$static, open_0){
  open_0 || fire_0(this$static);
}

function $getTopClosedParent(this$static, item){
  var parent_0, topClosedParent;
  topClosedParent = null;
  parent_0 = item.parent_0;
  while (!!parent_0 && parent_0 != this$static.root) {
    !parent_0.open_0 && (topClosedParent = parent_0);
    parent_0 = parent_0.parent_0;
  }
  return topClosedParent;
}

function $init_4(this$static, images, useLeafImages){
  $setImages(this$static, images, useLeafImages);
  this$static.element = ($clinit_96() , $doc).createElement('div');
  this$static.element.style['position'] = 'relative';
  this$static.element.style['zoom'] = '1';
  this$static.focusable = $createFocusable(($clinit_290() , impl_1));
  this$static.focusable.style['fontSize'] = '0';
  this$static.focusable.style['position'] = 'absolute';
  this$static.focusable.style['outline'] = '0px';
  this$static.focusable.setAttribute('hideFocus', 'true');
  this$static.focusable.style['zIndex'] = '-1';
  this$static.element.appendChild(this$static.focusable);
  $sinkEvents(this$static, 901);
  sinkEvents(this$static.focusable, 6144);
  this$static.root = $Tree$1(new Tree$1, this$static);
  $initChildren(this$static.root);
  $setTree(this$static.root, this$static);
  this$static.element['className'] = 'gwt-Tree';
  this$static.element.setAttribute('role', 'tree');
  this$static.focusable.setAttribute('role', 'treeitem');
}

function $keyboardNavigation(this$static, event_0){
  var code, topClosedParent;
  code = $eventGetKeyCode(($clinit_96() , event_0));
  switch (standardizeKeycode(code)) {
    case 38:
      {
        $moveSelectionUp(this$static, this$static.curSelection);
        break;
      }

    case 40:
      {
        $moveSelectionDown(this$static, this$static.curSelection, true);
        break;
      }

    case 37:
      {
        $maybeCollapseTreeItem(this$static);
        break;
      }

    case 39:
      {
        topClosedParent = $getTopClosedParent(this$static, this$static.curSelection);
        topClosedParent?$setSelectedItem(this$static, topClosedParent, true):this$static.curSelection.open_0?$getChildCount(this$static.curSelection) > 0 && $setSelectedItem(this$static, $getChild_0(this$static.curSelection, 0), true):$setState_1(this$static.curSelection, true, true);
        break;
      }

    default:{
        return;
      }

  }
}

function $maybeCollapseTreeItem(this$static){
  var parent_0, topClosedParent;
  topClosedParent = $getTopClosedParent(this$static, this$static.curSelection);
  if (topClosedParent) {
    $setSelectedItem(this$static, topClosedParent, true);
  }
   else if (this$static.curSelection.open_0) {
    $setState_1(this$static.curSelection, false, true);
  }
   else {
    parent_0 = this$static.curSelection.parent_0;
    !!parent_0 && $setSelectedItem(this$static, parent_0, true);
  }
}

function $maybeUpdateSelection(this$static, itemThatChangedState, isItemOpening){
  var tempItem;
  if (!isItemOpening) {
    tempItem = this$static.curSelection;
    while (tempItem) {
      if (tempItem == itemThatChangedState) {
        $setSelectedItem(this$static, itemThatChangedState, true);
        return;
      }
      tempItem = tempItem.parent_0;
    }
  }
}

function $moveFocus(this$static){
  var containerLeft, containerTop, height, left, selectedElem, top_0, width;
  selectedElem = this$static.curSelection.contentElem;
  containerLeft = $getAbsoluteLeft(($clinit_96() , this$static.element));
  containerTop = $getAbsoluteTop(this$static.element);
  left = $getAbsoluteLeft(selectedElem) - containerLeft;
  top_0 = $getAbsoluteTop(selectedElem) - containerTop;
  width = parseInt(selectedElem['offsetWidth']) || 0;
  height = parseInt(selectedElem['offsetHeight']) || 0;
  if (width == 0 || height == 0) {
    this$static.focusable.style['left'] = '0';
    this$static.focusable.style['top'] = '0';
    return;
  }
  this$static.focusable.style['left'] = left + 'px';
  this$static.focusable.style['top'] = top_0 + 'px';
  this$static.focusable.style['width'] = width + 'px';
  this$static.focusable.style['height'] = height + 'px';
  $scrollIntoView(this$static.focusable);
  $updateAriaAttributes(this$static);
  $focus(($clinit_290() , this$static.focusable));
}

function $moveSelectionDown(this$static, sel, dig){
  var idx, parent_0, topClosedParent;
  if (sel == this$static.root) {
    return;
  }
  topClosedParent = $getTopClosedParent(this$static, sel);
  if (topClosedParent) {
    $moveSelectionDown(this$static, topClosedParent, false);
    return;
  }
  parent_0 = sel.parent_0;
  !parent_0 && (parent_0 = this$static.root);
  idx = $getChildIndex(parent_0, sel);
  !dig || !sel.open_0?idx < $getChildCount(parent_0) - 1?$onSelection(this$static, $getChild_0(parent_0, idx + 1), true, true):$moveSelectionDown(this$static, parent_0, false):$getChildCount(sel) > 0 && $onSelection(this$static, $getChild_0(sel, 0), true, true);
}

function $moveSelectionUp(this$static, sel){
  var idx, parent_0, sibling, topClosedParent;
  topClosedParent = $getTopClosedParent(this$static, sel);
  if (topClosedParent) {
    $onSelection(this$static, topClosedParent, true, true);
    return;
  }
  parent_0 = sel.parent_0;
  !parent_0 && (parent_0 = this$static.root);
  idx = $getChildIndex(parent_0, sel);
  if (idx > 0) {
    sibling = $getChild_0(parent_0, idx - 1);
    $onSelection(this$static, $findDeepestOpenChild(this$static, sibling), true, true);
  }
   else {
    $onSelection(this$static, parent_0, true, true);
  }
}

function $onSelection(this$static, item, fireEvents, moveFocus){
  if (item == this$static.root) {
    return;
  }
  !!this$static.curSelection && $setSelected(this$static.curSelection, false);
  this$static.curSelection = item;
  if (this$static.curSelection) {
    moveFocus && $moveFocus(this$static);
    $setSelected(this$static.curSelection, true);
    fireEvents && fire_2(this$static, this$static.curSelection);
  }
}

function $remove_7(this$static, w){
  var item;
  item = dynamicCast($get_5(this$static.childWidgets, w), 88);
  if (!item) {
    return false;
  }
  item.contentElem.innerHTML = '';
  return true;
}

function $setImages(this$static, images, useLeafImages){
  var image, size;
  this$static.images = images;
  this$static.useLeafImages = useLeafImages;
  if (!useLeafImages) {
    image = $createImage(images.treeLeaf);
    image.element.style['visibility'] = 'hidden';
    $add_2(($clinit_327() , get_2(null)), image);
    size = image.state.width_0 + 7;
    $removeFromParent(image);
    this$static.indentValue = size + 'px';
  }
}

function $setSelectedItem(this$static, item, fireEvents){
  if (!item) {
    if (!this$static.curSelection) {
      return;
    }
    $setSelected(this$static.curSelection, false);
    this$static.curSelection = null;
    return;
  }
  $onSelection(this$static, item, fireEvents, true);
}

function $showClosedImage(this$static, treeItem){
  $showImage(treeItem, this$static.images.treeClosed);
}

function $showImage(treeItem, proto){
  var child, holder;
  holder = (!treeItem.imageHolder && $convertToFullNode(treeItem) , treeItem.imageHolder);
  child = $getFirstChildElement(($clinit_96() , holder));
  !child?holder.appendChild($createStructure(proto.url, proto.left, proto.top_0, proto.width_0, proto.height_0)):$adjust(child, proto.url, proto.left, proto.top_0, proto.width_0, proto.height_0);
}

function $showLeafImage(this$static, treeItem){
  if (this$static.useLeafImages || !!treeItem.imageHolder) {
    $showImage(treeItem, this$static.images.treeLeaf);
  }
   else {
    $clinit_202();
    treeItem.element.style['paddingLeft'] = this$static.indentValue;
  }
}

function $showOpenImage(this$static, treeItem){
  $showImage(treeItem, this$static.images.treeOpen);
}

function $updateAriaAttributes(this$static){
  var curSelectionContentElem, curSelectionIndex, curSelectionLevel, curSelectionParent, tempItem;
  curSelectionContentElem = this$static.curSelection.contentElem;
  curSelectionLevel = -1;
  tempItem = this$static.curSelection;
  while (tempItem) {
    tempItem = tempItem.parent_0;
    ++curSelectionLevel;
  }
  curSelectionContentElem.setAttribute('aria-level', '' + (curSelectionLevel + 1));
  curSelectionParent = this$static.curSelection.parent_0;
  !curSelectionParent && (curSelectionParent = this$static.root);
  curSelectionContentElem.setAttribute('aria-setsize', '' + $getChildCount(curSelectionParent));
  curSelectionIndex = $getChildIndex(curSelectionParent, this$static.curSelection);
  curSelectionContentElem.setAttribute('aria-posinset', '' + (curSelectionIndex + 1));
  $getChildCount(this$static.curSelection) == 0?(curSelectionContentElem.removeAttribute('aria-expanded') , undefined):this$static.curSelection.open_0?(curSelectionContentElem.setAttribute('aria-expanded', 'true') , undefined):(curSelectionContentElem.setAttribute('aria-expanded', 'false') , undefined);
  curSelectionContentElem.setAttribute('aria-selected', 'true');
  this$static.focusable.setAttribute('aria-activedescendant', ($clinit_96() , curSelectionContentElem).getAttribute('id') || '');
}

function doAttachChildren_1(){
  try {
    tryCommand(this, ($clinit_273() , attachCommand));
  }
   finally {
    this.focusable.__listener = this;
  }
}

function doDetachChildren_1(){
  try {
    tryCommand(this, ($clinit_273() , detachCommand));
  }
   finally {
    this.focusable.__listener = null;
  }
}

function getClass_195(){
  return Lcom_google_gwt_user_client_ui_Tree_2_classLit;
}

function isArrowKey(code){
  switch (code) {
    case 63233:
    case 63235:
    case 63232:
    case 63234:
    case 40:
    case 39:
    case 38:
    case 37:
      return true;
    default:return false;
  }
}

function iterator_4(){
  var widgets;
  widgets = initDim(_3Lcom_google_gwt_user_client_ui_Widget_2_classLit, 215, 13, this.childWidgets.size_0, 0);
  $keySet_0(this.childWidgets).toArray(widgets);
  return $WidgetIterators$1(new WidgetIterators$1, widgets);
}

function onBrowserEvent_3(event_0){
  var chain, e, eventType, item;
  eventType = $eventGetTypeInt(($clinit_96() , event_0).type);
  switch (eventType) {
    case 128:
      {
        if (!this.curSelection) {
          $getChildCount(this.root) > 0 && $onSelection(this, $getChild_0(this.root, 0), true, true);
          $onBrowserEvent(this, event_0);
          return;
        }
      }

    case 256:
    case 512:
      if (!!event_0.altKey || !!event_0.metaKey) {
        $onBrowserEvent(this, event_0);
        return;
      }

  }
  switch (eventType) {
    case 1:
      {
        e = event_0.target;
        shouldTreeDelegateFocusToElement(e) || !!this.curSelection && ($focus(($clinit_290() , this.focusable)) , undefined);
        break;
      }

    case 4:
      {
        (event_0.currentTarget || $wnd) == this.element && $eventGetButton(event_0) == 1 && $elementClicked(this, event_0.target);
        break;
      }

    case 128:
      {
        $keyboardNavigation(this, event_0);
        this.lastWasKeyDown = true;
        break;
      }

    case 256:
      {
        !this.lastWasKeyDown && $keyboardNavigation(this, event_0);
        this.lastWasKeyDown = false;
        break;
      }

    case 512:
      {
        if ((event_0.which || event_0.keyCode || 0) == 9) {
          chain = $ArrayList(new ArrayList);
          $collectElementChain(this, chain, this.element, event_0.target);
          item = $findItemByChain(this, chain, 0, this.root);
          item != this.curSelection && $setSelectedItem(this, item, true);
        }
        this.lastWasKeyDown = false;
        break;
      }

  }
  switch (eventType) {
    case 128:
    case 512:
      {
        if (isArrowKey(event_0.which || event_0.keyCode || 0)) {
          event_0.cancelBubble = true;
          event_0.preventDefault();
          return;
        }
      }

  }
  $onBrowserEvent(this, event_0);
}

function onLoad_2(){
  $updateStateRecursive(this.root);
}

function remove_4(w){
  return $remove_7(this, w);
}

function shouldTreeDelegateFocusToElement(elem){
  var name_0 = elem.nodeName;
  return name_0 == 'SELECT' || name_0 == 'INPUT' || name_0 == 'TEXTAREA' || name_0 == 'OPTION' || name_0 == 'BUTTON' || name_0 == 'LABEL';
}

function standardizeKeycode(code){
  switch (code) {
    case 63233:
      code = 40;
      break;
    case 63235:
      code = 39;
      break;
    case 63232:
      code = 38;
      break;
    case 63234:
      code = 37;
  }
  $clinit_202();
  return code;
}

function Tree(){
}

_ = Tree.prototype = new Widget;
_.doAttachChildren = doAttachChildren_1;
_.doDetachChildren = doDetachChildren_1;
_.getClass$ = getClass_195;
_.iterator_0 = iterator_4;
_.onBrowserEvent = onBrowserEvent_3;
_.onLoad = onLoad_2;
_.remove = remove_4;
_.typeId$ = 117;
_.curSelection = null;
_.focusable = null;
_.images = null;
_.indentValue = null;
_.lastWasKeyDown = false;
_.root = null;
_.useLeafImages = false;
function $clinit_344(){
  var contentElem, tbody, tdContent, tdImg, tr;
  $clinit_344 = nullMethod;
  itemAnimation = new TreeItem$TreeItemAnimation;
  $clinit_344();
  BASE_INTERNAL_ELEM = ($clinit_96() , $doc).createElement('table');
  contentElem = $doc.createElement('div');
  tbody = $doc.createElement('tbody');
  tr = $doc.createElement('tr');
  tdImg = $doc.createElement('td');
  tdContent = $doc.createElement('td');
  BASE_INTERNAL_ELEM.appendChild(tbody);
  tbody.appendChild(tr);
  tr.appendChild(tdImg);
  tr.appendChild(tdContent);
  tdImg.style['verticalAlign'] = 'middle';
  tdContent.style['verticalAlign'] = 'middle';
  tdContent.appendChild(contentElem);
  contentElem.style['display'] = 'inline';
  contentElem['className'] = 'gwt-TreeItem';
  BASE_INTERNAL_ELEM.style['whiteSpace'] = 'nowrap';
  BASE_BARE_ELEM = $doc.createElement('div');
  BASE_BARE_ELEM.style['padding'] = '3px';
  BASE_BARE_ELEM.appendChild(contentElem);
  contentElem.setAttribute('role', 'treeitem');
}

function $TreeItem(this$static){
  var elem;
  $clinit_344();
  elem = BASE_BARE_ELEM.cloneNode(true);
  this$static.element = elem;
  this$static.contentElem = $getFirstChildElement(($clinit_96() , elem));
  this$static.contentElem.setAttribute('id', $createUniqueId($doc));
  return this$static;
}

function $TreeItem_0(this$static, html){
  $clinit_344();
  $TreeItem(this$static);
  this$static.contentElem.innerHTML = '';
  this$static.contentElem.innerHTML = html || '';
  return this$static;
}

function $getChild_0(this$static, index){
  if (index < 0 || index >= $getChildCount(this$static)) {
    return null;
  }
  return dynamicCast($get(this$static.children_0, index), 88);
}

function $getChildCount(this$static){
  if (!this$static.children_0) {
    return 0;
  }
  return this$static.children_0.size_0;
}

function $getChildIndex(this$static, child){
  if (!this$static.children_0) {
    return -1;
  }
  return $indexOf_0(this$static.children_0, child, 0);
}

function $initChildren(this$static){
  $convertToFullNode(this$static);
  this$static.childSpanElem = ($clinit_96() , $doc).createElement('div');
  this$static.element.appendChild(this$static.childSpanElem);
  this$static.childSpanElem.style['whiteSpace'] = 'nowrap';
  this$static.children_0 = $ArrayList(new ArrayList);
}

function $remove_8(this$static){
  this$static.parent_0?this$static.parent_0.removeItem(this$static):!!this$static.tree && ($removeItem_0(this$static.tree.root, this$static) , undefined);
}

function $setSelected(this$static, selected){
  if (this$static.selected == selected) {
    return;
  }
  this$static.selected = selected;
  setStyleName(this$static.contentElem, 'gwt-TreeItem-selected', selected);
}

function $setState_1(this$static, open_0, fireEvents){
  if (open_0 && $getChildCount(this$static) == 0) {
    return;
  }
  if (this$static.open_0 != open_0) {
    this$static.open_0 = open_0;
    $updateState(this$static, true, true);
    fireEvents && !!this$static.tree && $fireStateChanged(this$static.tree, open_0);
  }
}

function $setTree(this$static, newTree){
  var i, n;
  if (this$static.tree == newTree) {
    return;
  }
  !!this$static.tree && this$static.tree.curSelection == this$static && $setSelectedItem(this$static.tree, null, true);
  this$static.tree = newTree;
  for (i = 0 , n = $getChildCount(this$static); i < n; ++i) {
    $setTree(dynamicCast($get(this$static.children_0, i), 88), newTree);
  }
  $updateState(this$static, false, true);
}

function $updateState(this$static, animate, updateTreeSelection){
  if (!this$static.tree || !this$static.tree.attached) {
    return;
  }
  if ($getChildCount(this$static) == 0) {
    !!this$static.childSpanElem && (this$static.childSpanElem.style.display = 'none' , undefined);
    $showLeafImage(this$static.tree, this$static);
    return;
  }
  animate && !!this$static.tree && this$static.tree.attached?$setItemState(itemAnimation, this$static, false):$setItemState(itemAnimation, this$static, false);
  this$static.open_0?$showOpenImage(this$static.tree, this$static):$showClosedImage(this$static.tree, this$static);
  updateTreeSelection && $maybeUpdateSelection(this$static.tree, this$static, this$static.open_0);
}

function $updateStateRecursive(this$static){
  $updateStateRecursiveHelper(this$static);
  $maybeUpdateSelection(this$static.tree, this$static, this$static.open_0);
}

function $updateStateRecursiveHelper(this$static){
  var i, n;
  $updateState(this$static, false, false);
  for (i = 0 , n = $getChildCount(this$static); i < n; ++i) {
    $updateStateRecursiveHelper(dynamicCast($get(this$static.children_0, i), 88));
  }
}

function addItem(item){
  (!!item.parent_0 || !!item.tree) && $remove_8(item);
  !this.children_0 && $initChildren(this);
  item.parent_0 = this;
  $add(this.children_0, item);
  $clinit_202();
  item.element.style['marginLeft'] = '16px';
  this.childSpanElem.appendChild(item.element);
  $setTree(item, this.tree);
  this.children_0.size_0 == 1 && $updateState(this, false, false);
}

function getClass_196(){
  return Lcom_google_gwt_user_client_ui_TreeItem_2_classLit;
}

function removeItem(item){
  if (!this.children_0 || $indexOf_0(this.children_0, item, 0) == -1) {
    return;
  }
  $setTree(item, null);
  this.childSpanElem.removeChild(item.element);
  item.parent_0 = null;
  $remove_0(this.children_0, item);
  this.children_0.size_0 == 0 && $updateState(this, false, false);
}

function TreeItem(){
}

_ = TreeItem.prototype = new UIObject;
_.addItem = addItem;
_.getClass$ = getClass_196;
_.removeItem = removeItem;
_.typeId$ = 118;
_.childSpanElem = null;
_.children_0 = null;
_.contentElem = null;
_.imageHolder = null;
_.open_0 = false;
_.parent_0 = null;
_.selected = false;
_.tree = null;
var BASE_BARE_ELEM = null, BASE_INTERNAL_ELEM = null, itemAnimation;
function $clinit_345(){
  $clinit_345 = nullMethod;
  $clinit_344();
}

function $Tree$1(this$static, this$0){
  $clinit_345();
  this$static.this$0 = this$0;
  $TreeItem(this$static);
  return this$static;
}

function $addItem_1(this$static, item){
  (!!item.parent_0 || !!item.tree) && $remove_8(item);
  this$static.this$0.element.appendChild(item.element);
  $setTree(item, this$static.tree);
  item.parent_0 = null;
  $add(this$static.children_0, item);
  $clinit_202();
  item.element.style['marginLeft'] = '0';
}

function $removeItem_0(this$static, item){
  if ($indexOf_0(this$static.children_0, item, 0) == -1) {
    return;
  }
  $setTree(item, null);
  item.parent_0 = null;
  $remove_0(this$static.children_0, item);
  this$static.this$0.element.removeChild(item.element);
}

function addItem_0(item){
  $addItem_1(this, item);
}

function getClass_197(){
  return Lcom_google_gwt_user_client_ui_Tree$1_2_classLit;
}

function removeItem_0(item){
  $removeItem_0(this, item);
}

function Tree$1(){
}

_ = Tree$1.prototype = new TreeItem;
_.addItem = addItem_0;
_.getClass$ = getClass_197;
_.removeItem = removeItem_0;
_.typeId$ = 119;
_.this$0 = null;
function $Tree$ImageAdapter(this$static){
  this$static.treeClosed = create_1((!treeClosed && (treeClosed = $ImageResourcePrototype(new ImageResourcePrototype, 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAqklEQVR42mNgGAVYQVbl9v9h6WsxcHbVjv8ENScXbf6/7+iD/79+/fmPDP78/fd/9eZr/xMLN+E3JCJj3f/PX77DMQPDGTj72/cfQJesw29AONCAt+8+wjHIAGQ+UQY8ffYKrBEdg8RBYUGUATAM0wjDhA0AOvHOvUfkGxCXt+H/zEXH/p+/ePP/5au34fjshZv/J84+/B8kTzAqU0s3Y00HKcWb/w/DZA8Agl3oOCRuvDUAAAAASUVORK5CYII=', 0, 0, 16, 16)) , treeClosed));
  this$static.treeLeaf = create_1((!treeLeaf && (treeLeaf = $ImageResourcePrototype(new ImageResourcePrototype, 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAEklEQVR42mNgGAWjYBSMAggAAAQQAAGvRYgsAAAAAElFTkSuQmCC', 0, 0, 16, 16)) , treeLeaf));
  this$static.treeOpen = create_1((!treeOpen && (treeOpen = $ImageResourcePrototype(new ImageResourcePrototype, 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAp0lEQVR42mNgGAVYQVbl9v9h6WsxcHbVjv8ENScXbf6/7+iD/79+/fmPDP78/fd/9eZr/xMLN+E3JCJj3f/PX77D8dt3H+Hsb99/AF2yDr8B4UADQJpwYaIMePrsFVDRGQwMEgeFBVEGwDDIVmQ+YQOATrxz7xH5BsTlbfg/c9Gx/+cv3vx/+eptOD574eb/ibMP/wfJE4zK1NLNWNNBSvHm/8Mw2QMAtl7wOMv7lGEAAAAASUVORK5CYII=', 0, 0, 16, 16)) , treeOpen));
  return this$static;
}

function getClass_198(){
  return Lcom_google_gwt_user_client_ui_Tree$ImageAdapter_2_classLit;
}

function Tree$ImageAdapter(){
}

_ = Tree$ImageAdapter.prototype = new Object_0;
_.getClass$ = getClass_198;
_.typeId$ = 0;
_.treeClosed = null;
_.treeLeaf = null;
_.treeOpen = null;
function $onUpdate_0(this$static, progress){
  var height, scrollWidth;
  height = ~~Math.max(Math.min(progress * this$static.scrollHeight_0, 2147483647), -2147483648);
  !this$static.opening && (height = this$static.scrollHeight_0 - height);
  height = height > 1?height:1;
  this$static.curItem.childSpanElem.style['height'] = height + 'px';
  scrollWidth = parseInt(this$static.curItem.childSpanElem['scrollWidth']) || 0;
  this$static.curItem.childSpanElem.style['width'] = scrollWidth + 'px';
}

function $setItemState(this$static, item, animate){
  $cancel(this$static);
  if (animate) {
    this$static.curItem = item;
    this$static.opening = item.open_0;
    $run(this$static, min_0(200, 75 * $getChildCount(this$static.curItem)), (new Date).getTime());
  }
   else {
    item.childSpanElem.style.display = item.open_0?'':'none';
  }
}

function getClass_199(){
  return Lcom_google_gwt_user_client_ui_TreeItem$TreeItemAnimation_2_classLit;
}

function onComplete_1(){
  if (this.curItem) {
    if (this.opening) {
      this.curItem.childSpanElem.style.display = '';
      $onUpdate_0(this, 1);
      this.curItem.childSpanElem.style['height'] = 'auto';
    }
     else {
      this.curItem.childSpanElem.style.display = 'none';
    }
    this.curItem.childSpanElem.style['overflow'] = 'visible';
    this.curItem.childSpanElem.style['width'] = 'auto';
    this.curItem = null;
  }
}

function onStart_1(){
  this.scrollHeight_0 = 0;
  !this.opening && (this.scrollHeight_0 = this.curItem.childSpanElem.scrollHeight || 0);
  this.curItem.childSpanElem.style['overflow'] = 'hidden';
  $onUpdate_0(this, (1 + Math.cos(3.141592653589793)) / 2);
  if (this.opening) {
    this.curItem.childSpanElem.style.display = '';
    this.scrollHeight_0 = this.curItem.childSpanElem.scrollHeight || 0;
  }
}

function onUpdate_0(progress){
  $onUpdate_0(this, progress);
}

function TreeItem$TreeItemAnimation(){
}

_ = TreeItem$TreeItemAnimation.prototype = new Animation;
_.getClass$ = getClass_199;
_.onComplete = onComplete_1;
_.onStart = onStart_1;
_.onUpdate = onUpdate_0;
_.typeId$ = 120;
_.curItem = null;
_.opening = true;
_.scrollHeight_0 = 0;
function $convertToFullNode(item){
  var itemTable, tdContent, tdImg, tr;
  if (!item.imageHolder) {
    itemTable = ($clinit_344() , BASE_INTERNAL_ELEM).cloneNode(true);
    item.element.appendChild(itemTable);
    tr = getFirstChild($getFirstChildElement(($clinit_96() , itemTable)));
    tdImg = $getFirstChildElement(tr);
    tdContent = tdImg.nextSibling;
    item.element.style['padding'] = '0px';
    tdContent.appendChild(item.contentElem);
    item.imageHolder = tdImg;
  }
}

function $VerticalPanel(this$static){
  $CellPanel(this$static);
  this$static.horzAlign = ($clinit_303() , ALIGN_DEFAULT);
  this$static.vertAlign = ($clinit_308() , ALIGN_TOP);
  this$static.table['cellSpacing'] = '0';
  this$static.table['cellPadding'] = '0';
  return this$static;
}

function $add_5(this$static, w){
  var td, tr, td_0;
  tr = ($clinit_96() , $doc).createElement('tr');
  td = (td_0 = $doc.createElement('td') , td_0['align'] = this$static.horzAlign.textAlignString , td_0.style['verticalAlign'] = this$static.vertAlign.verticalAlignString , td_0);
  tr.appendChild(td);
  this$static.body_0.appendChild(tr);
  $removeFromParent(w);
  $add_6(this$static.children_0, w);
  td.appendChild(w.element);
  $setParent(w, this$static);
}

function getClass_200(){
  return Lcom_google_gwt_user_client_ui_VerticalPanel_2_classLit;
}

function remove_5(w){
  var removed, td, parent_1;
  td = getParent(w.element);
  removed = $remove_3(this, w);
  removed && this.body_0.removeChild((parent_1 = ($clinit_96() , td).parentNode , (!parent_1 || parent_1.nodeType != 1) && (parent_1 = null) , parent_1));
  return removed;
}

function VerticalPanel(){
}

_ = VerticalPanel.prototype = new CellPanel;
_.getClass$ = getClass_200;
_.remove = remove_5;
_.typeId$ = 121;
function $add_6(this$static, w){
  $insert(this$static, w, this$static.size_0);
}

function $indexOf_1(this$static, w){
  var i;
  for (i = 0; i < this$static.size_0; ++i) {
    if (this$static.array[i] == w) {
      return i;
    }
  }
  return -1;
}

function $insert(this$static, w, beforeIndex){
  var i, newArray;
  if (beforeIndex < 0 || beforeIndex > this$static.size_0) {
    throw $IndexOutOfBoundsException(new IndexOutOfBoundsException);
  }
  if (this$static.size_0 == this$static.array.length) {
    newArray = initDim(_3Lcom_google_gwt_user_client_ui_Widget_2_classLit, 215, 13, this$static.array.length * 2, 0);
    for (i = 0; i < this$static.array.length; ++i) {
      setCheck(newArray, i, this$static.array[i]);
    }
    this$static.array = newArray;
  }
  ++this$static.size_0;
  for (i = this$static.size_0 - 1; i > beforeIndex; --i) {
    setCheck(this$static.array, i, this$static.array[i - 1]);
  }
  setCheck(this$static.array, beforeIndex, w);
}

function $remove_9(this$static, index){
  var i;
  if (index < 0 || index >= this$static.size_0) {
    throw $IndexOutOfBoundsException(new IndexOutOfBoundsException);
  }
  --this$static.size_0;
  for (i = index; i < this$static.size_0; ++i) {
    setCheck(this$static.array, i, this$static.array[i + 1]);
  }
  setCheck(this$static.array, this$static.size_0, null);
}

function $remove_10(this$static, w){
  var index;
  index = $indexOf_1(this$static, w);
  if (index == -1) {
    throw $NoSuchElementException(new NoSuchElementException);
  }
  $remove_9(this$static, index);
}

function getClass_201(){
  return Lcom_google_gwt_user_client_ui_WidgetCollection_2_classLit;
}

_ = WidgetCollection.prototype;
_.getClass$ = getClass_201;
function $remove_11(this$static){
  if (this$static.index < 0 || this$static.index >= this$static.this$0.size_0) {
    throw $IllegalStateException(new IllegalStateException);
  }
  this$static.this$0.parent_0.remove(this$static.this$0.array[this$static.index--]);
}

function getClass_202(){
  return Lcom_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_2_classLit;
}

_ = WidgetCollection$WidgetIterator.prototype;
_.getClass$ = getClass_202;
function $WidgetIterators$1(this$static, val$contained){
  this$static.val$contained = val$contained;
  $gotoNextIndex(this$static);
  return this$static;
}

function $gotoNextIndex(this$static){
  ++this$static.index;
  while (this$static.index < this$static.val$contained.length) {
    if (this$static.val$contained[this$static.index]) {
      return;
    }
    ++this$static.index;
  }
}

function $next_4(this$static){
  var w;
  if (this$static.index >= this$static.val$contained.length) {
    throw $NoSuchElementException(new NoSuchElementException);
  }
  w = this$static.val$contained[this$static.index];
  $gotoNextIndex(this$static);
  return w;
}

function getClass_203(){
  return Lcom_google_gwt_user_client_ui_WidgetIterators$1_2_classLit;
}

function hasNext_3(){
  return this.index < this.val$contained.length;
}

function next_4(){
  return $next_4(this);
}

function WidgetIterators$1(){
}

_ = WidgetIterators$1.prototype = new Object_0;
_.getClass$ = getClass_203;
_.hasNext = hasNext_3;
_.next_0 = next_4;
_.typeId$ = 0;
_.index = -1;
_.val$contained = null;
var treeClosed = null, treeLeaf = null, treeOpen = null;
function $adjust(img, url, left, top_0, width, height){
  var style;
  style = 'url(' + url + ') no-repeat ' + -left + 'px ' + -top_0 + 'px';
  img.style['background'] = style;
  img.style['width'] = width + ($clinit_114() , 'px');
  img.style['height'] = height + 'px';
}

function $createStructure(url, left, top_0, width, height){
  var tmp, style_1;
  tmp = ($clinit_96() , $doc).createElement('span');
  tmp.innerHTML = (style_1 = 'width: ' + width + 'px; height: ' + height + 'px; background: url(' + url + ') no-repeat ' + -left + 'px ' + -top_0 + 'px' , "<img src='" + $moduleBase + "clear.cache.gif' style='" + style_1 + "' border='0'>") || '';
  return $getFirstChildElement(tmp);
}

function $ClippedImagePrototype(this$static, url, left, top_0, width, height){
  this$static.url = url;
  this$static.left = left;
  this$static.top_0 = top_0;
  this$static.width_0 = width;
  this$static.height_0 = height;
  return this$static;
}

function $createImage(this$static){
  return $Image(new Image_0, this$static.url, this$static.left, this$static.top_0, this$static.width_0, this$static.height_0);
}

function getClass_204(){
  return Lcom_google_gwt_user_client_ui_impl_ClippedImagePrototype_2_classLit;
}

function ClippedImagePrototype(){
}

_ = ClippedImagePrototype.prototype = new AbstractImagePrototype;
_.getClass$ = getClass_204;
_.typeId$ = 0;
_.height_0 = 0;
_.left = 0;
_.top_0 = 0;
_.url = null;
_.width_0 = 0;
function $clinit_356(){
  $clinit_356 = nullMethod;
  implPanel = $FocusImplSafari(new FocusImplSafari);
  implPanel?($clinit_356() , new FocusImpl):implPanel;
}

function getClass_205(){
  return Lcom_google_gwt_user_client_ui_impl_FocusImpl_2_classLit;
}

function FocusImpl(){
}

_ = FocusImpl.prototype = new Object_0;
_.getClass$ = getClass_205;
_.typeId$ = 0;
var implPanel;
function $clinit_357(){
  $clinit_357 = nullMethod;
  $clinit_356();
}

function $createFocusHandler(){
  return function(evt){
    var div = this.parentNode;
    div.onfocus && $wnd.setTimeout(function(){
      div.focus();
    }
    , 0);
  }
  ;
}

function $createFocusable(this$static){
  var div = $doc.createElement('div');
  div.tabIndex = 0;
  var input = $doc.createElement('input');
  input.type = 'text';
  input.tabIndex = -1;
  input.style.opacity = 0;
  input.style.height = '1px';
  input.style.width = '1px';
  input.style.zIndex = -1;
  input.style.overflow = 'hidden';
  input.style.position = 'absolute';
  input.addEventListener('focus', this$static.focusHandler, false);
  div.appendChild(input);
  return div;
}

function getClass_206(){
  return Lcom_google_gwt_user_client_ui_impl_FocusImplStandard_2_classLit;
}

function FocusImplStandard(){
}

_ = FocusImplStandard.prototype = new FocusImpl;
_.getClass$ = getClass_206;
_.typeId$ = 0;
function $clinit_358(){
  $clinit_358 = nullMethod;
  $clinit_357();
}

function $FocusImplSafari(this$static){
  $clinit_358();
  this$static.focusHandler = $createFocusHandler();
  return this$static;
}

function $focus(elem){
  $wnd.setTimeout(function(){
    elem.focus();
  }
  , 0);
}

function getClass_207(){
  return Lcom_google_gwt_user_client_ui_impl_FocusImplSafari_2_classLit;
}

function FocusImplSafari(){
}

_ = FocusImplSafari.prototype = new FocusImplStandard;
_.getClass$ = getClass_207;
_.typeId$ = 0;
function $getStyleElement_1(popup){
  var parent_0;
  return parent_0 = ($clinit_96() , popup).parentNode , (!parent_0 || parent_0.nodeType != 1) && (parent_0 = null) , parent_0;
}

function $clinit_360(){
  $clinit_360 = nullMethod;
  dayOfWeekNames = initDim(_3Ljava_lang_String_2_classLit, 229, 1, 7, 0);
  dayOfMonthNames = initDim(_3Ljava_lang_String_2_classLit, 229, 1, 32, 0);
}

function $CalendarModel(this$static){
  var date, dayOfWeek, i;
  $clinit_360();
  this$static.currentMonth = $Date(new Date_0);
  setToFirstDayOfMonth(this$static.currentMonth);
  date = $Date(new Date_0);
  for (i = 1; i <= 7; ++i) {
    $setDate_0(date, i);
    dayOfWeek = (date.checkJsDate() , date.jsdate.getDay());
    dayOfWeekNames[dayOfWeek] = $format($DateTimeFormat(new DateTimeFormat, 'ccccc', $getDateTimeConstants(($clinit_202() , $clinit_202() , instance_0))), date);
  }
  date.setMonth_0(0);
  for (i = 1; i < 32; ++i) {
    $setDate_0(date, i);
    dayOfMonthNames[i] = $format($DateTimeFormat(new DateTimeFormat, 'd', $getDateTimeConstants(($clinit_202() , $clinit_202() , instance_0))), date);
  }
  return this$static;
}

function $formatCurrentMonth(this$static){
  return $format($DateTimeFormat(new DateTimeFormat, 'MMM yyyy', $getDateTimeConstants(($clinit_202() , $clinit_202() , instance_0))), this$static.currentMonth);
}

function $formatDayOfMonth(date){
  return dayOfMonthNames[date.checkJsDate() , date.jsdate.getDate()];
}

function $getCurrentFirstDayOfFirstWeek(this$static){
  var d, offset, start, wkDayOfMonth1st;
  wkDayOfMonth1st = $getDay(this$static.currentMonth);
  start = ($clinit_361() , $clinit_361() , startingDay);
  if (wkDayOfMonth1st == start) {
    return $Date_1(new Date_0, fromDouble($getTime0(this$static.currentMonth)));
  }
   else {
    d = $Date_1(new Date_0, fromDouble($getTime0(this$static.currentMonth)));
    offset = wkDayOfMonth1st - start > 0?wkDayOfMonth1st - start:7 - (start - wkDayOfMonth1st);
    $setDate_0(d, (d.checkJsDate() , d.jsdate.getDate()) + -offset);
    return d;
  }
}

function $isInCurrentMonth(this$static, date){
  return $getMonth(this$static.currentMonth) == (date.checkJsDate() , date.jsdate.getMonth());
}

function $setCurrentMonth(this$static, currentDate){
  this$static.currentMonth.setYear((currentDate.checkJsDate() , currentDate.jsdate.getFullYear() - 1900));
  this$static.currentMonth.setMonth_0((currentDate.checkJsDate() , currentDate.jsdate.getMonth()));
}

function getClass_208(){
  return Lcom_google_gwt_user_datepicker_client_CalendarModel_2_classLit;
}

function CalendarModel(){
}

_ = CalendarModel.prototype = new Object_0;
_.getClass$ = getClass_208;
_.typeId$ = 0;
_.currentMonth = null;
var dayOfMonthNames, dayOfWeekNames;
function $clinit_361(){
  $clinit_361 = nullMethod;
  intlConstants = $getDateTimeConstants(($clinit_202() , $clinit_202() , instance_0));
  firstDayOfWeekend = __parseAndValidateInt($weekendRange(intlConstants)[0], 10, -2147483648, 2147483647) - 1;
  lastDayOfWeekend = __parseAndValidateInt($weekendRange(intlConstants)[1], 10, -2147483648, 2147483647) - 1;
  startingDay = __parseAndValidateInt('1', 10, -2147483648, 2147483647) - 1;
}

function addDaysToDate(date, days){
  $clinit_361();
  $setDate_0(date, (date.checkJsDate() , date.jsdate.getDate()) + days);
}

function addMonthsToDate(date, months){
  $clinit_361();
  var month, resultMonth, resultMonthCount, resultYear, year;
  if (months != 0) {
    month = (date.checkJsDate() , date.jsdate.getMonth());
    year = (date.checkJsDate() , date.jsdate.getFullYear() - 1900);
    resultMonthCount = year * 12 + month + months;
    resultYear = ~~(resultMonthCount / 12);
    resultMonth = resultMonthCount - resultYear * 12;
    date.setMonth_0(resultMonth);
    date.setYear(resultYear);
  }
}

function copyDate(date){
  $clinit_361();
  var newDate;
  if (!date) {
    return null;
  }
  newDate = $Date(new Date_0);
  $setTime0(newDate, toDouble(fromDouble((date.checkJsDate() , date.jsdate.getTime()))));
  return newDate;
}

function getDaysBetween(start, finish){
  $clinit_361();
  var aTime, adjust, bTime;
  start = copyDate(start);
  resetTime(start);
  finish = copyDate(finish);
  resetTime(finish);
  aTime = fromDouble((start.checkJsDate() , start.jsdate.getTime()));
  bTime = fromDouble((finish.checkJsDate() , finish.jsdate.getTime()));
  adjust = P36ee80_longLit;
  adjust = compare_0(bTime, aTime) > 0?adjust:neg(adjust);
  return lowBits_0(div_0(add_5(sub(bTime, aTime), adjust), P5265c00_longLit));
}

function resetTime(date){
  var msec;
  msec = fromDouble((date.checkJsDate() , date.jsdate.getTime()));
  msec = mul(div_0(msec, P3e8_longLit), P3e8_longLit);
  date.checkJsDate();
  date.jsdate.setTime(msec[1] + msec[0]);
  date.setHours_0(12);
  date.setMinutes_0(0);
  date.setSeconds_0(0);
}

function setToFirstDayOfMonth(date){
  $clinit_361();
  resetTime(date);
  $setDate_0(date, 1);
}

var firstDayOfWeekend = 0, intlConstants = null, lastDayOfWeekend = 0, startingDay = 0;
function $addMonths(this$static, numMonths){
  addMonthsToDate(this$static.datePicker.model.currentMonth, numMonths);
  $refreshAll(this$static.datePicker);
}

function getClass_209(){
  return Lcom_google_gwt_user_datepicker_client_DatePickerComponent_2_classLit;
}

function DatePickerComponent(){
}

_ = DatePickerComponent.prototype = new Composite;
_.getClass$ = getClass_209;
_.typeId$ = 122;
_.datePicker = null;
function getClass_210(){
  return Lcom_google_gwt_user_datepicker_client_CalendarView_2_classLit;
}

function CalendarView(){
}

_ = CalendarView.prototype = new DatePickerComponent;
_.getClass$ = getClass_210;
_.typeId$ = 123;
function $setHighlighted(this$static, nextHighlighted){
  var oldHighlighted;
  if (nextHighlighted == this$static.highlightedCell) {
    return;
  }
  oldHighlighted = this$static.highlightedCell;
  this$static.highlightedCell = nextHighlighted;
  if (oldHighlighted) {
    $fireEvent(oldHighlighted.this$1.this$0.datePicker, new DatePicker$DateHighlightEvent);
    $updateStyle(oldHighlighted);
  }
  !!this$static.highlightedCell && $onHighlighted(this$static.highlightedCell);
}

function getClass_211(){
  return Lcom_google_gwt_user_datepicker_client_CellGridImpl_2_classLit;
}

function onBrowserEvent_4(event_0){
  var cell, e, td, last;
  switch ($eventGetTypeInt(($clinit_96() , event_0).type)) {
    case 1:
      {
        cell = (td = $getEventTargetCell(this, event_0) , td?dynamicCast($get_4(this.elementToCell, td), 90):null);
        !!cell && cell.enabled && (last = this.selectedCell , this.selectedCell = cell , !!last && $onSelected(last, false) , !!this.selectedCell && $onSelected(this.selectedCell, true) , undefined);
        break;
      }

    case 32:
      {
        e = $eventGetFromElement(event_0);
        if (e) {
          cell = dynamicCast($get_4(this.elementToCell, e), 90);
          cell == this.highlightedCell && $setHighlighted(this, null);
        }
        break;
      }

    case 16:
      {
        e = $eventGetToElement(event_0);
        if (e) {
          cell = dynamicCast($get_4(this.elementToCell, e), 90);
          !!cell && cell.enabled && $setHighlighted(this, cell);
        }
        break;
      }

  }
}

function onUnload_2(){
  $setHighlighted(this, null);
}

function CellGridImpl(){
}

_ = CellGridImpl.prototype = new Grid;
_.getClass$ = getClass_211;
_.onBrowserEvent = onBrowserEvent_4;
_.onUnload = onUnload_2;
_.typeId$ = 124;
_.highlightedCell = null;
_.selectedCell = null;
function $CellGridImpl$Cell(this$static, elem, value, this$0){
  var current;
  this$static.this$0 = this$0;
  this$static.value_0 = value;
  current = this$static;
  $add(this$static.this$0.cellList, current);
  this$static.element = elem;
  $put(this$static.this$0.elementToCell, current);
  return this$static;
}

function getClass_212(){
  return Lcom_google_gwt_user_datepicker_client_CellGridImpl$Cell_2_classLit;
}

function CellGridImpl$Cell(){
}

_ = CellGridImpl$Cell.prototype = new UIObject;
_.getClass$ = getClass_212;
_.typeId$ = 125;
_.enabled = true;
_.this$0 = null;
_.value_0 = null;
function $DateChangeEvent(this$static, value){
  $ValueChangeEvent(this$static, copyDate(value));
  return this$static;
}

function getClass_213(){
  return Lcom_google_gwt_user_datepicker_client_DateChangeEvent_2_classLit;
}

function getValue_0(){
  return copyDate(dynamicCast(this.value_0, 6));
}

function DateChangeEvent(){
}

_ = DateChangeEvent.prototype = new ValueChangeEvent;
_.getClass$ = getClass_213;
_.getValue = getValue_0;
_.typeId$ = 0;
function $DatePicker(this$static){
  $DatePicker_0(this$static, new DefaultMonthSelector, $DefaultCalendarView(new DefaultCalendarView), $CalendarModel(new CalendarModel));
  return this$static;
}

function $DatePicker_0(this$static, monthSelector, view, model){
  var formatter, panel;
  this$static.styler = $DatePicker$DateStyler(new DatePicker$DateStyler);
  this$static.css = ($clinit_370() , DEFAULT);
  this$static.model = model;
  this$static.monthSelector = monthSelector;
  monthSelector.datePicker = this$static;
  this$static.view = view;
  view.datePicker = this$static;
  $setup_0(view);
  monthSelector.backwards = $PushButton(new PushButton);
  $addDomHandler(monthSelector.backwards, $DefaultMonthSelector$1(new DefaultMonthSelector$1, monthSelector), ($clinit_133() , $clinit_133() , TYPE_2));
  $setHTML_0(monthSelector.backwards.up, '&laquo;');
  $setStyleName(monthSelector.backwards, monthSelector.datePicker.css.baseName + 'PreviousButton');
  monthSelector.forwards = $PushButton(new PushButton);
  $setHTML_0(monthSelector.forwards.up, '&raquo;');
  $setStyleName(monthSelector.forwards, monthSelector.datePicker.css.baseName + 'NextButton');
  $addDomHandler(monthSelector.forwards, $DefaultMonthSelector$2(new DefaultMonthSelector$2, monthSelector), TYPE_2);
  monthSelector.grid = $Grid_0(new Grid, 1, 3);
  $setWidget_0(monthSelector.grid, 0, 0, monthSelector.backwards);
  $setWidget_0(monthSelector.grid, 0, 2, monthSelector.forwards);
  formatter = monthSelector.grid.cellFormatter;
  $setStyleName_0(formatter, 0, 1, monthSelector.datePicker.css.baseName + 'Month');
  formatter.this$0.prepareCell(0, 0);
  formatter.this$0.bodyElem.rows[0].cells[0]['width'] = '1';
  formatter.this$0.prepareCell(0, 1);
  formatter.this$0.bodyElem.rows[0].cells[1]['width'] = '100%';
  formatter.this$0.prepareCell(0, 2);
  formatter.this$0.bodyElem.rows[0].cells[2]['width'] = '1';
  $setStyleName(monthSelector.grid, monthSelector.datePicker.css.baseName + 'MonthSelector');
  $initWidget(monthSelector, monthSelector.grid);
  panel = $VerticalPanel(new VerticalPanel);
  $initWidget(this$static, panel);
  panel.element['className'] = this$static.css.widgetName;
  $setStyleName_1(this$static, this$static.css.widgetName);
  $add_5(panel, this$static.monthSelector);
  $add_5(panel, this$static.view);
  $setCurrentMonth_0(this$static, $Date(new Date_0));
  $addStyleToDates(this$static, this$static.css.baseName + 'DayIsToday', $Date(new Date_0));
  return this$static;
}

function $addStyleToDates(this$static, styleName, date){
  $setStyleName_2(this$static.styler, date, styleName, true);
  $isDateVisible(this$static, date) && $addStyleToDate(this$static.view, styleName, date);
}

function $isDateVisible(this$static, date){
  var first, last, r;
  r = this$static.view;
  first = r.firstDisplayed;
  last = r.lastDisplayed;
  return !!date && (($clinit_361() , (first.checkJsDate() , first.jsdate.getFullYear() - 1900) == (date.checkJsDate() , date.jsdate.getFullYear() - 1900) && (first.checkJsDate() , first.jsdate.getMonth()) == (date.checkJsDate() , date.jsdate.getMonth()) && (first.checkJsDate() , first.jsdate.getDate()) == (date.checkJsDate() , date.jsdate.getDate())) || (last.checkJsDate() , last.jsdate.getFullYear() - 1900) == (date.checkJsDate() , date.jsdate.getFullYear() - 1900) && (last.checkJsDate() , last.jsdate.getMonth()) == (date.checkJsDate() , date.jsdate.getMonth()) && (last.checkJsDate() , last.jsdate.getDate()) == (date.checkJsDate() , date.jsdate.getDate()) || compare_0(fromDouble((first.checkJsDate() , first.jsdate.getTime())), fromDouble((date.checkJsDate() , date.jsdate.getTime()))) < 0 && compare_0(fromDouble((last.checkJsDate() , last.jsdate.getTime())), fromDouble((date.checkJsDate() , date.jsdate.getTime()))) > 0);
}

function $refreshAll(this$static){
  $refresh(this$static.view);
  $refresh_0(this$static.monthSelector);
  $isAttached_0(this$static);
}

function $removeStyleFromDates(this$static, styleName, date){
  $setStyleName_2(this$static.styler, date, styleName, false);
  $isDateVisible(this$static, date) && $removeStyleFromDate(this$static.view, styleName, date);
}

function $setCurrentMonth_0(this$static, month){
  $setCurrentMonth(this$static.model, month);
  $refresh(this$static.view);
  $refresh_0(this$static.monthSelector);
  $isAttached_0(this$static);
}

function $setStyleName_1(this$static, styleName){
  this$static.css = $DatePicker$StandardCss(new DatePicker$StandardCss, styleName, 'datePicker');
  this$static.element['className'] = styleName;
}

function $setValue_0(this$static, newValue, fireEvents){
  var oldValue;
  oldValue = this$static.value_0;
  !!oldValue && $removeStyleFromDates(this$static, this$static.css.baseName + 'DayIsValue', oldValue);
  this$static.value_0 = copyDate(newValue);
  !!this$static.value_0 && $addStyleToDates(this$static, this$static.css.baseName + 'DayIsValue', this$static.value_0);
  fireEvents && (!!TYPE_12 && oldValue != newValue && (!oldValue || !(!!newValue && eq(fromDouble((oldValue.checkJsDate() , oldValue.jsdate.getTime())), fromDouble((newValue.checkJsDate() , newValue.jsdate.getTime()))))) && $fireEvent(this$static, $DateChangeEvent(new DateChangeEvent, newValue)) , undefined);
}

function getClass_214(){
  return Lcom_google_gwt_user_datepicker_client_DatePicker_2_classLit;
}

function onLoad_3(){
}

function DatePicker(){
}

_ = DatePicker.prototype = new Composite;
_.getClass$ = getClass_214;
_.onLoad = onLoad_3;
_.typeId$ = 126;
_.model = null;
_.monthSelector = null;
_.value_0 = null;
_.view = null;
function getClass_215(){
  return Lcom_google_gwt_user_datepicker_client_DatePicker$DateHighlightEvent_2_classLit;
}

function DatePicker$DateHighlightEvent(){
}

_ = DatePicker$DateHighlightEvent.prototype = new HighlightEvent;
_.getClass$ = getClass_215;
_.typeId$ = 0;
function $DatePicker$DateStyler(this$static){
  this$static.info = $HashMap(new HashMap);
  return this$static;
}

function $getStyleName(this$static, d){
  return dynamicCast($get_5(this$static.info, (d.checkJsDate() , d.jsdate.getFullYear() - 1900) + '/' + (d.checkJsDate() , d.jsdate.getMonth()) + '/' + (d.checkJsDate() , d.jsdate.getDate())), 1);
}

function $setStyleName_2(this$static, d, styleName, add){
  var current, key, newValue;
  styleName = ' ' + styleName + ' ';
  key = (d.checkJsDate() , d.jsdate.getFullYear() - 1900) + '/' + (d.checkJsDate() , d.jsdate.getMonth()) + '/' + (d.checkJsDate() , d.jsdate.getDate());
  current = dynamicCast($get_5(this$static.info, key), 1);
  if (add) {
    current == null?$put_0(this$static.info, key, styleName):current.indexOf(styleName) == -1 && $put_0(this$static.info, key, current + styleName);
  }
   else {
    if (current != null) {
      newValue = $replaceAll(current, styleName, '');
      $trim(newValue).length == 0?$remove_12(this$static.info, key):$put_0(this$static.info, key, newValue);
    }
  }
}

function getClass_216(){
  return Lcom_google_gwt_user_datepicker_client_DatePicker$DateStyler_2_classLit;
}

function DatePicker$DateStyler(){
}

_ = DatePicker$DateStyler.prototype = new Object_0;
_.getClass$ = getClass_216;
_.typeId$ = 0;
function $clinit_370(){
  $clinit_370 = nullMethod;
  DEFAULT = $DatePicker$StandardCss(new DatePicker$StandardCss, 'gwt-DatePicker', 'datePicker');
}

function $DatePicker$StandardCss(this$static, widgetName, baseName){
  $clinit_370();
  this$static.widgetName = widgetName;
  this$static.baseName = baseName;
  return this$static;
}

function getClass_217(){
  return Lcom_google_gwt_user_datepicker_client_DatePicker$StandardCss_2_classLit;
}

function DatePicker$StandardCss(){
}

_ = DatePicker$StandardCss.prototype = new Object_0;
_.getClass$ = getClass_217;
_.typeId$ = 0;
_.baseName = null;
_.widgetName = null;
var DEFAULT;
function $DefaultCalendarView(this$static){
  this$static.grid = $DefaultCalendarView$CellGrid(new DefaultCalendarView$CellGrid, this$static);
  this$static.lastDisplayed = $Date(new Date_0);
  return this$static;
}

function $addStyleToDate(this$static, styleName, date){
  $addStyleName_0($getCell_1(this$static, date), styleName);
}

function $getCell_1(this$static, d){
  var cell, index;
  index = getDaysBetween(this$static.firstDisplayed, d);
  cell = dynamicCast($get(this$static.grid.cellList, index), 90);
  if ($getDate_0(cell.value_0) != (d.checkJsDate() , d.jsdate.getDate())) {
    throw $IllegalStateException_0(new IllegalStateException, d + ' cannot be associated with cell ' + cell + ' as it has date ' + cell.value_0);
  }
  return cell;
}

function $refresh(this$static){
  var cell, i;
  this$static.firstDisplayed = $getCurrentFirstDayOfFirstWeek(this$static.datePicker.model);
  $getDate_0(this$static.firstDisplayed) == 1 && addDaysToDate(this$static.firstDisplayed, -7);
  $setTime0(this$static.lastDisplayed, toDouble(fromDouble($getTime0(this$static.firstDisplayed))));
  for (i = 0; i < this$static.grid.cellList.size_0; ++i) {
    i != 0 && addDaysToDate(this$static.lastDisplayed, 1);
    cell = dynamicCast($get(this$static.grid.cellList, i), 90);
    $update_0(cell, this$static.lastDisplayed);
  }
}

function $removeStyleFromDate(this$static, styleName, date){
  $removeStyleName_0($getCell_1(this$static, date), styleName);
}

function $setup_0(this$static){
  var column, dayIdx, e, formatter, i, row, shift, weekendEndColumn, weekendStartColumn;
  formatter = this$static.grid.cellFormatter;
  weekendStartColumn = -1;
  weekendEndColumn = -1;
  for (i = 0; i < 7; ++i) {
    shift = ($clinit_361() , $clinit_361() , startingDay);
    dayIdx = i + shift < 7?i + shift:i + shift - 7;
    $setText_0(this$static.grid, 0, i, ($clinit_360() , dayOfWeekNames)[dayIdx]);
    if (dayIdx == firstDayOfWeekend || dayIdx == lastDayOfWeekend) {
      $setStyleName_0(formatter, 0, i, this$static.datePicker.css.baseName + 'WeekendLabel');
      weekendStartColumn == -1?(weekendStartColumn = i):(weekendEndColumn = i);
    }
     else {
      $setStyleName_0(formatter, 0, i, this$static.datePicker.css.baseName + 'WeekdayLabel');
    }
  }
  for (row = 1; row <= 6; ++row) {
    for (column = 0; column < 7; ++column) {
      e = ($checkCellBounds(formatter.this$0, row, column) , formatter.this$0.bodyElem.rows[row].cells[column]);
      $DefaultCalendarView$CellGrid$DateCell(new DefaultCalendarView$CellGrid$DateCell, e, column == weekendStartColumn || column == weekendEndColumn, this$static.grid);
    }
  }
  $initWidget(this$static, this$static.grid);
  $setStyleName(this$static.grid, this$static.datePicker.css.baseName + 'Days');
}

function getClass_218(){
  return Lcom_google_gwt_user_datepicker_client_DefaultCalendarView_2_classLit;
}

function DefaultCalendarView(){
}

_ = DefaultCalendarView.prototype = new CalendarView;
_.getClass$ = getClass_218;
_.typeId$ = 127;
_.firstDisplayed = null;
function $DefaultCalendarView$CellGrid(this$static, this$0){
  this$static.this$0 = this$0;
  $Grid(this$static);
  this$static.elementToCell = $ElementMapperImpl(new ElementMapperImpl);
  this$static.cellList = $ArrayList(new ArrayList);
  this$static.tableElem['cellPadding'] = 0;
  this$static.tableElem['cellSpacing'] = 0;
  this$static.tableElem['border'] = '0';
  $sinkEvents(this$static, 49);
  $resizeColumns(this$static, 7);
  $resizeRows(this$static, 7);
  return this$static;
}

function getClass_219(){
  return Lcom_google_gwt_user_datepicker_client_DefaultCalendarView$CellGrid_2_classLit;
}

function DefaultCalendarView$CellGrid(){
}

_ = DefaultCalendarView$CellGrid.prototype = new CellGridImpl;
_.getClass$ = getClass_219;
_.typeId$ = 128;
_.this$0 = null;
function $DefaultCalendarView$CellGrid$DateCell(this$static, td, isWeekend, this$1){
  this$static.this$1 = this$1;
  $CellGridImpl$Cell(this$static, td, $Date(new Date_0), this$1);
  this$static.cellStyle = this$static.this$1.this$0.datePicker.css.baseName + 'Day';
  isWeekend && (this$static.cellStyle += ' ' + this$static.this$1.this$0.datePicker.css.baseName + 'DayIsWeekend');
  return this$static;
}

function $addStyleName_0(this$static, styleName){
  this$static.dateStyle.indexOf(' ' + styleName + ' ') == -1 && (this$static.dateStyle += styleName + ' ');
  $updateStyle(this$static);
}

function $onHighlighted(this$static){
  $fireEvent(this$static.this$1.this$0.datePicker, new DatePicker$DateHighlightEvent);
  $updateStyle(this$static);
}

function $onSelected(this$static, selected){
  if (selected) {
    $setValue_0(this$static.this$1.this$0.datePicker, this$static.value_0, true);
    !$isInCurrentMonth(this$static.this$1.this$0.datePicker.model, this$static.value_0) && $setCurrentMonth_0(this$static.this$1.this$0.datePicker, this$static.value_0);
  }
  $updateStyle(this$static);
}

function $removeStyleName_0(this$static, styleName){
  this$static.dateStyle = $replace_0(this$static.dateStyle, ' ' + styleName + ' ', ' ');
  $updateStyle(this$static);
}

function $update_0(this$static, current){
  var extraStyle, value;
  this$static.enabled = true;
  $updateStyle(this$static);
  $setTime0(this$static.value_0, toDouble(fromDouble((current.checkJsDate() , current.jsdate.getTime()))));
  value = $formatDayOfMonth(this$static.value_0);
  $setInnerText(($clinit_96() , this$static.element), value);
  this$static.dateStyle = this$static.cellStyle;
  if ($isInCurrentMonth(this$static.this$1.this$0.datePicker.model, this$static.value_0)) {
    extraStyle = $getStyleName(this$static.this$1.this$0.datePicker.styler, current);
    extraStyle != null && (this$static.dateStyle += ' ' + extraStyle);
  }
   else {
    this$static.dateStyle += ' ' + this$static.this$1.this$0.datePicker.css.baseName + 'DayIsFiller';
  }
  this$static.dateStyle += ' ';
  $updateStyle(this$static);
}

function $updateStyle(this$static){
  var accum;
  accum = this$static.dateStyle;
  if (this$static == this$static.this$0.highlightedCell) {
    accum += ' ' + this$static.this$1.this$0.datePicker.css.baseName + 'DayIsHighlighted';
    this$static == this$static.this$0.highlightedCell && this$static.this$0.selectedCell == this$static && (accum += ' ' + this$static.this$1.this$0.datePicker.css.baseName + 'DayIsValueAndHighlighted');
  }
  !this$static.enabled && (accum += ' ' + this$static.this$1.this$0.datePicker.css.baseName + 'DayIsDisabled');
  this$static.element['className'] = accum;
}

function getClass_220(){
  return Lcom_google_gwt_user_datepicker_client_DefaultCalendarView$CellGrid$DateCell_2_classLit;
}

function DefaultCalendarView$CellGrid$DateCell(){
}

_ = DefaultCalendarView$CellGrid$DateCell.prototype = new CellGridImpl$Cell;
_.getClass$ = getClass_220;
_.typeId$ = 129;
_.cellStyle = null;
_.dateStyle = null;
_.this$1 = null;
function getClass_221(){
  return Lcom_google_gwt_user_datepicker_client_MonthSelector_2_classLit;
}

function MonthSelector(){
}

_ = MonthSelector.prototype = new DatePickerComponent;
_.getClass$ = getClass_221;
_.typeId$ = 130;
function $refresh_0(this$static){
  var formattedMonth;
  formattedMonth = $formatCurrentMonth(this$static.datePicker.model);
  $setText_0(this$static.grid, 0, 1, formattedMonth);
}

function getClass_222(){
  return Lcom_google_gwt_user_datepicker_client_DefaultMonthSelector_2_classLit;
}

function DefaultMonthSelector(){
}

_ = DefaultMonthSelector.prototype = new MonthSelector;
_.getClass$ = getClass_222;
_.typeId$ = 131;
_.backwards = null;
_.forwards = null;
_.grid = null;
function $DefaultMonthSelector$1(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function getClass_223(){
  return Lcom_google_gwt_user_datepicker_client_DefaultMonthSelector$1_2_classLit;
}

function onClick_1(event_0){
  $addMonths(this.this$0, -1);
}

function DefaultMonthSelector$1(){
}

_ = DefaultMonthSelector$1.prototype = new Object_0;
_.getClass$ = getClass_223;
_.onClick = onClick_1;
_.typeId$ = 132;
_.this$0 = null;
function $DefaultMonthSelector$2(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function getClass_224(){
  return Lcom_google_gwt_user_datepicker_client_DefaultMonthSelector$2_2_classLit;
}

function onClick_2(event_0){
  $addMonths(this.this$0, 1);
}

function DefaultMonthSelector$2(){
}

_ = DefaultMonthSelector$2.prototype = new Object_0;
_.getClass$ = getClass_224;
_.onClick = onClick_2;
_.typeId$ = 133;
_.this$0 = null;
function $clinit_380(){
  $clinit_380 = nullMethod;
  $clinit_279();
}

function $SensitiveButton_0(this$static, html){
  $clinit_380();
  $Button(this$static);
  this$static.element.innerHTML = html || '';
  this$static.element.style['width'] = '30px';
  return this$static;
}

function getClass_225(){
  return Lcom_gwtincubator_widgets_client_button_SensitiveButton_2_classLit;
}

function SensitiveButton(){
}

_ = SensitiveButton.prototype = new Button;
_.getClass$ = getClass_225;
_.typeId$ = 134;
function $clinit_381(){
  $clinit_381 = nullMethod;
  $clinit_380();
}

function $TimeButton(this$static, value){
  var txt;
  $clinit_381();
  $Button(this$static);
  this$static.element.style['width'] = '30px';
  this$static.value_0 = value;
  this$static.element.innerHTML = (txt = '' , value < 0?(txt = '00'):value < 10?(txt = '0' + value):value < 100?(txt = '' + value):(txt = '00') , txt) || '';
  return this$static;
}

function getClass_226(){
  return Lcom_gwtincubator_widgets_client_button_TimeButton_2_classLit;
}

function TimeButton(){
}

_ = TimeButton.prototype = new SensitiveButton;
_.getClass$ = getClass_226;
_.typeId$ = 135;
_.value_0 = 0;
function $PropertyChangeListenerCollection(this$static){
  this$static.listeners = $ArrayList(new ArrayList);
  return this$static;
}

function $addPropertyChangeListener(this$static, listener){
  if (!listener) {
    return;
  }
  $indexOf_0(this$static.listeners, listener, 0) == -1 && $add(this$static.listeners, listener);
}

function $firePropertyChangeEvent(this$static, source, propertyName, oldValue, newValue){
  var listener, listener$iterator;
  for (listener$iterator = $AbstractList$IteratorImpl(new AbstractList$IteratorImpl, this$static.listeners); listener$iterator.i < listener$iterator.this$0.size_1();) {
    listener = dynamicCast($next_6(listener$iterator), 91);
    listener.propertyChanged(source, propertyName, oldValue, newValue);
  }
}

function getClass_227(){
  return Lcom_gwtincubator_widgets_client_event_PropertyChangeListenerCollection_2_classLit;
}

function PropertyChangeListenerCollection(){
}

_ = PropertyChangeListenerCollection.prototype = new Object_0;
_.getClass$ = getClass_227;
_.typeId$ = 0;
function $WidgetLabel(this$static){
  var label;
  label = ($clinit_96() , $doc).createElement('label');
  this$static.element = label;
  return this$static;
}

function $setInnerHTML_0(this$static, separator){
  var sb;
  sb = $append_6($StringBuffer_1(new StringBuffer, ''), separator == null?'':separator);
  this$static.element.innerHTML = sb.impl.string || '';
}

function getClass_228(){
  return Lcom_gwtincubator_widgets_client_label_WidgetLabel_2_classLit;
}

function WidgetLabel(){
}

_ = WidgetLabel.prototype = new Widget;
_.getClass$ = getClass_228;
_.typeId$ = 136;
function $toString_5(model){
  var sb;
  if (!model) {
    return null;
  }
  sb = $StringBuffer(new StringBuffer);
  model.hour < 10 && (sb.impl.string += '0' , undefined);
  $append_4(sb, model.hour);
  sb.impl.string += ':';
  model.minute < 10 && (sb.impl.string += '0' , undefined);
  $append_4(sb, model.minute);
  return sb.impl.string;
}

function $clinit_387(){
  $clinit_387 = nullMethod;
  AM_MODE = $TimeMode(new TimeMode, 'AM_MODE', 0, 'am');
  PM_MODE = $TimeMode(new TimeMode, 'PM_MODE', 1, 'pm');
}

function $TimeMode(this$static, enum$name, enum$ordinal, mode){
  $clinit_387();
  this$static.name_0 = enum$name;
  this$static.ordinal = enum$ordinal;
  this$static.mode = mode;
  return this$static;
}

function getClass_229(){
  return Lcom_gwtincubator_widgets_client_timepicker_TimeMode_2_classLit;
}

function getTimeMode(mode){
  $clinit_387();
  var m, m$array, m$index, m$max;
  for (m$array = initValues(_3Lcom_gwtincubator_widgets_client_timepicker_TimeMode_2_classLit, 218, 64, [AM_MODE, PM_MODE]) , m$index = 0 , m$max = m$array.length; m$index < m$max; ++m$index) {
    m = m$array[m$index];
    if ($equals_3(m.mode, mode)) {
      return m;
    }
  }
  throw $IllegalArgumentException(new IllegalArgumentException, 'Unknown mode : ' + mode);
}

function values_6(){
  $clinit_387();
  return initValues(_3Lcom_gwtincubator_widgets_client_timepicker_TimeMode_2_classLit, 218, 64, [AM_MODE, PM_MODE]);
}

function TimeMode(){
}

_ = TimeMode.prototype = new Enum;
_.getClass$ = getClass_229;
_.typeId$ = 137;
_.mode = null;
var AM_MODE, PM_MODE;
function $TimeModel(this$static){
  this$static.listeners = $PropertyChangeListenerCollection(new PropertyChangeListenerCollection);
  return this$static;
}

function $TimeModel_0(this$static, hour, minute){
  this$static.listeners = $PropertyChangeListenerCollection(new PropertyChangeListenerCollection);
  $setHour(this$static, hour);
  $setMinute(this$static, minute);
  return this$static;
}

function $addPropertyChangeListener_0(this$static, listener){
  if (!listener) {
    return;
  }
  $addPropertyChangeListener(this$static.listeners, listener);
}

function $setHour(this$static, hour){
  var oldValue;
  if (hour < 0 || hour > 23) {
    throw $IllegalArgumentException(new IllegalArgumentException, 'Hour (' + hour + ") can't be out of [0;23]");
  }
  oldValue = this$static.hour;
  this$static.hour = hour;
  this$static.hour != oldValue && $firePropertyChangeEvent(this$static.listeners, this$static, 'hour', valueOf_3(oldValue), valueOf_3(hour));
}

function $setMinute(this$static, minute){
  var oldValue;
  if (minute < 0 || minute > 59) {
    throw $IllegalArgumentException(new IllegalArgumentException, 'Minute (' + minute + ") can't be out of [0;59]");
  }
  oldValue = this$static.minute;
  this$static.minute = minute;
  this$static.minute != oldValue && $firePropertyChangeEvent(this$static.listeners, this$static, 'minute', valueOf_3(oldValue), valueOf_3(minute));
}

function $setTime(this$static, hour, minute){
  $setHour(this$static, hour);
  $setMinute(this$static, minute);
}

function getClass_230(){
  return Lcom_gwtincubator_widgets_client_timepicker_TimeModel_2_classLit;
}

function propertyChanged(source, propertyName, oldValue, newValue){
  !!source && ($equals_3('hourValue', propertyName)?$setHour(this, dynamicCast(newValue, 69).value_0):$equals_3('minuteValue', propertyName) && $setMinute(this, dynamicCast(newValue, 69).value_0));
}

function toString_17(){
  return $append_4($append_6($append_4($StringBuffer_1(new StringBuffer, ''), this.hour), ':'), this.minute).impl.string;
}

function TimeModel(){
}

_ = TimeModel.prototype = new Object_0;
_.getClass$ = getClass_230;
_.propertyChanged = propertyChanged;
_.toString$ = toString_17;
_.typeId$ = 138;
_.hour = -2147483648;
_.minute = -2147483648;
function $TimePicker(this$static){
  this$static.innerPanel = $HorizontalPanel(new HorizontalPanel);
  this$static.popupPanel = $PopupPanel_0(new PopupPanel, true);
  this$static.timeModel = $TimeModel(new TimeModel);
  this$static.popupPanel.element.style['visibility'] = 'hidden';
  setStyleName(this$static.popupPanel.getStyleElement(), 'DatePickerPopup', true);
  $add_3(this$static.popupPanel, $getTimePopupFlexTable(this$static));
  $addHandler(this$static.popupPanel, $TimePicker$1(new TimePicker$1, this$static), TYPE_8?TYPE_8:(TYPE_8 = $GwtEvent$Type(new GwtEvent$Type)));
  $add_4(this$static.innerPanel, $getTimeBoxLabel(this$static));
  $add_4(this$static.innerPanel, $getTimeTextBox(this$static));
  setStyleName(this$static.innerPanel.getStyleElement(), 'TimePicker', true);
  $setInnerHTML_0($getTimeBoxLabel(this$static), '&nbsp;:&nbsp;');
  $initWidget(this$static, this$static.innerPanel);
  return this$static;
}

function $getTimeBoxLabel(this$static){
  if (!this$static.timeBoxLabel) {
    this$static.timeBoxLabel = $WidgetLabel(new WidgetLabel);
    setStyleName(this$static.timeBoxLabel.getStyleElement(), 'TimePickerLabel', true);
  }
  return this$static.timeBoxLabel;
}

function $getTimePopupFlexTable(this$static){
  if (!this$static.timePopupFlexTable) {
    this$static.timePopupFlexTable = $TimePicker$TimePopupFlexTable(new TimePicker$TimePopupFlexTable, this$static);
    $addPropertyChangeListener(this$static.timePopupFlexTable.listeners, this$static.timeModel);
    $addPropertyChangeListener(this$static.timePopupFlexTable.listeners, this$static);
    $addPropertyChangeListener_0(this$static.timeModel, this$static.timePopupFlexTable);
  }
  return this$static.timePopupFlexTable;
}

function $getTimeTextBox(this$static){
  var handler;
  if (!this$static.timeTextBox) {
    this$static.timeTextBox = $TimeTextBox(new TimeTextBox);
    this$static.timeTextBox.element.style['width'] = '60px';
    setStyleName(this$static.timeTextBox.getStyleElement(), 'TimePickerTextField', true);
    handler = $TimePicker$TextFieldFocusListener(new TimePicker$TextFieldFocusListener, this$static);
    $addDomHandler(this$static.timeTextBox, handler, ($clinit_137() , $clinit_137() , TYPE_3));
    $addDomHandler(this$static.timeTextBox, handler, ($clinit_164() , $clinit_164() , TYPE_6));
    $addPropertyChangeListener_0(this$static.timeModel, this$static.timeTextBox);
  }
  return this$static.timeTextBox;
}

function $hideOnClick(this$static){
  this$static.restoreModel = false;
  $hide(this$static.popupPanel);
}

function $setTime_0(this$static, hour, minute){
  var $e0, e;
  try {
    $setTime(this$static.timeModel, hour, minute);
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (instanceOf($e0, 92)) {
      e = $e0;
      $wnd.alert('Error while setting TimePicker value : ' + e.detailMessage);
    }
     else 
      throw $e0;
  }
}

function getClass_231(){
  return Lcom_gwtincubator_widgets_client_timepicker_TimePicker_2_classLit;
}

function onClick_3(event_0){
}

function propertyChanged_0(source, propertyName, oldValue, newValue){
  if (!!source && source != null && canCast(source.typeId$, 93)) {
    if ($equals_3('visibility', propertyName)) {
      this.restoreModel = false;
      $hide(this.popupPanel);
    }
  }
}

function setHeight_1(height){
  $getTimeTextBox(this).element.style['height'] = height;
}

function setWidth_1(width){
  $getTimeTextBox(this).element.style['width'] = width;
}

function TimePicker(){
}

_ = TimePicker.prototype = new Composite;
_.getClass$ = getClass_231;
_.onClick = onClick_3;
_.propertyChanged = propertyChanged_0;
_.setHeight = setHeight_1;
_.setWidth = setWidth_1;
_.typeId$ = 139;
_.restoreModel = true;
_.timeBoxLabel = null;
_.timeModelClone = null;
_.timePopupFlexTable = null;
_.timeTextBox = null;
function $TimePicker$1(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function getClass_232(){
  return Lcom_gwtincubator_widgets_client_timepicker_TimePicker$1_2_classLit;
}

function onClose_1(event_0){
  var cloneModel;
  if (this.this$0.restoreModel) {
    cloneModel = this.this$0.timeModelClone;
    !!cloneModel && $setTime(this.this$0.timeModel, cloneModel.hour, cloneModel.minute);
  }
  this.this$0.timeModelClone = null;
  this.this$0.restoreModel = true;
}

function TimePicker$1(){
}

_ = TimePicker$1.prototype = new Object_0;
_.getClass$ = getClass_232;
_.onClose = onClose_1;
_.typeId$ = 140;
_.this$0 = null;
function $TimePicker$TextFieldFocusListener(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function $process(this$static, sender){
  var absoluteLeft, absoluteTop, offsetHeight;
  if (this$static.this$0.timeModelClone) {
    return;
  }
  this$static.this$0.timeModelClone = $TimeModel_0(new TimeModel, this$static.this$0.timeModel.hour, this$static.this$0.timeModel.minute);
  $initialize($getTimePopupFlexTable(this$static.this$0), this$static.this$0.timeModel);
  offsetHeight = sender.getOffsetHeight();
  absoluteLeft = $getAbsoluteLeft(($clinit_96() , sender.element));
  absoluteTop = $getAbsoluteTop(sender.element);
  $setPopupPosition(this$static.this$0.popupPanel, absoluteLeft, absoluteTop + offsetHeight);
  this$static.this$0.popupPanel.element.style['visibility'] = 'hidden';
  $show(this$static.this$0.popupPanel);
  this$static.this$0.popupPanel.element.style['visibility'] = 'visible';
}

function getClass_233(){
  return Lcom_gwtincubator_widgets_client_timepicker_TimePicker$TextFieldFocusListener_2_classLit;
}

function onMouseOver_0(event_0){
  $process(this, dynamicCast(event_0.source, 13));
}

function TimePicker$TextFieldFocusListener(){
}

_ = TimePicker$TextFieldFocusListener.prototype = new Object_0;
_.getClass$ = getClass_233;
_.onMouseOver = onMouseOver_0;
_.typeId$ = 141;
_.this$0 = null;
function $TimePicker$TimePopupFlexTable(this$static, this$0){
  this$static.this$0 = this$0;
  $HTMLTable(this$static);
  this$static.cellFormatter = $FlexTable$FlexCellFormatter(new FlexTable$FlexCellFormatter, this$static);
  $setColumnFormatter(this$static, $HTMLTable$ColumnFormatter(new HTMLTable$ColumnFormatter, this$static));
  this$static.listeners = $PropertyChangeListenerCollection(new PropertyChangeListenerCollection);
  this$static.state = $TimePicker$TimePopupFlexTable$TimePanelState(new TimePicker$TimePopupFlexTable$TimePanelState, this$static);
  this$static.modeListener = $TimePicker$TimePopupFlexTable$ModeMouseListener(new TimePicker$TimePopupFlexTable$ModeMouseListener, this$static);
  this$static.hourListener = $TimePicker$TimePopupFlexTable$HourMouseListener(new TimePicker$TimePopupFlexTable$HourMouseListener, this$static);
  this$static.minuteListener = $TimePicker$TimePopupFlexTable$MinuteMouseListener(new TimePicker$TimePopupFlexTable$MinuteMouseListener, this$static);
  this$static.hourButtons = initDim(_3Lcom_gwtincubator_widgets_client_button_TimeButton_2_classLit, 217, 63, 24, 0);
  this$static.minuteButtons = initDim(_3Lcom_gwtincubator_widgets_client_button_TimeButton_2_classLit, 217, 63, 4, 0);
  setStyleName(this$static.element, 'TimePickerPopup', true);
  $setWidget_0(this$static, 0, 0, $getButtonAm(this$static));
  $setWidget_0(this$static, 0, 1, $getButtonPm(this$static));
  return this$static;
}

function $displayHours(this$static, mode){
  var bt, i, td_1;
  if (mode == ($clinit_387() , AM_MODE)) {
    if (this$static.bodyElem.rows.length > 1 && ($checkRowBounds(this$static, 1) , this$static.bodyElem.rows[1].cells.length) > 12) {
      for (i = ($checkRowBounds(this$static, 1) , this$static.bodyElem.rows[1].cells.length) - 1; i >= 12; --i) {
        $removeCell(this$static, 1, i);
      }
    }
    bt = null;
    for (i = 0; i < 12; ++i) {
      bt = $getHourButtons(this$static)[i];
      setStyleName(bt.element, 'timeButton-focus', false);
      $setWidget_0(this$static, 1, i, bt);
    }
  }
   else {
    this$static.bodyElem.rows.length > 1 && (td_1 = $getElement(this$static.cellFormatter, 1, 0) , $internalClearCell(this$static, td_1, true));
    bt = null;
    for (i = 0; i < 12; ++i) {
      bt = $getHourButtons(this$static)[i + 12];
      setStyleName(bt.element, 'timeButton-focus', false);
      $setWidget_0(this$static, 1, i + 1, bt);
    }
  }
  bt = $getHourButtons(this$static)[$getAbsoluteHourIndex(this$static.state)];
  setStyleName(bt.element, 'timeButton-focus', true);
}

function $displayMinutes(this$static, refIndex){
  var bt, i;
  if (refIndex < 0) {
    this$static.bodyElem.rows.length == 2 && $removeRow(this$static, 2);
    return;
  }
  if ($isCellPresent(this$static, 2, 0)) {
    i = 0;
    while ($isCellPresent(this$static, 2, i)) {
      $clearCell(this$static, 2, i++);
    }
  }
  bt = null;
  for (i = 0; i < 4; ++i) {
    bt = $getMinuteButtons(this$static)[i];
    setStyleName(bt.element, 'timeButton-focus', false);
    $setWidget_0(this$static, 2, i + refIndex, bt);
  }
  bt = $getMinuteButtons(this$static)[~~(this$static.state.minuteValue / 15)];
  setStyleName(bt.element, 'timeButton-focus', true);
}

function $getButtonAm(this$static){
  if (!this$static.buttonAm) {
    this$static.buttonAm = $SensitiveButton_0(new SensitiveButton, 'am');
    $addDomHandler(this$static.buttonAm, this$static.modeListener, ($clinit_164() , $clinit_164() , TYPE_6));
  }
  return this$static.buttonAm;
}

function $getButtonPm(this$static){
  if (!this$static.buttonPm) {
    this$static.buttonPm = $SensitiveButton_0(new SensitiveButton, 'pm');
    $addDomHandler(this$static.buttonPm, this$static.modeListener, ($clinit_164() , $clinit_164() , TYPE_6));
  }
  return this$static.buttonPm;
}

function $getHourButtonIndex(this$static, tb){
  var i, index;
  if (this$static.bodyElem.rows.length == 1) {
    return -1;
  }
  index = -1;
  for (i = 0; i < ($checkRowBounds(this$static, 1) , this$static.bodyElem.rows[1].cells.length); ++i) {
    if (($checkCellBounds(this$static, 1, i) , $getWidgetImpl(this$static, 1, i)) == tb) {
      index = i;
      break;
    }
  }
  return index;
}

function $getHourButtons(this$static){
  var i;
  if (!this$static.hourButtons[0]) {
    for (i = 0; i < 24; ++i) {
      this$static.hourButtons[i] = $TimeButton(new TimeButton, i);
      $addDomHandler(this$static.hourButtons[i], this$static.hourListener, ($clinit_164() , $clinit_164() , TYPE_6));
      $addDomHandler(this$static.hourButtons[i], this$static.hourListener, ($clinit_166() , $clinit_166() , TYPE_7));
    }
  }
  return this$static.hourButtons;
}

function $getMinuteButtons(this$static){
  var i;
  if (!this$static.minuteButtons[0]) {
    for (i = 0; i < 4; ++i) {
      this$static.minuteButtons[i] = $TimeButton(new TimeButton, i * 15);
      $addDomHandler(this$static.minuteButtons[i], this$static.minuteListener, ($clinit_164() , $clinit_164() , TYPE_6));
      $addDomHandler(this$static.minuteButtons[i], this$static.minuteListener, ($clinit_166() , $clinit_166() , TYPE_7));
    }
  }
  return this$static.minuteButtons;
}

function $initialize(this$static, model){
  $setHourValue(this$static.state, model.hour);
  $setMinuteValue(this$static.state, model.minute);
  if (model.hour < 12) {
    $setMode(this$static.state, ($clinit_387() , AM_MODE));
    $setHourIndex(this$static.state, model.hour);
    setStyleName($getButtonAm(this$static).getStyleElement(), 'timeButton-focus', true);
    setStyleName($getButtonPm(this$static).element, 'timeButton-focus', false);
  }
   else {
    $setMode(this$static.state, ($clinit_387() , PM_MODE));
    $setHourIndex(this$static.state, model.hour - 11);
    setStyleName($getButtonPm(this$static).getStyleElement(), 'timeButton-focus', true);
    setStyleName($getButtonAm(this$static).element, 'timeButton-focus', false);
  }
  $setMinuteIndex(this$static.state, this$static.state.hourIndex + ~~(this$static.state.minuteValue / 15));
  $displayHours(this$static, this$static.state.mode);
  $displayMinutes(this$static, this$static.state.hourIndex);
}

function $onModeChanged(this$static, mode){
  if (mode == ($clinit_387() , AM_MODE)) {
    setStyleName($getButtonAm(this$static).getStyleElement(), 'timeButton-focus', true);
    setStyleName($getButtonPm(this$static).element, 'timeButton-focus', false);
  }
   else {
    setStyleName($getButtonPm(this$static).getStyleElement(), 'timeButton-focus', true);
    setStyleName($getButtonAm(this$static).element, 'timeButton-focus', false);
  }
}

function getClass_234(){
  return Lcom_gwtincubator_widgets_client_timepicker_TimePicker$TimePopupFlexTable_2_classLit;
}

function propertyChanged_1(source, propertyName, oldValue, newValue){
  var model;
  if (!!source && source != null && canCast(source.typeId$, 94)) {
    model = dynamicCast(source, 94);
    $initialize(this, model);
  }
}

function TimePicker$TimePopupFlexTable(){
}

_ = TimePicker$TimePopupFlexTable.prototype = new FlexTable;
_.getClass$ = getClass_234;
_.propertyChanged = propertyChanged_1;
_.typeId$ = 142;
_.buttonAm = null;
_.buttonPm = null;
_.this$0 = null;
function $TimePicker$TimePopupFlexTable$HourMouseListener(this$static, this$1){
  this$static.this$1 = this$1;
  return this$static;
}

function getClass_235(){
  return Lcom_gwtincubator_widgets_client_timepicker_TimePicker$TimePopupFlexTable$HourMouseListener_2_classLit;
}

function onMouseOver_1(event_0){
  var index, tb;
  tb = dynamicCast(event_0.source, 63);
  index = $getHourButtonIndex(this.this$1, tb);
  $displayMinutes(this.this$1, index);
  $setHourIndex(this.this$1.state, index);
  $setHourValue(this.this$1.state, tb.value_0);
}

function onMouseUp(event_0){
  $hideOnClick(this.this$1.this$0);
}

function TimePicker$TimePopupFlexTable$HourMouseListener(){
}

_ = TimePicker$TimePopupFlexTable$HourMouseListener.prototype = new Object_0;
_.getClass$ = getClass_235;
_.onMouseOver = onMouseOver_1;
_.onMouseUp = onMouseUp;
_.typeId$ = 143;
_.this$1 = null;
function $TimePicker$TimePopupFlexTable$MinuteMouseListener(this$static, this$1){
  this$static.this$1 = this$1;
  return this$static;
}

function getClass_236(){
  return Lcom_gwtincubator_widgets_client_timepicker_TimePicker$TimePopupFlexTable$MinuteMouseListener_2_classLit;
}

function onMouseOver_2(event_0){
  var index, tb;
  tb = dynamicCast(event_0.source, 63);
  index = $getHourButtonIndex(this.this$1, tb);
  $setMinuteIndex(this.this$1.state, index);
  $setMinuteValue(this.this$1.state, tb.value_0);
}

function onMouseUp_0(event_0){
  $hideOnClick(this.this$1.this$0);
}

function TimePicker$TimePopupFlexTable$MinuteMouseListener(){
}

_ = TimePicker$TimePopupFlexTable$MinuteMouseListener.prototype = new Object_0;
_.getClass$ = getClass_236;
_.onMouseOver = onMouseOver_2;
_.onMouseUp = onMouseUp_0;
_.typeId$ = 144;
_.this$1 = null;
function $TimePicker$TimePopupFlexTable$ModeMouseListener(this$static, this$1){
  this$static.this$1 = this$1;
  return this$static;
}

function getClass_237(){
  return Lcom_gwtincubator_widgets_client_timepicker_TimePicker$TimePopupFlexTable$ModeMouseListener_2_classLit;
}

function onMouseOver_3(event_0){
  var bt, mode, text;
  bt = dynamicCast(event_0.source, 50);
  text = $getInnerText(($clinit_96() , impl), bt.element);
  mode = getTimeMode(text);
  $setMode(this.this$1.state, mode);
  $onModeChanged(this.this$1, mode);
  $displayHours(this.this$1, mode);
}

function TimePicker$TimePopupFlexTable$ModeMouseListener(){
}

_ = TimePicker$TimePopupFlexTable$ModeMouseListener.prototype = new Object_0;
_.getClass$ = getClass_237;
_.onMouseOver = onMouseOver_3;
_.typeId$ = 145;
_.this$1 = null;
function $TimePicker$TimePopupFlexTable$TimePanelState(this$static, this$1){
  this$static.this$1 = this$1;
  this$static.mode = ($clinit_387() , AM_MODE);
  return this$static;
}

function $getAbsoluteHourIndex(this$static){
  if (this$static.mode == ($clinit_387() , PM_MODE)) {
    return this$static.hourIndex + 11;
  }
   else {
    return this$static.hourIndex;
  }
}

function $setHourIndex(this$static, hourIndex){
  var oldValue;
  oldValue = this$static.hourIndex;
  this$static.hourIndex = hourIndex;
  oldValue != hourIndex && $firePropertyChangeEvent(this$static.this$1.listeners, this$static.this$1, 'hourIndex', valueOf_3(oldValue), valueOf_3(hourIndex));
}

function $setHourValue(this$static, hourValue){
  var oldValue;
  if (hourValue < 0 || hourValue > 23) {
    return;
  }
  oldValue = this$static.hourValue;
  this$static.hourValue = hourValue;
  oldValue != hourValue && $firePropertyChangeEvent(this$static.this$1.listeners, this$static.this$1, 'hourValue', valueOf_3(oldValue), valueOf_3(hourValue));
}

function $setMinuteIndex(this$static, minuteIndex){
  var oldValue;
  oldValue = this$static.minuteIndex;
  this$static.minuteIndex = minuteIndex;
  oldValue != minuteIndex && $firePropertyChangeEvent(this$static.this$1.listeners, this$static.this$1, 'minuteIndex', valueOf_3(oldValue), valueOf_3(minuteIndex));
}

function $setMinuteValue(this$static, minuteValue){
  var oldValue;
  if (minuteValue < 0 || minuteValue > 59) {
    return;
  }
  oldValue = this$static.minuteValue;
  this$static.minuteValue = minuteValue;
  oldValue != minuteValue && $firePropertyChangeEvent(this$static.this$1.listeners, this$static.this$1, 'minuteValue', valueOf_3(oldValue), valueOf_3(minuteValue));
}

function $setMode(this$static, mode){
  var oldValue;
  oldValue = this$static.mode;
  this$static.mode = mode;
  oldValue != mode && $firePropertyChangeEvent(this$static.this$1.listeners, this$static.this$1, 'mode', oldValue, mode);
}

function getClass_238(){
  return Lcom_gwtincubator_widgets_client_timepicker_TimePicker$TimePopupFlexTable$TimePanelState_2_classLit;
}

function toString_18(){
  var sb;
  sb = $StringBuffer(new StringBuffer);
  $append_6($append_5((sb.impl.string += 'mode:' , sb), this.mode), ' | ');
  $append_6($append_4((sb.impl.string += 'hour:' , sb), this.hourValue), ' | ');
  $append_6($append_4((sb.impl.string += 'minute:' , sb), this.minuteValue), ' | ');
  $append_6($append_4((sb.impl.string += 'hindex:' , sb), this.hourIndex), ' | ');
  $append_6($append_4((sb.impl.string += 'mindex:' , sb), this.minuteIndex), ' | ');
  return sb.impl.string;
}

function TimePicker$TimePopupFlexTable$TimePanelState(){
}

_ = TimePicker$TimePopupFlexTable$TimePanelState.prototype = new Object_0;
_.getClass$ = getClass_238;
_.toString$ = toString_18;
_.typeId$ = 0;
_.hourIndex = 0;
_.hourValue = 0;
_.minuteIndex = 0;
_.minuteValue = 0;
_.this$1 = null;
function $clinit_397(){
  $clinit_397 = nullMethod;
  $clinit_342();
}

function $TimeTextBox(this$static){
  $clinit_397();
  $TextBox(this$static);
  this$static.element.maxLength = 10;
  this$static.element.size = 10;
  sinkEvents(this$static.element, (this$static.element.__eventBits || 0) & -126);
  $sinkEvents(this$static, 125);
  return this$static;
}

function getClass_239(){
  return Lcom_gwtincubator_widgets_client_timepicker_TimeTextBox_2_classLit;
}

function propertyChanged_2(source, propertyName, oldValue, newValue){
  !!source && source != null && canCast(source.typeId$, 94) && $setText_2(this, $toString_5(dynamicCast(source, 94)));
}

function TimeTextBox(){
}

_ = TimeTextBox.prototype = new TextBox;
_.getClass$ = getClass_239;
_.propertyChanged = propertyChanged_2;
_.typeId$ = 146;
function getClass_240(){
  return Ljava_lang_ArithmeticException_2_classLit;
}

_ = ArithmeticException.prototype;
_.getClass$ = getClass_240;
function getClass_241(){
  return Ljava_lang_ArrayStoreException_2_classLit;
}

_ = ArrayStoreException.prototype;
_.getClass$ = getClass_241;
function $clinit_402(){
  $clinit_402 = nullMethod;
  $Boolean(new Boolean_0, false);
  $Boolean(new Boolean_0, true);
}

function $Boolean(this$static, value){
  $clinit_402();
  this$static.value_0 = value;
  return this$static;
}

function equals_9(o){
  return o != null && canCast(o.typeId$, 95) && dynamicCast(o, 95).value_0 == this.value_0;
}

function getClass_242(){
  return Ljava_lang_Boolean_2_classLit;
}

function hashCode_11(){
  return this.value_0?1231:1237;
}

function toString_19(){
  return this.value_0?'true':'false';
}

function Boolean_0(){
}

_ = Boolean_0.prototype = new Object_0;
_.equals$ = equals_9;
_.getClass$ = getClass_242;
_.hashCode$ = hashCode_11;
_.toString$ = toString_19;
_.typeId$ = 151;
_.value_0 = false;
function digit(c, radix){
  if (radix < 2 || radix > 36) {
    return -1;
  }
  if (c >= 48 && c < 48 + (radix < 10?radix:10)) {
    return c - 48;
  }
  if (c >= 97 && c < radix + 97 - 10) {
    return c - 97 + 10;
  }
  if (c >= 65 && c < radix + 65 - 10) {
    return c - 65 + 10;
  }
  return -1;
}

function createForClass(packageName, className){
  var clazz;
  clazz = new Class;
  clazz.typeName = packageName + className;
  return clazz;
}

function createForEnum(packageName, className, enumConstantsFunc){
  var clazz;
  clazz = new Class;
  clazz.typeName = packageName + className;
  clazz.modifiers = enumConstantsFunc?8:0;
  return clazz;
}

function getClass_243(){
  return Ljava_lang_Class_2_classLit;
}

function toString_20(){
  return ((this.modifiers & 2) != 0?'interface ':(this.modifiers & 1) != 0?'':'class ') + this.typeName;
}

_ = Class.prototype;
_.getClass$ = getClass_243;
_.toString$ = toString_20;
function getClass_244(){
  return Ljava_lang_ClassCastException_2_classLit;
}

_ = ClassCastException.prototype;
_.getClass$ = getClass_244;
function __parseAndValidateDouble(s){
  var toReturn;
  toReturn = __parseDouble(s);
  if (isNaN(toReturn)) {
    throw $NumberFormatException(new NumberFormatException, 'For input string: "' + s + '"');
  }
  return toReturn;
}

function __parseAndValidateInt(s, radix, lowerBound, upperBound){
  var i, length_0, startIndex, toReturn;
  if (s == null) {
    throw $NumberFormatException(new NumberFormatException, 'null');
  }
  if (radix < 2 || radix > 36) {
    throw $NumberFormatException(new NumberFormatException, 'radix ' + radix + ' out of range');
  }
  length_0 = s.length;
  startIndex = length_0 > 0 && s.charCodeAt(0) == 45?1:0;
  for (i = startIndex; i < length_0; ++i) {
    if (digit(s.charCodeAt(i), radix) == -1) {
      throw $NumberFormatException(new NumberFormatException, 'For input string: "' + s + '"');
    }
  }
  toReturn = parseInt(s, radix);
  if (isNaN(toReturn)) {
    throw $NumberFormatException(new NumberFormatException, 'For input string: "' + s + '"');
  }
   else if (toReturn < lowerBound || toReturn > upperBound) {
    throw $NumberFormatException(new NumberFormatException, 'For input string: "' + s + '"');
  }
  return toReturn;
}

function __parseDouble(str){
  var floatRegex = floatRegex_0;
  !floatRegex && (floatRegex = floatRegex_0 = /^\s*[+-]?\d*\.?\d*([eE][+-]?\d+)?\s*$/i);
  if (floatRegex.test(str)) {
    return parseFloat(str);
  }
   else {
    return Number.NaN;
  }
}

function getClass_245(){
  return Ljava_lang_Number_2_classLit;
}

_ = Number_0.prototype;
_.getClass$ = getClass_245;
var floatRegex_0 = null;
function $Double(this$static, value){
  this$static.value_0 = value;
  return this$static;
}

function equals_10(o){
  return o != null && canCast(o.typeId$, 96) && dynamicCast(o, 96).value_0 == this.value_0;
}

function getClass_246(){
  return Ljava_lang_Double_2_classLit;
}

function hashCode_12(){
  return ~~Math.max(Math.min(this.value_0, 2147483647), -2147483648);
}

function toString_21(){
  return '' + this.value_0;
}

function Double(){
}

_ = Double.prototype = new Number_0;
_.equals$ = equals_10;
_.getClass$ = getClass_246;
_.hashCode$ = hashCode_12;
_.toString$ = toString_21;
_.typeId$ = 154;
_.value_0 = 0;
function getClass_247(){
  return Ljava_lang_IllegalArgumentException_2_classLit;
}

_ = IllegalArgumentException.prototype;
_.getClass$ = getClass_247;
function $IllegalStateException(this$static){
  $fillInStackTrace();
  return this$static;
}

function getClass_248(){
  return Ljava_lang_IllegalStateException_2_classLit;
}

_ = IllegalStateException.prototype;
_.getClass$ = getClass_248;
function $IndexOutOfBoundsException(this$static){
  $fillInStackTrace();
  return this$static;
}

function getClass_249(){
  return Ljava_lang_IndexOutOfBoundsException_2_classLit;
}

_ = IndexOutOfBoundsException.prototype;
_.getClass$ = getClass_249;
function getClass_250(){
  return Ljava_lang_Integer_2_classLit;
}

function toPowerOfTwoString(value, shift){
  var bitMask, buf, bufSize, digits, pos;
  bufSize = ~~(32 / shift);
  bitMask = (1 << shift) - 1;
  buf = initDim(_3C_classLit, 177, -1, bufSize, 1);
  digits = ($clinit_419() , digits_0);
  pos = bufSize - 1;
  if (value >= 0) {
    while (value > bitMask) {
      buf[pos--] = digits[value & bitMask];
      value >>= shift;
    }
  }
   else {
    while (pos > 0) {
      buf[pos--] = digits[value & bitMask];
      value >>= shift;
    }
  }
  buf[pos] = digits[value & bitMask];
  return __valueOf(buf, pos, bufSize);
}

function toString_22(){
  return '' + this.value_0;
}

_ = Integer.prototype;
_.getClass$ = getClass_250;
_.toString$ = toString_22;
function min_0(x, y){
  return x < y?x:y;
}

function $NullPointerException_0(this$static, message){
  $fillInStackTrace();
  this$static.detailMessage = message;
  return this$static;
}

function getClass_251(){
  return Ljava_lang_NullPointerException_2_classLit;
}

_ = NullPointerException.prototype;
_.getClass$ = getClass_251;
function $clinit_419(){
  $clinit_419 = nullMethod;
  digits_0 = initValues(_3C_classLit, 177, -1, [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122]);
}

var digits_0;
function $NumberFormatException(this$static, message){
  $fillInStackTrace();
  this$static.detailMessage = message;
  return this$static;
}

function getClass_252(){
  return Ljava_lang_NumberFormatException_2_classLit;
}

function NumberFormatException(){
}

_ = NumberFormatException.prototype = new IllegalArgumentException;
_.getClass$ = getClass_252;
_.typeId$ = 160;
function getClass_253(){
  return Ljava_lang_StackTraceElement_2_classLit;
}

function toString_23(){
  return this.className_0 + '.' + this.methodName + '(' + this.fileName + ':' + this.lineNumber + ')';
}

_ = StackTraceElement.prototype;
_.getClass$ = getClass_253;
_.toString$ = toString_23;
function $compareToIgnoreCase(this$static, other){
  return compareTo(this$static.toLowerCase(), other.toLowerCase());
}

function $equalsIgnoreCase(this$static, other){
  if (other == null)
    return false;
  return this$static == other || this$static.toLowerCase() == other.toLowerCase();
}

function $replace_0(this$static, from, to){
  var regex, replacement;
  regex = $replaceAll(from, '([/\\\\\\.\\*\\+\\?\\|\\(\\)\\[\\]\\{\\}$^])', '\\\\$1');
  replacement = $replaceAll($replaceAll(to, '\\\\', '\\\\\\\\'), '\\$', '\\\\$');
  return $replaceAll(this$static, regex, replacement);
}

function $replaceAll(this$static, regex, replace){
  replace = __translateReplaceString(replace);
  return this$static.replace(RegExp(regex, 'g'), replace);
}

function $startsWith(this$static, prefix, toffset){
  if (toffset < 0 || toffset >= this$static.length) {
    return false;
  }
   else {
    return this$static.indexOf(prefix, toffset) == toffset;
  }
}

function __translateReplaceString(replaceStr){
  var pos;
  pos = 0;
  while (0 <= (pos = replaceStr.indexOf('\\', pos))) {
    replaceStr.charCodeAt(pos + 1) == 36?(replaceStr = replaceStr.substr(0, pos - 0) + '$' + $substring(replaceStr, ++pos)):(replaceStr = replaceStr.substr(0, pos - 0) + $substring(replaceStr, ++pos));
  }
  return replaceStr;
}

function __valueOf(x, start, end){
  x = x.slice(start, end);
  return String.fromCharCode.apply(null, x);
}

function compareTo(thisStr, otherStr){
  thisStr = String(thisStr);
  if (thisStr == otherStr) {
    return 0;
  }
  return thisStr < otherStr?-1:1;
}

function getClass_254(){
  return Ljava_lang_String_2_classLit;
}

function toString_24(){
  return this;
}

_ = String.prototype;
_.getClass$ = getClass_254;
_.toString$ = toString_24;
function $StringBuffer(this$static){
  this$static.impl = new StringBufferImplAppend;
  return this$static;
}

function $StringBuffer_1(this$static, s){
  this$static.impl = new StringBufferImplAppend;
  this$static.impl.string += s;
  return this$static;
}

function $append_4(this$static, x){
  this$static.impl.string += x;
  return this$static;
}

function $append_5(this$static, x){
  this$static.impl.string += x;
  return this$static;
}

function getClass_255(){
  return Ljava_lang_StringBuffer_2_classLit;
}

function toString_25(){
  return this.impl.string;
}

_ = StringBuffer.prototype;
_.getClass$ = getClass_255;
_.toString$ = toString_25;
function $StringBuilder(this$static){
  this$static.impl = new StringBufferImplAppend;
  return this$static;
}

function $append_7(this$static, x){
  this$static.impl.string += x;
  return this$static;
}

function getClass_256(){
  return Ljava_lang_StringBuilder_2_classLit;
}

function toString_26(){
  return this.impl.string;
}

function StringBuilder(){
}

_ = StringBuilder.prototype = new Object_0;
_.getClass$ = getClass_256;
_.toString$ = toString_26;
_.typeId$ = 163;
function getClass_257(){
  return Ljava_lang_UnsupportedOperationException_2_classLit;
}

_ = UnsupportedOperationException.prototype;
_.getClass$ = getClass_257;
function getClass_258(){
  return Ljava_util_AbstractMap_2_classLit;
}

function toString_27(){
  var comma, entry, iter, s;
  s = '{';
  comma = false;
  for (iter = $AbstractHashMap$EntrySetIterator(new AbstractHashMap$EntrySetIterator, $AbstractHashMap$EntrySet(new AbstractHashMap$EntrySet, dynamicCast(this, 99)).this$0); $hasNext_4(iter.iter);) {
    entry = dynamicCast($next_6(iter.iter), 97);
    comma?(s += ', '):(comma = true);
    s += '' + entry.getKey();
    s += '=';
    s += '' + entry.getValue();
  }
  return s + '}';
}

_ = AbstractMap.prototype;
_.getClass$ = getClass_258;
_.toString$ = toString_27;
function getClass_259(){
  return Ljava_util_AbstractHashMap_2_classLit;
}

_ = AbstractHashMap.prototype;
_.getClass$ = getClass_259;
function getClass_260(){
  return Ljava_util_AbstractHashMap$EntrySet_2_classLit;
}

_ = AbstractHashMap$EntrySet.prototype;
_.getClass$ = getClass_260;
function getClass_261(){
  return Ljava_util_AbstractHashMap$EntrySetIterator_2_classLit;
}

_ = AbstractHashMap$EntrySetIterator.prototype;
_.getClass$ = getClass_261;
function getClass_262(){
  return Ljava_util_AbstractMapEntry_2_classLit;
}

function toString_28(){
  return this.getKey() + '=' + this.getValue();
}

_ = AbstractMapEntry.prototype;
_.getClass$ = getClass_262;
_.toString$ = toString_28;
function getClass_263(){
  return Ljava_util_AbstractHashMap$MapEntryNull_2_classLit;
}

_ = AbstractHashMap$MapEntryNull.prototype;
_.getClass$ = getClass_263;
function getClass_264(){
  return Ljava_util_AbstractHashMap$MapEntryString_2_classLit;
}

_ = AbstractHashMap$MapEntryString.prototype;
_.getClass$ = getClass_264;
function getClass_265(){
  return Ljava_util_AbstractList$IteratorImpl_2_classLit;
}

_ = AbstractList$IteratorImpl.prototype;
_.getClass$ = getClass_265;
function getClass_266(){
  return Ljava_util_AbstractMap$1_2_classLit;
}

_ = AbstractMap$1.prototype;
_.getClass$ = getClass_266;
function getClass_267(){
  return Ljava_util_AbstractMap$1$1_2_classLit;
}

_ = AbstractMap$1$1.prototype;
_.getClass$ = getClass_267;
function getClass_268(){
  return Ljava_util_AbstractMap$2_2_classLit;
}

_ = AbstractMap$2.prototype;
_.getClass$ = getClass_268;
function getClass_269(){
  return Ljava_util_AbstractMap$2$1_2_classLit;
}

_ = AbstractMap$2$1.prototype;
_.getClass$ = getClass_269;
function getClass_270(){
  return Ljava_util_AbstractSequentialList_2_classLit;
}

_ = AbstractSequentialList.prototype;
_.getClass$ = getClass_270;
function $Arrays$ArrayList(this$static, array){
  this$static.array = array;
  return this$static;
}

function contains_5(o){
  return $indexOf(this, o) != -1;
}

function get_4(index){
  return checkIndex(index, this.array.length) , this.array[index];
}

function getClass_271(){
  return Ljava_util_Arrays$ArrayList_2_classLit;
}

function size_5(){
  return this.array.length;
}

function toArray_1(out){
  var i, size;
  size = this.array.length;
  out.length < size && (out = createFrom(out, size));
  for (i = 0; i < size; ++i) {
    setCheck(out, i, this.array[i]);
  }
  out.length > size && setCheck(out, size, null);
  return out;
}

function Arrays$ArrayList(){
}

_ = Arrays$ArrayList.prototype = new AbstractList;
_.contains = contains_5;
_.get = get_4;
_.getClass$ = getClass_271;
_.size_1 = size_5;
_.toArray = toArray_1;
_.typeId$ = 171;
_.array = null;
function getClass_272(){
  return Ljava_util_HashMap_2_classLit;
}

_ = HashMap.prototype;
_.getClass$ = getClass_272;
function getClass_273(){
  return Ljava_util_HashSet_2_classLit;
}

function toString_29(){
  return $toString($keySet_0(this.map));
}

_ = HashSet.prototype;
_.getClass$ = getClass_273;
_.toString$ = toString_29;
function getClass_274(){
  return Ljava_util_LinkedList_2_classLit;
}

_ = LinkedList.prototype;
_.getClass$ = getClass_274;
function getClass_275(){
  return Ljava_util_LinkedList$ListIteratorImpl_2_classLit;
}

_ = LinkedList$ListIteratorImpl.prototype;
_.getClass$ = getClass_275;
function getClass_276(){
  return Ljava_util_LinkedList$Node_2_classLit;
}

_ = LinkedList$Node.prototype;
_.getClass$ = getClass_276;
function getClass_277(){
  return Ljava_util_MapEntryImpl_2_classLit;
}

_ = MapEntryImpl.prototype;
_.getClass$ = getClass_277;
function getClass_278(){
  return Ljava_util_NoSuchElementException_2_classLit;
}

_ = NoSuchElementException.prototype;
_.getClass$ = getClass_278;
var Ljava_lang_Object_2_classLit = createForClass('java.lang.', 'Object'), Lcom_diacon_webclient_client_diary_common_ColumnDefinition_2_classLit = createForClass('com.diacon.webclient.client.diary.common.', 'ColumnDefinition'), Ljava_util_AbstractCollection_2_classLit = createForClass('java.util.', 'AbstractCollection'), Ljava_util_AbstractList_2_classLit = createForClass('java.util.', 'AbstractList'), Ljava_util_ArrayList_2_classLit = createForClass('java.util.', 'ArrayList'), Lcom_diacon_webclient_client_diary_common_DiaryColumnDefinitionsImpl_2_classLit = createForClass('com.diacon.webclient.client.diary.common.', 'DiaryColumnDefinitionsImpl'), Lcom_diacon_webclient_client_diary_common_DiaryColumnDefinitionsImpl$1_2_classLit = createForClass('com.diacon.webclient.client.diary.common.', 'DiaryColumnDefinitionsImpl$1'), Lcom_diacon_webclient_client_diary_common_DiaryColumnDefinitionsImpl$2_2_classLit = createForClass('com.diacon.webclient.client.diary.common.', 'DiaryColumnDefinitionsImpl$2'), Lcom_diacon_webclient_client_diary_common_DiaryColumnDefinitionsImpl$3_2_classLit = createForClass('com.diacon.webclient.client.diary.common.', 'DiaryColumnDefinitionsImpl$3'), Lcom_diacon_webclient_client_diary_common_DiaryColumnDefinitionsImpl$4_2_classLit = createForClass('com.diacon.webclient.client.diary.common.', 'DiaryColumnDefinitionsImpl$4'), Lcom_diacon_webclient_client_diary_common_SelectionModel_2_classLit = createForClass('com.diacon.webclient.client.diary.common.', 'SelectionModel'), Lcom_google_gwt_event_shared_GwtEvent_2_classLit = createForClass('com.google.gwt.event.shared.', 'GwtEvent'), Lcom_diacon_webclient_client_diary_event_ShowCalendarEvent_2_classLit = createForClass('com.diacon.webclient.client.diary.event.', 'ShowCalendarEvent'), Lcom_diacon_webclient_client_diary_presenter_DiaryPresenter_2_classLit = createForClass('com.diacon.webclient.client.diary.presenter.', 'DiaryPresenter'), Lcom_diacon_webclient_client_diary_presenter_DiaryPresenter$1_2_classLit = createForClass('com.diacon.webclient.client.diary.presenter.', 'DiaryPresenter$1'), Lcom_diacon_webclient_client_diary_presenter_DiaryPresenter$2_2_classLit = createForClass('com.diacon.webclient.client.diary.presenter.', 'DiaryPresenter$2'), Lcom_google_gwt_user_client_ui_UIObject_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'UIObject'), Lcom_google_gwt_user_client_ui_Widget_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'Widget'), Lcom_google_gwt_user_client_ui_Composite_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'Composite'), Lcom_diacon_webclient_client_diary_view_DiaryViewImpl_2_classLit = createForClass('com.diacon.webclient.client.diary.view.', 'DiaryViewImpl'), Lcom_diacon_webclient_client_diary_view_DiaryViewImpl$1_2_classLit = createForClass('com.diacon.webclient.client.diary.view.', 'DiaryViewImpl$1'), Lcom_diacon_webclient_client_diary_view_DiaryViewImpl$2_2_classLit = createForClass('com.diacon.webclient.client.diary.view.', 'DiaryViewImpl$2'), Lcom_diacon_webclient_client_diary_view_DiaryViewImpl$3_2_classLit = createForClass('com.diacon.webclient.client.diary.view.', 'DiaryViewImpl$3'), Lcom_google_gwt_user_datepicker_client_DatePicker_2_classLit = createForClass('com.google.gwt.user.datepicker.client.', 'DatePicker'), Lcom_google_gwt_user_client_ui_Label_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'Label'), Lcom_google_gwt_user_client_ui_HTML_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'HTML'), Lcom_google_gwt_user_client_ui_FocusWidget_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'FocusWidget'), Lcom_google_gwt_user_client_ui_ButtonBase_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'ButtonBase'), Lcom_google_gwt_user_client_ui_Button_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'Button'), Lcom_gwtincubator_widgets_client_timepicker_TimePicker_2_classLit = createForClass('com.gwtincubator.widgets.client.timepicker.', 'TimePicker'), Lcom_google_gwt_user_client_ui_ListBox_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'ListBox'), Lcom_google_gwt_user_client_ui_Tree_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'Tree'), Lcom_google_gwt_user_client_ui_TextBoxBase_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'TextBoxBase'), Lcom_google_gwt_user_client_ui_TextBox_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'TextBox'), Lcom_google_gwt_user_client_ui_Panel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'Panel'), Lcom_google_gwt_user_client_ui_SimplePanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'SimplePanel'), Lcom_google_gwt_user_client_ui_DecoratorPanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'DecoratorPanel'), Lcom_diacon_webclient_client_diary_view_DiaryViewImpl_1DiaryViewUiBinderImpl$1_2_classLit = createForClass('com.diacon.webclient.client.diary.view.', 'DiaryViewImpl_DiaryViewUiBinderImpl$1'), Lcom_diacon_webclient_client_diary_view_DiaryViewImpl_1DiaryViewUiBinderImpl$2_2_classLit = createForClass('com.diacon.webclient.client.diary.view.', 'DiaryViewImpl_DiaryViewUiBinderImpl$2'), Lcom_diacon_webclient_client_diary_view_DiaryViewImpl_1DiaryViewUiBinderImpl$3_2_classLit = createForClass('com.diacon.webclient.client.diary.view.', 'DiaryViewImpl_DiaryViewUiBinderImpl$3'), Lcom_diacon_webclient_client_diary_view_DiaryViewImpl_1DiaryViewUiBinderImpl$4_2_classLit = createForClass('com.diacon.webclient.client.diary.view.', 'DiaryViewImpl_DiaryViewUiBinderImpl$4'), Lcom_diacon_webclient_client_diary_view_DiaryViewImpl_1DiaryViewUiBinderImpl$5_2_classLit = createForClass('com.diacon.webclient.client.diary.view.', 'DiaryViewImpl_DiaryViewUiBinderImpl$5'), Lcom_diacon_webclient_client_diary_view_DiaryViewImpl_1DiaryViewUiBinderImpl$6_2_classLit = createForClass('com.diacon.webclient.client.diary.view.', 'DiaryViewImpl_DiaryViewUiBinderImpl$6'), Lcom_diacon_webclient_client_diary_view_com_1diacon_1webclient_1client_1diary_1view_1DiaryViewImpl_1DiaryViewUiBinderImpl_1GenBundle_1default_1InlineClientBundleGenerator$1_2_classLit = createForClass('com.diacon.webclient.client.diary.view.', 'com_diacon_webclient_client_diary_view_DiaryViewImpl_DiaryViewUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$1'), Lcom_diacon_webclient_client_AppController_2_classLit = createForClass('com.diacon.webclient.client.', 'AppController'), Lcom_diacon_webclient_client_AppController$1_2_classLit = createForClass('com.diacon.webclient.client.', 'AppController$1'), Lcom_diacon_webclient_client_AppController$2_2_classLit = createForClass('com.diacon.webclient.client.', 'AppController$2'), Lcom_diacon_webclient_client_AppController$3_2_classLit = createForClass('com.diacon.webclient.client.', 'AppController$3'), Ljava_lang_String_2_classLit = createForClass('java.lang.', 'String'), Lcom_diacon_webclient_request_RequestBuilder_2_classLit = createForClass('com.diacon.webclient.request.', 'RequestBuilder'), Ljava_lang_Enum_2_classLit = createForClass('java.lang.', 'Enum'), Lcom_diacon_webclient_shared_diary_DayTime_2_classLit = createForEnum('com.diacon.webclient.shared.diary.', 'DayTime', values_0), _3Lcom_diacon_webclient_shared_diary_DayTime_2_classLit = createForArray('[Lcom.diacon.webclient.shared.diary.', 'DayTime;'), Lcom_diacon_webclient_shared_diary_DiaryData_2_classLit = createForClass('com.diacon.webclient.shared.diary.', 'DiaryData'), Lcom_diacon_webclient_shared_diary_DiaryDataFood_2_classLit = createForClass('com.diacon.webclient.shared.diary.', 'DiaryDataFood'), Lcom_diacon_webclient_shared_diary_DiaryDataMeasure_2_classLit = createForClass('com.diacon.webclient.shared.diary.', 'DiaryDataMeasure'), Lcom_diacon_webclient_shared_diary_DiaryDataMedication_2_classLit = createForClass('com.diacon.webclient.shared.diary.', 'DiaryDataMedication'), Lcom_diacon_webclient_shared_diary_DiaryEntry_2_classLit = createForClass('com.diacon.webclient.shared.diary.', 'DiaryEntry'), Lcom_diacon_webclient_shared_diary_EntryType_2_classLit = createForEnum('com.diacon.webclient.shared.diary.', 'EntryType', values_1), _3Lcom_diacon_webclient_shared_diary_EntryType_2_classLit = createForArray('[Lcom.diacon.webclient.shared.diary.', 'EntryType;'), Lcom_diacon_webclient_shared_diary_FoodTime_2_classLit = createForEnum('com.diacon.webclient.shared.diary.', 'FoodTime', values_2), _3Lcom_diacon_webclient_shared_diary_FoodTime_2_classLit = createForArray('[Lcom.diacon.webclient.shared.diary.', 'FoodTime;'), Lcom_google_gwt_animation_client_Animation_2_classLit = createForClass('com.google.gwt.animation.client.', 'Animation'), _3Lcom_google_gwt_animation_client_Animation_2_classLit = createForArray('[Lcom.google.gwt.animation.client.', 'Animation;'), Lcom_google_gwt_user_client_Timer_2_classLit = createForClass('com.google.gwt.user.client.', 'Timer'), Lcom_google_gwt_animation_client_Animation$1_2_classLit = createForClass('com.google.gwt.animation.client.', 'Animation$1'), Lcom_google_gwt_core_client_impl_AsyncFragmentLoader_2_classLit = createForClass('com.google.gwt.core.client.impl.', 'AsyncFragmentLoader'), Lcom_google_gwt_core_client_impl_AsyncFragmentLoader$BoundedIntQueue_2_classLit = createForClass('com.google.gwt.core.client.impl.', 'AsyncFragmentLoader$BoundedIntQueue'), Ljava_lang_Throwable_2_classLit = createForClass('java.lang.', 'Throwable'), Ljava_lang_Exception_2_classLit = createForClass('java.lang.', 'Exception'), Ljava_lang_RuntimeException_2_classLit = createForClass('java.lang.', 'RuntimeException'), Lcom_google_gwt_core_client_impl_AsyncFragmentLoader$HttpDownloadFailure_2_classLit = createForClass('com.google.gwt.core.client.impl.', 'AsyncFragmentLoader$HttpDownloadFailure'), Lcom_google_gwt_core_client_impl_AsyncFragmentLoader$InitialFragmentDownloadFailed_2_classLit = createForClass('com.google.gwt.core.client.impl.', 'AsyncFragmentLoader$InitialFragmentDownloadFailed'), Lcom_google_gwt_core_client_impl_AsyncFragmentLoader$XhrLoadingStrategy$1_2_classLit = createForClass('com.google.gwt.core.client.impl.', 'AsyncFragmentLoader$XhrLoadingStrategy$1'), Lcom_google_gwt_core_client_Scheduler_2_classLit = createForClass('com.google.gwt.core.client.', 'Scheduler'), Lcom_google_gwt_core_client_impl_SchedulerImpl_2_classLit = createForClass('com.google.gwt.core.client.impl.', 'SchedulerImpl'), Lcom_google_gwt_core_client_impl_SchedulerImpl$1_2_classLit = createForClass('com.google.gwt.core.client.impl.', 'SchedulerImpl$1'), Lcom_google_gwt_core_client_impl_SchedulerImpl$2_2_classLit = createForClass('com.google.gwt.core.client.impl.', 'SchedulerImpl$2'), Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2_classLit = createForClass('com.google.gwt.core.client.impl.', 'StackTraceCreator$Collector'), Ljava_lang_StackTraceElement_2_classLit = createForClass('java.lang.', 'StackTraceElement'), Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorMoz_2_classLit = createForClass('com.google.gwt.core.client.impl.', 'StackTraceCreator$CollectorMoz'), Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorChrome_2_classLit = createForClass('com.google.gwt.core.client.impl.', 'StackTraceCreator$CollectorChrome'), Lcom_google_gwt_core_client_impl_StringBufferImpl_2_classLit = createForClass('com.google.gwt.core.client.impl.', 'StringBufferImpl'), Lcom_google_gwt_core_client_impl_StringBufferImplAppend_2_classLit = createForClass('com.google.gwt.core.client.impl.', 'StringBufferImplAppend'), Lcom_google_gwt_core_client_JavaScriptException_2_classLit = createForClass('com.google.gwt.core.client.', 'JavaScriptException'), Lcom_google_gwt_core_client_JavaScriptObject_2_classLit = createForClass('com.google.gwt.core.client.', 'JavaScriptObject$'), Lcom_google_gwt_dom_client_DOMImpl_2_classLit = createForClass('com.google.gwt.dom.client.', 'DOMImpl'), Lcom_google_gwt_dom_client_DOMImplStandard_2_classLit = createForClass('com.google.gwt.dom.client.', 'DOMImplStandard'), Lcom_google_gwt_dom_client_DOMImplSafari_2_classLit = createForClass('com.google.gwt.dom.client.', 'DOMImplSafari'), Lcom_google_gwt_dom_client_Style$Unit_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Unit', values_4), _3Lcom_google_gwt_dom_client_Style$Unit_2_classLit = createForArray('[Lcom.google.gwt.dom.client.', 'Style$Unit;'), Lcom_google_gwt_dom_client_Style$Unit$1_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Unit$1', null), Lcom_google_gwt_dom_client_Style$Unit$2_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Unit$2', null), Lcom_google_gwt_dom_client_Style$Unit$3_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Unit$3', null), Lcom_google_gwt_dom_client_Style$Unit$4_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Unit$4', null), Lcom_google_gwt_dom_client_Style$Unit$5_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Unit$5', null), Lcom_google_gwt_dom_client_Style$Unit$6_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Unit$6', null), Lcom_google_gwt_dom_client_Style$Unit$7_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Unit$7', null), Lcom_google_gwt_dom_client_Style$Unit$8_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Unit$8', null), Lcom_google_gwt_dom_client_Style$Unit$9_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Unit$9', null), Lcom_google_gwt_dom_client_Style$Display_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Display', values_3), _3Lcom_google_gwt_dom_client_Style$Display_2_classLit = createForArray('[Lcom.google.gwt.dom.client.', 'Style$Display;'), Lcom_google_gwt_dom_client_Style$Display$1_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Display$1', null), Lcom_google_gwt_dom_client_Style$Display$2_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Display$2', null), Lcom_google_gwt_dom_client_Style$Display$3_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Display$3', null), Lcom_google_gwt_dom_client_Style$Display$4_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Display$4', null), Lcom_google_gwt_dom_client_StyleInjector$StyleInjectorImpl_2_classLit = createForClass('com.google.gwt.dom.client.', 'StyleInjector$StyleInjectorImpl'), Lcom_google_gwt_dom_client_StyleInjector$1_2_classLit = createForClass('com.google.gwt.dom.client.', 'StyleInjector$1'), Lcom_google_gwt_event_dom_client_DomEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'DomEvent'), Lcom_google_gwt_event_dom_client_ChangeEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'ChangeEvent'), Lcom_google_gwt_event_dom_client_ClickEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'ClickEvent'), Lcom_google_gwt_event_shared_GwtEvent$Type_2_classLit = createForClass('com.google.gwt.event.shared.', 'GwtEvent$Type'), Lcom_google_gwt_event_dom_client_DomEvent$Type_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'DomEvent$Type'), Lcom_google_gwt_event_dom_client_FocusEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'FocusEvent'), Lcom_google_gwt_event_dom_client_KeyEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'KeyEvent'), Lcom_google_gwt_event_dom_client_KeyPressEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'KeyPressEvent'), Lcom_google_gwt_event_dom_client_MouseEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'MouseEvent'), Lcom_google_gwt_event_dom_client_MouseOutEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'MouseOutEvent'), Lcom_google_gwt_event_dom_client_MouseOverEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'MouseOverEvent'), Lcom_google_gwt_event_dom_client_MouseUpEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'MouseUpEvent'), Lcom_google_gwt_event_dom_client_PrivateMap_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'PrivateMap'), Lcom_google_gwt_event_logical_shared_CloseEvent_2_classLit = createForClass('com.google.gwt.event.logical.shared.', 'CloseEvent'), Lcom_google_gwt_event_logical_shared_HighlightEvent_2_classLit = createForClass('com.google.gwt.event.logical.shared.', 'HighlightEvent'), Lcom_google_gwt_event_logical_shared_ResizeEvent_2_classLit = createForClass('com.google.gwt.event.logical.shared.', 'ResizeEvent'), Lcom_google_gwt_event_logical_shared_SelectionEvent_2_classLit = createForClass('com.google.gwt.event.logical.shared.', 'SelectionEvent'), Lcom_google_gwt_event_logical_shared_ValueChangeEvent_2_classLit = createForClass('com.google.gwt.event.logical.shared.', 'ValueChangeEvent'), Lcom_google_gwt_event_shared_DefaultHandlerRegistration_2_classLit = createForClass('com.google.gwt.event.shared.', 'DefaultHandlerRegistration'), Lcom_google_gwt_event_shared_HandlerManager_2_classLit = createForClass('com.google.gwt.event.shared.', 'HandlerManager'), Lcom_google_gwt_event_shared_HandlerManager$HandlerRegistry_2_classLit = createForClass('com.google.gwt.event.shared.', 'HandlerManager$HandlerRegistry'), Lcom_google_gwt_event_shared_HandlerManager$1_2_classLit = createForClass('com.google.gwt.event.shared.', 'HandlerManager$1'), Lcom_google_gwt_event_shared_HandlerManager$2_2_classLit = createForClass('com.google.gwt.event.shared.', 'HandlerManager$2'), Lcom_google_gwt_i18n_client_constants_DateTimeConstantsImpl_1_2_classLit = createForClass('com.google.gwt.i18n.client.constants.', 'DateTimeConstantsImpl_'), Ljava_util_Date_2_classLit = createForClass('java.util.', 'Date'), Lcom_google_gwt_i18n_client_impl_DateRecord_2_classLit = createForClass('com.google.gwt.i18n.client.impl.', 'DateRecord'), Lcom_google_gwt_i18n_client_DateTimeFormat_2_classLit = createForClass('com.google.gwt.i18n.client.', 'DateTimeFormat'), Lcom_google_gwt_i18n_client_DateTimeFormat$PatternPart_2_classLit = createForClass('com.google.gwt.i18n.client.', 'DateTimeFormat$PatternPart'), Lcom_google_gwt_i18n_client_LocaleInfo_2_classLit = createForClass('com.google.gwt.i18n.client.', 'LocaleInfo'), Lcom_google_gwt_i18n_client_TimeZone_2_classLit = createForClass('com.google.gwt.i18n.client.', 'TimeZone'), Lcom_google_gwt_json_client_JSONValue_2_classLit = createForClass('com.google.gwt.json.client.', 'JSONValue'), Lcom_google_gwt_json_client_JSONArray_2_classLit = createForClass('com.google.gwt.json.client.', 'JSONArray'), Lcom_google_gwt_json_client_JSONBoolean_2_classLit = createForClass('com.google.gwt.json.client.', 'JSONBoolean'), Lcom_google_gwt_json_client_JSONException_2_classLit = createForClass('com.google.gwt.json.client.', 'JSONException'), Lcom_google_gwt_json_client_JSONNull_2_classLit = createForClass('com.google.gwt.json.client.', 'JSONNull'), Lcom_google_gwt_json_client_JSONNumber_2_classLit = createForClass('com.google.gwt.json.client.', 'JSONNumber'), Lcom_google_gwt_json_client_JSONObject_2_classLit = createForClass('com.google.gwt.json.client.', 'JSONObject'), Ljava_util_AbstractSet_2_classLit = createForClass('java.util.', 'AbstractSet'), Lcom_google_gwt_json_client_JSONObject$1_2_classLit = createForClass('com.google.gwt.json.client.', 'JSONObject$1'), Lcom_google_gwt_json_client_JSONString_2_classLit = createForClass('com.google.gwt.json.client.', 'JSONString'), Lcom_google_gwt_lang_asyncloaders_AsyncLoader1_1_1Super_2_classLit = createForClass('com.google.gwt.lang.asyncloaders.', 'AsyncLoader1__Super'), Lcom_google_gwt_lang_asyncloaders_AsyncLoader1_2_classLit = createForClass('com.google.gwt.lang.asyncloaders.', 'AsyncLoader1'), Lcom_google_gwt_lang_asyncloaders_AsyncLoader1$1_2_classLit = createForClass('com.google.gwt.lang.asyncloaders.', 'AsyncLoader1$1'), Lcom_google_gwt_lang_asyncloaders_AsyncLoader1_1_1Callback_2_classLit = createForClass('com.google.gwt.lang.asyncloaders.', 'AsyncLoader1__Callback'), Lcom_google_gwt_resources_client_impl_ImageResourcePrototype_2_classLit = createForClass('com.google.gwt.resources.client.impl.', 'ImageResourcePrototype'), Lcom_google_gwt_uibinder_client_UiBinderUtil$TempAttachment_2_classLit = createForClass('com.google.gwt.uibinder.client.', 'UiBinderUtil$TempAttachment'), Lcom_google_gwt_user_client_impl_ElementMapperImpl_2_classLit = createForClass('com.google.gwt.user.client.impl.', 'ElementMapperImpl'), Lcom_google_gwt_user_client_impl_ElementMapperImpl$FreeNode_2_classLit = createForClass('com.google.gwt.user.client.impl.', 'ElementMapperImpl$FreeNode'), Lcom_google_gwt_user_client_impl_HistoryImpl_2_classLit = createForClass('com.google.gwt.user.client.impl.', 'HistoryImpl'), Lcom_google_gwt_user_client_impl_HistoryImplTimer_2_classLit = createForClass('com.google.gwt.user.client.impl.', 'HistoryImplTimer'), Lcom_google_gwt_user_client_impl_HistoryImplSafari_2_classLit = createForClass('com.google.gwt.user.client.impl.', 'HistoryImplSafari'), Lcom_google_gwt_user_client_ui_AbstractImagePrototype_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'AbstractImagePrototype'), Lcom_google_gwt_user_client_ui_impl_ClippedImagePrototype_2_classLit = createForClass('com.google.gwt.user.client.ui.impl.', 'ClippedImagePrototype'), Lcom_google_gwt_user_client_ui_impl_FocusImpl_2_classLit = createForClass('com.google.gwt.user.client.ui.impl.', 'FocusImpl'), Lcom_google_gwt_user_client_ui_impl_FocusImplStandard_2_classLit = createForClass('com.google.gwt.user.client.ui.impl.', 'FocusImplStandard'), Lcom_google_gwt_user_client_ui_impl_FocusImplSafari_2_classLit = createForClass('com.google.gwt.user.client.ui.impl.', 'FocusImplSafari'), Lcom_google_gwt_user_client_ui_ComplexPanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'ComplexPanel'), Lcom_google_gwt_user_client_ui_AbsolutePanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'AbsolutePanel'), Lcom_google_gwt_user_client_ui_AttachDetachException_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'AttachDetachException'), Lcom_google_gwt_user_client_ui_AttachDetachException$1_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'AttachDetachException$1'), Lcom_google_gwt_user_client_ui_AttachDetachException$2_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'AttachDetachException$2'), Lcom_google_gwt_user_client_ui_CellPanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'CellPanel'), Lcom_google_gwt_user_client_ui_CustomButton_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'CustomButton'), Lcom_google_gwt_user_client_ui_CustomButton$Face_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'CustomButton$Face'), Lcom_google_gwt_user_client_ui_CustomButton$2_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'CustomButton$2'), Lcom_google_gwt_user_client_ui_PopupPanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'PopupPanel'), Lcom_google_gwt_user_client_ui_HTMLTable_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'HTMLTable'), Lcom_google_gwt_user_client_ui_FlexTable_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'FlexTable'), Lcom_google_gwt_user_client_ui_HTMLTable$CellFormatter_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'HTMLTable$CellFormatter'), Lcom_google_gwt_user_client_ui_FlexTable$FlexCellFormatter_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'FlexTable$FlexCellFormatter'), Lcom_google_gwt_user_client_ui_Grid_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'Grid'), Lcom_google_gwt_user_client_ui_HTMLPanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'HTMLPanel'), Lcom_google_gwt_user_client_ui_HTMLTable$ColumnFormatter_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'HTMLTable$ColumnFormatter'), Lcom_google_gwt_user_client_ui_HTMLTable$1_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'HTMLTable$1'), Lcom_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'HasHorizontalAlignment$HorizontalAlignmentConstant'), Lcom_google_gwt_user_client_ui_HasVerticalAlignment$VerticalAlignmentConstant_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'HasVerticalAlignment$VerticalAlignmentConstant'), Lcom_google_gwt_user_client_ui_HorizontalPanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'HorizontalPanel'), Lcom_google_gwt_user_client_ui_Image_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'Image'), Lcom_google_gwt_user_client_ui_Image$State_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'Image$State'), Lcom_google_gwt_user_client_ui_Image$ClippedState_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'Image$ClippedState'), Lcom_google_gwt_user_client_ui_PopupPanel$AnimationType_2_classLit = createForEnum('com.google.gwt.user.client.ui.', 'PopupPanel$AnimationType', values_5), _3Lcom_google_gwt_user_client_ui_PopupPanel$AnimationType_2_classLit = createForArray('[Lcom.google.gwt.user.client.ui.', 'PopupPanel$AnimationType;'), Lcom_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'PopupPanel$ResizeAnimation'), Lcom_google_gwt_user_client_ui_PopupPanel$ResizeAnimation$1_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'PopupPanel$ResizeAnimation$1'), Lcom_google_gwt_user_client_ui_PopupPanel$1_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'PopupPanel$1'), Lcom_google_gwt_user_client_ui_PopupPanel$3_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'PopupPanel$3'), Lcom_google_gwt_user_client_ui_PopupPanel$4_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'PopupPanel$4'), Lcom_google_gwt_user_client_ui_PushButton_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'PushButton'), Lcom_google_gwt_user_client_ui_RootPanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'RootPanel'), Lcom_google_gwt_user_client_ui_RootPanel$DefaultRootPanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'RootPanel$DefaultRootPanel'), Lcom_google_gwt_user_client_ui_RootPanel$1_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'RootPanel$1'), Lcom_google_gwt_user_client_ui_RootPanel$2_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'RootPanel$2'), Lcom_google_gwt_user_client_ui_SimplePanel$1_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'SimplePanel$1'), Lcom_google_gwt_user_client_ui_Tree$ImageAdapter_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'Tree$ImageAdapter'), Lcom_google_gwt_user_client_ui_TreeItem_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'TreeItem'), Lcom_google_gwt_user_client_ui_Tree$1_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'Tree$1'), Lcom_google_gwt_user_client_ui_TreeItem$TreeItemAnimation_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'TreeItem$TreeItemAnimation'), Lcom_google_gwt_user_client_ui_VerticalPanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'VerticalPanel'), Lcom_google_gwt_user_client_ui_WidgetCollection_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'WidgetCollection'), Lcom_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'WidgetCollection$WidgetIterator'), Lcom_google_gwt_user_client_ui_WidgetIterators$1_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'WidgetIterators$1'), Lcom_google_gwt_user_client_CommandCanceledException_2_classLit = createForClass('com.google.gwt.user.client.', 'CommandCanceledException'), Lcom_google_gwt_user_client_CommandExecutor_2_classLit = createForClass('com.google.gwt.user.client.', 'CommandExecutor'), Lcom_google_gwt_user_client_CommandExecutor$CircularIterator_2_classLit = createForClass('com.google.gwt.user.client.', 'CommandExecutor$CircularIterator'), Lcom_google_gwt_user_client_CommandExecutor$1_2_classLit = createForClass('com.google.gwt.user.client.', 'CommandExecutor$1'), Lcom_google_gwt_user_client_CommandExecutor$2_2_classLit = createForClass('com.google.gwt.user.client.', 'CommandExecutor$2'), Lcom_google_gwt_user_client_Event$NativePreviewEvent_2_classLit = createForClass('com.google.gwt.user.client.', 'Event$NativePreviewEvent'), Lcom_google_gwt_user_client_Timer$1_2_classLit = createForClass('com.google.gwt.user.client.', 'Timer$1'), Lcom_google_gwt_user_client_Window$ClosingEvent_2_classLit = createForClass('com.google.gwt.user.client.', 'Window$ClosingEvent'), Lcom_google_gwt_user_client_Window$WindowHandlers_2_classLit = createForClass('com.google.gwt.user.client.', 'Window$WindowHandlers'), Lcom_google_gwt_user_datepicker_client_CalendarModel_2_classLit = createForClass('com.google.gwt.user.datepicker.client.', 'CalendarModel'), Lcom_google_gwt_user_datepicker_client_DatePickerComponent_2_classLit = createForClass('com.google.gwt.user.datepicker.client.', 'DatePickerComponent'), Lcom_google_gwt_user_datepicker_client_CalendarView_2_classLit = createForClass('com.google.gwt.user.datepicker.client.', 'CalendarView'), Lcom_google_gwt_user_datepicker_client_CellGridImpl_2_classLit = createForClass('com.google.gwt.user.datepicker.client.', 'CellGridImpl'), Lcom_google_gwt_user_datepicker_client_CellGridImpl$Cell_2_classLit = createForClass('com.google.gwt.user.datepicker.client.', 'CellGridImpl$Cell'), Lcom_google_gwt_user_datepicker_client_DateChangeEvent_2_classLit = createForClass('com.google.gwt.user.datepicker.client.', 'DateChangeEvent'), Lcom_google_gwt_user_datepicker_client_DatePicker$StandardCss_2_classLit = createForClass('com.google.gwt.user.datepicker.client.', 'DatePicker$StandardCss'), Lcom_google_gwt_user_datepicker_client_DatePicker$DateHighlightEvent_2_classLit = createForClass('com.google.gwt.user.datepicker.client.', 'DatePicker$DateHighlightEvent'), Lcom_google_gwt_user_datepicker_client_DatePicker$DateStyler_2_classLit = createForClass('com.google.gwt.user.datepicker.client.', 'DatePicker$DateStyler'), Lcom_google_gwt_user_datepicker_client_DefaultCalendarView_2_classLit = createForClass('com.google.gwt.user.datepicker.client.', 'DefaultCalendarView'), Lcom_google_gwt_user_datepicker_client_DefaultCalendarView$CellGrid_2_classLit = createForClass('com.google.gwt.user.datepicker.client.', 'DefaultCalendarView$CellGrid'), Lcom_google_gwt_user_datepicker_client_DefaultCalendarView$CellGrid$DateCell_2_classLit = createForClass('com.google.gwt.user.datepicker.client.', 'DefaultCalendarView$CellGrid$DateCell'), Lcom_google_gwt_user_datepicker_client_MonthSelector_2_classLit = createForClass('com.google.gwt.user.datepicker.client.', 'MonthSelector'), Lcom_google_gwt_user_datepicker_client_DefaultMonthSelector_2_classLit = createForClass('com.google.gwt.user.datepicker.client.', 'DefaultMonthSelector'), Lcom_google_gwt_user_datepicker_client_DefaultMonthSelector$1_2_classLit = createForClass('com.google.gwt.user.datepicker.client.', 'DefaultMonthSelector$1'), Lcom_google_gwt_user_datepicker_client_DefaultMonthSelector$2_2_classLit = createForClass('com.google.gwt.user.datepicker.client.', 'DefaultMonthSelector$2'), Lcom_gwtincubator_widgets_client_button_SensitiveButton_2_classLit = createForClass('com.gwtincubator.widgets.client.button.', 'SensitiveButton'), Lcom_gwtincubator_widgets_client_button_TimeButton_2_classLit = createForClass('com.gwtincubator.widgets.client.button.', 'TimeButton'), Lcom_gwtincubator_widgets_client_event_PropertyChangeListenerCollection_2_classLit = createForClass('com.gwtincubator.widgets.client.event.', 'PropertyChangeListenerCollection'), Lcom_gwtincubator_widgets_client_label_WidgetLabel_2_classLit = createForClass('com.gwtincubator.widgets.client.label.', 'WidgetLabel'), Lcom_gwtincubator_widgets_client_timepicker_TimeMode_2_classLit = createForEnum('com.gwtincubator.widgets.client.timepicker.', 'TimeMode', values_6), _3Lcom_gwtincubator_widgets_client_timepicker_TimeMode_2_classLit = createForArray('[Lcom.gwtincubator.widgets.client.timepicker.', 'TimeMode;'), Lcom_gwtincubator_widgets_client_timepicker_TimeModel_2_classLit = createForClass('com.gwtincubator.widgets.client.timepicker.', 'TimeModel'), Lcom_gwtincubator_widgets_client_timepicker_TimePicker$TextFieldFocusListener_2_classLit = createForClass('com.gwtincubator.widgets.client.timepicker.', 'TimePicker$TextFieldFocusListener'), _3Lcom_gwtincubator_widgets_client_button_TimeButton_2_classLit = createForArray('[Lcom.gwtincubator.widgets.client.button.', 'TimeButton;'), Lcom_gwtincubator_widgets_client_timepicker_TimePicker$TimePopupFlexTable_2_classLit = createForClass('com.gwtincubator.widgets.client.timepicker.', 'TimePicker$TimePopupFlexTable'), Lcom_gwtincubator_widgets_client_timepicker_TimePicker$TimePopupFlexTable$ModeMouseListener_2_classLit = createForClass('com.gwtincubator.widgets.client.timepicker.', 'TimePicker$TimePopupFlexTable$ModeMouseListener'), Lcom_gwtincubator_widgets_client_timepicker_TimePicker$TimePopupFlexTable$HourMouseListener_2_classLit = createForClass('com.gwtincubator.widgets.client.timepicker.', 'TimePicker$TimePopupFlexTable$HourMouseListener'), Lcom_gwtincubator_widgets_client_timepicker_TimePicker$TimePopupFlexTable$MinuteMouseListener_2_classLit = createForClass('com.gwtincubator.widgets.client.timepicker.', 'TimePicker$TimePopupFlexTable$MinuteMouseListener'), Lcom_gwtincubator_widgets_client_timepicker_TimePicker$TimePopupFlexTable$TimePanelState_2_classLit = createForClass('com.gwtincubator.widgets.client.timepicker.', 'TimePicker$TimePopupFlexTable$TimePanelState'), Lcom_gwtincubator_widgets_client_timepicker_TimePicker$1_2_classLit = createForClass('com.gwtincubator.widgets.client.timepicker.', 'TimePicker$1'), Lcom_gwtincubator_widgets_client_timepicker_TimeTextBox_2_classLit = createForClass('com.gwtincubator.widgets.client.timepicker.', 'TimeTextBox'), Ljava_lang_ArithmeticException_2_classLit = createForClass('java.lang.', 'ArithmeticException'), Ljava_lang_IndexOutOfBoundsException_2_classLit = createForClass('java.lang.', 'IndexOutOfBoundsException'), Ljava_lang_ArrayStoreException_2_classLit = createForClass('java.lang.', 'ArrayStoreException'), Ljava_lang_Boolean_2_classLit = createForClass('java.lang.', 'Boolean'), Ljava_lang_Number_2_classLit = createForClass('java.lang.', 'Number'), Ljava_lang_Class_2_classLit = createForClass('java.lang.', 'Class'), Ljava_lang_ClassCastException_2_classLit = createForClass('java.lang.', 'ClassCastException'), Ljava_lang_Double_2_classLit = createForClass('java.lang.', 'Double'), Ljava_lang_IllegalArgumentException_2_classLit = createForClass('java.lang.', 'IllegalArgumentException'), Ljava_lang_IllegalStateException_2_classLit = createForClass('java.lang.', 'IllegalStateException'), Ljava_lang_Integer_2_classLit = createForClass('java.lang.', 'Integer'), Ljava_lang_NullPointerException_2_classLit = createForClass('java.lang.', 'NullPointerException'), Ljava_lang_NumberFormatException_2_classLit = createForClass('java.lang.', 'NumberFormatException'), Ljava_lang_StringBuffer_2_classLit = createForClass('java.lang.', 'StringBuffer'), Ljava_lang_StringBuilder_2_classLit = createForClass('java.lang.', 'StringBuilder'), Ljava_lang_UnsupportedOperationException_2_classLit = createForClass('java.lang.', 'UnsupportedOperationException'), Ljava_util_AbstractMap_2_classLit = createForClass('java.util.', 'AbstractMap'), Ljava_util_AbstractHashMap_2_classLit = createForClass('java.util.', 'AbstractHashMap'), Ljava_util_AbstractHashMap$EntrySet_2_classLit = createForClass('java.util.', 'AbstractHashMap$EntrySet'), Ljava_util_AbstractHashMap$EntrySetIterator_2_classLit = createForClass('java.util.', 'AbstractHashMap$EntrySetIterator'), Ljava_util_AbstractMapEntry_2_classLit = createForClass('java.util.', 'AbstractMapEntry'), Ljava_util_AbstractHashMap$MapEntryNull_2_classLit = createForClass('java.util.', 'AbstractHashMap$MapEntryNull'), Ljava_util_AbstractHashMap$MapEntryString_2_classLit = createForClass('java.util.', 'AbstractHashMap$MapEntryString'), Ljava_util_AbstractList$IteratorImpl_2_classLit = createForClass('java.util.', 'AbstractList$IteratorImpl'), Ljava_util_AbstractMap$1_2_classLit = createForClass('java.util.', 'AbstractMap$1'), Ljava_util_AbstractMap$1$1_2_classLit = createForClass('java.util.', 'AbstractMap$1$1'), Ljava_util_AbstractMap$2_2_classLit = createForClass('java.util.', 'AbstractMap$2'), Ljava_util_AbstractMap$2$1_2_classLit = createForClass('java.util.', 'AbstractMap$2$1'), Ljava_util_AbstractSequentialList_2_classLit = createForClass('java.util.', 'AbstractSequentialList'), Ljava_util_Arrays$ArrayList_2_classLit = createForClass('java.util.', 'Arrays$ArrayList'), Ljava_util_HashMap_2_classLit = createForClass('java.util.', 'HashMap'), Ljava_util_HashSet_2_classLit = createForClass('java.util.', 'HashSet'), Ljava_util_LinkedList_2_classLit = createForClass('java.util.', 'LinkedList'), Ljava_util_LinkedList$ListIteratorImpl_2_classLit = createForClass('java.util.', 'LinkedList$ListIteratorImpl'), Ljava_util_LinkedList$Node_2_classLit = createForClass('java.util.', 'LinkedList$Node'), Ljava_util_MapEntryImpl_2_classLit = createForClass('java.util.', 'MapEntryImpl'), Ljava_util_NoSuchElementException_2_classLit = createForClass('java.util.', 'NoSuchElementException');
onLoad_0();
