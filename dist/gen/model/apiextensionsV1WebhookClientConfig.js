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
* WebhookClientConfig contains the information to make a TLS connection with the webhook.
*/
class ApiextensionsV1WebhookClientConfig {
    static getAttributeTypeMap() {
        return ApiextensionsV1WebhookClientConfig.attributeTypeMap;
    }
}
ApiextensionsV1WebhookClientConfig.discriminator = undefined;
ApiextensionsV1WebhookClientConfig.attributeTypeMap = [
    {
        "name": "caBundle",
        "baseName": "caBundle",
        "type": "string"
    },
    {
        "name": "service",
        "baseName": "service",
        "type": "ApiextensionsV1ServiceReference"
    },
    {
        "name": "url",
        "baseName": "url",
        "type": "string"
    }
];
exports.ApiextensionsV1WebhookClientConfig = ApiextensionsV1WebhookClientConfig;
//# sourceMappingURL=apiextensionsV1WebhookClientConfig.js.map