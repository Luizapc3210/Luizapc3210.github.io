	
  function clicou(){
      const image = document.querySelector("img");
      const mySrc = image.getAttribute("src"); //aqui tinha ==
  
      console.log(mySrc);

      if (mySrc === "imagens/tordo.webp"){ //aqui tem que comparar o atributo src
        window.location.href = "html/categoria.html";
      } 
      else{
        image.setAttribute("src", "imagens/flecha-ico.png");
      }
   }