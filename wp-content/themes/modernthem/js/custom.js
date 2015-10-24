$(document).ready(function () {

    /*$(document).bind( 'mousewheel', function(e){
     var nt = $(document.body).scrollTop()-(e.originalEvent.wheelDeltaY);
     e.preventDefault();

     $(document.body).stop().animate({scrollTop : nt}, 500 );
     });*/
    /*##################################################################*/
    /*########################### Блок переменных ######################*/
    var headlenslide = $(".hslide_load_slide").length,
        headscview = 0,
        headsloadimg = $(".hslide_load_slide:first").children('img').attr("src"),
        headsloadhtml = $(".hslide_load_slide:first").children('div').html(),
        headscslide = $("#heads_markers > li:first").children('p').attr('name'),
        headsautoplay = true,
        hsmarkers = $("#heads_markers > li"),
        h_m_moves = $("#head_menu_moove"),
        hm_moove_l = [],
        AutoPlay = 1,
        hn_list = $(".head_menu_ank"),
        hnlist_width = $("#head_nav > ul > li:first").width(),
        prod_load_left = $("#cp_block_2_loadc > div:first").children('p').text(),
        prod_load_right = $("#cp_block_2_loadc > div:first").children('i').text(),
        prod_load_center = $("#cp_block_2_loadc > div:first").children('div').html(),
        prod_load_name = 'load_shirts',
        autoact = [],
        cp_block_markerl = 35,
        Ppu_idcilit = 0,
        Ppu_citemtit = [],
        widthw = $(window).width(),
        widh = [];
    /*##################################################################*/
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
            objthis = $(this);
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
                queue: false,
                    $("#h_slide > img").attr("src", headsloadimg);
                $("#h_slide_content").html(headsloadhtml);
            });
            $("#snav_point_active").attr('id', '').addClass('snav_point_hide');
            $("#slider_nav").children('li[name = "' + headscslide + '"]').removeClass().attr('id', 'snav_point_active');
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
                $('#hs_preloader').animate({
                    opacity: 0
                }, function () {
                    queue: false
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
    /*##########################   ПОЛЗУНОК НАВИГАЦИОННОГО МЕНЮ   ######*/
    $(h_m_moves).css('width', hnlist_width + 12);
    $("#head_nav > ul").hover(
        function () {
            $(h_m_moves).animate({
                    opacity: 1,
                },
                {
                    queue: false
                });
        },
        function () {
            $(h_m_moves).animate({
                    'opacity': '0'
                },
                {
                    queue: false
                });
        }
    );
    $(hn_list).hover(
        function () {
            hm_moove_l = $(this).position().left;
            hnlist_width = $(this).width();
            $(h_m_moves).animate({
                    left: hm_moove_l + 25,
                    width: hnlist_width + 12
                },
                {
                    queue: false
                });
        },
        function () {
        });
    /*##################################################################*/
    /*######################## Выпадающее меню #########################*/
    $(hn_list).hover(
        function () {
            $(this).children("div").slideDown(400, function () {
                queue: false
            });
        },
        function () {
            $(this).children("div").slideUp(120, function () {
                queue: false
            });
        }
    );
    /*##################################################################*/
    /*####################### Продукция ################################*/
    $('#cpb_textblock_left > span').text(prod_load_left);
    $('#cpb_textblock_right > span').text(prod_load_right);
    $('#cpb_textcenter').html(prod_load_center);
    $('#cpb_textblock_left > span').animate({
            'opacity': 1
        },
        {
            queue: false
        });
    $('#cpb_textblock_right > span').animate({
            'opacity': 1
        },
        {
            queue: false
        });
    $('#cpb_textcenter').animate({
            'opacity': 1
        },
        {
            queue: false
        });
    function load_cp() {
        var deffr_load = $.Deferred();
        prod_load_left = $("#cp_block_2_loadc").children('div[name = "' + prod_load_name + '"]').children('p').text();
        prod_load_right = $("#cp_block_2_loadc").children('div[name = "' + prod_load_name + '"]').children('i').text();
        prod_load_center = $("#cp_block_2_loadc").children('div[name = "' + prod_load_name + '"]').children('div').html();
        $('#cpb_textblock_left > span').text(prod_load_left);
        $('#cpb_textblock_right > span').text(prod_load_right);
        $('#cpb_textcenter').html(prod_load_center);
        deffr_load.resolve();
        return deffr_load;
    }

    $('.cp_cont').hover(
        function () {
            if ($(this).attr('name') !== prod_load_name) {
                cp_block_markerl = $(this).position().left;
                $('#cp_block_marker').animate({
                        'left': cp_block_markerl + 35
                    },
                    {
                        queue: false
                    });
                prod_load_name = $(this).attr('name');
                $('#cpb_textblock_left > span').fadeOut();
                $('#cpb_textblock_right > span').fadeOut();
                $('#cpb_textcenter').fadeOut(400, function () {
                    var deffr_load_cp = load_cp();
                    deffr_load_cp.done(function () {
                        $('#cpb_textblock_left > span').fadeIn();
                        $('#cpb_textblock_right > span').fadeIn();
                        $("#cpb_textcenter").fadeIn();
                    });
                });
            }
        },
        function () {

        }
    );
    $(".cp_cont > li").click(function () {
        var object_list = $(this);

        function list_up() {
            var deffr_list = $.Deferred();
            $(".cp_cont > li > div:visible").slideUp();
            $(object_list).children("div").slideDown(function () {
                deffr_list.resolve();
            });
            return deffr_list;
        }

        if ($(object_list).children("div").is(":hidden")) {
            var deffr_list_up = list_up();
            height_children = 0;
            deffr_list_up.done(function () {
                $(object_list).parents(".cp_cont").children().each(function () {
                    height_children = height_children + $(this).outerHeight(true);
                });
                if (height_children > 245) {
                    $("#cp_block").animate({
                        'height': height_children
                    }, 200);
                    $(".cp_cont").each(function () {
                        $(this).animate({
                            'height': height_children
                        }, 200);
                    });
                }
            });
        }
    });
    /*##################################################################*/
    /*####################### Юнит продукции ###########################*/

    $('.Ppu_setmarkcol > li > div').each(function () {
        Ppu_citemtit = $(this).attr('title');
        var Ppu_coloritem = $(this).css('background-color');
        $('#Ppui_addcollist').append('<li style="background-color: ' + Ppu_coloritem + ';" name="' + Ppu_citemtit + '"></li>');
    });
    $('#Ppui_addcollist > li').click(function () {
        Ppu_citemtit = $(this).attr('name');
        var Ppu_coladditm = $(this).css('background-color');
        Ppu_numcolunt = 0;
        if ($("#Ppuic_delall").is(":hidden")) {
            $("#Ppuic_delall").show();
        }
        $('.Ppui_markcol').each(function () {
            Ppu_numcolunt = Ppu_numcolunt + 1
        });
        if (Ppu_numcolunt < 25) {
            Ppu_idcilit = Ppu_idcilit + 1;
            var Ppu_optsizehtml = $('#Ppu_optsize').html();
            $('#Ppui_selcol').append('<div class="Ppui_markcol" name="' + Ppu_idcilit + '" style="background-color: ' + Ppu_coladditm + '"><div class="Ppuim_rem" title="Удалить цвет"></div><b>' + Ppu_idcilit + '</b><p></p><i></i></div>');
            $('#Ppui_colopt').append('<div class="Ppuic_options" name="' + Ppu_idcilit + '"><p>' + Ppu_idcilit + '</p><b>' + Ppu_citemtit + '</b><div style="background-color: ' + Ppu_coladditm + '"></div><select form="inputbooking" required name="' + Ppu_idcilit + '">' + Ppu_optsizehtml + '</select><input type="number" form="inputbooking" required maxlength="5" min="1" value="1" step="10" placeholder="Количество"></div>');
        }
    });
    $(document).on('mouseenter', '#Ppui_addcollist >li', function () {
        var adtop = window.event.clientY + document.body.scrollTop;
        adleft = window.event.clientX + document.body.scrollLeft;
        adtext = $(this).attr('name');
        if ($('div').is('#collistinfm')) {
        } else {
            $('body').append('<div id="collistinfm" style="display: none;"></div>');
            $('#collistinfm').css({
                'position': 'absolute',
                'background-color': '#fff',
                'color': '#454545',
                '-moz-box-shadow': '0 0 8px rgba(0,0,0,0.4)',
                '-webkit-box-shadow': '0 3px 15px rgba(0,0,0,0.4)',
                'box-shadow': '0 3px 15px rgba(0,0,0,0.4)',
                'z-index': 99999,
                'font-family': 'calibri,helvetica,Verdana,sans-serif',
                'padding': 2
            });
        }
        $('#collistinfm').text(adtext);
        $('#collistinfm').css({
            'display': 'block',
            'top': adtop + 10,
            'left': adleft + 15
        });
        $(document).on('mousemove', '#Ppui_addcollist ', function () {
            adtop = window.event.clientY + document.body.scrollTop;
            adleft = window.event.clientX + document.body.scrollLeft;
            $('#collistinfm').css({
                'top': adtop + 10,
                'left': adleft + 15
            });
        });
    });
    $(document).on('mouseleave', '#Ppui_addcollist >li', function () {
        $('#collistinfm').css('display', 'none');
    });
    $(document).on('mouseenter', '.Ppui_markcol', function () {
        $(this).children('.Ppuim_rem').animate({
                'opacity': 1
            },
            {
                duration: 100,
                queue: false
            });
    });
    $(document).on('mouseleave', '.Ppui_markcol', function () {
        $(this).children('.Ppuim_rem').animate({
                'opacity': 0.5
            },
            {
                duration: 100,
                queue: false
            });
    });
    $(document).on('click', '.Ppuim_rem', function () {
        var Ppuim_numit = $(this).parent('.Ppui_markcol').attr('name');
        $("#Ppui_colopt > .Ppuic_options[name=" + Ppuim_numit + "]").remove();
        $(this).parent('.Ppui_markcol').remove();
    });
    $('#Ppui_addmarkcol').click(function () {
        $('#Ppui_addcollist').slideToggle();
    });
    /*$('#Ppui_addmarkcol').bind('click', function(){
     $('#Ppui_addcollist').slideUp();
     });*/
    $("#Ppuic_delall").click(function () {
        Ppu_idcilit = 0;
        $(".Ppui_markcol").remove();
        $(".Ppuic_options").remove();
        $("#Ppuic_delall").hide();
    });
    /*##################################################################*/
    /*######################## Корзина и заказ продукции ###############*/
    var basket = {
        add: function (data) {
            var path = document.location.pathname.toString();
            var cData = basket.getAll();
            if (cData[path] != undefined) {
                var countp = cData[path].length;
                counta = data.length;
                for (var i = 0; i < counta; i++)
                    data[i]["item"] = countp + (i + 1);
                cData[path] = cData[path].concat(data);
            } else
                cData[path] = data;
            localStorage.basket = JSON.stringify(cData);
        },
        getAll: function () {
            var cData = localStorage.basket;
            if (cData != undefined)
                cData = JSON.parse(cData);
            else
                cData = {};
            return cData;
        },
        renderBasket: function (elem) {
            $.post(
                '/wp-content/themes/modernthem/renderBasket.php',
                {
                    basket: JSON.stringify(basket.getAll())
                },
                function (data) {
                    function basketrend() {
                        var deffr_bask = $.Deferred();
                        $(elem).append(data);
                        deffr_bask.resolve();
                        return deffr_bask;
                    }

                    var deffr_baskd = basketrend();
                    deffr_baskd.done(function () {
                        if ($('#basketblock > ul').is('.bb_point')) {
                            $('#removeallstorage').show();
                            $('#removeallstorage').click(function () {
                                $(this).hide();
                                localStorage.removeItem('basket');
                                $('.bb_point').remove();
                            });
                        }
                    });
                },
                'html'
            )
        },
        amountItem: function (elem) {
            $.post(
                '/wp-content/themes/modernthem/amountBasket.php',
                {
                    basket: JSON.stringify(basket.getAll())
                },
                function (data) {
                    $(elem).append(data);
                },
                'html'
            )
        }
    };
    basket.amountItem('#headbasklink > span');
    $('#inputgo2').click(function () {
        var orderdata = [];
        if ($('#Ppui_selcol2 > div').is('.Ppui_markcol')) {
            $('.Ppuic_options2').each(function (id) {
                /*#####################Для inputgo2#################################
                 $('#inputgo2').click(function(){
                 var orderdata = [];
                 if ($('#Ppui_selcol2 > div').is('.Ppui_markcol')){
                 $('.Ppuic_options2').each(function(id){ */
                /*##################################################################*/
                /*#####################Для inputgo1#################################
                 $('#inputgo').click(function(){
                 var orderdata = [];
                 if ($('#Ppui_selcol > div').is('.Ppui_markcol')){
                 $('.Ppuic_options').each(function(id){ */
                /*##################################################################*/
                orderdata[id] = {
                    item: $(this).attr('name'),
                    name: $('#Tpc_header').text(),
                    color: $(this).children('b').text(),
                    size: $(this).children('select').val(),
                    count: $(this).children('input').val()
                }
            });
            basket.add(orderdata);
            $('#Ppuic_delall2').click();
            $('body').append('<div id="addbmessage" style="display: none;">Товар добавлен в корзину.<div>Ok</div></div>');
            $('#addbmessage').css({
                'opacity': 0,
                'display': 'block',
                'background-image': 'url(/wp-content/themes/modernthem/images/done.png)'
            });
            $('#addbmessage').animate({
                'opacity': 1
            });
            $('#addbmessage').click(function () {
                $(this).animate({
                    'opacity': 0
                }, function () {
                    $('#addbmessage').css({
                        'display': 'none'
                    });
                    $('#addbmessage').remove();
                    setTimeout('window.location.reload()', 1000);
                });
            });
        } else {
            $('body').append('<div id="addbmessage" style="display: none;">Вы не выбрали ни одного цвета!<div>Ok</div></div>');
            $('#addbmessage').css({
                'opacity': 0,
                'display': 'block',
                'background-image': 'url(/wp-content/themes/modernthem/images/error.png)'
            });
            $('#addbmessage').animate({
                'opacity': 1
            });
            $('#addbmessage').click(function () {
                $(this).animate({
                    'opacity': 0
                }, function () {
                    $('#addbmessage').css({
                        'display': 'none'
                    });
                    $('#addbmessage').remove();
                });
            });
        }
    });
    /*##################################################################*/
    /*############### Страница заказа ##################################*/
    basket.renderBasket('#basketblock');
    $('#imputdatebasket').val(JSON.stringify(basket.getAll()));
    $('#inputbooking').ajaxForm({
        onStart: function () {
            function MessageErrorBask() {
                $('body').append('<div id="addbmessage" style="display: none;">Корзина пуста!<div>Ok</div></div>');
                $('#addbmessage').css({
                    'opacity': 0,
                    'display': 'block',
                    'background-image': 'url(/wp-content/themes/modernthem/images/error.png)'
                });
                $('#addbmessage').animate({
                    'opacity': 1
                });
                $('#addbmessage').click(function () {
                    $(this).animate({
                        'opacity': 0
                    }, function () {
                        $('#addbmessage').css({
                            'display': 'none'
                        });
                        $('#addbmessage').remove();
                    });
                });
            };
            function baskcont() {
                if ($('#basketblock > ul').is('.bb_point')) {
                    return true;
                } else {
                    MessageErrorBask();
                    return false;
                }
            };
            if (baskcont()) {
                $('body').append('<div id="addbmessage" style="display: none;">Идет отправка письма...</div>');
                $('#addbmessage').css({
                    'opacity': 0,
                    'display': 'block',
                    'background-image': 'url(/wp-content/themes/modernthem/images/done.png)'
                });
                $('#addbmessage').animate({
                    'opacity': 1
                }, function () {
                    localStorage.removeItem('basket');
                    setTimeout("window.location.reload()", 1000);
                });
                return true;
            } else {
                return false;
            }
        }
    });

    /*##################################################################*/
    /*################## Анимация Трубки в Header #######################*/
    $('#hb_info_telephone').dblclick(function () {
        $(this).effect('bounce', {times: 2}, 500);
    });
    /*##################################################################*/
    /*####################### Юнит продукции [2] ###########################*/

    $('.Ppu_setmarkcol2 > li > div').each(function () {
        Ppu_citemtit = $(this).attr('title');
        var Ppu_coloritem = $(this).css('background-color');
        $('#Ppui_addcollist').append('<li style="background-color: ' + Ppu_coloritem + ';" name="' + Ppu_citemtit + '"></li>');
    });
    $('#Ppui_addcollist > li').click(function () {
        Ppu_citemtit = $(this).attr('name');
        var Ppu_coladditm = $(this).css('background-color');
        Ppu_numcolunt = 0;
        if ($("#Ppuic_delall2").is(":hidden")) {
            $("#Ppuic_delall2").show();
        }
        $('.Ppui_markcol').each(function () {
            Ppu_numcolunt++;
        });
        if (Ppu_numcolunt < 25) {
            Ppu_idcilit++;
            var Ppu_optsizehtml = $('#Ppu_optsize').html();
            $('#Ppui_selcol2').append('<div class="Ppui_markcol" name="' + Ppu_idcilit + '" style="background-color: ' + Ppu_coladditm + '"><div class="Ppuim_rem" title="Удалить цвет"></div><b>' + Ppu_idcilit + '</b><p></p><i></i></div>');
            $('#Ppui_colopt2').append('<div class="Ppuic_options2" name="' + Ppu_idcilit + '"><p>' + Ppu_idcilit + '</p><b>' + Ppu_citemtit + '</b><div style="background-color: ' + Ppu_coladditm + '"></div><select form="inputbooking" required name="' + Ppu_idcilit + '">' + Ppu_optsizehtml + '</select><input type="number" form="inputbooking" required maxlength="5" min="1" value="1" step="10" placeholder="Количество"></div>');
        }
    });
    $(document).on('mouseenter', '#Ppui_addcollist >li', function () {
        var adtop = window.event.clientY + document.body.scrollTop;
        adleft = window.event.clientX + document.body.scrollLeft;
        adtext = $(this).attr('name');
        if ($('div').is('#collistinfm')) {
        } else {
            $('body').append('<div id="collistinfm" style="display: none;"></div>');
            $('#collistinfm').css({
                'position': 'absolute',
                'background-color': '#fff',
                'color': '#454545',
                '-moz-box-shadow': '0 0 8px rgba(0,0,0,0.4)',
                '-webkit-box-shadow': '0 3px 15px rgba(0,0,0,0.4)',
                'box-shadow': '0 3px 15px rgba(0,0,0,0.4)',
                'z-index': 99999,
                'font-family': 'calibri,helvetica,Verdana,sans-serif',
                'padding': 2
            });
        }
        $('#collistinfm').text(adtext);
        $('#collistinfm').css({
            'display': 'block',
            'top': adtop + 10,
            'left': adleft + 15
        });
        $(document).on('mousemove', '#Ppui_addcollist ', function () {
            adtop = window.event.clientY + document.body.scrollTop;
            adleft = window.event.clientX + document.body.scrollLeft;
            $('#collistinfm').css({
                'top': adtop + 10,
                'left': adleft + 15
            });
        });
    });
    $(document).on('mouseleave', '#Ppui_addcollist >li', function () {
        $('#collistinfm').css('display', 'none');
    });
    $(document).on('mouseenter', '.Ppui_markcol', function () {
        $(this).children('.Ppuim_rem').animate({
                'opacity': 1
            },
            {
                duration: 100,
                queue: false
            });
    });
    $(document).on('mouseleave', '.Ppui_markcol', function () {
        $(this).children('.Ppuim_rem').animate({
                'opacity': 0.5
            },
            {
                duration: 100,
                queue: false
            });
    });
    $(document).on('click', '.Ppuim_rem', function () {
        var Ppuim_numit = $(this).parent('.Ppui_markcol').attr('name');
        $("#Ppui_colopt2 > .Ppuic_options2[name=" + Ppuim_numit + "]").remove();
        $(this).parent('.Ppui_markcol').remove();
    });
    /*$('#Ppui_addmarkcol').click(function(){
     $('#Ppui_addcollist').slideToggle();
     });
     $('#Ppui_addmarkcol').bind('click', function(){
     $('#Ppui_addcollist').slideUp();
     });*/
    $("#Ppuic_delall2").click(function () {
        Ppu_idcilit = 0;
        $(".Ppui_markcol").remove();
        $(".Ppuic_options2").remove();
        $("#Ppuic_delall2").hide();
    });
    /*##################################################################*/
    /*###################Галерея для Unit###############################*/
    var currentImageOnTop;
    var clickedImageInList;

    $('#imageListBottom').on('click', "img", function () {

        clickedImageInList = $(this).attr("src");

        currentImageOnTop = imageListTopSrc.src;

        if (clickedImageInList != currentImageOnTop) {
            imageListTopSrc.setAttribute("src", clickedImageInList);
        }
        ;

    });
    /*#################Галерея для Unit - Увеличение Изображения########*/

    $('#imageListTopSrc').click(function () {
        lenghtOfImageLink = (imageListTopSrc.src).length;

        var bigPictureLink = (imageListTopSrc.src).substr(0, lenghtOfImageLink - 4) +
            "Big.png"; // gave new Link on Big Picture

        imageListBigPicture_image.setAttribute("src", bigPictureLink); // set src

        $('#imageListBigPicture').show(); // set display: block

    });

    $('#imageListBigPicture').click(function () {

        $('#imageListBigPicture').hide(); // set display: none

    });

    /*##################################################################*/
    /*##################Выпадающий список в Unit########################*/

    $('.dataListElementLi > div').hide();
    $('.dataListElementLi').on('click', "p", function () {

        $(this).next('div').slideToggle("normal");
    });


    /*##################################################################*/
    /*##################Выпадающий список в Листе сортировки############*/

    $('.filterOptionsList > div').hide();

    $('.filterOptionsList').on('click', "p", function () {
        $(this).next('div').slideToggle("slow");
    });

    /*##################################################################*/
    /*##################Получение данных из php файла###################*/
    var flagSend = false;
    var counterOfFading = 0;
    var $type
    var firstLoadPage = true;
//**************************Все типы продукции***************************
    function getParameterByName(name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }

    if (firstLoadPage && !flagSend) {
        var valueOfForwardedType = getParameterByName('type');
        if (valueOfForwardedType != "") {
            $type = valueOfForwardedType;

            $(".filterOptionsList").each(function () {
                if ($(this).attr("data-type") == $type) {
                    $(this).trigger('click');
                    $(this).next('div').slideToggle("slow");
                }
            });

            $.ajax({
                type: "GET",
                url: "/wp-content/themes/modernthem/getCat.php",
                data: {type: $type},
                beforeSend: function () {
                    $('.filterWindow').prepend($("<div id='preloaderOfQuery'></div>"));
                    $('#preloaderOfQuery').prepend($("<img src='/wp-content/themes/modernthem/images/preloaderOfQueries.gif'>"));
                    $('#preloaderOfQuery').fadeIn(1000);
                    flagSend = true;
                },
                success: function (responseHtml) {
                    flagSend = false;

                    handlerOfResponse(responseHtml);
                },
                complete: function (res) {
                    $('preloaderOfQuery').fadeOut();
                },
            });
        } else {
            $.ajax({
                type: "GET",
                url: "/wp-content/themes/modernthem/getCat.php",
                data: {flag: ""},
                beforeSend: function () {
                    $('.filterWindow').prepend($("<div id='preloaderOfQuery'></div>"));
                    $('#preloaderOfQuery').prepend($("<img src='/wp-content/themes/modernthem/images/preloaderOfQueries.gif'>"));
                    $('#preloaderOfQuery').fadeIn(1000);
                    flagSend = true;
                },
                success: function (responseHtml) {
                    flagSend = false;

                    handlerOfResponse(responseHtml);
                },
                complete: function (res) {
                    $('preloaderOfQuery').fadeOut();
                },
            });
            firstLoadPage = false;
        }
    }

    $('.filterButton').click(function () {
        if (!flagSend) {

            $.ajax({
                type: "GET",
                url: "/wp-content/themes/modernthem/getCat.php",
                data: {flag: ""},
                beforeSend: function () {
                    $('.filterWindow').prepend($("<div id='preloaderOfQuery'></div>"));
                    $('#preloaderOfQuery').prepend($("<img src='/wp-content/themes/modernthem/images/preloaderOfQueries.gif'>"));
                    $('#preloaderOfQuery').fadeIn(1000);
                    flagSend = true;
                },
                success: function (responseHtml) {
                    flagSend = false;

                    handlerOfResponse(responseHtml);
                },
                complete: function (res) {
                    $('preloaderOfQuery').fadeOut();
                },
            });

            firstLoadPage = false;
        }
    });

//**************************Сортирова***************************
    $('.filterOptionsList').click(function () {
        $type = $(this).attr("data-type");

        if (!flagSend) {

            $.ajax({
                type: "GET",
                url: "/wp-content/themes/modernthem/getCat.php",
                data: {type: $type},
                beforeSend: function () {
                    $('.filterWindow').prepend($("<div id='preloaderOfQuery'></div>"));
                    $('#preloaderOfQuery').prepend($("<img src='/wp-content/themes/modernthem/images/preloaderOfQueries.gif'>"));
                    $('#preloaderOfQuery').fadeIn(1000);
                    flagSend = true;
                },
                success: function (responseHtml) {
                    flagSend = false;

                    handlerOfResponse(responseHtml);
                },
                complete: function (res) {
                    $('preloaderOfQuery').fadeOut();
                },
            });
        }
    });
//**************************Конкретный тип продукции***************************
    $('.sexName').click(function (event) {

        event.preventDefault();
        event.stopPropagation();

        var $sex = $(this).attr("data-sex");

        $type = $(this).attr("data-type");

        if (!flagSend) {

            $.ajax({
                type: "GET",
                url: "/wp-content/themes/modernthem/getCat.php",
                data: {type: $type, sex: $sex},
                beforeSend: function () {
                    $('.filterWindow').prepend($("<div id='preloaderOfQuery'></div>"));
                    $('#preloaderOfQuery').prepend($("<img src='/wp-content/themes/modernthem/images/preloaderOfQueries.gif'>"));
                    $('#preloaderOfQuery').fadeIn(1000);
                    flagSend = true;
                },
                success: function (responseHtml) {
                    flagSend = false;

                    handlerOfResponse(responseHtml);
                },
                complete: function (res) {
                    $('preloaderOfQuery').fadeOut();
                },
            });
        }
    });
    /*##############Операции с полученными данными из php файла#########*/

    function handlerOfResponse(responseHtml) {
        var arrayOfStrings = responseHtml.split('\n');
        var strngInDataBase;
        var arrayOfValues = []; // TEXT(0)-HREF(1)-PRICE(2)-SRC-(3)
        var j = 0;
        var flagFadeOut = true;

        $('preloaderOfQuery').fadeToggle(1000);

        for (var i = 0; i < arrayOfStrings.length; i++) {
            strngInDataBase = arrayOfStrings[i];
            if (!isEmpty(strngInDataBase)) {
                arrayOfValues[j] = strngInDataBase.split('|');
                // TEXT(0)-HREF(1)-PRICE(2)-SRC-(3)
                j++;
            }
        }

        //clearingWorkSpace();

        creatingBlocks();

        /*function clearingWorkSpace(){
         $(".blockContainer").remove().fadeOut();
         }*/

        function isEmpty(str) {
            return (!str || 0 === str.length || /^\s*$/.test(str));
        }

        function creatingBlocks() {
            if (flagFadeOut) {
                $(".filterWindow").html(formationHtml()).fadeIn(1000);
            } else {
                $(".filterWindow").html(formationHtml()).fadeOut(1000);
                $(".filterWindow").html(formationHtml()).fadeIn(1000);
            }
        }

        function formationHtml() {

            if (counterOfFading == 0 | counterOfFading == 2) {
                flagFadeOut = !flagFadeOut;
                counterOfFading++;
            }
            if (counterOfFading == 3) counterOfFading = 0;

            var $readyHtmlBlock = "", $tempHtmlBlock = "";

            for (var k = 0; k < arrayOfValues.length; k++) {
                $tempHtmlBlock = "<div class='blockContainer'><a href='" + arrayOfValues[k][1] + "'><p class='textInBlock'>" + arrayOfValues[k][0] + "</p><div><img src='" + arrayOfValues[k][3] + "' alt='' class='imageInBlock'></div><p class='priceInBlock'>от " + arrayOfValues[k][2] + "</p></a></div>";

                $readyHtmlBlock += $tempHtmlBlock;
            }
            return $readyHtmlBlock;
        }
    }

    /*##################################################################*/

    $('.filterOptionsList').hover(
        function () {
            if ($(this).attr('name') !== prod_load_name) {
                prod_load_name = $(this).attr('name');
                $('#cpb_textblock_left > span').fadeOut();
                $('#cpb_textblock_right > span').fadeOut();
                $('#cpb_textcenter').fadeOut(400, function () {
                    var deffr_load_cp = load_cp();
                    deffr_load_cp.done(function () {
                        $('#cpb_textblock_left > span').fadeIn();
                        $('#cpb_textblock_right > span').fadeIn();
                        $("#cpb_textcenter").fadeIn();
                    });
                });
            }
        },
        function () {

        }
    );

    /*##################################################################*/
    /*##################################################################*/

    $('.autoplay').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
    });

});
