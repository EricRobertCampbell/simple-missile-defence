// types
import { CoordinateInterface } from "./CoordinateInterface";

export interface CanvasObjectInterface {
	ctx: CanvasRenderingContext2D;
	pos: CoordinateInterface;

	draw: () => void;
	update: (timestamp: number, otherRelevantObjects?: Array<CanvasObjectInterface> ) => void;
}
