// Google Apps Script for Wedding Website Form Submissions
// This script handles both RSVP and Gift form submissions

function doPost(e) {
  try {
    // Check if postData exists
    if (!e || !e.postData || !e.postData.contents) {
      return ContentService
        .createTextOutput(JSON.stringify({success: false, error: 'No data received'}))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    // Parse the JSON data
    const data = JSON.parse(e.postData.contents);
    
    // Get the spreadsheet
    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    
    if (data.type === 'rsvp') {
      handleRSVPSubmission(spreadsheet, data);
    } else if (data.type === 'gift') {
      handleGiftSubmission(spreadsheet, data);
    }
    
    return ContentService
      .createTextOutput(JSON.stringify({success: true}))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    console.error('Error processing form submission:', error);
    return ContentService
      .createTextOutput(JSON.stringify({success: false, error: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function handleRSVPSubmission(spreadsheet, data) {
  // Get or create RSVP sheet
  let sheet = spreadsheet.getSheetByName('RSVP');
  if (!sheet) {
    sheet = spreadsheet.insertSheet('RSVP');
    // Add headers
    sheet.getRange(1, 1, 1, 8).setValues([
      ['Timestamp', 'Email', 'Names', 'Guest Count', 'Attendance', 'Dietary Restrictions', 'Message/Song Request', 'Status']
    ]);
    sheet.getRange(1, 1, 1, 8).setFontWeight('bold');
  }
  
  const dietaryRestrictions = data.dietary || data.dietaryRestrictions || '';
  const names = Array.isArray(data.guestNames)
    ? data.guestNames.join(', ')
    : (data.names || data.guestNames || '');
  const guestCount = data.guestCount || data.numberOfGuests || '1';
  const message = data.message || data.songRequest || '';

  // Add the data
  const row = [
    new Date(),
    data.email || '',
    names,
    guestCount,
    data.attendance || '',
    dietaryRestrictions,
    message,
    'New'
  ];
  
  sheet.appendRow(row);
  
  // Auto-resize columns
  sheet.autoResizeColumns(1, 8);
}

function handleGiftSubmission(spreadsheet, data) {
  // Get or create Gift Messages sheet
  let sheet = spreadsheet.getSheetByName('Gift Messages');
  if (!sheet) {
    sheet = spreadsheet.insertSheet('Gift Messages');
    // Add headers
    sheet.getRange(1, 1, 1, 4).setValues([
      ['Timestamp', 'Name', 'Message', 'Status']
    ]);
    sheet.getRange(1, 1, 1, 4).setFontWeight('bold');
  }
  
  // Add the data
  const row = [
    new Date(),
    data.name || '',
    data.message || '',
    'New'
  ];
  
  sheet.appendRow(row);
  
  // Auto-resize columns
  sheet.autoResizeColumns(1, 4);
}

// Test function to check if the script is working
function testScript() {
  console.log('Wedding website form handler is ready!');
}