jQuery(document).ready(function(){var i=$(".hslide_load_slide").length,e=0,t=$(".hslide_load_slide:first").children("img").attr("src"),n=$(".hslide_load_slide:first").children("div").html(),a=($("#heads_markers > li:first").children("p").attr("name"),$("#heads_markers > li")),r=1;if($(".cb_rubrics_post").hover(function(){$(this).children("h4").css("background-color","#2D90DD")},function(){$(this).children("h4").css("background-color","#3C7EB1")}),$("#h_slide > img").attr("src",t),$("#h_slide_content").html(n),$("#heads_markers > li:first").children("p").css("background","rgb(103, 200, 255)"),$("#slider_nav > li:first").removeClass().attr("id","snav_point_active"),$("#h_slide").children("img").load(function(){$("#h_slide > img").animate({opacity:1},{queue:!1,duration:800}),$("#heads_markers").animate({opacity:1},{queue:!1,duration:800}),$("#h_slide_content").animate({opacity:1,right:0},{queue:!1,duration:800,specialEasing:{opacity:"swing",right:"swing"}}),$("#hs_lineartd").animate({opacity:1,left:2},{queue:!1,duration:800,specialEasing:{opacity:"swing",left:"swing"}})}),$(a).children("p").hover(function(){"rgb(103, 200, 255)"!==$(this).css("background-color")&&$(this).css("background","rgb(175, 175, 175)")},function(){"rgb(103, 200, 255)"!==$(this).css("background-color")&&$(this).css("background-color","white")}),$(a).click(function(){function i(){var i=$.Deferred();return $(a).each(function(){$(this).children("p").css("background","white")}),i.resolve(),i}if(t===$(this).children("p").attr("name"));else{var e=$(this),t=($.inArray(this,a),$(this).children("p").attr("name")),n=$("#"+t).children("img").attr("src"),r=$("#"+t).children("div").html();$("#headsm_locked").css("z-index",6),$("#hs_preloader").animate({opacity:1},{queue:!1}),$("#h_slide > img").animate({opacity:0},{queue:!1,duration:300}),$("#h_slide_content").animate({opacity:0,right:-900},{queue:!1,duration:300}),$("#hs_lineartd").animate({opacity:0,left:-900},300,function(){$("#h_slide > img").attr("src",n),$("#h_slide_content").html(r)}),$("#snav_point_active").attr("id","").addClass("snav_point_hide"),$("#slider_nav").children('li[name = "'+t+'"]').removeClass().attr("id","snav_point_active"),$("#h_slide").children("img").load(function(){jQuery("#h_slide > img").animate({opacity:1},{queue:!1,duration:800}),$("#heads_markers").animate({opacity:1},{queue:!1,duration:800}),$("#h_slide_content").animate({opacity:1,right:0},{queue:!1,duration:800,specialEasing:{opacity:"swing",right:"swing"}}),$("#hs_lineartd").animate({opacity:1,left:2},{queue:!1,duration:800,specialEasing:{opacity:"swing",left:"swing"}}),$("#hs_preloader").animate({opacity:0},function(){$("#headsm_locked").css("z-index",4),deff_bcmark=i(),deff_bcmark.done(function(){$(e).children("p").css("background","rgb(103, 200, 255)")})})})}}),r){var s=function(){e>=i-1?(e=0,$(a).eq(e).click()):(e+=1,$(a).eq(e).click()),c=setTimeout(s,1e4)},c=setTimeout(s,1e4);$("#h_slide").hover(function(){clearTimeout(c)},function(){c=setTimeout(s,1e4)}),$("#slider_bottom_info").hover(function(){clearTimeout(c)},function(){c=setTimeout(s,1e4)})}$(".dataListElementLi > div").hide(),$(".dataListElementLi").on("click","p",function(){$(this).next("div").slideToggle("normal")});var o=window.location.href;-1!==o.search(/.product\/./)&&(o=o.split("tovar/"),""!==o[1]&&(document.getElementById("primary-sidebar").style.display="none"))});