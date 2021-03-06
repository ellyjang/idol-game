let dmg;
let home, play_home, buttons, profile_click, click_next, click_home, lines, tri, profile, ilbo1, ilbo2, ilbo3, jbs, schedule, schedule2, highlight, schedule_fanssa, tutorial, fancome1, fancome2, fanssa_all, fan1, fan2, fan3, fan4, fan5, fan6, leftmal, rightmal, choices, bigfan1, fan1good, fan1bad, fan2basic, fan2good, fan2bad, fan3basic, fan3good, fan3bad, sign, sign_pen, blankcam, car, back, doki, stageup, twtgood, twtbad, speaker_base, speaker_bbam, gamestart, start2, start2_1, phone2, newmessage2, text1, text2, text3, out1, out2, out3, out4, out5, out6, out7, out8, whiteback, lose, win, third, eumbang, backbig, backsmall, penlayer, schedule3, schedule3_1, effect1, effect2, theend;
let bgm1, bgm2, memorize, waterclick, wow, msgsound, meme, ddiyong, drop;
let ive, gidle, snsd;
let stage = 0;
let nickname, position, motto;
let nick, pos, mot;
let phx = 0;
let phy = 0;
let hlx = -3;
let hly = -3;
let fannum, fannum2, songnum;
let anim = [];
let blocks1 = [];
let blocks2 = [];
let blocks3 = [];
let blocks4 = [];
let block1sample = [];
let block2sample = [];
let block3sample = [];
let block4sample = [];
let score1, totalscore, time, time2, timescore, timegood, t, f1;
let fantimey = 100;
let proindex = 0;
let score2 = 0;
let cam, button, sx, sy;
let snapshots = [];
let gametimer = 4;
let camtimer1 = 3;
let camtimer2 = 2;
let camtimer3 = 2;
let fantimer = 30;
let ly, ly2, ly3, ly4, ly5, ly6;
let ans0 = [];
let ans1 = [];
let ans2 = [];
let qst0 = [];
let qst1 = [];
let qst2 = [];
let homeneed, nextneed;
let sx1, sx2, sx3, sy1, sy2, sy3;

function preload() {
  dmg = loadFont('font/DungGeunMo.otf');
  
  home = loadImage('images/Home.png');
  play_home = loadImage('images/Play.png');
  buttons = loadImage('images/buttons.png');
  profile_click = loadImage('images/profile_click.PNG');
  click_next = loadImage('images/button_click_next.png');
  click_home = loadImage('images/button_click_home.png');
  lines = loadImage('images/malpoong.png');
  tri = loadImage('images/malpoong2.png');
  profile = loadImage('images/profile.png');
  ilbo1 = loadImage('images/ilbo1.png');
  ilbo2 = loadImage('images/ilbo2.png');
  ilbo3 = loadImage('images/ilbo3.png');
  jbs = loadImage('images/jbs.png');
  schedule = loadImage('images/Schedule.png');
  schedule2 = loadImage('images/Schedule 2.png');
  schedule3 = loadImage('images/schedule3.png');
  schedule3_1 = loadImage('images/schedule3-1.png');
  schedule_sanok = loadImage('images/Schedule_sanok.png');
  highlight = loadImage('images/Highlight.png');
  schedule_fanssa = loadImage('images/schedule_fanssa.png');
  tutorial_fanssa = loadImage('images/newtutorial_fanssa.PNG');
  tutorial_rhythm = loadImage('images/tutorial_rhythm_fin.PNG');
  tutorial_ending = loadImage('images/tutorial_ending_fin.PNG');
  fancome1 = loadImage('images/5-1.png');
  fancome2 = loadImage('images/5-3.png');
  fanssa_all = loadImage('images/fanssa_all.png');
  fan1 = loadImage('images/fan1.png');
  fan2 = loadImage('images/fan2.png');
  fan3 = loadImage('images/fan3.png');
  fan4 = loadImage('images/fan4.png');
  fan5 = loadImage('images/fan5.png');
  fan6 = loadImage('images/fan6.png');
  leftmal = loadImage('images/leftmal.png');
  rightmal = loadImage('images/rightmal.png');
  choices = loadImage('images/seontak.png');
  bigfan1 = loadImage('images/fan1basic.PNG');
  fan1good = loadImage('images/fan1good.PNG');
  fan1bad = loadImage('images/fan1bad.PNG');
  fan2basic = loadImage('images/fan2basic.PNG');
  fan2good = loadImage('images/fan2good.PNG');
  fan2bad = loadImage('images/fan2bad.PNG');
  fan3basic = loadImage('images/fan3basic.PNG');
  fan3good = loadImage('images/fan3good.PNG');
  fan3bad = loadImage('images/fan3bad.PNG');
  sign = loadImage('images/Sign.png');
  cur = loadImage('images/cursor.png');
  blankcam = loadImage('images/cam.png');
  car = loadImage('images/car.png');
  back = loadImage('images/background.png');
  doki = loadImage('images/dokidoki.PNG');
  stageup = loadImage('images/stageup.PNG');
  twtgood = loadImage('images/twt_good.png');
  twtbad = loadImage('images/twt_bad.png');
  speaker_base = loadImage('images/speaker_base.png');
  speaker_bbam = loadImage('images/speaker_bbam.png');
  gamestart = loadImage('images/gamestart.png');
  start2 = loadImage('images/2start.png');
  start2_1 = loadImage('images/2start_1.png');
  newmessage2 = loadImage('images/2newmessage.png');
  phone2 = loadImage('images/2phone.png');
  text1 = loadImage('images/text1.png');
  text2 = loadImage('images/text2.png');
  text3 = loadImage('images/text3.png');
  out1 = loadImage('images/1-1.PNG');
  out2 = loadImage('images/1-2.PNG');
  out3 = loadImage('images/1-3.PNG');
  out4 = loadImage('images/1-4.PNG');
  out5 = loadImage('images/1-5.PNG');
  out6 = loadImage('images/1-6.PNG');
  out7 = loadImage('images/3-1.PNG');
  out8 = loadImage('images/3-2.PNG');
  whiteback = loadImage('images/white.PNG');
  third = loadImage('images/lose.PNG');
  win = loadImage('images/win.PNG');
  eumbang = loadImage('images/eumbang.png');
  backbig = loadImage('images/backbig.png');
  backsmall = loadImage('images/backsmall.png');
  for (let i=0; i<8; i++) {
    for (let j=0; j<8; j++) {
      anim[i*8+j] = loadImage('images/a'+(i+1)+'.PNG');
    }
  }
  effect1 = loadImage('images/effect1.png');
  effect2 = loadImage('images/effect2.png');
  theend = loadImage('images/end.png');
  
  bgm1 = loadSound('songs/bgm1.mp3');
  bgm2 = loadSound('songs/bgm2merge.mp3');
  memorize = loadSound('songs/memorize_cut.mp3');
  waterclick = loadSound('songs/waterclick.mp3');
  camerasound = loadSound('songs/camera.mp3');
  ive = loadSound('songs/lovedive_up.mp3');
  gidle = loadSound('songs/tomboy_up.mp3');
  snsd = loadSound('songs/newworld_up.mp3');
  wow = loadSound('songs/wow.mp3');
  msgsound = loadSound('songs/msgsound.mp3');
  meme = loadSound('songs/meme.mp3');
  yeah = loadSound('songs/yeah.mp3');
  ddiyong = loadSound('songs/ddiyong.mp3');
  drop = loadSound('songs/drop.mp3');
}

function setup() {
  createCanvas(1200, 900);
  textFont(dmg);
  fannum = int(random(3));
  fannum2 = fannum - 1;
  if (fannum2 == -1) fannum2 = 2;
  blocksample();
  blocking();
  ansmaking();
  noCursor();
  penlayer = createImage(1200, 900);
}

