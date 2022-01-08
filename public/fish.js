let point = 0;
let day = 15;

let wrapper;
let boat;
let love;
let money;
let sex;
let Bait;
let fishes = [];
var mouseClickX, mouseClickY;
let i = -1;
let chat;
let count = 0;
let lastchat;
let currentBait = "";

const objstudent = JSON.parse('[{"name":"張夢琦","gender":"女","age":"19y","job":"大一","status":"單身，有部分存款"},{"name":"林如萱","gender":"女","age":"19y","job":"大三","status":"單身，在還學貸"},{"name":"陳曼靜","gender":"女","age":"19y","job":"大三","status":"剛分手"},{"name":"張紫山","gender":"女","age":"20y","job":"大二","status":"在與喜歡的男生曖昧中"},{"name":"陳昊軒","gender":"男","age":"20y","job":"大二","status":"剛分手，一週有5天時間在兼職"},{"name":"林雲凱","gender":"男","age":"21y","job":"大三","status":"單身，有部分存款"},{"name":"張豪哲","gender":"男","age":"22y","job":"大四","status":"因為忙畢業論文而與女友分手"}]');
const objlove = JSON.parse('[{"name":"蘇晴","gender":"女","age":"40y","job":"護理師","status":"離婚，有一個4歲的兒子"},{"name":"張家榮","gender":"男","age":"45y","job":"傳統罐頭加工廠老闆","status":"喪偶，有兩個分別為12、9歲的女兒"},{"name":"陳欣萍","gender":"女","age":"37y","job":"外商公司主管","status":"丈夫劈腿，打離婚官司中"}]');
const objsex = JSON.parse('[{"name":"林宇彤","gender":"女","age":"25y","job":"小學老師","status":"與交往3年的男友遠距離"},{"name":"王家樂","gender":"男","age":"20y","job":"學生","status":"與高中交往5年的女友遠距離"},{"name":"曾禹妮","gender":"女","age":"28y","job":"小公司的行政助理","status":"新婚，但丈夫在國外工作"},{"name":"魏俊豪","gender":"男","age":"30y","job":"醫生","status":"已婚5年，這2年獨自一人在美國進修，妻小都在台灣"},{"name":"徐芷","gender":"=女","age":"33y","job":"廚師","status":"與交往7年的男友因為遠距離遲遲無法結婚"}]');

const chatStudent = JSON.parse('[{"question":"我好想投資啊，但是卻無從下手","reply1":"投資就那你跟著我好了","reply2":"我也不知道怎麼投，好苦惱","reply3":"我從小就在國外讀書，讀的是經濟學，如果你有什麼理財或者投資的問題都可以來問我。"},{"question":"我最近在打工，特別忙，還是要還學貸。","reply1":"我也是，快累死了","reply2":"你要不要和我一起投資，可以掙錢","reply3":"我也是，不僅要讀書還要打工，特別累。但是我看我朋友最近在投資，感覺掙很多"},{"question":"我的生活費真的好少，都不能買自己想要的東西。","reply1":"努力打工吧，實現財務自由","reply2":"你要不要試試看投資，聽說可以掙錢","reply3":"我也是，我真的好羨慕我在做投資的同學啊，看他們天天吃香喝辣，好像有畫不完的錢"}]');
const chatLove = JSON.parse('');
const chatSex = JSON.parse('');

