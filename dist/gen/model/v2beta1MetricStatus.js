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
* MetricStatus describes the last-read state of a single metric.
*/
class V2beta1MetricStatus {
    static getAttributeTypeMap() {
        return V2beta1MetricStatus.attributeTypeMap;
    }
}
V2beta1MetricStatus.discriminator = undefined;
V2beta1MetricStatus.attributeTypeMap = [
    {
        "name": "external",
        "baseName": "external",
        "type": "V2beta1ExternalMetricStatus"
    },
    {
        "name": "object",
        "baseName": "object",
        "type": "V2beta1ObjectMetricStatus"
    },
    {
        "name": "pods",
        "baseName": "pods",
        "type": "V2beta1PodsMetricStatus"
    },
    {
        "name": "resource",
        "baseName": "resource",
        "type": "V2beta1ResourceMetricStatus"
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "string"
    }
];
exports.V2beta1MetricStatus = V2beta1MetricStatus;
//# sourceMappingURL=v2beta1MetricStatus.js.map