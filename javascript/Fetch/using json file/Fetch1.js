//usung promises fetch()

let btn = document.getElementById("btn").addEventListener("click", makerequest);

// function makerequest() {
//   console.log("button clicked");
//   const promiseobj = fetch("data.txt")
//   console.log(promiseobj)
//   promiseobj.then((res)=>{console.log(res); return res.text()}).
//   then((data)=>{console.log(data)})
// }
// function makerequest() {
    
//         console.log("button clicked");
//          fetch("data.txt").then((res)=>{
//             console.log(res);
//              return res.text()
//          }).then((data)=>{
//              console.log(data)
//             })
//          }

// function makerequest() {
    
//     console.log("button clicked");
//      fetch("data.txt").then((res)=>{
//          if(!res.ok){
//              throw Error(res.statusText);
//          }
//         console.log(res);
//          return res.text()
//      }).then((data)=>{
//          console.log(data)
//         }).catch((error)=>{console.log(error);})
//      }

//show data in a browser
function makerequest() {
    
    console.log("button clicked");
     fetch("data.json").then((res)=>{
         if(!res.ok){
             throw Error(res.statusText);
         }
        console.log("res",res);
         const dt=res.json()
         console.log("dt",dt);
         return dt
     }).then((data)=>{
         console.log(data)
         document.getElementById('data').innerText=data.name
         document.getElementById('data2').innerText=data.rollno

        }).catch((error)=>{console.log(error);})
     }

