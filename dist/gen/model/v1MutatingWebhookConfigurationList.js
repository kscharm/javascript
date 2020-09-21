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
* MutatingWebhookConfigurationList is a list of MutatingWebhookConfiguration.
*/
class V1MutatingWebhookConfigurationList {
    static getAttributeTypeMap() {
        return V1MutatingWebhookConfigurationList.attributeTypeMap;
    }
}
V1MutatingWebhookConfigurationList.discriminator = undefined;
V1MutatingWebhookConfigurationList.attributeTypeMap = [
    {
        "name": "apiVersion",
        "baseName": "apiVersion",
        "type": "string"
    },
    {
        "name": "items",
        "baseName": "items",
        "type": "Array<V1MutatingWebhookConfiguration>"
    },
    {
        "name": "kind",
        "baseName": "kind",
        "type": "string"
    },
    {
        "name": "metadata",
        "baseName": "metadata",
        "type": "V1ListMeta"
    }
];
exports.V1MutatingWebhookConfigurationList = V1MutatingWebhookConfigurationList;
//# sourceMappingURL=v1MutatingWebhookConfigurationList.js.map