let jsonobj={
    name:"Swati",
    desig:"Sodtware Developer",
    food:"chicken",
    channel:"thapa"
}
console.log(jsonobj);
let jsondata=JSON.stringify(jsonobj);
console.log(jsondata);

jsondata=jsondata.replace("chicken","bhindi");
console.log(jsondata);

let newjsonobj=JSON.parse(jsondata);
console.log(newjsonobj);