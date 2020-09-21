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
* specification of a horizontal pod autoscaler.
*/
class V1HorizontalPodAutoscalerSpec {
    static getAttributeTypeMap() {
        return V1HorizontalPodAutoscalerSpec.attributeTypeMap;
    }
}
V1HorizontalPodAutoscalerSpec.discriminator = undefined;
V1HorizontalPodAutoscalerSpec.attributeTypeMap = [
    {
        "name": "maxReplicas",
        "baseName": "maxReplicas",
        "type": "number"
    },
    {
        "name": "minReplicas",
        "baseName": "minReplicas",
        "type": "number"
    },
    {
        "name": "scaleTargetRef",
        "baseName": "scaleTargetRef",
        "type": "V1CrossVersionObjectReference"
    },
    {
        "name": "targetCPUUtilizationPercentage",
        "baseName": "targetCPUUtilizationPercentage",
        "type": "number"
    }
];
exports.V1HorizontalPodAutoscalerSpec = V1HorizontalPodAutoscalerSpec;
//# sourceMappingURL=v1HorizontalPodAutoscalerSpec.js.map