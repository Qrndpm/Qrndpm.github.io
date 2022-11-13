function testJSON(){
   var request = new XMLHttpRequest();
   request.open("GET", "list.json", false);
   request.send(null)
   var my_JSON_object = JSON.parse(request.responseText);
   console.log(my_JSON_object);
   /**console.log(my_JSON_object[0]);
   console.log(my_JSON_object[0].['car']);
   console.log(my_JSON_object[0].['pinyin']);
   console.log(my_JSON_object[1]);
   console.log(my_JSON_object[2]);
   console.log(my_JSON_object.length)*/
   var element = document.getElementById('car');
   element.TEXT_NODE = "TEST";
}
