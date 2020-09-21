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
* LimitRangeList is a list of LimitRange items.
*/
class V1LimitRangeList {
    static getAttributeTypeMap() {
        return V1LimitRangeList.attributeTypeMap;
    }
}
V1LimitRangeList.discriminator = undefined;
V1LimitRangeList.attributeTypeMap = [
    {
        "name": "apiVersion",
        "baseName": "apiVersion",
        "type": "string"
    },
    {
        "name": "items",
        "baseName": "items",
        "type": "Array<V1LimitRange>"
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
exports.V1LimitRangeList = V1LimitRangeList;
//# sourceMappingURL=v1LimitRangeList.js.map