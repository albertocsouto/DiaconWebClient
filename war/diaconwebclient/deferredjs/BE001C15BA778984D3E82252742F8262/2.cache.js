function $fragmentHasLoaded(this$static, fragment){
  var logGroup;
  logGroup = fragment == this$static.numEntries?'leftoversDownload':'download' + fragment;
  $logEventProgress_0(logGroup, 'end', valueOf_3(fragment), null);
  if ($isInitial(this$static, fragment)) {
    $remove_1(this$static.remainingInitialFragments);
    $remove_12(this$static.initialFragmentErrorHandlers, valueOf_3(fragment));
    $startLoadingNextInitial(this$static);
  }
}

function $leftoversFragmentHasLoaded(this$static){
  $fragmentHasLoaded(this$static, this$static.numEntries);
}

function browserLoaderLeftoversFragmentHasLoaded(){
  $leftoversFragmentHasLoaded(BROWSER_LOADER);
}

function SimplePanel(){
}

_ = SimplePanel.prototype = new Panel;
_.typeId$ = 98;
_.widget = null;
function $remove_12(this$static, key){
  return key == null?$removeNullSlot(this$static):key != null && canCast(key.typeId$, 1)?$removeStringValue(this$static, dynamicCast(key, 1)):$removeHashValue(this$static, key, ~~hashCode__devirtual$(key));
}

function $removeHashValue(this$static, key, hashCode){
  var array = this$static.hashCodeMap[hashCode];
  if (array) {
    for (var i = 0, c = array.length; i < c; ++i) {
      var entry = array[i];
      var entryKey = entry.getKey();
      if (this$static.equalsBridge(key, entryKey)) {
        array.length == 1?delete this$static.hashCodeMap[hashCode]:array.splice(i, 1);
        --this$static.size_0;
        return entry.getValue();
      }
    }
  }
  return null;
}

function $removeNullSlot(this$static){
  var result;
  result = this$static.nullSlot;
  this$static.nullSlot = null;
  if (this$static.nullSlotLive) {
    this$static.nullSlotLive = false;
    --this$static.size_0;
  }
  return result;
}

function $removeStringValue(this$static, key){
  var result, stringMap = this$static.stringMap;
  key = ':' + key;
  if (key in stringMap) {
    result = stringMap[key];
    --this$static.size_0;
    delete stringMap[key];
  }
  return result;
}

browserLoaderLeftoversFragmentHasLoaded();
