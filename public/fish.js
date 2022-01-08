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
let currentChatNum;

const objstudent = JSON.parse('[{"name":"張夢琦","gender":"女","age":"19y","job":"大一","status":"單身，有部分存款"},{"name":"林如萱","gender":"女","age":"19y","job":"大三","status":"單身，在還學貸"},{"name":"陳曼靜","gender":"女","age":"19y","job":"大三","status":"剛分手"},{"name":"張紫山","gender":"女","age":"20y","job":"大二","status":"在與喜歡的男生曖昧中"},{"name":"陳昊軒","gender":"男","age":"20y","job":"大二","status":"剛分手，一週有5天時間在兼職"},{"name":"林雲凱","gender":"男","age":"21y","job":"大三","status":"單身，有部分存款"},{"name":"張豪哲","gender":"男","age":"22y","job":"大四","status":"因為忙畢業論文而與女友分手"}]');
const objlove = JSON.parse('[{"name":"蘇晴","gender":"女","age":"40y","job":"護理師","status":"離婚，有一個4歲的兒子"},{"name":"張家榮","gender":"男","age":"45y","job":"傳統罐頭加工廠老闆","status":"喪偶，有兩個分別為12、9歲的女兒"},{"name":"陳欣萍","gender":"女","age":"37y","job":"外商公司主管","status":"丈夫劈腿，打離婚官司中"}]');
const objsex = JSON.parse('[{"name":"林宇彤","gender":"女","age":"25y","job":"小學老師","status":"與交往3年的男友遠距離"},{"name":"王家樂","gender":"男","age":"20y","job":"學生","status":"與高中交往5年的女友遠距離"},{"name":"曾禹妮","gender":"女","age":"28y","job":"小公司的行政助理","status":"新婚，但丈夫在國外工作"},{"name":"魏俊豪","gender":"男","age":"30y","job":"醫生","status":"已婚5年，這2年獨自一人在美國進修，妻小都在台灣"},{"name":"徐芷","gender":"=女","age":"33y","job":"廚師","status":"與交往7年的男友因為遠距離遲遲無法結婚"}]');

