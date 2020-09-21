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
* PodTemplate describes a template for creating copies of a predefined pod.
*/
class V1PodTemplate {
    static getAttributeTypeMap() {
        return V1PodTemplate.attributeTypeMap;
    }
}
V1PodTemplate.discriminator = undefined;
V1PodTemplate.attributeTypeMap = [
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
        "name": "template",
        "baseName": "template",
        "type": "V1PodTemplateSpec"
    }
];
exports.V1PodTemplate = V1PodTemplate;
//# sourceMappingURL=v1PodTemplate.js.map