var timeArray = {};
var timeBlockArray = {};
var list = [];

// display current date in header by appending 'p' element
$("#currentDay").prepend(moment().format("dddd MMMM, Do"));


var timeColor = function() {
    var timeArray = $(".text-col");

    $.each(timeArray, function (i, timeEl) {
        var hourCheck = $(timeEl).data("hour");
        var currentHour = moment().hour();
        console.log(currentHour);
        $(timeEl).removeClass("past present future")

        if (moment(currentHour).isAfter(hourCheck)) {
            $(timeEl).addClass("past");
        } else if (moment(currentHour).isBefore(hourCheck)) {
            $(timeEl).addClass("future");
        } else {
            $(timeEl).addClass("present");
        }
    })
};

timeColor();

setInterval(function() {
    $(".text-col").each(function(tc) {
        timeColor(tc);
    });
}, 3000);

$('#item-nine-am').on('blur', function() {
    var item = $('#item-nine-am').val().trim();
    list.push(item);
    console.log(list);
    localStorage.setItem('nine-am', JSON.stringify(list));
})