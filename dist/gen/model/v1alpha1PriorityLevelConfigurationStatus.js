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
* PriorityLevelConfigurationStatus represents the current state of a \"request-priority\".
*/
class V1alpha1PriorityLevelConfigurationStatus {
    static getAttributeTypeMap() {
        return V1alpha1PriorityLevelConfigurationStatus.attributeTypeMap;
    }
}
V1alpha1PriorityLevelConfigurationStatus.discriminator = undefined;
V1alpha1PriorityLevelConfigurationStatus.attributeTypeMap = [
    {
        "name": "conditions",
        "baseName": "conditions",
        "type": "Array<V1alpha1PriorityLevelConfigurationCondition>"
    }
];
exports.V1alpha1PriorityLevelConfigurationStatus = V1alpha1PriorityLevelConfigurationStatus;
//# sourceMappingURL=v1alpha1PriorityLevelConfigurationStatus.js.map