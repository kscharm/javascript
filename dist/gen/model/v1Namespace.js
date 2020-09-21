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
* Namespace provides a scope for Names. Use of multiple namespaces is optional.
*/
class V1Namespace {
    static getAttributeTypeMap() {
        return V1Namespace.attributeTypeMap;
    }
}
V1Namespace.discriminator = undefined;
V1Namespace.attributeTypeMap = [
    {
        "name": "apiVersion",
        "baseName": "apiVersion",
        "type": "string"
    },
    {
        "name": "kind",
        "baseName": "kind",
        "type": "string"
    },
    {
        "name": "metadata",
        "baseName": "metadata",
        "type": "V1ObjectMeta"
    },
    {
        "name": "spec",
        "baseName": "spec",
        "type": "V1NamespaceSpec"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "V1NamespaceStatus"
    }
];
exports.V1Namespace = V1Namespace;
//# sourceMappingURL=v1Namespace.js.map