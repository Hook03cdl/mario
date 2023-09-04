const canvas = document.getElementById('micanvas');
const ctx = canvas.getContext('2d');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

class Figura {
	constructor({
		posicion = { x: 200, y: 200 },
		width = 50,
		height = 50,
		color = 'black',
		line = 6,
		lineColor = 'black',
		sombra = 'blue',
	}) {
		this.posicion = posicion;
		this.width = width;
		this.height = height;
		this.color = color;
		this.line = line;
		this.lineColor = lineColor;
		this.sombra = sombra;
	}
	dibujar() {
		ctx.lineWidth = this.line;
		ctx.strokeStyle = this.lineColor;
		ctx.strokeRect(this.posicion.x, this.posicion.y, this.width, this.height);

		ctx.fillStyle = this.color;
		ctx.fillRect(this.posicion.x, this.posicion.y, this.width, this.height);
	}
	cuadro() {
		this.dibujar();
		//sombra
		ctx.fillStyle = this.sombra;
		ctx.fillRect(
			this.posicion.x + this.width - 10,
			this.posicion.y,
			10,
			this.height
		);
		ctx.fillRect(
			this.posicion.x,
			this.posicion.y + this.height - 10,
			this.width - 10,
			10
		);

		ctx.fillStyle = 'black';

		ctx.fillRect(
			this.posicion.x + this.width,
			this.posicion.y + 50,
			50,
			this.height - 50
		);

		ctx.fillRect(this.posicion.x + 20, this.posicion.y + 20, 15, 15);
		ctx.fillRect(
			this.posicion.x + this.width - 40,
			this.posicion.y + 20,
			15,
			15
		);

		ctx.fillRect(
			this.posicion.x + 20,
			this.posicion.y + this.height - 40,
			15,
			15
		);
		ctx.fillRect(
			this.posicion.x + this.width - 40,
			this.posicion.y + this.height - 40,
			15,
			15
		);
	}
	tubo() {
		this.color = 'green';
		ctx.lineWidth = this.line;
		ctx.strokeStyle = this.lineColor;
		ctx.strokeRect(this.posicion.x, this.posicion.y, this.width, this.height);

		ctx.fillStyle = this.color;
		ctx.fillRect(this.posicion.x, this.posicion.y, this.width, this.height);
		ctx.strokeRect(
			this.posicion.x - this.width * 0.13,
			this.posicion.y - 50,
			this.width + this.width * 0.25,
			60
		);
		ctx.fillRect(
			this.posicion.x - this.width * 0.13,
			this.posicion.y - 50,
			this.width + this.width * 0.25,
			60
		);
	}
}

const piso = new Figura({
	posicion: {
		x: 0,
		y: canvas.height - 60,
	},
	height: 100,
	width: canvas.width,
	color: '#FF9766',
});
const suelo = new Figura({
	posicion: {
		x: 0,
		y: canvas.height - 80,
	},
	height: 20,
	width: canvas.width,
	color: '#B16F3B',
});
const cuadroAzul = new Figura({
	posicion: {
		x: 450,
		y: canvas.height - 380,
	},
	height: 300,
	width: 200,
	color: '#71C2FF',
	sombra: '#0096EF',
});

const cuadroRosa = new Figura({
	posicion: {
		x: 350,
		y: canvas.height - 280,
	},
	height: 200,
	width: 200,
	color: '#FFC0B5',
	sombra: '#EC9172',
});
const cuadroverde = new Figura({
	posicion: {
		x: canvas.width - 150,
		y: canvas.height - 280,
	},
	height: 200,
	width: 200,
	color: '#00DD5B',
	sombra: '#0A5F1F',
});
const tubo = new Figura({
	posicion: {
		x: 800,
		y: canvas.height - 230,
	},
	height: 150,
	width: 100,
	color: '#FFC0B5',
});
const potenciador1 = new Figura({
	posicion: {
		x: 300,
		y: 150,
	},
	height: 50,
	width: 50,
	color: '#FF8954',
});
const potenciador2 = new Figura({
	posicion: {
		x: 350,
		y: 150,
	},
	height: 50,
	width: 50,
	color: '#FF8954',
});
const potenciador3 = new Figura({
	posicion: {
		x: 150,
		y: 300,
	},
	height: 50,
	width: 50,
	color: '#FF8954',
});
const potenciador4 = new Figura({
	posicion: {
		x: canvas.width - 75,
		y: 150,
	},
	height: 50,
	width: 50,
	color: '#FF8954',
});

piso.dibujar();
cuadroAzul.cuadro();
cuadroRosa.cuadro();
cuadroverde.cuadro();
potenciador1.dibujar();
potenciador2.dibujar();
potenciador3.dibujar();
potenciador4.dibujar();
tubo.tubo();

suelo.dibujar();
