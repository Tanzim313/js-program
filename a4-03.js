function  bestTeam( player1, player2 ) {
          // You have to write your code here

          let totalplayer1 = player1.foul + player1.cardY + player1.cardR;
          let totalplayer2 = player2.foul + player2.cardY + player2.cardR;

          if(typeof player1 != 'object'|| typeof player2 != 'object'){
            return "Invalid";
          }
          else if(totalplayer1<totalplayer2){
             return player1.name;
          }
          else if(totalplayer2<totalplayer1){
            return player2.name;
          }
          else if(totalplayer1 == totalplayer2){
            return "Tie";
          }

}

res = bestTeam({ name: "Germany", foul: 10, cardY: 1, cardR: 1 },"France");
console.log(res);

