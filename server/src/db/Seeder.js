/* eslint-disable no-console */
import { connection } from "../boot.js"
import Species from "../models/Species.js"
import Pet from "../models/Pet.js"

class Seeder {
  static async seed() {
    const feline = await Species.query().insert({ name: "feline" })
    const canine = await Species.query().insert({ name: "canine" })
    const reptile = await Species.query().insert({ name: "reptile" })
    const fluffy = await Pet.query().insert({ name: "Fluffy", available: true, weight: 7, estimatedAge: 42})
    const scottsdale = await Pet.query().insert({ name: "ScottsDale", available: false})
    console.log("Done!")
    await connection.destroy()
  }
}

export default Seeder