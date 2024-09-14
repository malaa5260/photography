$(document).ready(function() {
    AOS.init();
    if ($('.switch input').checked) {
        // $(this).closest(".reason").show()
        $(".reason").show();
    } else {
        $(".reason").hide()
    }
    $('.switch input').click(function() {
        // console.log($(this).parents(".clearfix").nextAll(".reason").attr('class'));
        $(this).parents(".clearfix").nextAll(".reason").toggle(this.checked);
    });
    var sliderSections = document.getElementsByClassName("range-slider");
    for (var x = 0; x < sliderSections.length; x++) {
        var sliders = sliderSections[x].getElementsByTagName("input");
        for (var y = 0; y < sliders.length; y++) {
            if (sliders[y].type === "range") {
                sliders[y].oninput = getVals;
                // Manually trigger event first time to display values
                sliders[y].oninput();
            }
        }
    }
    $('.downt').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 700 }, '300');


    });


    $('.owl-carousel').owlCarousel({
        autoplay: true,
        center: true,
        loop: false,
        dots: true,
        rtl: true,
        items: 2,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            1000: {
                items: 4
            }

        }

    });
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 500) {
            $(".home_nave").addClass("fixed-top");
        } else {
            $(".home_nave").removeClass("fixed-top");
        }
    });

});
$(".tooglecart").click(function() {
    $(".ex").toggleClass('closed');
    if (!$(".user").hasClass('closed')) {
        $(".user").addClass('closed');
    }
    if (!$(".categories-drop").hasClass('closed')) {
        $(".categories-drop").addClass('closed');
    }
});
$(".closeInSm").click(function(event) {
    $(".user").toggleClass('closed');
    if (!$(".ex").hasClass('closed')) {
        $(".ex").addClass('closed');
    }
    if (!$(".categories-drop").hasClass('closed')) {
        $(".categories-drop").addClass('closed');
    }
});
$('.catbtton').click(function() {
    $(".categories-drop").toggleClass('closed');
    if (!$(".ex").hasClass('closed')) {
        $(".ex").addClass('closed');

    }
    if (!$(".user").hasClass('closed')) {
        $(".user").addClass('closed');
    }
});
$('.delete').click(function() {
    $(this).closest('.favProduct').remove()

})
$('tr .delete').click(function() {
    $(this).closest('tr').remove()

})
$('.removeProduct').click(function() {
    $(this).closest('.one-item').remove()

})

$('.pro').owlCarousel({
    loop: false,
    margin: 4,
    rtl: true,
    items: 0,
    nav: true,
    dots: true,
    center: false,
    responsiveClass: true,
    navText: ["<i class='fa fa-chevron-left'></i>",
        "<i class='fa fa-chevron-right'></i>"
    ],
    responsive: {
        0: { items: 2 },
        480: { items: 2 },
        768: { items: 3 },
        991: { items: 4 },
        1024: { items: 5 },
        1200: { items: 5 }
    }
});

$('.proo').owlCarousel({
    loop: false,
    margin: 20,
    ltr: true,
    items: 0,
    autoplay: true,
    nav: true,
    dots: true,
    center: false,
    responsiveClass: true,
    navText: ["<i class='fa fa-chevron-left'></i>",
        "<i class='fa fa-chevron-right'></i>"
    ],
    responsive: {
        0: { items: 1 },
        480: { items: 1 },
        768: { items: 1 },
        991: { items: 1 },
        1024: { items: 1 },
        1200: { items: 1 }
    }
});
window.onload = function() {
    $(".loader").fadeOut("5000", function() {
        $("body").css("overflow-y", "auto");
        $(".over").fadeOut("3000");
    });
};
if ($('.wheel-map').length) {
    $('.wheel-map').each(function() {
        initialize(this);
    });
}
$('.toggle-chat').click(function() {
    $('.chat-box').toggleClass('closed');

});