const chatStudent = JSON.parse('[{"question":"我好想投資啊，但是卻無從下手","reply1":"投資就那你跟著我好了","reply2":"我從小就在國外讀書，讀的是經濟學，如果你有什麼理財或者投資的問題都可以來問我。","reply3":"我也不知道怎麼投，好苦惱","right":2},{"question":"我最近在打工，特別忙，還是要還學貸。","reply1":"我也是，不僅要讀書還要打工，特別累。但是我看我朋友最近在投資，感覺掙很多","reply2":"我也是，快累死了","reply3":"你要不要和我一起投資，可以掙錢","right":1},{"question":"我的生活費真的好少，都不能買自己想要的東西。","reply1":"努力打工吧，實現財務自由","reply2":"你要不要試試看投資，聽說可以掙錢","reply3":"我也是，我真的好羨慕我在做投資的同學啊，看他們天天吃香喝辣，好像有畫不完的錢","right":3},{"question":"投資真的能掙到那麼多錢嗎？感覺很像騙人的。","reply1":"當然可以，我朋友就掙到了","reply2":"你覺得很像騙人，我也沒辦法","reply3":"我朋友之前好像就投了幾千塊，沒過一週好像就回本了。所以我也跟著他投了點。","right":3},{"question":"我工資終於發了，月末的哭泣。","reply1":"同是月末窮鬼人。","reply2":"我最近在投資一個項目，真的穩賺不賠，你有沒有多餘的存款，我們可以一起掙大錢。","reply3":"你把多出的錢拿來和我一起投資","right":2},{"question":"你是在哪個app進行投資啊？","reply1":"這個app你下載一下，大家都說好用","reply2":"你可以下載這個app，然後註冊一個帳號。我就是在這個app上進行理財和投資的，簡單又好用。","reply3":"這個app你試一試，我朋友說好用","right":2},{"question":"我不懂投資，所以一直不敢嘗試，特別怕賠錢。","reply1":"你是不是沒有什麼投資經驗啊？我把負責我的投資經理推給你吧，他真的很耐心，和他投不會有錯，我就是跟著他來的。","reply2":"投資不用懂那麼多的，和會的人一起就好了","reply3":"你不懂可以問我，我很會投資","right":1},{"question":"你知道泰迪幣嗎？我不知道怎麼買。","reply1":"你要買泰迪幣嗎，你可以網絡找找","reply2":"你是不是需要買泰迪幣，你和我經常買的那個幣商買吧，我推給你。你不要和其他人買，小心被騙了。","reply3":"泰迪幣最近看起來很火，我最近找到一個沒買過，推給你先。","right":2},{"question":"今天我看了一下，真的掙錢了欸！","reply1":"就和你說，跟著我沒有錯。","reply2":"那你要不要趁熱打鐵，再加點錢。","reply3":"就和你說跟著我投沒有錯，你看今天就掙了。我們要不要再多投點，趁著現在勢頭好，我覺得真的可以再大賺一筆欸！","right":3},{"question":"我最近有點錢，想要投資，又怕虧本。","reply1":"投資肯定都是有虧有掙，和我一起投吧，別擔心。","reply2":"我最近手裡的這個項目真的很掙錢，你要不要一起投資，反正在最後把錢投進去之前，就會拿回來了，而且還有利息，你相信我一點都不虧本。","reply3":"不要有這些洩氣的想法，只要和我一起投就不會虧本。","right":2},{"question":"這個平台真的可靠嗎？好擔心是詐騙啊。","reply1":"怎麼可能，你還不相信我嗎？","reply2":"怎麼可能會是詐騙，你要是這樣想，那不是到處都是騙子。","reply3":"你看這個平台上真的有很多人在投錢，一看就很可靠，我們也可以一起投，大家一起變有錢人。","right":3},{"question":"那個平台是怎麼回事啊，為什麼提不了現金，不會有什麼問題吧。","reply1":"最近那個平台好像出現故障了，無法提現。但是你別急，你只要多加值一些錢進去，就可以提現了。","reply2":"你等一等，估計過幾天就修好了","reply3":"我也不知道怎麼回事，我也提不了現金，好捉急。","right":1},{"question":"最近我們的那個投資到底怎麼樣了啊，為什麼一直虧錢啊。","reply1":"我最近週轉遇到一些問題，你能不能再借我一些錢，不然真的有可能我們的本金都回不來，這樣怕是要血本無歸了","reply2":"整個市場不太好，但是別擔心。","reply3":"虧錢是家常便飯，有虧才有贏，你要放平心態。","right":1},{"question":"你是不是在騙我，怎麼會虧成這樣，你那時候可不是這麼說的！","reply1":"我怎麼可能會騙你，我畢竟之前在國外讀過經濟，投資我很在行，只是這次市場動盪太大，你難道不相信我嗎？再借我一點錢，絕對可以東山再起的。","reply2":"股市本來就是起起伏伏，再過幾天就會回來了。","reply3":"我不是騙子，但你要這樣想，我也沒辦法。","right":1},{"question":"你們是誰？追回款項小組是怎麼回事？可以找得到騙我錢的人嗎？","reply1":"我們都是被害者，想要追回我們的錢","reply2":"你是不是也被xx騙了，我們都是他的被害者，我們最近組成了一個追回款項的小組，你要不要也加入，我們可以一起互幫互助。","reply3":"你只要出一部分的小組成立基金，就可以加入我們，幫你追回款項","right":3}]');
const chatLove = JSON.parse('[{"question":"我不常用這個聊天app，我們加line聊吧。","reply1":"接受，給對方自己的line","reply2":"表示還要考慮一下","reply3":"拒絕，表示只想用這個app聊天","right":1},{"question":"我最近的特別衰，還被上一任騙錢。","reply1":"表示遺憾","reply2":"跟著罵前任","reply3":"十分同情對方的遭遇，想給對方提供幫助","right":3},{"question":"你為什麼今天一整天都不回我消息？","reply1":"今天太忙，沒有時間看消息","reply2":"我在為了我們的未來努力工作，下次一定會及時回你的","reply3":"找理由說今天一整天沒帶手機出門","right":2}]');
const chatSex = JSON.parse('[{"question":"我們都在一起這麼久了，想和你視頻愛愛。","reply1":"我也想，可是我攝像頭壞了","reply2":"我也想，但我今天很累","reply3":"光是視頻愛愛怎麼夠，這樣怎麼能讓你感受到我的持久，下次直接約見面吧"},{"question":"今晚你要來我家過夜嗎，今天我室友都不會回來。","reply1":"今天不想出門","reply2":"好啊！我已經忍不了！馬上出現在你面前！","reply3":"我今天有點感冒了，我怕傳染給你。我們打電話吧，我的耳朵說它想你的呻吟聲"},{"question":"你是不是不想和我愛愛，一直拒絕我。","reply1":"我想啊，但就是很不湊巧","reply2":"當然想，我每天都在幻想和你愛愛","reply3":"我對你是認真的，所以不捨得"},{"question":"你喜歡什麼樣的姿勢。","reply1":"就一般的那種吧","reply2":"沒特別的耶","reply3":"你想要什麼姿勢我都能滿足你"},{"question":"在嗎？看看。","reply1":"看什麼？","reply2":"想看你","reply3":"想看大鐵棍還是擎天柱"}]');


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
    // num: fish num
    currentChatNum = num;
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
        // num: chose answer
        if (currentChatNum <= 7) {
            if (chatStudent[currentChatNum - 1].right == num)
                studentRightAnswer();
            else
                wrongAnswer();
        } else if (num > 7 && num <= 10) {

        } else {

        }
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

