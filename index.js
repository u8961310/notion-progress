const express = require("express");
const axios = require("axios");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", async (req, res) => {
  try {
    const response = await axios.get("https://script.google.com/macros/s/AKfycbyHLyoK8lMxQGVu1q3Le_sbAJDMRHcxRWcsadGey8-FKkuRA_V1jdnQpFS6IJ5b5wMg/exec");
    res.setHeader("Content-Type", "text/html");
    res.send(response.data);
  } catch (error) {
    res.status(500).send("Error fetching data from Google Apps Script.");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
