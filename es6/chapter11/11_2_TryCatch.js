function validateEmail(email) {
    return email.match(/@/) ?
        email :
        new Error(`invalid email: ${email}`);
}

const email = null;

try {
    const validatedEmail = validateEmail(email);
    if (validatedEmail instanceof Error) {
        console.log(`Error: ${validatedEmail.message}`);
    } else {
        console.log(`Valid email: ${validatedEmail}`);
    }
} catch (err) {
    console.error(`Error: ${err.message}`);
}