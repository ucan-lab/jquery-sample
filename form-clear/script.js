"use strict";

$(function () {
    $(".clear-button").on("click", function () {
        clearForm(this.form);
    });

    function clearForm (form) {
        $(form)
            .find("input, select, textarea")
            .not(":button, :submit, :reset, :hidden")
            .val("")
            .prop("checked", false)
            .prop("selected", false)
        ;

        $(form).find(":radio").eq(0).prop("checked", true);
    }
});
