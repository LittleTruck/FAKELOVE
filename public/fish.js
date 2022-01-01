let point = 0;
document.getElementById('point').textContent = point;
let day = 30;
document.getElementById('day').textContent = day;

let wrapper=document.getElementById('wrapper');
let boat;

function preload() {
    boat = createSprite(100, 200);
    boat.addImage('boat', loadImage('images/plane.jpg'));

}

function setup() {
    
    createCanvas(wrapper.clientWidth, 600);
}

function draw() {
    
    if (keyIsDown(LEFT_ARROW)){ // left
        boat.setVelocity(-3, 0);
    } else if (keyIsDown(RIGHT_ARROW)){
        boat.setVelocity(3, 0);
    } else { // no key press ‐> stand still
        boat.setVelocity(0, 0); 
    }
    drawSprites();
}