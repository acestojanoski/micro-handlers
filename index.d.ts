import { IncomingMessage, ServerResponse } from 'http'

declare type Function = (...args: any[]) => any

export declare type DefaultHandler = (req: IncomingMessage, res: ServerResponse) => any
export declare type Method = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'
export declare type Handlers<T> = {
	[K in Method]?: T
}

declare function microHandlers<T extends Function = DefaultHandler>(handlers: Handlers<T>): T

export default microHandlers
