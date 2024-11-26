# URL Shortener (MERN Stack)

This is a URL shortener application built using the **MERN stack** (MongoDB, Express, React, Node.js). The goal is to create a shortened URL that preserves the original behavior and routing without using a database. The shortened URL will retain the `/payment/merchant_code` path from the original URL.

## Objective

The goal of this project is to shorten a URL, such as `https://abc.com/payment/merchant_code`, into a custom shortened URL, like `https://short.com/payment/merchant_code`, where the shortened version retains all behaviors, responses, and redirection patterns of the original URL.

Key Requirements:
- Create a shortened URL reflecting the `/payment/merchant_code` path.
- Maintain the original behavior and routing (i.e., redirection) for the shortened URL.
- Avoid using a database for storage—use server-side techniques like in-memory caching or encoding methods.

## Project Structure

The project is divided into two main parts:

1. **Frontend**: React-based UI for generating shortened URLs.
2. **Backend**: Express-based API to handle the URL shortening and redirection.

### Folder Structure

```
URL-Shortener-MERN/
FrontEnd
├── client/
│   ├── src/
│   │   ├── App.js               # Main React component
│   │   ├── App.css              # Styling for React component
│   │   └── index.js             # React entry point
│   ├── public/
│   │   └── index.html           # Main HTML file for React app
│   ├── package.json             # React project dependencies
│   └── README.md  
backend/
├── server/
│   ├── routes/
│   │   └── shorten.js           # Route file for URL shortening
│   ├── utils/
│   │   └── hash.js              # Utility file for hashing functions
│   ├── server.js                # Main server file
│   └── README.md                # Documentation file for backend
├── .gitignore                   # Files and folders to ignore in Git
└── package.json                 # Backend dependencies and configuration
│
└── README.md                # Project documentation
```

## Features

- **Frontend**: Allows users to input an original URL and receive a shortened version.
- **Backend**: Handles the URL shortening logic, ensuring that the shortened URL keeps the same path structure.
- **In-Memory URL Storage**: No database is used; URLs are stored in memory using an in-memory cache.

## How it Works

1. **Frontend**: 
   - The user enters the original URL (e.g., `https://abc.com/payment/merchant_code`) into a simple form in React.
   - Upon submission, the form makes a request to the backend to generate a shortened URL.
   - The shortened URL (e.g., `https://short.com/payment/merchant_code`) is then displayed to the user.

2. **Backend**: 
   - The backend receives the original URL and generates a unique shortened path (using hashing or encoding).
   - The shortened URL maintains the original path structure (`/payment/merchant_code`), so all redirection behaviors are preserved.
   - In-memory cache or object is used to store the URL mappings temporarily, ensuring the service is lightweight and fast without needing a persistent database.

3. **Redirection**:
   - When a user accesses the shortened URL, the backend performs a redirection to the original URL.

## Setup Instructions

### Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) (for managing packages)

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/URL-Shortener-MERN.git
cd URL-Shortener-MERN
```

### 2. Set Up the Frontend

Navigate to the `client` directory and install dependencies.

```bash
cd client
npm install
```

### 3. Set Up the Backend

Navigate to the `server` directory and install dependencies.

```bash
cd server
npm install
```

### 4. Run the Development Servers

To run both the frontend and backend locally:

1. Start the backend server:

   ```bash
   cd server
   npm start
   ```

   This will start the Express server on `http://localhost:5000`.

2. Start the frontend development server:

   ```bash
   cd client
   npm start
   ```

   This will start the React development server on `http://localhost:3000`.

Once both servers are running, open `http://localhost:3000` in your browser to interact with the app.

## Approach and Logic

### Backend Logic

1. **URL Shortening**:
   - The backend listens for requests to shorten a URL.
   - When a URL is submitted, the backend extracts the path (e.g., `/payment/merchant_code`).
   - A unique shortened path is generated (for example, using a hash of the URL or an incremental identifier).
   - The shortened URL is then mapped to the original URL using an in-memory object or cache.

2. **URL Redirection**:
   - When a user accesses a shortened URL, the backend matches the shortened path to the original URL.
   - The backend performs a 301 redirect to the original URL, maintaining all behaviors, headers, and routing.

### Frontend Logic

- The frontend is built with React.js, providing a form to input the original URL and display the shortened version.
- Upon form submission, the frontend sends a POST request to the backend to shorten the URL.
- The frontend then displays the resulting shortened URL to the user.

## Code Walkthrough

### Backend (Express)

- **server.js**: Main server file where the Express app is initialized and configured.
- **routes/urlRoutes.js**: Handles the logic for shortening URLs and serving shortened URLs with proper redirection.

### Frontend (React)

- **App.js**: Main component where the URL input form is rendered, and API calls are made to shorten the URL.
- **ShortenedURLDisplay.js**: Component responsible for displaying the shortened URL once generated.

## Notes

- The shortened URLs are stored in memory for the duration of the server's runtime. If the server is restarted, the data will be lost.
- The backend uses a simple in-memory mapping object to link shortened URLs to their full versions.
- The UI and server are both designed to be simple and demonstrate core concepts of URL shortening and redirection without the complexity of database management.

## Conclusion

This URL shortener application demonstrates how to shorten URLs and preserve their routing behaviors using the MERN stack, without requiring a database. The solution is lightweight, modular, and serves as an ideal example for building small-scale applications using modern JavaScript technologies.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
