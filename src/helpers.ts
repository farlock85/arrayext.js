/**
 * Check if the given argument is an object
 * @param x argument
 */
export const isObj = <T>(x: T): boolean => !!x && typeof x === 'object';

/**
 * Compare if 2 objects are equal based on the keys of the object
 * @param a The source object
 * @param b The object to compare to
 */
export const equal = <T, U>(a: T, b: U): boolean =>
    Object.entries(a).every(([key, val]) => (isObj(val) ? equal(b[key], val) : b[key] === val));

/**
 * Creates a function that negates the result of the predicate
 */
export const negate = <T>(predicate: (value?: T, index?: number, list?: T[]) => boolean): any => (
    ...args: any
) => !predicate(...args);

export const composeComparers = <T>(
    previousComparer: (a: T, b: T) => number,
    currentComparer: (a: T, b: T) => number
): ((a: T, b: T) => number) => (a: T, b: T) => previousComparer(a, b) || currentComparer(a, b);

export const keyComparer = <T>(
    keySelector: (key: T) => any,
    descending?: boolean
): ((a: T, b: T) => number) => (a: T, b: T) => {
    const sortKeyA = keySelector(a);
    const sortKeyB = keySelector(b);
    if (sortKeyA > sortKeyB) {
        return !descending ? 1 : -1;
    } else if (sortKeyA < sortKeyB) {
        return !descending ? -1 : 1;
    } else {
        return 0;
    }
};

/**
 * Represents a sorted sequence. The methods of this class are implemented by using deferred execution.
 * The immediate return value is an object that stores all the information that is required to perform the action.
 * The query represented by this method is not executed until the object is enumerated either by
 * calling its ToDictionary, ToLookup, ToList or ToArray methods
 */
export class OrderedArray<T> extends Array<T> {
    static get [Symbol.species]() {
        return Array;
    }

    /* istanbul ignore next */
    constructor(elements: T[], private _comparer: (a: T, b: T) => number) {
        super(...elements);
        Object.setPrototypeOf(this, OrderedArray.prototype);
        this.sort(this._comparer);
    }

    /**
     * Performs a subsequent ordering of the elements in a sequence in ascending order according to a key.
     * @override
     */
    public thenBy(keySelector: (key: T) => any): OrderedArray<T> {
        return new OrderedArray(
            this,
            composeComparers(this._comparer, keyComparer(keySelector, false))
        );
    }

    /**
     * Performs a subsequent ordering of the elements in a sequence in descending order, according to a key.
     * @override
     */
    public thenByDescending(keySelector: (key: T) => any): OrderedArray<T> {
        return new OrderedArray(
            this,
            composeComparers(this._comparer, keyComparer(keySelector, true))
        );
    }
}
