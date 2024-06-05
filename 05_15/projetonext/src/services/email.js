export function validateEmail(email) {
    const tests = [
        (email) => email.includes("@"),
        (email) => email.split("@").length === 2,
    ]

    return tests.every(test => test(email) === true)
}