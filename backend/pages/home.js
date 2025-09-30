const navbar = require("../components/nav");

function homePage() {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Home</title>
      <style>
        body { font-family: Arial; margin: 20px; background: #f5f5f5; }
        nav a { text-decoration: none; margin-right: 15px; color: #333; }
        nav a:hover { color: #007BFF; }
      </style>
    </head>
    <body>
      ${navbar()}
      <h1>Welcome to our Home Page!</h1>
    </body>
    </html>
  `;
}

module.exports = homePage;
