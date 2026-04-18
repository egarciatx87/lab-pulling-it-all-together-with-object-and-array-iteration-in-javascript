function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evens": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            },
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismack Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Hayword": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
        },
    };
}

function numPointsScored(playerName) {
  const data = gameObject();
  // check if the name exists as a key in either object
  const homePlayer = data.home.players[playerName];
  const awayPlayer = data.away.players[playerName];

  if (homePlayer) {
    return homePlayer.points;
  } else if (awayPlayer) {
    return awayPlayer.points;
  } else {
    return 0;
  }
}

function shoeSize(playerName) {
  const data = gameObject();
  const homePlayer = data.home.players[playerName];
  const awayPlayer = data.away.players[playerName];

  if (homePlayer) {
    return homePlayer.shoe;
  } else if (awayPlayer) {
    return awayPlayer.shoe;
  } else {
    return 0;
  }
}

function teamColors(teamName) {
  const data = gameObject();
  const teams = [data.home, data.away];

  // .find() looks at each team object one by one
  const foundTeam = teams.find((team) => {
    if (team.teamName === teamName) {
      return true; // Stop here! We found it.
    }
  });

  if (foundTeam) {
    return foundTeam.colors;
  } else {
    return [];
  }
}

function teamNames() {
  const data = gameObject();
  const teams = [data.home, data.away];

  // .map() takes the whole team object and "extracts" just the name string
  return teams.map((team) => {
    return team.teamName;
  });
}

function playerNumbers(teamName) {
  const data = gameObject();
  let selectedTeam;

  if (data.home.teamName === teamName) {
    selectedTeam = data.home.players;
  } else {
    selectedTeam = data.away.players;
  }

  // Object.values() turns the stats into an array
  // .map() then goes through each one and returns just the number
  const playerStatsArray = Object.values(selectedTeam);
  
  return playerStatsArray.map((stats) => {
    return stats.number;
  });
}

function bigShoeRebounds() {
  const data = gameObject();
  
  // Combine all player stats into one big array
  const homeStats = Object.values(data.home.players);
  const awayStats = Object.values(data.away.players);
  const allPlayers = homeStats.concat(awayStats);

  // .reduce() compares players to find the "winner"
  const winner = allPlayers.reduce((maxPlayer, currentPlayer) => {
    if (currentPlayer.shoe > maxPlayer.shoe) {
      return currentPlayer; // This person is the new "max"
    } else {
      return maxPlayer; // Keep the old "max"
    }
  });

  return winner.rebounds;
}