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
* ServiceAccountSubject holds detailed information for service-account-kind subject.
*/
class V1alpha1ServiceAccountSubject {
    static getAttributeTypeMap() {
        return V1alpha1ServiceAccountSubject.attributeTypeMap;
    }
}
V1alpha1ServiceAccountSubject.discriminator = undefined;
V1alpha1ServiceAccountSubject.attributeTypeMap = [
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "namespace",
        "baseName": "namespace",
        "type": "string"
    }
];
exports.V1alpha1ServiceAccountSubject = V1alpha1ServiceAccountSubject;
//# sourceMappingURL=v1alpha1ServiceAccountSubject.js.map