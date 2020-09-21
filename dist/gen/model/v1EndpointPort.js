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
* EndpointPort is a tuple that describes a single port.
*/
class V1EndpointPort {
    static getAttributeTypeMap() {
        return V1EndpointPort.attributeTypeMap;
    }
}
V1EndpointPort.discriminator = undefined;
V1EndpointPort.attributeTypeMap = [
    {
        "name": "appProtocol",
        "baseName": "appProtocol",
        "type": "string"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "port",
        "baseName": "port",
        "type": "number"
    },
    {
        "name": "protocol",
        "baseName": "protocol",
        "type": "string"
    }
];
exports.V1EndpointPort = V1EndpointPort;
//# sourceMappingURL=v1EndpointPort.js.map