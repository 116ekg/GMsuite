const axios = require("axios");
const db = require("../db");
const headerAuth = require("../../headerAuth");
const circularJSON = require("circular-json");
const apiKey = require("../../apiKey");

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
  getCollegeRPGandPPG: (req, res) => {
    db.SixteenSeventeenNCAAPlayer
      .findAll({
        attributes: [
          "ppg",
          "rebpg",
          "firstName",
          "lastName",
          "id",
          "position",
          "astpg",
          "stlpg",
          "blkpg",
          "mpg",
          "twoPtPct",
          "threePtPct",
          "gamesPlayed",
          "fgPct",
          "freeThrowPct",
          "topg",
          "fgAtt",
          "threePtAtt",
          "ppg",
          "rebpg",
          "jerseyNumber",
          "profilepic"
        ]
      })
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
  },
  getCollegeStatComparison: (req, res) => {
    console.log("THIS IS STAT #1: ", req.query.statOne);
    console.log("THIS IS STAT #2: ", req.query.statTwo);
    db.SixteenSeventeenNCAAPlayer
      .findAll({
        attributes: [
          req.query.statOne,
          req.query.statTwo,
          "firstName",
          "lastName",
          "id",
          "position",
          "astpg",
          "stlpg",
          "blkpg",
          "mpg",
          "twoPtPct",
          "threePtPct",
          "gamesPlayed",
          "fgPct",
          "freeThrowPct",
          "topg",
          "fgAtt",
          "threePtAtt",
          "ppg",
          "rebpg",
          "jerseyNumber",
          "profilepic"
        ]
      })
      .then(data => {
        res.status(200).send(data);
      })
      .catch(err => {
        res.status(500).send(err);
      });
  },
  updateNbaPlayers: (req, res) => {
    axios
      .get(
        `https://api.sportradar.us/nba/trial/v4/en/players/37fbc3a5-0d10-4e22-803b-baa2ea0cdb12/profile.json?api_key=${apiKey}`
      )
      .then(data => {
        console.log("UPDATEPLAYERS DATA: ", data);
        res.status(200).send(circularJSON.stringify(data));
      })
      .catch(err => {
        console.log(err);
        res.status(500).send(err);
      });
  },
  getCollegeTeams: (req, res) => {
    axios
      .get(
        `https://api.sportradar.us/ncaamb-t3/seasontd/2016/REG/standings.json?api_key=${apiKey}`
      )
      .then(data => {
        res.status(200).send(circularJSON.stringify(data));
        var teamList = data.data.conferences[38].teams;
        teamList.forEach(data => {
          console.log("TEAMS: ", data);
          db.SixteenSeventeenNCAATeams
            .findOrCreate({
              where: {
                radarId: data.id,
                name: data.name,
                market: data.market
              }
            })
            .spread((newTeam, created) => {
              if (created) {
                res.send(newTeam);
                console.log("Successfully created team");
              } else {
                res.send("Team already exist in db");
                console.log("Team already exist in db");
              }
            });
        });
      })
      .catch(err => {
        console.log(err);
      });
  },
  getCollegeStats: (req, res) => {
    axios
      .get(
        `https://api.sportradar.us/ncaamb-t3/seasontd/2016/REG/teams/e52c9644-717a-46f4-bf16-aeca000b3b44/statistics.json?api_key=${apiKey}`
      )
      .then(data => {
        res.status(200).send(circularJSON.stringify(data));
        console.log("PLAYER DATA: ", data.data.players);
        var playerList = data.data.players;
        playerList.forEach(data => {
          console.log("PLAYER DATA: ", data);
          db.SixteenSeventeenNCAAPlayer
            .findOrCreate({
              where: {
                teamName: "Jayhawks",
                teamMarket: "Kansas",
                firstName: data.first_name,
                lastName: data.last_name,
                position: data.position,
                jerseyNumber: data.jersey_number,
                ppg: data.average.points,
                rebpg: data.average.rebounds,
                astpg: data.average.assists,
                stlpg: data.average.steals,
                blkpg: data.average.blocks,
                mpg: data.average.minutes,
                twoPtPct: data.total.two_points_pct,
                threePtPct: data.total.three_points_pct,
                gamesPlayed: data.total.games_played,
                fgPct: data.total.field_goals_pct,
                freeThrowPct: data.total.free_throws_pct,
                topg: data.average.turnovers,
                radarId: data.id,
                fgAtt: data.average.field_goals_att,
                threePtAtt: data.average.three_points_att
              }
            })
            .spread((newPlayer, created) => {
              if (created) {
                res.send(newPlayer);
                console.log("Successfully created team");
              } else {
                res.send("Team already exist in db");
                console.log("Team already exist in db");
              }
            });
        });
      })
      .catch(err => {
        res.status(500).send(err);
        console.log(err);
      });
  },
  editPlayer: (req, res) => {
    db.SixteenSeventeenNCAAPlayer
      .update(
        {
          height: req.body.height,
          weight: req.body.weight,
          profilepic: req.body.profilepic,
          teamName: req.body.teamName,
          teamMarket: req.body.teamMarket
        },
        {
          where: { lastName: req.body.lastName, firstName: req.body.firstName },
          returning: true
        }
      )
      .then(update => {
        res.status(200).send(update);
      })
      .catch(err => {
        res.status(500).send(err);
      });
  }
};
