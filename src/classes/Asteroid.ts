// types and classes
import type { CanvasObjectInterface } from "../types";
import type { Coordinate } from ".";

export class Asteroid implements CanvasObjectInterface {
	ctx: CanvasRenderingContext2D;
	pos: Coordinate;
	radius: number = 10;
	v: number;
	theta: number;

	lastTimestamp: number;
	okToRemove: boolean = false;

	constructor(ctx: CanvasRenderingContext2D, pos: Coordinate) {
		this.ctx = ctx;
		this.pos = pos;
	}

	draw() {
		this.ctx.beginPath()
		this.ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI)
		this.ctx.stroke()
		this.ctx.closePath()
	}

	update(timestamp:number) {
		const deltaT = timestamp && this.lastTimestamp ? timestamp - this.lastTimestamp : 0
		this.lastTimestamp = timestamp;

		this.pos.update(v, theta, deltaT)
	}

}
