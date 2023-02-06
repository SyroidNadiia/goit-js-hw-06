const form = document.querySelector(".login-form");

form.addEventListener('submit', onFormSubmit);

function onFormSubmit (event) {
    event.preventDefault();

    const mail = event.target.email.value.trim();
    const password = event.target.password.value;

    if (mail === ""  || password === "") {
        alert("Всі поля форми повинні бути заповнені");
    } else {
        const formData = {
            mail,
            password,
        };
        console.log(formData);
        event.target.reset();
    };

}
