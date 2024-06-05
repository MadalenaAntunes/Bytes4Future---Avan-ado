import { getCollection } from ".";

const COLLECTION_NAME = "users"

export async function getUserByEmail(email) {
    const collection = await getCollection(COLLECTION_NAME);
    return await collection.findOne({ email: email })
}