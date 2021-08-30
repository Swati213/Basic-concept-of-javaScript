console.log("ajax tut");
 

let fetchBtn = document.getElementById("fetchBtn");
fetchBtn.addEventListener("click",buttonClickHandler)

function buttonClickHandler(){
    console.log("click the fetch button");
    //create  xhr object
    let xhr=new XMLHttpRequest();

    //open the object
    //GET REQUEST
    //xhr.open("GET","data.txt",true);
   // xhr.open("GET","https://jsonplaceholder.typicode.com/todos/1",true);
    //POSTRequest

    xhr.open("POST","https://dummy.restapiexample.com/api/v1/create",true);
    xhr.getResponseHeader('content-type','application/JSON');

    //to do on progress(optional)
    xhr.onprogress=function(){
        console.log("onprogress");
    }
    //onload readystate
    //xhr.onreadystatechange=function(){
    //    console.log("ready state is",xhr.readyState);
   // }
    //what to do response is ready
    xhr.onload =function(){
        if(this.status===200){
                console.log(this.responseText);
    
        }else{
            console.error("some error occured");
        }
    }
    //request is sent
   params=`{"name":"testing","salary":"123","age":"23"}`;
    
    xhr.send(params);
    console.log("we are done");
}
let popBtn = document.getElementById("popBtn");
popBtn.addEventListener("click", popClickHandler);

function popClickHandler(){
    console.log("click the pop button");

   //create  xhr object
   let xhr=new XMLHttpRequest();
   xhr.open("GET","https://jsonplaceholder.typicode.com/posts",true);

       xhr.onload =function(){
        if(this.status===200){
            let response=JSON.parse(this.responseText);
            console.log(response);
            let list=document.getElementById("list");
           str="";
           for(key in response){
              str +=`<ul>

              <li class="list-group-item >${response[key].title}</li>
              <li class="list-group-item >${response[key].body}</li>

              </ul>`;
           }
              list.innerHTML=str;
    
        }else{
            console.error("some error occured");
        }
    }
    //request is sent
    
    xhr.send();
    console.log("we are done");
   }
