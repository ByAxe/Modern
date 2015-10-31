(function ($) {
    jQuery.fn.ajaxForm = function (options) {

        options = $.extend({
            onStart: function () {
                return true
            },
            onSuccess: function () {
            },
            onError: function () {
            }
        }, options);

        var make = function () {
            $(this).addClass('ajaxed');
        };

        $(this).submit(function () {

            $this = $(this);

            if ($this.hasClass('sending') || !options.onStart.apply(this))
                return false;

            _sendForm($this);

            return false;
        });

        function _sendForm($this) {
            var url = $this.attr('action');
            var $submitBtn = $this.find(':submit').attr('disabled', 'disabled').addClass('loader');
            $this.addClass('sending');


            $.ajax(url, {
                type: 'post',
                data: $this.serialize(),
                dataType: 'json',
                success: function (answer) {
                    $submitBtn.removeAttr('disabled').removeClass('loader');
                    $this.removeClass('sending');

                    if (answer.url != undefined)
                        document.location = answer.url;

                    // Проверка на тип ответа.
                    // Если он содержит слово success, то ответ об успехе
                    // Иначе обрабатываем как ошибку
                    if (answer.error.indexOf('success') != (-1)) {
                        options.onSuccess.apply($this, [answer.error, answer.extra]);
                    } else {
                        options.onError.apply($this, [answer.error, answer.extra]);
                    }
                },
                error: function () {
                    alert('Произошла неизвестная ошибка. Мы приносим свои извинения. Попробуйте перезагрузить страницу и повторить свои действия.');
                }
            });
        }

        return this.each(make);
    };
})(jQuery);