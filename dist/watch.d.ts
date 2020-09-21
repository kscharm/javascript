/// <reference types="node" />
import request = require('request');
import { Duplex } from 'stream';
import { KubeConfig } from './config';
export interface WatchUpdate {
    type: string;
    object: object;
}
export interface RequestResult {
    pipe(stream: Duplex): any;
    destroy(): any;
}
export interface RequestInterface {
    webRequest(opts: request.Options, callback: (err: any, response: any, body: any) => void): RequestResult;
}
export declare class DefaultRequest implements RequestInterface {
    webRequest(opts: request.Options, callback: (err: any, response: any, body: any) => void): RequestResult;
}
export declare class Watch {
    static SERVER_SIDE_CLOSE: {
        error: string;
    };
    config: KubeConfig;
    private readonly requestImpl;
    constructor(config: KubeConfig, requestImpl?: RequestInterface);
    watch(path: string, queryParams: any, callback: (phase: string, apiObj: any, watchObj?: any) => void, done: (err: any) => void): Promise<any>;
}
