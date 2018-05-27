"use strict";

$(function () {
    /**
     * ボタンのdata属性からフォーム属性を変更
     */
    $(".change-action").on("click", function (event) {
        // デフォルトアクションを抑止
        event.preventDefault();

        let form = $(this).parents("form");

        // action
        if ($(this).data("action")) {
            form.attr("action", $(this).data("action"));
        }

        // method
        if ($(this).data("method")) {
            if ($.inArray($(this).data("method"), ["GET", "POST"]) == -1) {
                // PUT, DELETE
                var element = $("<input />", { type: "hidden", name: "_method", value: $(this).data("method") });
                form.append(element);
                form.attr("method", "POST");
            } else {
                // GET, POST
                form.attr("method", $(this).data("method"));
            }
        }

        // enctype
        if ($(this).data("enctype")) {
            form.attr("enctype", $(this).data("enctype"));
        }

        // debug用
        console.log(form.attr("action"));
        console.log(form.attr("method"));
        console.log($("[name=_method]").val());
        console.log(form.attr("enctype"));

        // submit
        // form.submit();
    });
});
