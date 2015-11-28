import * as Check from "./check";

export function create<T>(creator: () => T) {
    let instance: T = null;
    return {
        get Instance() {
            if (Check.isNullOrUndefined(instance)) {
                instance = creator();
            }
            return instance;
        }
    };
}
