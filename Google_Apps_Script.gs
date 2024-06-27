// The code below is what is used in the Ainu evaluation app.
//
// Edit the logic (selected data, how to update, etc)
// according to your specific use case.

const SPREADSHEET_ID = "YOUR ID HERE";

// Process HTTP GET requests.
function doGet(e) {
  const SENTENCE_SHEET = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName('unevaluated');
  const SENTENCES = SENTENCE_SHEET.getDataRange().getValues();
  const CONTEXT_SHEET = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName('full');
  const CONTEXT_SENTENCES = CONTEXT_SHEET.getDataRange().getValues();

  let rowData = [];
  let indices = new Set();

  for(let ii = 0; ii < 100; ii++) {
    let row = getRandomRowData(SENTENCES, CONTEXT_SENTENCES);
    if(row.success && !indices.has(row.index)) {
      rowData.push(row);
      indices.add(row.index);
    }
  }
  const output = ContentService.createTextOutput();
  output.setMimeType(ContentService.MimeType.JSON);
  output.setContent(JSON.stringify({success: true, sentences: rowData}));
  return output;
}

// Process HTTP POST requests.
function doPost(e) {
  const input = JSON.parse(e.postData.contents);
  const result = updateSurveyResults(input);
  
  const output = ContentService.createTextOutput();
  output.setMimeType(ContentService.MimeType.JSON);
  output.setContent(JSON.stringify({ result: result }));
  return output;
}

function getRandomRowData(data, contextData) {
  const numRows = data.length;
  const randomIndex = Math.floor(Math.random() * (numRows - 1)) + 1;

  const selectedRow = data[randomIndex];
  const selectedIndex = selectedRow[0] + 1;
  const selectedRowNum = selectedRow[12];
  
  let contextKana = [];
  let contextLatn = [];
  let contextJapn = [];
  
  for (let ii = selectedIndex - 5; ii <= selectedIndex + 5; ii++) {
    if (ii >= 0 && ii < contextData.length) {
      contextKana.push(contextData[ii][1]);  // 2nd column
      contextLatn.push(contextData[ii][2]);  // 3rd column
      contextJapn.push(contextData[ii][3]);  // 4th column
    }
  }

  const modelNumber = Math.floor(Math.random() * 3);
  let model, modelIndex;
  for(let ii = 0;  ii <= modelNumber || (!model && ii < 3); ii++) {
    if(!selectedRow[13 + ii] && selectedRow[3 + ii] != selectedRow[2]) {
      model = selectedRow[3 + ii];
      modelIndex = ii;
    }
  }
  
  if(model) {
    var result = {
      success: true,
      index: selectedRowNum, // Row number
      kana:  selectedRow[1], // Katakana column
      human: selectedRow[2], // Human Latin column
      model: model,
      modelIndex: modelIndex,
      contextKana: contextKana,
      contextLatn: contextLatn,
      contextJapn: contextJapn
    };
  } else result = {success: false};

  console.log(result);
  return result;
}

function updateSurveyResults(input) {
  const SHEET = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName('modified');
  const ROW_INDEX = input.index;
  const HUMAN_OK_COL = 14;
  const HUMAN_COL = 3;
  const COS_COL = 4;
  const COS_OK_COL = 15;
  const COMMENT_COL = 19;
  SHEET.getRange(ROW_INDEX, HUMAN_OK_COL).setValue(input.humanOK);
  SHEET.getRange(ROW_INDEX, COS_OK_COL + input.modelIndex).setValue(input.modelOK);
  if(input.comment) {
    const oldComment = SHEET.getRange(ROW_INDEX, COMMENT_COL).getValue();
    const newComment = oldComment ? oldComment + '; ' + input.comment : input.comment;
    SHEET.getRange(ROW_INDEX, COMMENT_COL).setValue(newComment);
  }

  for(let ii = 0; ii < 3; ii++) {
    if(ii !== input.modelIndex) {
      if(SHEET.getRange(ROW_INDEX, COS_COL + ii).getValue() == SHEET.getRange(ROW_INDEX, COS_COL + input.modelIndex).getValue()) {
        SHEET.getRange(ROW_INDEX, COS_OK_COL + ii).setValue(input.modelOK);
      } else if(SHEET.getRange(ROW_INDEX, COS_COL + ii).getValue() == SHEET.getRange(ROW_INDEX, HUMAN_COL).getValue()) {
        SHEET.getRange(ROW_INDEX, COS_OK_COL + ii).setValue(input.humanOK);
      }
    }
  }

  return "SUCCESS";
}
