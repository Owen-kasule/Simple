function rewriteToColumnC() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var rangeD = sheet.getRange("D2:D" + sheet.getLastRow());
  var valuesD = rangeD.getValues();
  
  var newValuesC = valuesD.map(function(row) {
    var originalValue = row[0];
    var words = originalValue.split(" ");
    var capitalizedWords = words.map(function(word) {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
    return [capitalizedWords.join(" ")]; // Return new value as an array for the column C
  });
  
  var rangeC = sheet.getRange("C2:C" + sheet.getLastRow());
  rangeC.setValues(newValuesC);
}
