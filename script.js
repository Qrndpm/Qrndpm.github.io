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
   var indexCar = Math.floor(Math.random() * my_JSON_object['caracteres'].length);
   element.innerHTML = my_JSON_object['caracteres'][indexCar]['car'];
   var bonnereponse = Math.floor(Math.random() * 4);
   var bonBouton = document.getElementById('reponse'+bonnereponse);
   bonBouton.innerText = my_JSON_object['caracteres'][indexCar]['pinyin'];
   bonBouton.value = "Vrai";
   for (let i = 0; i<4; i++){
      let bouton;
      if(i!=bonnereponse){
         bouton = document.getElementById('reponse'+i);
         bouton.value = "Faux";
         do{
            n = Math.floor(Math.random() * my_JSON_object['caracteres'].length);
         }while(n==indexCar);
         bouton.innerText = my_JSON_object['caracteres'][n]['pinyin'];
      }
   }
}
