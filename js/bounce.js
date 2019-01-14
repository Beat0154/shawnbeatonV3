window.onload = function() {
    var main = new Raphael(document.getElementById('bounce'), 1440, 800);
    main.setViewBox(0,0,1000,800,true);
    main.setSize('100%', '100%');
    
    var box = main.rect(100,100,420,300);
    box.attr({fill: 'lightgreen'});
    
    var ball = main.rect(100,100,20,20);
    ball.attr({fill: 'red'});
    
    function bounce(){
    
    square.scale(0.8,0.8,650,125);
    square2.scale(1/0.8,1/0.8,650,225);
        
    var animation = Raphael.animation({y: "380"},2000,"bounce");
    ball.animate(animation);
    
    var animation2 = Raphael.animation({x: "500"},2000,">");
    ball.animate(animation2);
     
    var animation3 = Raphael.animation({transform:"r90"},1500);
    ball.animate(animation3.delay(550));
    
    
    
    }
    
    function unbounce(){
        
    var animation4 = Raphael.animation({x: "-420",y: "-300"},300); 
    ball.animate(animation4);
    
    square.scale(1/0.8,1/0.8,650,125);
    square2.scale(0.8,0.8,650,225);
    
    }
    var square = main.rect(600,100,100,50);
    var squaretext = main.text(650,125, "Bounce");
    square.attr({fill: "gold"});
    square.click(bounce);
    
    var square2 = main.rect(600,200,100,50);
    var square2text = main.text(650,225, "Fuck off");
    square2.attr({fill: "red"});
    square2.click(unbounce);
    
    
}