function draw() {
  switch (stage) {
    case 0 :
      naming();
      image(home, 0, 0);
      phx += random(-1, 1);
      phy += random(-1, 1);
      phx = constrain(phx, -5, 5);
      phy = constrain(phy, -5, 5);
      image(play_home, phx, phy);
      image(cur, mouseX, mouseY);
      t = millis();
      f1 = frameCount;
      break;
    
    case 0.1 : // ?????? ?????????
      image(profile, 0, 0);
      fill(0);
      textAlign(CENTER);
      textSize(35);
      text(position[proindex], 820, 400);
      text(nickname[proindex], 793, 318);
      textSize(30);
      text(motto[proindex], 727, 535);
  
      if (millis()-t > 20) {
        proindex++;
        t = millis();
        if (proindex > 4)  proindex = 0;
      } 
      if (frameCount-f1>60) {
        image(profile, 0, 0);
        fill(0);
        textAlign(CENTER);
        textSize(35);
        text(nick, 793, 318);
        text(pos, 820, 400);
        textSize(30);
        text(mot, 727, 535);
      }
      buttonchange();
      image(cur, mouseX, mouseY);
      break;
    
    case 0.2 : // ?????????
      image(profile, 0, 0);
      fill(0);
      textAlign(CENTER);
      textSize(35);
      text(nick, 793, 318);
      text(pos, 820, 400);
      textSize(30);
      text(mot, 727, 535);
      buttonchange();
      idol1 = new Speaker(nick, 610, '????????? ?????? ?????? >_*\n????????? ?????? ????????????..???', 690);
      idol1.display();
      image(cur, mouseX, mouseY);
      break;
    
    case 0.25 :
      image(ilbo1, 0, 0);
      buttonchange();
      image(cur, mouseX, mouseY);
      break;
      
    case 0.3 : // ?????? ??????1
      image(ilbo1, 0, 0);
      idol2 = new Speaker(nick, 610, '??? ?????? ?????? ?????????..?!\n????????? ?????? ???????????????..', 690);
      idol2.display();
      blink();
      image(cur, mouseX, mouseY);
      break;
      
    case 0.35 : // ?????? ??????2
      image(ilbo2, 0, 0);
      idol3 = new Speaker(nick, 610, '????????? ????????? ?????? 3000??? ??????..\n???????????? ???????????? ???????????? ?????? ????????? ??????..', 690);
      idol3.display();
      blink();
      image(cur, mouseX, mouseY);
      break;
      
    case 0.4 : // ?????? ??????3
      image(ilbo3, 0, 0);
      buttonchange();
      idol4 = new Speaker(nick, 610, '??? ??????.. ???????????? ???????????????..? >_<', 720);
      idol4.display();
      image(cur, mouseX, mouseY);
      break;
    
    case 0.5 : // ????????????1
      image(schedule, 0, 0);
      if (frameCount%60>=0 && frameCount%60<=30) image(highlight, hlx, hly);
      if (mouseX>=275 && mouseX<=943 && mouseY>=287 && mouseY<=390) image(schedule_fanssa, 0, 0);
      idol5 = new Speaker(nick, 610, '?????? ?????? ??? ????????? ????????????\n?????? ???????????????..???_???', 690);
      idol5.display();
      blink();
      image(cur, mouseX, mouseY);
      break;
      
    case 0.6 : // ????????????2
      image(schedule, 0, 0);
      if (frameCount%60>=0 && frameCount%60<=30) image(highlight, hlx, hly);
      image(schedule_fanssa, 0, 0);
      idol6 = new Speaker(nick, 610, '???.. ????????? ???????????? ?????? ????????????!!', 720);
      idol6.display();
      blink();
      image(cur, mouseX, mouseY);
      break;
      
    case 0.7 : // ????????????3
      image(schedule, 0, 0);
      if (frameCount%60>=0 && frameCount%60<=30) image(highlight, hlx, hly);
      image(schedule_fanssa, 0, 0);
      buttonchange();
      idol7 = new Speaker(nick, 610, '??????.. ????????? ?????? ??????\n?????? ?????? ?????? ????????? ??????????????? >_<!!', 690);
      idol7.display();
      image(cur, mouseX, mouseY);
      break;
    
    case 1 : // ????????????1
      image(fancome1, 0, 0);
      idol8 = new Speaker(nick, 610, '??????... ?????? ?????? ?????????...\n??? ?????? ?????? ?????????.. ??????', 690);
      idol8.display();
      blink();
      image(cur, mouseX, mouseY);
      break;
      
    case 1.1 : // ????????????2
      image(fancome2, 0, 0);
      buttonchange();
      idol9 = new Speaker(nick, 610, '??? ?????? ????????? ?????????????????? ?????? ?????? ????????????!', 720);
      idol9.display();
      image(cur, mouseX, mouseY);
      break;
    
    case 1.2 : // ?????? ????????????
      image(tutorial_fanssa, 0, 0, width, height);
      buttonchange();
      image(cur, mouseX, mouseY);
      break;
      
    case 1.3 : // ?????? ?????????+??????
      image(fanssa_all, 0, 0);
      image(gamestart, 70, 0);
      idol10 = new Speaker(nick, 610, '???.. ?????? ?????? ??? ??? ???????????? ?????????...', 720);
      idol10.display();
      image(cur, mouseX, mouseY);
      break;
      
    case 1.4 : // ?????? ??????
      image(fanssa_all, 0, 0);
      buttonchange();
      fantimecount();
      fanover();
      image(cur, mouseX, mouseY);
      break;
    
    case 1.5 : // ??? ???????????? ????????????1
      fanpicture();
      idol11 = new Speaker('???', 610, '?????? ???????????????', 720);
      idol11.display();
      blink();
      image(cur, mouseX, mouseY);
      break;
    
    case 1.51 : // ??? ???????????? ????????????2
      fanpicture();
      idol12 = new Speaker(nick, 610, '??????????????? ??????! ???', 720);
      idol12.display();
      blink();
      image(cur, mouseX, mouseY);
      break;
    
    case 1.52 : // ??? ???????????? ????????????3 ?????????
      fanpicture();
      idol13 = new Speaker(nick, 610, '(?????? ??? ????????? ?????????..!)', 720);
      idol13.display();
      buttonchange();
      image(cur, mouseX, mouseY);
      break;
    
    case 1.6 : // ??????1
      fanpicture();
      fanquestion();
      buttonchange();
      gauge();
      ly = 350;
      fill(192, 88, 137);
      rect(50,ly,70,550-ly,30);
      image(cur, mouseX, mouseY);
      break;
    
    case 1.61 : // ??????1
      fanpicture();
      gauge();
      fill(192, 88, 137);
      rect(50,ly,70,550-ly,30);
      idol14.display();
      image(choices, 0, 0);
      fananswer();
      image(cur, mouseX, mouseY);
      break;
    
    case 1.621 : // ??????1 +
      fansmile();
      buttonchange();
      gauge();
      fill(192, 88, 137);
      rect(50,ly,70,550-ly,30);
      ly --;
      if (ly<317) ly=317;
      fanreaction();
      image(cur, mouseX, mouseY);
      break;
    
    case 1.622 : // ??????1 -
      fancry();
      buttonchange();
      gauge();
      fill(192, 88, 137);
      rect(50,ly,70,550-ly,30);
      ly ++;
      if (ly>383) ly=383;
      fanreaction();
      image(cur, mouseX, mouseY);
      break;
    
    case 1.623 : // ??????1 0
      fanpicture();
      buttonchange();
      gauge();
      fill(192, 88, 137);
      rect(50,ly,70,550-ly,30);
      fanreaction();
      image(cur, mouseX, mouseY);
      break;
    
    case 1.7 : // ??????2
      fanpicture();
      fanquestion();
      buttonchange();
      gauge();
      ly2 = ly;
      fill(192, 88, 137);
      rect(50,ly2,70,550-ly2,30);
      image(cur, mouseX, mouseY);
      break;
    
    case 1.71 : // ??????2
      fanpicture();
      gauge();
      fill(192, 88, 137);
      rect(50,ly2,70,550-ly2,30);
      idol15.display();
      image(choices, 0, 0);
      fananswer();
      image(cur, mouseX, mouseY);
      break;
    
    case 1.721 : // ??????2 +
      fansmile();
      buttonchange();
      gauge();
      fill(192, 88, 137);
      rect(50,ly2,70,550-ly2,30);
      ly2 --;
      if (ly2<ly-33) ly2=ly-33;
      fanreaction();
      image(cur, mouseX, mouseY);
      break;
    
    case 1.722 : // ??????2 -
      fancry();
      buttonchange();
      gauge();
      fill(192, 88, 137);
      rect(50,ly2,70,550-ly2,30);
      ly2 ++;
      if (ly2>ly+33) ly2=ly+33;
      fanreaction();
      image(cur, mouseX, mouseY);
      break;
    
    case 1.723 : // ??????2 0
      fanpicture();
      buttonchange();
      gauge();
      fill(192, 88, 137);
      rect(50,ly2,70,550-ly,30);
      fanreaction();
      image(cur, mouseX, mouseY);
      break;
    
    case 1.8 : // ??????3
      fanpicture();
      buttonchange();
      fanquestion();
      gauge();
      ly3 = ly2;
      fill(192, 88, 137);
      rect(50,ly3,70,550-ly3,30);
      image(buttons, 0, 0);
      image(cur, mouseX, mouseY);
      break;
    
    case 1.81 : // ??????3
      fanpicture();
      gauge();
      fill(192, 88, 137);
      rect(50,ly3,70,550-ly3,30);
      idol16.display();
      image(choices, 0, 0);
      fananswer();
      image(cur, mouseX, mouseY);
      break;
    
    case 1.821 : // ??????3 +
      fansmile();
      buttonchange();
      gauge();
      fill(192, 88, 137);
      rect(50,ly3,70,550-ly3,30);
      ly3 --;
      if (ly3<ly2-33) ly3=ly2-33;
      fanreaction();
      image(cur, mouseX, mouseY);
      break;
    
    case 1.822 : // ??????3 -
      fancry();
      buttonchange();
      gauge();
      fill(192, 88, 137);
      rect(50,ly3,70,550-ly3,30);
      ly3 ++;
      if (ly3>ly2+33) ly3=ly2+33;
      fanreaction();
      image(cur, mouseX, mouseY);
      break;
    
    case 1.823 : // ??????3 0
      fanpicture();
      buttonchange();
      gauge();
      fill(192, 88, 137);
      rect(50,ly2,70,550-ly2,30);
      fanreaction();
      image(cur, mouseX, mouseY);
      break;
      
    case 1.9 : // ??????4
      fanpicture2();
      fanquestion();
      gauge();
      ly4 = ly3;
      fill(192, 88, 137);
      rect(50,ly4,70,550-ly4,30);
      buttonchange();
      image(cur, mouseX, mouseY);
      break;
    
    case 1.91 : // ??????4
      fanpicture2();
      gauge();
      fill(192, 88, 137);
      rect(50,ly4,70,550-ly4,30);
      idol19.display();
      image(choices, 0, 0);
      fananswer();
      image(cur, mouseX, mouseY);
      break;
    
    case 1.921 : // ??????4 +
      fansmile2();
      buttonchange();
      gauge();
      fill(192, 88, 137);
      rect(50,ly4,70,550-ly4,30);
      ly4 --;
      if (ly4<ly3-33) ly4=ly3-33;
      fanreaction();
      image(cur, mouseX, mouseY);
      break;
    
    case 1.922 : // ??????4 -
      fancry2();
      buttonchange();
      gauge();
      fill(192, 88, 137);
      rect(50,ly4,70,550-ly4,30);
      ly4 ++;
      if (ly4>ly3+33) ly4=ly3+33;
      fanreaction();
      image(cur, mouseX, mouseY);
      break;
    
    case 1.923 : // ??????4 0
      fanpicture2();
      buttonchange();
      gauge();
      fill(192, 88, 137);
      rect(50,ly3,70,550-ly3,30);
      ly4 = ly3;
      fanreaction();
      image(cur, mouseX, mouseY);
      break;
      
    case 1.93 : // ??????5
      fanpicture2();
      fanquestion();
      gauge();
      ly5 = ly4;
      fill(192, 88, 137);
      rect(50,ly5,70,550-ly5,30);
      buttonchange();
      image(cur, mouseX, mouseY);
      break;
      
    case 1.931 : // ??????5
      fanpicture2();
      gauge();
      fill(192, 88, 137);
      rect(50,ly5,70,550-ly5,30);
      idol193.display();
      image(choices, 0, 0);
      fananswer();
      image(cur, mouseX, mouseY);
      break;
      
    case 1.9321 : // ??????5 +
      fansmile2();
      buttonchange();
      gauge();
      fill(192, 88, 137);
      rect(50,ly5,70,550-ly5,30);
      ly5 --;
      if (ly5<ly4-33) ly5=ly4-33;
      fanreaction();
      image(cur, mouseX, mouseY);
      break;
      
    case 1.9322 : // ??????5 -
      fancry2();
      buttonchange();
      gauge();
      fill(192, 88, 137);
      rect(50,ly5,70,550-ly5,30);
      ly5 ++;
      if (ly5>ly4+33) ly5=ly4+33;
      fanreaction();
      image(cur, mouseX, mouseY);
      break;
      
    case 1.9323 : // ??????5 0
      fanpicture2();
      buttonchange();
      gauge();
      fill(192, 88, 137);
      rect(50,ly4,70,550-ly4,30);
      ly5 = ly4;
      fanreaction();
      image(cur, mouseX, mouseY);
      break;
      
    case 1.94 : // ??????6
      fanpicture2();
      fanquestion();
      gauge();
      ly6 = ly5;
      fill(192, 88, 137);
      rect(50,ly6,70,550-ly6,30);
      buttonchange();
      image(cur, mouseX, mouseY);
      break;
      
    case 1.941 : // ??????6
      fanpicture2();
      gauge();
      fill(192, 88, 137);
      rect(50,ly6,70,550-ly6,30);
      idol194.display();
      image(choices, 0, 0);
      fananswer();
      image(cur, mouseX, mouseY);
      break;
      
    case 1.9421 : // ??????6 +
      fansmile2();
      buttonchange();
      gauge();
      fill(192, 88, 137);
      rect(50,ly6,70,550-ly6,30);
      ly6 --;
      if (ly6<ly5-33) ly6=ly5-33;
      fanreaction();
      image(cur, mouseX, mouseY);
      break;
      
    case 1.9422 : // ??????6 -
      fancry2();
      buttonchange();
      gauge();
      fill(192, 88, 137);
      rect(50,ly6,70,550-ly6,30);
      ly6 ++;
      if (ly6>ly5+33) ly6=ly5+33;
      fanreaction();
      image(cur, mouseX, mouseY);
      break;
      
    case 1.9423 : // ??????6 0
      fanpicture2();
      buttonchange();
      gauge();
      fill(192, 88, 137);
      rect(50,ly5,70,550-ly5,30);
      ly6 = ly5;
      fanreaction();
      image(cur, mouseX, mouseY);
      break;
      
    case 1.95 : // ??????
      stroke(0);
      if (mouseIsPressed) {
        if (mouseX>250 && mouseX<950 && mouseY>220 && mouseY<730) {
          line(pmouseX, pmouseY, mouseX, mouseY);
        }
      }
      cursor(ARROW);
      buttonchange();
      break;
    
    case 1.99 : // ??????
      score1 = ly6;
      if (score1<=300) image(twtgood, -80, -50, 1200*7/6, 900*7/6);
      else image(twtbad, -80, -50, 1200*7/6, 900*7/6);
      buttonchange();
      gauge();
      fill(192, 88, 137);
      rect(50,ly6,70,550-ly6,30);
      noCursor();
      image(cur, mouseX, mouseY);
      break;
    
    case 2 : // ????????????
      image(schedule2, 0, 0);
      buttonchange();
      if (frameCount%60>=0 && frameCount%60<=30) image(highlight, hlx, hly+75);
      image(schedule_sanok, 0, 0);
      idol18 = new Speaker(nick, 610, '?????? ?????? ???????????? ?????????????????? ??????????!', 720);
      idol18.display();
      image(cur, mouseX, mouseY);
      break;
    
    case 2.1 : // ??? ????????????
      image(jbs, 0, 0);
      image(car, 470, 320);      
      buttonchange();
      idol19 = new Speaker(nick, 610, '???????????? ????????? ??????????????? ?????? ???...', 720);
      idol19.display();
      image(cur, mouseX, mouseY);
      break;
    
    case 2.2 : // ?????? ????????????
      image(doki, 0, 0);
      idol20 = new Speaker(nick, 610, '???????????? ???????????? ???????????? ????????? ?????????..\n?????? ??? ?????? "?????????"?????????..?', 690);
      idol20.display();
      buttonchange();
      image(cur, mouseX, mouseY);
      break;
    
    case 2.3 : // ?????? ????????????
      songnum = int(random(0, 3));
      image(tutorial_rhythm, 0, 0, width, height);
      image(gamestart, 70, 0);
      image(cur, mouseX, mouseY);
      break;
      
    case 2.31 : // a ??? ???????????????
      image(back, 0, 0);
      frame();
      blocksampledown();
      image(stageup, 0, 0);
      noStroke();
      textAlign(CENTER);
      textSize(50);
      fill(0);
      text('[??????]\na ?????? ???????????????!', width/2, 80);
      image(cur, mouseX, mouseY);
      break;
    
    case 2.32 : // d ??? ???????????????
      image(back, 0, 0);
      frame();
      blocksampledown();
      image(stageup, 0, 0);
      noStroke();
      textAlign(CENTER);
      textSize(50);
      fill(0);
      text('[??????]\nd ?????? ???????????????!', width/2, 80);
      image(cur, mouseX, mouseY);
      break;
    
    case 2.33 : // ?????? ????????? ???????????????
      image(back, 0, 0);
      frame();
      blocksampledown();
      image(stageup, 0, 0);
      noStroke();
      textAlign(CENTER);
      textSize(50);
      fill(0);
      text('[??????]\n??? ?????? ???????????????!', width/2, 80);
      image(cur, mouseX, mouseY);
      break;
      
    case 2.34 : // ????????? ????????? ???????????????
      image(back, 0, 0);
      frame();
      blocksampledown();
      image(stageup, 0, 0);
      noStroke();
      textAlign(CENTER);
      textSize(50);
      fill(0);
      text('[??????]\n??? ?????? ???????????????!', width/2, 80);
      image(cur, mouseX, mouseY);
      break;
      
    case 2.35 : // 3, 2, 1
      image(back, 0, 0);
      noStroke();
      textAlign(CENTER);
      textSize(100);
      fill(0);
      text(gametimer, width/2, height/2);
      if (frameCount % 60 == 0 && gametimer > 0) gametimer --;
      if (gametimer == 0) {
        gamerealstart();
        below();
      }
      image(cur, mouseX, mouseY);
      break;
    
    case 2.4 : // ????????????
      image(backbig, 0, 0);
      frame();
      if (frameCount%60>=0 && frameCount%60<=29) image(speaker_base, 0, 0);
      else if (frameCount%60>=30 && frameCount%60<=59) image(speaker_bbam, 0, 0);
      blockdown();      
      image(anim[frameCount%64], 0, 0);
      
      if (score2>=15) image(effect1, 0, 0);
      if (score2>=30) image(effect2, 0, 0);
      
      textSize(50);
      fill(0);
      text(score2, 75, 200);
      
      image(cur, mouseX, mouseY);
      break;
      
    case 2.5 : // ???????????? ????????????
      image(tutorial_ending, 0, 0, 1200, 900);
      buttonchange();
      image(cur, mouseX, mouseY);
      break;
    
    case 2.6 : // ??????1
      takephoto1();
      timecount1();
      image(cur, mouseX, mouseY);
      break;
      
    case 2.61 : // ??????2
      takephoto2();
      timecount2();
      image(cur, mouseX, mouseY);
      t = frameCount;
      break;
    
    case 2.62 : // ??????3
      takephoto3();
      timecount3();
      image(cur, mouseX, mouseY);
      timescore = frameCount;
      if (frameCount-t>=240) stage=2.63;
      break;
    
    case 2.63 : // ????????????
      if (score2 >= 40) {
        image(eumbang, 0, 0);
        push();
        translate(width, 0);
        scale(-1, 1);
        image(snapshots[snapshots.length-1], 370, 105, 240, 180);
        image(penlayer, 0, 0);
        pop();
        fill(0);
        textAlign(CENTER);
        textSize(45);
        if (frameCount - timescore >= 30) text('278', 708, 413);
        if (frameCount - timescore >= 60) text('305', 708, 500);
        if (frameCount - timescore >= 90) text('427', 708, 586);
        if (frameCount - timescore >= 120) text('115', 708, 671);
        if (frameCount - timescore >=140 && frameCount - timescore <= 210) text(int(random(1500)), 708, 772);
        else if (frameCount - timescore > 210) text('1125', 708, 772);
        if (frameCount - timescore >= 240) image(win, 0, 0);
      } else {
        image(eumbang, 0, 0);
        push();
        translate(width, 0);
        scale(-1, 1);
        image(snapshots[snapshots.length-1], 370, 105, 240, 180);
        image(penlayer, 0, 0);
        pop();
        fill(0);
        textAlign(CENTER);
        textSize(45);
        if (frameCount - timescore >= 30) text('21', 708, 413);
        if (frameCount - timescore >= 60) text('84', 708, 500);
        if (frameCount - timescore >= 90) text('7', 708, 586);
        if (frameCount - timescore >= 120) text('100', 708, 671);
        if (frameCount - timescore >=140 && frameCount - timescore <= 210) text(int(random(1500)), 708, 772);
        else if (frameCount - timescore > 210) text('212', 708, 772);
        if (frameCount - timescore >= 210) image(third, 0, 0);
      }
      buttonchange();
      image(cur, mouseX, mouseY);
      break;
      
    case 2.631 :
      if (score2 >= 40) {
        image(eumbang, 0, 0);
        push();
        translate(width, 0);
        scale(-1, 1);
        image(snapshots[snapshots.length-1], 370, 105, 240, 180);
        image(penlayer, 0, 0);
        pop();
        fill(0);
        textAlign(CENTER);
        textSize(45);
        text('278', 708, 413);
        text('305', 708, 500);
        text('427', 708, 586);
        text('115', 708, 671);
        text('1125', 708, 772);
        image(win, 0, 0);
        idol2631 = new Speaker(nick, 610, '??????! ?????? 1??? ??????!!!', 720);
        idol2631.display();
      } else {
        image(eumbang, 0, 0);
        push();
        translate(width, 0);
        scale(-1, 1);
        image(snapshots[snapshots.length-1], 370, 105, 240, 180);
        image(penlayer, 0, 0);
        pop();
        fill(0);
        textAlign(CENTER);
        textSize(45);
        text('21', 708, 413);
        text('84', 708, 500);
        text('7', 708, 586);
        text('100', 708, 671);
        text('212', 708, 772);
        image(third, 0, 0);
        idol2631 = new Speaker(nick, 610, '3????????? ??????.. ???..', 720);
        idol2631.display();
      }
      buttonchange();
      image(cur, mouseX, mouseY);
      break;
    
    case 2.9 :
      image(schedule3, 0, 0);
      if (frameCount%60>=0 && frameCount%60<=30) image(schedule3_1, 0, 0);
      buttonchange();
      idol29 = new Speaker(nick, 610, '?????? ?????? ??? ????????????..!', 720);
      idol29.display();
      image(cur, mouseX, mouseY);
      break;
      
    case 3.1 : // ??? ??????
      image(out1, 0, 0);
      idol31 = new Speaker(nick, 610, '??? ???????????????~~~\n?????? ????????? ???????????? ?????? ????????? ?????????????????? ?????????!', 690);
      idol31.display();
      buttonchange();
      image(cur, mouseX, mouseY);
      break;
    
    case 3.11 :
      image(out2, 0, 0);
      idol311 = new Speaker(nick, 610, '??????...????????????.. ?????? ?????????.\n???????????? ????????? ?????? ???????????? ?????? ???????????????..', 690);
      idol311.display();
      blink();
      image(cur, mouseX, mouseY);
      break;
      
    case 3.12 :
      image(out3, 0, 0);
      if (frameCount%60>=0 && frameCount%60<=30) image(profile_click, 100, -600)
      idol312 = new Speaker(nick, 610, '??????.. ?????? ??? ?????????\n???????????? ?????? ??? ??? ?????? ??????????????????.', 690);
      idol312.display();
      image(cur, mouseX, mouseY);
      break;
      
    case 3.13 :
      image(out4, 0, 0);
      idol313 = new Speaker(nick, 610, '???~ ??????>.< ?????? ?????? ?????????..\n?????? ?????? ??? ????????????!!! ???????????? ??????', 690);
      idol313.display();
      blink();
      image(cur, mouseX, mouseY);
      break;
      
    case 3.14 :
      image(out5, 0, 0);
      idol314 = new Speaker(nick, 610, '??? ??????????????? ?????? ????????? ???????????? ??? ??????!\n????????? ??????????????? ????????? ???????????? ??????', 690);
      idol314.display();
      blink();
      image(cur, mouseX, mouseY);
      break;
      
    case 3.15 :
      image(out6, 0, 0);
      idol315 = new Speaker(nick, 610, '???? ?????? ???????!', 720);
      idol315.display();
      buttonchange();
      image(cur, mouseX, mouseY);
      break;
    
    case 3.2 : // ?????? ??????1
      image(start2, 0, 0);
      if (frameCount%60>=0 && frameCount%60<=30) image(start2_1, 0, 0);
      image(cur, mouseX, mouseY);
      break;
    
    case 3.21 : // ?????? ??????2
      image(whiteback, 0, 0, 1200, 900);
      image(text1, 80, 50, text1.width/1.2, text1.height/1.2);
      image(phone2, 0, 0);
      idol321 = new Speaker(nick, 610, '?????? ??? ????????? ?????? ??????????!\n??????????????? ????????? ?????????', 690);
      idol321.display();
      blink();
      image(cur, mouseX, mouseY);
      time2 = frameCount;
      break;
      
    case 3.22 : // ?????? ??????3 (new ?????????)
      image(whiteback, 0, 0, 1200, 900);
      image(text2, 80, 50, text2.width/1.2, text2.height/1.2);
      image(phone2, 0, 0);
      if (frameCount - time2 >=180) image(newmessage2, 0, 0);
      image(cur, mouseX, mouseY);
      break;
      
    case 3.23 : // ?????? ?????? ??????
      image(whiteback, 0, 0, 1200, 900);
      image(text3, 380, -160, text3.width/1.2, text3.height/1.2);
      image(phone2, 0, 0);
      buttonchange();
      // blink();
      image(cur, mouseX, mouseY);
      break;
    
    case 3.24 :
      image(out7, 0, 0);
      idol324 = new Speaker(nick, 610, '??? ????????? ??????????????? ????????????..\n?????? ????????? ???????????? ?????? ????????? ??????????????? ??????', 690);
      idol324.display();
      blink();
      image(cur, mouseX, mouseY);
      break;
      
    case 3.3 : 
      image(out7, 0, 0);
      idol33 = new Speaker(nick, 610, '??? ?????? ????????? ????????? ?????? ??? ????????? ???\n????????? ???????????? ?????? ^^', 690);
      idol33.display();
      blink();
      image(cur, mouseX, mouseY);
      break;
      
    case 3.31 :
      image(out8, 0, 0, 1200, 900);
      idol331 = new Speaker(nick, 610, '??????.. ?????? ??????.. ??????', 720);
      idol331.display();
      buttonchange();
      image(cur, mouseX, mouseY);
      break;
      
    case 3.32 :
      image(theend, 0, 0);
      image(click_home, 0, 0);
      image(cur, mouseX, mouseY);
      break;
  }
}

