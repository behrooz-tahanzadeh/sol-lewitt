Main = 
{
	intervalTime:100,
	intervalID:-1,
	
	
	BgOpacity:1,
	
	
	Init:function()
	{
		Vars.Init();
		
		jQuery("div#pp").click(this.PP.bind(this));
		
		this.intervalID = setInterval(this.Loop.bind(this), this.intervalTime);
		
		jQuery('input#tail').change(this.TailChange.bind(this));
		
		jQuery(window).keydown(this.WindowOnKeyPress.bind(this));
		jQuery(window).keyup(this.WindowOnKeyUp.bind(this));
		
		Vars.CJq.click(this.CanvasClick.bind(this));
		Vars.CJq.mousedown(this.CanvasMouseDown.bind(this));
		Vars.CJq.mousemove(this.CanvasMouseMove.bind(this));
		Vars.CJq.mouseup(this.CanvasMouseUp.bind(this));
	},
	
	
	
	
	WindowOnKeyPress: function(e)
	{
		switch (e.keyCode)
		{
			case Keyboard.Right:
				var v = parseFloat(jQuery('input#tail').val())+(e.shiftKey?0.1:0.01);
				jQuery('input#tail').val(v);
				this.TailChange(null);
				break;
				
			case Keyboard.Left:
				var v = parseFloat(jQuery('input#tail').val())-(e.shiftKey?0.1:0.01);
				jQuery('input#tail').val(v);
				this.TailChange(null);
				break;
				
			case Keyboard.Space:
				this.PP();
				break;
			case Keyboard.Ctrl:
				jQuery('body').css('cursor', 'move');
				break;
		}
	},
	
	
	WindowOnKeyUp: function(e)
	{
		switch (e.keyCode)
		{
			case Keyboard.Ctrl:
				jQuery('body').css('cursor', 'copy');
				break;
		}
	},
	
	
	
	
	TailChange:function(e)
	{
		this.BgOpacity = jQuery('input#tail').val();
	},
	
	
	
	
	Loop: function()
	{
		
		
		var ctx = Vars.Ctx;
		
		ctx.fillStyle = "rgba(255,255,255,"+this.BgOpacity+")";
		ctx.fillRect(0, 0, Vars.PageW, Vars.PageH);
		
		Poly.DrawAll();
		Dot.DrawAll();
	},
	
	
	
	
	PP: function()
	{
		if(this.intervalID == -1)
		{
			this.intervalID = setInterval(this.Loop, this.intervalTime);
			jQuery("div#pp").html('pasue');
		}
		else
		{
			clearInterval(this.intervalID);
			this.intervalID = -1;
			jQuery("div#pp").html('play');
		}
	},
	
	
	
	
	CanvasMouseDown: function(e)
	{
		if(e.ctrlKey && Dot.DragIndex == -1)
			Dot.SetDragIndexByXY(e.pageX, e.pageY)
	},
	
	
	CanvasMouseMove: function(e)
	{
		if(Dot.GetDragItem())
			Dot.GetDragItem().pt.update(e.pageX, e.pageY)
	},
	
	
	CanvasMouseUp: function(e)
	{
		Dot.ReleaseDrag()
	},
	
	CanvasClick: function(e)
	{	
		if(e.ctrlKey) return;
		
		new Dot(e.pageX, e.pageY);
		
		if(Dot.Length()>2)
			for(i=0; i<Dot.Length()-2; ++i)
				if(Math.random()>0.7)
					new Poly([Dot.LastOne(), Dot.List[i], Dot.List[i+1]]);
	},
};//eo Main{}




jQuery(document).ready(Main.Init.bind(Main));