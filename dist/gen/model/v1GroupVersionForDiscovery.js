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
* GroupVersion contains the \"group/version\" and \"version\" string of a version. It is made a struct to keep extensibility.
*/
class V1GroupVersionForDiscovery {
    static getAttributeTypeMap() {
        return V1GroupVersionForDiscovery.attributeTypeMap;
    }
}
V1GroupVersionForDiscovery.discriminator = undefined;
V1GroupVersionForDiscovery.attributeTypeMap = [
    {
        "name": "groupVersion",
        "baseName": "groupVersion",
        "type": "string"
    },
    {
        "name": "version",
        "baseName": "version",
        "type": "string"
    }
];
exports.V1GroupVersionForDiscovery = V1GroupVersionForDiscovery;
//# sourceMappingURL=v1GroupVersionForDiscovery.js.map