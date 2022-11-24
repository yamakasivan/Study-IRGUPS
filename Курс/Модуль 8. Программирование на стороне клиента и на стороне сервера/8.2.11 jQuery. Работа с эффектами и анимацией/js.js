// $(document).ready(function () {

//     // 1
//     $(".one").on("click", function () {
//         $(".elem").slideUp(1000);

//     });
//     $(".two").on("click", function () {
//         $(".elem").slideDown(1000);
//     });


//     // 2
//     $(".one").on("click", function () {
//         $(".elem").slideUp(1000, function () {
//             $(".one").html("развернуть");
//             $(this).stop(true);

//         });
//         $(".elem").slideDown(1000, function () {
//             $(".one").html("свернуть");
//             $(this).stop(true);
//         });
//     });


//     // 3
//     $(".one").on("click", function () {
//         $(".elem").fadeOut(1000);
//     });

//     $(".two").on("click", function () {
//         $(".elem").fadeIn(1000);
//     });

//     $(".three").on("click", function () {
//         $(".elem").fadeTo(1000, 0.5);
//     });

//     $(".four").on("click", function () {
//         $(".elem").fadeTo(1000, 1);
//     });


//     // 4
//     $(".one").on("click", function () {
//         $(".elem").fadeOut(1000, function () {
//             $(".one").html("показать");
//             $(this).stop(true);

//         });
//         $(".elem").fadeIn(1000, function () {
//             $(".one").html("спрятать");
//             $(this).stop(true);
//         });
//     });


//     // 5
//     $(".one").on("click", function () {
//         $(".elem").hide(800);
//     });

//     $(".two").on("click", function () {
//         $(".elem").show(800);
//     });


//     // 6
//     $("#elem").one("click", function () {
//         $(this).animate({ width: "150px" }, 1000);
//     });


//     // 7
//     $("#elem").on("click", function () {
//         $(this).animate({ width: "+=50px" }, 1000);
//     });


//     // 8
//     $("#elem").on("click", function () {
//         $(this).animate({ width: "+=50px", height: "+=50px" }, 1000);
//     });


//     // 9
//     $("#elem").on("click", function () {
//         $(this).animate({ marginLeft: "+=50px" }, 800);
//     });

// });