var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["8daf3093-6d13-4db6-840d-ad7cac9c93b6","20f920ea-7ed0-47e7-a497-bf4b62710305","5bdb3132-eab0-47fd-974d-419edcc75f78","9e75fc21-4dc9-4a7a-896d-9677de2a0aa5","b6491436-648e-466b-9310-007c33f791d4","95e9175f-2ba5-472c-b6d0-3c561618e9f0","224d7330-6ec1-40d8-98a4-a483819f9550","71dacd64-05cd-4e76-aa02-53148d477d28"],"propsByKey":{"8daf3093-6d13-4db6-840d-ad7cac9c93b6":{"name":"bg","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"nBxpLy2vQCDY7E5mYp31jb5mD7ctuw0v","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/8daf3093-6d13-4db6-840d-ad7cac9c93b6.png"},"20f920ea-7ed0-47e7-a497-bf4b62710305":{"name":"chick","sourceUrl":null,"frameSize":{"x":288,"y":254},"frameCount":1,"looping":true,"frameDelay":12,"version":"iSaWfpID3RB06rjr0XGDUVsUmgcR6d3y","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":288,"y":254},"rootRelativePath":"assets/20f920ea-7ed0-47e7-a497-bf4b62710305.png"},"5bdb3132-eab0-47fd-974d-419edcc75f78":{"name":"chick_copy_1","sourceUrl":null,"frameSize":{"x":288,"y":254},"frameCount":1,"looping":true,"frameDelay":12,"version":"_cpA36eNd5hzjdNt_QbdEaea_c65GOEs","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":288,"y":254},"rootRelativePath":"assets/5bdb3132-eab0-47fd-974d-419edcc75f78.png"},"9e75fc21-4dc9-4a7a-896d-9677de2a0aa5":{"name":"hunter.png_1","sourceUrl":null,"frameSize":{"x":121,"y":194},"frameCount":1,"looping":true,"frameDelay":12,"version":"69Ytm7wtLPmDL8tVf7Tz_xd4zS1wzx2z","loadedFromSource":true,"saved":true,"sourceSize":{"x":121,"y":194},"rootRelativePath":"assets/9e75fc21-4dc9-4a7a-896d-9677de2a0aa5.png"},"b6491436-648e-466b-9310-007c33f791d4":{"name":"hunter1.png_1","sourceUrl":"assets/v3/animations/A9Xl3ODtDDWewVDerPjm05UiofSke0hE_8zxf5Lc-Nk/b6491436-648e-466b-9310-007c33f791d4.png","frameSize":{"x":148,"y":125},"frameCount":1,"looping":true,"frameDelay":4,"version":"aMFmcU2wVukmjrJPOrWxolG9Nkwjjvf6","loadedFromSource":true,"saved":true,"sourceSize":{"x":148,"y":125},"rootRelativePath":"assets/v3/animations/A9Xl3ODtDDWewVDerPjm05UiofSke0hE_8zxf5Lc-Nk/b6491436-648e-466b-9310-007c33f791d4.png"},"95e9175f-2ba5-472c-b6d0-3c561618e9f0":{"name":"hunter1.png_1_copy_1","sourceUrl":null,"frameSize":{"x":148,"y":125},"frameCount":1,"looping":true,"frameDelay":12,"version":"S3OCnlAmlBytveqyBBnHekCpQ8SYZ2t4","loadedFromSource":true,"saved":true,"sourceSize":{"x":148,"y":125},"rootRelativePath":"assets/95e9175f-2ba5-472c-b6d0-3c561618e9f0.png"},"224d7330-6ec1-40d8-98a4-a483819f9550":{"name":"arrow","sourceUrl":null,"frameSize":{"x":40,"y":5},"frameCount":1,"looping":true,"frameDelay":12,"version":".D8d33ShW.NySWDJlk9vAAKV8T4QOfZ7","loadedFromSource":true,"saved":true,"sourceSize":{"x":40,"y":5},"rootRelativePath":"assets/224d7330-6ec1-40d8-98a4-a483819f9550.png"},"71dacd64-05cd-4e76-aa02-53148d477d28":{"name":"bg1.png","sourceUrl":null,"frameSize":{"x":148,"y":125},"frameCount":1,"looping":true,"frameDelay":12,"version":"3WeqNJ_3pWbRck9mQLrU36RFTydj2Q7T","loadedFromSource":true,"saved":true,"sourceSize":{"x":148,"y":125},"rootRelativePath":"assets/71dacd64-05cd-4e76-aa02-53148d477d28.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----


//sirisha sanatha
//authorised by sirishasanatha@gmail.com

var bg=createSprite(200,200,400,400);
bg.setAnimation("bg1.png");
bg.scale=6;
var hunter=createSprite(340,150,20,50);
 hunter.setAnimation("hunter1.png_1");
hunter.rotateToDirection=true;

var player=createSprite(25,200,5,5);
player.setAnimation("chick");

player.scale=0.17;
player.setSpeedAndDirection(3, 45);

    


//variable for score
var deaths=0;


var arrowGroup=new Group();
// gameState="play";

function draw() {
  background("white");
 bg.velocityX=-2;
 //for bg scrolling effect
 if(bg.x<0){
   bg.x=200;
 }
 
 
 //player controls
 if(keyDown("up")){
    player.y=player.y-3;
  } 
  if(keyDown("down")){
    player.y=player.y+3;
  }
  if(keyDown("right")){
    player.x=player.x+3;
  }
  if(keyDown("left")){
    player.x=player.x-3;
  } 


 
 hunter.x=World.mouseX;  //to make hunter move

 hunter.y=World.mouseY;
 
  if(hunter.x<200){
   hunter.setAnimation("hunter1.png_1_copy_1");
   if(keyDown("space")){
  createArrow2();
    } 
 }
else{
   hunter.setAnimation("hunter1.png_1"); 
   if(keyDown("space")){
  createArrow1();
     } 
  }



 




//release arrow when you hit space

//if(keyDown("space")){
//  createArrow1();
//}  
 

//checking arrows hitting

if(arrowGroup.isTouching(player) ){

    player.visible=false;
    player.setAnimation("chick_copy_1");
  arrowGroup.destroyEach();
 
  deaths=deaths+1;

  playSound("assets/category_animals/chick.mp3");

  }
  else{
    player.visible=true;
    player.setAnimation("chick");
  }







createEdgeSprites();

 player.bounceOff(edges);
 //hunter.collide(edges);
   drawSprites();
   fill("white");
   textSize(15);
  text("deaths:"+deaths,50,20);


}


//function to create arrow
function createArrow1(){
 var arrow= createSprite(380,100,10,10);
 arrow.setAnimation("arrow");
 arrow.velocityX=-8;
arrow.y=hunter.y; 
arrowGroup.add(arrow);  //all arrows belong to this group
}
            
function createArrow2(){
 var arrow= createSprite(30,100,10,10);
 arrow.setAnimation("arrow");
 arrow.velocityX=8;
arrow.y=hunter.y; 
arrowGroup.add(arrow);  //all arrows belong to this group
}


// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
