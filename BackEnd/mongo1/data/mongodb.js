const { MongoClient } = require('mongodb')
const url = "mongodb://localhost:27017"

let client
async function connectToMongo() {
  try {
    if (!client) {
      client = await MongoClient.connect(url)
    }
    return client;
  } catch (err) {
    console.log(err)
  }
}

async function getMongoCollection(dbName, collectionName) {
    const client = await connectToMongo()
    return client.db(dbName).collection(collectionName)
  }

module.exports = { getMongoCollection }