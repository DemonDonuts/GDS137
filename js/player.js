
function GameObject()
{
    // set up player starting point
    this.x = canvas.width/2;
    this.y = canvas.height/2;

    // player dimension
    this.width = 100;
    this.height = 100;
    this.radius = 50;



    this.left = function()
    {
        return { x: this.x - this.width/2, y: this.y };
    }

    this.right = function()
    {
        return { x: this.x + this.width/2, y: this.y };
    }

    this.bottom = function()
    {
        return { x: this.x, y: this.y + this.height/2 };
    }

    this.top = function()
    {
        return { x: this.x, y: this.y - this.height/2 };
    }


    this.canJump = false;
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
        var size = 10;
        context.save();
            context.fillRect(this.x-size/2, this.y-size/2, size, size);
            context.fillRect(this.left/2, this.left/2, size, size);
            context.fillRect(this.right/2, this.right/2, size, size);
            context.fillRect(this.bottom/2, this.bottom/2, size, size);
            context.fillRect(this.top/2, this.top/2, size, size);
        context.restore();
    }

//rectangle
    this.drawRect = function()
    {
        context.save();
            context.fillStyle = this.color;
            context.fillRect(this.x - this.width/2, this.y - this.height/2, this.width, this.height);
        context.restore();
    }


    //make move
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

        this.hitTestPoint = function(obj)
        {
            if(obj.x>= this.left().x &&
            obj.x<= this.right().x &&
            obj.y >= this.top().y &&
            obj.y <= this.bottom().y)
            {
                return true;
            }
            return false;
        }
    

    this.jumpSpeed = -20;
}
