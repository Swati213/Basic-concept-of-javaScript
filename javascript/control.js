document.write("<h2>If else contrlstatement</h2>");
//find whether the number is even or odd

var x = 6;
if (x % 2== 0) {
  document.write("<h3>even</h3>");
} else {
  document.write("<h3>odd</h3>");
}

//find if a number is positive,negativeor zero

var a = -88;
if (a > 0) {
  document.write("<h3>positive</h3>");
} else if (a < 0) {
  document.write("<h3>negative</h3>");
} else {
  document.write("<h3>zero</h3>");
}

//find if a number is positive and even

/*
 y=87;
if(y>0)
 {
    document.write("<h3> positive </h3>")
     if(y%2==0){
       document.write("<h3> even </h3>")
 
    }else{
        document.write("<h3> positive  but it is odd</h3>")

    }

 }else {
   document.write("<h3>number is negative</h3>")
 }
 */
var y = 78;
if(y>0 && y%2==0){
    document.write("<h3> positive and even </h3>")

}else if(y>0 && y%2!=0)
{
    document.write("<h3> positive and odd </h3>")

}else{
    document.write("<h3> negative </h3>")

}
   
