
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

loadScript("../../../common/scripts/swfobject.js", registerSWF);

//Function triggers when all the slides/view contents are loaded
(slideViewDidLoad = function(container,id){	
	if(id==2){
		isResize=false;
		root.resizer();
		loadSecond();
	}
	function loadSecond(){
	//Create new div with scroll property into root container
	$("#slide_2").append("<div id='canvasId' style='top:10px;left:0px;position:absolute;width:447px;height:380px;overflow-y:auto;'></div>");	
	var canvasDOM = new createjs.DOMElement(document.getElementById("canvasId"));
	canvasDOM.x = 0;
	canvasDOM.y = 10;
	root.addChild(canvasDOM);
	
	//Create new canvas & stage into new div
	$("#canvasId").append("<canvas id='childCanvas' width='430' height='493'></canvas>");	
	var childStage = new createjs.Stage(document.getElementById("childCanvas"));	
	var im = new Image();
	
	//Create Flowchart IMAGE component
	im.onload = function()
	{		
		var _img = new createjs.Bitmap(this);
		_img.y = 10;
		_img.x = 95;
		childStage.addChild(_img);
		initSlide();	
	}
	im.src = "slide_2.png";
	
	//Create Flowchart TEXT components using an array
	function initSlide(){
	var textArray = [{compId:"ID_s2_txt01", x:"120", y:"20", width:"69.3", expand:"up+down" , align:"center",size:"10" },
					 {compId:"ID_s2_txt02", x:"61", y:"69", width:"183.85", expand:"up" , align:"center", size:"10" },
					{compId:"ID_s2_txt04", x:"61", y:"227.5", width:"183.85", expand:"up+down" , align:"center",size:"10" },
					{compId:"ID_s2_txt08", x:"258", y:"145", width:"164.8", expand:"up" , align:"center",size:"10" },
					{compId:"ID_s2_txt03", x:"115", y:"158", width:"79.3", expand:"up+down" , align:"center",size:"10" },					
					{compId:"ID_s2_txt07", x:"120", y:"440", width:"69.3", expand:"up+down" , align:"center",size:"10" },
					{compId:"ID_s2_txt10", x:"159", y:"202", width:"32", expand:"right", align:"left", size:"10" },
					{compId:"ID_s2_txt09", x:"222", y:"146", width:"32", expand:"up", align:"left", size:"10" },
					{compId:"ID_s2_txt12", x:"219", y:"299", width:"32", expand:"right", align:"left", size:"10" },
					{compId:"ID_s2_txt13", x:"159", y:"356", width:"32", expand:"right", align:"left", size:"10" },
					{compId:"ID_s2_txt06", x:"61", y:"382", width:"183.85", expand:"up+down" , align:"center",size:"10" },
					{compId:"ID_s2_txt05", x:"114", y:"311", width:"76.3", expand:"up+down" , align:"center",size:"10" },
		
];						
		
		//Add each text object into the new stage
		var tComp;				
		for(var i = 0;i<textArray.length;i++)
		{
			textArray[i].div = "canvasId";
			tComp = getCJSElement("TEXT",textArray[i],"canvasId");
			childStage.addChild(tComp);
		}
		
		//Update stage for rendering new Image & Text objects
		update = true;
		childStage.update();
	}	
	}
	
	
	
});
