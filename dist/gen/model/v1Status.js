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
* Status is a return value for calls that don\'t return other objects.
*/
class V1Status {
    static getAttributeTypeMap() {
        return V1Status.attributeTypeMap;
    }
}
V1Status.discriminator = undefined;
V1Status.attributeTypeMap = [
    {
        "name": "apiVersion",
        "baseName": "apiVersion",
        "type": "string"
    },
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "details",
        "baseName": "details",
        "type": "V1StatusDetails"
    },
    {
        "name": "kind",
        "baseName": "kind",
        "type": "string"
    },
    {
        "name": "message",
        "baseName": "message",
        "type": "string"
    },
    {
        "name": "metadata",
        "baseName": "metadata",
        "type": "V1ListMeta"
    },
    {
        "name": "reason",
        "baseName": "reason",
        "type": "string"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "string"
    }
];
exports.V1Status = V1Status;
//# sourceMappingURL=v1Status.js.map