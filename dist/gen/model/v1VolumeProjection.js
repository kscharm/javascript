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
* Projection that may be projected along with other supported volume types
*/
class V1VolumeProjection {
    static getAttributeTypeMap() {
        return V1VolumeProjection.attributeTypeMap;
    }
}
V1VolumeProjection.discriminator = undefined;
V1VolumeProjection.attributeTypeMap = [
    {
        "name": "configMap",
        "baseName": "configMap",
        "type": "V1ConfigMapProjection"
    },
    {
        "name": "downwardAPI",
        "baseName": "downwardAPI",
        "type": "V1DownwardAPIProjection"
    },
    {
        "name": "secret",
        "baseName": "secret",
        "type": "V1SecretProjection"
    },
    {
        "name": "serviceAccountToken",
        "baseName": "serviceAccountToken",
        "type": "V1ServiceAccountTokenProjection"
    }
];
exports.V1VolumeProjection = V1VolumeProjection;
//# sourceMappingURL=v1VolumeProjection.js.map