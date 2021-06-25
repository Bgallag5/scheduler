//open app and the current day is displayed at the top of the calendar
var dateEl = document.querySelector("#currentDay");
var currentDate = moment().format("dddd, MMMM Do, YYYY");
$("dateEl").html(currentDate);



// $(document).ready(function (){
//     //save button on click
//     $(".saveBtn").on("click", function() {
//         //get values of the description
//         var text = $(this)
//         var time = $(this)

//         //text is saved in local storage
//         localStorage.setItem(time, text);
//     })

    // function trackTime() {
    //     //get current time
    //     var timeNow = moment().hour()



    //     //timeblock is coded for past, present. future
    //     if(time < timeNOw){
    //         $(this).removeClass("future");
    //         $(this).removeClass("present");
    //         $(this).addClass("past");
    //     }
    //     else if (XXX === timeNow){
    //         $(this).removeClass("future");
    //         $(this).removeClass("past");
    //         $(this).addClass("present");
    //     }
    //     else if (XXX > timeNow){
    //         $(this).removeClass("past");
    //         $(this).removeClass("present");
    //         $(this).addClass("future");
    //     }
    // }
   
    // //get item in the localStorage
    // localStorage.getItem(hour)

});

    

