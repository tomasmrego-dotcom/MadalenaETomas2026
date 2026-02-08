// Google Apps Script for Wedding Website Form Submissions
// This script handles both RSVP and Gift form submissions

function doPost(e) {
  try {
    // Parse the JSON data
    const data = JSON.parse(e.postData.contents);
    
    // Get the spreadsheet by ID (you'll need to update this with your actual spreadsheet ID)
    const SPREADSHEET_ID = 'YOUR_SPREADSHEET_ID_HERE'; // Replace with your Google Sheets ID
    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    
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
    sheet.getRange(1, 1, 1, 6).setValues([
      ['Timestamp', 'Names', 'Guest Count', 'Attendance', 'Song Request', 'Status']
    ]);
    sheet.getRange(1, 1, 1, 6).setFontWeight('bold');
  }
  
  // Add the data
  const row = [
    new Date(),
    data.names || '',
    data.guestCount || '1',
    data.attendance || '',
    data.songRequest || '',
    'New'
  ];
  
  sheet.appendRow(row);
  
  // Auto-resize columns
  sheet.autoResizeColumns(1, 6);
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