function mouseClicked() {
  waterclick.play();
  homeneed = [0.1, 0.2, 0.25, 0.4, 0.5, 0.6, 0.7, 1.1, 1.2, 1.4, 1.52, 1.6, 1.621, 1.622, 1.623, 1.7, 1.721, 1.722, 1.723, 1.8, 1.821, 1.822, 1.823, 1.9, 1.921, 1.922, 1.923, 1.95, 1.99, 2, 2.1, 2.2, 2.3, 2.5, 2.6, 2.7, 2.8, 2.9, 3.1, 3.15, 3.23, 3.31, 3.32];
  
  if (homeneed.includes(stage)==true) {
    if (mouseX>=1097 && mouseX<=1182 && mouseY>=815 && mouseY<=893) {
      stage = 0;
      fantimer = 30;
      ly = 350;
      score2 = 0;
      blocking();
      blocksample();
      gametimer = 4;
      camtimer1 = 3;
      camtimer2 = 2;
      camtimer3 = 2;
      score2 = 0;
      fantimey = 100;
      fannum = int(random(3))
      fannum2 = fannum - 1;
      if (fannum2 == -1) fannum2 = 2;
      
      if (bgm2.isPlaying()==true) bgm2.stop();
      else if (bgm1.isPlaying()==true) bgm1.stop();
      else if (memorize.isPlaying()==true) memorize_cut.stop();
      else if (meme.isPlaying()==true) meme.stop();
      }
    }
  
  if (stage==0) {
    if (mouseX>810 && mouseX<1080 && mouseY>500 && mouseY<600) {
      stage = 0.1;
      bgm2.loop();
    }
  }
  else if (stage==0.1) {
    if (mouseX>=1003 && mouseX<=1086 && mouseY>=815 && mouseY<=893) stage = 0.2;
    else if (mouseX>350 && mouseX<705 && mouseY>750 && mouseY<830)  stage = 0.2;
  }
  else if (stage==0.2) {
    if (mouseX>=1003 && mouseX<=1086 && mouseY>=815 && mouseY<=893) stage = 0.25;
  }
  else if (stage==0.25) {
    if (mouseX>=1003 && mouseX<=1086 && mouseY>=815 && mouseY<=893) stage = 0.3;
  }
  else if (stage==0.3) {
    if (mouseX>=50 && mouseX<=1150 && mouseY>=590 && mouseY<=810) stage = 0.35;
  }
  else if (stage==0.35) {
    if (mouseX>=50 && mouseX<=1150 && mouseY>=590 && mouseY<=810) stage = 0.4;
  }
  else if (stage==0.4) {
    if (mouseX>=1003 && mouseX<=1086 && mouseY>=815 && mouseY<=893) stage = 0.5;
  }
  else if (stage==0.5) {
    if (mouseX>=50 && mouseX<=1150 && mouseY>=590 && mouseY<=810) stage = 0.6;
  }
  else if (stage==0.6) {
    if (mouseX>=50 && mouseX<=1150 && mouseY>=590 && mouseY<=810) stage = 0.7;
  }
  else if (stage==0.7) {
    if (mouseX>=1003 && mouseX<=1086 && mouseY>=815 && mouseY<=893) {
      stage = 1;
      wow.play();
    }
  }
  else if (stage==1) {
    if (mouseX>=50 && mouseX<=1150 && mouseY>=590 && mouseY<=810) stage = 1.1;
  }
  else if (stage==1.1) {
    if (mouseX>=1003 && mouseX<=1086 && mouseY>=815 && mouseY<=893) {
      if (wow.isPlaying()==true) wow.stop();
      stage = 1.2;
    }
  }
  else if (stage==1.2) {
    if (mouseX>=1003 && mouseX<=1086 && mouseY>=815 && mouseY<=893) stage = 1.3;
  }
  else if (stage==1.3) {
    stage = 1.4;
    bgm2.pause();
    memorize.play();
  }
  else if (stage==1.4) {
    if (mouseX>=1003 && mouseX<=1086 && mouseY>=815 && mouseY<=893) {
      stage = 1.5;
      memorize.stop();
      bgm2.play();
    }
  }
  else if (stage==1.5) {
    if (mouseX>=50 && mouseX<=1150 && mouseY>=590 && mouseY<=810) stage = 1.51;
  }
  else if (stage==1.51) {
    if (mouseX>=50 && mouseX<=1150 && mouseY>=590 && mouseY<=810) stage = 1.52;
  }
  else if (stage==1.52) {
    if (mouseX>=1003 && mouseX<=1086 && mouseY>=815 && mouseY<=893) {
      stage = 1.6;
      bgm2.pause();
      bgm1.loop();
    }
  }
  else if (stage==1.6) {
    if (mouseX>=1003 && mouseX<=1086 && mouseY>=815 && mouseY<=893) stage = 1.61;
  }
  else if (stage==1.61) {
    if (mouseX>=205 && mouseX<=1035) {
      if (mouseY>=120 && mouseY<=240) stage=1.623;
      else if (mouseY>=270 && mouseY<=392) stage=1.621;
      else if (mouseY>=417 && mouseY<=540) stage=1.622;
    }
  }
  else if (stage==1.621 || stage==1.622 || stage==1.623) {
    if (mouseX>=1003 && mouseX<=1086 && mouseY>=815 && mouseY<=893) stage = 1.7;
  }
  else if (stage==1.7) {
    if (mouseX>=1003 && mouseX<=1086 && mouseY>=815 && mouseY<=893) stage = 1.71;
  }
  else if (stage==1.71) {
    if (mouseX>=205 && mouseX<=1035) {
      if (mouseY>=120 && mouseY<=240) stage=1.722;
      else if (mouseY>=270 && mouseY<=392) stage=1.721;
      else if (mouseY>=417 && mouseY<=540) stage=1.723;
    }
  }
  else if (stage==1.721 || stage==1.722 || stage==1.723) {
    if (mouseX>=1003 && mouseX<=1086 && mouseY>=815 && mouseY<=893) stage = 1.8;
  }
  else if (stage==1.8) {
    if (mouseX>=1003 && mouseX<=1086 && mouseY>=815 && mouseY<=893) stage = 1.81;
  }
  else if (stage==1.81) {
    if (mouseX>=205 && mouseX<=1035) {
      if (mouseY>=120 && mouseY<=240) stage=1.823;
      else if (mouseY>=270 && mouseY<=392) stage=1.822;
      else if (mouseY>=417 && mouseY<=540) stage=1.821;
    }
  }
  else if (stage==1.821 || stage==1.822 || stage==1.823) {
    if (mouseX>=1003 && mouseX<=1086 && mouseY>=815 && mouseY<=893) stage = 1.9;
  }
  else if (stage==1.9) {
    if (mouseX>=1003 && mouseX<=1086 && mouseY>=815 && mouseY<=893) stage = 1.91;
  }
  else if (stage==1.91) {
    if (mouseX>=205 && mouseX<=1035) {
      if (mouseY>=120 && mouseY<=240) stage=1.921;
      else if (mouseY>=270 && mouseY<=392) stage=1.922;
      else if (mouseY>=417 && mouseY<=540) stage=1.923;
    }
  }
  else if (stage==1.921 || stage==1.922 || stage==1.923) {
    if (mouseX>=1003 && mouseX<=1086 && mouseY>=815 && mouseY<=893) stage = 1.93;
  }
  else if (stage==1.93) {
    if (mouseX>=1003 && mouseX<=1086 && mouseY>=815 && mouseY<=893) stage = 1.931;
  }
  else if (stage==1.931) {
    if (mouseY>=120 && mouseY<=240) stage=1.9322;
    else if (mouseY>=270 && mouseY<=392) stage=1.9323;
    else if (mouseY>=417 && mouseY<=540) stage=1.9321;
  }
  else if (stage==1.9321 || stage==1.9322 || stage==1.9323) {
    if (mouseX>=1003 && mouseX<=1086 && mouseY>=815 && mouseY<=893) stage = 1.94;
  }
  else if (stage==1.94) {
    if (mouseX>=1003 && mouseX<=1086 && mouseY>=815 && mouseY<=893) stage = 1.941;
  }
  else if (stage==1.941) {
    if (mouseY>=120 && mouseY<=240) stage=1.9421;
    else if (mouseY>=270 && mouseY<=392) stage=1.9423;
    else if (mouseY>=417 && mouseY<=540) stage=1.9422;
  }
  else if (stage==1.9421 || stage==1.9422 || stage==1.9423) {
    if (mouseX>=1003 && mouseX<=1086 && mouseY>=815 && mouseY<=893) {
      stage = 1.95;
      bgm1.stop();
      bgm2.play();
      signpaper();
    }
  }
  else if (stage==1.95) {
    if (mouseX>=265 && mouseX<=332 && mouseY>=147 && mouseY<=210) signpaper();
    if (mouseX>=1003 && mouseX<=1086 && mouseY>=815 && mouseY<=893) {
      stage = 1.99;
      bgm2.pause();
      if (ly6<=300) yeah.play();
      else ddiyong.play();
    }
  }
  else if (stage==1.99) {
    if (mouseX>=1003 && mouseX<=1086 && mouseY>=815 && mouseY<=893) {
      stage = 2;
      bgm2.play();
    }
  }
  else if (stage==2) {
    if (mouseX>=1003 && mouseX<=1086 && mouseY>=815 && mouseY<=893) stage = 2.1;
  }
  else if (stage==2.1) {
    if (mouseX>=1003 && mouseX<=1086 && mouseY>=815 && mouseY<=893) stage = 2.2;
  }
  else if (stage==2.2) {
    if (mouseX>=1003 && mouseX<=1086 && mouseY>=815 && mouseY<=893) stage = 2.3;
  }
  else if (stage==2.3) {
    stage = 2.31;
  }
  else if (stage==2.5) {
    if (mouseX>=1003 && mouseX<=1086 && mouseY>=815 && mouseY<=893) {
      camappear();
      bgm2.pause();
      stage = 2.6;
      camerasound.play(3);
      setTimeout(takecapture, 3000);
    }
  }
  else if (stage==2.62) {
    if (mouseX>=1003 && mouseX<=1086 && mouseY>=815 && mouseY<=893) {
      stage = 2.63;
      bgm2.loop();
    }
  }
  else if (stage==2.63) {
    if (mouseX>=1003 && mouseX<=1086 && mouseY>=815 && mouseY<=893) {
      bgm2.loop();
      stage = 2.631;
    }
  }
  else if (stage==2.631) {
    if (mouseX>=1003 && mouseX<=1086 && mouseY>=815 && mouseY<=893) stage = 2.9;
  }
  else if (stage==2.9) {
    if (mouseX>=1003 && mouseX<=1086 && mouseY>=815 && mouseY<=893) {
      stage = 3.1;
      bgm2.stop();
      wow.play();
    }
  }
  else if (stage==3.1) {
    if (mouseX>=1003 && mouseX<=1086 && mouseY>=815 && mouseY<=893) {
      stage = 3.11;
      wow.stop();
    }
  }
  else if (stage==3.11) {
    if (mouseX>=50 && mouseX<=1150 && mouseY>=590 && mouseY<=810) {
      stage = 3.12;
      meme.loop();
    }
  }
  else if (stage==3.12) {
    if (mouseX>=360 && mouseX<=825 && mouseY>=100 && mouseY<=540) stage = 3.13;
  }
  else if (stage==3.13) {
    if (mouseX>=50 && mouseX<=1150 && mouseY>=590 && mouseY<=810) stage = 3.14;
  }
  else if (stage==3.14) {
    if (mouseX>=50 && mouseX<=1150 && mouseY>=590 && mouseY<=810) {
      stage = 3.15;
      msgsound.play();
    }
  }
  else if (stage==3.15) {
    if (mouseX>=1003 && mouseX<=1086 && mouseY>=815 && mouseY<=893) {
      stage = 3.2;
    }
  }
  else if (stage==3.2) {
    if (mouseX>=365 && mouseX<=870 && mouseY>=330 && mouseY<=495) stage = 3.21;
  }
  else if (stage==3.21) {
    if (mouseX>=50 && mouseX<=1150 && mouseY>=590 && mouseY<=810) {
      stage = 3.22;
      msgsound.play(3);
    }
  }
  else if (stage==3.22) {
    if (mouseX>=914 && mouseX<=1063 && mouseY>=675 && mouseY<=785) stage = 3.23;
  }
  else if (stage==3.23) {
    if (mouseX>=1003 && mouseX<=1086 && mouseY>=815 && mouseY<=893) stage = 3.24;
  }
  else if (stage==3.24) {
    if (mouseX>=50 && mouseX<=1150 && mouseY>=590 && mouseY<=810) {
      stage = 3.3;
      
    }
  }
  else if (stage==3.3) {
    if (mouseX>=50 && mouseX<=1150 && mouseY>=590 && mouseY<=810) {
      stage = 3.31;
      meme.stop();
      ddiyong.play();
    }
  }
  else if (stage==3.31) {
    if (mouseX>=1003 && mouseX<=1086 && mouseY>=815 && mouseY<=893) stage = 3.32;
  }
}

