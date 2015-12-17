export function id<T>(x: T): T {
    return x;
}

export function trunc(value: number): number {
    return value < 0 ? (-Math.floor(-value)) : Math.floor(value);
}

export function isInteger(value: number): boolean {
    return isFinite(value) && Math.abs(value) === value;
}

export function takeWhile<T>(xs: T[], callback: (x: T, i: number) => boolean): T[] {
    let acc: T[] = [];
    xs.some((x, i) => {
        if (callback(x, i)) {
            acc.push(x);
            return false;
        } else {
            return true;
        }
    });
    return acc;
}

export function countWhile<T>(xs: T[], callback: (x: T, i: number) => boolean): number {
    let count = 0;
    xs.some((x, i) => {
        if (callback(x, i)) {
            count++;
            return false;
        } else {
            return true;
        }
    });
    return count;
}