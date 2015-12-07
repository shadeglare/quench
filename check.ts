const booleanTag = toString.call(true);
const stringTag = toString.call("");
const numberTag = toString.call(0);
const objectTag = toString.call({});
const arrayTag = toString.call([]);
const functionTag = toString.call(function(){});

/**
 * Checks an object is null.
 */
export function isNull(obj: any) {
    return obj === null;
}

/**
 * Checks an object is undefined.
 */
export function isUndefined(obj: any) {
    return obj === void 0;
}

/**
 * Checks an object is null or undefined.
 */
export function isNullOrUndefined(obj: any) {
    return isNull(obj) || isUndefined(obj);
}

/**
 * Checks an object is boolean.
 */
export function isBoolean(obj: any): obj is boolean {
    return obj === true || obj === false || toString.call(obj) === booleanTag;
}

/**
 * Checks an object is a JavaScript object.
 */
export function isObject(obj: any): obj is Object {
    return toString.call(obj) === objectTag;
}

/**
 * Checks an object is a JavaScript function.
 */
export function isFunction(obj: any): obj is Function {
    return toString.call(obj) === functionTag;
}
