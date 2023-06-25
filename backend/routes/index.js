const router = require("express").Router();

const apiEnglishRoute = require("./api/englishTestRouter");
const apiRussianRoute = require("./api/russianTestRouter");
router.use("/api", apiEnglishRoute);
router.use("/api", apiRussianRoute)

module.exports = router;