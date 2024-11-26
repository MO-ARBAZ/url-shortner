URL Shortener Backend
A professional and robust URL Shortener backend built with Node.js and Express. This system provides a seamless way to convert long URLs into concise, shareable links with custom alias options and efficient URL mapping.

Features
🌐 Custom Alias Support: Users can create personalized short URLs.
🔗 Dynamic Redirection: Automatically redirects to the original URL using the short link.
🔒 Validation: Ensures valid URL formats with protocol requirements.
⚡ Optimized Performance: Utilizes in-memory storage for fast URL retrieval.
🛠 Scalable Design: Supports future extensibility with deterministic hashing and modular utilities.
Tech Stack
Backend Framework: Node.js with Express.js
Utilities: Crypto for hashing and Validator for URL validation
Middleware: CORS and JSON parsing for secure and flexible communication
Setup and Installation
Follow these steps to set up and run the backend locally:

1. Clone the Repository
   bash
   Copy code
   git clone
2. Navigate to the Project Directory
   bash
   Copy code

3. Install Dependencies
   Ensure you have Node.js installed, then run:

bash
Copy code
npm install 4. Run the Application
Start the server:

bash
Copy code
npm start
By default, the application runs at http://localhost:3000
