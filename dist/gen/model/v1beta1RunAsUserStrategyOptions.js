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
* RunAsUserStrategyOptions defines the strategy type and any options used to create the strategy.
*/
class V1beta1RunAsUserStrategyOptions {
    static getAttributeTypeMap() {
        return V1beta1RunAsUserStrategyOptions.attributeTypeMap;
    }
}
V1beta1RunAsUserStrategyOptions.discriminator = undefined;
V1beta1RunAsUserStrategyOptions.attributeTypeMap = [
    {
        "name": "ranges",
        "baseName": "ranges",
        "type": "Array<V1beta1IDRange>"
    },
    {
        "name": "rule",
        "baseName": "rule",
        "type": "string"
    }
];
exports.V1beta1RunAsUserStrategyOptions = V1beta1RunAsUserStrategyOptions;
//# sourceMappingURL=v1beta1RunAsUserStrategyOptions.js.map