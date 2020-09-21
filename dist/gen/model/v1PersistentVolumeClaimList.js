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
* PersistentVolumeClaimList is a list of PersistentVolumeClaim items.
*/
class V1PersistentVolumeClaimList {
    static getAttributeTypeMap() {
        return V1PersistentVolumeClaimList.attributeTypeMap;
    }
}
V1PersistentVolumeClaimList.discriminator = undefined;
V1PersistentVolumeClaimList.attributeTypeMap = [
    {
        "name": "apiVersion",
        "baseName": "apiVersion",
        "type": "string"
    },
    {
        "name": "items",
        "baseName": "items",
        "type": "Array<V1PersistentVolumeClaim>"
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
exports.V1PersistentVolumeClaimList = V1PersistentVolumeClaimList;
//# sourceMappingURL=v1PersistentVolumeClaimList.js.map