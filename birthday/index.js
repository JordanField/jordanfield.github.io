$(document).ready(function () {
    $("#present-base").click(function () {
        $("#y1").addClass("open");
        $("#x").addClass("open");
        $("#y2").addClass("open");
        window.setTimeout(function () {
            $("#present-top").addClass("open");
        },1500);
    })
});