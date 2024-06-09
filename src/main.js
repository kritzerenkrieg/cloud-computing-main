const express = require("express");
const cors = require("cors");

// Initialize app
const app = express();
app.use(cors());
app.use(express.json());

// Import routes
const getProfileRoute = require("./src/route/getprofileroute");
app.use("/profile", getProfileRoute);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
