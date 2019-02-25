$(document).ready(function() {
let projects = [];
let storedProjects = [];
// Maximum amount of projects abled to be displayed at once
let maxProjects;
let autoplay;

let imageURLs = [];

// Image preloader for slideshow
function preloadImages(urls, allImagesLoadedCallback){
    var loadedCounter = 0;
  var toBeLoadedNumber = urls.length;
  urls.forEach(function(url){
    preloadImage(url, function(){
        loadedCounter++;
            console.log('Number of loaded images: ' + loadedCounter);
      if(loadedCounter == toBeLoadedNumber){
        allImagesLoadedCallback();
      }
    });
  });
  function preloadImage(url, anImageLoadedCallback){
      var img = new Image();
      img.onload = anImageLoadedCallback;
      img.src = url;
  }
}

// Resests carousel when children are added/removed
function resetCarousel(e) {
    if (!$(e.target).hasClass("carousel-item")) return;
    const slider = $('#main-carousel');

    if (slider.hasClass('initialized')){
        slider.removeClass('initialized');
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
    $("#project-modal #modal-slider").css("height",$("#project-modal img").height() + "px");
    if ($("#project-modal #modal-slider").css("float") == "left") {
        $("#project-modal").css("height","75%");
        $("#project-modal .modal-content").css("height",$("#project-modal img").height() + "px");
        $("#project-modal").css("height",$("#project-modal #modal-slider").height() + 56 + "px");
    } else {
        $("#project-modal").css("height","90%");
        $("#project-modal .modal-content").css("height","100%");
    };
    
    // If already has same maximum amount of projects then stop
    if (maxProjects == newMax) return;
    maxProjects = newMax;
    updateCarousel(maxProjects);
};

// Function for Skills/Technology filtering of projects
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
    $("#main-carousel .indicators").css("bottom",($("#main-carousel").height()-($("#main-carousel .row").height())-$("#main-carousel .indicators").height()+30)+"px");
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
    if (proj.preview.length === 0) proj.preview=[proj.thumbnail];
    projects.push(proj);
    imageURLs = imageURLs.concat(proj.preview);
    // Function meant for toggling overlay effect on images
    proj.element.on("mouseenter mouseleave touchstart touchend", function(e){
        if(e.type == 'touchstart') {
          $(this).off('mouseenter mouseleave');
          $(this).find(".caption").removeClass("waves-lights");
          $(this).find(".caption").addClass("waves-yellow");
        };
        
        if ($("#main-carousel").hasClass("scrolling")) {
            $("#main-carousel .col").removeClass("hover");
        } else {
            if (e.type == "mouseleave" || e.type == "touchend") {
                $(this).removeClass("hover");
            } else {
                $(this).addClass("hover");
            };
        };
    });

    proj.element.on("click", function(e) {
        document.getElementById('main-content').scrollIntoView();
        $("#project-modal .title").text(proj.name);
        $("#project-modal img").attr("src",proj.thumbnail);
        // $("#project-modal .modal-content p").text(proj.desc);
        $("#modal-slider").find("img").remove();
        for (let i = $("#modal-slider .slides li").length; i > 0; i--) {
            $($("#modal-slider .slides li").get()[i]).remove();
        };
        let index = 0;
        proj.preview.forEach(function(src) {
            const item = $("#modal-slider .slides li").get()[index]?$($("#modal-slider .slides li").get()[index]):$(`<li>`);
            item.append(`<img src="${src}" height="auto">`);
            $("#modal-slider .slides").append(item);
            index++;
        });

        if (proj.url) {
            $("#project-modal .url").css("display","block");
            $("#project-modal .url").attr("href",proj.url);
        } else {
            $("#project-modal .url").css("display","none");
        };
        if (proj.repo) {
            $("#project-modal .git").css("display","block");
            $("#project-modal .git").attr("href",proj.repo+"#readme");
        } else {
            $("#project-modal .git").css("display","none");
        };
        $('#project-modal').modal("open");

        const slider = $('#modal-slider');
        const originWidth = $("#modal-slider img").get()[0].naturalWidth;
        const originHeight = $("#modal-slider img").get()[0].naturalHeight;
        const scaleY = ($("#modal-slider img").width()/originWidth)*originHeight;

        if (slider.hasClass('initialized')){
            slider.removeClass('initialized');
        }

        slider.slider({
            indicators: false
        });

        let i = 0;
        $("#modal-slider img").get().forEach(function(img) {
            $(img).attr("src",proj.preview[i]);
            i++;
        })
        checkSize();
    });
});

preloadImages(imageURLs, function(){
    console.log('All images were loaded');
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

$('.modal').modal({
    onOpenStart: function() {
        checkSize();
    },
    onOpenEnd: function() {
        if ($("#modal-slider").height() == 0) {
            checkSize();
        }
    },
    onCloseEnd: function() {
        clearInterval(autoplay);
    }
    });

$('.slider').slider({
    indicators: false
});



checkSize();
$(window).on("resize", checkSize);

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
                            }
                        }); 
                    }
                });    
            }
        });
    }
});

});