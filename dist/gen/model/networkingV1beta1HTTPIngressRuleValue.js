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
* HTTPIngressRuleValue is a list of http selectors pointing to backends. In the example: http://<host>/<path>?<searchpart> -> backend where where parts of the url correspond to RFC 3986, this resource will be used to match against everything after the last \'/\' and before the first \'?\' or \'#\'.
*/
class NetworkingV1beta1HTTPIngressRuleValue {
    static getAttributeTypeMap() {
        return NetworkingV1beta1HTTPIngressRuleValue.attributeTypeMap;
    }
}
NetworkingV1beta1HTTPIngressRuleValue.discriminator = undefined;
NetworkingV1beta1HTTPIngressRuleValue.attributeTypeMap = [
    {
        "name": "paths",
        "baseName": "paths",
        "type": "Array<NetworkingV1beta1HTTPIngressPath>"
    }
];
exports.NetworkingV1beta1HTTPIngressRuleValue = NetworkingV1beta1HTTPIngressRuleValue;
//# sourceMappingURL=networkingV1beta1HTTPIngressRuleValue.js.map