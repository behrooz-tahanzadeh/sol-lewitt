function Poly(dotList)
{
	this.dotList = dotList;
	this.color = "hsl("+(Math.random()*360)+", 100%, 50%)";
	
	Poly.List.push(this);
}//eoc



Poly.List = [];



Poly.DrawAll = function()
{
	for(var i=0; i<Poly.List.length; ++i)
			Poly.List[i].draw();
}//eof



Poly.prototype.draw = function()
{
	var ctx = Vars.Ctx;
	
	ctx.beginPath()
	
	ctx.moveTo(this.dotList[0].pt.x, this.dotList[0].pt.y);
	
	for(var i=1; i<this.dotList.length; ++i)
		ctx.lineTo(this.dotList[i].pt.x, this.dotList[i].pt.y);
	
	ctx.fillStyle = this.color;
	ctx.fill();
};//eof