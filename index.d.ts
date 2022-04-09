/// <reference types="node" />
import { IncomingMessage, ServerResponse } from 'http'

declare const methods: readonly ['GET', 'POST', 'PUT', 'PATCH', 'DELETE']
declare type Function = (...args: any[]) => any

export declare type DefaultHandler = (req: IncomingMessage, res: ServerResponse) => any
export declare type Method = typeof methods[number]
export declare type Handlers<T> = {
	[K in Method]?: T
}

declare function microHandlers<T extends Function = DefaultHandler>(handlers: Handlers<T>): T

export default microHandlers
