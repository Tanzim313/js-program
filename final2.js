function totalFine( fare ) {
          // You have to write your code here
          if(fare>0 && typeof fare == 'number'){
            let fine = fare + fare *(0.2)+30;
            return fine;
          }
          else{
            return "Invalid";
          }
}

function  onlyCharacter( str ) {
          // You have to write your code here

          if( typeof str != 'string'){
            return "Invalid";
          }
          else{
            x = str.split(' ').join('').toUpperCase();
            return x;
        }
}

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

function  isSame(arr1 , arr2 ) {
          // You have to write your code here

          if(arr1.length == arr2.length){
            let c=0;
            for(i=0;i<arr1.length;i++){
                if(arr1[i]!== arr2[i]){
                    c++;
                }
            }
            if(c==0){
                return true;
            }
            else{
                return false;
            }
          }
          else if(!Array.isArray(arr1) || !Array.isArray(arr2)){
              return "Invalid";
          }
        return false;
}


function  resultReport( marks ) {
          // You have to write your code here

        if(!Array.isArray(marks)){
            return "Invalid";
          }
        else{
            let pass = 0,fail = 0,total =0 ,average = 0;

            for(i=0;i<marks.length;i++){
                
                total +=marks[i];
                average = Math.round(total/marks.length);

                if(marks[i]>=40){
                    pass++;
                }
                else{
                    fail++;
                }
            }

        let result = {
                finalScore: average,
                pass : pass,
                fail : fail
            };

            return result;
        }

}


