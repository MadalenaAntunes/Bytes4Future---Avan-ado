const { getMongoCollection } = require("./db")
const DB = "Desafio13"
const COLLECTION = "users"

async function createAllUsers(data) {
  const collection = await getMongoCollection(DB, COLLECTION)
  const result = await collection.insertOne(data)
  return result.insertedID
}

async function findUserWithEmail(email) {
  const collection = await getMongoCollection(DB, COLLECTION)
  const result = await collection.find({email: email}).toArray()
  return result
}

// async function passwordMatch(password) {
//   const collection = await getMongoCollection(DB, COLLECTION)
//   const result = await collection.find({password: password})
//   return result
// }

module.exports = {createAllUsers, findUserWithEmail, passwordMatch}