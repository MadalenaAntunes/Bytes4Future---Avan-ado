
// "/api/form"

import { validateLogin } from "@/services/auth";
import { validateEmail } from "@/services/email";

//Segura "ctrl" e clica nas funções para abrir o respetivo código
export default async function handler(req, res) {
    if (req.method === "POST") {
        const { email, password } = req.body

        const emailIsValid = validateEmail(email)
        if (!emailIsValid) {
            return res.status(400).json({ message: "invalid_email" })
        }
        
        const user = await validateLogin(email, password)
        if(!user) {
            return res.status(401).json({ message: "invalid_credentials" })
        }

        res.status(200).json({ user: user });
    }
    res.status(404).json({ message: "method_not_implemented" });
}
