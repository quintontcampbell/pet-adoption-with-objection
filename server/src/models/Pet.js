const Model = require('./Model.js')

class Pet extends Model {
  static get tableName() {
    return "pets"
  }
  static get jsonSchema() {
    return {
      type: "object",
      required: ["name", "available"],
      properties: {
        name: {
          type: "string"
        },
        available: {
          type: "boolean"
        },
        weight: {
          type: "integer"
        },
        estimatedAge: {
          type: "integer"
        },
        speciesId: {
          type: ["integer", "string"]
        }
      }
    }
  }
  static get relationMappings() {
    const Species = require("./Species.js")
    return {
      species: {
        relation: Model.BelongsToOneRelation,
        modelClass: Species,
        join: {
          from: "pets.speciesId",
          to: "species.id"
        }
      }
    }
  }
}

module.exports = Pet