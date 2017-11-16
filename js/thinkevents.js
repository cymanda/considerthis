decideFlag = false;

function eventStart(key) {
    if(key=="decide"){
        decideEvent();
    }
}

function option1() {
    if(decideFlag){
        item3Name="Truths";
        $("#narration").prepend("<p>Truths ... ? A bit on the logical side, then, are we ... ?</p>");
        closeEvent();
    }
    
}

function option2 () {
    if(decideFlag){
        item3Name="Ideals";
        $("#narration").prepend("<p>Ideals ... ? A hopeful one you are, then. I see, I see ...</p>");
        closeEvent();
    }
    
}

function decideEvent(){
    makeEvent("Slowly, those ideas formed something more, something ... unique. original. <br> <br>"
              + "Something new. <br> <br>"
              + "A concept. And, well, it was ... a concept about ...",
              "truths", "ideals");
    decideFlag = true;
}

function makeEvent(desc, option1, option2){
    $("#eventdesc").html(desc);
    $("#option1").prop('value', option1);
    $("#option2").prop('value', option2);
    $("#event").fadeIn(500);
}

function closeEvent(){
    $("#event").fadeOut(500);
}