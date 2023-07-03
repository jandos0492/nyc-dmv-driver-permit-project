const router = require("express").Router();

const apiEnglishRoute = require("./api/englishTestRouter");
const apiRussianRoute = require("./api/russianTestRouter");
const apiTrafficSignsRoute = require("./api/trafficSignsRouter");

router.use("/api", apiEnglishRoute);
router.use("/api", apiRussianRoute);
router.use("/api", apiTrafficSignsRoute);

module.exports = router;