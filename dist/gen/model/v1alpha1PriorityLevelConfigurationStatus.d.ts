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
import { V1alpha1PriorityLevelConfigurationCondition } from './v1alpha1PriorityLevelConfigurationCondition';
/**
* PriorityLevelConfigurationStatus represents the current state of a \"request-priority\".
*/
export declare class V1alpha1PriorityLevelConfigurationStatus {
    /**
    * `conditions` is the current state of \"request-priority\".
    */
    'conditions'?: Array<V1alpha1PriorityLevelConfigurationCondition>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
