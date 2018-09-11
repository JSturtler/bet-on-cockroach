var timer;
const R =100;
const X = 150;
const Y = 150;
const X2 = -150;
const Y2 = -150;
const X3 = -150;
const Y3 = 150;
const X4 = 150;
const Y4 = -150;

function circle(X, Y ,R) {
    const n = 36;
    const a = 360 / n;
    const d = 2 * R * Math.sin( degToRad(a/2) );
    penup();
    goto(X, Y);
    left(a/2);
    forward(R);
    right(90 + a/2);
    pendown();
    for(var i = 0; i < n; i++ ){
        forward(d);
        right(a);
    }
    goto(X, Y);
}

function is_finished() {
    // ≈сли рассто€ние от черепахи до центра круга
    //меньше радиуса этого круга
    //( turtle.pos.x, turtle.pos.y )
    var L = Math.sqrt((turtle.pos.x-X)**2+(turtle.pos.y-Y)**2);
    var L2 = Math.sqrt((turtle.pos.x-X2)**2+(turtle.pos.y-Y2)**2);
    var L3 = Math.sqrt((turtle.pos.x-X3)**2+(turtle.pos.y-Y3)**2);
    var L4 = Math.sqrt((turtle.pos.x-X4)**2+(turtle.pos.y-Y4)**2);
    return R > L || R > L2 || R > L3 || R > L4 ;
}

function game(bet) {
    if(timer) {
        alert("Prev game hasn't finished yet!");
        return;
    }
    reset();
    circle(X, Y, R);
    goto(0, 0);
    pendown();
    timer = setInterval(move, 200); 
    //console.log(turtle);
}

function move() {
    if( is_finished() ) {
        clearInterval(timer);
        timer = undefined;
        alert("Finish!");
    }
    a = random(0, 360);
    d = random(1, 30);
    forward(d);
    right(a);
}

$('#One').click(function() {
  game(1);
});

$('#Two').click(function() {
  game(2);
});

$('#Three').click(function() {
  game(3);
});

$('#Four').click(function() {
  game(4);
});

