"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
/**
* Endpoint represents a single logical \"backend\" implementing a service.
*/
class V1beta1Endpoint {
    static getAttributeTypeMap() {
        return V1beta1Endpoint.attributeTypeMap;
    }
}
V1beta1Endpoint.discriminator = undefined;
V1beta1Endpoint.attributeTypeMap = [
    {
        "name": "addresses",
        "baseName": "addresses",
        "type": "Array<string>"
    },
    {
        "name": "conditions",
        "baseName": "conditions",
        "type": "V1beta1EndpointConditions"
    },
    {
        "name": "hostname",
        "baseName": "hostname",
        "type": "string"
    },
    {
        "name": "targetRef",
        "baseName": "targetRef",
        "type": "V1ObjectReference"
    },
    {
        "name": "topology",
        "baseName": "topology",
        "type": "{ [key: string]: string; }"
    }
];
exports.V1beta1Endpoint = V1beta1Endpoint;
//# sourceMappingURL=v1beta1Endpoint.js.map