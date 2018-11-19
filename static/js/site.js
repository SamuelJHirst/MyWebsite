$(document).ready(function() {
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
    $("a").css("cursor", "default");
    $.post("/home/", function(resp) {
        $("body").css("overflow", "hidden");
        $("#content").hide("slide", { direction: "up" }, 500, function() {
            $("#content").html(resp);
            $("#content").show()
            $("body").css("overflow", "auto");
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
        });
    });
});

$(document).delegate("#about", "click", function() {
    $("a").css("cursor", "default");
    $.post("/about/", function(resp) {
        $("body").css("overflow", "hidden");
        $("#content").hide("slide", { direction: "up" }, 500, function() {
            $("#content").html(resp);
            $("#content").show()
            $("body").css("overflow", "auto");
            $(".fade-1").css("opacity", 1);
            setTimeout(function() {
                $(".fade-2").css("opacity", 1);
                setTimeout(function() {
                    $(".fade-3").css("opacity", 1);
                    $("a").css("cursor", "pointer");
                }, 500);
            }, 500);
        });
    });
});

$(document).delegate("#projects", "click", function() {
    $("a").css("cursor", "default");
    $.post("/projects/", function(resp) {
        $("body").css("overflow", "hidden");
        $("#content").hide("slide", { direction: "up" }, 500, function() {
            $("#content").html(resp);
            $("#content").show()
            $("body").css("overflow", "auto");
            $(".fade-1").css("opacity", 1);
            setTimeout(function() {
                $(".fade-2").css("opacity", 1);
                setTimeout(function() {
                    $(".fade-3").css("opacity", 1);
                    $("a").css("cursor", "pointer");
                }, 500);
            }, 500);
        });
    });
});

$(document).delegate("#contact", "click", function() {
    $("a").css("cursor", "default");
    $.post("/contact/", function(resp) {
        $("body").css("overflow", "hidden");
        $("#content").hide("slide", { direction: "up" }, 500, function() {
            $("#content").html(resp);
            $("#content").show()
            $("body").css("overflow", "auto");
            $(".fade-1").css("opacity", 1);
            setTimeout(function() {
                $(".fade-2").css("opacity", 1);
                setTimeout(function() {
                    $(".fade-3").css("opacity", 1);
                    $("a").css("cursor", "pointer");
                }, 500);
            }, 500);
        });
    });
});