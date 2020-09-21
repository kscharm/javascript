/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.18.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/// <reference types="node" />
import http = require('http');
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum LogsApiApiKeys {
    BearerToken = 0
}
export declare class LogsApi {
    protected _basePath: string;
    protected _defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        'default': Authentication;
        'BearerToken': ApiKeyAuth;
    };
    protected interceptors: Interceptor[];
    constructor(basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    defaultHeaders: any;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: LogsApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    /**
     *
     * @param logpath path to the log
     */
    logFileHandler(logpath: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    /**
     *
     */
    logFileListHandler(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
}
