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
* FlowSchemaStatus represents the current state of a FlowSchema.
*/
class V1alpha1FlowSchemaStatus {
    static getAttributeTypeMap() {
        return V1alpha1FlowSchemaStatus.attributeTypeMap;
    }
}
V1alpha1FlowSchemaStatus.discriminator = undefined;
V1alpha1FlowSchemaStatus.attributeTypeMap = [
    {
        "name": "conditions",
        "baseName": "conditions",
        "type": "Array<V1alpha1FlowSchemaCondition>"
    }
];
exports.V1alpha1FlowSchemaStatus = V1alpha1FlowSchemaStatus;
//# sourceMappingURL=v1alpha1FlowSchemaStatus.js.map