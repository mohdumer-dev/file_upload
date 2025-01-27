<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body>
  <h1>Mongoose Middleware with Express Router and Nodemailer</h1>
  <p>This project demonstrates the usage of Mongoose schemas, middleware (post hooks), and an Express router to handle image and video uploads, with email notifications sent using <strong>Nodemailer</strong>.</p>

  <h2>Project Overview</h2>
  <ul>
    <li><strong>Node.js</strong>: Backend runtime.</li>
    <li><strong>Express.js</strong>: Framework for routing and API handling.</li>
    <li><strong>Mongoose</strong>: MongoDB object modeling.</li>
    <li><strong>Nodemailer</strong>: For sending email notifications.</li>
    <li><strong>Cloudinary</strong>: To upload images/videos to the cloud.</li>
  </ul>

  <h2>Features</h2>
  <ul>
    <li><strong>Mongoose Schema</strong>: A User schema is defined with fields like username, imageUrl, videoUrl, tags, and email. Includes post('save') middleware to send an email when a user is saved.</li>
    <li><strong>Express Router</strong>: Provides endpoints for local and cloud-based file uploads, as well as video uploads and processing.</li>
    <li><strong>Nodemailer Integration</strong>: Emails are sent with links to the uploaded images after the document is saved to the database.</li>
  </ul>

  <h2>Installation</h2>
  <ol>
    <li>Clone the repository:
      <pre><code>git clone <repository-url>
cd <repository-folder></code></pre>
    </li>
    <li>Install dependencies:
      <pre><code>npm install</code></pre>
    </li>
    <li>Configure Nodemailer and Database:
      <ul>
        <li>In your config/email.js file, set up Nodemailer using your email service provider's SMTP configuration.</li>
        <li>Update MongoDB connection details in your project.</li>
      </ul>
    </li>
  </ol>

  

  <h2>Usage</h2>
  <ol>
    <li>Run the server:
      <pre><code>npm start</code></pre>
      By default, the server will run on <code>http://localhost:3000</code>.
    </li>
    <li>API Endpoints:
      <ul>
        <li><code>POST /localFile</code>: Upload a file locally.</li>
        <li><code>POST /cloudImage</code>: Upload an image to Cloudinary.</li>
        <li><code>POST /video</code>: Upload a video.</li>
        <li><code>POST /reduceVideo</code>: Process and reduce video size.</li>
      </ul>
    </li>
  </ol>

  <h2>File Structure</h2>
  <pre><code>.
├── controllers/
│   ├── image.js        # Controllers for image and video uploads
├── config/
│   ├── email.js        # Nodemailer configuration
├── models/
│   ├── User.js         # Mongoose schema with post middleware
├── routes/
│   ├── imageRoutes.js  # Express router for file uploads
├── .env                # Environment variables
├── server.js           # Main entry point for the application
├── README.md           # Project documentation
</code></pre>

  
  <h2>License</h2>
  <p>This project is licensed under the <a href="LICENSE">MIT License</a>.</p>
</body>
</html>
