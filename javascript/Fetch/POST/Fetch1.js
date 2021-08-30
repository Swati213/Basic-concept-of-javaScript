//usung promises fetch()

document.getElementById("btn").addEventListener("click", makerequest);

//show data in a browser
    function makerequest() {

    console.log("button clicked");
    const init={
        method:'POST',
        headers:{
            "Content-Type":"application/json"
        },
        body:'{"name":"sonam","job":"weDev"}'

    }
     fetch("https://reqres.in/api/users",init)
     .then((res)=> {
        if(!res.ok){
            throw Error(res.statusText);
        } 
    return res.json()
    }).then((data)=>{
           console.log(data)
    }).then((error)=>console.log(error))
    
    }

