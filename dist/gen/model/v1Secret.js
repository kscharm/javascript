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
* Secret holds secret data of a certain type. The total bytes of the values in the Data field must be less than MaxSecretSize bytes.
*/
class V1Secret {
    static getAttributeTypeMap() {
        return V1Secret.attributeTypeMap;
    }
}
V1Secret.discriminator = undefined;
V1Secret.attributeTypeMap = [
    {
        "name": "apiVersion",
        "baseName": "apiVersion",
        "type": "string"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "{ [key: string]: string; }"
    },
    {
        "name": "immutable",
        "baseName": "immutable",
        "type": "boolean"
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
        "name": "stringData",
        "baseName": "stringData",
        "type": "{ [key: string]: string; }"
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "string"
    }
];
exports.V1Secret = V1Secret;
//# sourceMappingURL=v1Secret.js.map