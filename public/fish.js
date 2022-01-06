let point = 0;
document.getElementById('point').textContent = point;
let day = 30;
document.getElementById('day').textContent = day;

let wrapper = document.getElementById('wrapper');
let boat;
let love;
let money;
let sex;
let Bait;
let animat;

function preload() {
    boat = createSprite(100, 120);
    boat.addImage('boat', loadImage('images/boat.png'));
    boat.scale = 0.2;
    Bait = createSprite(230, 160);
    Bait.shapeColor= '#ffffff00';

    love = loadImage('images/chooseBait/love.png');
    money = loadImage('images/chooseBait/money.png');
    sex = loadImage('images/chooseBait/sex.png');
    animat = loadAnimation(love);
}

function setup() {
    createCanvas(wrapper.clientWidth, wrapper.clientHeight);
}

function draw() {
    background(255, 85, 177);

    //sea
    let sea = new Rectangle();
    sea.x = 0;
    sea.y = 380;
    sea.height = wrapper.clientHeight / 1.4;
    sea.width = wrapper.clientWidth * 2;
    sea.color = '#21173A';
    sea.show();

    //boat
    if (keyIsDown(LEFT_ARROW)) { // left
        boat.setVelocity(-3, 0);
    } else if (keyIsDown(RIGHT_ARROW)) {
        boat.setVelocity(3, 0);
    } else { // no key press ‐> stand still
        boat.setVelocity(0, 0);
    }

    //line
    stroke(255);
    strokeWeight(3);
    line(Bait.position.x - 18, boat.position.y - 80, Bait.position.x, Bait.position.y);

    //belt
    if (currentBait == "love") {
        Bait.addImage(love);
        Bait.scale = 0.08;
        bait_move(love);
    }

    drawSprites();
}

//bait_move
function bait_move() {
    if (keyIsDown(LEFT_ARROW)) { // left
        //Bait.setVelocity(-3, 0);
        Bait.position.x=boat.position.x+130;
        Bait.position.y=boat.position.y+40;

    } else if (keyIsDown(RIGHT_ARROW)) {
        //Bait.setVelocity(3, 0);
        Bait.position.x=boat.position.x+130;
        Bait.position.y=boat.position.y+40;
        
    } else if (keyIsDown(DOWN_ARROW)) {
        Bait.position.y=Bait.position.y+20;
        stroke(255);
        strokeWeight(3);
        line(Bait.position.x - 20, boat.position.y - 80, Bait.position.x, Bait.position.y);
    } else if (keyIsDown(UP_ARROW)) {
        Bait.position.y=Bait.position.y-20;
        stroke(255);
        strokeWeight(3);
        line(Bait.position.x - 20, boat.position.y - 80, Bait.position.x, Bait.position.y);
    }else { // no key press ‐> stand still
        Bait.setVelocity(0, 0);
    }
}

//彈窗功能
//彈窗功能-彈出與消失
function popupToggle() {
    let popup = document.getElementById('popup-chooseBait');
    popup.classList.toggle('active');
}

function btnClickClose() {
    let btn = document.getElementById('start-fish-button');
    btn.classList.toggle('close');
}

//彈窗功能-紀錄選擇的魚餌類型
let currentBait = "";

function setBaitToLove() {
    currentBait = "love";
}

function setBaitToMoney() {
    currentBait = "money";
}
function setBaitToSex() {
    currentBait = "sex";
}

//讓hidden的魚圖片透過點擊顯示
function showFish() {
    let fish = document.getElementById('fish');
    fish.classList.toggle('active');
}

//點擊魚圖片顯示資訊
function showFishInfo() {
    let fishInfo = document.getElementById('popup-fishInfo');
    fishInfo.classList.toggle('active');
}