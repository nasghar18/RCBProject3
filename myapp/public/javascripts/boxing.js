var stage, w, h, loader;
var player;
var npc;
var playerDirection = "RIGHT";
var playerSTATE = "IDLE"; //
// var randChar = ["assets/Boxer_Sprite_2_edited.png", "assets/Boxer_Sprite_3_edited.png", "assets/Boxer_Sprite_4_edited.png", "assets/Boxer_Sprite_5_edited.png", "assets/Boxer_Sprite_6_edited.png"]
var spriteSheetKahoona="../images/Boxer_Sprite_Sheet_1_edited.png";
// var spriteSheetNinja = randChar[Math.floor( Math.random() * (4-0) + 0 )];
var spriteSheetNinja1="../images/Boxer_Sprite_2_edited.png";
var spriteSheetNinja2="../images/Boxer_Sprite_3_edited.png";
var spriteSheetNinja3="../images/Boxer_Sprite_4_edited.png";
var spriteSheetNinja4="../images/Boxer_Sprite_5_edited.png";
var spriteSheetNinja5="../images/Boxer_Sprite_6_edited.png";

//Holds the display text
var displayTextArray = [];

function play(){
       var audio = document.getElementById("audio");
       audio.play();
               }
function playpunch(){
	var audio = document.getElementById("punchAudio");
	audio.play();
}


