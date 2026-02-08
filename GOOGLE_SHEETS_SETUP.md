# Google Sheets Integration Setup Guide

## Step 1: Create a New Google Spreadsheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "Wedding Website Responses" or similar
4. Copy the **Spreadsheet ID** from the URL (it's the long string between `/d/` and `/edit`)
   - Example: `https://docs.google.com/spreadsheets/d/1A2B3C4D5E6F7G8H9I0J/edit`
   - The ID is: `1A2B3C4D5E6F7G8H9I0J`

## Step 2: Create Google Apps Script

1. Go to [Google Apps Script](https://script.google.com)
2. Click **"+ New Project"**
3. Delete all the default code
4. Copy and paste the code from `google-apps-script.js` in this project
5. Replace `YOUR_SPREADSHEET_ID_HERE` with your actual spreadsheet ID from Step 1
6. Save the project (Ctrl+S) and name it "Wedding Website Form Handler"

## Step 3: Deploy the Script

1. In Google Apps Script, click **"Deploy"** → **"New deployment"**
2. Click the gear icon ⚙️ next to "Type" and select **"Web app"**
3. Configure the deployment:
   - **Description**: "Wedding Website Form Handler"
   - **Execute as**: "Me"
   - **Who has access**: "Anyone"
4. Click **"Deploy"**
5. **IMPORTANT**: Copy the **Web app URL** - this is what you'll use in your code
   - It should look like: `https://script.google.com/macros/s/AKfycbz.../exec`

## Step 4: Update Your Website Code

Replace the `GOOGLE_SCRIPT_URL` in both files with your new Web app URL:

### Files to Update:
- `src/components/RSVPPopup.tsx` (line ~28)
- `src/components/PostalCardForm.tsx` (line ~24)

Change this line in both files:
```javascript
const GOOGLE_SCRIPT_URL = 'YOUR_NEW_WEB_APP_URL_HERE';
```

## Step 5: Test the Integration

1. Deploy your website changes: `npm run deploy`
2. Test both forms:
   - Submit an RSVP
   - Submit a gift message
3. Check your Google Spreadsheet - you should see two new sheets:
   - **RSVP** (with RSVP submissions)
   - **Gift Messages** (with gift message submissions)

## Troubleshooting

- **Forms not submitting**: Check browser console for errors
- **No data in sheets**: Verify the Spreadsheet ID and Web app URL
- **Permission errors**: Make sure the script has "Anyone" access
- **Script errors**: Check the Apps Script execution logs

## Data Structure

### RSVP Sheet Columns:
- Timestamp
- Names
- Guest Count  
- Attendance (yes/no)
- Song Request
- Status

### Gift Messages Sheet Columns:
- Timestamp
- Name
- Message
- Status