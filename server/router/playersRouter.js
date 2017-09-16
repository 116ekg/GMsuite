const router = require("express").Router();
const controller = require("../controller/playerController");

router.get("/getAllPlayers", controller.getAllPlayers);
router.get("/getTeamPlayers", controller.getTeamPlayers);
router.get("/getRPGandPPG", controller.getRPGandPPG);
router.get("/getCollegeRPGandPPG", controller.getCollegeRPGandPPG);
router.get("/getStatComparison", controller.getStatComparison);
router.get("/getCollegeStatComparison", controller.getCollegeStatComparison);
router.get("/updateNbaPlayers", controller.updateNbaPlayers);
router.get("/getCollegeTeams", controller.getCollegeTeams);
router.get("/getCollegeStats", controller.getCollegeStats);

module.exports = router;
