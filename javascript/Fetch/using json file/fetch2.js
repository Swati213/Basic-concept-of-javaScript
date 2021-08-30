//using asyn & wait
let btn = document.getElementById("btn").addEventListener("click", makerequest);

//show data in a browser
async function makerequest() {
    try{
    console.log("button clicked");
     const res =await fetch("data.json")
     if(!res.ok){
        throw Error(res.statusText);
    }
     console.log(res);
     const data=await res.json()
     console.log(data);
   //   document.getElementById('data').innerText=data.title;
   //   document.getElementById('data2').innerText=data.userId;


     }catch(error){
        console.log(error);
     }
    }
