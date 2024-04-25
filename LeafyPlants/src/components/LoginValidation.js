function Validation(values){
    alert("")
    let errors={}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i;
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;


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
return errors;
}
export default Validation;