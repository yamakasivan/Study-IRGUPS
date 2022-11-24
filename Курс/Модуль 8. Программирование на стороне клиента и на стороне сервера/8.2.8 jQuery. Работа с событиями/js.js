// $(document).ready(function () {

    //     // События через отдельные методы
    //     // 1
    //     $("p").click(function () {
    //         alert($(this).html());
    //     })

    //     // 2
    //     $("a").mousemove(function () {
    //         let bracl = "(", bracr = ")"
    //         $(this).append(bracl + $(this).attr("href") + bracr);
    //     });

    //     // 3
    //     $("a").mousemove(function func() {
    //         let bracl = "(", bracr = ")"
    //         $(this).append(bracl + $(this).attr("href") + bracr);
    //         $(this).unbind("mousemove", func);
    //     });

    //     // 4
    //     $("input").focusout(function () {
    //         $("#test").html($(this).val());
    //     });

    //     // 5
    //     $("input").click(function () {
    //         alert($(this).val());
    //         $(this).unbind("click");
    //     });

    //     // 6
    //     $("p").click(function () {
    //         $(this).html($(this).html() ** 2);
    //     });

    //     // 7
    //     $("p").click(function () {
    //         $(this).html($(this).html() ** 2);
    //         $(this).unbind("click");
    //     }).dblclick(function () {
    //         $(this).html($(this).html() ** 2);
    //         $(this).unbind("dblclick");
    //     });


    //     // Задачи на on и off
    //     // 1
    //     $("a").on("mouseenter", function () {
    //         let bracl = "(", bracr = ")"
    //         $(this).append(bracl + $(this).attr("href") + bracr);
    //     });

    //     // 2
    //     $("a").on("mouseenter", function () {
    //         $(this).append("(" + $(this).attr("href") + ")");
    //         $(this).off("mouseenter");
    //     });


    //     // Задачи на one
    //     // 1
    //     $("p").one("click", function () {
    //         $(this).append("!");
    //     });


    //     // Задачи на делегирование через on
    //     // 1
    //     $(".btn").on("click", function () {
    //         $("ul").append("<li>пункт</li>");
    //     });
    //     $("ul").on("click", "li", function () {
    //         $(this).append("!");
    //     });

    //     // 2
    //     $(".submit").on("click", function () {
    //         let one = $("#lastname").val();
    //         let two = $("#firstname").val();
    //         let tr = "<tr>" + "<td>" + one + "</td>" + "<td>" + two + "</td>" + "</tr>";
    //         $("table").append(tr);
    //     });
    
    //     $("table").on("click", "td", function () {
    //         $(this).html(prompt());
    //     })
    
// });



