function Player()
{
    // set up player starting point
    this.x = canvas.width/2;
    this.y = canvas.height/2;

    // player dimension
    this.width = 100;
    this.heiht = 100;

    this.color = "#8800ffff";

    this.draw = function()
    {
        context.save();
            context.fillStyle = this.color;
            context.translate(this.x,this.y);
            context.fillRect(-this.width/2),(-this.width/2), (this.width, this.height);
        context.restore();
    }

}