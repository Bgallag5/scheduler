//open app and the current day is displayed at the top of the calendar
var dateElement = $("#currentDay");
var currentDate = moment().format("dddd, MMMM Do, YYYY");  
dateElement.display = currentDate

$(document).ready(function (){
    //save button on click
    $(".saveBtn").on("click", function() {
        //get values of the description
       
        var text = $(this).prev().val();
        var time = $(this).parent()[0].id;
        

        //text is saved in local storage
        localStorage.setItem(time, text);
    })

    function trackTime() {
        //get current time
        var timeNow = moment().hour();
        var timeBlock = $("#9");
        console.log(timeBlock);

        //timeblock is coded for past, present. future
        if(timeBlock < timeNow){
            $("#9").removeClass("future");
            $("#9").removeClass("present");
            $("#9").addClass("past");
        }
        else if (timeBlock === timeNow){
            $("#9").removeClass("future");
            $("#9").removeClass("past");
            $("#9").addClass("present");
        }
        else if (timeBlock > timeNow){
            $("#9").removeClass("past");
            $("#9").removeClass("present");
            $("#9").addClass("future");
        }
    }
    trackTime();
   
    //get item in the localStorage
    $("#hour-9").val(localStorage.getItem("9"));
    $("#hour-10").val(localStorage.getItem("10"));
    $("#hour-11").val(localStorage.getItem("11"));
    $("#hour-12").val(localStorage.getItem("12"));
    $("#hour-13").val(localStorage.getItem("13"));
    $("#hour-14").val(localStorage.getItem("14"));
    $("#hour-15").val(localStorage.getItem("15"));
    $("#hour-16").val(localStorage.getItem("16"));
    $("#hour-17").val(localStorage.getItem("17"));

});

    

