function testJSON(){
   var request = new XMLHttpRequest();
   request.open("GET", "list.json", false);
   request.send(null)
   var my_JSON_object = JSON.parse(request.responseText);
   console.log(my_JSON_object);
}
