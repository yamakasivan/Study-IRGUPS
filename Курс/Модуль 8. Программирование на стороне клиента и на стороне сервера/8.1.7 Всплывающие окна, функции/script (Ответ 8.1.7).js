// 1.
// alert("Мы рады приветствовать вас на странице регистрации!");

// let hello;
// let reg = confirm("Вы хотите зарегистрироваться?");

// if (reg) {
//     hello = prompt("Введите имя");
//     if (hello) {
//         alert(hello + " поздравляем, вы успешно прошли регистрацию.");
//     } else if (hello != " ") {
//         alert("Пройдите регистрацию заново");
//     }
// } else {
//     alert("Вы отказались от регистрации");
// }


// 2.
// function degree(num) {
//     console.log(num ** 2);
// }
// degree(5);


// 3.
// function summ(a, b) {
//     console.log(a + b);
// }
// summ(3, 5);


// 4.
// function del(a, b, c) {
//     console.log((a - b) / c);
// }
// del(5, 3, 2);

// 5.
// function day(num) {
//     switch (num) {
//         case 1: console.log("понедельник");
//             break;
//         case 2: console.log("вторник");
//             break;
//         case 3: console.log("среда");
//             break;
//         case 4: console.log("четверг");
//             break;
//         case 5: console.log("пятница");
//             break;
//         case 6: console.log("суббота");
//             break;
//         case 7: console.log("воскресенье");
//     }
// }
// day(5);


// ИЛИ через цикл с привязкой к массиву


let week = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];
function day(num) {
    for (i = 1; i < week.length; i++) {
        if (num == 1) {
            console.log("понедельник");
            break;
        } else if (num == 2) {
            console.log("вторник");
            break;
        } else if (num == 3) {
            console.log("среда");
            break;
        } else if (num == 4) {
            console.log("четверг");
            break;
        } else if (num == 5) {
            console.log("пятница");
            break;
        } else if (num == 6) {
            console.log("суббота");
            break;
        } else if (num == 7) {
            console.log("воскресенье");
            break;
        } else {
            console.log("Введите корректное значение")
            break;
        }
    }
}
day(3);