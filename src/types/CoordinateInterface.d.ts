export interface CoordinateInterface {
	x: number;
	y: number;

	distance: (other: CoordinateInterface) => number;
}