function init() {
  stage = new createjs.Stage(document.getElementById("testCanvas"));
  w = stage.canvas.width;
  h = stage.canvas.height;
 

  //load assets
  loader = new createjs.LoadQueue(false);
  loader.on("complete", handleComplete, this);
  loader.crossOrigin = "";
  loader.loadFile({id:"player", src:spriteSheetKahoona});
  loader.loadFile({id:"cpu1", src:spriteSheetNinja1});
  loader.loadFile({id:"cpu2", src:spriteSheetNinja2});
  loader.loadFile({id:"cpu3", src:spriteSheetNinja3});
  loader.loadFile({id:"cpu4", src:spriteSheetNinja4});
  loader.loadFile({id:"cpu5", src:spriteSheetNinja5});
}

 function handleComplete(evt) {
        
		// Define a spritesheet. Note that this data was exported by Zoë.
		var spriteSheet = new createjs.SpriteSheet({
				framerate: 7,
				"images": [loader.getResult("player")],
				"frames":{
					//original w:250 h:125
				    "width": 250,
				    "regY": 1,
				    "height": 125,
				    "regX": -1,
				    "count": 27
				},
				//count 188 is how many moves are on each sprite page
				// define two animations, run (loops, 1.5x speed) and jump (returns to run):
			//Levi is my character's name	
      "animations":{


      				// "Ready": [0, 1, "Ready"],

				    "Melee": [2, 3, "Ready"],
				    "Damage": [24, 25, "Ready"],
				    "Running": [0, 1, "LeviRunCycle"],
				    "LeviRunCycle": [0, 1, "LeviRunCycle"],
				    "LeviWalk": [0, 1, "LeviWalkCycle"],
				    "LeviWalkCycle": [0, 1, "LeviWalkCycle"],
				    "Tired": [24, 26],
				    "Miss": [18, 19, "Ready"],
				    "Dodge": [18, 19, "Ready"],
				    "Ready": [0, 1, "Ready"],
            "TakeHit": [23, 24, "Damage"],
            "Parry": [16, 17, "Dodge"]
				}
			});

		// Define a spritesheet. Note that this data was exported by Zoë.
		var spriteSheet1 = new createjs.SpriteSheet({
				framerate: 7,
				"images": [loader.getResult("cpu1")],
				"frames":{
				    "width": 250,
				    "regY": 1,
				    "height": 125,
				    "regX": -1,
				    "count": 27
				},
				//count 188 is how many moves are on each sprite page
				// define two animations, run (loops, 1.5x speed) and jump (returns to run):
			//Levi is my character's name	
      "animations":{


      				// "Ready": [0, 1, "Ready"],

				    "Melee": [2, 3, "Ready"],
				    "Damage": [24, 25, "Ready"],
				    "Running": [0, 1, "LeviRunCycle"],
				    "LeviRunCycle": [0, 1, "LeviRunCycle"],
				    "LeviWalk": [0, 1, "LeviWalkCycle"],
				    "LeviWalkCycle": [0, 1, "LeviWalkCycle"],
				    "Tired": [24, 26],
				    "Miss": [18, 19, "Ready"],
				    "Dodge": [18, 19, "Ready"],
				    "Ready": [0, 1, "Ready"],
            "TakeHit": [23, 24, "Damage"],
            "Parry": [16, 17, "Dodge"]
				}
			});
		var spriteSheet2 = new createjs.SpriteSheet({
				framerate: 7,
				"images": [loader.getResult("cpu2")],
				"frames":{
				    "width": 250,
				    "regY": 1,
				    "height": 125,
				    "regX": -1,
				    "count": 27
				},
				//count 188 is how many moves are on each sprite page
				// define two animations, run (loops, 1.5x speed) and jump (returns to run):
			//Levi is my character's name	
      "animations":{


      				// "Ready": [0, 1, "Ready"],

				    "Melee": [2, 3, "Ready"],
				    "Damage": [24, 25, "Ready"],
				    "Running": [0, 1, "LeviRunCycle"],
				    "LeviRunCycle": [0, 1, "LeviRunCycle"],
				    "LeviWalk": [0, 1, "LeviWalkCycle"],
				    "LeviWalkCycle": [0, 1, "LeviWalkCycle"],
				    "Tired": [24, 26],
				    "Miss": [18, 19, "Ready"],
				    "Dodge": [18, 19, "Ready"],
				    "Ready": [0, 1, "Ready"],
            "TakeHit": [23, 24, "Damage"],
            "Parry": [16, 17, "Dodge"]
				}
			});
		var spriteSheet3 = new createjs.SpriteSheet({
				framerate: 7,
				"images": [loader.getResult("cpu3")],
				"frames":{
				    "width": 250,
				    "regY": 1,
				    "height": 125,
				    "regX": -1,
				    "count": 27
				},
				//count 188 is how many moves are on each sprite page
				// define two animations, run (loops, 1.5x speed) and jump (returns to run):
			//Levi is my character's name	
      "animations":{


      				// "Ready": [0, 1, "Ready"],

				    "Melee": [2, 3, "Ready"],
				    "Damage": [24, 25, "Ready"],
				    "Running": [0, 1, "LeviRunCycle"],
				    "LeviRunCycle": [0, 1, "LeviRunCycle"],
				    "LeviWalk": [0, 1, "LeviWalkCycle"],
				    "LeviWalkCycle": [0, 1, "LeviWalkCycle"],
				    "Tired": [24, 26],
				    "Miss": [18, 19, "Ready"],
				    "Dodge": [18, 19, "Ready"],
				    "Ready": [0, 1, "Ready"],
            "TakeHit": [23, 24, "Damage"],
            "Parry": [16, 17, "Dodge"]
				}
			});
		var spriteSheet4 = new createjs.SpriteSheet({
				framerate: 7,
				"images": [loader.getResult("cpu4")],
				"frames":{
				    "width": 250,
				    "regY": 1,
				    "height": 125,
				    "regX": -1,
				    "count": 27
				},
				//count 188 is how many moves are on each sprite page
				// define two animations, run (loops, 1.5x speed) and jump (returns to run):
			//Levi is my character's name	
      "animations":{


      				// "Ready": [0, 1, "Ready"],

				    "Melee": [2, 3, "Ready"],
				    "Damage": [24, 25, "Ready"],
				    "Running": [0, 1, "LeviRunCycle"],
				    "LeviRunCycle": [0, 1, "LeviRunCycle"],
				    "LeviWalk": [0, 1, "LeviWalkCycle"],
				    "LeviWalkCycle": [0, 1, "LeviWalkCycle"],
				    "Tired": [24, 26],
				    "Miss": [18, 19, "Ready"],
				    "Dodge": [18, 19, "Ready"],
				    "Ready": [0, 1, "Ready"],
            "TakeHit": [23, 24, "Damage"],
            "Parry": [16, 17, "Dodge"]
				}
			});
		var spriteSheet5 = new createjs.SpriteSheet({
				framerate: 7,
				"images": [loader.getResult("cpu5")],
				"frames":{
				    "width": 250,
				    "regY": 1,
				    "height": 125,
				    "regX": -1,
				    "count": 27
				},
				//count 188 is how many moves are on each sprite page
				// define two animations, run (loops, 1.5x speed) and jump (returns to run):
			//Levi is my character's name	
      "animations":{


      				// "Ready": [0, 1, "Ready"],

				    "Melee": [2, 3, "Ready"],
				    "Damage": [24, 25, "Ready"],
				    "Running": [0, 1, "LeviRunCycle"],
				    "LeviRunCycle": [0, 1, "LeviRunCycle"],
				    "LeviWalk": [0, 1, "LeviWalkCycle"],
				    "LeviWalkCycle": [0, 1, "LeviWalkCycle"],
				    "Tired": [24, 26],
				    "Miss": [18, 19, "Ready"],
				    "Dodge": [18, 19, "Ready"],
				    "Ready": [0, 1, "Ready"],
            "TakeHit": [23, 24, "Damage"],
            "Parry": [16, 17, "Dodge"]
				}
			});

		player = new createjs.Sprite(spriteSheet, "Ready");
		player.x = 150;
		player.y = 225;
   
   npc = new createjs.Sprite(spriteSheet2, "Ready");
   npc.x =625;
   npc.y = 175;
   npc.scaleX *= -1;

		// Add Sprite to the stage, and add it as a listener to Ticker to get updates each frame.

   stage.addChild(npc);
   stage.addChild(player);
		//stage.addEventListener("stagemousedown", handleAttack);
        
    createjs.Ticker.timingMode = createjs.Ticker.RAF;
		createjs.Ticker.addEventListener("tick", tick);
        
	}
