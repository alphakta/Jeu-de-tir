var nbScore = 0;

		var n = 1;
		var monstre = document.getElementById('monstre');
		var terrain = document.getElementById('terrain_de_jeu');
		var start = document.getElementById('btnStart');
		var points = document.querySelector('.pts')

		var monstreW = monstre.offsetWidth;
		var monstreH = monstre.offsetHeight;
		var terrainW = terrain.offsetWidth;
		var terrainH = terrain.offsetHeight;

		var monstreTop = Math.floor(Math.random() * (terrainH - monstreH));
		var monstreRight = Math.floor(Math.random() * (terrainW - terrainW));

		monstre.style.top = monstreTop + "px";
		monstre.style.right = monstreRight + "px";


		terrain.removeChild(monstre);
		var kill = true;
		var time = 0;
		var timerGlobal;

		function action() {
			time++;
			if (kill) {
				if (time % 2 == 0) {
					let m = new Monstre();
				}
				timerGlobal = setTimeout(action, 300);
			}
		}

		start.addEventListener('click', function(){
			action()
		});
