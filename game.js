var timer;
const R =100;
const X1 = 150;
const Y1 = 150;
const X2 = -150;
const Y2 = -150;
const X3 = -150;
const Y3 = 150;
const X4 = 150;
const Y4 = -150;
var bet2;

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
    // меньше радиуса этого круга
    var L1 = Math.sqrt((turtle.pos.x-X1)**2+(turtle.pos.y-Y1)**2);
    var L2 = Math.sqrt((turtle.pos.x-X2)**2+(turtle.pos.y-Y2)**2);
    var L3 = Math.sqrt((turtle.pos.x-X3)**2+(turtle.pos.y-Y3)**2);
    var L4 = Math.sqrt((turtle.pos.x-X4)**2+(turtle.pos.y-Y4)**2);
	
    if (R > L1 ) { return 1; }
    if (R > L2 ) { return 2; }
    if (R > L3 ) { return 3; }
    if (R > L4 ) { return 4; }
    return 0;
}

function game(bet) {
    if(timer) {
        alert("Prev game hasn't finished yet!");
        return;
    }
    reset();
    circle(X1, Y1, R);
    goto(0, 0);
    pendown();
    timer = setInterval(move, 200, bet); 
    //console.log(turtle);
}

function move(bet) {
    var circleN = is_finished();
    if( circleN > 0 ) {
        clearInterval(timer);
        timer = undefined;
	if( circleN == bet ) {
           alert("You win!");
	} else {
           alert("You fault, loser!");
	}
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

