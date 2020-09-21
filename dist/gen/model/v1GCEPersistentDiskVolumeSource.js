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
* Represents a Persistent Disk resource in Google Compute Engine.  A GCE PD must exist before mounting to a container. The disk must also be in the same GCE project and zone as the kubelet. A GCE PD can only be mounted as read/write once or read-only many times. GCE PDs support ownership management and SELinux relabeling.
*/
class V1GCEPersistentDiskVolumeSource {
    static getAttributeTypeMap() {
        return V1GCEPersistentDiskVolumeSource.attributeTypeMap;
    }
}
V1GCEPersistentDiskVolumeSource.discriminator = undefined;
V1GCEPersistentDiskVolumeSource.attributeTypeMap = [
    {
        "name": "fsType",
        "baseName": "fsType",
        "type": "string"
    },
    {
        "name": "partition",
        "baseName": "partition",
        "type": "number"
    },
    {
        "name": "pdName",
        "baseName": "pdName",
        "type": "string"
    },
    {
        "name": "readOnly",
        "baseName": "readOnly",
        "type": "boolean"
    }
];
exports.V1GCEPersistentDiskVolumeSource = V1GCEPersistentDiskVolumeSource;
//# sourceMappingURL=v1GCEPersistentDiskVolumeSource.js.map