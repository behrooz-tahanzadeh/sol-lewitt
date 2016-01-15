var Connection = 
{
	Seq:
		[[1,0 , 0,1], [0,0 , 0,1], [0,0 , 1,1], [1,0 , 1,1]],
		
		
	DrawAll: function()
	{
		var ctx = Vars.Ctx;
		ctx.beginPath();
		
		for(var i=0; i<Vars.GridRows-1; ++i)
			for(var j=0; j<Vars.GridCols-1; ++j)
				this.Draw(i,j);
		
		ctx.lineWidth = 1;
		ctx.strokeStyle = 'black';
		ctx.stroke();
	},

	Draw: function(i,j)
	{
		var ctx = Vars.Ctx;
		
		m = this.Seq[(j + ((i%2)*2)) % 4];
		
		p1 = Dot.List[i+m[0]][j+m[1]].currentPt
		p2 = Dot.List[i+m[2]][j+m[3]].currentPt
		
		ctx.moveTo(p1.x, p1.y);
		ctx.lineTo(p2.x, p2.y);
	}
};