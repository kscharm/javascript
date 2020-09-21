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
* Preconditions must be fulfilled before an operation (update, delete, etc.) is carried out.
*/
class V1Preconditions {
    static getAttributeTypeMap() {
        return V1Preconditions.attributeTypeMap;
    }
}
V1Preconditions.discriminator = undefined;
V1Preconditions.attributeTypeMap = [
    {
        "name": "resourceVersion",
        "baseName": "resourceVersion",
        "type": "string"
    },
    {
        "name": "uid",
        "baseName": "uid",
        "type": "string"
    }
];
exports.V1Preconditions = V1Preconditions;
//# sourceMappingURL=v1Preconditions.js.map