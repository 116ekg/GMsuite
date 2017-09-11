const Sequelize = require("sequelize");
const db = require("./config");

const Players = db.define("player", {
  firstName: { type: Sequelize.STRING, allowNull: false },
  lastName: { type: Sequelize.STRING, allowNull: false },
  position: { type: Sequelize.STRING, allowNull: false },
  team: { type: Sequelize.STRING, allowNull: true },
  mpg: { type: Sequelize.FLOAT, allowNull: true },
  gamesPlayed: { type: Sequelize.INTEGER, allowNull: true },
  twoPtPct: { type: Sequelize.FLOAT, allowNull: true },
  threePtPct: { type: Sequelize.FLOAT, allowNull: true },
  fgPct: { type: Sequelize.FLOAT, allowNull: true },
  freeThrowPct: { type: Sequelize.FLOAT, allowNull: true },
  rebpg: { type: Sequelize.FLOAT, allowNull: true },
  astpg: { type: Sequelize.FLOAT, allowNull: true },
  ppg: { type: Sequelize.FLOAT, allowNull: true },
  topg: { type: Sequelize.FLOAT, allowNull: true },
  stlpg: { type: Sequelize.FLOAT, allowNull: true },
  blkpg: { type: Sequelize.FLOAT, allowNull: true },
  plusMinuspg: { type: Sequelize.FLOAT, allowNull: true },
  draftPick: { type: Sequelize.STRING, allowNull: true },
  draftRound: { type: Sequelize.STRING, allowNull: true },
  experience: { type: Sequelize.STRING, allowNull: true },
  height: { type: Sequelize.STRING, allowNull: true },
  weight: { type: Sequelize.STRING, allowNull: true },
  age: { type: Sequelize.STRING, allowNull: true },
  college: { type: Sequelize.STRING, allowNull: true },
  picture: { type: Sequelize.STRING, allowNull: true }
});

Players.sync();
// Players.sync({ force: true }).then(() => {
//   console.log("Players table created");
//   return Players.bulkCreate([
//     { firstName: "Michael", lastName: "Griffin", position: "PG" }
//   ]);
// });

module.exports = {
  Players
};
