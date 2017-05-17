
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}
loadScript("../../../common/scripts/swfobject.js", registerSWF);
var mainMovieClip;

(Animation = function(control,id){
		
	
	var manifest = [
		{src:"images/Arrow.png", id:"Arrow"},
		{src:"images/envelope_closed_action.png", id:"envelope_closed_action"},
		{src:"images/envelope_closed_static.png", id:"envelope_closed_static"},
		{src:"images/media_11115.jpg", id:"media_11115"},
		{src:"images/Router.png", id:"Router"}
	];
	return manifest;			
});

(slideViewDidLoad = function(){
/*
	var cResize = function(){
				
		if(($("#flashContent").width() < 470) || ($("#flashContent").height() < 400))
		{
			document.body.style.width = "470px";	
			document.body.style.overflowX = "auto";			
		}
		else
		{
			document.body.style.overflowX = "hidden";	
			
		}
	}
	$(window).resize(cResize)
	
	cResize();
	*/
});
