	
  function clicou(){
      const image = document.querySelector("img");
      const mySrc = image.getAttribute("src");
  
      console.log(mySrc);

      if (mySrc === "imagens/tordo.webp"){
        window.location.href = "categoria.html";
      } 
      else{
        image.setAttribute("src", "imagens/flecha-ico.png");
      }
   }