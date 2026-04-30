var canvas;
var context;
var player;
var timer;
var interval = 1000/60;

var frictionX = 0.8;
var frictionY = 0.8;
var gravity = 1;

canvas = document.getElementById("canvas");
context = canvas.getContext("2d");

player = new GameObject();

player.color = "blue";

player.x = 200; player.y = 400;



player.vx = 0;
player.vy = 0;
//player.x = 100;
//player.y = 100;

timer = setInterval(animate, interval);

function animate()
{
    //clear canvas
    context.clearRect(0,0, canvas.width, canvas.height);

    if(w && player.canJump)
    {
        player.canJump;
    }


    doHandleAcceleration();
    doHandleFriction();
    doHandleGravity();
    doUpdatePosition();
    doCheckBottomBounds();




    player.move();
    if (player.x > canvas.width + player.width/2)
    {
        player.x = -player.width/2
    }



// npc collisions

    // if (npc1.collisionCheck(player))
    // {
    //     npc1.color = "red";
    //     npc1.width = 130;
    // }

    // else 
    // {
    //     npc1.color = "lightgreen";
    //     npc1.width = 100;
    // }

    
    // if (npc2.collisionCheck(player))
    // {
    //    context.strokeRect(npc2.x - npc2.width/2, npc2.y - npc2.height/2, npc2.width, npc2.height);
    // }

    // if (npc3.collisionCheck(player))
    // {
    //    player.x = player.prevX;
    // }

    // else
    // {
    //    player.prevX = player.x;
    // }




    player.drawRect();
    // player.drawDebug();
    // npc1.drawCircle();
    // npc2.drawCircle();
    // npc3.drawRect();
}

function doHandleAcceleration()
{
    if (d)    
    {
        player.vx += player.ax * player.force;
    }
    if (a)
    {
        player.vx -= player.ax * player.force;
    }
}

function doHandleFriction()
{
    player.vx *= frictionX;
}
 
function doHandleGravity()
{
    player.vy += gravity;
}

function doUpdatePosition()
{
    player.x += player.vx;
    player.y += player.vy;
}

function doCheckBottomBounds()
{
    if (player.y > canvas.height - player.height/2)
    {
        player.y = canvas.height - player.height/2;
        player.vy = 0;
        doJump();
    }
}

function doJump()
{
    if (w)
    {
        player.vy = -20;
    } 
}

// function doJump();
// {

// }