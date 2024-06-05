export function cleanUserData(obj) {
    if (obj.password !== obj.passwordConf) {
        return {
            ok: false,
            error: "Passwords don't match",
            obj: {}
        }
    }
    //garantir que password tem 8 caracteres
    //garantir que password tem letras minusculas, maiusculas e/ou numeros e simbolos


    //Todos os dados já foram validados e estão "ok"
    return {
        ok: true,
        errors: [],
        obj: obj
    }
}

export function addUser(user) {
    return insertUser(user)
}
export function getUserByEmail(email) {
    return findUserByEmail(email)
}