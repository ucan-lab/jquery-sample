"use strict";

$(function () {
    // リストを非表示
    $("#fadein_area ul li").hide();

    // フェードイン開始位置
    var displayHeight = $("#fadein_area").offset().top - 500;

    $(window).scroll(function () {
        console.log(displayHeight + ": " + $(window).scrollTop());

        if (displayHeight < $(window).scrollTop()) {
            // 繰り返し処理
            $("#fadein_area ul li").each(function (i) {
                // 遅延させてフェードイン
                $(this).delay(750 * i).fadeIn(1500);
            });
        }
    })
});
