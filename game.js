const app = new PIXI.Application({
    width: window.innerWidth,
    height: window.innerHeight,
    backgroundColor: 0xffffff, 
    resolution: window.devicePixelRatio || 1,
});
const w = window.innerWidth;
const h = window.innerHeight - 550;

document.body.appendChild(app.view);

//green bloks

function monsterBlock(x, y){

    const block = PIXI.Sprite.from("squar.png");
    const monster =  PIXI.Sprite.from("monster.png");

    monster.height = 50;
    monster.width = 50;
    monster.x = block.x + 10;
    monster.y = block.y + 10;

    guessBlock = new PIXI.Container();
    guessBlock.addChild(block);
    guessBlock.addChild(monster);
    guessBlock.interactive = true;

    guessBlock.x = x;
    guessBlock.y = y;

    return guessBlock;

}



for (let i = 0; i < 16; i++) {
  
  let monsterBlock_M  = monsterBlock(w / 2 + 125 * (i % 4) - 4 / 2 * 125,
   h - h / 3 + 125 * Math.floor(i / 4,));
  
 app.stage.addChild(monsterBlock_M);
   
}

//for heroes

function kthulhu_h() {
    let kthulhu = new PIXI.Sprite.from("cthulhu.png")

    kthulhu.height = 150;
    kthulhu.width = 150;
    kthulhu.x = guessBlock / 2;
    kthulhu.y = guessBlock / 2;

    return kthulhu;
}

let khthulhumonster = kthulhu_h();
app.stage.addChild(khthulhumonster);

//for monster zone
function zone() {
function monsterBlock2(x, y){

    const block2 = PIXI.Sprite.from("monsterzone.png");
    const monster2 =  PIXI.Sprite.from("monster.png");

    monster2.height = 50;
    monster2.width = 50;
    monster2.x = block2.x + 10;
    monster2.y = block2.y + 10;

    guessBlock2 = new PIXI.Container();
    guessBlock2.addChild(block2);
    guessBlock2.addChild(monster2);
    guessBlock2.interactive = true;

    guessBlock2.x = x;
    guessBlock2.y = y;

    return guessBlock2;

}



for (let i = 0; i < 4; i++) {
  
    const w2 = window.innerWidth - 705;
    const h2 = window.innerHeight - 550;

    let monsterBlock_M2  = monsterBlock2(w2 / 2 + 125 * (i % 1) - 1 / 2 * 125,
    h2 - h2 / 3 + 125 * Math.floor(i / 1,));
  
    app.stage.addChild(monsterBlock_M2);
   
}


}
const forzone = zone()
app.stage.addChild(forzone);



// for monster zone2
const forzone2 = forzone;

app.stage.addChild(forzone2);