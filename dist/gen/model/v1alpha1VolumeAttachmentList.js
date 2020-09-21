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
* VolumeAttachmentList is a collection of VolumeAttachment objects.
*/
class V1alpha1VolumeAttachmentList {
    static getAttributeTypeMap() {
        return V1alpha1VolumeAttachmentList.attributeTypeMap;
    }
}
V1alpha1VolumeAttachmentList.discriminator = undefined;
V1alpha1VolumeAttachmentList.attributeTypeMap = [
    {
        "name": "apiVersion",
        "baseName": "apiVersion",
        "type": "string"
    },
    {
        "name": "items",
        "baseName": "items",
        "type": "Array<V1alpha1VolumeAttachment>"
    },
    {
        "name": "kind",
        "baseName": "kind",
        "type": "string"
    },
    {
        "name": "metadata",
        "baseName": "metadata",
        "type": "V1ListMeta"
    }
];
exports.V1alpha1VolumeAttachmentList = V1alpha1VolumeAttachmentList;
//# sourceMappingURL=v1alpha1VolumeAttachmentList.js.map