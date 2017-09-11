const router = require("express").Router();

router.use("/players", require("./playersRouter"));
// export
module.exports = router;
