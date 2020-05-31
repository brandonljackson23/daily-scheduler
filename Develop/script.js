// variables for each time slot
var nine = JSON.parse(localStorage.getItem('nine')) || [];
var ten = JSON.parse(localStorage.getItem('ten')) || [];
var eleven = JSON.parse(localStorage.getItem('eleven')) || [];
var twelve = JSON.parse(localStorage.getItem('twelve')) || [];
var one = JSON.parse(localStorage.getItem('one')) || [];
var two = JSON.parse(localStorage.getItem('two')) || [];
var three = JSON.parse(localStorage.getItem('three')) || [];
var four = JSON.parse(localStorage.getItem('four')) || [];
var five = JSON.parse(localStorage.getItem('five')) || [];

// display current date in header by appending 'p' element
$("#currentDay").prepend(moment().format("dddd MMMM, Do"));

// load time slot items from localStorage
$("#item-nine").append(nine);
$("#item-ten").append(ten);
$("#item-eleven").append(eleven);
$("#item-twelve").append(twelve);
$("#item-one").append(one);
$("#item-two").append(two);
$("#item-three").append(three);
$("#item-four").append(four);
$("#item-five").append(five);

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
    eleven.splice(0);
    eleven.push(item);
    localStorage.setItem("eleven", JSON.stringify(eleven));
});
$("#save-twelve").on("click", function() {
    var item = $("#item-twelve").val().trim();
    twelve.splice(0);
    twelve.push(item);
    localStorage.setItem("twelve", JSON.stringify(twelve));
});
$("#save-one").on("click", function() {
    var item = $("#item-one").val().trim();
    one.splice(0);
    one.push(item);
    localStorage.setItem("one", JSON.stringify(one));
});
$("#save-two").on("click", function() {
    var item = $("#item-two").val().trim();
    two.splice(0);
    two.push(item);
    localStorage.setItem("two", JSON.stringify(two));
});
$("#save-three").on("click", function() {
    var item = $("#item-three").val().trim();
    three.splice(0);
    three.push(item);
    localStorage.setItem("three", JSON.stringify(three));
});
$("#save-four").on("click", function() {
    var item = $("#item-four").val().trim();
    four.splice(0);
    four.push(item);
    localStorage.setItem("four", JSON.stringify(four));
});
$("#save-five").on("click", function() {
    var item = $("#item-five").val().trim();
    five.splice(0);
    five.push(item);
    localStorage.setItem("five", JSON.stringify(five));
});
// add styling to time slot based on current time
function nineStyling() {
    var timeSlot = moment({hour:9});
    var currentTime = moment().hour();
    console.log("currentTime " + currentTime);
    console.log("timeslot " + timeSlot);
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
    if (moment(currentTime).isAfter(timeSlot)) {
        $("#time-eleven").addClass("past");
    } else if (moment(currentTime).isBefore(timeSlot)) {
        $("#time-eleven").addClass("future");
    } else {
        $("#time-eleven").addClass("present");
    }
};
elevenStyling();
function twelveStyling() {
    var timeSlot = moment({hour:12});
    var currentTime = moment().hour();
    console.log("timeslot " + timeSlot);
    if (moment(currentTime).isAfter(timeSlot)) {
        $("#time-twelve").addClass("past");
    } else if (moment(currentTime).isBefore(timeSlot)) {
        $("#time-twelve").addClass("future");
    } else {
        $("#time-twelve").addClass("present");
    }
};
twelveStyling();
function oneStyling() {
    var timeSlot = moment({hour:13});
    var currentTime = moment().hour();
    console.log("timeslot " + timeSlot);
    if (moment(currentTime).isAfter(timeSlot)) {
        $("#time-one").addClass("past");
    } else if (moment(currentTime).isBefore(timeSlot)) {
        $("#time-one").addClass("future");
    } else {
        $("#time-one").addClass("present");
    }
};
oneStyling();
function twoStyling() {
    var timeSlot = moment({hour:14});
    var currentTime = moment().hour();
    console.log("timeslot " + timeSlot);
    if (moment(currentTime).isAfter(timeSlot)) {
        $("#time-two").addClass("past");
    } else if (moment(currentTime).isBefore(timeSlot)) {
        $("#time-two").addClass("future");
    } else {
        $("#time-two").addClass("present");
    }
};
twoStyling();
function threeStyling() {
    var timeSlot = moment({hour:15});
    var currentTime = moment().hour();
    console.log("timeslot " + timeSlot);
    if (moment(currentTime).isAfter(timeSlot)) {
        $("#time-three").addClass("past");
    } else if (moment(currentTime).isBefore(timeSlot)) {
        $("#time-three").addClass("future");
    } else {
        $("#time-three").addClass("present");
    }
};
threeStyling();
function fourStyling() {
    var timeSlot = moment({hour:16});
    var currentTime = moment().hour();
    console.log("timeslot " + timeSlot);
    if (moment(currentTime).isAfter(timeSlot)) {
        $("#time-four").addClass("past");
    } else if (moment(currentTime).isBefore(timeSlot)) {
        $("#time-four").addClass("future");
    } else {
        $("#time-four").addClass("present");
    }
};
fourStyling();
function fiveStyling() {
    var timeSlot = moment({hour:17});
    var currentTime = moment().hour();
    console.log("timeslot " + timeSlot);
    if (moment(currentTime).isAfter(timeSlot)) {
        $("#time-five").addClass("past");
    } else if (moment(currentTime).isBefore(timeSlot)) {
        $("#time-five").addClass("future");
    } else {
        $("#time-five").addClass("present");
    }
};
fiveStyling();