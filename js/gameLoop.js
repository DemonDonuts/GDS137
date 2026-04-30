var canvas;
var context;
var player;
var timer;
var interval = 1000/60;
var platform0;
var platform1;



var frictionX = 0.8;
var frictionY = 0.8;
var gravity = 1;

canvas = document.getElementById("canvas");
context = canvas.getContext("2d");

player = new GameObject();
player.color = "blue";
player.x = 200; player.y = 400;

platform0 = new GameObject();
platform0.width = 400;
platform0.y = player.y + player.height/2 + platform0.height/2;
platform0.color = "lime";
platform0.x = 200;
platform0.y = 500;




platform1 = new GameObject();
platform1.width = 400;
platform1.y = player.y + player.height/2 + platform1.height/2;
platform1.color = "magenta";
platform1.x = 800;
platform1.y = 500;


player.vx = 0;
player.vy = 0;
//player.x = 100;
//player.y = 100;

timer = setInterval(animate, interval);





function animate()
{
    //clear canvas
    context.clearRect(0,0, canvas.width, canvas.height);

    //controls
    if(w && player.canJump)
    {
        player.canJump = false;
        player.vy += player.jumpSpeed;
    }


    //platform
	while(platform0.hitTestPoint(player.bottom()) && player.vy >=0)
	{
		player.y--;
		player.vy = 0;
		player.canJump = true;
	}
	while(platform0.hitTestPoint(player.left()) && player.vx <=0)
	{
		player.x++;
		player.vx = 0;
	}
	while(platform0.hitTestPoint(player.right()) && player.vx >=0)
	{
		player.x--;
		player.vx = 0;
	}
	while(platform0.hitTestPoint(player.top()) && player.vy <=0)
	{
		player.y++;
		player.vy = 0;
	}



    //put platform1 here
		while (platform1.hitTestPoint(player.bottom()) && player.vy >= 0)
		{
			player.y--;
			player.vy = 1;
			player.canJump = true;
		}

	

    //make player move
    player.move();
    if (player.x > canvas.width + player.width/2)
    {
        player.x = -player.width/2
    }

    
    doHandleAcceleration();
    doHandleFriction();
    doHandleGravity();
    doUpdatePosition();
    doCheckBottomBounds();


    //draw shapes
    player.drawRect();
    platform0.drawRect();
    platform1.drawRect();
	player.drawDebug();
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