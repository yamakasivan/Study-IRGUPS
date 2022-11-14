function checkForm(elem) {
    let lastname = elem.lastname.value;
    let firstname = elem.firstname.value;
    let sex = elem.sex.value;
    let password = elem.password.value;
    let repeatpass = elem.repeatpass.value;
    // let submit = elem.submit.value

    let fail = "";

    if (lastname == "" || firstname == "" || sex == "" || password == "" || repeatpass == "") {
        fail = ("Заполните все поля!");

    } else if (lastname.length <= 1 || lastname.length > 15) {
        fail = "Введите корректную фамилию";

    } else if (firstname.length <= 1 || firstname.length > 15) {
        fail = "Введите корректное имя";

    } else if (password != repeatpass) {
        fail = "Пароли не совпадают";

    } else if (password.split("!").length > 1) {
        fail = "Некорректный пароль";
    }

    if (fail != "") {
        document.getElementById("error").innerHTML = fail;
    } else {
        alert("Проверка прошла успешно");
    }

    return false;
}
