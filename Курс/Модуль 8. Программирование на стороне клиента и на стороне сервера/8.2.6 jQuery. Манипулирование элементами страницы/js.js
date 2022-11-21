// $(document).ready(function () {

//     $(".btn").click(function () {

//                 // Задачи на оборачивание элементов (wrap)
//                 // 1
//                 $("h2").wrap("<div>");

//                 // 2
//                 $("h2").wrap("<div class='test'></div>");

//                 // 3
//                 $("h2").wrapInner("<i>");

//                 // 4
//                 $("h2").wrapAll("<i>");

//                 // 5
//                 $("div > p").unwrap();


//                 // Задачи на вставку элементов
//                 // 1
//                 $("h2").before("<p>!</p>")

//                 // 2
//                 $("h2").after("<p>?</p>")

//                 // 3
//                 $("h2").before("<p>!</p>").after("<p>?</p>");

//                 // 4
//                 $("h2").prepend("!");

//                 // 5
//                 $("h2").append("?")

//                 // 6
//                 $("h2").prepend("!").append("?").css("color", "red");


//                 // Задачи на замену элементов

//                 // 1.
//                 $("h2").replaceWith($("h2").text());

//                 // 2
//                 $("h2").replaceWith($("h2").text().wrap("p"));


//                 // Задачи на удаление элементов
//                 // 1
//                 $("h2").remove();

//                 // 2
//                 $("h2").empty();


//                 // Задачи на атрибуты
//                 // 1
//                 $("a.www").attr("href");

//                 // 2
//                 $("a:first").attr("href");

//                 // 3
//                 $("a").each(function () {
//                     alert($(this).attr("href"));
//                 });

//                 // 4
//                 $("a").attr("href", "!");

//                 // 5
//                 $("a").attr("target", "_blank");

//                 // 6
//                 $('a').each(function () {
//                     $(this).html($(this).attr("href"));
//                 });

//                 // 7
//                 $('a').each(function () {
//                     let bracl = "(", bracr = ")"
//                     $(this).append(bracl + $(this).attr('href') + bracr);
//                 });

//                 // 8
//                 $('a').each(function () {
//                     $(this).attr('title', $(this).html());
//                 });


//                 // Задачи на работу с классами
//                 // 1
//                 $("li").addClass("test");

//                 // 2
//                 $("li").removeClass("www");

//                 // 3
//                 $("li").toggleClass("www");

//                 // 4
//                 if ($("a").hasClass("www") == true) {
//                     alert("есть");
//                 } else {
//                     alert("нету");
//                 }


//                 // Задачи на атрибуты форм
//                 // 1
//                 alert($("input.in").val());

//                 // 2
//                 alert($("textarea.text").val());

//                 // 3
//                 $("input").each(function () {
//                     alert($(this).val())
//                 });

//                 // 4
//                 $("input").val("!");

//                 // 5
//                 $("input.number").each(function () {
//                     let val = $(this).val();
//                     $(this).val(val ** 2);
//                 });

//                 // 6
//                 $("input").prop("checked", false);

//                 // 7
//                 $("input").prop("checked", true);

//                 // 8
//                 $('input').each(function () {
//                     $(this).prop('checked', !$(this).prop('checked'));
//                 });
//                 // ответ нашел на просторах, где бы подсказка в лекции была
//                 // про восклицательный знак=/ Если правильно понял, тут сработал
//                 // логический оператор?

//                 // 9
//                 $("input:last").prop("checked", false);


//                 // Задачи на размеры
//                 // 1
//                 $("#wraper").children(":lt(3)").each(function () {
//                     alert("Ширина: " + $(this).width() + " Высота: " + $(this).height());
//                 });

//                 // 2
//                 $("#wraper").children(":lt(3)").each(function () {
//                     alert("Ширина: " + $(this).innerWidth() + " Высота: " + $(this).innerHeight());
//                 });

//                 // 3
//                 $("#wraper").children(":lt(3)").each(function () {
//                     alert("Ширина: " + $(this).outerWidth() + " Высота: " + $(this).outerHeight());
//                 });

//                 // 4
//                 $("#wraper").children(":lt(3)").each(function () {
//                     alert("Ширина: " + $(this).outerWidth(true) + " Высота: " + $(this).outerHeight(true));
//                 });

//     });
// });