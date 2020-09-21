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
* JSONSchemaProps is a JSON-Schema following Specification Draft 4 (http://json-schema.org/).
*/
class V1beta1JSONSchemaProps {
    static getAttributeTypeMap() {
        return V1beta1JSONSchemaProps.attributeTypeMap;
    }
}
V1beta1JSONSchemaProps.discriminator = undefined;
V1beta1JSONSchemaProps.attributeTypeMap = [
    {
        "name": "$ref",
        "baseName": "$ref",
        "type": "string"
    },
    {
        "name": "$schema",
        "baseName": "$schema",
        "type": "string"
    },
    {
        "name": "additionalItems",
        "baseName": "additionalItems",
        "type": "object"
    },
    {
        "name": "additionalProperties",
        "baseName": "additionalProperties",
        "type": "object"
    },
    {
        "name": "allOf",
        "baseName": "allOf",
        "type": "Array<V1beta1JSONSchemaProps>"
    },
    {
        "name": "anyOf",
        "baseName": "anyOf",
        "type": "Array<V1beta1JSONSchemaProps>"
    },
    {
        "name": "_default",
        "baseName": "default",
        "type": "object"
    },
    {
        "name": "definitions",
        "baseName": "definitions",
        "type": "{ [key: string]: V1beta1JSONSchemaProps; }"
    },
    {
        "name": "dependencies",
        "baseName": "dependencies",
        "type": "{ [key: string]: object; }"
    },
    {
        "name": "description",
        "baseName": "description",
        "type": "string"
    },
    {
        "name": "_enum",
        "baseName": "enum",
        "type": "Array<object>"
    },
    {
        "name": "example",
        "baseName": "example",
        "type": "object"
    },
    {
        "name": "exclusiveMaximum",
        "baseName": "exclusiveMaximum",
        "type": "boolean"
    },
    {
        "name": "exclusiveMinimum",
        "baseName": "exclusiveMinimum",
        "type": "boolean"
    },
    {
        "name": "externalDocs",
        "baseName": "externalDocs",
        "type": "V1beta1ExternalDocumentation"
    },
    {
        "name": "format",
        "baseName": "format",
        "type": "string"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "items",
        "baseName": "items",
        "type": "object"
    },
    {
        "name": "maxItems",
        "baseName": "maxItems",
        "type": "number"
    },
    {
        "name": "maxLength",
        "baseName": "maxLength",
        "type": "number"
    },
    {
        "name": "maxProperties",
        "baseName": "maxProperties",
        "type": "number"
    },
    {
        "name": "maximum",
        "baseName": "maximum",
        "type": "number"
    },
    {
        "name": "minItems",
        "baseName": "minItems",
        "type": "number"
    },
    {
        "name": "minLength",
        "baseName": "minLength",
        "type": "number"
    },
    {
        "name": "minProperties",
        "baseName": "minProperties",
        "type": "number"
    },
    {
        "name": "minimum",
        "baseName": "minimum",
        "type": "number"
    },
    {
        "name": "multipleOf",
        "baseName": "multipleOf",
        "type": "number"
    },
    {
        "name": "not",
        "baseName": "not",
        "type": "V1beta1JSONSchemaProps"
    },
    {
        "name": "nullable",
        "baseName": "nullable",
        "type": "boolean"
    },
    {
        "name": "oneOf",
        "baseName": "oneOf",
        "type": "Array<V1beta1JSONSchemaProps>"
    },
    {
        "name": "pattern",
        "baseName": "pattern",
        "type": "string"
    },
    {
        "name": "patternProperties",
        "baseName": "patternProperties",
        "type": "{ [key: string]: V1beta1JSONSchemaProps; }"
    },
    {
        "name": "properties",
        "baseName": "properties",
        "type": "{ [key: string]: V1beta1JSONSchemaProps; }"
    },
    {
        "name": "required",
        "baseName": "required",
        "type": "Array<string>"
    },
    {
        "name": "title",
        "baseName": "title",
        "type": "string"
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "string"
    },
    {
        "name": "uniqueItems",
        "baseName": "uniqueItems",
        "type": "boolean"
    },
    {
        "name": "x_kubernetes_embedded_resource",
        "baseName": "x-kubernetes-embedded-resource",
        "type": "boolean"
    },
    {
        "name": "x_kubernetes_int_or_string",
        "baseName": "x-kubernetes-int-or-string",
        "type": "boolean"
    },
    {
        "name": "x_kubernetes_list_map_keys",
        "baseName": "x-kubernetes-list-map-keys",
        "type": "Array<string>"
    },
    {
        "name": "x_kubernetes_list_type",
        "baseName": "x-kubernetes-list-type",
        "type": "string"
    },
    {
        "name": "x_kubernetes_map_type",
        "baseName": "x-kubernetes-map-type",
        "type": "string"
    },
    {
        "name": "x_kubernetes_preserve_unknown_fields",
        "baseName": "x-kubernetes-preserve-unknown-fields",
        "type": "boolean"
    }
];
exports.V1beta1JSONSchemaProps = V1beta1JSONSchemaProps;
//# sourceMappingURL=v1beta1JSONSchemaProps.js.map