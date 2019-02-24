$(document).ready(function() {
let maxProjects = 6;

function updateCarousel(e) {
    $("#main-carousel .indicators").css("bottom",($("#main-carousel").height()-($("#main-carousel .row").height())-$("#main-carousel .indicators").height()+30)+"px");
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
    },e.type=="DOMNodeRemoved"?10:0);
};

function checkCarousel(max) {
    const items = $("#main-carousel .carousel-item").get();
    const projects = $("#main-carousel .col").get();
    const currLength = items[0].children[0].children.length;
    let currIndex = 0;
    if (currLength == max) return;
    console.log(currLength,max);
    const itemArray = [];
    const itemCount = Math.ceil(projects.length/max - items.length);
    items.forEach(function(item) {
        itemArray.push($(item));
    });
    for (i = 0; i < itemCount; i++) {
        itemArray.push($('<div class="carousel-item"><div class="row content"></div></div>'));
    };

    let currProj = 0;
    projects.forEach(function(proj) {
        if (currProj%max == 0 && currProj != 0) currIndex++;
        itemArray[currIndex].find(".row").append($(proj));
        currProj++;
    });

    itemArray.forEach(function(item) {
        if (item.parent()[0] === $("#main-carousel").get()[0]) return;
        $("#main-carousel").append(item);
    });

    $("#main-carousel .carousel-item .row").get().forEach(function(item) {
        if (item.children.length == 0) {
            $(item).parent().remove();
        };
    });
};

function checkSize() {
    if (window.innerWidth >= 993) {
        maxProjects = 6;
    } else if (window.innerWidth >= 601) {
        maxProjects = 2;
    } else {
        maxProjects = 1;
    };
    checkCarousel(maxProjects);
    $("#main-carousel .indicators").css("bottom",($("#main-carousel").height()-($("#main-carousel .row").height())-$("#main-carousel .indicators").height()+30)+"px");
};

$("#tags").on("click", ".chip", function(e) {
    $(e.target).toggleClass("active");
});

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

projects.forEach(function(proj) {

});

checkSize();
$(window).on("resize", checkSize);

});