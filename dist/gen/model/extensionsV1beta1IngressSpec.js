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
* IngressSpec describes the Ingress the user wishes to exist.
*/
class ExtensionsV1beta1IngressSpec {
    static getAttributeTypeMap() {
        return ExtensionsV1beta1IngressSpec.attributeTypeMap;
    }
}
ExtensionsV1beta1IngressSpec.discriminator = undefined;
ExtensionsV1beta1IngressSpec.attributeTypeMap = [
    {
        "name": "backend",
        "baseName": "backend",
        "type": "ExtensionsV1beta1IngressBackend"
    },
    {
        "name": "ingressClassName",
        "baseName": "ingressClassName",
        "type": "string"
    },
    {
        "name": "rules",
        "baseName": "rules",
        "type": "Array<ExtensionsV1beta1IngressRule>"
    },
    {
        "name": "tls",
        "baseName": "tls",
        "type": "Array<ExtensionsV1beta1IngressTLS>"
    }
];
exports.ExtensionsV1beta1IngressSpec = ExtensionsV1beta1IngressSpec;
//# sourceMappingURL=extensionsV1beta1IngressSpec.js.map