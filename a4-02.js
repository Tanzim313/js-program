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

console.log(onlyCharacter(true));

