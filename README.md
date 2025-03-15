# Raja Allam - Vancouver Realtor Website

This is a professional website for Raja Allam, a real estate agent based in Vancouver, BC.

## Features

- Responsive design that works on all devices
- About section with professional background
- Services offered
- Areas served in Vancouver and surrounding cities
- Contact form with customer preferences
- Modern and professional UI
- Email notification system for form submissions

## Setup Instructions

1. Clone or download this repository
2. Open `index.html` in your web browser to view the website locally
3. To deploy to a live server, upload all files to your web hosting provider

## Image Instructions

- Replace the placeholder images in the `images` folder with actual images:
  - `raja-allam.jpg`: Professional photo of Raja Allam
  - `vancouver-skyline.jpg`: Background image of Vancouver skyline

## Email Form Setup

To configure the contact form to send emails to rambabudx94@gmail.com:

1. Create a free account at [EmailJS](https://www.emailjs.com/)
2. Create a new email service in your EmailJS dashboard (Gmail, Outlook, etc.)
3. Create a new email template with variables matching the form field names:
   - `user_name`
   - `user_email`
   - `user_phone`
   - `user_interest`
   - `user_budget`
   - `selected_locations`
   - `message`
4. In your template, customize the email content using these variables (e.g., "New inquiry from {{user_name}}")
5. Get your EmailJS public key from the dashboard
6. Open `scripts.js` and replace:
   - `YOUR_PUBLIC_KEY` (in two places) with your actual public key
   - `service_id` with your EmailJS service ID
   - `template_id` with your EmailJS template ID

After these steps, the form will send all customer inquiries directly to your specified email address.

## Customization

- Edit `styles.css` to change colors, fonts, and overall styling
- Update contact information in the HTML file
- Modify the form in `index.html` to connect to your form processing service

## Technology Used

- HTML5
- CSS3
- JavaScript
- Font Awesome for icons
- EmailJS for form submission handling

## License

All rights reserved.

## Author

Created for Raja Allam by [Your Name] 