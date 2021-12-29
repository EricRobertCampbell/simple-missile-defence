import type { CanvasObjectInterface } from "../types";
import type { Coordinate } from ".";

export class Explosion implements CanvasObjectInterface {
	ctx: CanvasRenderingContext2D;
	pos: Coordinate;
	radius: number = 10;

	lastTimestamp: number;
	okToRemove: boolean = false;

	draw() {
		this.ctx.beginPath()
		this.ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI);
		this.ctx.stroke();
		this.ctx.closePath();
	}

	update(timestamp: number) {
		const deltaT = timestamp && this.lastTimestamp ? timestamp - this.lastTimestamp : 0;
		this.lastTimestamp = timestamp;
	}
}