function keyPressed() {
  if (stage == 2.31) {
    for (let i=0; i<2; i++) {
      if (keyCode === 65) {
        stage = 2.32;
      }
    }
  }  else if (stage == 2.32) {
    for (let i=0; i<2; i++) {
      if (keyCode === 68) {
        stage = 2.33;
      }
    }
  }  else if (stage == 2.33) {
    for (let i=0; i<2; i++) {
      if (keyCode === LEFT_ARROW) {
        stage = 2.34;
      }
    }
  }  else if (stage == 2.34) {
    for (let i=0; i<2; i++) {
      if (keyCode === RIGHT_ARROW) {
        stage = 2.35;
      }
    }
  }
  else if (stage == 2.4) {
    for (let i = 0; i < 40; i++) {
      if (keyCode === 65) {
        if (blocks1[i].y>280 && blocks1[i].y<580) {
          score2 -= 1;
          bad();
        } else if (blocks1[i].y>=630 && blocks1[i].y<=760) {
          blocks1[i].c = color(255,255,0);
          score2 += 1;
          good();
          drop.play(0,1,6);
        }
      }
    }
    for (let i = 0; i < 25; i++) {
      if (keyCode === 68) {
        if (blocks2[i].y>280 && blocks2[i].y<580) {
          score2 -= 1;
          bad();
        } else if (blocks2[i].y>=630 && blocks2[i].y<=760) {
          blocks2[i].c = color(0,0,255);
          score2 += 1;
          good();
          drop.play(0,1,6);
        }
      }
    }
    for (let i = 0; i < 20; i++) {
      if (keyCode === LEFT_ARROW) {
        if (blocks3[i].y>280 && blocks3[i].y<580) {
          score2 -= 1;
          bad();
        } else if (blocks3[i].y>=630 && blocks3[i].y<=760) {
          blocks3[i].c = color(0,255,0);
          score2 += 1;
          good();
          drop.play(0,1,6);
        }
      }
    }
    for (let i = 0; i < 30; i++) {
      if (keyCode === RIGHT_ARROW) {
        if (blocks4[i].y>280 && blocks4[i].y<580) {
          score2 -= 1;
          bad();
        } else if (blocks4[i].y>=630 && blocks4[i].y<=760) {
          blocks4[i].c = color(252,162,162);
          score2 += 1;
          good();
          drop.play(0,1,6);
        }
      }
    }
  }
}

