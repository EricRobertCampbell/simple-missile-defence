/**
* Ensure that an angle is in the domain [0, 2Pi)
*/
export function ensureAngleIn02Pi(angle: number): number {
	while(angle < 0 || angle >= 2 * Math.PI) {
		if (angle < 0) {
			angle += 2 * Math.PI;
		}
		if (angle >= 2 * Math.PI) {
			angle -= 2 * Math.PI
		}
	} 
	return angle;
}
