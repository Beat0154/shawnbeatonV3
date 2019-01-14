window.onload = function() {
    var main = new Raphael(document.getElementById('canvas_container'), 1440, 3800);
    main.setViewBox(0,0,1000,3400,true);
    main.setSize('100%', '100%');
    
    var bg = main.rect(0,0,1440,3400);
    bg.attr({fill: '#EEEEEE'})
    
    var background = main.rect(0,0,1000,800);
    background.attr({fill: "hsla(119,80%,47%,1)"});
    
    var line1 = main.path("M350,200");
    var line2 = main.path("M500,200");
    var line3 = main.path("M650,200");
    var line4 = main.path("M350,400");
    var line5 = main.path("M500,400");
    var line6 = main.path("M650,400");
    var line7 = main.path("M350,200");
    var line8 = main.path("M500,100");
    var line9 = main.path("M350,300");
    var line10 = main.path("M500,300");
    var line11 = main.path("M650,500");
    var line12 = main.path("M500,600");
    var line13 = main.path("M350,400");
    var line14 = main.path("M650,300");
    var text = main.text(500, 0, "Currently in development").attr({'font-size': '50px', opacity: '0'})
    
    line1.attr({stroke: 'gold', 'stroke-width': '3px', 'stroke-linecap': 'round'});
    line2.attr({stroke: 'gold', 'stroke-width': '3px', 'stroke-linecap': 'round'});
    line3.attr({stroke: 'gold', 'stroke-width': '3px', 'stroke-linecap': 'round'});
    line4.attr({stroke: 'gold', 'stroke-width': '3px', 'stroke-linecap': 'round'});
    line5.attr({stroke: 'gold', 'stroke-width': '3px', 'stroke-linecap': 'round'});
    line6.attr({stroke: 'gold', 'stroke-width': '3px', 'stroke-linecap': 'round'});
    line7.attr({stroke: 'gold', 'stroke-width': '3px', 'stroke-linecap': 'round'});
    line8.attr({stroke: 'gold', 'stroke-width': '3px', 'stroke-linecap': 'round'});
    line9.attr({stroke: 'gold', 'stroke-width': '3px', 'stroke-linecap': 'round'});
    line10.attr({stroke: 'gold', 'stroke-width': '3px', 'stroke-linecap': 'round'});
    line11.attr({stroke: 'gold', 'stroke-width': '3px', 'stroke-linecap': 'round'});
    line12.attr({stroke: 'gold', 'stroke-width': '3px', 'stroke-linecap': 'round'});
    line13.attr({stroke: 'gold', 'stroke-width': '3px', 'stroke-linecap': 'round'});
    line14.attr({stroke: 'gold', 'stroke-width': '3px', 'stroke-linecap': 'round'});
    
    var animation1 = Raphael.animation({path: [["M",350,200],["L",350,300]]},1000);
    var animation2 = Raphael.animation({path: [["M",500,200],["L",500,300]]},1000);
    var animation3 = Raphael.animation({path: [["M",650,200],["L",650,300]]},1000);
    var animation4 = Raphael.animation({path: [["M",350,400],["L",350,500]]},1000);
    var animation5 = Raphael.animation({path: [["M",500,400],["L",500,500]]},1000);
    var animation6 = Raphael.animation({path: [["M",650,400],["L",650,500]]},1000);
    var animation7 = Raphael.animation({path: [["M",350,200],["L",500,100]]},1000);
    var animation8 = Raphael.animation({path: [["M",500,100],["L",650,200]]},1000);
    var animation9 = Raphael.animation({path: [["M",350,300],["L",500,400]]},1000);
    var animation10 = Raphael.animation({path: [["M",500,300],["L",650,400]]},1000);
    var animation11 = Raphael.animation({path: [["M",650,500],["L",500,600]]},1000);
    var animation12 = Raphael.animation({path: [["M",500,600],["L",350,500]]},1000);
    var animation13 = Raphael.animation({path: [["M",350,400],["L",410,340]]},1000);
    var animation14 = Raphael.animation({path: [["M",650,300],["L",590,360]]},1000);
    var animation15 = Raphael.animation({opacity: '1',y: 350}, 1000);
    
    line1.animate(animation1);
    line2.animate(animation2);
    line3.animate(animation3);
    line4.animate(animation4);
    line5.animate(animation5);
    line6.animate(animation6);
    line7.animate(animation7.delay(1000));
    line8.animate(animation8.delay(2000));
    line9.animate(animation9.delay(3000));
    line10.animate(animation10.delay(3000));
    line11.animate(animation11.delay(4000));
    line12.animate(animation12.delay(5000));
    line13.animate(animation13.delay(6000));
    line14.animate(animation14.delay(6000));
    text.animate(animation15.delay(6500));
    
    
    
//    
//    var divider = main.path("M0,500C333,575,666,575,1000,500L1000,600L0,600L0,550");
//    divider.attr({fill: "hsla(36,43%,63%,1)", "stroke-width": '5px',stroke: "hsla(40,43%,63%,1)"})
//    
//    
//    
//    
//    var title = main.text(510, 220, "Hi, I'm Shawn");
//    title.attr({'font-size': '30px'});
//    
//    var box = main.rect(100,400,50,50);
//    box.attr({fill: 'brown'})
//    
//    var circle1 = main.circle(140,100,15);
//    circle1.attr({fill: "blue"});
//    
//    var circle2 = main.circle(500,100,15);
//    circle2.attr({fill: "blue"});
//    
//    var rope1 = main.path("M125,400L125,100");
//    
//    var rope2 = main.path("M140,85L500,85");
//    
//    var rope3 = main.path("M515,100L515,200");
//    
//    function pulley() {
//    
//    var animation1 = Raphael.animation({path: [["M",125,200],["L",125,100]]},3000);
//    
//    var animation2 = Raphael.animation({y: "200"},3000);
//    
//    var animation3 = Raphael.animation({y: "420"},3000);
//    
//    var animation4 = Raphael.animation({path: [["M",515,100],["L",515,400]]},3000);
//    
//    rope1.animate(animation1);
//    box.animate(animation2);
//    title.animate(animation3);
//    rope3.animate(animation4);
//}
//
//box.click(pulley);    
//    
    

    
}