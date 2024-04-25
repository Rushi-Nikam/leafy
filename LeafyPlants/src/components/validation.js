function validation(values) {
    let errors = {};

    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i;
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;


    if (values.Fname === undefined || values.Fname === "") {
        errors.Fname = "Name should not be empty";
    } else {
        errors.name = "";
    }
    if (values.Lname === undefined || values.Lname === "") {
        errors.Lname = "Last Name should not be empty";
    } else {
        errors.Lname = "";
    }

    if (values.email === undefined || values.email === "") {
        errors.email = "Email should not be empty";
    } else if (!email_pattern.test(values.email)) {
        errors.email = "Email format is incorrect";
    } else {
        errors.email = "";
    }

    if (values.password === undefined || values.password === "") {
        errors.password = "Password should not be empty";
    } else if (!password_pattern.test(values.password)) {
        errors.password = "Password format is incorrect";
    } else {
        errors.password = "";
    }
    if (values.Cpassword === undefined || values.Cpassword === "") {
        errors.Cpassword = "Password should not be empty";
    } else if (!password_pattern.test(values.password)) {
        errors.Cpassword = "Password format is incorrect";
    } else {
        errors.Cpassword = "";
    }

    return errors;
}

export default validation;
