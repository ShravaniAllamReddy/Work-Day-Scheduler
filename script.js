
let time;
let currentTime;

$("#currentDay").text(moment().format("dddd, MMMM Do"));

$(".coloriser").each(function () {

    time = $(this).find(".time-block").attr("id");
    currentTime = moment().format("H");
    console.log(currentTime);
    console.log(time);
    if (currentTime > parseInt(time)) {
        $(this).find(".calendartext").addClass("past");
    }
    else if (currentTime < parseInt(time)) {
        $(this).find(".calendartext").addClass("future");
    }
    else if (currentTime == time) {
        $(this).find(".calendartext").addClass("present");
    }

});








