const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());

// API Endpoint
app.get("/api/health", (req, res) => {
  res.json({ message: "Hello from the Backend!" });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
