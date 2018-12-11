window.onload = function() {
    var main = new Raphael(document.getElementById('canvas_container'), 1440, 3800);
    main.setViewBox(0,0,1440,3400,true);
    main.setSize('100%', '100%');
    
    
    var rectangle1 = main.rect(-60, -150, 1800, 1100);
    rectangle1.attr({fill: '#FFD967', 'stroke-width': 0});
    rectangle1.rotate(7);
    
    var circle1 = main.circle(200,1000,500).attr({fill: '#C99700', 'stroke-width': 0});
    
    var circle2 = main.circle(1400,-100,500).attr({fill: '#FFCE3D', 'stroke-width': 0});
    
    var rectangle2 = main.rect(-60, 850, 1600, 800);
    rectangle2.attr({fill: '#FFCE3D', 'stroke-width': 0});
    rectangle2.rotate(7);
    
    var rectangle3 = main.rect(-100, 1550, 1600, 1000);
    rectangle3.attr({fill: '#C99700', 'stroke-width': 0});
    rectangle3.rotate(7);
    
    var rectangle4 = main.rect(-60, 2200, 1600, 1100);
    rectangle4.attr({fill: '#9E7700', 'stroke-width': 0});
    rectangle4.rotate(-7);
    
    var rectangle5 = main.rect(-80, 2950, 1600, 1100);
    rectangle5.attr({fill: '#775a00', 'stroke-width': 0});
    rectangle5.rotate(7);
    
    var circle3 = main.circle(700,6300,3000).attr({fill: '#ffc107', 'stroke-width': 0});
    
    var text = main.text(720,320, "Hi, I'm Shawn").attr({'font-size': 50});
    var text2 = main.text(720,370, "A first year college student (hover me)").attr({'font-size': 18});

    var path1 = main.path("M750,500L1000,500L1000,300").attr({stroke: '#C99700', 'stroke-width': 10,opacity: 0});
    
    var path2 = main.path("M450,375L450,175L700,175").attr({stroke: '#C99700', 'stroke-width': 10,opacity: 0});
    
    hoverfunc = function() {
    
    path1.animate({path:[["M",750,400],["L",900,400],["L",900,300]],opacity: 1}, 1000,"bounce");
    
    path2.animate({path:[["M",550,375],["L",550,275],["L",700,275]],opacity: 1},1000,"bounce");
    }
    
    hidefunc = function(){
     
    path1.animate({path:[["M",750,500],["L",1000,500],["L",1000,300]],opacity: -0.5}, 1000,"<");
    
    path2.animate({path:[["M",450,375],["L",450,175],["L",700,175]],opacity: -0.5},1000,"<");
         
    }
    text.hover(hoverfunc,hidefunc)
    text2.hover(hoverfunc,hidefunc)
    
    var text3 = main.text(720,1150, "What can I do?")
    .attr({'font-size': 40});
    var text4 = main.text(720,1220, "From my first semester at college I have learned HTML, CSS, Javascript, \n Bootstrap, Python, Database and can use Github and Slack. Please visit \n the skills page for more details and visit the portfolio page for an example of my work.")
    .attr({'font-size': 20});
    
    
    
    
    var path3 = main.path("M750,900L780,925L1300,1300").attr({stroke: '#C99700', 'stroke-width': 10,opacity: 0});
    
    var path4 = main.path("M150,1100L500,1500").attr({stroke: '#C99700', 'stroke-width': 10,opacity: 0});
    
    hoverfunc = function() {
    
    path3.animate({path:[["M",750,1100],["L",1100,1100],["L",1100,1175]],opacity: 1}, 1000,"bounce");
    
    path4.animate({path:[["M",300,1200],["L",300,1275],["L",700,1275]],opacity: 1},1000,"bounce");
    }
    
    hidefunc = function(){
     
    path3.animate({path:[["M",750,900],["L",780,925],["L",1300,1300]],opacity: -0.5}, 1000,"<");
    
    path4.animate({path:[["M",150,1100],["L",500,1500]],opacity: -0.5},1000,"<");
         
    }
    text3.hover(hoverfunc,hidefunc)
    text4.hover(hoverfunc,hidefunc)
    
    
    
    
    
    var text5 = main.text(720,1840, "About Myself")
    .attr({'font-size': 40});
    var text6 = main.text(720,1910, "I'm located in Ottawa, Canada. I have a passion for web development and design. \n Please visit the about page for more information!")
    .attr({'font-size': 20});
    
    
    
    var path5 = main.path("M1250,1600L1250,1800L1250,1975L1250,2175").attr({stroke: '#FFCE3D', 'stroke-width': 10,opacity: 0});
    
    var path6 = main.path("M200,2175L200,1975L200,1800L200,1600").attr({stroke: '#FFCE3D', 'stroke-width': 10,opacity: 0});
    
    hoverfunc = function() {
    
    path5.animate({path:[["M",900,1800],["L",1150,1800],["L",1150,1975],["L",900,1975]],opacity: 1}, 1000,"bounce");
    
    path6.animate({path:[["M",550,1975],["L",300,1975],["L",300,1800],["L",550,1800]],opacity: 1},1000,"bounce");
    }
    
    hidefunc = function(){
     
    path5.animate({path:[["M",1250,1600],["L",1250,1800],["L",1250,1975],["L",1250,2175]],opacity: -0.5}, 1000,"<");
    
    path6.animate({path:[["M",200,2175],["L",200,1975],["L",200,1800],["L",200,1600]],opacity: -0.5},1000,"<");
         
    }
    text5.hover(hoverfunc,hidefunc)
    text6.hover(hoverfunc,hidefunc)
    
    
    
    
    var text7 = main.text(720,2540, "Contact Me")
    .attr({'font-size': 40});
    var text8 = main.text(720,2610, "I'm available for hire, full time or co-op starting April 2019. \n Please visit the contact page to message me about possible employment.")
    .attr({'font-size': 20});
    
    
    var path7 = main.path("M1300,2400V2800").attr({stroke: '#FFCE3D', 'stroke-width': 10,opacity: 0});
    
    var path8 = main.path("M200,2400V2800").attr({stroke: '#FFCE3D', 'stroke-width': 10,opacity: 0});
    
    hoverfunc = function() {
    
    path7.animate({path:[["M",950,2675],["C",1150,2675,1150,2550,950,2550]],opacity: 1}, 1000,"bounce");
    
    path8.animate({path:[["M",500,2675],["C",300,2675,300,2550,500,2550]],opacity: 1},1000,"bounce");
    }
    
    hidefunc = function(){
     
    path7.animate({path:[["M",1300,2400],["V",2800]],opacity: 0}, 1000,"<");
    
    path8.animate({path:[["M",200,2400],["V",2800]],opacity: 0},1000,"<");
         
    }
    text7.hover(hoverfunc,hidefunc)
    text8.hover(hoverfunc,hidefunc)
    
    
    
    var text9 = main.text(720,3140, "Freelance Work")
    .attr({'font-size': 40});
    var text10 = main.text(720,3210, "I'm currently looking for a full-time summer job, but if you are \n looking for a website, I'd love to help out so I can get some expirience.")
    .attr({'font-size': 20});
    
    
    var path9 = main.path("M200,3000V3400").attr({stroke: '#FFCE3D', 'stroke-width': 10,opacity: 0});
    
    var path10 = main.path("M1200,3000V3400").attr({stroke: '#FFCE3D', 'stroke-width': 10,opacity: 0});
    
    hoverfunc = function() {
    
    path9.animate({path:[["M",400,3100],["H",1040]],opacity: 1}, 1000,"bounce");
    
    path10.animate({path:[["M",400,3250],["H",1040]],opacity: 1},1000,"bounce");
    }
    
    hidefunc = function(){
     
    path9.animate({path:[["M",200,3000],["V",3400]],opacity: -0.5}, 1000,"<");
    
    path10.animate({path:[["M",1200,3000],["V",3400]],opacity: -0.5},1000,"<");
         
    }
    text9.hover(hoverfunc,hidefunc)
    text10.hover(hoverfunc,hidefunc)
    
    
}