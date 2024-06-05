const { getMongoCollection } = require("./mongodb")
const DB = "primeira"
const COLLECTION = "yeah"

async function findAllYeah() {
  const collection = await getMongoCollection(DB, COLLECTION)
  const result = await collection.find().toArray()
  return result
}

module.exports = {findAllYeah}