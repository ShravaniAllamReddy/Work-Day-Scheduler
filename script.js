
let time;
let currentTime;
let eventData;
let eventId;

$("#currentDay").text(moment().format("dddd, MMMM Do"));

$(".coloriser").each(function () {

    time = $(this).find(".time-block").attr("id");
    currentTime = moment().format("H");
    // console.log(currentTime);
    // console.log(time);
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



$(".saveBtn").on("click", function (event) {
    event.preventDefault();
    eventData = $(this).parent(".coloriser").find(".eventtext").val().trim();
    eventId = $(this).parent(".coloriser").find(".eventtext").attr("id");
    // console.log(eventData);
    // console.log(eventId);
    localStorage.setItem(eventId, eventData);
})


$(".eventtext").each(function () {
    eventId = $(this).attr("id");
    $(this).val(localStorage.getItem(eventId));

})


