import React, { useState } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [originalUrl, setOriginalUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const handleShorten = async () => {
    if (!originalUrl) {
      alert("Please enter a valid URL.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/shorten", {
        originalUrl,
      });
      setShortUrl(response.data.shortUrl);
    } catch (error) {
      console.error("Error creating shortened URL:", error);
      alert("Failed to create a shortened URL. Please try again.");
    }
  };

  return (
    <div className="app">
      <div className="card">
        <h1>🌐 URL Shortener</h1>
        <p>
          Effortlessly transform your long links into concise, shareable URLs.
        </p>
        <div className="form">
          <input
            type="text"
            placeholder="Paste your long URL here..."
            value={originalUrl}
            onChange={(e) => setOriginalUrl(e.target.value)}
          />
          <button onClick={handleShorten}>Shorten URL</button>
        </div>
        {shortUrl && (
          <div className="result">
            <p>Here’s your shortened URL:</p>
            <a href={shortUrl} target="_blank" rel="noopener noreferrer">
              {shortUrl}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
