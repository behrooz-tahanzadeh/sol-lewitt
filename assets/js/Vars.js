var Vars = 
{
	CDom:false,
	CJq:false,
	Ctx:false,
		
	PageW:0,
	PageH:0,
	MaxDim:0,
	
	CellW:0,
	CellH:0,
	CellDim:0,
	
	GridRows: 0,
	GridCols: 0,
	
	BgOpacity:1,
	
	Init: function()
	{
		this.CJq = jQuery('#drawingArea').eq(0);
		this.CDom = this.CJq.get(0);
		this.Ctx = this.CDom.getContext("2d");
		
		this.PageW = jQuery(window).width();
		this.PageH = jQuery(window).height();
		
		this.MaxDim = Math.sqrt(Math.pow(this.PageW,2) + Math.pow(this.PageH,2));
		
		this.CDom.width = this.PageW;
		this.CDom.height = this.PageH;
	}//eof
}//eoc