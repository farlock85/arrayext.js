import { OrderedArray, equal, isObj, keyComparer, negate } from "./helpers";

export const curray = () => null;

declare global {
    export interface Array<T> {
        addRange<T>(elements: T[]): void;
        aggregate<U>(accumulator: (accum: U, value?: T, index?: number, list?: T[]) => any, initialValue?: U): any;
        all(predicate: (value?: T, index?: number, list?: T[]) => boolean): boolean;
        any(): boolean;
        any(predicate: (value?: T, index?: number, list?: T[]) => boolean): boolean;
        any(predicate?: (value?: T, index?: number, list?: T[]) => boolean): boolean;
        average(): number;
        average(transform: (value?: T, index?: number, list?: T[]) => any): number;
        average(transform?: (value?: T, index?: number, list?: T[]) => any): number;
        cast<U>(): U[];
        contains(element: T): boolean;
        count(): number;
        count(predicate: (value?: T, index?: number, list?: T[]) => boolean): number;
        count(predicate?: (value?: T, index?: number, list?: T[]) => boolean): number;
        defaultIfEmpty(defaultValue?: T): T[];
        distinct(): T[];
        distinctBy(keySelector: (key: T) => string | number): T[];
        elementAt(index: number): T;
        elementAtOrDefault(index: number): T;
        except(source: T[]): T[];
        first(): T;
        first(predicate: (value?: T, index?: number, list?: T[]) => boolean): T;
        first(predicate?: (value?: T, index?: number, list?: T[]) => boolean): T;
        firstOrDefault(): T;
        firstOrDefault(predicate: (value?: T, index?: number, list?: T[]) => boolean): T;
        firstOrDefault(predicate?: (value?: T, index?: number, list?: T[]) => boolean): T;
        groupBy<TResult = T>(grouper: (key: T) => string | number, mapper?: (element: T) => TResult): { [key: string]: TResult[] };
        groupJoin<U>(list: U[], key1: (k: T) => any, key2: (k: U) => any, result: (first: T, second: U[]) => any): any[];
        indexOf(element: T): number;
        insert(index: number, element: T): void | Error;
        intersect(source: T[]): T[];
        last(): T;
        last(predicate: (value?: T, index?: number, list?: T[]) => boolean): T;
        last(predicate?: (value?: T, index?: number, list?: T[]) => boolean): T;
        lastOrDefault(): T;
        lastOrDefault(predicate: (value?: T, index?: number, list?: T[]) => boolean): T;
        lastOrDefault(predicate?: (value?: T, index?: number, list?: T[]) => boolean): T;
        max(): number;
        max(selector: (value: T, index: number, array: T[]) => number): number;
        max(selector?: (value: T, index: number, array: T[]) => number): number;
        min(): number;
        min(selector: (value: T, index: number, array: T[]) => number): number;
        min(selector?: (value: T, index: number, array: T[]) => number): number;
        ofType<U>(type: any): U[];
        orderBy(keySelector: (key: T) => any): OrderedArray<T>;
        orderByDescending(keySelector: (key: T) => any): OrderedArray<T>;
        removeAll(predicate: (value?: T, index?: number, list?: T[]) => boolean): T[];
        select<TOut>(selector: (element: T, index: number) => TOut): TOut[];
        selectMany<TOut extends any[]>(selector: (element: T, index: number) => TOut): TOut;
        sequenceEqual(list: T[]): boolean;
        single(predicate?: (value?: T, index?: number, list?: T[]) => boolean): T;
        singleOrDefault(predicate?: (value?: T, index?: number, list?: T[]) => boolean): T;
        skip(amount: number): T[];
        skipWhile(predicate: (value?: T, index?: number, list?: T[]) => boolean): T[];
        sum(): number;
        sum(transform: (value?: T, index?: number, list?: T[]) => number): number;
        sum(transform?: (value?: T, index?: number, list?: T[]) => number): number;
        take(amount: number): T[];
        takeWhile(predicate: (value?: T, index?: number, list?: T[]) => boolean): T[];
        union(list: T[]): T[];
        where(predicate: (value?: T, index?: number, list?: T[]) => boolean): T[];
        zip<U, T, TOut>(list: U[], result: (first: T, second: U) => TOut): TOut[];
    }
}