function good() {
  below();
  textAlign(CENTER);
  textSize(50);
  fill(0);
  text('Good!', width/2, height-30);
  setTimeout(below2, 700);
}

function bad() {
  below();
  textAlign(CENTER);
  textSize(50);
  fill(0);
  text('Bad!', width/2, height-30);
  setTimeout(below2, 700);
}

function below() {
  image(backsmall, 0, 0);
}

function below2() {
  below();
  textAlign(CENTER);
  textSize(50);
  fill(0);
  text('     ', width/2, height-30);
}

function naming() {
  position = ['????????????', '????????????', '????????????', '?????????', '??????', '??????'];
  nickname = ['??????', '??????', '??????', '??????', '??????']
  motto = ['????????? ???????????? ???', '????????? ?????? ?????? ???', '???????????????', '?????? ????????? ??????', '????????? ????????? ?????????'];
  pos = position[int(random(0,6))];
  nick = nickname[int(random(0,5))];
  mot = motto[int(random(0,5))];
}

function frame() {
  strokeWeight(3);
  stroke(0);
  fill(255);
  for (let i = 0; i < 4; i++) {
    rect(260 + i * 170, 170, 170, height-270);
  }
  line(260, height-185, 940, height-185);
}

function blocksample() {
  for (let i=0; i<3; i++) {
    block1sample[i] = new Block(261, -10*i-10, color(255, 255, 220), 'a');
    block2sample[i] = new Block(431, -10*i-5, color(200, 200, 255), 'd');
    block3sample[i] = new Block(601, -10*i-5, color(200, 255, 200), '???');
    block4sample[i] = new Block(771, -10*i-5, color(255, 200, 200), '???');
  }
}

