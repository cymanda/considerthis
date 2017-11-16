var counting = false;
var firstStart = true;
var item1Unlock = false;
var item2Unlock = false;
var item3Unlock = false;

var topic="";

var myInt;


// base == Thoughts
var baseTotal = 0; var base = 0;
var from1=0;
var from2=0;

//item1 == Ideas
var item1Cost = 10; var item1Total = 0; var item1 = 0; 

//item2 == Concepts
var item2Cost = 20; var item2Total = 0; var item2 = 0; 

//item3 == Truths / Ideals
var item3Name = "???"
var item3Cost = 50; var item3Total = 0; var item3 = 0; 



function startTimer(){ 
    if(!counting){
        counting = true;
        $("#startstop").prop('value', 'Stop');
        $("#startstop").attr('onclick', 'stopTimer()');
        
        if(firstStart){
            $("#narration").prepend("<p>It all began with a single thought.</p>");   
            
            firstStart=false;
        }
        
        myInt = setInterval(
        function timerHelper() {
            baseTotal = base + 1;
            base++;
            
            from1 += item1;
            from2 += item2;
            //console.log(from1);
            //console.log(from2);
            
            if(from1 >= 10){
                var tens = Math.floor(from1/10);
                base += tens;
                from1 = from1 - tens*10; 
                
            }
            
            // bug in here
            if(from2 >= 7){
                var sevens = Math.floor(from2/7);
                base += sevens;
                from2 += from2 - sevens*7;
            }
            
            if(!item1Unlock && baseTotal >= 10){                
                document.getElementById("item1button").innerHTML = '<input type="button" value="Consider idea" onclick="item1Buy()">';
                $("#narration").prepend("<p>...no. I've lied to you. An idea...it began with an idea.</p>");
                $("html").css("background-image", "url(images/logography-01.png)");
                item1Unlock=true;
            }
            
            if(!item2Unlock && item1Total >= 20){
                document.getElementById("item2button").innerHTML = `<input type="button" value="Consider concept" onclick="item2Buy()">`;
                $("#narration").prepend("<p>Slowly, those ideas formed something more, something ... unique. original. Something new.</p>");
                $("#narration").prepend("<p>A concept. And, well, it was ... a concept about ...</p>");
                
                eventStart("decide");
                
                item2Unlock=true;
            }

            $("#stats").html("Thoughts: " + base);
            if(item1Unlock){ $("#stats").append("<br>Ideas: " + item1); }
            if(item2Unlock){ $("#stats").append("<br>Concepts: " + item2); }
            if(item2Unlock){ $("#stats").append("<br>" + item3Name + ": " + item3); }
            //more items here ...
            
            
        }, 1000);
        
    }
}

function stopTimer(){
    counting = false;
    clearInterval(myInt);
    $("#startstop").prop('value', 'Start');
    $("#startstop").attr('onclick', 'startTimer()');
}

function item1Buy(){
    if( base >= item1Cost){
        base-=item1Cost;
        item1++;
        item1Total++;
    }
    else {
        $("#narration").prepend("<p><i>You need ten thoughts to generate an idea.</i></p>");
    }
    
    if(item1 == 69){
        $("#narration").prepend("<p><b>Nice.<b><p>");
    }
}

function item2Buy(){
    if( item1 >= item2Cost){
        item1-=item2Cost;
        item2++;
        item2Total++;
    }
    else {
        $("#narration").prepend("<p><i>You need twenty thoughts to generate an concept.</i></p>");
    }
    
    if(item2 == 420){
        $("#narration").prepend("<p><b>Nice.<b><p>");
    }
}