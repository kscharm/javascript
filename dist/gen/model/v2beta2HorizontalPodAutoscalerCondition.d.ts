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
/**
* HorizontalPodAutoscalerCondition describes the state of a HorizontalPodAutoscaler at a certain point.
*/
export declare class V2beta2HorizontalPodAutoscalerCondition {
    /**
    * lastTransitionTime is the last time the condition transitioned from one status to another
    */
    'lastTransitionTime'?: Date;
    /**
    * message is a human-readable explanation containing details about the transition
    */
    'message'?: string;
    /**
    * reason is the reason for the condition\'s last transition.
    */
    'reason'?: string;
    /**
    * status is the status of the condition (True, False, Unknown)
    */
    'status': string;
    /**
    * type describes the current condition
    */
    'type': string;
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
