$(document ).ready(function(){
    console.log("ready!");

    $( ".button1" ).click(function() {
        console.log("change box1 clicked");
        $(".Box1").addClass("newbox1");
    });
    $( ".button3" ).click(function() {
        console.log("change box2 clicked");
        $(".box2").css({"background":"red","border":"2px solid blue"});
    });

    $( ".button5" ).click(function() {
        console.log("change box3 clicked");
    });

    $( ".button4" ).click(function() {
        console.log("change all btn clicked");
    });

});
