const router = require("express").Router();
const { RussianTest } = require("../../db/models/");

router.get("/russian", async (req, res) => {
  try {
    const russianTest = await RussianTest.findAll();
    res.json(russianTest);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
})

module.exports = router;