var canvas;
var context;
var player;
var timer;
var interval = 1000/60;

canvas = document.getElementById("canvas");
context = canvas.getContext("2d");

player = new GameObject();
npc1 = new GameObject();
npc2 = new GameObject();
npc3 = new GameObject();

player.color = "blue";
npc1.color = "lightgreen";
npc2.color = "yellow";
npc3.color = "lavender"; 

player.x = 200; player.y = 400;
npc1.x = 400; npc1.y = 400;
npc2.x = 600; npc2.y = 400;
npc3.x = 800; npc3.y = 400;


player.vx = 0;
player.vy = 0;
//player.x = 100;
//player.y = 100;

timer = setInterval(animate, interval);

function animate()
{
    //clear canvas
    context.clearRect(0,0, canvas.width, canvas.height);

    if (d)
    {
        player.x += 4
    }

    if (a)
    {
        player.x -= 4
    }


    player.move();
    if (player.x > canvas.width + player.width/2)
    {
        player.x = -player.width/2
    }




    if (npc1.collisionCheck(player))
    {
        npc1.color = "red";
        npc1.width = 130;
    }

    else 
    {
        npc1.color = "lightgreen";
        npc1.width = 100;
    }

    
    if (npc2.collisionCheck(player))
    {
       context.strokeRect(npc2.x - npc2.width/2, npc2.y - npc2.height/2, npc2.width, npc2.height);
    }

    if (npc3.collisionCheck(player))
    {
       player.x = player.prevX;
    }

    else
    {
       player.prevX = player.x;
    }




    player.drawRect();
    npc1.drawCircle();
    npc2.drawCircle();
    npc3.drawRect();
}

