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
const objsex = JSON.parse('[{"name":"林宇彤","gender":"女","age":"25y","job":"小學老師","status":"與交往3年的男友遠距離"},{"name":"王家樂","gender":"男","age":"20y","job":"學生","status":"與高中交往5年的女友遠距離"},{"name":"曾禹妮","gender":"女","age":"28y","job":"小公司的行政助理","status":"新婚，但丈夫在國外工作"},{"name":"魏俊豪","gender":"男","age":"30y","job":"醫生","status":"已婚5年，這2年獨自一人在美國進修，妻小都在台灣"},{"name":"徐芷","gender":"女","age":"33y","job":"廚師","status":"與交往7年的男友因為遠距離遲遲無法結婚"}]');

let chatStudent = JSON.parse('[{"question":"我好想投資啊，但是卻無從下手","reply1":"投資就那你跟著我好了","reply2":"我從小就在國外讀書，讀的是經濟學，如果你有什麼理財或者投資的問題都可以來問我。","reply3":"我也不知道怎麼投，好苦惱","right":2},{"question":"我最近在打工，特別忙，還是要還學貸。","reply1":"我也是，不僅要讀書還要打工，特別累。但是我看我朋友最近在投資，感覺掙很多","reply2":"我也是，快累死了","reply3":"你要不要和我一起投資，可以掙錢","right":1},{"question":"我的生活費真的好少，都不能買自己想要的東西。","reply1":"努力打工吧，實現財務自由","reply2":"你要不要試試看投資，聽說可以掙錢","reply3":"我也是，我真的好羨慕我在做投資的同學啊，看他們天天吃香喝辣，好像有畫不完的錢","right":3},{"question":"投資真的能掙到那麼多錢嗎？感覺很像騙人的。","reply1":"當然可以，我朋友就掙到了","reply2":"你覺得很像騙人，我也沒辦法","reply3":"我朋友之前好像就投了幾千塊，沒過一週好像就回本了。所以我也跟著他投了點。","right":3},{"question":"我工資終於發了，月末的哭泣。","reply1":"同是月末窮鬼人。","reply2":"我最近在投資一個項目，真的穩賺不賠，你有沒有多餘的存款，我們可以一起掙大錢。","reply3":"你把多出的錢拿來和我一起投資","right":2},{"question":"你是在哪個app進行投資啊？","reply1":"這個app你下載一下，大家都說好用","reply2":"你可以下載這個app，然後註冊一個帳號。我就是在這個app上進行理財和投資的，簡單又好用。","reply3":"這個app你試一試，我朋友說好用","right":2},{"question":"我不懂投資，所以一直不敢嘗試，特別怕賠錢。","reply1":"你是不是沒有什麼投資經驗啊？我把負責我的投資經理推給你吧，他真的很耐心，和他投不會有錯，我就是跟著他來的。","reply2":"投資不用懂那麼多的，和會的人一起就好了","reply3":"你不懂可以問我，我很會投資","right":1},{"question":"你知道泰迪幣嗎？我不知道怎麼買。","reply1":"你要買泰迪幣嗎，你可以網絡找找","reply2":"你是不是需要買泰迪幣，你和我經常買的那個幣商買吧，我推給你。你不要和其他人買，小心被騙了。","reply3":"泰迪幣最近看起來很火，我最近找到一個沒買過，推給你先。","right":2},{"question":"今天我看了一下，真的掙錢了欸！","reply1":"就和你說，跟著我沒有錯。","reply2":"那你要不要趁熱打鐵，再加點錢。","reply3":"就和你說跟著我投沒有錯，你看今天就掙了。我們要不要再多投點，趁著現在勢頭好，我覺得真的可以再大賺一筆欸！","right":3},{"question":"我最近有點錢，想要投資，又怕虧本。","reply1":"投資肯定都是有虧有掙，和我一起投吧，別擔心。","reply2":"我最近手裡的這個項目真的很掙錢，你要不要一起投資，反正在最後把錢投進去之前，就會拿回來了，而且還有利息，你相信我一點都不虧本。","reply3":"不要有這些洩氣的想法，只要和我一起投就不會虧本。","right":2},{"question":"這個平台真的可靠嗎？好擔心是詐騙啊。","reply1":"怎麼可能，你還不相信我嗎？","reply2":"怎麼可能會是詐騙，你要是這樣想，那不是到處都是騙子。","reply3":"你看這個平台上真的有很多人在投錢，一看就很可靠，我們也可以一起投，大家一起變有錢人。","right":3},{"question":"那個平台是怎麼回事啊，為什麼提不了現金，不會有什麼問題吧。","reply1":"最近那個平台好像出現故障了，無法提現。但是你別急，你只要多加值一些錢進去，就可以提現了。","reply2":"你等一等，估計過幾天就修好了","reply3":"我也不知道怎麼回事，我也提不了現金，好捉急。","right":1},{"question":"最近我們的那個投資到底怎麼樣了啊，為什麼一直虧錢啊。","reply1":"我最近週轉遇到一些問題，你能不能再借我一些錢，不然真的有可能我們的本金都回不來，這樣怕是要血本無歸了","reply2":"整個市場不太好，但是別擔心。","reply3":"虧錢是家常便飯，有虧才有贏，你要放平心態。","right":1},{"question":"你是不是在騙我，怎麼會虧成這樣，你那時候可不是這麼說的！","reply1":"我怎麼可能會騙你，我畢竟之前在國外讀過經濟，投資我很在行，只是這次市場動盪太大，你難道不相信我嗎？再借我一點錢，絕對可以東山再起的。","reply2":"股市本來就是起起伏伏，再過幾天就會回來了。","reply3":"我不是騙子，但你要這樣想，我也沒辦法。","right":1},{"question":"你們是誰？追回款項小組是怎麼回事？可以找得到騙我錢的人嗎？","reply1":"我們都是被害者，想要追回我們的錢","reply2":"你是不是也被xx騙了，我們都是他的被害者，我們最近組成了一個追回款項的小組，你要不要也加入，我們可以一起互幫互助。","reply3":"你只要出一部分的小組成立基金，就可以加入我們，幫你追回款項","right":3}]');
let chatLove = JSON.parse('[{"question":"我不常用這個聊天app，我們加line聊吧。","reply1":"拒絕，表示只想用這個app聊天","reply2":"接受，給對方自己的line","reply3":"表示還要考慮一下","right":2},{"question":"我最近的特別衰，還被上一任騙錢。","reply1":"十分同情對方的遭遇，想給對方提供幫助","reply2":"表示遺憾","reply3":"跟著罵前任","right":1},{"question":"我們來交換ig帳號吧，想要進一步了解你。","reply1":"不給，不想暴露自己的真實身分","reply2":"給，創建一個假帳號","reply3":"轉移話題","right":2},{"question":"你為什麼今天一整天都不回我消息？","reply1":"今天太忙，沒有時間看消息","reply2":"找理由說今天一整天沒帶手機出門","reply3":"我在為了我們的未來努力工作，下次一定會及時回你的","right":3},{"question":"你為什麼今天突然爽約不和我見面。","reply1":"因為最好的朋友過世了，不得不去參加告別式","reply2":"支支吾吾，顧左右而言他","reply3":"臨時有重要的事","right":1},{"question":"你真的長這個樣子嗎，有什麼證件可以證明你的身分嗎？","reply1":"一直強調對方不信任自己，卻不給任何證明的證件","reply2":"你難道不信任我嗎？我會很受傷","reply3":"偽造一張證件給對方看","right":3},{"question":"你分享給我的這個連結是什麼？不會有病毒吧？","reply1":"這是個影片連結，我覺得很好笑，所以就想要分享給你","reply2":"怎麼會，你看看就知道了","reply3":"愛看不看隨便你","right":1},{"question":"你真的不介意我的長相和年紀，想要和我在一起嗎？","reply1":"真的","reply2":"我不看外表這種膚淺的東西","reply3":"不論你什麼樣子，我都喜歡你。因為是你，所以其他都變得不重要了。","right":3},{"question":"你是不想和我確認關係嗎？為什麼我們聊了這麼久了你一點表示都沒有。","reply1":"我覺得我們可以再多了解一下彼此","reply2":"可能是因為太喜歡了，所以總想給你最好的...那你要和我在一起嗎","reply3":"我怕你還沒準備好","right":2},{"question":"你是不是有其他喜歡的人了，對我總是忽冷忽熱的。","reply1":"沒有吧，我一直這樣啊，你太敏感了","reply2":"怎麼可能，我都有你了，怎麼可能心裡容得下其他人。是我錯了，我以後不會了。","reply3":"別胡思亂想。","right":2},{"question":"你怎麼總是這麼忙，都沒有時間陪我。","reply1":"因為要掙錢啊，不然我靠什麼生活","reply2":"對不起寶寶，我一直忙著為我們的未來努力，所以有點疏忽照顧你了，我以後會注意的。","reply3":"我已經花很多時間陪你了","right":2},{"question":"你到底什麼時候才能從國外回來啊，好想見你。","reply1":"不好說，你著急沒有什麼用","reply2":"我也想見你啊，但真的沒辦法","reply3":"我也想見你，我現在每天都加班，就是為了快點結束這個項目回來見你，一定要等我哦","right":3},{"question":"你的口音怎麼怪怪的，不像台灣人。","reply1":"我的口音不像台灣人，是因為我在國外生活了好幾年啦。","reply2":"是嗎？我都這樣講話啊","reply3":"你又在亂想了。","right":1},{"question":"你已經一週沒有回我訊息了，是消失了嗎？","reply1":"對不起寶寶，這一週在國外出差，訊號不太好，不要生氣。","reply2":"有點忙，回去聊","reply3":"想說給彼此一點空間","right":1},{"question":"你昨天去的那家店看起來好高級，那是在哪啊。","reply1":"那是一家咖啡店，下次我們一起去，他們的東西真的很好吃","reply2":"那是東區的一家咖啡店","reply3":"就在東區，東西滿好吃的","right":1}]');
let chatSex = JSON.parse('[{"question":"哥哥，我有黑絲，你看嗎。","reply1":"剛聊天就這麼刺激的嗎","reply2":"寶貝，我可以拿我的大鵰和你交換嗎。","reply3":"想看","right":2},{"question":"我們都在一起這麼久了，想和你視頻愛愛。","reply1":"我也想，可是我攝像頭壞了","reply2":"我也想，但我今天很累","reply3":"光是視頻愛愛怎麼夠，這樣怎麼能讓你感受到我的持久，下次直接約見面吧","right":3},{"question":"今晚你要來我家過夜嗎，今天我室友都不會回來。","reply1":"今天不想出門","reply2":"好啊！我已經忍不了！馬上出現在你面前！","reply3":"我今天有點感冒了，我怕傳染給你。我們打電話吧，我的耳朵說它想你的呻吟聲","right":3},{"question":"你是不是不想和我愛愛，一直拒絕我。","reply1":"我對你是認真的，所以不捨得","reply2":"我想啊，但就是很不湊巧","reply3":"當然想，我每天都在幻想和你愛愛","right":1},{"question":"你覺得我的手長得好看嗎。","reply1":"挺好看的，白白的","reply2":"照片看起來很好看，但希望能親眼看見","reply3":"好看，但是我覺得它握住我的時候更好看","right":3},{"question":"你喜歡什麼樣的姿勢。","reply1":"你想要什麼姿勢我都能滿足你","reply2":"就一般的那種吧","reply3":"沒特別的耶","right":1},{"question":"我覺得今天的夜晚格外長，是因為冬至嗎。","reply1":"你的感覺沒有錯，冬至是夜晚最長的一天","reply2":"如果你來找我，我就可以讓你感受一下到底什麼是“最長”的夜","reply3":"有比較長嗎？我沒什麼感覺耶","right":2},{"question":"今晚好冷，被窩沒人暖，委屈。","reply1":"有暖寶寶或者熱水袋嗎","reply2":"我有一根加熱棒，插入式的那種，你想要嗎","reply3":"在被窩待久一點就會暖了","right":2},{"question":"在嗎？看看。","reply1":"看什麼？","reply2":"想看你","reply3":"想看大鐵棍還是擎天柱","right":3},{"question":"想和你擊劍，就不知道你技術怎麼樣。","reply1":"我除了想和你擊劍，更想在你的身體裡划船","reply2":"我不會擊劍啊？","reply3":"你會擊劍？","right":1},{"question":"你身材好好啊，你是會打籃球嗎。","reply1":"對，我一般打前鋒","reply2":"想親眼看看我打球嗎？","reply3":"我不僅會打球，還喜歡球，特別是你身上的那兩顆球","right":3},{"question":"我很會吃冰棒，更想吃你給的冰棒。","reply1":"我這裡有牛奶味的冰棒，你要多少我給多少","reply2":"那我明天就給你買","reply3":"我也喜歡吃冰棒，特別是蘇打口味的","right":1},{"question":"不知道小哥哥可以讓我騎馬駕駕嗎。","reply1":"當然可以，求之不得","reply2":"上上下下的顛簸，就怕你坐不住掉下來","reply3":"這樣太危險","right":2},{"question":"你大還是美隊大。","reply1":"大不大，比比就知道","reply2":"你覺得呢？","reply3":"看見你可以更大，就怕大到根本塞不下","right":3},{"question":"你長得好帥，可以約嗎？","reply1":"先驗驗貨吧，不知道你的海鮮新不新鮮","reply2":"可以","reply3":"我生性害羞","right":1}]');

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
        bait_move("love");
    } else if (currentBait == "money") {
        Bait.addImage(money);
        Bait.scale = 0.08;
        bait_move("money");
    } else if (currentBait == "sex") {
        Bait.addImage(sex);
        Bait.scale = 0.08;
        bait_move("sex");
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
function bait_move(bait) {

    if (keyIsDown(LEFT_ARROW)) { // left
        Bait.position.x = boat.position.x + 75;
        Bait.position.y = boat.position.y + 40;

    } else if (keyIsDown(RIGHT_ARROW)) {
        Bait.position.x = boat.position.x + 75;
        Bait.position.y = boat.position.y + 40;

    } else if (keyIsDown(DOWN_ARROW)) {
        //釣魚動畫
        i = (i + 1) % 7;
        boat.changeImage('boat' + i);
        Bait.position.y = Bait.position.y + 20;

        //線
        stroke(255);
        strokeWeight(3);
        line(Bait.position.x - 20, boat.position.y - 75, Bait.position.x, Bait.position.y);

        //觸發對話框
        for (let i = 1; i < fishes.length; i++) {
            if (Bait.overlap(fishes[i])) {
                console.log(bait);
                console.log('魚編號:' + i);
                if (bait == "money" && i < 8) {
                    if (count == 0) {
                        chat = popupChatToggle(true, i);
                        console.log('對話框' + chat);  //對話
                        count++;
                        break;
                    }
                    break;
                } else if (bait == "love" && i <= 10 && i > 7) {
                    if (count == 0) {
                        chat = popupChatToggle(true, i);
                        console.log('對話框' + chat);  //對話
                        count++;
                        break;
                    }
                    break;
                } else if (bait == "sex" && i <= 15 && i > 10) {
                    if (count == 0) {
                        chat = popupChatToggle(true, i);
                        console.log('對話框' + chat);  //對話
                        count++;
                        break;
                    }
                    break;
                }
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

let questionNum;

//對話視窗開啟與關閉
function popupChatToggle(show, num, answer) {
    // num: fish num
    let popupChat = document.getElementById('popup-chat');
    if (show) {
        popupChat.classList.toggle('active');
        currentChatNum = num;
        document.getElementById("chat-img").src = 'images/fishInfo/fish (' + num + ').png';
        if (num <= 7) {
            questionNum = Math.floor(Math.random() * (chatStudent.length));
            // console.log("questionNum" + questionNum);
            // console.log(chatStudent);

            document.getElementById("chat-name").textContent = objstudent[num - 1].name;
            document.getElementById("chat-question").textContent = chatStudent[questionNum].question;
            document.getElementById("chat-reply-1").textContent = chatStudent[questionNum].reply1;
            document.getElementById("chat-reply-2").textContent = chatStudent[questionNum].reply2;
            document.getElementById("chat-reply-3").textContent = chatStudent[questionNum].reply3;


        } else if (num > 7 && num <= 10) {
            questionNum = Math.floor(Math.random() * (chatLove.length));
            // console.log("questionNum" + questionNum);
            // console.log(chatLove);

            document.getElementById("chat-name").textContent = objlove[num - 8].name;
            document.getElementById("chat-question").textContent = chatLove[questionNum].question;
            document.getElementById("chat-reply-1").textContent = chatLove[questionNum].reply1;
            document.getElementById("chat-reply-2").textContent = chatLove[questionNum].reply2;
            document.getElementById("chat-reply-3").textContent = chatLove[questionNum].reply3;

        } else {
            questionNum = Math.floor(Math.random() * (chatSex.length));

            // console.log("questionNum" + questionNum);
            // console.log(chatSex);

            document.getElementById("chat-name").textContent = objsex[num - 11].name;
            document.getElementById("chat-question").textContent = chatSex[questionNum].question;
            document.getElementById("chat-reply-1").textContent = chatSex[questionNum].reply1;
            document.getElementById("chat-reply-2").textContent = chatSex[questionNum].reply2;
            document.getElementById("chat-reply-3").textContent = chatSex[questionNum].reply3;
        }
        return questionNum;
    } else {
        // num: chose answer
        // console.log("questionNum" + questionNum);
        // console.log("currentChatNum" + currentChatNum);
        // console.log("answer" + answer);
        if (currentChatNum <= 7) {
            if (chatStudent[questionNum].right == answer)
                rightAnswer();
            else
                wrongAnswer();

            // 刪掉出現過的對話
            setTimeout(() => {
                // console.log(chatStudent);
                // console.log("delete" + questionNum);
                chatStudent.splice(questionNum, 1);
            }, 100);

        } else if (currentChatNum > 7 && currentChatNum <= 10) {

            if (chatLove[questionNum].right == answer)
                rightAnswer();
            else
                wrongAnswer();

            // 刪掉出現過的對話
            setTimeout(() => {
                // console.log(chatLove);
                // console.log("delete" + questionNum);
                chatLove.splice(questionNum, 1);
            }, 100);
        } else {
            if (chatSex[questionNum].right == answer)
                rightAnswer();
            else
                wrongAnswer();

            // 刪掉出現過的對話
            setTimeout(() => {
                // console.log(chatSex);
                // console.log("delete" + questionNum);
                chatSex.splice(questionNum, 1);
            }, 100);
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

function rightAnswer() {
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

