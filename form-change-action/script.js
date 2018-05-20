"use strict";

$(function () {
    /**
     * ボタンのdata属性からフォーム属性を変更
     */
    $('.change-action').click(function (e) {
        // action
        if ($(this).data('action')) {
            $(this).parents('form').attr('action', $(this).data('action'));
        }

        // method
        if ($(this).data('method')) {
            if ($.inArray($(this).data('method'), ['GET', 'POST']) == -1) {
                // PUT, DELETE
                var element = $('<input />', { type: 'hidden', name: '_method', value: $(this).data('method') });
                $(this).parents('form').append(element);
                $(this).parents('form').attr('method', 'POST');
            } else {
                // GET, POST
                $(this).parents('form').attr('method', $(this).data('method'));
            }
        }

        // enctype
        if ($(this).data('enctype')) {
            $(this).parents('form').attr('enctype', $(this).data('enctype'));
        }

        // debug用
        e.preventDefault();
        console.log($(this).parents('form').attr('action'));
        console.log($(this).parents('form').attr('method'));
        console.log($(this).parents('form').attr('enctype'));
    });
});