//===ENGINE=========================//
function tick(event){
  
  	switch(xKeyHeld){
		case "LEFT":
		if(player.x > 150)
			player.x -= 3;
			break;
		case "RIGHT":
      if(player.x < npc.x - 300)
			player.x += 3;
			break;
	}

	switch(yKeyHeld){
		case "UP":
		if(player.y>150)
		  player.y -= 3;
			//kahoona.scaleX += 0.1;
			//kahoona.scaleY += 0.1;
			break;
		case "DOWN":
			if(player.y<225)
			player.y += 3;
			//kahoona.scaleX *= 1.01;
			//kahoona.scaleY *= 1.01;
			break;
	}

	// for (var i = 0, i<)
  
  //Text animation
  //Add display

  updateText(displayTextArray);
  stage.update(event);
}

//====CONTROLLER=====================//

//document.getElementById("body").onkeydown = handleKeyDown();
//document.onkeyup = handleKeyUp;
document.onkeyup = handleKeyUp.bind(this);
document.onkeydown = handleKeyDown.bind(this);
document.getElementById("testCanvas").onkeydown = handleKeyDown;
//KEYS
	var KEYCODE_ENTER = 13;		
	var KEYCODE_SPACE = 32;		
	var KEYCODE_UP = 38;
	var KEYCODE_DOWN = 40;	
	var KEYCODE_LEFT = 37;		
	var KEYCODE_RIGHT = 39;		
	var KEYCODE_W = 87;			
	var KEYCODE_A = 65;	
	var KEYCODE_D = 68;		
	var KEYCODE_S = 83;

	var xKeyHeld = "NONE";
	var yKeyHeld = "NONE";

//kahoona is the hero model

function handleKeyDown(e){
	//cross browser issues exist
	if (!e) {
		var e = window.event;
	}

//Only move when in idle state
//Attack animation must finish before movement can occur
	switch (e.keyCode) {
     //====SPACE KEY======
		case KEYCODE_SPACE: 
			if(player.currentAnimation != "Melee"){
				player.gotoAndPlay("Melee");
				playerSTATE = "Melee";
				xKeyHeld = yKeyHeld = "NONE";
        
        //hit collision
       
     
        var xDistance = Math.abs(player.x - npc.x);
        //if close enough and hit roll
        if(xDistance < 300){
          if(determineHit(player1, enemy1)){
            npc.gotoAndPlay("TakeHit");
            playpunch();
            var damage = Math.ceil(Math.random() * 6);
            createText(damage.toString(), "#990000", npc);
            damageHP(enemy1, damage);
          }else{
            player.gotoAndPlay("Miss");
            npc.gotoAndPlay("Parry");
            //Creates textd
            createText("Miss", "#3498db", player);
          }
          
        } 
			}//END of if != melee
			break;
    //====*SPACE KEY=======
      
		case KEYCODE_D:
		case KEYCODE_RIGHT:
			runningState("RIGHT");
			break;

		case KEYCODE_A:
		case KEYCODE_LEFT:
			runningState("LEFT");
			break;

		case KEYCODE_W:
		case KEYCODE_UP:
			runningState("UP");
			break;

		case KEYCODE_S:
		case KEYCODE_DOWN:
			runningState("DOWN");
			break;
			
	} 

	// Running state
	function runningState(direction){
		if(player.currentAnimation != "Melee"){
			if(playerSTATE != "RUN"){
				player.gotoAndPlay("Running");
				playerSTATE = "RUN";
			}

			if(direction == "UP" || direction == "DOWN"){
				yKeyHeld = direction;
			}else{
				//FIX DIRECTION CHANGE
				if(playerDirection != direction)
					player.scaleX *= 1;
				playerDirection = direction;
				xKeyHeld = direction;
			}
		}
	}


}

