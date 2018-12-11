window.onload = function() {
    var paper = new Raphael(document.getElementById('canvas_container'), 1440, 2400);
    var rectangle1 = paper.rect(-30, -150, 1700, 800);
    rectangle1.attr({fill: '#FFD967', 'stroke-width': 0});
    rectangle1.rotate(7);
    
    var rectangle2 = paper.rect(-60, 550, 1600, 800);
    rectangle2.attr({fill: '#FFCE3D', 'stroke-width': 0});
    rectangle2.rotate(7);
    
    var rectangle3 = paper.rect(-60, 1050, 1600, 800);
    rectangle3.attr({fill: '#C99700', 'stroke-width': 0});
    rectangle3.rotate(7);
    
    var rectangle4 = paper.rect(-60, 1450, 1600, 800);
    rectangle4.attr({fill: '#9E7700', 'stroke-width': 0});
    rectangle4.rotate(-7);
    
    var rectangle5 = paper.rect(-60, 1950, 1600, 800);
    rectangle5.attr({fill: '#775a00', 'stroke-width': 0});
    rectangle5.rotate(7);
}