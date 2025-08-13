function  resultReport( marks ) {
          // You have to write your code here

        if(!Array.isArray(marks)){
            return "Invalid";
          }
        else{
            var pass = 0,fail = 0,total =0 ,average = 0;

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

            return{
                finalScore: average,
                pass : pass,
                fail : fail
            };
        }

}

console.log(resultReport([10,12,13,80]));

