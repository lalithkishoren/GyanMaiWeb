// Google Apps Script — Demo booking endpoint for the GyanMai Contact form.
//
// This file is a manual copy of the script that lives in the Apps Script editor
// attached to the "GyanMai - Demo Bookings" Google Sheet. It is NOT auto-deployed
// from this repo. Source of truth is the Apps Script editor; this file exists
// for version history and code review.
//
// To update the live script: edit in the Apps Script editor, then paste the new
// version here and commit. To deploy after editing: Deploy -> Manage deployments
// -> pencil -> Version: New version -> Deploy (keeps the same web app URL).

const SHEET_NAME = 'Sheet1';
const NOTIFY_EMAILS = 'lalithkishore@gmail.com';

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);

    sheet.appendRow([
      new Date(),
      data.name || '',
      data.role || '',
      data.school || '',
      data.email || '',
      data.phone || '',
      data.message || '',
    ]);

    Logger.log('About to send email to: ' + NOTIFY_EMAILS);

    GmailApp.sendEmail(
      NOTIFY_EMAILS,
      'New GyanMai demo booking — ' + (data.name || 'Unknown'),
      'Name: ' + (data.name || '') + '\n' +
      'Role: ' + (data.role || '') + '\n' +
      'School: ' + (data.school || '') + '\n' +
      'Email: ' + (data.email || '') + '\n' +
      'Phone: ' + (data.phone || '') + '\n' +
      'Message: ' + (data.message || '')
    );

    Logger.log('Email sent. Remaining quota: ' + MailApp.getRemainingDailyQuota());

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    Logger.log('ERROR: ' + err);
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function authorizeAndTest() {
  GmailApp.sendEmail(
    'lalithkishore@gmail.com',
    'Apps Script Gmail auth test',
    'If you see this, GmailApp is authorized correctly.'
  );
  Logger.log('Sent. Remaining quota: ' + MailApp.getRemainingDailyQuota());
}
