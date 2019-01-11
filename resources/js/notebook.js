import { blue } from "ansi-colors";

window.onload = function() {
	var canvas = document.getElementById('notebook');
	console.log('loaded');
	if (canvas.getContext) {
		var ctx = canvas.getContext('2d'),
			point = {
				x: 0,
				y: 0,
				w: 4,
				h: 4,
				color: 'red',
				reDraw: function () {
					clear();
					ctx.fillStyle = this.color;
					ctx.fillRect(this.x - 2, this.y - 2, this.w, this.h);
				}
			},
			grid = {
				w: 20,
				h: 20,
				x: 0,
				y: 0,
				color: function(team) {
					return team ? 'red' : blue;
				},
				draw: function(x, y) {
					clear();
					ctx.fillStyle = this.color(1);
					ctx.fillRect(Math.floor(x / 20) * 20, Math.floor(y / 20) * 20, this.w, this.h);
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
			};
			// raf;
			// main = function () {
			// 	raf = window.requestAnimationFrame(main);
			// };


		canvas.addEventListener('mousemove', function (e) {
			grid.draw(e.offsetX, e.offsetY);
			// point.x = e.offsetX;
			// point.y = e.offsetY;
			// point.reDraw();
		});

		clear();

		// window.requestAnimationFrame(main);

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
