function Dot(x,y)
{
	this.pt = new Point2D(x,y)
	
	Dot.List.push(this);
}//eoc




Dot.List = [];
Dot.Radius = 4;
Dot.DragIndex = -1;
Dot.DragRadius = 5;



Dot.SetDragIndexByXY = function(x,y)
{
	Dot.DragIndex = -1
	
	for(var i=0; i<Dot.List.length; ++i)
		if(Dot.List[i].isIncludeXY(x,y))
		{
			Dot.DragIndex = i;
			break;
		}
	
	return Dot.DragIndex;
}



Dot.GetDragItem = function()
{
	if(Dot.DragIndex != -1)
		return Dot.List[Dot.DragIndex];
	else
		return false
}

Dot.ReleaseDrag = function()
{
	Dot.DragIndex = -1
}



Dot.DrawAll = function()
{
	var ctx = Vars.Ctx;
	ctx.beginPath();
	
	for(var i=0; i<Dot.List.length; ++i)
			Dot.List[i].draw();
	
	ctx.fillStyle = "black";
	ctx.fill();
}//eof



Dot.Length = function()
{
	return Dot.List.length
};//eof


Dot.LastOne = function()
{
	if(Dot.Length()>0)
		return Dot.List[Dot.Length()-1];
	
	return false;
}




Dot.prototype.draw = function()
{
	var ctx = Vars.Ctx;
	var x = this.pt.x;
	var y = this.pt.y;
	
	ctx.moveTo(x+Dot.Radius, y);
	ctx.arc(x, y, Dot.Radius, 0, 2*Math.PI);
};//eof



Dot.prototype.isIncludeXY = function(x,y)
{
	return this.pt.distanceToXY(x,y) <= Dot.DragRadius;
};//eof