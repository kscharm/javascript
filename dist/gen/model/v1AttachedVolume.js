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
* AttachedVolume describes a volume attached to a node
*/
class V1AttachedVolume {
    static getAttributeTypeMap() {
        return V1AttachedVolume.attributeTypeMap;
    }
}
V1AttachedVolume.discriminator = undefined;
V1AttachedVolume.attributeTypeMap = [
    {
        "name": "devicePath",
        "baseName": "devicePath",
        "type": "string"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    }
];
exports.V1AttachedVolume = V1AttachedVolume;
//# sourceMappingURL=v1AttachedVolume.js.map