// types
import type { CoordinateInterface } from "../types";

export class Coordinate implements CoordinateInterface {
	x: number;
	y: number;

	constructor(x:number, y: number) {
		this.x = x;
		this.y = y;
	}

	distance(other: Coordinate) {
		const deltaX = this.x - other.x;
		const deltaY = this.y - other.y;
		return Math.sqrt(deltaX ** 2 + deltaY ** 2)
	}

	update(v: number, theta: number, deltaT: number) {
		this.x += v * Math.cos(theta) * deltaT / 1000;
		this.y += v * Math.cos(theta) * deltaT / 1000;
	}
}
