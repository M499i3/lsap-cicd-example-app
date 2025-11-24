const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Welcome to the CI/CD Workshop!");
});

app.get("/time", (req, res) => {
  const now = new Date().toISOString();
  res.json({ time: now });
});

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;