/**
 * Adds the elements of the specified collection to the end of the List<T>.
 */
Array.prototype.addRange = function<T>(elements: T[]): void {
    this.push(...elements);
};

/**
 * Applies an accumulator function over a sequence.
 */
Array.prototype.aggregate = function<U, T>(accumulator: (accum: U, value?: T, index?: number, list?: T[]) => any, initialValue?: U): any {
    return this.reduce(accumulator, initialValue);
};

/**
 * Determines whether all elements of a sequence satisfy a condition.
 */
Array.prototype.all = function<T>(predicate: (value?: T, index?: number, list?: T[]) => boolean): boolean {
    return this.every(predicate);
};

/**
 * Determines whether a sequence contains any elements.
 */
Array.prototype.any = function<T>(predicate?: (value?: T, index?: number, list?: T[]) => boolean): boolean {
    return predicate ? this.some(predicate) : this.length > 0;
};

/**
 * Computes the average of a sequence of number values that are obtained by invoking
 * a transform function on each element of the input sequence.
 */
Array.prototype.average = function<T>(transform?: (value?: T, index?: number, list?: T[]) => any): number {
    return this.sum(transform) / this.count(transform);
};

/**
 * Casts the elements of a sequence to the specified type.
 */
Array.prototype.cast = function<T>() {
    return this as T[];
};

/**
 * Determines whether an element is in the Array<T>.
 */
Array.prototype.contains = function<T>(element: T): boolean {
    return this.some((x: T) => x === element);
};

/**
 * Returns the number of elements in a sequence.
 */
Array.prototype.count = function<T>(predicate?: (value?: T, index?: number, list?: T[]) => boolean): number {
    return predicate ? this.where(predicate).count() : this.length;
};

/**
 * Returns the elements of the specified sequence or the type parameter's default value
 * in a singleton collection if the sequence is empty.
 */
Array.prototype.defaultIfEmpty = function<T>(defaultValue?: T): T[] {
    return this.count() ? this : [defaultValue];
};

/**
 * Returns distinct elements from a sequence by using the default equality comparer to compare values.
 */
Array.prototype.distinct = function<T>(): T[] {
    return this.where(
        (
            value: any,
            index: any,
            iter: {
                findIndex: (arg0: (obj: any) => boolean) => void;
                indexOf: (arg0: any) => void;
            }
        ) => (isObj(value) ? iter.findIndex((obj: any) => equal(obj, value)) : iter.indexOf(value)) === index
    );
};

/**
 * Returns distinct elements from a sequence according to specified key selector.
 */
Array.prototype.distinctBy = function<T>(keySelector: (key: T) => string | number): T[] {
    const groups = this.groupBy(keySelector);
    return Object.keys(groups).reduce((res, key) => {
        res.push(groups[key][0]);
        return res;
    }, new Array<T>());
};

/**
 * Returns the element at a specified index in a sequence.
 */
Array.prototype.elementAt = function<T>(index: number): T {
    if (index < this.count() && index >= 0) {
        return this[index];
    } else {
        throw new Error("ArgumentOutOfRangeException: index is less than 0 or greater than or equal to the number of elements in source.");
    }
};

/**
 * Returns the element at a specified index in a sequence or a default value if the index is out of range.
 */
Array.prototype.elementAtOrDefault = function<T>(index: number): T {
    return this.elementAt(index) !== undefined && this.elementAt(index);
};

/**
 * Produces the set difference of two sequences by using the default equality comparer to compare values.
 */
Array.prototype.except = function<T>(source: T[]): T[] {
    return this.where((x: T) => !source.contains(x));
};

/**
 * Returns the first element of a sequence.
 */
Array.prototype.first = function<T>(predicate?: (value?: T, index?: number, list?: T[]) => boolean): T {
    if (this.count()) {
        return predicate ? this.where(predicate).first() : this[0];
    } else {
        throw new Error("InvalidOperationException: The source sequence is empty.");
    }
};

