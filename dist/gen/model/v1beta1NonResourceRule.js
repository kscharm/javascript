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
* NonResourceRule holds information that describes a rule for the non-resource
*/
class V1beta1NonResourceRule {
    static getAttributeTypeMap() {
        return V1beta1NonResourceRule.attributeTypeMap;
    }
}
V1beta1NonResourceRule.discriminator = undefined;
V1beta1NonResourceRule.attributeTypeMap = [
    {
        "name": "nonResourceURLs",
        "baseName": "nonResourceURLs",
        "type": "Array<string>"
    },
    {
        "name": "verbs",
        "baseName": "verbs",
        "type": "Array<string>"
    }
];
exports.V1beta1NonResourceRule = V1beta1NonResourceRule;
//# sourceMappingURL=v1beta1NonResourceRule.js.map