export class Bloc{
    constructor(width,height,x,y){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.maxX = width + x;
        this.maxY = height + y;
    }

    draw(ctx){
        const xGap = 70;
        const yGap = 50;

        ctx.fillStyle = "#ff384e";
        ctx.beginPath();
        ctx.rect(this.x,this.y,this.width,this.height);
        ctx.fill();

        ctx.fillStyle = "#190f3a";
        ctx.beginPath();
        ctx.moveTo(this.maxX,this.maxY);
        ctx.lineTo(this.maxX - xGap,this.maxY + yGap);
        ctx.lineTo(this.x - xGap,this.maxY + yGap);
        ctx.lineTo(this.x,this.maxY);
        ctx.fill();
        
        ctx.fillStyle = "#9d0919";
        ctx.beginPath();
        ctx.moveTo(this.x - xGap,this.y + yGap);
        ctx.lineTo(this.x,this.y);
        ctx.lineTo(this.x,this.y + this.height);
        ctx.lineTo(this.x - xGap,this.maxY + yGap);
        ctx.fill();
    }
}