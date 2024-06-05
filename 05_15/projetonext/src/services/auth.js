import { getUserByEmail } from "@/data/users"

export async function validateLogin(email, password) {
    const user = await getUserByEmail(email)
    if (!user || user.password !== password) return null
    return user
}
