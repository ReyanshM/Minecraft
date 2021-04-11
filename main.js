window.addEventListener('keydown',Key_down);
var canvas=new fabric.Canvas('Canvas');
var blockDimension=30;
var playerX=400;
var playerY=300;
var playerObject='';
var blockObject;
function player_update(){
    fabric.Image.fromURL("player.png", function(Img){
        playerObject=Img;
        playerObject.scaleToWidth(150);
        playerObject.scaleToHeight(150);
        playerObject.set({
            top:playerY, 
            left:playerX
        });
        canvas.add(playerObject);
        console.log('player added')
    });
}

player_update();

function block_update(blockType){
    fabric.Image.fromURL(blockType, function(Img){
        blockObject=Img;
        blockObject.scaleToWidth(blockDimension);
        blockObject.scaleToHeight(blockDimension);
        blockObject.set({
            top:playerY, 
            left:playerX
        });
        canvas.add(blockObject);
    });
}
function up(){
    if(playerY>=5){
        playerY-=blockDimension;
        canvas.remove(playerObject);
        player_update();
    }
};
function down(){
    if(playerY<=455){
        playerY+=blockDimension;
        canvas.remove(playerObject);
        player_update();
    }
};
function left(){
    if(playerX>=5){
        playerX-=blockDimension;
        canvas.remove(playerObject);
        player_update();
    }
};
function right(){
    if(playerX<=795){
        playerX+=blockDimension;
        canvas.remove(playerObject);
        player_update();
    }
};
function Key_down(keypressed){
     console.log(keypressed);
    if(keypressed.keyCode==38){
       up();
       console.log('up is pressed')
    }
    if(keypressed.keyCode==40){
        down();
       console.log('down is pressed')

    }
    if(keypressed.keyCode==37){
        left();
       console.log('left is pressed')

    }
    if(keypressed.keyCode==39){
        right();
       console.log('right is pressed')

    }
    if(keypressed.keyCode==87){
        block_update("wall.jpg");
    }
    if(keypressed.keyCode==84){
        block_update("trunk.jpg");
    }
    if(keypressed.keyCode==85){
        block_update("unique.png");
    }
}
