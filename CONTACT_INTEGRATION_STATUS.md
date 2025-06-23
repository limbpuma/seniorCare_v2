# Contact Email Integration - Complete Implementation

## ✅ Integration Complete

The contact form has been successfully integrated with the existing PHP email backend from `integra-old-on-php`. The integration is now ready for testing and deployment.

## 🔧 What Was Implemented

### 1. Frontend Changes (ContactForm.astro)
- **Updated API endpoint**: Now uses `http://localhost:8080/send-email.php`
- **Form data format**: Changed from JSON to FormData to match PHP expectations
- **Environment variable support**: Uses `PUBLIC_EMAIL_API_URL` from `.env`
- **Enhanced error handling**: Specific messages for connection issues
- **CORS compatibility**: Works with updated PHP CORS settings

### 2. Backend Modifications (send-email.php)
- **Expanded CORS origins**: Now allows development servers
  - `https://pflegedienst-integra.de` (production)
  - `http://localhost:4321` (Astro dev server)
  - `http://localhost:3000` (alternative dev port)
  - `http://127.0.0.1:4321` (alternative localhost)

### 3. Development Tools
- **Setup scripts**: PowerShell and Batch files to start PHP server
- **NPM integration**: Added `npm run email-server` command
- **Documentation**: Comprehensive setup guide (`CONTACT_INTEGRATION_SETUP.md`)
- **Environment config**: Updated `.env` with email API URL

### 4. API Integration (api.ts)
- **Updated submitContact method**: Now sends FormData to PHP backend
- **Error handling**: Improved response parsing and error messages
- **Compatibility**: Works with existing PHPMailer response format

## 🚀 How to Test

### Option 1: Using NPM Script (Recommended)
```powershell
# Terminal 1: Start the email server
npm run email-server

# Terminal 2: Start the Astro dev server
npm run dev
```

### Option 2: Manual PHP Server
```powershell
# Terminal 1: Start PHP server manually
cd integra-old-on-php\mail.pflegedienst-integra.de
php -S localhost:8080

# Terminal 2: Start Astro dev server
npm run dev
```

### Option 3: Using Batch File (Windows)
```powershell
# Double-click start-email-server.bat or run:
.\start-email-server.bat

# In another terminal:
npm run dev
```

## 🔍 Testing Steps

1. **Start both servers** (email backend + Astro frontend)
2. **Navigate to** `http://localhost:4321/contact`
3. **Fill out the contact form** with test data:
   - Name: Test User
   - Email: test@example.com
   - Phone: +49 123 4567890
   - Subject: Test Message
   - Message: This is a test message
4. **Check for successful submission**
5. **Verify email delivery** (check the configured email address)

## 📋 Current Configuration

### Email Backend
- **Server**: `localhost:8080`
- **Endpoint**: `/send-email.php`
- **Method**: POST (FormData)
- **SMTP**: All-Inkl server (`w01f1dee.kasserver.com:587`)
- **Recipient**: `info@pflegedienst-integra.de`

### Frontend
- **Development URL**: `http://localhost:4321`
- **Contact Form**: `/contact` page
- **API URL**: Environment variable `PUBLIC_EMAIL_API_URL`
- **Fallback URL**: `http://localhost:8080/send-email.php`

## 🛡️ Security Features

- **CORS protection**: Only allows specific origins
- **Honeypot field**: Bot detection (email_check field)
- **Input validation**: Email format, required fields
- **XSS protection**: HTML sanitization with `htmlspecialchars()`
- **German phone validation**: Regex validation for German phone numbers

## 📝 Form Fields Mapping

| Frontend Field | PHP Parameter | Validation |
|---------------|---------------|------------|
| name | name | Required, not empty |
| email | email | Required, valid email format |
| phone | phone | Optional, German phone format |
| subject | subject | Required, dropdown selection |
| message | message | Required, not empty |

## 🔧 Environment Variables

```env
# Email Integration
PUBLIC_EMAIL_API_URL=http://localhost:8080/send-email.php
PUBLIC_BACKEND_URL=http://localhost:8080
PUBLIC_API_URL=http://localhost:8080
```

## 📧 Email Template

The system sends both HTML and plain text emails with:
- **Subject**: "Neue Kontaktformular-Einreichung: [subject]"
- **Recipient**: info@pflegedienst-integra.de
- **Content**: All form fields + company branding
- **Style**: Professional HTML template with Integra branding

## 🚨 Troubleshooting

### Common Issues:

1. **"PHP not found"**
   - Install PHP from https://www.php.net/downloads.php
   - Add PHP to system PATH

2. **"Connection failed" / CORS errors**
   - Ensure PHP server is running on port 8080
   - Check that Astro dev server is on port 4321
   - Verify CORS origins in `send-email.php`

3. **Email not sending**
   - Check SMTP credentials in `config.php`
   - Verify server connection (All-Inkl server)
   - Check PHP error logs

4. **Form validation errors**
   - Ensure all required fields are filled
   - Check German phone number format: `+49 XXX XXXXXXX`
   - Verify email format

### Debug Steps:
1. **Check browser console** for JavaScript errors
2. **Check network tab** for failed requests
3. **Check PHP server logs** in terminal
4. **Test PHP directly**: Visit `http://localhost:8080/index.htm`

## ✅ Ready for Production

To deploy to production:

1. **Update email API URL** in environment variables
2. **Configure production CORS** origins in `send-email.php`
3. **Secure SMTP credentials** using environment variables
4. **Test email delivery** on production server
5. **Monitor form submissions** and error logs

## 📁 Files Modified

- ✅ `src/components/common/ContactForm.astro` - Updated form submission
- ✅ `integra-old-on-php/mail.pflegedienst-integra.de/send-email.php` - CORS update
- ✅ `src/utils/api.ts` - Updated contact submission method
- ✅ `.env` - Added email configuration
- ✅ `package.json` - Added email server scripts

## 📁 Files Created

- ✅ `CONTACT_INTEGRATION_SETUP.md` - Setup documentation
- ✅ `start-email-server.ps1` - PowerShell startup script
- ✅ `start-email-server.bat` - Batch startup script
- ✅ `CONTACT_INTEGRATION_STATUS.md` - This status document

The contact email integration is now **complete and ready for testing**! 🎉
