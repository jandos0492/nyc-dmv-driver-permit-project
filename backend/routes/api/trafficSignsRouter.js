const router = require("express").Router();
const { TrafficSigns } = require("../../db/models");

router.get("/traffic-signs", async (req, res) => {
  try {
    const trafficSigns = await TrafficSigns.findAll();
    res.json(trafficSigns);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;