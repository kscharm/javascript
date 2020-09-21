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
* ClusterRole is a cluster level, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding or ClusterRoleBinding. Deprecated in v1.17 in favor of rbac.authorization.k8s.io/v1 ClusterRole, and will no longer be served in v1.20.
*/
class V1beta1ClusterRole {
    static getAttributeTypeMap() {
        return V1beta1ClusterRole.attributeTypeMap;
    }
}
V1beta1ClusterRole.discriminator = undefined;
V1beta1ClusterRole.attributeTypeMap = [
    {
        "name": "aggregationRule",
        "baseName": "aggregationRule",
        "type": "V1beta1AggregationRule"
    },
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
        "name": "rules",
        "baseName": "rules",
        "type": "Array<V1beta1PolicyRule>"
    }
];
exports.V1beta1ClusterRole = V1beta1ClusterRole;
//# sourceMappingURL=v1beta1ClusterRole.js.map