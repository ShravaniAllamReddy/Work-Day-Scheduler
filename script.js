
let time;
let currentTime;
let eventData;
let eventId;


//To display the current day at the top of the calendar
$("#currentDay").text(moment().format("dddd, MMMM Do"));


//This below function adds color to all the timeblocks created in html 
$(".coloriser").each(function () {

    //this grabs the attribute 'id' from class 'timeblock' in class 'coloriser'
    time = $(this).find(".time-block").attr("id");
    //momentjs time format to get the value of military time
    currentTime = moment().format("H");

    //If current time is greater than the time in timeblock , then we add class 'past' which is in style.css(grey color)
    if (currentTime > parseInt(time)) {
        $(this).find(".calendartext").addClass("past");
    }

    //If current time is less than the time in timeblock , then we add class 'future' (green color)
    else if (currentTime < parseInt(time)) {
        $(this).find(".calendartext").addClass("future");
    }

    //If current time is equal to the time in timeblock , then we add class 'present' (Red color)
    else if (currentTime == time) {
        $(this).find(".calendartext").addClass("present");
    }

});


// when save button is clicked , the below function gets executed
$(".saveBtn").on("click", function (event) {
    event.preventDefault();

    //this grabs the class 'coloriser' and finds class 'eventtext' and its value is stored in variable 'eventData'
    eventData = $(this).parent(".coloriser").find(".eventtext").val().trim();

    //this sets the attribute 'id' from 'eventtext' class which is in 'coloriser' class to variable 'eventId'
    eventId = $(this).parent(".coloriser").find(".eventtext").attr("id");

    //This stores the value of eventData in 'eventId' variable
    if (eventData !== "") {
        localStorage.setItem(eventId, eventData);
    }
    else {
        // //This deletes the event from local storage
        // localStorage.removeItem(eventId);
        alert("Please Enter some event");
    }
})

//This gets the value which is stored in 'eventId' variable which checks for each 'eventext' class and grabs the attribute 'id'
$(".eventtext").each(function () {
    eventData = $(this).val().trim();
    eventId = $(this).attr("id");


    $(this).val(localStorage.getItem(eventId));

})








