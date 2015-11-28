const booleanTag = toString.call(true);
const stringTag = toString.call("");
const numberTag = toString.call(0);
const objectTag = toString.call({});
const arrayTag = toString.call([]);
const functionTag = toString.call(function(){});

export function isNull(obj: any) {
    return obj === null;
}

export function isUndefined(obj: any) {
    return obj === void 0;
}

export function isNullOrUndefined(obj: any) {
    return isNull(obj) || isUndefined(obj);
}

export function isBoolean(obj: any): obj is boolean {
    return obj === true || obj === false || toString.call(obj) === booleanTag;
}

export function isObject(obj: any): obj is Object {
    return toString.call(obj) === objectTag;
}

export function isFunction(obj: any): obj is Function {
    return toString.call(obj) === functionTag;
}
