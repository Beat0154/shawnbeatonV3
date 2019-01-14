window.onload = function() {
    var main = new Raphael(document.getElementById('clock'), 1440, 800);
    main.setViewBox(0,0,1000,800,true);
    main.setSize('100%', '100%');
    
    var clockbg = main.circle(500,400,350);
    clockbg.attr({'stroke-width': '10px', fill: 'orange'});
    
    var clockface = main.circle(500,400,300);
    clockface.attr({'stroke-width': '5px', fill: 'lightblue'});
    
    var clockcenter = main.circle(500,400,5);
    
    var hours1 = main.path("M300,200L325,225M300,600L325,575M700,200L675,225M700,600L675,575");
    hours1.rotate(15,500,400);
    var hours2 = main.path("M300,200L325,225M300,600L325,575M700,200L675,225M700,600L675,575");
    hours2.rotate(-15,500,400);
    
    var minutes = main.path("M300,200L310,210M300,600L310,590M700,200L690,210M700,600L690,590"); 
    minutes.rotate(-3,500,400);
    var minutes1 = main.path("M300,200L310,210M300,600L310,590M700,200L690,210M700,600L690,590");
    minutes1.rotate(3,500,400);
    var minutes2 = main.path("M300,200L310,210M300,600L310,590M700,200L690,210M700,600L690,590");
    minutes2.rotate(9,500,400)
    var minutes4 = main.path("M300,200L310,210M300,600L310,590M700,200L690,210M700,600L690,590");
    minutes4.rotate(21,500,400);
    var minutes5 = main.path("M300,200L310,210M300,600L310,590M700,200L690,210M700,600L690,590");
    minutes5.rotate(27,500,400);
    var minutes6 = main.path("M300,200L310,210M300,600L310,590M700,200L690,210M700,600L690,590");
    minutes6.rotate(33,500,400);
    var minutes7 = main.path("M300,200L310,210M300,600L310,590M700,200L690,210M700,600L690,590");
    minutes7.rotate(39,500,400);
    var minutes9 = main.path("M300,200L310,210M300,600L310,590M700,200L690,210M700,600L690,590");
    minutes9.rotate(51,500,400);
    var minutes10 = main.path("M300,200L310,210M300,600L310,590M700,200L690,210M700,600L690,590");
    minutes10.rotate(57,500,400);
    var minutes11 = main.path("M300,200L310,210M300,600L310,590M700,200L690,210M700,600L690,590");
    minutes11.rotate(63,500,400);
    var minutes12 = main.path("M300,200L310,210M300,600L310,590M700,200L690,210M700,600L690,590");
    minutes12.rotate(69,500,400);
    var minutes14 = main.path("M300,200L310,210M300,600L310,590M700,200L690,210M700,600L690,590");
    minutes14.rotate(81,500,400);
    
    
    
    var three = main.text(775, 400, "3");
    three.attr({'font-size': '25px'});
    
    var six = main.text(500, 675, "6");
    six.attr({'font-size': '25px'});
    
    var nine = main.text(225, 400, "9");
    nine.attr({'font-size': '25px'});
    
    var twelve = main.text(500, 125, "12");
    twelve.attr({'font-size': '25px'});
    
    var date = new Date();
    
    var secondhand = main.path("M500,400L500,125");
    secondhand.attr({transform: `r${(date.getSeconds()+date.getMilliseconds()/1000)*6},500,400`,stroke: 'red','stroke-width': '3px','stroke-linecap': 'round'});
    var animation = Raphael.animation({transform: "r360,500,400"},60000, "none");
    secondhand.animate(animation.repeat(Infinity));
    
    var minutehand = main.path("M500,400L500,150");
    minutehand.attr({transform: `r${(date.getMinutes()+date.getSeconds()/60)*6},500,400`,stroke: 'blue','stroke-width': '5px','stroke-linecap': 'round'});
    var animation = Raphael.animation({transform: "r360,500,400"},3600000, "none");
    minutehand.animate(animation.repeat(Infinity));
    
    var hourhand = main.path("M500,400L500,200");
    hourhand.attr({transform: `r${(date.getHours()+date.getMinutes()/60)*30},500,400`,stroke: 'green','stroke-width': '7px','stroke-linecap': 'round'});
    var animation = Raphael.animation({transform: "r360,500,400"},43200000, "none");
    hourhand.animate(animation.repeat(Infinity));
    
    
    
}