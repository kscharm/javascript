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
* The pod this Toleration is attached to tolerates any taint that matches the triple <key,value,effect> using the matching operator <operator>.
*/
class V1Toleration {
    static getAttributeTypeMap() {
        return V1Toleration.attributeTypeMap;
    }
}
V1Toleration.discriminator = undefined;
V1Toleration.attributeTypeMap = [
    {
        "name": "effect",
        "baseName": "effect",
        "type": "string"
    },
    {
        "name": "key",
        "baseName": "key",
        "type": "string"
    },
    {
        "name": "operator",
        "baseName": "operator",
        "type": "string"
    },
    {
        "name": "tolerationSeconds",
        "baseName": "tolerationSeconds",
        "type": "number"
    },
    {
        "name": "value",
        "baseName": "value",
        "type": "string"
    }
];
exports.V1Toleration = V1Toleration;
//# sourceMappingURL=v1Toleration.js.map