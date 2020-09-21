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
* EnvFromSource represents the source of a set of ConfigMaps
*/
class V1EnvFromSource {
    static getAttributeTypeMap() {
        return V1EnvFromSource.attributeTypeMap;
    }
}
V1EnvFromSource.discriminator = undefined;
V1EnvFromSource.attributeTypeMap = [
    {
        "name": "configMapRef",
        "baseName": "configMapRef",
        "type": "V1ConfigMapEnvSource"
    },
    {
        "name": "prefix",
        "baseName": "prefix",
        "type": "string"
    },
    {
        "name": "secretRef",
        "baseName": "secretRef",
        "type": "V1SecretEnvSource"
    }
];
exports.V1EnvFromSource = V1EnvFromSource;
//# sourceMappingURL=v1EnvFromSource.js.map