function initialize(_this) {

    var stylesArray = {
        //style 1
        'style-1': [{ "featureType": "landscape", "stylers": [{ "hue": "#FFBB00" }, { "saturation": 43.400000000000006 }, { "lightness": 37.599999999999994 }, { "gamma": 1 }] }, { "featureType": "road.highway", "stylers": [{ "hue": "#FFC200" }, { "saturation": -61.8 }, { "lightness": 45.599999999999994 }, { "gamma": 1 }] }, { "featureType": "road.arterial", "stylers": [{ "hue": "#FF0300" }, { "saturation": -100 }, { "lightness": 51.19999999999999 }, { "gamma": 1 }] }, { "featureType": "road.local", "stylers": [{ "hue": "#FF0300" }, { "saturation": -100 }, { "lightness": 52 }, { "gamma": 1 }] }, { "featureType": "water", "stylers": [{ "hue": "#0078FF" }, { "saturation": -13.200000000000003 }, { "lightness": 2.4000000000000057 }, { "gamma": 1 }] }, { "featureType": "poi", "stylers": [{ "hue": "#00FF6A" }, { "saturation": -1.0989010989011234 }, { "lightness": 11.200000000000017 }, { "gamma": 1 }] }]
    };

    var styles, map, marker, infowindow,
        lat = $(_this).attr("data-lat"),
        lng = $(_this).attr("data-lng"),
        contentString = $(_this).attr("data-string"),
        image = $(_this).attr("data-marker"),
        styles_attr = $(_this).attr("data-style"),
        zoomLevel = parseInt($(_this).attr("data-zoom"), 10),
        myLatlng = new google.maps.LatLng(lat, lng);


    // style_1
    if (styles_attr == 'style-1') {
        styles = stylesArray[styles_attr];
    }
    // custom
    if (typeof hawa_style_map != 'undefined' && styles_attr == 'custom') {
        styles = hawa_style_map;
    }
    // or default style

    var styledMap = new google.maps.StyledMapType(styles, { name: "Styled Map" });

    var mapOptions = {
        zoom: zoomLevel,
        disableDefaultUI: true,
        center: myLatlng,
        scrollwheel: false,
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
        }
    };

    map = new google.maps.Map(_this, mapOptions);

    map.mapTypes.set('map_style', styledMap);
    map.setMapTypeId('map_style');

    infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        icon: image
    });

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map, marker);
    });

}

$('.image').on('mousemove', function(event) {
    // This gives you the position of the image on the page
    var bbox = event.target.getBoundingClientRect();

    // Then we measure how far into the image the mouse is in both x and y directions
    var mouseX = event.clientX - bbox.left;
    var mouseY = event.clientY - bbox.top;

    // Then work out how far through the image as a percentage the mouse is
    var xPercent = (mouseX / bbox.width) * 100;
    var yPercent = (mouseY / bbox.height) * 100;

    // Then we change the `transform-origin` css property on the image to center the zoom effect on the mouse position
    //event.target.style.transformOrigin = xPercent + '% ' + yPercent + '%';
    // It's a bit clearer in jQuery:
    $(this).css('transform-origin', (xPercent + '% ' + yPercent + '%'));
    // We add the '%' units to make sure the string looks exactly like the css declaration it becomes.

});
// If you want it to automatically trigger on hover
$('.image').on('mouseenter', function() {
    $(this).addClass('zoom-in');
    $(this).removeClass('normal-zoom');
});

// and stop when not hovering
$('.image').on('mouseleave', function() {
    $(this).addClass('normal-zoom');
    $(this).removeClass('zoom-in');
});

function wcqib_refresh_quantity_increments() {
    jQuery("div.quantity:not(.buttons_added), td.quantity:not(.buttons_added)").each(function(a, b) {
        var c = jQuery(b);
        c.addClass("buttons_added"), c.children().first().before('<button class="minus d-block">< i class= " fa fa-chevron-up text-black-50" ></i ></button >'), c.children().last().after(' <button class="minus d-block">< i class= " fa fa-chevron-down text-black-50" ></i ></button >')
    })
}
String.prototype.getDecimals || (String.prototype.getDecimals = function() {
    var a = this,
        b = ("" + a).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
    return b ? Math.max(0, (b[1] ? b[1].length : 0) - (b[2] ? +b[2] : 0)) : 0
}), jQuery(document).ready(function() {
    wcqib_refresh_quantity_increments()
}), jQuery(document).on("updated_wc_div", function() {
    wcqib_refresh_quantity_increments()
}), jQuery(document).on("click", ".plus, .minus", function(e) {
    e.preventDefault();
    var a = jQuery(this).closest(".quantity").find(".qty"),
        b = parseFloat(a.val()),
        c = parseFloat(a.attr("max")),
        d = parseFloat(a.attr("min")),
        e = a.attr("step");
    b && "" !== b && "NaN" !== b || (b = 0), "" !== c && "NaN" !== c || (c = ""), "" !== d && "NaN" !== d || (d = 0), "any" !== e && "" !== e && void 0 !== e && "NaN" !== parseFloat(e) || (e = 1), jQuery(this).is(".plus") ? c && b >= c ? a.val(c) : a.val((b + parseFloat(e)).toFixed(e.getDecimals())) : d && b <= d ? a.val(d) : b > 0 && a.val((b - parseFloat(e)).toFixed(e.getDecimals())), a.trigger("change")
});

