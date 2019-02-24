$(document).ready(function() {
let projects = [];
let storedProjects = [];
// Maximum amount of projects abled to be displayed at once
let maxProjects;

// Resests carousel when children are added/removed
function resetCarousel(e) {
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

// Add/remove carousel items
function updateCarousel(max) {
    const items = $("#main-carousel .carousel-item").get();
    const currLength = items[0].children[0].children.length;
    const itemArray = [];
    const itemCount = Math.ceil(projects.length/max - items.length);

    items.forEach(function(item) {
        itemArray.push($(item));
    });
    for (i = 0; i < itemCount; i++) {
        itemArray.push($('<div class="carousel-item"><div class="row content"></div></div>'));
    };

    let currIndex = 0;
    let currProj = 0;
    projects.forEach(function(proj) {
        if (currProj%maxProjects == 0 && currProj != 0) currIndex++;
        itemArray[currIndex].find(".row").append($(proj.element));
        currProj++;
    });

    itemArray.forEach(function(item) {
        if (item.parent()[0] === $("#main-carousel").get()[0]) return;
        $("#main-carousel").append(item);
    });

    $("#main-carousel .carousel-item .row").get().forEach(function(item) {
        if (item.children.length == 0 && $("#main-carousel .carousel-item").length > 1) {
            $(item).parent().remove();
        };
    });
};

// Check window size for carousel adjustments
function checkSize() {
    let newMax = 1;
    if (window.innerWidth >= 993) {
        newMax = 6;
    } else if (window.innerWidth >= 601) {
        newMax = 2;
    };
    $("#main-carousel .indicators").css("bottom",($("#main-carousel").height()-($("#main-carousel .row").height())-$("#main-carousel .indicators").height()+30)+"px");
    // If already has same maximum amount of projects then stop
    if (maxProjects == newMax) return;
    maxProjects = newMax;
    updateCarousel(maxProjects);
};

// Mountain animation
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

function findTags() {
    const activeTags = $("#tags .active").get();
    if (activeTags.length == 0) {
        projects = projects.concat(storedProjects);
        storedProjects = [];
        $("#tags .chip").css("display", "inline-block");
    } else {    
        $("#tags .chip:not(.active)").css("display","none");
        
        let removalIndexes = [];
        storedProjects.forEach(function(proj) {
            for (let i = 0; i < activeTags.length; i++) {
                if (proj.tags.indexOf($(activeTags[i]).text()) === -1) return;
            };
            removalIndexes.unshift(storedProjects.indexOf(proj));
        });
        
        removalIndexes.forEach(function(index) {
            projects = projects.concat(storedProjects.splice(index,1));
        });
        
        removalIndexes = [];
        projects.forEach(function(proj) {
            for (let i = 0; i < activeTags.length; i++) {
                if (proj.tags.indexOf($(activeTags[i]).text()) == -1) return removalIndexes.unshift(projects.indexOf(proj))
            };
            $("#tags .chip").get().forEach(function(elem) {
                if (proj.tags.indexOf($(elem).text()) > -1) $(elem).css("display","inline-block");
            });
        });

        removalIndexes.forEach(function(index) {
            storedProjects = storedProjects.concat(projects.splice(index,1));
        });
    };

    projects.sort(function(a, b){return b.score - a.score});

    storedProjects.forEach(function(proj) {
        $("#hidden-projects").append(proj.element);
    });
    updateCarousel(maxProjects);
};

// Create html elements for each stored project
projectList.forEach(function(proj) {
    proj.element = $(`<div class="col s12 m6 l4" data-score="${proj.score}">
        <img src="${proj.thumbnail}" width="100%">
        <div class="caption waves-effect waves-light">
            <div class="middle">
                <h5>${proj.name}</h5>
                <a class="btn-floating btn-large cyan pulse"><i class="fas fa-search-plus"></i></i></a>
            </div>
        </div>
    </div>`);
    projects.push(proj);
});

$("#tags").on("click", ".chip", function(e) {
    const tag = $(e.target);
    tag.toggleClass("active");
    findTags(tag);
});

// Animated scrolling effect
$('.scrollspy').scrollSpy({
    throttle: 300,
    scrollOffset: 0,
});

// Initialize carousel
$('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true
});

$("#main-carousel").on("DOMNodeRemoved",resetCarousel);
$("#main-carousel").on("DOMNodeInserted",resetCarousel);

checkSize();
$(window).on("resize", checkSize);

});