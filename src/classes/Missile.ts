// types
import type { CanvasObjectInterface } from "../types";
import type { Coordinate } from ".";

export class Missile implements CanvasObjectInterface {
	ctx: CanvasRenderingContext2D;
	pos: Coordinate;
	v: number;
	theta: number;

	lastTimestamp: number;

	draw() {
		this.ctx.beginPath()
		this.ctx.arc(this.pos.x, this.pos.y, 10, 0, 2 * Math.PI)
	}
	update(timestamp: number) {
		const deltaT = timestamp && this.lastTimestamp ? timestamp - this.lastTimestamp : 0
		this.lastTimestamp = timestamp;

		this.pos.update(this.v, this.theta, deltaT)
	}
}
