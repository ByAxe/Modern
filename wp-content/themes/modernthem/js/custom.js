"use strict"

jQuery(document).ready(function () {

    var headlenslide = $(".hslide_load_slide").length,
        headscview = 0,
        headsloadimg = $(".hslide_load_slide:first").children('img').attr("src"),
        headsloadhtml = $(".hslide_load_slide:first").children('div').html(),
        headscslide = $("#heads_markers > li:first").children('p').attr('name'),
        hsmarkers = $("#heads_markers > li"),
        AutoPlay = 1;

    /*####################### Анимация рубрик ##########################*/
    $(".cb_rubrics_post").hover( //ловим курсор над блоком
        function () {
            $(this).children("h4").css('background-color', '#2D90DD');
        },
        function () {
            $(this).children("h4").css('background-color', '#3C7EB1');
        }
    );
    /*##################################################################*/
    /*####################### Главный слайдер ##########################*/
    $("#h_slide > img").attr("src", headsloadimg);
    $("#h_slide_content").html(headsloadhtml);
    $("#heads_markers > li:first").children('p').css('background', 'rgb(103, 200, 255)');
    $("#slider_nav > li:first").removeClass().attr('id', 'snav_point_active');
    $("#h_slide").children("img").load(function () {
        $("#h_slide > img").animate({
                opacity: 1
            },
            {
                queue: false,
                duration: 800
            });
        $("#heads_markers").animate({
                opacity: 1
            },
            {
                queue: false,
                duration: 800
            });
        $("#h_slide_content").animate({
                opacity: 1,
                right: 0
            },
            {
                queue: false,
                duration: 800,
                specialEasing: {
                    opacity: 'swing',
                    right: 'swing'
                }
            });
        $("#hs_lineartd").animate({
                opacity: 1,
                left: 2
            },
            {
                queue: false,
                duration: 800,
                specialEasing: {
                    opacity: 'swing',
                    left: 'swing'
                }
            });
    });
    $(hsmarkers).children('p').hover(
        function () {
            if ($(this).css('background-color') !== 'rgb(103, 200, 255)') {
                $(this).css('background', 'rgb(175, 175, 175)');
            }
        },
        function () {
            if ($(this).css('background-color') !== 'rgb(103, 200, 255)') {
                $(this).css('background-color', 'white');
            }
        }
    );
    $(hsmarkers).click(function () {
        if (headscslide === $(this).children('p').attr('name')) {
        } else {
            var objthis = $(this);
            headscview = $.inArray(this, hsmarkers);
            headscslide = $(this).children('p').attr('name');
            headsloadimg = $("#" + headscslide).children('img').attr("src");
            headsloadhtml = $("#" + headscslide).children('div').html();
            $('#headsm_locked').css('z-index', 6);
            function bcmark() {
                var deffr_bcmark = $.Deferred();
                $(hsmarkers).each(function () {
                    $(this).children('p').css('background', 'white');
                });
                deffr_bcmark.resolve();
                return deffr_bcmark;
            }

            $('#hs_preloader').animate({
                    opacity: 1
                },
                {
                    queue: false,
                });
            $("#h_slide > img").animate({
                    opacity: 0
                },
                {
                    queue: false,
                    duration: 300
                });
            $("#h_slide_content").animate({
                    opacity: 0,
                    right: -900
                },
                {
                    queue: false,
                    duration: 300
                });
            $("#hs_lineartd").animate({
                opacity: 0,
                left: -900
            }, 300, function () {
                false,
                    $("#h_slide > img").attr("src", headsloadimg);
                $("#h_slide_content").html(headsloadhtml);
            });
            $("#snav_point_active").attr('id', '').addClass('snav_point_hide');
            $("#slider_nav").children('li[name = "' + headscslide + '"]').removeClass().attr('id', 'snav_point_active');
            $("#h_slide").children("img").load(function () {
                jQuery("#h_slide > img").animate({
                        opacity: 1
                    },
                    {
                        queue: false,
                        duration: 800
                    });
                $("#heads_markers").animate({
                        opacity: 1
                    },
                    {
                        queue: false,
                        duration: 800
                    });
                $("#h_slide_content").animate({
                        opacity: 1,
                        right: 0
                    },
                    {
                        queue: false,
                        duration: 800,
                        specialEasing: {
                            opacity: 'swing',
                            right: 'swing'
                        }
                    });
                $("#hs_lineartd").animate({
                        opacity: 1,
                        left: 2
                    },
                    {
                        queue: false,
                        duration: 800,
                        specialEasing: {
                            opacity: 'swing',
                            left: 'swing'
                        }
                    });
                $('#hs_preloader').animate({
                    opacity: 0
                }, function () {
                    false;
                    $('#headsm_locked').css('z-index', 4);
                    deff_bcmark = bcmark();
                    deff_bcmark.done(function () {
                        $(objthis).children('p').css('background', 'rgb(103, 200, 255)');
                    });
                });
            });
        }
    });
    if (AutoPlay) {
        var delay = function () {
            if (headscview >= headlenslide - 1) {
                headscview = 0;
                $(hsmarkers).eq(headscview).click();
            } else {
                headscview = headscview + 1;
                $(hsmarkers).eq(headscview).click();
            }
            autoact = setTimeout(delay, 10000)
        }, autoact = setTimeout(delay, 10000);
        $('#h_slide').hover(function () {
            clearTimeout(autoact);
        }, function () {
            autoact = setTimeout(delay, 10000);
        });
        $('#slider_bottom_info').hover(function () {
            clearTimeout(autoact);
        }, function () {
            autoact = setTimeout(delay, 10000);
        });
    }

    /*##################################################################*/
    /*##################Выпадающий список в Unit########################*/

    $('.dataListElementLi > div').hide();
    $('.dataListElementLi').on('click', "p", function () {

        $(this).next('div').slideToggle("normal");
    });

    /*##################################################################*/

    var currentUrl = window.location.href;

    if (currentUrl.search(/.tovar.?/) !== -1) { // Проверка на нахождение tovar в URL
        currentUrl = currentUrl.split('tovar/');
        if ((currentUrl[1] !== '')) {
            document.getElementById("primary-sidebar").style.display = 'none';
        }
    }

});
