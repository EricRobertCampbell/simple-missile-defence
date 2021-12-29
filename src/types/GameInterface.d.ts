export interface GameInterface {
	ctx: CanvasRenderingContext2D;
	width: number;
	height: number;

	level: number;
	missiles: Array<Missile>;
	asteroids: Array<Asteroid>;
	explosions: Array<Explosion>;

	begin: () => void;
	draw: () => void;
	update: (timestamp: number) => void;
	animate: (timestamp: number) => void;
	handleClick: (e) => void;
	handleMouseMove: (e) => void;
}
