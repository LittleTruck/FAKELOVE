let point = 0;
document.getElementById('point').textContent = point;
let day = 30;
document.getElementById('day').textContent = day;

let wrapper = document.getElementById('wrapper');
let boat;
let fishes = [];

function preload() {
    boat = createSprite(100, 100);
    boat.addImage('boat', loadImage('images/boat.png'));
    boat.scale = 0.2;

    for (var i = 1; i < 39; i++) {
        // x: 100~2800, y: 250~1200
        fishes[i] = createSprite(getRandom(100, 2800), getRandom(250, 1200));
        console.log(Math.random() >= 0.5 ? 1 : -1);
        const dir = Math.random() >= 0.5 ? 1 : -1;
        fishes[i].mirrorX(dir);

        var velocity = dir == 1 ? getRandom(-1, -3) : getRandom(1, 3);
        fishes[i].setVelocity(velocity, 0);

        fishes[i].scale = 0.2;
        fishes[i].addImage(loadImage('images/fish/' + i + '.png'));
    }
}

function setup() {
    createCanvas(wrapper.clientWidth, wrapper.clientHeight);
}

function draw() {
    background(87, 212, 210);
    let sea = new Rectangle();
    sea.x = 0;
    sea.y = 320;
    sea.height = wrapper.clientHeight / 1.6;
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
    drawSprites();
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
function showFishInfo(show) {
    let fishInfo = document.getElementById('popup-fishInfo');
    show ? fishInfo.classList.toggle('active') : fishInfo.classList.remove('active');
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}