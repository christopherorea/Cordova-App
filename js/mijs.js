//guarda el participante de manera local
var formulario = document.querySelector("#formPart");

formulario.addEventListener('submit', function(){

	var participante = document.querySelector('#addpart').value;

	if(participante.length >= 1){
		localStorage.setItem(participante, participante);
	}
});


//añade un jugador a una lista para jugar
var jug = document.querySelector('#jugadores');
for(var i in localStorage){
	if(typeof localStorage[i] == 'string'){
		var li = document.createElement("li");
		var but = document.createElement("button");
		but.innerText = "x";
		but.className = "mio";
		but.setAttribute("type", "submit");
		but.setAttribute("data", localStorage[i]);
		li.append(localStorage[i]);	
		li.appendChild(but);
		jug.append(li);
		but.addEventListener("click", ()=>{
			localStorage.removeItem(but.getAttribute("data"));
			location.reload();
		});
	}
}

//aqui me da el valor de jugador para jugar
var players = document.getElementsByClassName("mio");
var num = (Math.ceil(Math.random()*10)) % players.length;
//console.log(players[num].getAttribute("data"));

//aqui inicia el juego de piedra papel o tijera
var inicio =  document.querySelector("#inicio");
var ocultar = document.getElementsByClassName("ocultar");
var juego = document.getElementById("juego");
var ppt = document.getElementById("ppt");

if (players.length > 0){
	inicio.addEventListener("click", ()=>{
		ocultar[0].style.display = "none";
		ocultar[1].style.display = "none";
		ppt.style.display = "block";
		var p = document.createElement("p");
		p.innerText = "player: " + players[num].getAttribute("data");
		ppt.append(p);
		var comp = (Math.ceil(Math.random()*10)) % 3;
		//0 piedra 1 papel 2 tijera
		var piedra = document.getElementById("piedra");
		var papel = document.getElementById("papel");
		var tijera = document.getElementById("tijera");
		p = document.createElement("p");
		p.className = "big";
		piedra.addEventListener("click", ()=>{
			ppt.style.display = "none";
			reinicio.style.display = "block";
			console.log("piedra escogida");
			console.log(comp + " 0 piedra, 1 papel, 2 tijera");
			if (comp == 0) {
				console.log("empate");
				p.innerText = "Rock -Computer Choose Rock -Tie";
			}
			else if (comp == 1) {
				console.log("perdiste");
				p.innerText = "Rock -Computer Choose Paper -Lose";
			}
			else{
				console.log("ganaste");
				p.innerText = "Rock -Computer Choose Sissors -Winner";
			}
			juego.appendChild(p);
		});
		papel.addEventListener("click", ()=>{
			ppt.style.display = "none";
			reinicio.style.display = "block";
			console.log("papel escogida");
			console.log(comp+ " 0 piedra, 1 papel, 2 tijera");
			if (comp == 0) {
				console.log("ganaste");
				p.innerText = "Paper -Computer Choose Rock -Winner";
			}
			else if (comp == 1) {
				console.log("empate");
				p.innerText = "Paper -Computer Choose Paper -Tie";
			}
			else{
				console.log("perdiste");
				p.innerText = "Paper -Computer Choose Sissors -Lose";
			}
			juego.appendChild(p);
		});
		tijera.addEventListener("click", ()=>{
			ppt.style.display = "none";
			reinicio.style.display = "block";
			console.log("tijeras escogida");
			console.log(comp + " 0 piedra, 1 papel, 2 tijera");
			if (comp == 0) {
				console.log("perdiste");
				p.innerText = "Sissors -Computer Choose Rock -Lose";
			}
			else if (comp == 1) {
				console.log("ganaste");
				p.innerText = "Sissors -Computer Choose Paper -Winner";
			}
			else{
				console.log("empate");
				p.innerText = "Sissors -Computer Choose Sissors -Tie";
			}
			juego.appendChild(p);
		});
		var reinicio = document.createElement("button");
		reinicio.style.display = "none";
		reinicio.innerText = "Play Again";
		juego.appendChild(reinicio);
		var br = document.createElement("br");
		juego.append(br);
		reinicio.addEventListener("click", ()=>{
			location.reload();
		});
	});
}
