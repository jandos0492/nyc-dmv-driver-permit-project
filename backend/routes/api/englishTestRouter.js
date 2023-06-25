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
});

router.get("/english/:id", async (req, res) => {
  const questionId = req.params.id;
  try {
    const question = await EnglishTest.findByPk(questionId);

    if (!question) {
      return res.status(404).json({ message: "Question not found" });
    }
    res.json(question);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
 });

module.exports = router;