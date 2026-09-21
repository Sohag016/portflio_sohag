# EmailJS Setup Guide for Portfolio Contact Form

This project is configured to use EmailJS for contact form submissions. The correct setup is essential for delivering emails to the inbox instead of spam.

## 1) Important fix: Never use the visitor email as the From Email

This is the main reason emails may go to spam or be rejected.

Correct setup:
- From Email: your verified EmailJS-connected email account
- From Name: {{from_name}}
- Reply-To: {{reply_to}}
- To Email: your personal inbox

Wrong setup:
- From Email: {{reply_to}}
- This makes the email look spoofed and can trigger Gmail spam filters.

---

## 2) Required form field names

Your form must use these names so EmailJS can map them to the template variables:

```html
<form id="contact-form">
  <input type="text" name="from_name" />
  <input type="email" name="reply_to" />
  <textarea name="message"></textarea>
</form>
```

The project form uses this pattern in the React contact component.

---

## 3) EmailJS dashboard configuration

### Step 1: Create/connect an email service
1. Open EmailJS dashboard.
2. Go to "Email Services".
3. Click "Add New Service".
4. Choose Gmail or another verified SMTP provider.
5. Sign in to your Gmail account and allow permission.
6. Make sure the Gmail account is verified.

### Step 2: Create a template
1. Go to "Email Templates".
2. Click "Create New Template".
3. Set template name to:
   ```text
   template_contact
   ```

### Step 3: Configure the template
Set these fields:

- To Email: `mdsohaghossain138643@gmail.com`
- From Name: `{{from_name}}`
- From Email: your verified EmailJS service email
- Reply-To: `{{reply_to}}`

### Example template body
```text
Hello Sohag,

You have a new portfolio inquiry.

Name: {{from_name}}
Email: {{reply_to}}
Subject: {{subject}}

Message:
{{message}}

Best regards,
Portfolio Contact Form
```

### Example subject line
```text
Portfolio Inquiry from {{from_name}}
```

---

## 4) Required EmailJS keys

Use the following values in the project configuration if you keep the current setup:

- Service ID: `contact_service`
- Template ID: `template_contact`
- Public Key: `user_TTDmetQLYgWCLzHTDgqxm`

---

## 5) Safe JavaScript usage

Use the following pattern when sending:

```js
emailjs.init({ publicKey: 'user_TTDmetQLYgWCLzHTDgqxm' });

emailjs.send('contact_service', 'template_contact', {
  from_name: formData.from_name,
  reply_to: formData.reply_to,
  subject: formData.subject,
  message: formData.message,
  to_email: 'mdsohaghossain138643@gmail.com'
})
.then(() => {
  form.reset();
})
.catch(() => {
  // show error
});
```

Do not do this:

```js
emailjs.send('contact_service', 'template_contact', {
  from_email: senderEmail
});
```

This is the main spam/spoofing problem.

---

## 6) Deliverability best practices

- Keep the email body professional and short.
- Do not use spammy words like: Free, click now, limited time, winner, urgent.
- Avoid excessive punctuation and all-caps content.
- Use a clean subject line.
- Keep the sender as your verified Gmail or EmailJS service account.
- Use Reply-To for the visitor's email address.
- Test the form from real inbox accounts like Gmail/Outlook.

---

## 7) Final checklist

Before going live, confirm all of these:

- [ ] Gmail account connected in EmailJS
- [ ] EmailJS service verified
- [ ] Template created
- [ ] To Email set to `mdsohaghossain138643@gmail.com`
- [ ] From Name set to `{{from_name}}`
- [ ] From Email set to verified Gmail service email only
- [ ] Reply-To set to `{{reply_to}}`
- [ ] Form fields match `from_name` and `reply_to`
- [ ] No dynamic From Email is used
- [ ] The project is deployed and the form is tested

---

## 8) Note for this project

The contact form in this portfolio has been updated to follow the correct EmailJS flow and uses the safe pattern. After you connect the EmailJS dashboard correctly, emails should reach your inbox reliably.

If you still see issues after setup, test it with a real Gmail account first and verify the EmailJS service is approved and not rate-limited.
