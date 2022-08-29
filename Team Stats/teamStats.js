const team = {
    _players: [
      {firstName: "Iago", lastName: "Aspas", age: 35},
      {firstName: "Renato",lastName: "Tapia", age: 28},
      {firstName: "Denis", lastName: "Suárez", age: 27}
    ],
    _games: [
      {opponent: "Girona", teamPoints: 3, opponentPoints: 0},
      {opponent: "Valencia", teamPoints: 1, opponentPoints: 1},
      {opponent: "Real Madrid", teamPoints: 0,opponentPoints: 3}
    ],
    getPlayers(){
      return this._players
    },
    getGames(){
      return this._games
    },
    addPlayer(newFirstName, newLastName, newAge){
      let player = {
        firstName: newFirstName,
        lastName: newLastName,
        age: newAge
      };
      this._players.push(player)
    },
    addGame(newOpponent, newTeamPoints, newOpponentPoints){
      let game = {
        opponent: newOpponent,
        teamPoints: newTeamPoints,
        opponentPoints: newOpponentPoints
      }
      this._games.push(game)
    }
    };
  
    team.addPlayer('Hugo', 'Mallo', 30)
    console.log(team._players)
  
    team.addGame('Titans', 100, 98)
    console.log(team._games)
  
  
  