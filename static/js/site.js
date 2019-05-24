$(document).ready(function() {
    $("[data-toggle=\"tooltip\"]").tooltip();
    $("html, body").css({
        overflow: "hidden",
        height: "100%"
    });
    $("[data-toggle=\"tooltip\"]").tooltip();
    setTimeout(function() {
        $("#header-image").fadeIn(function() {
            setTimeout(function() {
                $("#header-content-top").fadeIn(function() {
                    setTimeout(function() {
                        $("#header-content-middle, #header-content-bottom").fadeIn(function() {
                            $("html, body").css({
                                overflow: "auto",
                                height: "auto"
                            });
                        });
                    }, 200);
                });
            }, 200);
        });
    }, 500);
});

$(document).delegate("#nav-about", "click", function() {
    $("body").scrollTo("#about", {
        duration: 1000,
        ease: "swing"
    });
});

$(document).delegate("#nav-projects", "click", function() {
    $("body").scrollTo("#projects", {
        duration: 1000,
        ease: "swing"
    });
});

$(document).delegate("#nav-contact", "click", function() {
    $("body").scrollTo("#contact", {
        duration: 1000,
        ease: "swing"
    });
});

$(document).delegate("#nav-top", "click", function() {
    $("body").scrollTo("#header", {
        duration: 1000,
        ease: "swing"
    });
});

var detectScroll = false;

$(document).on("scroll", function() {
    if (detectScroll === true) {
        $("#view").slideUp();
        detectScroll = false;
    }
    if ($(this).scrollTop() >= $('#about').position().top) {
        $("#nav-top").show("slide", {
            direction: "right"
        }, 200);
    }
    else {
        $("#nav-top").hide("slide", {
            direction: "right"
        }, 200);
    }
})

$(document).delegate("#project", "click", function() {
    var project = $(this).data("project");
    $.post("/project/", {
        project: project
    }, function(resp) {
        $("#view .container").html(resp);
        $("#view").slideDown(function() {
            $("body").scrollTo("#view", {
                duration: 200
             });
            setTimeout(function() {
                detectScroll = true;
            }, 220);
        });
    });
});