$("#v-pills-tab .nav-link").click(function() {
    $('html,body').animate({
            scrollTop: $(".tab-content").offset().top - 130
        },
        'slow');
});

function getVals() {
    // Get slider values
    var parent = this.parentNode;
    var slides = parent.getElementsByTagName("input");
    var slide1 = parseFloat(slides[0].value);
    var slide2 = parseFloat(slides[1].value);
    // Neither slider will clip the other, so make sure we determine which is larger
    if (slide1 > slide2) {
        var tmp = slide2;
        slide2 = slide1;
        slide1 = tmp;
    }
    $('.firstVal').text(slide1 + ' SR')
    $('.lastVal').text(slide2 + ' SR')

    var displayElement = parent.getElementsByClassName("rangeValues")[0];
    displayElement.innerHTML = slide1 + " - " + slide2;
}
$(".list").click(function(event) {
    $('.prod-show').addClass('col-12').removeClass('col-lg-4 col-md-6');
    $(".prod-show .col-12:first-of-type").removeClass('col-12').addClass('col-4')
    $(".prod-show .col-12:last-of-type").removeClass('col-12').addClass('col-8')
    $('.float-left.mb-3.inline-block').removeClass('float-left').addClass('d-inline-block')
});
$(".grid").click(function(event) {
    $('.prod-show').addClass('col-lg-4 col-md-6').removeClass('col-12');
    $(".prod-show .col-4:first-of-type").removeClass('col-4').addClass('col-12')
    $(".prod-show .col-8:last-of-type").removeClass('col-8').addClass('col-12')
    $('.float-left.mb-3.inline-block').removeClass('float-left').addClass('d-inline-block')
});
$(document).ready(() => {
    let url = location.href.replace(/\/$/, "");

    if (location.hash) {
        const hash = url.split("#");
        console.log(hash[1]);

        $('a[href="#' + hash[1] + '"]').tab("show");
        url = location.href.replace(/\/#/, "#");
        history.replaceState(null, null, url);
        setTimeout(() => {
            $(window).scrollTop(0);
        }, 400);
    }

    $('a[data-toggle="tab"]').on("click", function() {
        let newUrl;
        const hash = $(this).attr("href");
        if (hash == "#home") {
            newUrl = url.split("#")[0];
        } else {
            newUrl = url.split("#")[0] + hash;
        }
        newUrl += "/";
        history.replaceState(null, null, newUrl);
    });
});
// facts counter
$('.counter').counterUp({
    delay: 10,
    time: 2000
});
if ($('.wheel-map').length) {
    $('.wheel-map').each(function() {
        initialize(this);
    });
}
$('.toggle-chat').click(function() {
    $('.chat-box').toggleClass('closed');

});

function initialize(_this) {

    var stylesArray = {
        //style 1
        'style-1': [{ "featureType": "landscape", "stylers": [{ "hue": "#FFBB00" }, { "saturation": 43.400000000000006 }, { "lightness": 37.599999999999994 }, { "gamma": 1 }] }, { "featureType": "road.highway", "stylers": [{ "hue": "#FFC200" }, { "saturation": -61.8 }, { "lightness": 45.599999999999994 }, { "gamma": 1 }] }, { "featureType": "road.arterial", "stylers": [{ "hue": "#FF0300" }, { "saturation": -100 }, { "lightness": 51.19999999999999 }, { "gamma": 1 }] }, { "featureType": "road.local", "stylers": [{ "hue": "#FF0300" }, { "saturation": -100 }, { "lightness": 52 }, { "gamma": 1 }] }, { "featureType": "water", "stylers": [{ "hue": "#0078FF" }, { "saturation": -13.200000000000003 }, { "lightness": 2.4000000000000057 }, { "gamma": 1 }] }, { "featureType": "poi", "stylers": [{ "hue": "#00FF6A" }, { "saturation": -1.0989010989011234 }, { "lightness": 11.200000000000017 }, { "gamma": 1 }] }]
    };

    var styles, map, marker, infowindow,
        lat = $(_this).attr("data-lat"),
        lng = $(_this).attr("data-lng"),
        contentString = $(_this).attr("data-string"),
        image = $(_this).attr("data-marker"),
        styles_attr = $(_this).attr("data-style"),
        zoomLevel = parseInt($(_this).attr("data-zoom"), 10),
        myLatlng = new google.maps.LatLng(lat, lng);


    // style_1
    if (styles_attr == 'style-1') {
        styles = stylesArray[styles_attr];
    }
    // custom
    if (typeof hawa_style_map != 'undefined' && styles_attr == 'custom') {
        styles = hawa_style_map;
    }
    // or default style

    var styledMap = new google.maps.StyledMapType(styles, { name: "Styled Map" });

    var mapOptions = {
        zoom: zoomLevel,
        disableDefaultUI: true,
        center: myLatlng,
        scrollwheel: false,
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
        }
    };

    map = new google.maps.Map(_this, mapOptions);

    map.mapTypes.set('map_style', styledMap);
    map.setMapTypeId('map_style');

    infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        icon: image
    });

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map, marker);
    });

}

