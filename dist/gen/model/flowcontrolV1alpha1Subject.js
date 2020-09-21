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
* Subject matches the originator of a request, as identified by the request authentication system. There are three ways of matching an originator; by user, group, or service account.
*/
class FlowcontrolV1alpha1Subject {
    static getAttributeTypeMap() {
        return FlowcontrolV1alpha1Subject.attributeTypeMap;
    }
}
FlowcontrolV1alpha1Subject.discriminator = undefined;
FlowcontrolV1alpha1Subject.attributeTypeMap = [
    {
        "name": "group",
        "baseName": "group",
        "type": "V1alpha1GroupSubject"
    },
    {
        "name": "kind",
        "baseName": "kind",
        "type": "string"
    },
    {
        "name": "serviceAccount",
        "baseName": "serviceAccount",
        "type": "V1alpha1ServiceAccountSubject"
    },
    {
        "name": "user",
        "baseName": "user",
        "type": "V1alpha1UserSubject"
    }
];
exports.FlowcontrolV1alpha1Subject = FlowcontrolV1alpha1Subject;
//# sourceMappingURL=flowcontrolV1alpha1Subject.js.map