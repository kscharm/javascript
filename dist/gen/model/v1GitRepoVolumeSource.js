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
* Represents a volume that is populated with the contents of a git repository. Git repo volumes do not support ownership management. Git repo volumes support SELinux relabeling.  DEPRECATED: GitRepo is deprecated. To provision a container with a git repo, mount an EmptyDir into an InitContainer that clones the repo using git, then mount the EmptyDir into the Pod\'s container.
*/
class V1GitRepoVolumeSource {
    static getAttributeTypeMap() {
        return V1GitRepoVolumeSource.attributeTypeMap;
    }
}
V1GitRepoVolumeSource.discriminator = undefined;
V1GitRepoVolumeSource.attributeTypeMap = [
    {
        "name": "directory",
        "baseName": "directory",
        "type": "string"
    },
    {
        "name": "repository",
        "baseName": "repository",
        "type": "string"
    },
    {
        "name": "revision",
        "baseName": "revision",
        "type": "string"
    }
];
exports.V1GitRepoVolumeSource = V1GitRepoVolumeSource;
//# sourceMappingURL=v1GitRepoVolumeSource.js.map