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
* Describes a certificate signing request
*/
class V1beta1CertificateSigningRequest {
    static getAttributeTypeMap() {
        return V1beta1CertificateSigningRequest.attributeTypeMap;
    }
}
V1beta1CertificateSigningRequest.discriminator = undefined;
V1beta1CertificateSigningRequest.attributeTypeMap = [
    {
        "name": "apiVersion",
        "baseName": "apiVersion",
        "type": "string"
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
        "name": "spec",
        "baseName": "spec",
        "type": "V1beta1CertificateSigningRequestSpec"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "V1beta1CertificateSigningRequestStatus"
    }
];
exports.V1beta1CertificateSigningRequest = V1beta1CertificateSigningRequest;
//# sourceMappingURL=v1beta1CertificateSigningRequest.js.map