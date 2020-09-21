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
import { V1ReplicationControllerCondition } from './v1ReplicationControllerCondition';
/**
* ReplicationControllerStatus represents the current status of a replication controller.
*/
export declare class V1ReplicationControllerStatus {
    /**
    * The number of available replicas (ready for at least minReadySeconds) for this replication controller.
    */
    'availableReplicas'?: number;
    /**
    * Represents the latest available observations of a replication controller\'s current state.
    */
    'conditions'?: Array<V1ReplicationControllerCondition>;
    /**
    * The number of pods that have labels matching the labels of the pod template of the replication controller.
    */
    'fullyLabeledReplicas'?: number;
    /**
    * ObservedGeneration reflects the generation of the most recently observed replication controller.
    */
    'observedGeneration'?: number;
    /**
    * The number of ready replicas for this replication controller.
    */
    'readyReplicas'?: number;
    /**
    * Replicas is the most recently oberved number of replicas. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller#what-is-a-replicationcontroller
    */
    'replicas': number;
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
