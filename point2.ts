export interface IPoint2 {
    x: number;
    y: number;
}

/**
 * Creates an IPoint2 object.
 * @param x The x-component of a point.
 * @param y The y-component of a point.
 */
export function create(x: number, y: number): IPoint2 {
    return { x, y };
}

/**
 * Adds two IPoint2 objects.
 * @param left The left argument.
 * @param right The right argument.
 */
export function sum(left: IPoint2, right: IPoint2): IPoint2 {
    return {
        x: left.x + right.x,
        y: left.y + right.y
    };
}

/**
 * Substructs the specified IPoint2 object from another.
 * @param left The left argument.
 * @param right The right argument.
 */
export function sub(left: IPoint2, right: IPoint2): IPoint2 {
    return {
        x: left.x - right.x,
        y: left.y - right.y
    };
}

/**
 * Scales a given IPoint2 object by a given number value.
 */
export function scale(point: IPoint2, factor: number): IPoint2 {
    return {
        x: point.x * factor,
        y: point.y * factor
    };
}

/**
 * Computes the dot product of two IPoint2 objects.
 */
export function dot(left: IPoint2, right: IPoint2): number {
    return left.x * right.x + left.y * right.y;
}

/**
 * Computes the lenght of a given IPoint2 object.
 */
export function lenght(point: IPoint2): number {
    return Math.sqrt(point.x * point.x + point.y * point.y);
}

/**
 * Returns the normalized IPoint2 object of a given one. 
 */
export function normalize(point: IPoint2): IPoint2 {
    let length = lenght(point);
    return {
        x: point.x / length,
        y: point.y / length
    };
}

/**
 * Compares two IPoint2 objects.
 */
export function isEqual(left: IPoint2, right: IPoint2): boolean {
    return left.x === right.x && left.y === right.y;
}
