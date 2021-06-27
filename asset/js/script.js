//open app and the current day is displayed at the top of the calendar
var dateElement = document.getElementById("currentDay");
var currentDate = moment().format("dddd, MMMM Do, YYYY");  
dateElement.innerHTML = currentDate

console.log(currentDate);


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
        var timeBlock = $("#13").val(13);
        var realTime = parseInt(timeBlock.val());
        // $('.time-block').each(function () {
        //     var timeSection = parseInt($(this).attr("id").split("hour")[1]);
        

        //timeblock is coded for past, present. future
        if(realTime < timeNow){
            $("#9").addClass("past");
        }
        else if (realTime === timeNow){
            $("#9").addClass("present");
        }
        else if (realTime > timeNow){
            $("#9").addClass("future");
        };

        if(realTime < timeNow){
            $("#10").addClass("past");
        }
        else if (realTime === timeNow){
            $("#10").addClass("present");
        }
        else if (realTime > timeNow){
            $("#10").addClass("future");
        };

        if(realTime < timeNow){
            $("#11").addClass("past");
        }
        else if (realTime === timeNow){
            $("#11").addClass("present");
        }
        else if (realTime > timeNow){
            $("#11").addClass("future");
        };

        if(realTime < timeNow){
            $("#12").addClass("past");
        }
        else if (realTime === timeNow){
            $("#12").addClass("present");
        }
        else if (realTime > timeNow){
            $("#12").addClass("future");
        };

        if(realTime < timeNow){
            $("#13").addClass("past");
        }
        else if (realTime === timeNow){
            $("#13").addClass("present");
        }
        else if (realTime > timeNow){
            $("#13").addClass("future");
        }

        if(realTime < timeNow){
            $("#14").addClass("past");
        }
        else if (realTime === timeNow){
            $("#14").addClass("present");
        }
        else if (realTime > timeNow){
            $("#14").addClass("future");
        };

        if(realTime < timeNow){
            $("#15").addClass("past");
        }
        else if (realTime === timeNow){
            $("#15").addClass("present");
        }
        else if (realTime > timeNow){
            $("#15").addClass("future");
        };

        if(realTime < timeNow){
            $("#16").addClass("past");
        }
        else if (realTime === timeNow){
            $("#16").addClass("present");
        }
        else if (realTime > timeNow){
            $("#16").addClass("future");
        };

        if(realTime < timeNow){
            $("#17").addClass("past");
        }
        else if (realTime === timeNow){
            $("#17").addClass("present");
        }
        else if (realTime > timeNow){
            $("#17").addClass("future");
        };

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

    

