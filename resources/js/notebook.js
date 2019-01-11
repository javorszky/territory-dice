
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
				draw: function () {
					ctx.fillStyle = this.color;
					ctx.fillRect(this.x - 2, this.y - 2, this.w, this.h);
				}
			},
			raf,
			main = function () {
				point.draw();
				raf = window.requestAnimationFrame(main);
			};

		ctx.fillStyle = 'rgb(200, 0, 0)';

		for (let index = 0; index <= canvas.clientWidth / 20; index++) {
			for (let hindex = 0; hindex <= canvas.clientHeight / 20; hindex++) {
				ctx.fillRect(index * 20 - 1, hindex * 20 - 1, 2, 2);
			}
		}


		canvas.addEventListener('mousemove', function (e) {
			console.log(e);
			point.x = e.offsetX;
			point.y = e.offsetY;
			// point.draw();
		});

		window.requestAnimationFrame(main);

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
