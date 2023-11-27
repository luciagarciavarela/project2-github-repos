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
      textBg.innerHTML = "BANGTAN" 
    };
  }

  
  setInterval(changeBackgroundColor, 100);
  setInterval(changeBackgroundText, 400);