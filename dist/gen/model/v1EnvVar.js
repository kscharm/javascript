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
* EnvVar represents an environment variable present in a Container.
*/
class V1EnvVar {
    static getAttributeTypeMap() {
        return V1EnvVar.attributeTypeMap;
    }
}
V1EnvVar.discriminator = undefined;
V1EnvVar.attributeTypeMap = [
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "value",
        "baseName": "value",
        "type": "string"
    },
    {
        "name": "valueFrom",
        "baseName": "valueFrom",
        "type": "V1EnvVarSource"
    }
];
exports.V1EnvVar = V1EnvVar;
//# sourceMappingURL=v1EnvVar.js.map