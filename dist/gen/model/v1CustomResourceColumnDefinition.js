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
* CustomResourceColumnDefinition specifies a column for server side printing.
*/
class V1CustomResourceColumnDefinition {
    static getAttributeTypeMap() {
        return V1CustomResourceColumnDefinition.attributeTypeMap;
    }
}
V1CustomResourceColumnDefinition.discriminator = undefined;
V1CustomResourceColumnDefinition.attributeTypeMap = [
    {
        "name": "description",
        "baseName": "description",
        "type": "string"
    },
    {
        "name": "format",
        "baseName": "format",
        "type": "string"
    },
    {
        "name": "jsonPath",
        "baseName": "jsonPath",
        "type": "string"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "priority",
        "baseName": "priority",
        "type": "number"
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "string"
    }
];
exports.V1CustomResourceColumnDefinition = V1CustomResourceColumnDefinition;
//# sourceMappingURL=v1CustomResourceColumnDefinition.js.map