function preload() {
    boat = createSprite(200, 120);
    boat.addImage('boat', loadImage('images/boat/boatv2_00000.png'));
    boat.scale = 0.2;
    boat.addImage('boat0', loadImage('images/boat/boatv2_00000.png'));
    boat.addImage('boat1', loadImage('images/boat/boatv2_00010.png'));
    boat.addImage('boat2', loadImage('images/boat/boatv2_00020.png'));
    boat.addImage('boat3', loadImage('images/boat/boatv2_00030.png'));
    boat.addImage('boat4', loadImage('images/boat/boatv2_00040.png'));
    boat.addImage('boat5', loadImage('images/boat/boatv2_00050.png'));
    boat.addImage('boat6', loadImage('images/boat/boatv2_00060.png'));

    Bait = createSprite(275, 160);
    Bait.shapeColor = '#ffffff00';

    love = loadImage('images/chooseBait/love_hover.png');
    money = loadImage('images/chooseBait/money_hover.png');
    sex = loadImage('images/chooseBait/sex_hover.png');

    // fish
    for (let i = 1; i < 16; i++) {
        // x: 100~1350, y: 250~550
        Fish(getRandom(100, 1350), getRandom(250, 550), i);
    }
}

function setup() {
    wrapper = document.getElementById('wrapper');
    createCanvas(wrapper.clientWidth, wrapper.clientHeight);
    document.getElementById('point').textContent = point;
    document.getElementById('day').textContent = day;

    // fish
    for (let i = 1; i < 16; i++) {
        const dir = Math.random() >= 0.5 ? 1 : -1;
        fishes[i].mirrorX(dir);

        const velocity = dir == 1 ? getRandom(-1, -3) : getRandom(1, 3);
        fishes[i].setVelocity(velocity, 0);
    }
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
        Bait.setVelocity(-3, 0);
    } else if (keyIsDown(RIGHT_ARROW)) {
        boat.setVelocity(3, 0);
        Bait.setVelocity(3, 0);
    } else { // no key press ‐> stand still
        boat.setVelocity(0, 0);
        Bait.setVelocity(0, 0);
    }

    //line
    stroke(255);
    strokeWeight(3);
    line(Bait.position.x - 20, boat.position.y - 80, Bait.position.x, Bait.position.y);

    //belt
    if (currentBait == "love") {
        Bait.addImage(love);
        Bait.scale = 0.08;
        bait_move();
    } else if (currentBait == "money") {
        Bait.addImage(money);
        Bait.scale = 0.08;
        bait_move();
    } else if (currentBait == "sex") {
        Bait.addImage(sex);
        Bait.scale = 0.08;
        bait_move();
    }

    // fish
    for (let i = 1; i < fishes.length; i++) {
        var d = dist(mouseClickX, mouseClickY, fishes[i].position.x, fishes[i].position.y);
        if (d < 15) {
            showFishInfo(true, i);
        }

        // fish
        if (fishes[i].position.x < -100)
            fishes[i].position.x = 1500;
        else if (fishes[i].position.x > 1500)
            fishes[i].position.x = -100;
    }

    mouseClickX = false;
    mouseClickY = false;
    drawSprites();
}

// fish
function Fish(x, y, i) {
    fishes[i] = createSprite(x, y);

    fishes[i].scale = 0.12;
    fishes[i].addImage(loadImage('images/fish/' + i + '.png'));
}

// fish
function mouseClicked() {
    let fishInfo = document.getElementById('popup-fishInfo');
    if (fishInfo.classList.value == 'active') {
    } else {
        mouseClickX = mouseX;
        mouseClickY = mouseY;
    }
}

