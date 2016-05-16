//英語と日本語を入力する列番号をセット
Japanese = 10;
English = 5;
var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

function onEdit(e){
  var Srange = e.range;
  if(Srange.getColumn() == Japanese){
    //J列からE列へ
    var JA = e.value;
    if(JA == null){
      var EN = null;
    }else{
      var EN = LanguageApp.translate(JA, 'ja', 'en');
    }
    sheet.getRange(Srange.getRow(),English).setValue(EN);
  }else if(Srange.getColumn() == English){
    //E列からJ列へ
    var EN = e.value;
    if(EN == null){
      JA = null;
    }else{
      var JA = LanguageApp.translate(EN, 'en', 'ja');
    }
    sheet.getRange(Srange.getRow(),Japanese).setValue(JA);
  }else{
    //日本語と英語の列以外の入力があった場合
    return;
  }
}

function onOpen(e){
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var range = sheet.getRange(sheet.getDataRange().getHeight()+1,English).activate();
}
