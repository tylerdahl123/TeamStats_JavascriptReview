const team = {
    _players:[
      {
        firstName: 'Tom',
        lastName: 'Brady',
        age: '43'
       },

       {
        firstName: 'Rob',
        lastName: 'Gronkowski',
         age: '31',
       },

       {
           firstName: 'Tyler',
           lastName: 'Dahlgren',
           age: '25',
       }
    ],
    _games:[
        {
            opponent: 'Kansas City',
            teamPoints: 21,
            opponentPoints: 3,
        },
        {
            opponent: 'Washington Football Team',
            teamPoints: 69,
            opponent: 21,
        },
        {
            opponent: 'LA Rams',
            teamPoints: 420,
            opponent: 69,
        }
    ],
    get _players(){
        return this._players;
    },
    get _games(){
        return this._games;
    }
  };