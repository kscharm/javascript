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
* A single application container that you want to run within a pod.
*/
class V1Container {
    static getAttributeTypeMap() {
        return V1Container.attributeTypeMap;
    }
}
V1Container.discriminator = undefined;
V1Container.attributeTypeMap = [
    {
        "name": "args",
        "baseName": "args",
        "type": "Array<string>"
    },
    {
        "name": "command",
        "baseName": "command",
        "type": "Array<string>"
    },
    {
        "name": "env",
        "baseName": "env",
        "type": "Array<V1EnvVar>"
    },
    {
        "name": "envFrom",
        "baseName": "envFrom",
        "type": "Array<V1EnvFromSource>"
    },
    {
        "name": "image",
        "baseName": "image",
        "type": "string"
    },
    {
        "name": "imagePullPolicy",
        "baseName": "imagePullPolicy",
        "type": "string"
    },
    {
        "name": "lifecycle",
        "baseName": "lifecycle",
        "type": "V1Lifecycle"
    },
    {
        "name": "livenessProbe",
        "baseName": "livenessProbe",
        "type": "V1Probe"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "ports",
        "baseName": "ports",
        "type": "Array<V1ContainerPort>"
    },
    {
        "name": "readinessProbe",
        "baseName": "readinessProbe",
        "type": "V1Probe"
    },
    {
        "name": "resources",
        "baseName": "resources",
        "type": "V1ResourceRequirements"
    },
    {
        "name": "securityContext",
        "baseName": "securityContext",
        "type": "V1SecurityContext"
    },
    {
        "name": "startupProbe",
        "baseName": "startupProbe",
        "type": "V1Probe"
    },
    {
        "name": "stdin",
        "baseName": "stdin",
        "type": "boolean"
    },
    {
        "name": "stdinOnce",
        "baseName": "stdinOnce",
        "type": "boolean"
    },
    {
        "name": "terminationMessagePath",
        "baseName": "terminationMessagePath",
        "type": "string"
    },
    {
        "name": "terminationMessagePolicy",
        "baseName": "terminationMessagePolicy",
        "type": "string"
    },
    {
        "name": "tty",
        "baseName": "tty",
        "type": "boolean"
    },
    {
        "name": "volumeDevices",
        "baseName": "volumeDevices",
        "type": "Array<V1VolumeDevice>"
    },
    {
        "name": "volumeMounts",
        "baseName": "volumeMounts",
        "type": "Array<V1VolumeMount>"
    },
    {
        "name": "workingDir",
        "baseName": "workingDir",
        "type": "string"
    }
];
exports.V1Container = V1Container;
//# sourceMappingURL=v1Container.js.map