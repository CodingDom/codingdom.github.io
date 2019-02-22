$(document).ready(function() {

function updateCarousel(e) {
    if (!$(e.target).hasClass("carousel-item")) return;
    var slider = $('#main-carousel');

    if (slider.hasClass('initialized')){
        slider.removeClass('initialized')
    }

    setTimeout(function() {
        slider.find(".indicators").remove();
        slider.carousel({
            fullWidth: true,
            indicators: true
        }); 
    },e.type=="DOMNodeRemoved"?100:0);
};

$('.scrollspy').scrollSpy({
    throttle: 300,
    scrollOffset: 0,
});

$('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true
});

$("#main-carousel").on("DOMNodeRemoved",updateCarousel);
$("#main-carousel").on("DOMNodeInserted",updateCarousel);

$("header .background").animate({"text-indent":"1.75"},{
    duration:20000,
    step: function(now,fx) {
        $(this).css("transform","scale(" + now + ")");
    },
    complete:function() {
        $(this).css("text-indent","0");
        $(this).animate({"text-indent":"10"},{
            duration:15000,
            step: function(now,fx) {
                $(this).css("transform","scale(1.75) translate(" + now + "vw)");
            },
            complete:function() {
                $(this).animate({"text-indent":"-10"},{
                    duration:15000,
                    step: function(now,fx) {
                        $(this).css("transform","scale(1.75) translate(" + now + "vw)");
                    },
                    complete:function() {
                        $(this).animate({"text-indent":"0"},{
                            duration:15000,
                            step: function(now,fx) {
                                $(this).css("transform","scale(" + Math.max(Math.min(1.75,1.75-((1/(Math.abs(now)))*0.75)),1) + ") translate(" + now + "vw)");
                            },
                            complete:function() {
                                
                            }
                        }); 
                    }
                });    
            }
        });
    }
});

});