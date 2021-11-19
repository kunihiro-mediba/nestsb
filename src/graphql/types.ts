/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface Todo {
    id: string;
    title: string;
}

export interface IQuery {
    hello(): string | Promise<string>;
}

export interface IMutation {
    setMessage(message: string): string | Promise<string>;
}

type Nullable<T> = T | null;