function blocksampledown() {
  if (stage == 2.31) {
    for (let i=0; i<3; i++) {
      block1sample[i].move();
      if (block1sample[i].y <= 718) block1sample[i].display();
    }
  } else if (stage == 2.32) {
    for (let i=0; i<3; i++) {
      block2sample[i].move();
      if (block2sample[i].y <= 718) block2sample[i].display();
    }
  } else if (stage == 2.33) {
    for (let i=0; i<2; i++) {
      block3sample[i].move();
      if (block3sample[i].y <= 718) block3sample[i].display();
    }
  } else if (stage == 2.34) {
    for (let i=0; i<3; i++) {
      block4sample[i].move();
      if (block4sample[i].y <= 718) block4sample[i].display();
    }
  }
}

function blocking() {
  for (let i = 0; i < 40; i++) {
    blocks1[i] = new Block(261, 250 - (i * 1000 + random(200)), color(255, 255, 220), 'a');
  }

  for (let i = 0; i < 30 ; i++) {
    blocks2[i] = new Block(431, 250 - (i * 500 + random(50)), color(200, 200, 255), 'd');
  }
  
  for (let i = 0; i < 25; i++) {
    blocks3[i] = new Block(601, 200 - (i * 600 + random(100)), color(200, 255, 200), '???');
  }
  
  for (let i = 0; i < 30; i++) {
    blocks4[i] = new Block(771, 250 - (i * 800 + random(200)), color(255, 200, 200), '???');
  }
}

