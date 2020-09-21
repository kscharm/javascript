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
* Represents a source location of a volume to mount, managed by an external CSI driver
*/
class V1CSIVolumeSource {
    static getAttributeTypeMap() {
        return V1CSIVolumeSource.attributeTypeMap;
    }
}
V1CSIVolumeSource.discriminator = undefined;
V1CSIVolumeSource.attributeTypeMap = [
    {
        "name": "driver",
        "baseName": "driver",
        "type": "string"
    },
    {
        "name": "fsType",
        "baseName": "fsType",
        "type": "string"
    },
    {
        "name": "nodePublishSecretRef",
        "baseName": "nodePublishSecretRef",
        "type": "V1LocalObjectReference"
    },
    {
        "name": "readOnly",
        "baseName": "readOnly",
        "type": "boolean"
    },
    {
        "name": "volumeAttributes",
        "baseName": "volumeAttributes",
        "type": "{ [key: string]: string; }"
    }
];
exports.V1CSIVolumeSource = V1CSIVolumeSource;
//# sourceMappingURL=v1CSIVolumeSource.js.map