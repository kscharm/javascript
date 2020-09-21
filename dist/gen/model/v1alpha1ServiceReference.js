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
* ServiceReference holds a reference to Service.legacy.k8s.io
*/
class V1alpha1ServiceReference {
    static getAttributeTypeMap() {
        return V1alpha1ServiceReference.attributeTypeMap;
    }
}
V1alpha1ServiceReference.discriminator = undefined;
V1alpha1ServiceReference.attributeTypeMap = [
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "namespace",
        "baseName": "namespace",
        "type": "string"
    },
    {
        "name": "path",
        "baseName": "path",
        "type": "string"
    },
    {
        "name": "port",
        "baseName": "port",
        "type": "number"
    }
];
exports.V1alpha1ServiceReference = V1alpha1ServiceReference;
//# sourceMappingURL=v1alpha1ServiceReference.js.map