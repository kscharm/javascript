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
import { V1TypedLocalObjectReference } from './v1TypedLocalObjectReference';
/**
* IngressBackend describes all endpoints for a given service and port.
*/
export declare class NetworkingV1beta1IngressBackend {
    'resource'?: V1TypedLocalObjectReference;
    /**
    * Specifies the name of the referenced service.
    */
    'serviceName'?: string;
    /**
    * Specifies the port of the referenced service.
    */
    'servicePort'?: object;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
