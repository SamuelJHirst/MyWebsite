$(document).ready(function() {
    $('.carousel').carousel()
    $("a").css("cursor", "default");
    setTimeout(function() {
        $(".fade-1").css("opacity", 1);
        setTimeout(function() {
            $(".fade-2").css("opacity", 1);
            setTimeout(function() {
                $(".fade-3").css("opacity", 1);
                setTimeout(function() {
                    $(".fade-4").css("opacity", 1);
                    $("a").css("cursor", "pointer");
                }, 500);
            }, 500);
        }, 500);
    }, 500);
});

$(document).delegate("#home", "click", function() {
    window.history.pushState("", "", "/");
    $("a").css("cursor", "default");
    $.post("/home/", function(resp) {
        $("body").css("overflow", "hidden");
        $("#content").hide("slide", { direction: "right" }, 500, function() {
            $("#content").html(resp);
            $(".fade-1").css("opacity", 1);
            $(".fade-2").css("opacity", 1);
            $(".fade-3").css("opacity", 1);
            $(".fade-4").css("opacity", 1);
            $("#content").show("slide", { direction: "left" }, 500, function() {
                $("body").css("overflow", "auto");
                $("a").css("cursor", "pointer");
            });
        });
    });
});

$(document).delegate("#about", "click", function() {
    window.history.pushState("", "", "/about/");
    $("a").css("cursor", "default");
    $.post("/about/", function(resp) {
        $("body").css("overflow", "hidden");
        $("#content").hide("slide", { direction: "left" }, 500, function() {
            $("#content").html(resp);
            $("#content").show("slide", { direction: "right" }, 500, function() {
                $("body").css("overflow", "auto");
                $("a").css("cursor", "pointer");
            });
        });
    });
});

$(document).delegate("#projects", "click", function() {
    window.history.pushState("", "", "/projects/");
    $("a").css("cursor", "default");
    $.post("/projects/", function(resp) {
        $("body").css("overflow", "hidden");
        $("#content").hide("slide", { direction: "left" }, 500, function() {
            $("#content").html(resp);
            $("#content").show("slide", { direction: "right" }, 500, function() {
                $("body").css("overflow", "auto");
                $("a").css("cursor", "pointer");
            });
        });
    });
});

$(document).delegate("#contact", "click", function() {
    window.history.pushState("", "", "/contact/");
    $("a").css("cursor", "default");
    $.post("/contact/", function(resp) {
        $("body").css("overflow", "hidden");
        $("#content").hide("slide", { direction: "left" }, 500, function() {
            $("#content").html(resp);
            $("#content").show("slide", { direction: "right" }, 500, function() {
                $("body").css("overflow", "auto");
                $("a").css("cursor", "pointer");
            });
        });
    });
});

$(document).delegate("#project", "click", function() {
    var project = $(this).data("project");
    window.history.pushState("", "", "/project/" + project + "/");
    $("a").css("cursor", "default");
    $.post("/project/", {
        project: project
    }, function(resp) {
        $("body").css("overflow", "hidden");
        $("#content").hide("slide", { direction: "left" }, 500, function() {
            $("#content").html(resp);
            $("#content").show("slide", { direction: "right" }, 500, function() {
                $("body").css("overflow", "auto");
                $("a").css("cursor", "pointer");
            });
        });
    });
});