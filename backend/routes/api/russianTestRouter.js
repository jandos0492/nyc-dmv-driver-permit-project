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
});

router.get("/russian/:id", async (req, res) => {
  const questionId = req.params.id;
  try {
    const question = await RussianTest.findByPk(questionId);

    if (!question) {
      return res.status(404).json({ message: "Question not found"});
    }

    res.json(question);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;