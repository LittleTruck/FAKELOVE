let point = 0;
document.getElementById('point').textContent = point;
let day = 30;
document.getElementById('day').textContent = day;

let wrapper=document.getElementById('wrapper');
let boat;

function preload() {
    boat = createSprite(100, 100);
    boat.addImage('boat', loadImage('images/boat.png'));
    boat.scale=0.2;
}

function setup() {
    createCanvas(wrapper.clientWidth, wrapper.clientHeight);
}

function draw() {
    background(87, 212, 210);
    let sea = new Rectangle();
    sea.x = 0;
    sea.y = 320;
    sea.height=wrapper.clientHeight/1.6;
    sea.width=wrapper.clientWidth*2;
    sea.color = '#21173A';
    sea.show();

    //boat
    if (keyIsDown(LEFT_ARROW)){ // left
        boat.setVelocity(-3, 0);
    } else if (keyIsDown(RIGHT_ARROW)){
        boat.setVelocity(3, 0);
    } else { // no key press ‐> stand still
        boat.setVelocity(0, 0); 
    }
    drawSprites();
}

//彈窗功能
//彈窗功能-彈出與消失
function popupToggle(){
    let popup = document.getElementById('popup-chooseBait');
    popup.classList.toggle('active');
}

function btnClickClose(){
    let btn = document.getElementById('start-fish-button');
    btn.classList.toggle('close');
}

//彈窗功能-紀錄選擇的魚餌類型
let currentBait = "";

function setBaitToLove(){
    currentBait = "love";
}

function setBaitToMoney(){
    currentBait = "money";
}
function setBaitToSex(){
    currentBait = "sex";
}