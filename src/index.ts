import { OrderedArray } from './helpers';

export {};
declare global {
    interface Array<T> {
        addRange<T>(elements: T[]): void;
        aggregate<U>(
            accumulator: (
                accum: U,
                value?: T,
                index?: number,
                list?: T[]
            ) => any,
            initialValue?: U
        ): any;
        all(
            predicate: (value?: T, index?: number, list?: T[]) => boolean
        ): boolean;
        any(): boolean;
        any(
            predicate: (value?: T, index?: number, list?: T[]) => boolean
        ): boolean;
        any(
            predicate?: (value?: T, index?: number, list?: T[]) => boolean
        ): boolean;
        average(): number;
        average(
            transform: (value?: T, index?: number, list?: T[]) => any
        ): number;
        average(
            transform?: (value?: T, index?: number, list?: T[]) => any
        ): number;
        cast<U>(): Array<U>;
        contains(element: T): boolean;
        count(): number;
        count(
            predicate: (value?: T, index?: number, list?: T[]) => boolean
        ): number;
        count(
            predicate?: (value?: T, index?: number, list?: T[]) => boolean
        ): number;
        defaultIfEmpty(defaultValue?: T): Array<T>;
        distinct(): Array<T>;
        distinctBy(keySelector: (key: T) => string | number): Array<T>;
        elementAt(index: number): T;
        elementAtOrDefault(index: number): T;
        except(source: Array<T>): Array<T>;
        first(): T;
        first(predicate: (value?: T, index?: number, list?: T[]) => boolean): T;
        first(
            predicate?: (value?: T, index?: number, list?: T[]) => boolean
        ): T;
        firstOrDefault(): T;
        firstOrDefault(
            predicate: (value?: T, index?: number, list?: T[]) => boolean
        ): T;
        firstOrDefault(
            predicate?: (value?: T, index?: number, list?: T[]) => boolean
        ): T;
        groupBy<TResult = T>(
            grouper: (key: T) => string | number,
            mapper?: (element: T) => TResult
        ): { [key: string]: TResult[] };
        groupJoin<U>(
            list: Array<U>,
            key1: (k: T) => any,
            key2: (k: U) => any,
            result: (first: T, second: Array<U>) => any
        ): Array<any>;
        indexOf(element: T): number;
        insert(index: number, element: T): void | Error;
        intersect(source: Array<T>): Array<T>;
        last(): T;
        last(predicate: (value?: T, index?: number, list?: T[]) => boolean): T;
        last(predicate?: (value?: T, index?: number, list?: T[]) => boolean): T;

        lastOrDefault(): T;
        lastOrDefault(
            predicate: (value?: T, index?: number, list?: T[]) => boolean
        ): T;
        lastOrDefault(
            predicate?: (value?: T, index?: number, list?: T[]) => boolean
        ): T;
        max(): number;
        max(selector: (value: T, index: number, array: T[]) => number): number;
        max(selector?: (value: T, index: number, array: T[]) => number): number;
        min(): number;
        min(selector: (value: T, index: number, array: T[]) => number): number;
        min(selector?: (value: T, index: number, array: T[]) => number): number;
        ofType<U>(type: any): Array<U>;
        orderBy(keySelector: (key: T) => any): OrderedArray<T>;
        orderByDescending(keySelector: (key: T) => any): Array<T>;
        removeAll(
            predicate: (value?: T, index?: number, list?: T[]) => boolean
        ): Array<T>;
        select<TOut>(
            selector: (element: T, index: number) => TOut
        ): Array<TOut>;
        selectMany<TOut extends Array<any>>(
            selector: (element: T, index: number) => TOut
        ): TOut;
        sequenceEqual(list: Array<T>): boolean;
        single(
            predicate?: (value?: T, index?: number, list?: T[]) => boolean
        ): T;
        singleOrDefault(
            predicate?: (value?: T, index?: number, list?: T[]) => boolean
        ): T;
        skip(amount: number): Array<T>;
        skipWhile(
            predicate: (value?: T, index?: number, list?: T[]) => boolean
        ): Array<T>;
        sum(): number;
        sum(
            transform: (value?: T, index?: number, list?: T[]) => number
        ): number;
        sum(
            transform?: (value?: T, index?: number, list?: T[]) => number
        ): number;
        take(amount: number): Array<T>;
        takeWhile(
            predicate: (value?: T, index?: number, list?: T[]) => boolean
        ): Array<T>;
        union(list: Array<T>): Array<T>;
        where(
            predicate: (value?: T, index?: number, list?: T[]) => boolean
        ): Array<T>;
        zip<U, T, TOut>(
            list: Array<U>,
            result: (first: T, second: U) => TOut
        ): Array<TOut>;
    }
}
