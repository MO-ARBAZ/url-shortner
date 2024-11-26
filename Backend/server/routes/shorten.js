const express = require("express");
const validator = require("validator");
const { generateHash } = require("../utils/hash");

const router = express.Router();

// Persistent mapping for runtime storage
const urlMap = new Map();
const reverseMap = new Map();

const isValidUrl = (url) => validator.isURL(url, { require_protocol: true });

router.post("/", (req, res) => {
  const { originalUrl, customAlias } = req.body;

  if (!originalUrl) {
    return res.status(400).json({ error: "Original URL is required" });
  }

  if (!isValidUrl(originalUrl)) {
    return res.status(400).json({ error: "Invalid URL format" });
  }

  const hash = (customAlias || generateHash(originalUrl)).toLowerCase();

  if (customAlias && urlMap.has(hash)) {
    return res.status(400).json({ error: "Custom alias already exists" });
  }

  if (!customAlias && reverseMap.has(originalUrl)) {
    return res.json({
      shortUrl: `http://localhost:3000/shorten/${reverseMap.get(originalUrl)}`,
    });
  }

  urlMap.set(hash, originalUrl);
  reverseMap.set(originalUrl, hash);
  res.json({ shortUrl: `http://localhost:3000/shorten/${hash}` });
});

router.get("/:hash", (req, res) => {
  const { hash } = req.params;
  const originalUrl = urlMap.get(hash.toLowerCase());

  if (!originalUrl) {
    return res.status(404).json({ error: "URL not found" });
  }

  res.redirect(originalUrl);
});

module.exports = router;
