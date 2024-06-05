import { useState } from "react"

export function Formulario() {
    const [formValues, setFValues] = useState({
        email: "",
        password: "",
    })

    const handleChange = (event, field) => {
        const valorIntroduzido = event.target.value
        setFValues((ps) => ({ ...ps, [field]: valorIntroduzido }))
    }

    return (
        <div>
            <div>
                <div>Email: </div>
                <input
                    value={formValues.email}
                    onChange={(e) => handleChange(e, "email")} />
                <input
                    type="password"
                    value={formValues.password}
                    onChange={(e) => handleChange(e, "password")} />
            </div>
        </div>
    )
}