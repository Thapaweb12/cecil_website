export const adminNotificationTemplate = `<!DOCTYPE html>
<html>
  <head>
    <style>
      body {
        font-family: Arial, sans-serif;
        line-height: 1.6;
        color: #333;
        margin: 0;
        padding: 0;
      }
      .container {
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
        border: 1px solid #ddd;
        border-radius: 8px;
        background-color: #f9f9f9;
      }
      .header {
        font-size: 1.8rem;
        font-weight: bold;
        margin-bottom: 20px;
        text-align: center;
        color: #4CAF50;
      }
      .section {
        margin-bottom: 20px;
      }
      .section-title {
        font-size: 1.3rem;
        font-weight: bold;
        margin-bottom: 10px;
        color: #555;
      }
      .content {
        margin-left: 20px;
      }
      .content p {
        margin: 5px 0;
        font-size: 1rem;
      }
      .content strong {
        font-weight: bold;
      }
      .footer {
        font-size: 0.9rem;
        color: #888;
        text-align: center;
        margin-top: 30px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">{{headerTitle}}</div>
      <div class="section">
        <div class="section-title">Personal Information</div>
        <div class="content">
          <p><strong>Name:</strong> {{name}}</p>
          <p><strong>Email:</strong> {{email}}</p>
          {{phone}} 
          {{message}} 
        </div>
      </div>
      <div class="footer">
        <p>This is an automated message, please do not reply directly to this email.</p>
      </div>
    </div>
  </body>
</html>

`;

export const userResponseTemplate = `<!DOCTYPE html>
<html>
  <head>
    <style>
      body {
        font-family: Arial, sans-serif;
        line-height: 1.6;
        color: #333;
        margin: 0;
        padding: 0;
      }
      .container {
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
        border: 1px solid #ddd;
        border-radius: 8px;
        background-color: #f9f9f9;
      }
      .header {
        font-size: 1.8rem;
        font-weight: bold;
        margin-bottom: 20px;
        text-align: center;
        color: #4CAF50;
      }
      .content {
        margin-left: 20px;
      }
      .content p {
        margin: 5px 0;
        font-size: 1rem;
      }
      .content strong {
        font-weight: bold;
      }
      .footer {
        font-size: 0.9rem;
        color: #888;
        text-align: center;
        margin-top: 30px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">Thank You for Contacting Us</div>

      <div class="content">
        <p>Dear {{name}},</p>
        <p>I have received your message and will get back to you as soon as possible.</p>
      </div>

      <div class="footer">
        <p>This is an automated message, please do not reply directly to this email.</p>
      </div>
    </div>
  </body>
</html>

`;

export const businessTrackerTemplate = `<!DOCTYPE html>
<html>
  <head>
    <style>
      body {
        font-family: Arial, sans-serif;
        line-height: 1.6;
        color: #333;
      }
      .container {
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
        border: 1px solid #ddd;
        border-radius: 8px;
        background-color: #f9f9f9;
      }
      .header {
        font-size: 1.5rem;
        font-weight: bold;
        margin-bottom: 20px;
        text-align: center;
        color: #4CAF50;
      }
      .section {
        margin-bottom: 20px;
      }
      .section-title {
        font-size: 1.2rem;
        font-weight: bold;
        margin-bottom: 10px;
        color: #555;
      }
      .content {
        margin-left: 20px;
      }
      .reasons-list {
        margin: 10px 0;
        padding-left: 20px;
      }
      .reasons-list li {
        margin-bottom: 5px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">Business Tracker</div>
      <div class="section">
        <div class="section-title">Personal Information</div>
        <div class="content">
          <p><strong>Name:</strong> {{name}}</p>
          <p><strong>Email:</strong> {{email}}</p>
        </div>
      </div>
      <div class="section">
        <div class="section-title">Survey Responses</div>
        <div class="content">
    <p><strong>CFT Email:</strong> {{cft_email}}</p>
 {{hour_committed}}
{{monthly_income}}
{{other_cft}}

        </div>
      </div>
      <div class="section">
        <div class="section-title">Message</div>
        <div class="content">
          <p>{{message}}</p>
        </div>
      </div>
      <div class="section">
      {{checked_yes_no}}
        <div class="section-title">Reasons</div>

        <div class="content">
          <ul class="reasons-list">
            {{reasons}}
          </ul>
        </div>
      </div>
    </div>
  </body>
</html>`;

// Utility function to replace template placeholders
export const populateTemplate = (
  template: string,
  variables: Record<string, string>
) => {
  let populatedTemplate = template;
  Object.keys(variables).forEach((key) => {
    const placeholder = `{{${key}}}`;
    populatedTemplate = populatedTemplate.replace(
      new RegExp(placeholder, "g"),
      variables[key]
    );
  });
  return populatedTemplate;
};
