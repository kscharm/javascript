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
* PodSecurityPolicy governs the ability to make requests that affect the Security Context that will be applied to a pod and container.
*/
class V1beta1PodSecurityPolicy {
    static getAttributeTypeMap() {
        return V1beta1PodSecurityPolicy.attributeTypeMap;
    }
}
V1beta1PodSecurityPolicy.discriminator = undefined;
V1beta1PodSecurityPolicy.attributeTypeMap = [
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
        "type": "V1beta1PodSecurityPolicySpec"
    }
];
exports.V1beta1PodSecurityPolicy = V1beta1PodSecurityPolicy;
//# sourceMappingURL=v1beta1PodSecurityPolicy.js.map