//add two numbers and print their resultin function

function addNumber(){
    var a=3;
    var b=7;
    var total=a+b;
    document.write("<h3>The total is:"+total+"</h3>");
}
addNumber();//function call

//pass value through parameter
function addNumber1(a,b){
    var total=a+b;
    document.write("<h3>The total is:"+total+"</h3>");
}
addNumber1(6,9);//function call

//with return type

function addNumber2(a,b){
    var total=a+b;
    return total;
}
var output=addNumber2(6,9);//function call
document.write("<h3>The total is:"+output+"</h3>");
