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
* CustomResourceDefinitionStatus indicates the state of the CustomResourceDefinition
*/
class V1CustomResourceDefinitionStatus {
    static getAttributeTypeMap() {
        return V1CustomResourceDefinitionStatus.attributeTypeMap;
    }
}
V1CustomResourceDefinitionStatus.discriminator = undefined;
V1CustomResourceDefinitionStatus.attributeTypeMap = [
    {
        "name": "acceptedNames",
        "baseName": "acceptedNames",
        "type": "V1CustomResourceDefinitionNames"
    },
    {
        "name": "conditions",
        "baseName": "conditions",
        "type": "Array<V1CustomResourceDefinitionCondition>"
    },
    {
        "name": "storedVersions",
        "baseName": "storedVersions",
        "type": "Array<string>"
    }
];
exports.V1CustomResourceDefinitionStatus = V1CustomResourceDefinitionStatus;
//# sourceMappingURL=v1CustomResourceDefinitionStatus.js.map