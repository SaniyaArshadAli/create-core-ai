# Google Sheets Integration Setup Guide

## Overview
This project uses Google Sheets as a lightweight database for storing form submissions and user authentication data.

⚠️ **SECURITY WARNING**: This implementation stores credentials in Google Sheets and validates them client-side. This is **NOT SECURE** for production applications. Use this only for:
- Prototypes and demos
- Internal tools with no sensitive data
- Learning and testing

For production, migrate to **Lovable Cloud** or a proper authentication system.

---

## Step 1: Create Your Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet named "AL-AqCore-Database"
3. Create the following sheets (tabs):

### Sheet 1: "Users"
Column headers (Row 1):
- `Timestamp`
- `Name`
- `Email`
- `Password`

### Sheet 2: "ContactForms"
Column headers (Row 1):
- `Timestamp`
- `Type`
- `Name`
- `Email`
- `Message`

---

## Step 2: Create Google Apps Script

1. In your Google Sheet, click **Extensions → Apps Script**
2. Delete any existing code
3. Paste the following code:

```javascript
function doPost(e) {
  try {
    const action = e.parameter.action;
    
    if (action === 'signup') {
      return handleSignup(e);
    } else if (action === 'login') {
      return handleLogin(e);
    } else {
      return handleFormSubmission(e);
    }
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'error', error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  const action = e.parameter.action;
  
  if (action === 'login') {
    return handleLoginGet(e);
  }
  
  return ContentService
    .createTextOutput(JSON.stringify({ result: 'error', error: 'Invalid request' }))
    .setMimeType(ContentService.MimeType.JSON);
}

function handleSignup(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Users');
  const email = e.parameter.email;
  const password = e.parameter.password;
  const name = e.parameter.name;
  const timestamp = new Date();
  
  // Check if user already exists
  const data = sheet.getDataRange().getValues();
  for (let i = 1; i < data.length; i++) {
    if (data[i][2] === email) {
      return ContentService
        .createTextOutput(JSON.stringify({ result: 'error', error: 'Email already registered' }))
        .setMimeType(ContentService.MimeType.JSON);
    }
  }
  
  // Add new user
  sheet.appendRow([timestamp, name, email, password]);
  
  return ContentService
    .createTextOutput(JSON.stringify({ result: 'success' }))
    .setMimeType(ContentService.MimeType.JSON);
}

function handleLoginGet(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Users');
  const email = e.parameter.email;
  const password = e.parameter.password;
  
  const data = sheet.getDataRange().getValues();
  for (let i = 1; i < data.length; i++) {
    if (data[i][2] === email && data[i][3] === password) {
      return ContentService
        .createTextOutput(JSON.stringify({ 
          success: true, 
          user: { name: data[i][1], email: data[i][2] }
        }))
        .setMimeType(ContentService.MimeType.JSON);
    }
  }
  
  return ContentService
    .createTextOutput(JSON.stringify({ success: false, message: 'Invalid credentials' }))
    .setMimeType(ContentService.MimeType.JSON);
}

function handleFormSubmission(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('ContactForms');
  const timestamp = new Date();
  const type = e.parameter.type || 'general';
  const name = e.parameter.name;
  const email = e.parameter.email;
  const message = e.parameter.message;
  
  sheet.appendRow([timestamp, type, name, email, message]);
  
  return ContentService
    .createTextOutput(JSON.stringify({ result: 'success' }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

4. Click **Save** (💾 icon)

---

## Step 3: Deploy the Script as a Web App

1. Click **Deploy → New deployment**
2. Click the gear icon (⚙️) next to "Select type"
3. Choose **Web app**
4. Configure:
   - **Description**: "AL-AqCore API"
   - **Execute as**: Me (your email)
   - **Who has access**: Anyone
5. Click **Deploy**
6. **Copy the Web App URL** - it looks like:
   ```
   https://script.google.com/macros/s/AKfycby.../exec
   ```

---

## Step 4: Update Your Code

1. Open `src/lib/googleSheets.ts`
2. Replace `'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE'` with your Web App URL:

```typescript
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/YOUR_ACTUAL_URL/exec';
```

3. Save the file

---

## Step 5: Test the Integration

1. Navigate to `/login` on your site
2. Create a new account using the "Sign Up" tab
3. Check your Google Sheet "Users" tab - you should see the new entry
4. Try logging in with the credentials
5. Test the contact form to verify submissions appear in "ContactForms" tab

---

## Troubleshooting

### "Authorization required" error
- Go back to Apps Script
- Click **Deploy → Manage deployments**
- Click **Edit** (pencil icon)
- Create a **New Version**
- Redeploy

### Form submissions not appearing
- Check the Apps Script execution logs: **View → Executions**
- Verify sheet names match exactly: "Users" and "ContactForms"
- Ensure column headers are in Row 1

### CORS errors
- Apps Script handles CORS automatically
- Make sure you're using the `/exec` URL (not `/dev`)

---

## Migration Path to Production

When ready for production:

1. **Enable Lovable Cloud**
2. Migrate data from Google Sheets to Cloud database
3. Implement proper authentication with password hashing
4. Add Row Level Security (RLS) policies
5. Remove Google Sheets integration code

---

## Support

For issues or questions:
- Email: contact.alaql.ai@gmail.com
- GitHub: https://github.com/AL-Aql-Ai
- WhatsApp: [Contact Support](https://wa.me/919959100901)
