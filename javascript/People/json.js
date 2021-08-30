var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       console.log(xhttp.responseText);
       var reponse=JSON.parse(xhttp.responseText);
       var people=reponse.people;
       var output='';
       for(var i=0;i<people.length;i++){
           output +='<li>' +people[i].name+'</li>';
       }
       document.getElementById('people').innerHTML=output;
    }
};
xhttp.open("GET", "people.json", true);
xhttp.send();
