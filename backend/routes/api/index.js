const router = require("express").Router();

router.get("/hello", (req, res) => {
  res.send("<h1>Example route works good</h1>");
});

module.exports = router;