function blockdown() {
  for (let i = 0; i < 40; i++) {
    if (score2 < 30) {
      blocks1[i].move();
      if (blocks1[i].y <= 718) blocks1[i].display();
    } else {
      blocks1[i].speed = 7.2;
      blocks1[i].move();
      if (blocks1[i].y <= 718) blocks1[i].display();
    }
  }

  for (let i = 0; i < 30; i++) {
    if (score2 < 30) {
      blocks2[i].move();
      if (blocks2[i].y <= 718) blocks2[i].display();
    } else {
      blocks2[i].speed = 7.2;
      blocks2[i].move();
      if (blocks2[i].y <= 718) blocks2[i].display();
    }
  }

  for (let i = 0; i < 25; i++) {
    if (score2 < 30) {
      blocks3[i].move();
      if (blocks3[i].y <= 718) blocks3[i].display();
    } else {
      blocks3[i].speed = 7.2;
      blocks3[i].move();
      if (blocks3[i].y <= 718) blocks3[i].display();
    }
  }

  for (let i = 0; i < 30; i++) {
    if (score2 < 30) {
      blocks4[i].move();
      if (blocks4[i].y <= 718) blocks4[i].display();
    } else {
      blocks4[i].speed = 7.2;
      blocks4[i].move();
      if (blocks4[i].y <= 718) blocks4[i].display();
    }
  }
}

function fantimecount() {
  stroke(0);
  strokeWeight(3);
  fill(255);
  rect(35, 100, 40, 360, 40);
  fill(192, 88, 137);
  fantimey += 0.2;
  rect(35, fantimey, 40, 460-fantimey, 40);
  
  if (fantimey >=460) fantimey = 460;
  noStroke();
  textAlign(CENTER);
  textSize(35);
  fill(0);
  text(fantimer, 54, 80);
  if (frameCount % 60 == 0 && fantimer > 0) fantimer --;
  
  if (fantimer==0) {
    stage = 1.5;
    bgm2.play();
  }
}

function timecount1() {
  noFill();
  strokeWeight(5);
  stroke(255, 0, 0);
  ellipse(100,100,100,100);
  noStroke();
  textAlign(CENTER);
  textSize(50);
  fill(255, 0, 0);
  text(camtimer1, 100, 110);
  if (frameCount % 60 == 0 && camtimer1 > 0) camtimer1 --;
}
function timecount2() {
  noFill();
  strokeWeight(5);
  stroke(255, 0, 0);
  ellipse(100,100,100,100);
  noStroke();
  textAlign(CENTER);
  textSize(50);
  fill(255, 0, 0);
  text(camtimer2, 100, 110);
  if (frameCount % 60 == 0 && camtimer2 > 0) camtimer2 --;
}
function timecount3() {
  noFill();
  strokeWeight(5);
  stroke(255, 0, 0);
  ellipse(100,100,100,100);
  noStroke();
  textAlign(CENTER);
  textSize(50);
  fill(255, 0, 0);
  text(camtimer3, 100, 110);
  if (frameCount % 60 == 0 && camtimer3 > 0) camtimer3 --;
}

function camappear() {
  cam = createCapture(VIDEO);
  cam.size(640,480);
  cam.hide();
  
  sx1 = random(-570, -400);
  sy1 = random(-300, -250);
  sx2 = random(-850, -700);
  sy2 = random(-700, -600);
  sx3 = random(-500, -350);
  sy3 = random(-500, -420);
}

function takephoto1() {
  push();
  translate(width, 0);
  scale(-1, 1);
  image(cam, 0, 0, 1200, 900);
  image(penlayer, 0, 0);
  pop();
  image(blankcam, sx1, sy1, 1120-sx1*3, 900-sy1*3.5);
}
function takephoto2() {
  push();
  translate(width, 0);
  scale(-1, 1);
  image(cam, 0, 0, 1200, 900);
  image(penlayer, 0, 0);
  pop();
  image(blankcam, sx2, sy2, 300-sx2*2.5, -400-sy2*3.7);
}
function takephoto3() {
  push();
  translate(width, 0);
  scale(-1, 1);
  image(cam, 0, 0, 1200, 900);
  image(penlayer, 0, 0);
  pop();
  image(blankcam, sx3, sy3, 1200-sx3*2, -300-sy3*5);
}

function takecapture(){
  snapshots.push(cam.get());
  print(snapshots[snapshots.length-1]);
  setTimeout(nextphoto, 1500);
}

function nextphoto() {
  if (stage==2.6) {
    camappear();
    stage=2.61;
    camerasound.play(2);
    setTimeout(takecapture, 2000);
  } else if (stage==2.61) {
    camappear();
    stage=2.62;
    camerasound.play(2);
    setTimeout(takecapture, 2000);
  }
}

function imgappear() {
  stage = 2.5;
  bgm2.play();
}

function gamerealstart() {
  bgm2.pause();
  stage = 2.4;
  
  camappear();
  if (songnum==0) {
    ive.play();
    ive.onended(imgappear);
  }  else if (songnum==1) {
    gidle.play();
    gidle.onended(imgappear);
  }  else {
    snsd.play();
    snsd.onended(imgappear);
  }
}

function fanover() {
  if (mouseX>=288 && mouseX<=405 && mouseY>=345 && mouseY<=575) {
    image(fan1, 0, 0);
    image(leftmal, 0, 0);
    textAlign(CENTER);
    noStroke();
    fill(0);
    textSize(15);
    text('- ???????????????\n- ?????? ???????????? ???\n?????? ????????????\n- ????????? ?????? ??? ?????? ???', 185, 555);
  }
  if (mouseX>=375 && mouseX<=475 && mouseY>=91 && mouseY<=315) {
    image(fan2, 0, 0);
    image(leftmal, 75, -260);
    noStroke();
    fill(0);
    textSize(18);
    text('- ?????? ?????????\n- ????????? ????????? ??????\n- ?????? ?????? ??????', 260, 303);
  }
  if (mouseX>=530 && mouseX<=635 && mouseY>=92 && mouseY<=316) {
    image(fan3, 0, 0);
    image(rightmal, -310, 0);
    noStroke();
    fill(0);
    textSize(20);
    text('- ?????????\n- ?????? ?????? ?????????\n?????? ?????????\n- ??????', 753, 270);
  }
  if (mouseX>=641 && mouseX<=740 && mouseY>=336 && mouseY<=579) {
    image(fan4, 0, 0);
    image(leftmal, 320, 0);
    noStroke();
    fill(0);
    textSize(16);
    text('- ?????????\n- ?????? ???????????? ?????????\n- ???????????? ??????\n?????? ????????????', 505, 555);
  }
  if (mouseX>=786 && mouseX<=905 && mouseY>=343 && mouseY<=567) {
    image(fan5, 0, 0);
    image(rightmal, -40, 270);
    noStroke();
    fill(0);
    textSize(20);
    text('- ?????????\n- ?????? ?????????\n- ?????? ?????? ??????', 1023, 550);
  }
  if (mouseX>=860 && mouseX<=965 && mouseY>=85 && mouseY<=320) {
    image(fan6, 0, 0);
    image(rightmal, 10, 0);
    noStroke();
    fill(0);
    textSize(16.5);
    text('- ?????????\n- ??? ??????????????? ?????? ???\n- ?????? ??????????????? ?????????', 1075, 285);
  }
}

function gauge() {
  fill(0);
  noStroke();
  textSize(27);
  text('?????????', 85, 123);
  stroke(0);
  strokeWeight(3);
  fill(255);
  rect(50,150,70,400,30); // 150~550
}

function blink() {
  if (frameCount%60>=0 && frameCount%60<=30) {
    image(tri, 0, 0);
  }
}

