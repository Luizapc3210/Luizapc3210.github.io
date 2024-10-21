	
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

        function abrirPagina() {
            var menu = document.getElementById("menu");
            var pagina = menu.value;
            if (pagina && pagina != 'Categorias') {
                window.location.href = pagina; // Redireciona para a página selecionada
            }
        }