/**
 * Returns the first element of a sequence, or a default value if the sequence contains no elements.
 */
Array.prototype.firstOrDefault = function<T>(predicate?: (value?: T, index?: number, list?: T[]) => boolean): T {
    return this.count(predicate) ? this.first(predicate) : null;
};

/**
 * Groups the elements of a sequence according to a specified key selector function.
 */
Array.prototype.groupBy = function<T, TResult>(grouper: (key: T) => string | number, mapper?: (element: T) => TResult): { [key: string]: TResult[] } {
    const initialValue: { [key: string]: TResult[] } = {};
    if (!mapper) {
        mapper = val => (val as any) as TResult;
    }
    return this.aggregate((ac: { [x: string]: TResult[] }, v: T) => {
        const key = grouper(v);
        const existingGroup = ac[key];
        const mappedValue = mapper(v);
        if (existingGroup) {
            existingGroup.push(mappedValue);
        } else {
            ac[key] = [mappedValue];
        }
        return ac;
    }, initialValue);
};

/**
 * Correlates the elements of two sequences based on equality of keys and groups the results.
 * The default equality comparer is used to compare keys.
 */
Array.prototype.groupJoin = function<T, U>(list: U[], key1: (k: T) => any, key2: (k: U) => any, result: (first: T, second: U[]) => any): any[] {
    return this.select((x: T) =>
        result(
            x,
            list.where(z => key1(x) === key2(z))
        )
    );
};

/**
 * Produces the set intersection of two sequences by using the default equality comparer to compare values.
 */
Array.prototype.intersect = function<T>(source: T[]): T[] {
    return this.where((x: T) => source.contains(x));
};

/**
 * Returns the last element of a sequence.
 */
Array.prototype.last = function<T>(predicate?: (value?: T, index?: number, list?: T[]) => boolean): T {
    if (this.count()) {
        return predicate ? this.where(predicate).last() : this[this.count() - 1];
    } else {
        throw Error("InvalidOperationException: The source sequence is empty.");
    }
};

/**
 * Returns the last element of a sequence, or a default value if the sequence contains no elements.
 */
Array.prototype.lastOrDefault = function<T>(predicate?: (value?: T, index?: number, list?: T[]) => boolean): T {
    return this.count(predicate) ? this.last(predicate) : null;
};

/**
 * Returns the maximum value in a generic sequence.
 */
Array.prototype.max = function<T>(selector?: (value: T, index: number, array: T[]) => number): number {
    const id = (x: any) => x;
    return Math.max(...this.map(selector || id));
};

/**
 * Returns the minimum value in a generic sequence.
 */
Array.prototype.min = function<T>(selector?: (value: T, index: number, array: T[]) => number): number {
    const id = (x: any) => x;
    return Math.min(...this.map(selector || id));
};

/**
 * Filters the elements of a sequence based on a specified type.
 */
Array.prototype.ofType = function<U>(type: any): U[] {
    let typeName: string;
    switch (type) {
        case Number:
            typeName = "number";
            break;
        case String:
            typeName = "string";
            break;
        case Boolean:
            typeName = "boolean";
            break;
        case Function:
            typeName = "function";
            break;
        default:
            typeName = null;
            break;
    }
    return typeName === null ? (this.where((x: any) => x instanceof type) as U[]).cast<U>() : (this.where((x: any) => typeof x === typeName) as U[]).cast<U>();
};

/**
 * Sorts the elements of a sequence in ascending order according to a key.
 */
Array.prototype.orderBy = function<T>(keySelector: (key: T) => any): OrderedArray<T> {
    return new OrderedArray(this, keyComparer(keySelector, false));
};

/**
 * Sorts the elements of a sequence in descending order according to a key.
 */
Array.prototype.orderByDescending = function<T>(keySelector: (key: T) => any): OrderedArray<T> {
    return new OrderedArray(this, keyComparer(keySelector, true));
};

/**
 * Removes all the elements that match the conditions defined by the specified predicate.
 */