//bait_move
function bait_move() {

    if (keyIsDown(LEFT_ARROW)) { // left
        Bait.position.x = boat.position.x + 75;
        Bait.position.y = boat.position.y + 40;

    } else if (keyIsDown(RIGHT_ARROW)) {
        Bait.position.x = boat.position.x + 75;
        Bait.position.y = boat.position.y + 40;

    } else if (keyIsDown(DOWN_ARROW)) {
        i = (i + 1) % 7;
        boat.changeImage('boat' + i);
        Bait.position.y = Bait.position.y + 20;
        stroke(255);
        strokeWeight(3);
        line(Bait.position.x - 20, boat.position.y - 75, Bait.position.x, Bait.position.y);
        for (let i = 1; i < fishes.length; i++) {
            if (Bait.overlap(fishes[i])) {
                if (count == 0) {

                    chat = Math.floor(Math.random() * 2);
                    if (chat != lastchat) {
                        popupChatToggle(true, i);
                        console.log('釣到' + chat);
                        lastchat = chat;
                        count++;
                        break;
                    }
                    break;
                }
                break;
            }
        }
    } else if (keyIsDown(UP_ARROW)) {
        i = (i + 1) % 7;
        boat.changeImage('boat' + i);
        Bait.position.y = Bait.position.y - 20;
        stroke(255);
        strokeWeight(3);
        line(Bait.position.x - 20, boat.position.y - 75, Bait.position.x, Bait.position.y);
    } else { // no key press ‐> stand still
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
function showFishInfo(show, num) {
    mouseClickX = false;
    mouseClickY = false;
    let fishInfo = document.getElementById('popup-fishInfo');
    if (show) {
        fishInfo.classList.toggle('active');
        console.log(num);
        if (num <= 7) {
            document.getElementById("fish-name").textContent = objstudent[num - 1].name + num;
            document.getElementById("fish-gender").textContent = objstudent[num - 1].gender;
            document.getElementById("fish-age").textContent = objstudent[num - 1].age;
            document.getElementById("fish-job").textContent = objstudent[num - 1].job;
            document.getElementById("fish-status").textContent = objstudent[num - 1].status;
        } else if (num > 7 && num <= 10) {
            document.getElementById("fish-name").textContent = objlove[num - 8].name + num;
            document.getElementById("fish-gender").textContent = objlove[num - 8].gender;
            document.getElementById("fish-age").textContent = objlove[num - 8].age;
            document.getElementById("fish-job").textContent = objlove[num - 8].job;
            document.getElementById("fish-status").textContent = objlove[num - 8].status;
        } else {
            document.getElementById("fish-name").textContent = objsex[num - 11].name + num;
            document.getElementById("fish-gender").textContent = objsex[num - 11].gender;
            document.getElementById("fish-age").textContent = objsex[num - 11].age;
            document.getElementById("fish-job").textContent = objsex[num - 11].job;
            document.getElementById("fish-status").textContent = objsex[num - 11].status;
        }
        document.getElementById("fish-img").src = 'images/fishInfo/fish (' + num + ').png';
    } else {
        mouseClickX = false;
        mouseClickY = false;
        fishInfo.classList.remove('active');
    }
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//對話視窗開啟與關閉
function popupChatToggle(show, num) {
    let popupChat = document.getElementById('popup-chat');
    if (show) {
        popupChat.classList.toggle('active');
        if (num <= 7) {
            document.getElementById("chat-name").textContent = objstudent[num - 1].name;
            document.getElementById("chat-question").textContent = chatStudent[num - 1].question;
            document.getElementById("chat-reply-1").textContent = chatStudent[num - 1].reply1;
            document.getElementById("chat-reply-2").textContent = chatStudent[num - 1].reply2;
            document.getElementById("chat-reply-3").textContent = chatStudent[num - 1].reply3;
        } else if (num > 7 && num <= 10) {
            
        } else {
            
        }
    } else {
        popupChat.classList.remove('active');
    }
}

// function btnChatClickClose() {
//     let btn = document.getElementById('popup-chat' + chat);
//     btn.classList.toggle('close');
// }

//完成對話選項後「加金錢」與「扣時間」
function dayPass() {
    count = 0;
    day--;
    document.getElementById('day').textContent = day;
    if (day <= 0) {
        showEndButton();
    }
    ;
}

function studentRightAnswer() {
    point = point + 100000;
    alert("Right!");
    document.getElementById('point').textContent = point;
}

function wrongAnswer() {
    alert("Wrong!");
    document.getElementById('point').textContent = point;
}

//天數到達0時檢查分數並跳出結算按鈕

let showEndButton = function () {
    let end = document.getElementById('end-button');
    end.classList.toggle('active');
};

