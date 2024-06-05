import {MongoClient} from "mongodb"

//Vê o ficheiro "/.env"
const URL = process.env.MONGO_URL ?? "mongodb://127.0.0.1:27017"
const DB_NAME = process.env.DB_NAME ?? "project"

let client
async function connectToMongo() {
  try {
    if (!client) {
      console.log("Attempting to connect to " + URL)
      client = await MongoClient.connect(URL)
    }
    console.log(client)
    return client;
  } catch (err) {
    console.log(err)
  }
}

export async function getCollection(collectionName, dbName = DB_NAME) {
    const client = await connectToMongo();
    return client.db(dbName).collection(collectionName)
}