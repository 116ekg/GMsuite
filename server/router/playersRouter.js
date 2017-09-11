const router = require("express").Router();
const controller = require("../controller/playerController");

router.get("/getAllPlayers", controller.getAllPlayers);
router.get("/getTeamPlayers", controller.getTeamPlayers);
router.get("/getRPGandPPG", controller.getRPGandPPG);
router.get("/getStatComparison", controller.getStatComparison);

module.exports = router;
