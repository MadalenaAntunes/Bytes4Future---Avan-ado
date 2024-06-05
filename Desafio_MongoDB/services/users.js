const { createAllUsers } = require("../data/users")

async function getAllUsers(user) {
    const userID = await createAllUsers(user);
    return userID;  
}

async function getUserByEmail(email) {
    const user = await findUserWithEmail(email);
    if(user.length === 0) return false
    return true
}

async function verifyPass(email, password) {
    const user = await findUserWithEmail(email);
    if(user[0].password === password) return true
    return false
}

module.exports = { getAllUsers, getUserByEmail, verifyPass }