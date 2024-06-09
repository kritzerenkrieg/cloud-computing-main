const express = require("express");
const router = express.Router();
const getProfileService = require("../service/getprofileservice");

// Define route to get user profile
router.get("/:email", async (req, res) => {
  try {
    const email = req.params.email;
    const profile = await getProfileService.getProfileByEmail(email);
    res.status(200).send(profile);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

module.exports = router;
