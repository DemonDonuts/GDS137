function GameObject()
{
    // set up player starting point
    this.x = canvas.width/2;
    this.y = canvas.height/2;

    // player dimension
    this.width = 100;
    this.height = 100;
    this.radius = 50;


   // if (color==undefined)
   // {
   //     this.color = "blue";
   // }
   // else
   // {
   //     this.color = "red";
   // }



    
    this.left = function()
    {
        return this.x - this.width/2;
    }

    this.right = function()
    {
        return this.x + this.width/2;
    }

    this.top = function()
    {
        return this.y - this.height/2;
    }

    this.bottom = function()
    {
        return this.y + this.height/2;
    }

    this.prevX = this.x;


    // set up physcis
    this.force = 1;
    this.ax = 1;
    this.ay = 1;

    



    //velocity
    this.vx = 0;
    this.vy = 0;

//cirlce
    this.drawCircle = function()
    {
        context.save();
            context.beginPath();
            context.arc(this.x, this.y, this.radius, 0, 360*Math.PI/180, true);
            context.fillStyle = this.color;
            context.fill();
            context.closePath();
        context.restore();
    }

//rectangle
    this.drawRect = function()
    {
        context.save();
            context.fillStyle = "blue";
            context.fillRect(this.x - this.width/2, this.y - this.height/2, this.width, this.height);
        context.restore();
    }


//     this.draw = function()
//     {
//         context.save();
//             context.beginPath();
//             context.arc(this.x, this.y, this.radius, 0, 360*Math.PI/180, true);
//             context.fillStyle = this.color;
//             context.fill();
//             context.closePath();
//         context.restore();
//     }

    this.move = function()
    {
        this.x += this.vx;
        this.y += this.vy;

      
    }

    this.collisionCheck = function(Object)
        {
            if 
            (this.left() < Object.right() && 
            this.right() > Object.left() && 
            this.top() < Object.bottom() && 
            this.bottom() > Object.top()
            )   
            {
                return true;
            }
            return false;
        }
        // // left
        // if (this.x - this.radius < 0)
        // {
        //     this.x = this.radius;
        //     this.vx = -this.vx;
        //     this.color = "lightgreen";
        // }

        // // right
        // if (this.x + this.radius > canvas.width)
        // {
        //     this.x = canvas.width - this.radius;
        //     this.vx = -this.vx;
        //     this.color = "lavender";
        // }

        // // up
        // if (this.y - this.radius < 0)
        // {
        //     this.y = this.radius;
        //     this.vy = -this.vy;
        //     this.color = "yellow";
        // }

        // // down
        // if (this.y + this.radius > canvas.height)
        // {
        //     this.y = canvas.height - this.radius;
        //     this.vy = -this.vy;
        //     this.color = "pink";
        // }
    
}
