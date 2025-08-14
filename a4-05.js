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

console.log(resultReport(100));

