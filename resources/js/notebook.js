import { blue } from "ansi-colors";

window.onload = function() {
	var canvas = document.getElementById('notebook');
	console.log('loaded');
	if (canvas.getContext) {
		var ctx = canvas.getContext('2d'),
			grid = {
				w: 20,
				h: 20,
				x: 0,
				y: 0,
				color: function(team) {
					return team ? 'red' : blue;
				},
				draw: function() {
					var gridX = Math.floor(this.x / 20) * 20,
						gridY = Math.floor(this.y / 20) * 20;

					clear();
					ctx.fillStyle = this.color(1);
					ctx.fillRect(gridX, gridY, this.w, this.h);
				}
			},
			area = {
				x: 0,
				y: 0,
				w: 20,
				h: 20,
				gridX: 0,
				gridY: 0,
				orientation: 1,
				changed: false,
				getGrids: function(x, y) {
					var oldX = this.gridX,
						oldY = this.gridY;
					this.gridX = Math.floor(x / 20) * 20 + 20,
					this.gridY = Math.floor(y / 20) * 20 + 20;

					if (oldX !== this.gridX || oldY !== this.gridY) {
						this.changed = true;
					} else {
						this.changed = false;
					}
				},
				draw: function(x, y, die1, die2) {
					this.w = this.orientation ? die1 * 20 : die2 * 20;
					this.h = this.orientation ? die2 * 20 : die1 * 20;
					ctx.fillStyle = 'red';
					ctx.fillRect(this.gridX-this.w, this.gridY-this.h, this.w, this.h);
				}
			},
			clear = function () {
				ctx.fillStyle = 'rgba(255, 255, 255, 1)';
				ctx.fillRect(0, 0, canvas.width, canvas.height);
				ctx.fillStyle = 'rgb(200, 0, 0)';
				for (let index = 0; index <= canvas.clientWidth / 20; index++) {
					for (let hindex = 0; hindex <= canvas.clientHeight / 20; hindex++) {
						ctx.fillRect(index * 20 - 1, hindex * 20 - 1, 2, 2);
					}
				}
			},
			raf,
			main = function () {
				console.log('drawing');
				grid.draw();
			};


		canvas.addEventListener('mousemove', function (e) {
			area.getGrids(this.x, this.y);
			if (area.changed) {
				area.draw(this.x, this.y, 3, 6);
			}


			area.getGrids(e.offsetX, e.offsetY);
			if (area.changed) {
				console.log('changed');
				area.draw(3,6);
				raf = window.requestAnimationFrame(main);
			}
		});

		document.addEventListener('keydown', function(e){
			if ( 'w' === e.key) {
				area.orientation = !area.orientation;
				raf = window.requestAnimationFrame(main);
			}
		});


		raf = window.requestAnimationFrame(main);

		// console.log(ctx, canvas.clientWidth, canvas.clientHeight);
		// ctx.fillRect(10, 10, 50, 50);

		// ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
		// ctx.fillRect(30, 30, 50, 50);
		// drawing code here
	} else {
		console.error('Canvas not supported.');
		// canvas-unsupported code here
	}
};
