const team = {
    _players:[
      {
        firstName: 'Tom',
        lastName: 'Brady',
        age: 43
       },

       {
        firstName: 'Rob',
        lastName: 'Gronkowski',
         age: 31,
       },

       {
           firstName: 'Tyler',
           lastName: 'Dahlgren',
           age: 25,
       }
    ],
    _games:[
        {
            opponentsName: 'Kansas City',
            teamPoints: 21,
            opponentPoints: 3,
        },
        {
            opponentsName: 'Washington Football Team',
            teamPoints: 69,
            opponentPoints: 21,
        },
        {
            opponentsName: 'LA Rams',
            teamPoints: 420,
            opponentPoints: 69,
        }
    ],
    get players(){
        return this._players;
    },
    get games(){
        return this._games;
    },
    addPlayer (firstName, lastName, age) {
        let player = {
            firstName: firstName,
            lastName: lastName,
            age: age
        }
        this.players.push(player)
    },
    addGame (opponentsName, teamPoints, opponentPoints){
            let game = {
                opponentsName: opponentsName,
                teamPoints: teamPoints,
                opponentPoints: opponentPoints
            }
            this.games.push(game);
    }
  };

  team.addPlayer('Steph', 'Curry', 28);
  team.addPlayer('Lisa', 'Leslie', 44);
  team.addPlayer('Bugs', 'Bunny', 76);
  team.addGame('Broncos', 45, 21);
  team.addGame('Steelers', 69, 420);



  console.log(team._players);
  console.log(team._games);