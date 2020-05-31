// variables for each time slot
var nine = JSON.parse(localStorage.getItem('nine')) || [];
var ten = JSON.parse(localStorage.getItem('ten')) || [];
var eleven = JSON.parse(localStorage.getItem('eleven')) || [];

// display current date in header by appending 'p' element
$("#currentDay").prepend(moment().format("dddd MMMM, Do"));

// load time slot items from localStorage
$("#item-nine").append(nine);
$("#item-ten").append(ten);
$("#item-ten").append(eleven);

// save time slot items to localStorage, replacing existing values
$("#save-nine").on("click", function() {
    var item = $("#item-nine").val().trim();
    nine.splice(0);
    nine.push(item);
    localStorage.setItem("nine", JSON.stringify(nine));
});
$("#save-ten").on("click", function() {
    var item = $("#item-ten").val().trim();
    ten.splice(0);
    ten.push(item);
    localStorage.setItem("ten", JSON.stringify(ten));
});
$("#save-eleven").on("click", function() {
    var item = $("#item-eleven").val().trim();
    ten.splice(0);
    ten.push(item);
    localStorage.setItem("eleven", JSON.stringify(eleven));
});
// add styling to time slot based on current time
function nineStyling() {
    var timeSlot = moment({hour:9});
    var currentTime = moment().hour();
    console.log("timeslot " + timeSlot);
    console.log("currentTime " + currentTime);
    if (moment(currentTime).isAfter(timeSlot)) {
        $("#time-nine").addClass("past");
    } else if (moment(currentTime).isBefore(timeSlot)) {
        $("#time-nine").addClass("future");
    } else {
        $("#time-nine").addClass("present");
    }
};
nineStyling();
function tenStyling() {
    var timeSlot = moment({hour:10});
    var currentTime = moment().hour();
    console.log("timeslot " + timeSlot);
    console.log("currentTime " + currentTime);
    if (moment(currentTime).isAfter(timeSlot)) {
        $("#time-ten").addClass("past");
    } else if (moment(currentTime).isBefore(timeSlot)) {
        $("#time-ten").addClass("future");
    } else {
        $("#time-ten").addClass("present");
    }
};
tenStyling();
function elevenStyling() {
    var timeSlot = moment({hour:11});
    var currentTime = moment().hour();
    console.log("timeslot " + timeSlot);
    console.log("currentTime " + currentTime);
    if (moment(currentTime).isAfter(timeSlot)) {
        $("#time-eleven").addClass("past");
    } else if (moment(currentTime).isBefore(timeSlot)) {
        $("#time-eleven").addClass("future");
    } else {
        $("#time-eleven").addClass("present");
    }
};
elevenStyling();