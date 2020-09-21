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
* VolumeAttachment captures the intent to attach or detach the specified volume to/from the specified node.  VolumeAttachment objects are non-namespaced.
*/
class V1VolumeAttachment {
    static getAttributeTypeMap() {
        return V1VolumeAttachment.attributeTypeMap;
    }
}
V1VolumeAttachment.discriminator = undefined;
V1VolumeAttachment.attributeTypeMap = [
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
        "name": "spec",
        "baseName": "spec",
        "type": "V1VolumeAttachmentSpec"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "V1VolumeAttachmentStatus"
    }
];
exports.V1VolumeAttachment = V1VolumeAttachment;
//# sourceMappingURL=v1VolumeAttachment.js.map