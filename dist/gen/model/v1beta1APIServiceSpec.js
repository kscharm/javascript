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
* APIServiceSpec contains information for locating and communicating with a server. Only https is supported, though you are able to disable certificate verification.
*/
class V1beta1APIServiceSpec {
    static getAttributeTypeMap() {
        return V1beta1APIServiceSpec.attributeTypeMap;
    }
}
V1beta1APIServiceSpec.discriminator = undefined;
V1beta1APIServiceSpec.attributeTypeMap = [
    {
        "name": "caBundle",
        "baseName": "caBundle",
        "type": "string"
    },
    {
        "name": "group",
        "baseName": "group",
        "type": "string"
    },
    {
        "name": "groupPriorityMinimum",
        "baseName": "groupPriorityMinimum",
        "type": "number"
    },
    {
        "name": "insecureSkipTLSVerify",
        "baseName": "insecureSkipTLSVerify",
        "type": "boolean"
    },
    {
        "name": "service",
        "baseName": "service",
        "type": "ApiregistrationV1beta1ServiceReference"
    },
    {
        "name": "version",
        "baseName": "version",
        "type": "string"
    },
    {
        "name": "versionPriority",
        "baseName": "versionPriority",
        "type": "number"
    }
];
exports.V1beta1APIServiceSpec = V1beta1APIServiceSpec;
//# sourceMappingURL=v1beta1APIServiceSpec.js.map