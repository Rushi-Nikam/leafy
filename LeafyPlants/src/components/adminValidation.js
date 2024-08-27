function adminValidation(values){
    alert("")
    let errors={}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i;
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;

if (values.adminEmail === undefined || values.adminEmail === "") {
    errors.adminEmail = "Email should not be empty";
} else if (!email_pattern.test(values.adminEmail)) {
    errors.adminEmail = "Email format is incorrect";
} else {
    errors.adminEmail = "";
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