function handleKeyUp(e){
  console.log("keyup");
	if (!e) { //For browser compatability
		var e = window.event;
	}

	switch (e.keyCode) {

		case KEYCODE_D:
		case KEYCODE_RIGHT:
			xKeyHeld = "NONE";
			resetState();
			break;

		case KEYCODE_A:
		case KEYCODE_LEFT:
			xKeyHeld = "NONE";
			resetState();
			break;

		case KEYCODE_W:
		case KEYCODE_UP:
			yKeyHeld = "NONE";
			resetState();
			break;

		case KEYCODE_S:
		case KEYCODE_DOWN:
			yKeyHeld = "NONE";
			resetState();
			break;

	} 
/*
resets the state of the character
*/
	function resetState(){
		if(xKeyHeld === "NONE" && yKeyHeld === "NONE" && playerSTATE === "RUN"){
			playerSTATE = "IDLE";
			player.gotoAndPlay("Ready");
		}
	}

}

//======BATTLE RPG ENGINE======//
//==============================//
//Stats Initiate
var player1 = {
  name:"Kahoona",
  level: 1,
  str: 5,
  dex: 3,
  int: 2,
  end: 4,
  hp: 1,
  eSprite: player //the sprite
};
var enemy1 = {
  name:"Enemy1",
  level: 1,
  str: 4,
  dex: 3,
  int: 2,
  end: 6,
  hp: 1, 
  eSprite: npc //sprite
}


//Function InitiateCharacter
//Sets up the initial stats screen
function initiateCharacter(character, charHP_id, charStats_id){
  //Sets up HP and displays
  character.hp = character.end * 3 + character.level * 3;
  document.getElementById(charHP_id).innerHTML = "HP " + character.hp;
  //Sets up rest of stats
  var tempStatString = "<p>STR " + character.str 
    + "</p><p>DEX " + character.dex 
    + "</p><p>INT "+ character.int 
    +"</p><p>END " + character.end 
    + "</p>";
   document.getElementById(charStats_id).innerHTML = tempStatString;
}

initiateCharacter(player1, "player1_hp", "player1_stats");
initiateCharacter(enemy1, "enemy1_hp", "enemy1_stats");



//Handles Damage and Hit Chance
function determineHit(attacker, defender){
  if(attacker.dex + roll(6,2) >= defender.dex + roll(6,2)){
    //hit 
    return true;
  }else{
    //miss 
    console.log('miss');
    return false;
  }
    
}

//Simple Roll Function
function roll(maxRoll, noOfDice){
  var total=0;
  for (var i=noOfDice; i>0; i--){
    var tempRoll = Math.ceil(Math.random() * maxRoll);
    total += tempRoll;
  }
    return total;
}

//=====================
//create Text Function
//TEXT, COLOR, the displayObject the text displays over
function createText(text_string, color_string, target) {
  var text_miss = new createjs.Text(text_string, "48px VT323", color_string);

  
  //delay before the text appears
  setTimeout(function() {
    stage.addChild(text_miss);
  }, 400); //# of frames when parry happens
  
  displayTextArray.push(text_miss);

  
  text_miss.x = target.x - 25;
}

//==TextUpdate==========
//tweens each text from the array and animates and once complete will delete
function updateText(textArray) {
  if (textArray.length > 0) {
    for (var i = 0; i < textArray.length; i++) {
          createjs.Tween.get(textArray[i])
            .wait(400)
          
            .to({scaleX:1.2, scaleY:1.2}, 400)
            .to({alpha:0, visible:false}, 800)
            .call(handleComplete);
          function handleComplete() {
              textArray.splice(i, 1); //removes the text from the array
          }
      }
    }
  }
//=========//

function damageHP(target, damage){
  if(target.hp - damage < 0){
    //dead
    target.hp = 0;
    document.getElementById("enemy1_hp").innerHTML = "KOed";
    createjs.Tween.get(npc) //change NPC
            .to({alpha:0, visible:true}, 1000)
            .call(handleComplete);
    function handleComplete(){
    	stage.removeChild(npc);
    }
  }else{
    target.hp -= damage;
    document.getElementById("enemy1_hp").innerHTML = "HP " + target.hp;
  }
}