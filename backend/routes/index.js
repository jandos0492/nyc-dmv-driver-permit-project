const router = require("express").Router();

const apiEnglishRoute = require("./api/englishTestRouter");
router.use("/api", apiEnglishRoute);

module.exports = router;