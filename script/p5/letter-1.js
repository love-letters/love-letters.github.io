//grid template from Konrad: https://editor.p5js.org/krawc/sketches/NntLluVhQ

//Butter: 67.5, 93.3, 88.2
//Peach: hsl(1.6, 90.4, 75.5)
//Midnight Blue: hsl(240, 63.5, 26.9)
//Brown: hsl(27.5, 22.4, 42)
//Gray: hsl(0, 0, 82.7)
//Chartreuse: hsl(67.5, 100, 50)

let canvas;
let colors;
let StrokeColor;

let alphabet = {};

  function setup() {
//     let ratio = 4800/500;

//   //scale up for print
//   createCanvas(500*ratio, 700*ratio);
//   scale(ratio);

    var canvas = createCanvas(500,700);
    canvas.parent('p5-sketch-holder');

    colorMode(HSL);
    //blue bg
    background(240, 63.5, 26.9);
    let colors = [color(67.5, 100, 50), color(27.5, 22.4, 42),
                  color(1.6, 90.4, 75.5),color(0,0,82.7)];
    strokeWeight(2);

    //gray bg
    // background(0,0,82.7);
    // let colors = [color(67.5, 100, 50), color(27.5, 22.4, 42),
    //               color(1.6, 90.4, 75.5),color(240, 63.5, 26.9)];

    //let colors = [color(0), color(0)];

    //let strokeColors = random(colors);
    ellipseMode(CENTER);
   alphabet = {

    a: function(x,y,w,h) {
  stroke(random(colors));
  fill(0);
  ellipse(x+w/2,y+h/4,w/3);
  noFill();
  rect(x,y+h/2,w,h/2);
    },
    b:function(x,y,w,h){
  stroke(random(colors));
  fill(0);
  ellipse(x+w/2,y+h/4,w/3);
  ellipse(x+w/2,y+h,w/3);
    },
    c: function(x,y,w,h){
    stroke(random(colors));
    noFill(0);
    arc(x+w/1.5, y+h/2, w, w, PI/2, -PI/2, PIE);
    },
    d: function(x,y,w,h){
      stroke(random(colors));
      fill(0);
      arc(x+w/3, y+h/2, w, w, -PI/2, PI/2, PIE);

    },
    e: function(x,y,w,h){
     fill(100);
     noStroke();
     textSize(w);
     text('e',x+w/3,y+h);

    },
    f: function(x,y,w,h){
      stroke(random(colors));
    fill(0);
    rect(x,y,w,h/2);
    ellipse(x+w/2,y+h/1.2,w/3);

    },
    g: function(x,y,w,h){
    stroke(random(colors));
    noFill(0);
    rect(x,y,w/3,h);
    fill(0);
    ellipse(x+w*0.8,y+h*0.8,w/2);
    },
    h: function(x,y,w,h){
    stroke(random(colors));
    noFill();
    rect(x+w/5,y,w*0.6,h);
    },
    i: function(x,y,w,h){
    fill(100);
     noStroke();
    textSize(w);
    text('i',x+w/3,y+h);

    },
    j:function(x,y,w,h){
     stroke(random(colors));
     noFill(0);
     arc(x+w/2, y+h/2, w, h, 0, PI, PIE);

    },
    k: function(x,y,w,h){
      stroke(random(colors));
      noFill();
      rect(x,y,w/3,h);
      ellipse(x+w*0.8,y+h*0.2,w/3);
      ellipse(x+w*0.8,y+h*0.8,w/3);

    },
    l: function(x,y,w,h){
     fill(100);
     noStroke();
     textSize(w);
     text('l',x+w/3,y+h);

    },
    m: function(x,y,w,h){
    stroke(random(colors));
    fill(0);
    ellipse(x+w*0.1,y+h/2,w/4);
    noFill(0);
    ellipse(x+w*0.5,y+h/2,w/4);
    fill(0);
    ellipse(x+w*0.9,y+h/2,w/4);

    },
    n: function(x,y,w,h){
   stroke(random(colors));
    noFill(0);
    ellipse(x+w*0.3,y+h/2,w/3);
    ellipse(x+w*0.8,y+h/2,w/3);

    },
    o:function(x,y,w,h){
     fill(100);
     noStroke();
     textSize(w);
     text('o',x+w/3,y+h);
    },
    p:function(x,y,w,h){
   stroke(random(colors));
    noFill();
    ellipse(x+w*0.2,y+h*0.8,w/3);
    fill(0);
    arc(x+w*0.5, y+h/2, w, w, -PI/2, PI/2, PIE);
    },
    q:function(x,y,w,h){
    stroke(StrokeColor);
    fill(0);
    ellipse(x+w/2,y+h/2,w*0.6);
    ellipse(x+w,y+h/2,w*0.15);
    },
    r: function(x,y,w,h){
    stroke(random(colors));
    fill(0);
    ellipse(x+w*0.4,y+h*0.4,w*0.7);
    ellipse(x+w*0.9,y+h*0.8,w*0.15);
    },
    s: function(x,y,w,h){
    stroke(random(colors));
    fill(0);
    ellipse(x+w*0.4,y+h/1.3,w/4);
    ellipse(x+w*0.8,y+h/3,w/4);
    },
    t: function(x,y,w,h){
    stroke(random(colors));
    noFill();
    rect(x,y,w,h*0.45);
    ellipse(x+w/2,y+h/1.2,w/3);
    },
    u: function(x,y,w,h){
     fill(100);
     noStroke();
     textSize(w);
     text('u',x+w/3,y+h);

    },
    v: function(x,y,w,h){

     fill(100);
     noStroke();
     textSize(w);
     text('v',x+w/3,y+h);
    },
    w:function(x,y,w,h){
    stroke(random(colors));
    noFill(0);
    ellipse(x+w*0.1,y+h/2,w/4);
    fill(0);
    ellipse(x+w*0.5,y+h/2,w/4);
    noFill(0);
    ellipse(x+w*0.9,y+h/2,w/4);
    },
    x: function(x,y,w,h){
    stroke(random(colors));
    noFill(0);
    ellipse(x+w*0.4,y+h/1.3,w/4);
    ellipse(x+w*0.8,y+h/3,w/4);
    fill(0);
    ellipse(x+w*0.4,y+h/3,w/4);
    ellipse(x+w*0.8,y+h/1.3,w/4);

    },
    y:function(x,y,w,h){
     fill(0);
     textSize(w);
     text('y',x+w/3,y+h)

    },
    z: function(x,y,w,h){
    stroke(random(colors));
    fill(0);
    ellipse(x+w*0.4,y+h/1.3,w/4);
    ellipse(x+w*0.8,y+h/3,w/4);
    noFill(0);
    ellipse(x+w*0.4,y+h/3,w/4);
    ellipse(x+w*0.8,y+h/1.3,w/4);

    },
  };




    var grid = new EasyGrid({
      x: width * 0.05,
      y: height * 0.08,
      width: width * 0.9,
      height: height * 0.9,
      gutter: 8,
      columns: 24,
      rows: 32
    });

    printOut(convertToPrint('iappreciateyoubeingthereformeevenweareindifferentplacesiloveallthelatenightcallswehadirememberbeingsuperstressedoutorhavingabreakdownandicalledyoualmostcryingbutwasalwayssmileyandgenuinelyhappyhangingupbecauseseeingyourfaceandknowinghowmuchyoulovememakesmefeellikeeverythingwillbeokayihaveneverbeenthishappywhenimwithyouandihaveneverbeenthissadeverytimewehavetosaygoodbyeiloveyouevenmorethanicouldhaveimaginedanditsinthismomentofsheersadnessthatirealizedthatbecauseifindhappinessinalotofotherthingsbutthisisthefirsttimethatihavesuchadeepunderstandingofsadnesstherearesomanythingsimissaboutyouthefirsttimeyoukissedmeandeverykisseversinceyourhairyoureyesyoursmilebutthatwillonlymakemelookforwardtoseeingyouagainiloveyou'), grid);

    //printOut(convertToPrint('zażółćgęśląjaźń'), grid);

    //printOut(convertToPrint('lmao'), grid);

  }

  function convertToPrint(txt) {
    var pl_keys = ['a_pl', 'c_pl', 'e_pl', 'l_pl', 'n_pl', 'o_pl', 's_pl', 'z_pl', 'zh_pl'];
    var pl_chars = ['ą', 'ć', 'ę', 'ł', 'ń', 'ó', 'ś', 'ź', 'ż'];
    var string = txt.split('');

    for (var j = 0; j < pl_chars.length; j++) {
      string = string.map(function(x) {
        return x.replace(pl_chars[j], pl_keys[j]);
      });
    }

    return (string);
  }

  function printOut(txtArr, grid) {

    for (var i = 0; i < txtArr.length; i++) {

      //stroke(0, 0, 30);
      noStroke();
      noFill();

      var mod = grid.modules[i];

      var vertices = [
        [mod.x, mod.y],
        [mod.x + (mod.width / 2), mod.y],
        [mod.x + (mod.width), mod.y],
        [mod.x, mod.y + (mod.height / 3)],
        [mod.x + (mod.width / 2), mod.y + (mod.height / 3)],
        [mod.x + (mod.width), mod.y + (mod.height / 3)],
        [mod.x, mod.y + (mod.height * (2 / 3))],
        [mod.x + (mod.width / 2), mod.y + (mod.height * (2 / 3))],
        [mod.x + (mod.width), mod.y + (mod.height * (2 / 3))],
        [mod.x, mod.y + (mod.height)],
        [mod.x + (mod.width / 2), mod.y + (mod.height)],
        [mod.x + (mod.width), mod.y + (mod.height)]
      ];

      rect(mod.x, mod.y, mod.width, mod.height);

      stroke(0, 0, 100);


      alphabet[txtArr[i]]( mod.x, mod.y, mod.width, mod.height);

    }
  }
