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
* HTTPHeader describes a custom header to be used in HTTP probes
*/
class V1HTTPHeader {
    static getAttributeTypeMap() {
        return V1HTTPHeader.attributeTypeMap;
    }
}
V1HTTPHeader.discriminator = undefined;
V1HTTPHeader.attributeTypeMap = [
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "value",
        "baseName": "value",
        "type": "string"
    }
];
exports.V1HTTPHeader = V1HTTPHeader;
//# sourceMappingURL=v1HTTPHeader.js.map