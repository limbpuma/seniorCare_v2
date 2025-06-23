# Contact Email Integration Setup

This document explains how to set up and test the contact email integration using the existing PHP email backend.

## Prerequisites

1. **PHP** - Required to run the email backend
   - Download and install PHP from https://www.php.net/downloads.php
   - Add PHP to your system PATH
   - Verify installation: `php -v`

## Setup Instructions

### 1. Start the PHP Email Server

Navigate to the email backend directory and start the PHP development server:

```bash
cd integra-old-on-php\mail.pflegedienst-integra.de
php -S localhost:8080
```

The email API will be available at: `http://localhost:8080/send-email.php`

### 2. Start the Astro Development Server

In a separate terminal, start the Astro frontend:

```bash
npm run dev
```

The frontend will be available at: `http://localhost:4321`

### 3. Test the Integration

1. Open the website in your browser
2. Navigate to the contact page
3. Fill out the contact form
4. Submit the form

## Configuration

### Email Settings (config.php)
- **SMTP Host**: w01f1dee.kasserver.com
- **SMTP User**: info@mail.pflegedienst-integra.de
- **SMTP Port**: 587
- **Encryption**: STARTTLS

### CORS Settings
The PHP script allows requests from:
- https://pflegedienst-integra.de (production)
- http://localhost:4321 (Astro dev server)
- http://localhost:3000 (alternative dev port)
- http://127.0.0.1:4321 (alternative localhost)

## File Structure

```
integra-old-on-php/mail.pflegedienst-integra.de/
├── config.php          # SMTP configuration
├── send-email.php       # Email sending script
├── index.htm           # Simple test page
└── phpmailer/          # PHPMailer library
```

## Frontend Integration

The ContactForm component (`src/components/common/ContactForm.astro`) has been updated to:
- Send form data to `http://localhost:8080/send-email.php`
- Handle the PHP script's response format
- Display appropriate success/error messages

## Testing Without PHP

If PHP is not available, you can still test the frontend:
1. The form will show an error message
2. Check browser developer tools for network errors
3. This confirms the integration is working (just missing the backend)

## Production Deployment

For production:
1. Update the email API URL in the ContactForm component
2. Ensure CORS settings allow the production domain
3. Test email delivery with real SMTP credentials

## Troubleshooting

### Common Issues:
1. **PHP not found**: Install PHP and add to PATH
2. **CORS errors**: Check the allowed origins in send-email.php
3. **Email not sending**: Verify SMTP credentials in config.php
4. **Form not submitting**: Check browser console for JavaScript errors

### Debug Steps:
1. Check PHP server logs: Look for errors in the terminal running PHP
2. Check browser network tab: Verify the request is reaching the PHP script
3. Test PHP script directly: Visit http://localhost:8080/index.htm

## Security Notes

- The current SMTP credentials are visible in config.php
- In production, use environment variables for sensitive data
- Consider implementing rate limiting for the contact form
- Add CSRF protection for enhanced security
