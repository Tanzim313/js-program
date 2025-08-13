function  isSame(arr1 , arr2 ) {
          // You have to write your code here

          if(arr1.length == arr2.length){
            var c=0;
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
          else if(typeof arr1 != 'array' || typeof arr2 != 'array'){
              return false;
          }
}

res = isSame([1,2, 3,], [1 , 2 , 3]);
console.log(res);

