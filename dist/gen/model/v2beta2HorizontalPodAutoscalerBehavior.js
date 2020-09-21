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
* HorizontalPodAutoscalerBehavior configures the scaling behavior of the target in both Up and Down directions (scaleUp and scaleDown fields respectively).
*/
class V2beta2HorizontalPodAutoscalerBehavior {
    static getAttributeTypeMap() {
        return V2beta2HorizontalPodAutoscalerBehavior.attributeTypeMap;
    }
}
V2beta2HorizontalPodAutoscalerBehavior.discriminator = undefined;
V2beta2HorizontalPodAutoscalerBehavior.attributeTypeMap = [
    {
        "name": "scaleDown",
        "baseName": "scaleDown",
        "type": "V2beta2HPAScalingRules"
    },
    {
        "name": "scaleUp",
        "baseName": "scaleUp",
        "type": "V2beta2HPAScalingRules"
    }
];
exports.V2beta2HorizontalPodAutoscalerBehavior = V2beta2HorizontalPodAutoscalerBehavior;
//# sourceMappingURL=v2beta2HorizontalPodAutoscalerBehavior.js.map