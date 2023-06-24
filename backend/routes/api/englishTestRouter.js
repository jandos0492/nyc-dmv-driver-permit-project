const router = require("express").Router();
const { EnglishTest } = require("../../db/models/");

router.get("/english", async (req, res) => {
  try {
    const englishTest = await EnglishTest.findAll();
    res.json(englishTest);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
})

module.exports = router;