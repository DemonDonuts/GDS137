function GameObject()
{
    // set up player starting point
    this.x = canvas.width/2;
    this.y = canvas.height/2;

    // player dimension
    this.width = 100;
    this.height = 100;
    this.radius = 50;
    
    //velocity
    this.vx = 0;
    this.vy = 0;

    this.draw = function()
    {
        context.save();
            context.beginPath();
            context.arc(this.x, this.y, this.radius, 0, 360*Math.PI/180, true);
            context.fillStyle = this.color;
            context.fill();
            context.closePath();
        context.restore();
    }

    this.move = function()
    {
        this.x += this.vx;
        this.y += this.vy;

        // left
        if (this.x - this.radius < 0)
        {
            this.x = this.radius;
            this.vx = -this.vx;
            this.color = "lightgreen";
        }

        // right
        if (this.x + this.radius > canvas.width)
        {
            this.x = canvas.width - this.radius;
            this.vx = -this.vx;
            this.color = "lavender";
        }

        // up
        if (this.y - this.radius < 0)
        {
            this.y = this.radius;
            this.vy = -this.vy;
            this.color = "yellow";
        }

        // down
        if (this.y + this.radius > canvas.height)
        {
            this.y = canvas.height - this.radius;
            this.vy = -this.vy;
            this.color = "pink";
        }
    }
}
