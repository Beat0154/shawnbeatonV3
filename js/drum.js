window.onload = function() {
    var main = new Raphael(document.getElementById('drum'), 1440, 800);
    main.setViewBox(0,0,1000,800,true);
    main.setSize('100%', '100%');
    
   
    var snaretop = main.circle(400,100,50);
    snaretop.attr({fill: 'red'});
    var snaretext = main.text(400,100, "Snare");
        
    var snareAudio = document.getElementById("snare");
    
    var kickdrum = main.circle(500,200,75);
    kickdrum.attr({fill: 'lightgrey'});    
    var kickdrumtext = main.text(500,200, "Kick drum");
    
    var kickdrumAudio = document.getElementById("kickdrum");
    
    var hihatcymbal = main.circle(600,100,50);
    hihatcymbal.attr({fill: 'gold'}); 
    var hihattext = main.text(600,100, "Hi-hat")
    
    var hihatAudio = document.getElementById("hihat")
    
    function snare(){
        snaretop.scale(1.2,1.2,400,100);
        snaretext.scale(1.2,1.2,400,100);
        snareAudio.play();
    }
    function snarehide(){
        snaretop.scale(1/1.2,1/1.2,400,100);
        snaretext.scale(1/1.2,1/1.2,400,100);
        
    }
    function kick(){
        kickdrumAudio.play();
        kickdrum.scale(1.2,1.2,500,200);
        kickdrumtext.scale(1.2,1.2,500,200);
    }
    function kickhide(){
        kickdrum.scale(1/1.2,1/1.2,500,200);
        kickdrumtext.scale(1/1.2,1/1.2,500,200);
    }
    function hihat(){
        hihatAudio.play();
        hihatcymbal.scale(1.2,1.2,600,100);
        hihattext.scale(1.2,1.2,600,100);
    }
    function hihathide(){
        hihatcymbal.scale(1/1.2,1/1.2,600,100);
        hihattext.scale(1/1.2,1/1.2,600,100);
    }
    
    
    snaretop.mousedown(snare);
    snaretop.mouseup(snarehide);
//    snaretop.mouseout(snarehide);
    kickdrum.mousedown(kick);
    kickdrum.mouseup(kickhide);
//    kickdrum.mouseout(kickhide);
    hihatcymbal.mousedown(hihat);
    hihatcymbal.mouseup(hihathide);
//    hihatcymbal.mouseout(hihathide);
    
    
    
    
    var hidden = main.text(500,750, "To properly use the drumset, only click shortly ontop of each circle and do not drag your mouse. \nIf you click a drum and drag your mouse the size of the drum will remain scaled up.\n To fix this, click outside of the drum then let go of the mouse ontop of the circle and it will scale back down. \n(currently working on a fix)");
}