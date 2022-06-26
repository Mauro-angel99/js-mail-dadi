const email = [`mauro@gmail.com`, `luca@gmail.com`, `fracesco@gmail.com`]

const userEmail = prompt(`scrivi la tua email`)
let access = ``

for (let i = 0; i < email.length; i++) {
    if (userEmail === email[i]) {
        access += `accesso consentito`
        console.log(access)
    }
}

if (access !== `accesso consentito`) {
    access += `accesso negato`
    console.log(access)
}
