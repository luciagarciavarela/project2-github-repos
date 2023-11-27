let button= document.getElementById('guess-btn');
button.onclick= function(e) {
  e.preventDefault();
    corregirTest(e); 
};

function corregirTest() {
    // Respuestas correctas
    const respuestasCorrectas = {
      P1: 'Rap Monster',
      P2: 'Jungkook',
      P3: 'Jin',
      P7: ['V'],
      P4: 'Suga',
      P5: 'Rap Monster',
      P6: ['Jin'],
      P8: 'No More Dreams',
      P9: 'Euphoria',
      P10:'Wings',
      P11:'2018',
      P12:'Waiting For Love',
      P13:'Halsey',
      P14:'Nicky Minaj',
      P15:'Negro',
      P16:'Worldwide Handsome',
      P17:'Jungkook',
      P18:'Adorable Representative M.C. for Youth'

    };
  
    const respuestasUsuario = {};
    const formElements = document.getElementById('testForm').elements;

    for (let i = 0; i < formElements.length; i++) {
      const element = formElements[i];

      if (element.type === 'checkbox' && element.checked) {
        if (!respuestasUsuario[element.name]) {
          respuestasUsuario[element.name] = [];
        }
        respuestasUsuario[element.name].push(element.value);
      } else if (element.type === 'radio' && element.checked) {
        respuestasUsuario[element.name] = element.value;
      } else if (element.type === 'text') {
        respuestasUsuario[element.name] = element.value;
      } else if (element.type === 'select-one') {
        respuestasUsuario[element.name] = element.value;
      }
    }

    let puntuacion = 0;

    for (const pregunta in respuestasCorrectas) {
      const respuestasCorrectasArray = respuestasCorrectas[pregunta];
      const respuestasUsuarioArray = respuestasUsuario[pregunta];

      if (
        (Array.isArray(respuestasCorrectasArray) && Array.isArray(respuestasUsuarioArray) &&
        respuestasCorrectasArray.length === respuestasUsuarioArray.length &&
        respuestasCorrectasArray.every((respuesta) => respuestasUsuarioArray.includes(respuesta))) ||
        respuestasCorrectasArray === respuestasUsuarioArray
      ) {
        puntuacion++;
      }
    }
    let mensaje= `Tu puntuación es: ${puntuacion}/${Object.keys(respuestasCorrectas).length}`
// Confirmar antes de redirigir
  let confirmacion = confirm('Si continuas no podrás modificar tus respuestas. ¿Estás seguro de que deseas continuar?');

  if (confirmacion) {
    // Redirigir a la otra página y pasar el mensaje como parámetro
    window.location.href = 'Gracias.html?puntuacion=' + encodeURIComponent(mensaje);
}

    return false; // Evita que el formulario se envíe realmente 
    
  }



   // Changes the color of the background using STYLE
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
    
    setInterval(changeBackgroundColor, 50);
    setInterval(changeBackgroundText, 300);