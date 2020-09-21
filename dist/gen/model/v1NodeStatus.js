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
* NodeStatus is information about the current status of a node.
*/
class V1NodeStatus {
    static getAttributeTypeMap() {
        return V1NodeStatus.attributeTypeMap;
    }
}
V1NodeStatus.discriminator = undefined;
V1NodeStatus.attributeTypeMap = [
    {
        "name": "addresses",
        "baseName": "addresses",
        "type": "Array<V1NodeAddress>"
    },
    {
        "name": "allocatable",
        "baseName": "allocatable",
        "type": "{ [key: string]: string; }"
    },
    {
        "name": "capacity",
        "baseName": "capacity",
        "type": "{ [key: string]: string; }"
    },
    {
        "name": "conditions",
        "baseName": "conditions",
        "type": "Array<V1NodeCondition>"
    },
    {
        "name": "config",
        "baseName": "config",
        "type": "V1NodeConfigStatus"
    },
    {
        "name": "daemonEndpoints",
        "baseName": "daemonEndpoints",
        "type": "V1NodeDaemonEndpoints"
    },
    {
        "name": "images",
        "baseName": "images",
        "type": "Array<V1ContainerImage>"
    },
    {
        "name": "nodeInfo",
        "baseName": "nodeInfo",
        "type": "V1NodeSystemInfo"
    },
    {
        "name": "phase",
        "baseName": "phase",
        "type": "string"
    },
    {
        "name": "volumesAttached",
        "baseName": "volumesAttached",
        "type": "Array<V1AttachedVolume>"
    },
    {
        "name": "volumesInUse",
        "baseName": "volumesInUse",
        "type": "Array<string>"
    }
];
exports.V1NodeStatus = V1NodeStatus;
//# sourceMappingURL=v1NodeStatus.js.map