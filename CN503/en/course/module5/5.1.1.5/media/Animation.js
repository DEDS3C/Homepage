(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.classesmediaMediaObject = function() {
	this.initialize();

	// main
	this.instance = new lib.Main();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0.5,470,400);


// symbols:
(lib.Arrow = function() {
	this.initialize(img.Arrow);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,40,27);


(lib.envelope_closed_action = function() {
	this.initialize(img.envelope_closed_action);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,263,79);


(lib.envelope_closed_static = function() {
	this.initialize(img.envelope_closed_static);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,123,79);


(lib.media_11115 = function() {
	this.initialize(img.media_11115);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,470,400);


(lib.Router = function() {
	this.initialize(img.Router);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,148,107);


(lib.table = function() {
	this.initialize();

	// Layer 1
	this.text = new DOMObject({type:"TEXT",subType:"TABLE",compId:"ID_table",width:"448",div:"tableDiv",align:"center"});
    this.text.setTransform(0,0);
	

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,45.1,16.2);


(lib.Symbol2 = function() {
	this.initialize();

	// Layer 1
	
			this.text_1 = new DOMObject({type:"TEXT",text:"SA\n209.165.200.226",id:"SADiv1",width:"75",expand:"up+down",align:"center",size:"9",bold:"1"});
	$("#SADiv1").addClass("glow");


/*	this.text_1 = new cjs.Text("SA\n209.165.200.226", "bold 9px Arial", "#393536");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 12;*/
	this.text_1.setTransform(9.5,6);

	this.addChild(this.text_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,73.2,28.5);


(lib.Symbol1 = function() {
	this.initialize();

	// Layer 1
		this.text_2 = new DOMObject({type:"TEXT",text:"SA\n192.168.10.10",id:"SADiv",width:"65",expand:"up+down",align:"center",size:"9",bold:"1"});
	$("#SADiv").addClass("glow");

	/*this.text_2 = new cjs.Text("SA\n192.168.10.10", "bold 9px Arial", "#393536");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 12;*/
	this.text_2.setTransform(9.5,6);

	this.addChild(this.text_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,68.1,28.5);


(lib.DA3 = function() {
	this.initialize();

	// Layer 1
	this.text_3 = new DOMObject({type:"TEXT",text:"DA\n192.168.10.10",id:"DADiv1",width:"65",expand:"up+down",align:"center",size:"9",bold:"1"});
	$("#DADiv1").addClass("glow");
	/*this.text_3 = new cjs.Text("DA\n192.168.10.10", "bold 9px Arial", "#393536");
	
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 12;*/
	this.text_3.setTransform(11.5,6);

	this.addChild(this.text_3);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,68.1,28.5);


(lib.da = function() {
	this.initialize();

	// Layer 1
	this.text_4 = new DOMObject({type:"TEXT",text:"DA\n209.165.200.226",id:"DADiv",width:"75",expand:"up+down",align:"center",size:"9",bold:"1"});
	$("#DADiv").addClass("glow");
		//this.text_4 = getCJSElement("TEXT",{text:"DA\n209.165.200.226",div:"DADiv",align:"center"});


	//this.text_4 = new cjs.Text("DA\n209.165.200.226", "bold 9px Arial", "#393536");
	//this.text_4.textAlign = "center";
	
	//this.text_4.lineHeight = 12;
	this.text_4.setTransform(10.5,6);

	this.addChild(this.text_4);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,73.2,28.5);


(lib.envelopeclosedstatic = function() {
	this.initialize();

	// inner lines
	this.instance = new lib.envelope_closed_static();
	this.instance.setTransform(-39.5,-26.1,0.667,0.663);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-39.5,-26.1,82.1,52.4);


(lib.Arrow_1 = function() {
	this.initialize();

	// shape
	this.instance_1 = new lib.Arrow();
	this.instance_1.setTransform(0,-3.2,0.25,0.246);

	this.addChild(this.instance_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-3.2,10,6.7);


(lib.Router_1 = function() {
	this.initialize();

	// z router_basic
	this.instance_2 = new lib.Router();
	this.instance_2.setTransform(0,-66.7,0.626,0.624);

	this.addChild(this.instance_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-66.7,92.7,66.8);


(lib.Tween1 = function() {
	this.initialize();

	// Layer 1
	this.instance_3 = new lib.Arrow_1();
	this.instance_3.setTransform(0,17.8,1.505,1.505,90,0,0,5.1,0.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#F68026").ss(3,0,1).p("AAADMIAAmX");
	this.shape.setTransform(0,-4.7);

	this.addChild(this.shape,this.instance_3);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-4.9,-25.1,10,50.3);


(lib.packet4 = function() {
	this.initialize();

	// Layer 1
	this.instance_4 = new lib.DA3();
	this.instance_4.setTransform(26,22,1,1,0,0,0,34,14.2);
	this.instance_4.shadow = new cjs.Shadow("rgba(255,255,255,1)",0,0,2);

	this.instance_5 = new lib.envelopeclosedstatic();
	this.instance_5.setTransform(-5,19.7,0.887,0.887,0,0,0,-45.4,0.5);

	this.addChild(this.instance_5,this.instance_4);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-3.9,72.8,46.5);


(lib.packet3 = function() {
	this.initialize();

	// Layer 1
	this.instance_6 = new lib.da();
	this.instance_6.setTransform(89,19.7,1,1,0,0,0,36.6,14.2);
	this.instance_6.shadow = new cjs.Shadow("rgba(255,255,255,1)",0,0,2);

	this.instance_7 = new lib.envelopeclosedstatic();
	this.instance_7.setTransform(59.7,19.8,0.887,0.886,0,0,0,-45.4,0.5);

	this.addChild(this.instance_7,this.instance_6);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(64.6,-3.8,73.2,46.5);


(lib.packet2 = function() {
	this.initialize();

	// Layer 1
	this.instance_8 = new lib.Symbol2();
	this.instance_8.setTransform(90,19.7,1,1,0,0,0,36.6,14.2);
	this.instance_8.shadow = new cjs.Shadow("rgba(255,255,255,1)",0,0,2);

	this.instance_9 = new lib.envelopeclosedstatic();
	this.instance_9.setTransform(59.7,19.8,0.887,0.886,0,0,0,-45.4,0.5);

	this.addChild(this.instance_9,this.instance_8);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(64.6,-3.8,73.2,46.5);


(lib.packet = function() {
	this.initialize();

	// Layer 1
	this.instance_10 = new lib.Symbol1();
	this.instance_10.setTransform(28,22,1,1,0,0,0,34,14.2);
	this.instance_10.shadow = new cjs.Shadow("rgba(255,255,255,1)",0,0,2);

	this.instance_11 = new lib.envelopeclosedstatic();
	this.instance_11.setTransform(-5,19.7,0.887,0.887,0,0,0,-45.4,0.5);

	this.addChild(this.instance_11,this.instance_10);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-3.9,72.8,46.5);


(lib.animation01 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{},true);

	// table
	this.instance_12 = new lib.table();
	this.instance_12.setTransform(14,39,1,1,0,0,0,22.6,8.1);
	this.instance_12.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(89).to({alpha:1},0).wait(390));

	// packet4
	this.instance_13 = new lib.packet4();
	this.instance_13.setTransform(232.3,172.1,1,1,0,0,0,73.2,19.7);
	this.instance_13.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(368).to({alpha:1},9).to({x:83.3},36).wait(3).to({x:83.7},0).to({x:82.3,y:283.1},33).to({x:82.7,alpha:0},18).wait(12));

	// packet3
	this.instance_14 = new lib.packet3();
	this.instance_14.setTransform(378.3,281.1,1,1,0,0,0,73.2,19.7);
	this.instance_14.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(255).to({alpha:1},9).to({y:173.1},35).wait(4).to({x:168.3,y:172.1},34).to({alpha:0},11).wait(131));

	// packet2
	this.instance_15 = new lib.packet2();
	this.instance_15.setTransform(168.3,170.1,1,1,0,0,0,73.2,19.7);
	this.instance_15.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(121).to({alpha:1},8).to({x:378.3},34).wait(7).to({y:279.1},38).wait(8).to({y:281.1,alpha:0},6).wait(257));

	// packet1
	this.instance_16 = new lib.packet();
	this.instance_16.setTransform(80.3,285.1,1,1,0,0,0,73.2,19.7);
	this.instance_16.alpha = 0;
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(1).to({_off:false},0).to({y:276.6,alpha:1},3).to({y:182.1},25).to({y:168.1},4).wait(6).to({x:229.3},34).to({alpha:0},7).wait(399));

	// Texts
		this.text_5 = new DOMObject({type:"TEXT",compId:"ID_txt06",width:"75",expand:"up+down",align:"center"});

	this.text_5.setTransform(357.1,286.2);

	
	this.text_6 = new DOMObject({type:"TEXT",compId:"ID_txt05",width:"75",expand:"up+down",align:"center"});

	
	this.text_6.setTransform(395.1,192.2);

	this.text_7 = new cjs.Text("209.165.201.1", "11px Arial", "#393536");
	this.text_7.textAlign = "center";
	this.text_7.lineHeight = 13;
	this.text_7.setTransform(407.7,315);

	this.text_8 = new cjs.Text("192.168.10.10", "11px Arial", "#393536");
	this.text_8.textAlign = "center";
	this.text_8.lineHeight = 13;
	this.text_8.setTransform(39.7,315);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_8},{t:this.text_7},{t:this.text_6},{t:this.text_5}]}).wait(479));

	// router
	this.text_9 = new cjs.Text("R2", "bold 11px Arial", "#FFFFFF");
	this.text_9.lineHeight = 13;
	this.text_9.setTransform(186.4,175);

	this.instance_17 = new lib.Router_1();
	this.instance_17.setTransform(194.7,169.3,0.572,0.572,0,0,0,46,-33.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_17},{t:this.text_9}]}).wait(479));

	// arrow
	this.instance_18 = new lib.Tween1("synched",0);
	this.instance_18.setTransform(195.4,161.3,1,1,180);
	this.instance_18.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(82).to({alpha:1},0).to({y:134.3},6).wait(281).to({alpha:0},0).wait(110));

	// Bg
	this.instance_19 = new lib.media_11115();
	this.instance_19.setTransform(0,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_19}]}).wait(479));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.5,470,400);


(lib.Main = function() {
	this.initialize();

	// Animation
	this.anim01 = new lib.animation01();

	this.addChild(this.anim01);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0.5,470,400);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;