function getVals() {
    // Get slider values
    var parent = this.parentNode;
    var slides = parent.getElementsByTagName("input");
    var slide1 = parseFloat(slides[0].value);
    var slide2 = parseFloat(slides[1].value);
    // Neither slider will clip the other, so make sure we determine which is larger
    if (slide1 > slide2) {
        var tmp = slide2;
        slide2 = slide1;
        slide1 = tmp;
    }
    $('.firstVal').text(slide1 + ' SR')
    $('.lastVal').text(slide2 + ' SR')

    var displayElement = parent.getElementsByClassName("rangeValues")[0];
    displayElement.innerHTML = slide1 + " - " + slide2;
}

var sliderSections = document.getElementsByClassName("range-slider");
for (var x = 0; x < sliderSections.length; x++) {
    var sliders = sliderSections[x].getElementsByTagName("input");
    for (var y = 0; y < sliders.length; y++) {
        if (sliders[y].type === "range") {
            sliders[y].oninput = getVals;
            // Manually trigger event first time to display values
            sliders[y].oninput();
        }
    }
}

$(".list").click(function(event) {
    $('.prod-show').addClass('col-12').removeClass('col-lg-4 col-md-6');
    $(".prod-show .col-12:first-of-type").removeClass('col-12').addClass('col-4')
    $(".prod-show .col-12:last-of-type").removeClass('col-12').addClass('col-8')
    $('.float-left.mb-3.inline-block').removeClass('float-left').addClass('d-inline-block')
});
$(".grid").click(function(event) {
    $('.prod-show').addClass('col-lg-4 col-md-6').removeClass('col-12');
    $(".prod-show .col-4:first-of-type").removeClass('col-4').addClass('col-12')
    $(".prod-show .col-8:last-of-type").removeClass('col-8').addClass('col-12')
    $('.float-left.mb-3.inline-block').removeClass('float-left').addClass('d-inline-block')
});
$(document).ready(() => {
    let url = location.href.replace(/\/$/, "");

    if (location.hash) {
        const hash = url.split("#");
        console.log(hash[1]);

        $('a[href="#' + hash[1] + '"]').tab("show");
        url = location.href.replace(/\/#/, "#");
        history.replaceState(null, null, url);
        setTimeout(() => {
            $(window).scrollTop(0);
        }, 400);
    }

    $('a[data-toggle="tab"]').on("click", function() {
        let newUrl;
        const hash = $(this).attr("href");
        if (hash == "#home") {
            newUrl = url.split("#")[0];
        } else {
            newUrl = url.split("#")[0] + hash;
        }
        newUrl += "/";
        history.replaceState(null, null, newUrl);
    });
});

$(window).scroll(function() {
    if ($(this).scrollTop() >= 100) {
        $('.scrolltop').addClass("show");
    } else {
        $('.scrolltop').removeClass("show");
    }
})
$('.scrolltop').click(function() {
    $('body,html').animate({
        scrollTop: 0
    }, 300)
})
$(function() {
    'use strict';

    //shuffle
    $('.featured_work ul li').on('click', function() {

        $(this).addClass('active').siblings().removeClass('active');
        if ($(this).data('class') === 'all') {
            $('.shufll-imgs .cm').css('opacity', '1');

        } else {
            $('.shufll-imgs .cm').css('opacity', '0.08');
            $($(this).data('class')).parent().css('opacity', '');


        }
    });
});