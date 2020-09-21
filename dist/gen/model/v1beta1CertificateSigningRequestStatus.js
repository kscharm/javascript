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
class V1beta1CertificateSigningRequestStatus {
    static getAttributeTypeMap() {
        return V1beta1CertificateSigningRequestStatus.attributeTypeMap;
    }
}
V1beta1CertificateSigningRequestStatus.discriminator = undefined;
V1beta1CertificateSigningRequestStatus.attributeTypeMap = [
    {
        "name": "certificate",
        "baseName": "certificate",
        "type": "string"
    },
    {
        "name": "conditions",
        "baseName": "conditions",
        "type": "Array<V1beta1CertificateSigningRequestCondition>"
    }
];
exports.V1beta1CertificateSigningRequestStatus = V1beta1CertificateSigningRequestStatus;
//# sourceMappingURL=v1beta1CertificateSigningRequestStatus.js.map