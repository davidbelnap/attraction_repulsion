var attractors = [];
var particles = [];

function setup() {
	createCanvas(window.innerWidth, window.innerHeight);

	for (var i = 0; i < 424; i++) {
		particles.push(new Particle(random(width), random(height)));
	};

}

function mousePressed() {
	attractors.push(createVector(mouseX, mouseY));
}

function draw() {
	background(51);
	stroke(244);
	strokeWeight(4);

	// if (particles.push(new Particle(random(width), random(height)))) {
	// 	particles.pop(Particle);
	// };


	for (var i = 0; i < attractors.length; i++) {
		stroke(0, 255, 0);
		point(attractors[i].x, attractors[i].y);
	};

	for (var i = 0; i < particles.length; i++) {
		var particle = particles[i];
		for (var j = 0; j < attractors.length; j++) {
			particle.attracted(attractors[j]);
		};
		particle.update();
		particle.show();
	};
}