function ansmaking() {
  qst0 = ['?????? ??? ?????? ????????? ?????? ???????', '??? ??? ?????? ??????????', '??? ?????? ????????? ???????'];
  ans0 = ['??? ??? ??? ?????? ????????? ????????? ??????????!', '???? ?????? ???~~?!?!', '???.. ?????? ???????????? ???????????????', '????????? ??? ?????????..? ???~ ??????? ????????????', '?????? ???????????? ????????? ?????????????!', '????????? ??? ?????? ????????? ???????????? ??????', '??? ???????????? ??????~ ??? ??????????????? ????????????', '??? ??? ??????????', '??? ????????? ?????? ?????? ??????!!?'];
  react0 = ['??????????????? ?????? ?????? ??? ?????? ??????????????? ??????', '?????????! ??????! ><', '??? ?????? ?????????^^.. ?????? ??????????????????..', '?????? ??????.. ?????? ?????????..?', '??? ?????? ?????? ???????????? ???????????? ????????????!', '??? ????????? ????????? ??? ????????????..???????', '?????????.. ????????? ???????????? ????????? ??????..???', '???..? (??? ???????????? ?????????..)', '??? ?????? ?????? ????????? ???????????? ?????? ><'];
  
  qst1 = ['?????? ??? ?????? ??????????', '?????? ??? ?????? ????????? ??? ??????????', '??????! ????????? ?????? ?????? vs ?????? ??????'];
  ans1 =  ['??????~ ?????? ??????????', '??? ?????? ?????????~ ?????? ?????? ????????? ???', '??? ?????? ?????????.. ??? ??? ????', '??? ?????? ?????? ?????????~?', '??? ?????? ?????????!! ?????? ?????? ?????????', '?????? ????????? ?????? ?????????!', '??? ??? ??????~~', ' ?????? ????????? ?????????????????? ?????? ??????', '?????? ????????? ???????????? ??????!'];
  react1 = ['??? ??????????????? ?????????', '??? ?????? ????????? ??? ??? ????????? ?????? ???', '???.. ??? ????????? ????????? ??? ????????? ??????????????????;', '??? ?????? ?????? ?????? ????????? ??????...', '??? ?????????????????? >< ?????????..', '????????? ????????? ?????? ?????? ????????????!', '?????? ????????? ??? ???????????? ??????^^~', '???.. ?????? ????????? ?????? ?????????..', '??? ???????????? ?????? ?????? ?????? ?????????~?~?'];
  
  qst2 = ['??? ?????? ????????? ???????????????', '??? ?????? ?????? ??????????', '????????? ???????????? ??? ?????? ????????? ??????!'];
  ans2 = ['????????????????????? ????????????!!', '??????~ ??????????????????~?', '??? ?????????? ????????? ??????', '??? ??????????', '?????? ??????????????? ???????????????.. ??????????????? ??????', '?????? ?????? ????????? ?????? ???????????? ??? ????????????!', '?????? ?????? ?????? ?????????????????? ???????????? ??????', '????????????? ????????? ??? ????????????.. ?????? ??????~', '?????? ?????? ?????? ??? ???????????? ???????????? ??????'];
  react2 = ['??????.. ????????? ?????????..??????', '?????? ?????? ?????????.. ??????', '???.. ?????? ??? ??? ??????.. ???', '???? ???..', '??????????????????! ?????? ?????? ??? ????????????', '??????! (?????? ?????? ?????? ?????????..)', '????????? ?????? ??????..??? ??? ?????? ???..??????', '?????? ?????? ????????? ???????????? ???????????????!', '??? ????????????..??????'];
}

function fanagain() {
  if (fannum==0) {
    fans = [1,2];
    fannum2 = int(random(0,2));
  } else if (fannum==1) {
    fans = [0,2];
    fannum2 = int(random(0,2));
  } else {
    fans = [1,2];
    fannum2 = int(random(0,2));
  }
}

function signpaper() {
  image(sign, 0, 0);
  fill(0);
  noStroke();
  textSize(33);
  textAlign(CENTER);
  fill(192, 88, 137);
  text('???????????? ????????? ????????????!', 630, 180);
  fill(0);
  text('To. ???', 350, 260);
  text('From. '+nick, 840, 750);
  image(buttons, 0, 0);
}

function buttonchange() {
  image(buttons, 0, 0);
  if (mouseX>=1097 && mouseX<=1182 && mouseY>=815 && mouseY<=893) image(click_home, 0, 0);
  else if (mouseX>=1003 && mouseX<=1086 && mouseY>=815 && mouseY<=893) image(click_next, 0, 0); 
}

function fanpicture() {
  if (fannum == 0) image(bigfan1, 0, 0);
  else if (fannum == 1) image(fan2basic, 0, 0);
  else if (fannum == 2) image(fan3basic, 0, 0);
}

function fanpicture2() {
  if (fannum2 == 0) image(bigfan1, 0, 0);
  else if (fannum2 == 1) image(fan2basic, 0, 0);
  else if (fannum2 == 2) image(fan3basic, 0, 0);
}

function fansmile() {
  if (fannum == 0) image(fan1good, 0, 0);
  else if (fannum == 1) image(fan2good, 0, 0);
  else if (fannum == 2) image(fan3good, 0, 0);
}

function fansmile2() {
  if (fannum2 == 0) image(fan1good, 0, 0);
  else if (fannum2 == 1) image(fan2good, 0, 0);
  else if (fannum2 == 2) image(fan3good, 0, 0);
}

function fancry() {
  if (fannum == 0) image(fan1bad, 0, 0);
  else if (fannum == 1) image(fan2bad, 0, 0);
  else if (fannum == 2) image(fan3bad, 0, 0);
}

function fancry2() {
  if (fannum2 == 0) image(fan1bad, 0, 0);
  else if (fannum2 == 1) image(fan2bad, 0, 0);
  else if (fannum2 == 2) image(fan3bad, 0, 0);
}

function fanquestion() {
  let fanqst = [qst0, qst1, qst2]
  if (stage == 1.6) {
    idol14 = new Speaker('???', 610, fanqst[fannum][0], 720);
    idol14.display();
  } else if (stage == 1.7) {
    idol15 = new Speaker('???', 610, fanqst[fannum][1], 720);
    idol15.display();
  } else if (stage == 1.8) {
    idol16 = new Speaker('???', 610, fanqst[fannum][2], 720);
    idol16.display();
  } else if (stage == 1.9) {
    idol19 = new Speaker('???', 610, fanqst[fannum2][0], 720);
    idol19.display();
  } else if (stage == 1.93) {
    idol193 = new Speaker('???', 610, fanqst[fannum2][1], 720);
    idol193.display();
  } else if (stage == 1.94) {
    idol194 = new Speaker('???', 610, fanqst[fannum2][2], 720);
    idol194.display();
  }
}

function fananswer() {
  textSize(30);
  noStroke();
  fill(0);
  textAlign(CENTER);
  let fanans = [ans0, ans1, ans2]
  if (stage == 1.61) {
    text(fanans[fannum][0], width/2+30, 196);
    text(fanans[fannum][1], width/2+30, 340);
    text(fanans[fannum][2], width/2+30, 489);
  } else if (stage == 1.71) {
    text(fanans[fannum][3], width/2+30, 196);
    text(fanans[fannum][4], width/2+30, 340);
    text(fanans[fannum][5], width/2+30, 489);
  } else if (stage == 1.81) {
    text(fanans[fannum][6], width/2+30, 196);
    text(fanans[fannum][7], width/2+30, 340);
    text(fanans[fannum][8], width/2+30, 489);
  } else if (stage == 1.91) {
    text(fanans[fannum2][1], width/2+30, 196);
    text(fanans[fannum2][2], width/2+30, 340);
    text(fanans[fannum2][0], width/2+30, 489);
  } else if (stage == 1.931) {
    text(fanans[fannum2][3], width/2+30, 196);
    text(fanans[fannum2][5], width/2+30, 340);
    text(fanans[fannum2][4], width/2+30, 489);
  } else if (stage == 1.941) {
    text(fanans[fannum2][8], width/2+30, 196);
    text(fanans[fannum2][6], width/2+30, 340);
    text(fanans[fannum2][7], width/2+30, 489);
  }
}

function fanreaction() {
  let fanreact = [react0, react1, react2]
  if (stage == 1.621) {
    idol141 = new Speaker('???', 610, fanreact[fannum][1], 720);
    idol141.display();
  } else if (stage == 1.622) {
    idol142 = new Speaker('???', 610, fanreact[fannum][2], 720);
    idol142.display();
  } else if (stage == 1.623) {
    idol143 = new Speaker('???', 610, fanreact[fannum][0], 720);
    idol143.display();
  } else if (stage == 1.721) {
    idol151 = new Speaker('???', 610, fanreact[fannum][4], 720);
    idol151.display();
  } else if (stage == 1.722) {
    idol152 = new Speaker('???', 610, fanreact[fannum][3], 720);
    idol152.display();
  } else if (stage == 1.723) {
    idol153 = new Speaker('???', 610, fanreact[fannum][5], 720);
    idol153.display();
  } else if (stage == 1.821) {
    idol161 = new Speaker('???', 610, fanreact[fannum][8], 720);
    idol161.display();
  } else if (stage == 1.822) {
    idol162 = new Speaker('???', 610, fanreact[fannum][7], 720);
    idol162.display();
  } else if (stage == 1.823) {
    idol163 = new Speaker('???', 610, fanreact[fannum][6], 720);
    idol163.display();
  } else if (stage == 1.921) {
    idol1921 = new Speaker('???', 610, fanreact[fannum2][1], 720);
    idol1921.display();
  } else if (stage == 1.922) {
    idol1922 = new Speaker('???', 610, fanreact[fannum2][2], 720);
    idol1922.display();
  } else if (stage == 1.923) {
    idol1923 = new Speaker('???', 610, fanreact[fannum2][0], 720);
    idol1923.display();
  } else if (stage == 1.9321) {
    idol19321 = new Speaker('???', 610, fanreact[fannum2][4], 720);
    idol19321.display();
  } else if (stage == 1.9322) {
    idol19322 = new Speaker('???', 610, fanreact[fannum2][3], 720);
    idol19322.display();
  } else if (stage == 1.9323) {
    idol19323 = new Speaker('???', 610, fanreact[fannum2][5], 720);
    idol19323.display();
  } else if (stage == 1.9421) {
    idol19421 = new Speaker('???', 610, fanreact[fannum2][8], 720);
    idol19421.display();
  } else if (stage == 1.9422) {
    idol19422 = new Speaker('???', 610, fanreact[fannum2][7], 720);
    idol19422.display();
  } else if (stage == 1.9423) {
    idol19423 = new Speaker('???', 610, fanreact[fannum2][6], 720);
    idol19423.display();
  }
}