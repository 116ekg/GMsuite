const axios = require("axios");
const db = require("../db");
const headerAuth = require("../../headerAuth");
const circularJSON = require("circular-json");

module.exports = {
  getAllPlayers: (req, res) => {
    var config = {
      auth: {
        username: "mikegriff3",
        password: "temecula1"
      }
    };
    axios
      .get(
        "https://api.mysportsfeeds.com/v1.1/pull/nba/2016-2017-regular/cumulative_player_stats.json?offset=350",
        config
      )
      .then(data => {
        var playerList = data.data.cumulativeplayerstats.playerstatsentry;
        playerList.forEach(data => {
          console.log(data.stats);
          db.Players
            .findOrCreate({
              where: {
                firstName: data.player.FirstName,
                lastName: data.player.LastName,
                position: data.player.Position,
                team: data.team.Abbreviation,
                gamesPlayed: data.stats.GamesPlayed["#text"],
                mpg: data.stats.MinSecondsPerGame["#text"],
                twoPtPct: data.stats.Fg2PtPct["#text"],
                threePtPct: data.stats.Fg3PtPct["#text"],
                fgPct: data.stats.FgPct["#text"],
                freeThrowPct: data.stats.FtPct["#text"],
                rebpg: data.stats.RebPerGame["#text"],
                astpg: data.stats.AstPerGame["#text"],
                ppg: data.stats.PtsPerGame["#text"],
                topg: data.stats.TovPerGame["#text"],
                stlpg: data.stats.StlPerGame["#text"],
                blkpg: data.stats.BlkPerGame["#text"],
                plusMinuspg: data.stats.PlusMinusPerGame["#text"]
              }
            })
            .spread((newPlayer, created) => {
              if (created) {
                res.send(newPlayer);
                console.log("Successfully created player");
              } else {
                res.send("Player already exist in db");
                console.log("Player already exist in db");
              }
            });
        });
      })
      .catch(err => {
        console.log(err);
        res.send(err);
      });
  },
  getTeamPlayers: (req, res) => {
    console.log("getTeamPlayers hitting");
    db.Players
      .findAll({
        where: {
          team: "LAL"
        }
      })
      .then(data => {
        res.status(200).send(data);
      })
      .catch(err => {
        res.status(400).send(err);
        console.log("ERROR IN TEAM PLAYERS: ", err);
      });
  },
  getRPGandPPG: (req, res) => {
    db.Players
      .findAll({ attributes: ["ppg", "rebpg", "firstName", "lastName"] })
      .then(data => {
        res.status(200).send(data);
      })
      .catch(err => {
        res.status(500).send(err);
        console.log(err);
      });
  },
  getStatComparison: (req, res) => {
    console.log("THIS IS STAT #1: ", req.query.statOne);
    console.log("THIS IS STAT #2: ", req.query.statTwo);
    db.Players
      .findAll({
        attributes: [
          req.query.statOne,
          req.query.statTwo,
          "firstName",
          "lastName"
        ]
      })
      .then(data => {
        res.status(200).send(data);
      })
      .catch(err => {
        res.status(500).send(err);
      });
  }
};