Array.prototype.removeAll = function<T>(predicate: (value?: T, index?: number, list?: T[]) => boolean): T[] {
    return this.where(negate(predicate));
};

/**
 * Projects each element of a sequence into a new form.
 */
Array.prototype.select = function<T, TOut>(selector: (element: T, index: number) => TOut): TOut[] {
    return this.map(selector);
};

/**
 * Projects each element of a sequence to a Array<any> and flattens the resulting sequences into one sequence.
 */
Array.prototype.selectMany = function<T, TOut extends any[]>(selector: (element: T, index: number) => TOut): TOut {
    return this.aggregate((ac: { addRange: (arg0: any) => void }, _: any, i: any) => (ac.addRange(this.select(selector).elementAt(i)), ac), new Array<TOut>());
};

/**
 * Determines whether two sequences are equal by comparing the elements by using the default equality comparer for their type.
 */
Array.prototype.sequenceEqual = function<T>(list: T[]): boolean {
    return !!this.reduce((x: any, y: T, z: string | number) => (list[z] === y ? x : undefined));
};

/**
 * Returns the only element of a sequence, and throws an exception if there is not exactly one element in the sequence.
 */
Array.prototype.single = function<T>(predicate?: (value?: T, index?: number, list?: T[]) => boolean): T {
    if (this.count(predicate) !== 1) {
        throw new Error("InvalidOperationException: The collection does not contain exactly one element.");
    } else {
        return this.first(predicate);
    }
};

/**
 * Returns the only element of a sequence, or a default value if the sequence is empty;
 * this method throws an exception if there is more than one element in the sequence.
 */
Array.prototype.singleOrDefault = function<T>(predicate?: (value?: T, index?: number, list?: T[]) => boolean): T {
    return this.count(predicate) ? this.single(predicate) : null;
};

/**
 * Bypasses a specified number of elements in a sequence and then returns the remaining elements.
 */
Array.prototype.skip = function<T>(amount: number): T[] {
    return this.slice(Math.max(0, amount));
};

/**
 * Bypasses elements in a sequence as long as a specified condition is true and then returns the remaining elements.
 */
Array.prototype.skipWhile = function<T>(predicate: (value?: T, index?: number, list?: T[]) => boolean): T[] {
    return this.skip(this.aggregate((ac: number) => (predicate(this.elementAt(ac)) ? ++ac : ac), 0));
};

/**
 * Computes the sum of the sequence of number values that are obtained by invoking
 * a transform function on each element of the input sequence.
 */
Array.prototype.sum = function<T>(transform?: (value?: T, index?: number, list?: T[]) => number): number {
    return transform ? this.select(transform).sum() : this.aggregate((ac: number, v: string | number) => (ac += +v), 0);
};

/**
 * Returns a specified number of contiguous elements from the start of a sequence.
 */
Array.prototype.take = function<T>(amount: number): T[] {
    return this.slice(0, Math.max(0, amount));
};

/**
 * Returns elements from a sequence as long as a specified condition is true.
 */
Array.prototype.takeWhile = function<T>(predicate: (value?: T, index?: number, list?: T[]) => boolean): T[] {
    return this.take(this.aggregate((ac: number) => (predicate(this.elementAt(ac)) ? ++ac : ac), 0));
};

/**
 * Produces the set union of two sequences by using the default equality comparer.
 */
Array.prototype.union = function<T>(list: T[]): T[] {
    return this.concat(list).distinct();
};

/**
 * Filters a sequence of values based on a predicate.
 */
Array.prototype.where = function<T>(predicate: (value?: T, index?: number, list?: T[]) => boolean): T[] {
    return this.filter(predicate);
};

/**
 * Applies a specified function to the corresponding elements of two sequences, producing a sequence of the results.
 */
Array.prototype.zip = function<U, T, TOut>(list: U[], result: (first: T, second: U) => TOut): TOut[] {
    return list.count() < this.count() ? list.select((x, y) => result(this.elementAt(y), x)) : this.select((x: T, y: number) => result(x, list.elementAt(y)));
};
