"use strict";

$(function () {
    $(".clear-button").on("click", clearForm(this.form));

    var clearForm = function (form) {
        $(form)
            .find("input, select, textarea")
            .not(":button, :submit, :reset, :hidden")
            .val("")
            .prop("checked", false)
            .prop("selected", false)
        ;
    }
});
