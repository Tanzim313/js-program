/** Problem 04 - (Delete / Store) */
var fileName= "pdfData.jpg";
//write your code here

var x = fileName.split('.');
var z = x[x.length-1];
var y = fileName.slice(0,1);

if(z=="pdf"||z=="docx"||y=="#"){
    console.log("Store");
}
else{
    console.log("Delete");
}





