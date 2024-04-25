function adminValidation(values){
    alert("")
    let errors={}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;

if (values.AdminEmail === undefined || values.AdminEmail === "") {
    errors.AdminEmail = "Email should not be empty";
} else if (!email_pattern.test(values.email)) {
    errors.AdminEmail = "Email format is incorrect";
} else {
    errors.AdminEmail = "";
}

if (values.password === undefined || values.password === "") {
    errors.password = "Password should not be empty";
} else if (!password_pattern.test(values.password)) {
    errors.password = "Password format is incorrect";
} else {
    errors.password = "";
}
return errors;
}
export default adminValidation;