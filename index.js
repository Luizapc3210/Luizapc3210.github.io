const myHeading = document.querySelector("h1");
myHeading.textContent = "Jogos Vorazes: Uma análise por trás da Jornada da Heroína de Katniss Everdeen";

function goToPage() {
  window.location.href = 'file:///C:/Users/User/OneDrive/Desktop/Projeto-web/teste-site/index2.html';
}

alert("Bem vindo!");

document.querySelector("html").addEventListener("click", function(){

});
	
const image = document.querySelector("img")

image.onclick = () => {
	const mySrc = image.getAttribute("src"); //aqui tinha ==
	if (mySrc === "imagens/revolucao.jpg"){ //aqui tem que comparar o atributo src
		image.setAttribute("src", "imagens/trono.jpg");
	} 
	else if(mySrc === "imagens/revolucao.jpg"){
		image.setAttribute("src", "imagens/trono.jpg");
	}
	else{
		image.setAttribute("src", "imagens/revolucao.jpg");
	}
};