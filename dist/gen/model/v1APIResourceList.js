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
* APIResourceList is a list of APIResource, it is used to expose the name of the resources supported in a specific group and version, and if the resource is namespaced.
*/
class V1APIResourceList {
    static getAttributeTypeMap() {
        return V1APIResourceList.attributeTypeMap;
    }
}
V1APIResourceList.discriminator = undefined;
V1APIResourceList.attributeTypeMap = [
    {
        "name": "apiVersion",
        "baseName": "apiVersion",
        "type": "string"
    },
    {
        "name": "groupVersion",
        "baseName": "groupVersion",
        "type": "string"
    },
    {
        "name": "kind",
        "baseName": "kind",
        "type": "string"
    },
    {
        "name": "resources",
        "baseName": "resources",
        "type": "Array<V1APIResource>"
    }
];
exports.V1APIResourceList = V1APIResourceList;
//# sourceMappingURL=v1APIResourceList.js.map