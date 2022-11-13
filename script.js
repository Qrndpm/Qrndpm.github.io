function testJSON(){
   var request = new XMLHttpRequest();
   request.open("GET", "list.json", false);
   request.send(null)
   var my_JSON_object = JSON.parse(request.responseText);
   console.log(my_JSON_object);
   console.log(my_JSON_object['caracteres'][0]['pinyin']);
   console.log(my_JSON_object['caracteres'][1]['car']);
   console.log(my_JSON_object['caracteres'].length);
   var element = document.getElementById('car');
   element.innerHTML = my_JSON_object['caracteres'][1]['car'];
}
