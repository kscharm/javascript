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
* ResourcePolicyRule is a predicate that matches some resource requests, testing the request\'s verb and the target resource. A ResourcePolicyRule matches a resource request if and only if: (a) at least one member of verbs matches the request, (b) at least one member of apiGroups matches the request, (c) at least one member of resources matches the request, and (d) least one member of namespaces matches the request.
*/
class V1alpha1ResourcePolicyRule {
    static getAttributeTypeMap() {
        return V1alpha1ResourcePolicyRule.attributeTypeMap;
    }
}
V1alpha1ResourcePolicyRule.discriminator = undefined;
V1alpha1ResourcePolicyRule.attributeTypeMap = [
    {
        "name": "apiGroups",
        "baseName": "apiGroups",
        "type": "Array<string>"
    },
    {
        "name": "clusterScope",
        "baseName": "clusterScope",
        "type": "boolean"
    },
    {
        "name": "namespaces",
        "baseName": "namespaces",
        "type": "Array<string>"
    },
    {
        "name": "resources",
        "baseName": "resources",
        "type": "Array<string>"
    },
    {
        "name": "verbs",
        "baseName": "verbs",
        "type": "Array<string>"
    }
];
exports.V1alpha1ResourcePolicyRule = V1alpha1ResourcePolicyRule;
//# sourceMappingURL=v1alpha1ResourcePolicyRule.js.map