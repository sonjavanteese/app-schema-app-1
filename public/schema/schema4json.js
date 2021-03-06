// JSON2Schema
// File for ID 'schema_id': jsoneditor_app/schema/schema4json.js
// created with JSON2Schema: https://niehausbert.gitlab.io/JSON2Schema

vDataJSON.schema4json = {
	"$schema": "http://json-schema.org/draft-04/schema#",
	"additionalProperties": true,
	"title": "Final Space Api",
	"definitions": {
		"comment": {
			"title": "Comment:",
			"type": "string",
			"format": "textarea",
			"default": ""
		},
		"yesno": {
			"default": "yes",
			"type": "string",
			"enum": [
				"yes",
				"no"
			]
		}
	},
	"type": "object",
	"id": "https://niebert.github.io/json-editor",
	"options": {
		"disable_collapse": false,
		"disable_edit_json": false,
		"disable_properties": false,
		"collapsed": false,
		"hidden": false
	},
	"defaultProperties": [
		"episoden",
		"character",
		"location"
	],
	"properties": {
		"episoden": {
			"type": "array",
			"id": "/properties/episoden",
			"title": "Episoden",
			"format": "tabs",
			"options": {
				"disable_collapse": false,
				"disable_array_add": false,
				"disable_array_delete": false,
				"disable_array_reorder": false,
				"disable_properties": false,
				"collapsed": false,
				"hidden": false
			},
			"items": {
				"type": "object",
				"id": "/properties/episoden/items",
				"title": "Episoden ",
				"options": {
					"disable_collapse": false,
					"disable_edit_json": false,
					"disable_properties": false,
					"collapsed": false,
					"hidden": false
				},
				"defaultProperties": [
					"id",
					"name",
					"air_date",
					"director",
					"writer",
					"characters",
					"img_url"
				],
				"properties": {
					"id": {
						"type": "integer",
						"id": "/properties/episoden/items/properties/id",
						"title": "Id",
						"default": 1,
						"options": {
							"hidden": false
						},
						"propertyOrder": 10
					},
					"name": {
						"type": "string",
						"id": "/properties/episoden/items/properties/name",
						"title": "Name",
						"default": "",
						"format": "text",
						"options": {
							"hidden": false
						},
						"propertyOrder": 20
					},
					"air_date": {
						"type": "string",
						"id": "/properties/episoden/items/properties/air_date",
						"title": "Air Date",
						"default": "",
						"format": "text",
						"options": {
							"hidden": false
						},
						"propertyOrder": 30
					},
					"director": {
						"type": "string",
						"id": "/properties/episoden/items/properties/director",
						"title": "Director",
						"default": "",
						"format": "text",
						"options": {
							"hidden": false
						},
						"propertyOrder": 40
					},
					"writer": {
						"type": "string",
						"id": "/properties/episoden/items/properties/writer",
						"title": "Writer",
						"default": "",
						"format": "text",
						"options": {
							"hidden": false
						},
						"propertyOrder": 50
					},
					"characters": {
						"type": "array",
						"id": "/properties/episoden/items/properties/characters",
						"title": "Characters",
						"format": "tabs",
						"options": {
							"disable_collapse": false,
							"disable_array_add": false,
							"disable_array_delete": false,
							"disable_array_reorder": false,
							"disable_properties": false,
							"collapsed": false,
							"hidden": false
						},
						"items": {
							"type": "string",
							"id": "/properties/episoden/items/properties/characters/items",
							"title": "Episode ",
							"default": "",
							"format": "text",
							"options": {
								"hidden": false
							}
						},
						"propertyOrder": 60
					},
					"img_url": {
						"type": "string",
						"id": "/properties/episoden/items/properties/img_url",
						"title": "Img Url",
						"default": "",
						"format": "text",
						"options": {
							"hidden": false
						},
						"propertyOrder": 70
					}
				}
			},
			"propertyOrder": 10
		},
		"character": {
			"type": "array",
			"id": "/properties/character",
			"title": "Character",
			"format": "tabs",
			"options": {
				"disable_collapse": false,
				"disable_array_add": false,
				"disable_array_delete": false,
				"disable_array_reorder": false,
				"disable_properties": false,
				"collapsed": false,
				"hidden": false
			},
			"items": {
				"type": "object",
				"id": "/properties/character/items",
				"title": "Character ",
				"options": {
					"disable_collapse": false,
					"disable_edit_json": false,
					"disable_properties": false,
					"collapsed": false,
					"hidden": false
				},
				"defaultProperties": [
					"id",
					"name",
					"status",
					"species",
					"gender",
					"hair",
					"alias",
					"origin",
					"abilities",
					"img_url"
				],
				"properties": {
					"id": {
						"type": "integer",
						"id": "/properties/character/items/properties/id",
						"title": "Id",
						"default": 5,
						"options": {
							"hidden": false
						},
						"propertyOrder": 10
					},
					"name": {
						"type": "string",
						"id": "/properties/character/items/properties/name",
						"title": "Name",
						"default": "",
						"format": "text",
						"options": {
							"hidden": false
						},
						"propertyOrder": 20
					},
					"status": {
						"type": "string",
						"id": "/properties/character/items/properties/status",
						"title": "Status",
						"default": "",
						"format": "text",
						"options": {
							"hidden": false
						},
						"propertyOrder": 30
					},
					"species": {
						"type": "string",
						"id": "/properties/character/items/properties/species",
						"title": "Species",
						"default": "",
						"format": "text",
						"options": {
							"hidden": false
						},
						"propertyOrder": 40
					},
					"gender": {
						"type": "string",
						"id": "/properties/character/items/properties/gender",
						"title": "Gender",
						"default": "",
						"format": "text",
						"options": {
							"hidden": false
						},
						"propertyOrder": 50
					},
					"hair": {
						"type": "string",
						"id": "/properties/character/items/properties/hair",
						"title": "Hair",
						"default": "",
						"format": "text",
						"options": {
							"hidden": false
						},
						"propertyOrder": 60
					},
					"alias": {
						"type": "array",
						"id": "/properties/character/items/properties/alias",
						"title": "Alias",
						"format": "tabs",
						"options": {
							"disable_collapse": false,
							"disable_array_add": false,
							"disable_array_delete": false,
							"disable_array_reorder": false,
							"disable_properties": false,
							"collapsed": false,
							"hidden": false
						},
						"items": {
							"type": "string",
							"id": "/properties/character/items/properties/alias/items",
							"title": "Alias ",
							"default": "",
							"format": "text",
							"options": {
								"hidden": false
							}
						},
						"propertyOrder": 70
					},
					"origin": {
						"type": "string",
						"id": "/properties/character/items/properties/origin",
						"title": "Origin",
						"default": "",
						"format": "text",
						"options": {
							"hidden": false
						},
						"propertyOrder": 80
					},
					"abilities": {
						"type": "array",
						"id": "/properties/character/items/properties/abilities",
						"title": "Abilities",
						"format": "tabs",
						"options": {
							"disable_collapse": false,
							"disable_array_add": false,
							"disable_array_delete": false,
							"disable_array_reorder": false,
							"disable_properties": false,
							"collapsed": false,
							"hidden": false
						},
						"items": {
							"type": "string",
							"id": "/properties/character/items/properties/abilities/items",
							"title": "Abilities ",
							"default": "",
							"format": "text",
							"options": {
								"hidden": false
							}
						},
						"propertyOrder": 90
					},
					"img_url": {
						"type": "string",
						"id": "/properties/character/items/properties/img_url",
						"title": "Img Url",
						"default": "",
						"format": "text",
						"options": {
							"hidden": false
						},
						"propertyOrder": 100
					}
				}
			},
			"propertyOrder": 20
		},
		"location": {
			"type": "array",
			"id": "/properties/location",
			"title": "Locations",
			"format": "tabs",
			"options": {
				"disable_collapse": false,
				"disable_array_add": false,
				"disable_array_delete": false,
				"disable_array_reorder": false,
				"disable_properties": false,
				"collapsed": false,
				"hidden": false
			},
			"items": {
				"type": "object",
				"id": "/properties/location/items",
				"title": "Location ",
				"options": {
					"disable_collapse": false,
					"disable_edit_json": false,
					"disable_properties": false,
					"collapsed": false,
					"hidden": false
				},
				"defaultProperties": [
					"id",
					"name",
					"type",
					"inhabitants",
					"notable_residents",
					"img_url"
				],
				"properties": {
					"id": {
						"type": "integer",
						"id": "/properties/location/items/properties/id",
						"title": "Id",
						"default": 3,
						"options": {
							"hidden": false
						},
						"propertyOrder": 10
					},
					"name": {
						"type": "string",
						"id": "/properties/location/items/properties/name",
						"title": "Name",
						"default": "",
						"format": "text",
						"options": {
							"hidden": false
						},
						"propertyOrder": 20
					},
					"type": {
						"type": "string",
						"id": "/properties/location/items/properties/type",
						"title": "Type",
						"default": "",
						"format": "text",
						"options": {
							"hidden": false
						},
						"propertyOrder": 30
					},
					"inhabitants": {
						"type": "array",
						"id": "/properties/location/items/properties/inhabitants",
						"title": "Inhab.",
						"format": "tabs",
						"options": {
							"disable_collapse": false,
							"disable_array_add": false,
							"disable_array_delete": false,
							"disable_array_reorder": false,
							"disable_properties": false,
							"collapsed": false,
							"hidden": false
						},
						"items": {
							"type": "string",
							"id": "/properties/location/items/properties/inhabitants/items",
							"title": "Inhabit.",
							"default": "",
							"format": "text",
							"options": {
								"hidden": false
							}
						},
						"propertyOrder": 40
					},
					"notable_residents": {
						"type": "array",
						"id": "/properties/location/items/properties/notable_residents",
						"title": "NotReside.",
						"format": "tabs",
						"options": {
							"disable_collapse": false,
							"disable_array_add": false,
							"disable_array_delete": false,
							"disable_array_reorder": false,
							"disable_properties": false,
							"collapsed": false,
							"hidden": false
						},
						"items": {
							"type": "string",
							"id": "/properties/location/items/properties/notable_residents/items",
							"title": "Resid.",
							"default": "",
							"format": "text",
							"options": {
								"hidden": false
							}
						},
						"propertyOrder": 50
					},
					"img_url": {
						"type": "string",
						"id": "/properties/location/items/properties/img_url",
						"title": "Img Url",
						"default": "",
						"format": "text",
						"options": {
							"hidden": false
						},
						"propertyOrder": 60
					}
				}
			},
			"propertyOrder": 30
		}
	}
};