// types and classes
import type { Missile, Asteroid, Explosion } from './index'
import type { GameInterface } from '../types'

export class Game implements GameInterface{
	ctx: CanvasRenderingContext2D;
	width: number;
	height: number;

	level: number;
	missiles: Array<Missile>;
	asteroids: Array<Asteroid>;
	explosions: Array<Explosion>;

	constructor(ctx, width, height) {
		this.ctx = ctx;
		this.width = width;
		this.height = height;

		// make the coordinates the usual Cartesian ones with (0,0) in the bottom middle
		this.ctx.save();
		this.ctx.translate(width / 2, height);
		this.ctx.scale(1, -1)
	}

	begin() {
		requestAnimationFrame(this.animate.bind(this))
	}

	draw() {
		this.asteroids.forEach((asteroid) => asteroid.draw())
		this.missiles.forEach(missile => missile.draw())
	}

	update(timestamp: number) {
		// check for collisions and update appropriately

		// update things that update themselves
		[...this.missiles, ...this.asteroids, ...this.explosions].forEach(obj => obj.update(timestamp))
	}

	animate(timestamp: number) {
		console.log('Called animate')
		this.update(timestamp);
		this.draw()
	}

	handleClick ( e ) {
		console.log('Handled mouse click', e)
	}
	handleMouseMove ( e ) {
		console.log('Handled mouse move', e)
	}
}
