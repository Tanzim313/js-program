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

res = totalFine("Gorib tai ticket katinai");
console.log(res);

