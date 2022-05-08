function Monstre() {
	this.element = monstre.cloneNode(true);

	this.top = Math.floor(Math.random()*(terrainH-monstreH));
	this.right = Math.floor(Math.random()*(terrainW-monstreW));
	this.element.style.top = this.top + "px";
	this.element.style.right = this.right + "px";
	this.element.id = "monstre" + n;
	n++;
	this.element.toMonstre = this;
	terrain.appendChild(this.element);

	let element = this.element
	this.angryTimer = setTimeout(function(){
		if (kill) 
			element.style.backgroundImage = "url('./img/monstre2.png')";
		
	}, 3500);
	
	this.timer = setTimeout(function(){
			if (kill) {
				alert('Fin du jeu !' + " Votre score est de " + nbScore + " pts!");
				kill = false;
				window.location.reload();
			}
		}, 5000);

		element.addEventListener('click', function(){
				clearTimeout(this.toMonstre.timer);
				this.remove();
				nbScore++;
				points.textContent = nbScore


			});
}