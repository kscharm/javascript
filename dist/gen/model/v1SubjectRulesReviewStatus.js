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
* SubjectRulesReviewStatus contains the result of a rules check. This check can be incomplete depending on the set of authorizers the server is configured with and any errors experienced during evaluation. Because authorization rules are additive, if a rule appears in a list it\'s safe to assume the subject has that permission, even if that list is incomplete.
*/
class V1SubjectRulesReviewStatus {
    static getAttributeTypeMap() {
        return V1SubjectRulesReviewStatus.attributeTypeMap;
    }
}
V1SubjectRulesReviewStatus.discriminator = undefined;
V1SubjectRulesReviewStatus.attributeTypeMap = [
    {
        "name": "evaluationError",
        "baseName": "evaluationError",
        "type": "string"
    },
    {
        "name": "incomplete",
        "baseName": "incomplete",
        "type": "boolean"
    },
    {
        "name": "nonResourceRules",
        "baseName": "nonResourceRules",
        "type": "Array<V1NonResourceRule>"
    },
    {
        "name": "resourceRules",
        "baseName": "resourceRules",
        "type": "Array<V1ResourceRule>"
    }
];
exports.V1SubjectRulesReviewStatus = V1SubjectRulesReviewStatus;
//# sourceMappingURL=v1SubjectRulesReviewStatus.js.map