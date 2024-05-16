
var images = new Array("risotto.jpg", "tomkha.jpg", "Carbonara.jpg", "dhal.jpg"), i = 0; 

function slide() 
{ 
  document.getElementById("slideshow").src = images[i]; 
  if (i < images.length - 1) 
  
   i++; 

  else 
    i = 0; 
    setTimeout("slide()", 2000);
    
} 
window.onload=slide; 