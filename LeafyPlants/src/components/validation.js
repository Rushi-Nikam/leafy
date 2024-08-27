function validation(values) {
    let errors = {};

    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i;
    // Updated password pattern to meet your criteria
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

    if (values.Fname === undefined || values.Fname === "") {
        errors.Fname = "First name should not be empty";
    }

    if (values.Lname === undefined || values.Lname === "") {
        errors.Lname = "Last name should not be empty";
    }

    if (values.email === undefined || values.email === "") {
        errors.email = "Email should not be empty";
    } else if (!email_pattern.test(values.email)) {
        errors.email = "Email format is incorrect";
    }

    if (values.password === undefined || values.password === "") {
        errors.password = "Password should not be empty";
    } else if (!password_pattern.test(values.password)) {
        errors.password = "Password format is incorrect. It should be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one digit, and one special character.";
    }

    return errors;
}

export default validation;
