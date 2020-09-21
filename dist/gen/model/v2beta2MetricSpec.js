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
* MetricSpec specifies how to scale based on a single metric (only `type` and one other matching field should be set at once).
*/
class V2beta2MetricSpec {
    static getAttributeTypeMap() {
        return V2beta2MetricSpec.attributeTypeMap;
    }
}
V2beta2MetricSpec.discriminator = undefined;
V2beta2MetricSpec.attributeTypeMap = [
    {
        "name": "external",
        "baseName": "external",
        "type": "V2beta2ExternalMetricSource"
    },
    {
        "name": "object",
        "baseName": "object",
        "type": "V2beta2ObjectMetricSource"
    },
    {
        "name": "pods",
        "baseName": "pods",
        "type": "V2beta2PodsMetricSource"
    },
    {
        "name": "resource",
        "baseName": "resource",
        "type": "V2beta2ResourceMetricSource"
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "string"
    }
];
exports.V2beta2MetricSpec = V2beta2MetricSpec;
//# sourceMappingURL=v2beta2MetricSpec.js.map