  // Función para obtener el valor de un parámetro en la URL
  function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

// Obtener el mensaje de la URL
var mensaje = getParameterByName('puntuacion');
// Obtener la lista existente por su ID 

var listaElement = document.getElementById('lista');

// Crear un elemento de lista y agregar el mensaje
var mensajeElement = document.createElement('li');
mensajeElement.textContent = mensaje;

// Agregar el elemento de lista a la lista
listaElement.appendChild(mensajeElement);


   // Cambiamos el color aleatoriamente
   function generateRandomColor() {
    return '#'+Math.floor(Math.random()*16777215).toString(16);
  }
function changeBackgroundColor() {
      var colorBg =   document.getElementById("color-overlay")
      colorBg.style.backgroundColor = generateRandomColor();
    }
    
    function changeBackgroundText() {
      var textBg = document.getElementById("text-bg")
      if (textBg.innerHTML == "BANGTAN") {
        textBg.innerHTML = "BOYS"   
      } else if (textBg.innerHTML == "BOYS") {
        textBg.innerHTML = "TEST" 
      } else if (textBg.innerHTML == "TEST") {
        textBg.innerHTML = "BANGTAN" 
      };
    }

    var intento=1;
      // Función para cambiar la imagen de la pagina
    function changeImagen() {
      // Obtener la lista existente por su ID 
      var discoBoxes = document.getElementById("imagen");
         // Cambiamos la imagen
       if(intento==1){
        discoBoxes.src= "https://6.soompi.io/wp-content/uploads/image/20230609044433_20230609042256_bts-2.jpeg?s=900x600&e=t";
        intento++;
       }else if(intento==2){
        discoBoxes.src= "https://febreteen.com.br/wp-content/uploads/2022/05/bts-7-fates.jpg";
        intento++;
        }else if(intento==3){
        discoBoxes.src= "https://pbs.twimg.com/media/D6nF3bKVUAAvcCY.jpg";
        intento++;
          
        }else if(intento==4){
          discoBoxes.src= "https://0.soompi.io/wp-content/uploads/sites/8/2016/06/03160650/bts-family-2.jpg?s=900x600&e=t";
          intento++;
          }else if(intento==5){
            discoBoxes.src= "https://pbs.twimg.com/media/EEjblUGU8AAyJek.jpg";
            intento++;
            }else{
              /*Si quisieramos volver a la original
       discoBoxes.src="https://pbs.twimg.com/media/FhkhToxXkAEO6ss.jpg:large";*/
       intento=1;
      }
    } 
    
    
    setInterval(changeBackgroundColor, 50);
    setInterval(changeBackgroundText, 300);
    setInterval(changeImagen, 800);

    