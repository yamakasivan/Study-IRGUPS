$(document).ready(function () {

    $(".btn").click(function () {

        // 1
        $("p:has(b)").wrap("<div></div>")

        // 2
        $("p.www").prepend("!").add(":header").css("color", "red");

        // 3
        $("p").each(function () {
            $(this).replaceWith("<div>" + $("p").html() + "</div>");
        })

        // 4
        $("input:checkbox:odd").prop("disabled", true);

        // 5
        $("input:checkbox:not([disabled])").prop("checked", true);

        // 6
        $("#test").prev().html("!").end().next().html("?");

        // 7
        $("#test").prev().html($("#test").html()).end().next().html($("#test").html());

        // 8
        $("#test").prevUntil().last("p").html($("#test").html());

        // 9
        $("li:eq(1)").addClass("www").wrapInner("<i>").after("<li>привет</li>");

        // 10
        $("li:eq(9)").parent().prev().wrap("<div class=www></div>")

        // 11
        $("p:not(.www)").each(function (index) {
            $(this).append(index);
        })

        // 12
        $("p").each(function () {
            $(this).before($(this).clone().css("color", "red")).css("color", "green");
        });

        // 13
        $("h2+p").each(function () {
            $(this).prev().before($(this));
        });

        // 14
        $("p:empty").each(function () {
            $(this).html($(this).prev().html());
        });

        // 15
        $(".www b, p>b").parent().css({ color: "red", fontSize: "30px" });

        // 16
        $("p:empty").each(function () {
            $(this).html($(this).prevAll("h2").html());
        });

        // 17
        $("input").each(function () {
            $(this).val($(this).val() ** 2);
        });

        // 18
        $("#test").each(function () {
            let prep = $(this).prev().html(),
                app = $(this).next().html();
            $(this).prepend(prep).append(app);
        });

        // 19
        let one = $("#test").prevAll().eq(1),
            two = $("#test").nextAll().eq(1);
        let prev = one.html(),
            next = two.html();
        one.html(next);
        two.html(prev);

        // 20
        $("div").children().not(":header").css("color", "red");

        // 21
        $("p").css("color", "red").filter(".www").html("!");

        // 22
        $("p.www").css("color", "red").first().html("!").end().last().html("?");

        // 23
        $("p").each(function () {
            $(this).append($(this).html())
        });

        // 24
        $("p").each(function () {
            $(this).append($(this).index())
        });

        // 25
        $("p").each(function () {
            $(this).append($(this).html() * $(this).index());
        });
    });


    $("p").click(function () {

        // 26
        $(this).prev().remove().end().next().remove();

        // 27
        $(this).prevUntil(":header").remove();

        // 28
        $(this).nextAll(".www").first().remove();

        // 29
        $(this).nextAll().eq(4).remove();

        // 30
        $(this).nextAll().eq(4).not("h2").remove();

        // 31
        $(this).nextAll().eq(4).not(":has(b)").remove();

        // 32
        $(this).nextAll().eq(3).not("h2").next().remove();
    });

    $(".btn").click(function () {
        // 33
        $("#test").next().after($("#test"));

        // 34
        $("#test").next().after($("#test").clone());

        // 35
        let test = $("#test").nextAll(".www").first();
        test.insertAfter($("#test"));
        $("#test").clone().insertAfter(test);
        $("#test").remove();

        // 36
        $("p").prevUntil("h2").end().nextUntil("h2");

        // 37
        $("p").wrap("<div>").wrapInner("<div>");

        // 38
        $("p").parent(":not(div)").children("p").wrap("<div class=www>");

        // 39
        $("p").unwrap(":not(div.www)").wrap("<div class=zzz>");

        // 40
        let obj = $("#test").parents().attr("class");
        let arr = $.makeArray(obj)
        console.log(arr);
        // нашел метод $.makeArray(), но не могу добиться, чтобы находились классы
        // всех родителей, а не только непосредственного

        // 41
        $("p[class]").each(function () {
            let wrap = $("<div>").addClass($(this).attr("class"));
            $(this).removeAttr("class").wrap(wrap);
        });

        // 42
        $("#test p").append("!").not(".www").css("color", "red");

        // 43
        $("li").last().before("<li>пункт</li>");

        // 44
        $("li").slice(-4, -1).html("!");

        // 45
        $("#test").html($("#test").children().get().reverse());

        // 46
        let prev = $("#text").prevAll().get().reverse();
        let next = $("#text").nextAll();
        $("#text").after(prev).before(next);

        // 47
        $("li.www").css("color", "red").filter(".bbb").remove();

        // 48
        $("li").filter(":odd").empty().end().filter(":even").detach();

        // 49
        $("div").height($("div").height() * 2);

        // 50
        sum = 0;
        $("div").each(function () {
            sum += $(this).height();
        });
        console.log(sum);

        // 51
        $("#test").parentsUntil(".www").append("<p>!</p>");

        // 52
        $("#test").click(function () {
            $(this).parentsUntil(".www").children("p").css("color", "red");
        });

        // 53
        $("li").slice(0, 10).css("color", "red");

        // 54
        $("li").slice(4, 10).css("color", "red");

        // 55
        $("li").slice(-10).css("color", "red").filter(":even").wrapInner("<b>");

        // 56
        console.log($(":checkbox[checked]").length);
    });

    57
    $(":checkbox").click(function () {
        if ($(":checkbox:checked").length == 2) {
            $(":checkbox").attr("disabled", "true");
        }
    });

    $(".btn").click(function () {
        // 58
        let checkb = $(":checkbox").prop("checked");
        if (checkb == true) {
            $(":checkbox").prop("checked", false);
        } else {
            $(":checkbox").prop("checked", true);
        }

        // 59
        $("input").each(function () {
            $(this).attr("placeholder", $(this).attr("value")).removeAttr("value")
        });

        // 60
        $("a[href^='http://']").attr("target", "_blank");
    });


    // 61
    $(".inp").on("focusout", function () {
        $(this).each(function () {
            $(":checkbox").not(this).prop("checked", false)
            let check = $(this).val();
            if (check == 1) {
                $("#one").prop("checked", true);
            } else if (check == 2) {
                $("#two").prop("checked", true);
            } else if (check == 3) {
                $("#three").prop("checked", true);
            }
        });

        // 62
        $("#sel").on("change", function () {
            if (this.value == "mos") {
                $("#mos").prop("checked", true);
            } else if (this.value == "nov") {
                $("#nov").prop("checked", true);
            } else {
                $("#irk").prop("checked", true);
            }
        });

    });
});
