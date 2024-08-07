export const signupValidation = {
    firstName: {
        required: true,
        validator: {
            regEx: RegExp(/^[a-zA-Z ]+$/),
            error: "First name must contain only letters.",
        },
    },
    lastName: {
        required: true,
        validator: {
            regEx: RegExp(/^[a-zA-Z ]+$/),
            error: "Last name must contain only letters.",
        },
    },
    email: {
        required: true,
        validator: {
            regEx: RegExp(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/),
            error: "Please enter a valid email address.",
        },
    },
    password: {
        required: true,
        validator: {
            regEx: RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/),
            error: "Password must contain at least 8 characters\n,one capital, special character and number.",
        },
    },
}
