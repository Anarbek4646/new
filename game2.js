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
  

    

    guessBlock = new PIXI.Container();
    guessBlock.addChild(block);
 
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


    let kthulhu = new PIXI.Sprite.from("cthulhu.png")
    kthulhu.anchor.set(0.5);
    kthulhu.height = 150;
    kthulhu.width = 150;
    kthulhu.x = app.view.width / 2;
    kthulhu.y = app.view.height / 2;




    
    //FOR MOUSE
    

    app.stage.interactive = true;
    app.stage.on("pointermove", movePlayer);
    
 
function movePlayer(e) {
    let pos = e.data.global;

    kthulhu.x = pos.x;
    kthulhu.y = pos.y;
}

 //FOR CLICK
   var score = 1;
   const scoreText = new PIXI.Text(score);
   

    scoreText.anchor.set(0.5);
    scoreText.x = 90;
    scoreText.y = 120;

    kthulhu.interactive = true;
    kthulhu.on("mousedown", onClick);
    kthulhu.on("mouseup", function(){
        kthulhu.scale.x *= 1.05;
        kthulhu.scale.y *= 1.05;
    });

   app.stage.addChild(kthulhu);
   app.stage.addChild(scoreText);

function onClick(){
    score++;
    kthulhu.scale.x /= 1.05;
    kthulhu.scale.y /= 1.05;
    scoreText.text  = score;
}

 



         
        











//for red zone

function monsterBlock2(x, y){

    const block2 = PIXI.Sprite.from("monsterzone.png");
    

   
          
    guessBlock2 = new PIXI.Container();
    guessBlock2.addChild(block2);

    


    guessBlock2.interactive = true;

    guessBlock2.x = x;
    guessBlock2.y = y;

    return guessBlock2;

}



for (let i = 0; i < 4; i++) {
  
    const w2 = window.innerWidth + 625;
    const h2 = window.innerHeight - 550;

    let monsterBlock_M2  = monsterBlock2(w2 / 2 + 125 * (i % 1) - 1 / 2 * 125,
    h2 - h2 / 3 + 125 * Math.floor(i / 1,));
  
    app.stage.addChild(monsterBlock_M2);
   
}


// for red zone2

    function monsterBlock3(x, y){
    
        const block3 = PIXI.Sprite.from("monsterzone.png");
        
    
       
    
        guessBlock3 = new PIXI.Container();
        guessBlock3.addChild(block3);
       


        guessBlock3.interactive = true;
    
        guessBlock3.x = x;
        guessBlock3.y = y;
    
        return guessBlock3;
    
    }
    
    
    
    for (let i = 0; i < 4; i++) {
      
        const w3 = window.innerWidth - 705;
        const h3 = window.innerHeight - 550;
        
        let monsterBlock_M3  = monsterBlock3(w3 / 2 + 125 * (i % 1) - 1 / 2 * 125,
        h3 - h3 / 3 + 125 * Math.floor(i / 1));
        

        let forx = w3;
        let fory = h3;
        console.log(forx, fory);
        app.stage.addChild(monsterBlock_M3);
       

       
    }
    // function for random monster 
    function randommonster(){

    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
    }
    let randomforquantity = getRandomIntInclusive(0, 4);
    
     
   

    function hours1(posx, posy){
    let hourse = new PIXI.Sprite.from("monster.png");
    hourse.width = 50;
    hourse.height = 50;
    
    hourse.x = posx;
    hourse.y = posy;

    return hourse;
    }
    
    
    for (let i = 0; i < randomforquantity; i++) {
        let randomforpositionx = getRandomIntInclusive(100, 600);
        let randomforpositiony = getRandomIntInclusive(100, 600);


        let ggg = hours1(randomforpositionx, randomforpositiony);
       app.stage.addChild(ggg);
      
    }
}
        let sss = randommonster();
        
        app.stage.addChild(sss); 

        //example
        
        let example = new PIXI.Sprite.from("monster.png");
        let exampleforbox = new PIXI.Sprite.from("squar.png");
        app.stage.addChild(exampleforbox);