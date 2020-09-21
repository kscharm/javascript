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
* RoleBinding references a role, but does not contain it.  It can reference a Role in the same namespace or a ClusterRole in the global namespace. It adds who information via Subjects and namespace information by which namespace it exists in.  RoleBindings in a given namespace only have effect in that namespace.
*/
class V1RoleBinding {
    static getAttributeTypeMap() {
        return V1RoleBinding.attributeTypeMap;
    }
}
V1RoleBinding.discriminator = undefined;
V1RoleBinding.attributeTypeMap = [
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
        "name": "roleRef",
        "baseName": "roleRef",
        "type": "V1RoleRef"
    },
    {
        "name": "subjects",
        "baseName": "subjects",
        "type": "Array<V1Subject>"
    }
];
exports.V1RoleBinding = V1RoleBinding;
//# sourceMappingURL=v1RoleBinding.js.map