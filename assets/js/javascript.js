$(document).ready(function() {

$('.scrollspy').scrollSpy({
    throttle: 300,
    scrollOffset: 0,
});

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