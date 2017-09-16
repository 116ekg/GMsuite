const Sequelize = require("sequelize");
const db = require("./config");

const Players = db.define("player", {
  firstName: { type: Sequelize.STRING, allowNull: false },
  lastName: { type: Sequelize.STRING, allowNull: false },
  position: { type: Sequelize.STRING, allowNull: false },
  teamId: { type: Sequelize.STRING, allowNull: true },
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

const Teams = db.define("team", {
  name: { type: Sequelize.STRING, allowNull: true },
  teamAbb: { type: Sequelize.STRING, allowNull: true },
  astpg: { type: Sequelize.FLOAT, allowNull: true },
  astToRatio: { type: Sequelize.FLOAT, allowNull: true },
  blkpg: { type: Sequelize.FLOAT, allowNull: true },
  defRebpg: { type: Sequelize.FLOAT, allowNull: true },
  offRebpg: { type: Sequelize.FLOAT, allowNull: true },
  fastBreakPtspg: { type: Sequelize.FLOAT, allowNull: true },
  fgPct: { type: Sequelize.FLOAT, allowNull: true },
  freeThrowAttpg: { type: Sequelize.FLOAT, allowNull: true },
  ppg: { type: Sequelize.FLOAT, allowNull: true },
  ptsInPaintpg: { type: Sequelize.FLOAT, allowNull: true },
  ptsOffTopg: { type: Sequelize.FLOAT, allowNull: true },
  rebpg: { type: Sequelize.FLOAT, allowNull: true },
  secondChancePtspg: { type: Sequelize.FLOAT, allowNull: true },
  stlpg: { type: Sequelize.FLOAT, allowNull: true },
  threePtPct: { type: Sequelize.FLOAT, allowNull: true },
  topg: { type: Sequelize.FLOAT, allowNull: true },
  twoPtPct: { type: Sequelize.FLOAT, allowNull: true },
  roster: { type: Sequelize.ARRAY(Sequelize.INTEGER), allowNull: true }
});

const Injury = db.define("injury", {
  description: { type: Sequelize.TEXT, allowNull: true },
  status: { type: Sequelize.TEXT, allowNull: true }
});

const SixteenSeventeenContract = db.define("sixteen-seventeen-contract", {
  yearOne: { type: Sequelize.FLOAT, allowNull: true },
  yearTwo: { type: Sequelize.FLOAT, allowNull: true },
  yearThree: { type: Sequelize.FLOAT, allowNull: true },
  yearFour: { type: Sequelize.FLOAT, allowNull: true },
  yearFive: { type: Sequelize.FLOAT, allowNull: true }
});

const SixteenSeventeenNCAAPlayer = db.define("sixteen-seventeen-ncaa-player", {
  firstName: { type: Sequelize.STRING, allowNull: true },
  lastName: { type: Sequelize.STRING, allowNull: true },
  position: { type: Sequelize.STRING, allowNull: true },
  height: { type: Sequelize.FLOAT, allowNull: true },
  weight: { type: Sequelize.FLOAT, allowNull: true },
  jerseyNumber: { type: Sequelize.STRING, allowNull: true },
  experience: { type: Sequelize.STRING, allowNull: true },
  notes: { type: Sequelize.ARRAY(Sequelize.TEXT), allowNull: true },
  ppg: { type: Sequelize.FLOAT, allowNull: true },
  rebpg: { type: Sequelize.FLOAT, allowNull: true },
  astpg: { type: Sequelize.FLOAT, allowNull: true },
  stlpg: { type: Sequelize.FLOAT, allowNull: true },
  blkpg: { type: Sequelize.FLOAT, allowNull: true },
  mpg: { type: Sequelize.FLOAT, allowNull: true },
  twoPtPct: { type: Sequelize.FLOAT, allowNull: true },
  threePtPct: { type: Sequelize.FLOAT, allowNull: true },
  gamesPlayed: { type: Sequelize.INTEGER, allowNull: true },
  fgPct: { type: Sequelize.FLOAT, allowNull: true },
  freeThrowPct: { type: Sequelize.FLOAT, allowNull: true },
  topg: { type: Sequelize.FLOAT, allowNull: true },
  plusMinuspg: { type: Sequelize.FLOAT, allowNull: true },
  teamName: { type: Sequelize.STRING, allowNull: true },
  teamMarket: { type: Sequelize.STRING, allowNull: true },
  radarId: { type: Sequelize.STRING, allowNull: true },
  fgAtt: { type: Sequelize.FLOAT, allowNull: true },
  threePtAtt: { type: Sequelize.FLOAT, allowNull: true }
});

const Note = db.define("note", {
  text: { type: Sequelize.TEXT, allowNull: true },
  date: { type: Sequelize.DATE, allowNull: true }
});

const SixteenSeventeenNCAATeams = db.define("sixteen-seventeen-ncaa-team", {
  name: { type: Sequelize.STRING, allowNull: true },
  market: { type: Sequelize.STRING, allowNull: true },
  radarId: { type: Sequelize.STRING, allowNull: true },
  astpg: { type: Sequelize.FLOAT, allowNull: true },
  astToRatio: { type: Sequelize.FLOAT, allowNull: true },
  blkpg: { type: Sequelize.FLOAT, allowNull: true },
  defRebpg: { type: Sequelize.FLOAT, allowNull: true },
  offRebpg: { type: Sequelize.FLOAT, allowNull: true },
  fastBreakPtspg: { type: Sequelize.FLOAT, allowNull: true },
  fgPct: { type: Sequelize.FLOAT, allowNull: true },
  freeThrowAttpg: { type: Sequelize.FLOAT, allowNull: true },
  ppg: { type: Sequelize.FLOAT, allowNull: true },
  ptsInPaintpg: { type: Sequelize.FLOAT, allowNull: true },
  ptsOffTopg: { type: Sequelize.FLOAT, allowNull: true },
  rebpg: { type: Sequelize.FLOAT, allowNull: true },
  secondChancePtspg: { type: Sequelize.FLOAT, allowNull: true },
  stlpg: { type: Sequelize.FLOAT, allowNull: true },
  threePtPct: { type: Sequelize.FLOAT, allowNull: true },
  topg: { type: Sequelize.FLOAT, allowNull: true },
  twoPtPct: { type: Sequelize.FLOAT, allowNull: true },
  roster: { type: Sequelize.ARRAY(Sequelize.INTEGER), allowNull: true }
});

Teams.hasMany(Players);
Players.belongsTo(Teams);

SixteenSeventeenContract.belongsTo(Players, {
  through: SixteenSeventeenContract,
  foreignKey: { name: "playerId", unique: false }
});

Injury.belongsTo(Players, {
  through: Injury,
  foreignKey: { name: "playerId", unique: false }
});

Note.belongsTo(SixteenSeventeenNCAAPlayer, {
  through: Note,
  foreignKey: { name: "playerId", unique: false }
});

Players.sync();
Teams.sync();
Injury.sync();
SixteenSeventeenContract.sync();
SixteenSeventeenNCAAPlayer.sync();
Note.sync();
SixteenSeventeenNCAATeams.sync();
// Players.sync({ force: true }).then(() => {
//   console.log("Players table created");
//   return Players.bulkCreate([
//     { firstName: "Michael", lastName: "Griffin", position: "PG" }
//   ]);
// });

module.exports = {
  Players,
  Teams,
  Injury,
  SixteenSeventeenContract,
  SixteenSeventeenNCAAPlayer,
  Note,
  SixteenSeventeenNCAATeams
};
