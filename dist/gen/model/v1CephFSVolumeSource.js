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
* Represents a Ceph Filesystem mount that lasts the lifetime of a pod Cephfs volumes do not support ownership management or SELinux relabeling.
*/
class V1CephFSVolumeSource {
    static getAttributeTypeMap() {
        return V1CephFSVolumeSource.attributeTypeMap;
    }
}
V1CephFSVolumeSource.discriminator = undefined;
V1CephFSVolumeSource.attributeTypeMap = [
    {
        "name": "monitors",
        "baseName": "monitors",
        "type": "Array<string>"
    },
    {
        "name": "path",
        "baseName": "path",
        "type": "string"
    },
    {
        "name": "readOnly",
        "baseName": "readOnly",
        "type": "boolean"
    },
    {
        "name": "secretFile",
        "baseName": "secretFile",
        "type": "string"
    },
    {
        "name": "secretRef",
        "baseName": "secretRef",
        "type": "V1LocalObjectReference"
    },
    {
        "name": "user",
        "baseName": "user",
        "type": "string"
    }
];
exports.V1CephFSVolumeSource = V1CephFSVolumeSource;
//# sourceMappingURL=v1CephFSVolumeSource.js.map