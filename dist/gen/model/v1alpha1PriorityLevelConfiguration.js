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
* PriorityLevelConfiguration represents the configuration of a priority level.
*/
class V1alpha1PriorityLevelConfiguration {
    static getAttributeTypeMap() {
        return V1alpha1PriorityLevelConfiguration.attributeTypeMap;
    }
}
V1alpha1PriorityLevelConfiguration.discriminator = undefined;
V1alpha1PriorityLevelConfiguration.attributeTypeMap = [
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
        "type": "V1alpha1PriorityLevelConfigurationSpec"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "V1alpha1PriorityLevelConfigurationStatus"
    }
];
exports.V1alpha1PriorityLevelConfiguration = V1alpha1PriorityLevelConfiguration;
//# sourceMappingURL=v1alpha1PriorityLevelConfiguration.js.map