// Garden Gnome Software - Skin
// Pano2VR 5.2 beta3/15913
// Filename: AirBnB_Listings_demo_v1.6.ggsk
// Generated Tue May 9 15:04:10 2017

function pano2vrSkin(player,base) {
	var ggSkinVars = [];
	ggSkinVars['video'] = 0;
	ggSkinVars['popup'] = 0;
	var me=this;
	var flag=false;
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=me.player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=[];
	this.elementMouseOver=[];
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	if (typeof document.body.style['transform'] == 'undefined') {
		for(var i=0;i<prefixes.length;i++) {
			if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
				cssPrefix='-' + prefixes[i].toLowerCase() + '-';
				domTransition=prefixes[i] + 'Transition';
				domTransform=prefixes[i] + 'Transform';
			}
		}
	}
	
	this.player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		this._mapbox=document.createElement('div');
		this._mapbox.ggId="map-box";
		this._mapbox.ggLeft=-500;
		this._mapbox.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._mapbox.ggVisible=true;
		this._mapbox.className='ggskin ggskin_container ';
		this._mapbox.ggType='container';
		hs ='';
		hs+='height : 100.4%;';
		hs+='left : -500px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 502px;';
		hs+='pointer-events:none;';
		this._mapbox.setAttribute('style',hs);
		this._mapbox.style[domTransform + 'Origin']='50% 50%';
		me._mapbox.ggIsActive=function() {
			return false;
		}
		me._mapbox.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._mapbox.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
			}
		}
		this._mapborder=document.createElement('div');
		this._mapborder.ggId="map-border";
		this._mapborder.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._mapborder.ggVisible=true;
		this._mapborder.className='ggskin ggskin_container ';
		this._mapborder.ggType='container';
		hs ='';
		hs+='height : 100.4%;';
		hs+='left : 0px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 502px;';
		hs+='pointer-events:none;';
		this._mapborder.setAttribute('style',hs);
		this._mapborder.style[domTransform + 'Origin']='50% 50%';
		me._mapborder.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._mapborder.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._mapborder.ggUpdatePosition=function (useTransition) {
		}
		this._map_1=document.createElement('div');
		this._map_1.innerHTML='Map goes here...';
		this._map_1.ggFilter = '';
		this._map_1.ggFilteredIds = [];
		this._map_1.ggId="Map 1";
		this._map_1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._map_1.ggVisible=true;
		this._map_1.className='ggskin ggskin_map ';
		this._map_1.ggType='map';
		hs ='';
		hs+='background : #fff;';
		hs+='border : 1px solid #000;';
		hs+='height : 103%;';
		hs+='left : -2px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100.4%;';
		hs+='pointer-events:auto;';
		this._map_1.setAttribute('style',hs);
		this._map_1.style[domTransform + 'Origin']='50% 50%';
		me._map_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._map_1.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._map_1.ggUpdateConditionTimer=function () {
			me._map_1.ggCallChildFunctions('ggUpdateConditionTimer');
			me._map_1.ggRadar.update();
		}
		this._map_1.ggUpdateConditionNodeChange=function () {
			me._map_1.ggCallChildFunctions('ggNodeChangeMain');
		}
		this._map_1.ggUpdatePosition=function (useTransition) {
		}
		this._map_1.ggNodeChange=function () {
			if (this.ggLastActivMarker) {
				if (this.ggLastActivMarker._div.ggDeactivate) this.ggLastActivMarker._div.ggDeactivate();
			}
			var id=me.player.getCurrentNode();
			var marker=this.ggMarkerArray[id];
			if (marker) {
				if (marker._div.ggActivate) marker._div.ggActivate();
			}
			this.ggLastActivMarker=marker;
			me._map_1.ggUpdateConditionNodeChange();
		}
		this._mapborder.appendChild(this._map_1);
		this._mapbox.appendChild(this._mapborder);
		this._mapclose=document.createElement('div');
		this._mapclose.ggId="map-close";
		this._mapclose.ggLeft=-257;
		this._mapclose.ggTop=-39;
		this._mapclose.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._mapclose.ggVisible=true;
		this._mapclose.className='ggskin ggskin_rectangle ';
		this._mapclose.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 3px;';
		hs+='border-radius : 3px;';
		hs+='background : #f5f5f5;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : -257px;';
		hs+='position : absolute;';
		hs+='top : -39px;';
		hs+='visibility : inherit;';
		hs+='width : 11px;';
		hs+='pointer-events:auto;';
		this._mapclose.setAttribute('style',hs);
		this._mapclose.style[domTransform + 'Origin']='50% 50%';
		me._mapclose.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._mapclose.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._mapclose.onclick=function (e) {
			var flag=me._mapbox.ggPositonActive;
			if (me.player.transitionsDisabled) {
				me._mapbox.style[domTransition]='none';
			} else {
				me._mapbox.style[domTransition]='all 1000ms ease-out 0ms';
			}
			if (flag) {
				me._mapbox.ggParameter.rx=0;me._mapbox.ggParameter.ry=0;
				me._mapbox.style[domTransform]=parameterToTransform(me._mapbox.ggParameter);
			} else {
				me._mapbox.ggParameter.rx=500;me._mapbox.ggParameter.ry=0;
				me._mapbox.style[domTransform]=parameterToTransform(me._mapbox.ggParameter);
			}
			me._mapbox.ggPositonActive=!flag;
			var flag=me._mapclose.ggPositonActive;
			if (me.player.transitionsDisabled) {
				me._mapclose.style[domTransition]='none';
			} else {
				me._mapclose.style[domTransition]='all 1000ms ease-out 0ms';
			}
			if (flag) {
				me._mapclose.ggParameter.rx=0;me._mapclose.ggParameter.ry=0;
				me._mapclose.style[domTransform]=parameterToTransform(me._mapclose.ggParameter);
			} else {
				me._mapclose.ggParameter.rx=-3;me._mapclose.ggParameter.ry=0;
				me._mapclose.style[domTransform]=parameterToTransform(me._mapclose.ggParameter);
			}
			me._mapclose.ggPositonActive=!flag;
		}
		this._mapclose.onmouseover=function (e) {
			me._boxlines.style[domTransition]='none';
			me._boxlines.style.opacity='0.6';
			me._boxlines.style.visibility=me._boxlines.ggVisible?'inherit':'hidden';
		}
		this._mapclose.onmouseout=function (e) {
			me._boxlines.style[domTransition]='none';
			me._boxlines.style.opacity='1';
			me._boxlines.style.visibility=me._boxlines.ggVisible?'inherit':'hidden';
		}
		this._mapclose.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._boxlines=document.createElement('div');
		this._boxlines.ggId="box-lines";
		this._boxlines.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._boxlines.ggVisible=true;
		this._boxlines.className='ggskin ggskin_container ';
		this._boxlines.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 15px;';
		hs+='left : 2px;';
		hs+='position : absolute;';
		hs+='top : 22px;';
		hs+='visibility : inherit;';
		hs+='width : 7px;';
		hs+='pointer-events:none;';
		this._boxlines.setAttribute('style',hs);
		this._boxlines.style[domTransform + 'Origin']='50% 50%';
		me._boxlines.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._boxlines.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._boxlines.ggUpdatePosition=function (useTransition) {
		}
		this._line3=document.createElement('div');
		this._line3.ggId="line3";
		this._line3.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._line3.ggVisible=true;
		this._line3.className='ggskin ggskin_rectangle ';
		this._line3.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 2px;';
		hs+='border-radius : 2px;';
		hs+='background : #ff5a60;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 15px;';
		hs+='left : 6px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 1px;';
		hs+='pointer-events:auto;';
		this._line3.setAttribute('style',hs);
		this._line3.style[domTransform + 'Origin']='50% 50%';
		me._line3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._line3.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._line3.ggUpdatePosition=function (useTransition) {
		}
		this._boxlines.appendChild(this._line3);
		this._line2=document.createElement('div');
		this._line2.ggId="line2";
		this._line2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._line2.ggVisible=true;
		this._line2.className='ggskin ggskin_rectangle ';
		this._line2.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 2px;';
		hs+='border-radius : 2px;';
		hs+='background : #ff5a60;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 15px;';
		hs+='left : 3px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 1px;';
		hs+='pointer-events:auto;';
		this._line2.setAttribute('style',hs);
		this._line2.style[domTransform + 'Origin']='50% 50%';
		me._line2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._line2.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._line2.ggUpdatePosition=function (useTransition) {
		}
		this._boxlines.appendChild(this._line2);
		this._line1=document.createElement('div');
		this._line1.ggId="line1";
		this._line1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._line1.ggVisible=true;
		this._line1.className='ggskin ggskin_rectangle ';
		this._line1.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 2px;';
		hs+='border-radius : 2px;';
		hs+='background : #ff5a60;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 15px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 1px;';
		hs+='pointer-events:auto;';
		this._line1.setAttribute('style',hs);
		this._line1.style[domTransform + 'Origin']='50% 50%';
		me._line1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._line1.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._line1.ggUpdatePosition=function (useTransition) {
		}
		this._boxlines.appendChild(this._line1);
		this._mapclose.appendChild(this._boxlines);
		this._mapbox.appendChild(this._mapclose);
		this.divSkin.appendChild(this._mapbox);
		this._logo=document.createElement('div');
		this._logo.ggId="logo";
		this._logo.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._logo.ggVisible=true;
		this._logo.className='ggskin ggskin_container ';
		this._logo.ggType='container';
		hs ='';
		hs+='height : 28px;';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='top : 24px;';
		hs+='visibility : inherit;';
		hs+='width : 149px;';
		hs+='pointer-events:none;';
		this._logo.setAttribute('style',hs);
		this._logo.style[domTransform + 'Origin']='0% 0%';
		me._logo.ggIsActive=function() {
			return false;
		}
		me._logo.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		me._logo.ggCurrentLogicStateScaling = -1;
		this._logo.ggUpdateConditionResize=function () {
			var newLogicStateScaling;
			if (
				(me.player.getViewerSize().width < 600)
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				(me.player.getViewerSize().width <= 900)
			)
			{
				newLogicStateScaling = 1;
			}
			else if (
				(me.player.getViewerSize().width > 900)
			)
			{
				newLogicStateScaling = 2;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._logo.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._logo.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._logo.style[domTransition]='' + cssPrefix + 'transform 250ms ease 0ms';
				if (me._logo.ggCurrentLogicStateScaling == 0) {
					me._logo.ggParameter.sx = 0.7;
					me._logo.ggParameter.sy = 0.7;
					me._logo.style[domTransform]=parameterToTransform(me._logo.ggParameter);
				}
				else if (me._logo.ggCurrentLogicStateScaling == 1) {
					me._logo.ggParameter.sx = 1;
					me._logo.ggParameter.sy = 1;
					me._logo.style[domTransform]=parameterToTransform(me._logo.ggParameter);
				}
				else if (me._logo.ggCurrentLogicStateScaling == 2) {
					me._logo.ggParameter.sx = 1.2;
					me._logo.ggParameter.sy = 1.2;
					me._logo.style[domTransform]=parameterToTransform(me._logo.ggParameter);
				}
				else {
					me._logo.ggParameter.sx = 1;
					me._logo.ggParameter.sy = 1;
					me._logo.style[domTransform]=parameterToTransform(me._logo.ggParameter);
				}
			}
		}
		this._logo.ggUpdatePosition=function (useTransition) {
			me._logo.ggUpdateConditionResize();
		}
		this._logo_bg=document.createElement('div');
		this._logo_bg.ggId="logo_bg";
		this._logo_bg.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._logo_bg.ggVisible=true;
		this._logo_bg.className='ggskin ggskin_rectangle ';
		this._logo_bg.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 7px;';
		hs+='border-radius : 7px;';
		hs+='background : rgba(0,0,0,0.156863);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 66px;';
		hs+='left : -41px;';
		hs+='position : absolute;';
		hs+='top : -8px;';
		hs+='visibility : inherit;';
		hs+='width : 208px;';
		hs+='pointer-events:auto;';
		this._logo_bg.setAttribute('style',hs);
		this._logo_bg.style[domTransform + 'Origin']='50% 50%';
		me._logo_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._logo_bg.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._logo_bg.ggUpdatePosition=function (useTransition) {
		}
		this._logo.appendChild(this._logo_bg);
		this._hw_logo=document.createElement('div');
		this._hw_logo__img=document.createElement('img');
		this._hw_logo__img.className='ggskin ggskin_image';
		this._hw_logo__img.setAttribute('src',basePath + 'images/hw_logo.png');
		this._hw_logo__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._hw_logo__img.className='ggskin ggskin_image';
		this._hw_logo__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._hw_logo__img);
		this._hw_logo.appendChild(this._hw_logo__img);
		this._hw_logo.ggId="hw_logo";
		this._hw_logo.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._hw_logo.ggVisible=true;
		this._hw_logo.className='ggskin ggskin_image ';
		this._hw_logo.ggType='image';
		hs ='';
		hs+='height : 47px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 151px;';
		hs+='pointer-events:auto;';
		this._hw_logo.setAttribute('style',hs);
		this._hw_logo.style[domTransform + 'Origin']='50% 50%';
		me._hw_logo.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._hw_logo.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._hw_logo.ggUpdatePosition=function (useTransition) {
		}
		this._logo.appendChild(this._hw_logo);
		this.divSkin.appendChild(this._logo);
		this._map_1.ggRadar={ lastFov : -1, lastPan : -1, lastZoom : -1,activeNodeLatLng : null, poly : null }
		this._map_1.ggRadar.update=function() {
			if ((typeof google !== 'object') || (typeof google.maps !== 'object')) return;
			var radar=me._map_1.ggRadar;
			var map=me._map_1.ggMap;
			if (!map) return;
			var d2r = Math.PI/180 ;
			var r2d = 180/Math.PI ;
			var fov = me.player.getFov();
			var pan = me.player.getPanNorth();
			var zoom = map.getZoom();
			var gps=me.player.getNodeLatLng();
			var filterpassed = true;
			var currentId = me.player.getCurrentNode();
			if (me._map_1.ggFilteredIds.length > 0 && me._map_1.ggFilteredIds.indexOf(currentId) == -1) filterpassed = false;
			if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0)) && filterpassed) {
				if (zoom<6) zoom = 6; // avoid large radar beams on world map
				if ((fov==radar.lastFov) && (pan==radar.lastPan) && (zoom==radar.lastZoom) && (gps[0]==radar.activeNodeLatLng.lat()) && (gps[1]==radar.activeNodeLatLng.lng())) return; 
				radar.lastPan=pan;radar.lastFov=fov;radar.lastZoom=zoom;
				radar.activeNodeLatLng = new google.maps.LatLng(gps[0], gps[1]);
				var rLat = 4.0*r2d / Math.pow(2,zoom);     // beam size
				var rLng = rLat/Math.cos(radar.activeNodeLatLng.lat() * d2r);
				var radar_path = [];
				radar_path.push(radar.activeNodeLatLng);
				var segments=5;
				for (i=-segments; i<=segments; i++) {
					var angle = (fov / (2*segments)) * i;
					var x = -rLng * Math.sin((pan+angle)*d2r) + radar.activeNodeLatLng.lng();
					var y =  rLat * Math.cos((pan+angle)*d2r) + radar.activeNodeLatLng.lat();
					radar_path.push(new google.maps.LatLng(y, x));
				}
				if (radar.poly) {
					radar.poly.setMap(null);
					radar.poly = null;
				}
				radar.poly = new google.maps.Polygon({
					paths: radar_path,
					strokeColor: '#ff5a60',
					strokeOpacity: 0.8,
					strokeWeight: 1,
					fillColor: '#ff5a60',
					fillOpacity: 0.35
				});
				radar.poly.setMap(map);
			} else {
				if (radar) {
					activeNodeLatLng = new google.maps.LatLng(0,0);
					if (radar.poly) {
						radar.poly.setMap(null);
						radar.poly = null;
					}
				}
			}
		}
		this._map_1.ggMarkerArray=[];
		this._map_1.ggGoogleMarkerArray=[];
		this._map_1.ggInitMap=function() {
		me._map_1.ggMapNotLoaded = false;
			if ((typeof google !== 'object') || (typeof google.maps !== 'object')) return;
			var gps=me.player.getNodeLatLng();
			if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0))) {
				activeNodeLatLng = new google.maps.LatLng(gps[0], gps[1]);
			} else {
				activeNodeLatLng = new google.maps.LatLng(0,0);
			}
			var mapOptions = {
				zoom: 14,
				center: activeNodeLatLng,
				mapTypeId: google.maps.MapTypeId.ROADMAP,
				disableDefaultUI: true,
				streetViewControl: false
			};
			me._map_1.ggMap = new google.maps.Map(me._map_1, mapOptions);
			me._map_1.ggNodeChange();
			google.maps.event.addListener(me._map_1.ggMap, 'idle', function(){
				me.updateSize(me._map_1);
			});
		}
		this._map_1.ggClearMap=function() {
		me._map_1.ggMap = null;
		me._map_1.ggClearMapMarkers();
		me._map_1.ggMapNotLoaded = true;
		}
		this._map_1.ggClearMapMarkers=function() {
			var id,marker;
			var markers=me._map_1.ggMarkerArray;
			for (id in markers) {
				if (markers.hasOwnProperty(id)) {
					marker=markers[id];
					marker.onRemove();
				}
			}
			me._map_1.ggMarkerArray=[];
		}
		this._map_1.ggInitMapMarkers=function(updateMapBounds) {
			function SkinMarkerOverlay(pos, div, map) {
				this._pos = pos;
				this._div = div;
				this._map = map;
				this.setMap(map);
			}
			SkinMarkerOverlay.prototype = new google.maps.OverlayView();
			SkinMarkerOverlay.prototype.onAdd = function() {
				this.getPanes().overlayMouseTarget.appendChild(this._div);
			}
			SkinMarkerOverlay.prototype.draw = function() {
				var overlayProjection = this.getProjection();
				var point = this.getProjection().fromLatLngToDivPixel(this._pos);
				if (point) {
					this._div.style.left =(point.x - 0) + 'px';
					this._div.style.top =(point.y - 0) + 'px';
				}
			};
			SkinMarkerOverlay.prototype.onRemove = function() {
				this._div.parentNode.removeChild(this._div);
				this._div = null;
			};
			SkinMarkerOverlay.prototype.getPosition = function() {
				return this._pos;
			};
			me._map_1.ggClearMapMarkers();
			var ids=me.player.getNodeIds();
			me._map_1.ggFilteredIds = [];
			if (me._map_1.ggFilter != '') {
				var filter = me._map_1.ggFilter.split(',');
				for (i=0; i < ids.length; i++) {
					var nodeId = ids[i];
					var nodeData = me.player.getNodeUserdata(nodeId);
					for (j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) != -1) me._map_1.ggFilteredIds.push(nodeId);
					}
				}
				if (me._map_1.ggFilteredIds.length > 0) ids = me._map_1.ggFilteredIds;
			}
			var marker;
			var markerLocation;
			var bounds=new google.maps.LatLngBounds();
			for(var i=0;i<ids.length;i++) {
				var id=ids[i];
				var gps=me.player.getNodeLatLng(id);
				if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0))) {
					markerLocation = new google.maps.LatLng(gps[0], gps[1]);
					var markerParent = new Object();
					markerParent.ggElementNodeId=function() { return id };
					var div=new SkinElement_hidecontainer_Class(me,markerParent);
					marker=new SkinMarkerOverlay(markerLocation,div,me._map_1.ggMap);

					me._map_1.ggMarkerArray[id]=marker;
					bounds.extend(markerLocation);
				}
			}
			if (ids.length > 1 && !bounds.isEmpty() && updateMapBounds) {
				me._map_1.ggMap.fitBounds(bounds);
			}
			this.ggLastActivMarker = null;
			if (this.ggUpdateConditionNodeChange) this.ggUpdateConditionNodeChange();
			this.ggRadar.lastFov = -1;
		}
		this._map_1.ggCallChildFunctions = function(functionname) {
			var id,marker;
			var markers=me._map_1.ggMarkerArray;
			for (id in markers) {
				if (markers.hasOwnProperty(id)) {
					marker=markers[id];
					if (typeof marker._div[functionname] == 'function') {
						marker._div[functionname]();
					}
				}
			}
		}
		this.divSkin.ggUpdateSize=function(w,h) {
			me.updateSize(me.divSkin);
		}
		this.divSkin.ggViewerInit=function() {
			me._map_1.ggInitMap();
			me._map_1.ggInitMapMarkers(true);
		}
		this.divSkin.ggLoaded=function() {
			if (me._map_1.ggMapNotLoaded) {
				me._map_1.ggInitMap();
				me._map_1.ggInitMapMarkers(true);
			}
			me._map_1.style[domTransition]='none';
			me._map_1.style.visibility=(Number(me._map_1.style.opacity)>0||!me._map_1.style.opacity)?'inherit':'hidden';
			me._map_1.ggVisible=true;
		}
		this.divSkin.ggReLoaded=function() {
		}
		this.divSkin.ggLoadedLevels=function() {
		}
		this.divSkin.ggReLoadedLevels=function() {
		}
		this.divSkin.ggEnterFullscreen=function() {
		}
		this.divSkin.ggExitFullscreen=function() {
		}
		this.skinTimerEvent();
	};
	this.hotspotProxyClick=function(id) {
	}
	this.hotspotProxyOver=function(id) {
	}
	this.hotspotProxyOut=function(id) {
	}
	this.ggHotspotCallChildFunctions=function(functionname) {
		var stack = me.player.getCurrentPointHotspots();
		while (stack.length > 0) {
			var e = stack.pop();
			if (typeof e[functionname] == 'function') {
				e[functionname]();
			}
			if(e.hasChildNodes()) {
				for(var i=0; i<e.childNodes.length; i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	this.changeActiveNode=function(id) {
		me.ggUserdata=me.player.userdata;
		me._map_1.ggNodeChange();
		me.ggHotspotCallChildFunctions('ggNodeChange');
	}
	this.skinTimerEvent=function() {
		setTimeout(function() { me.skinTimerEvent(); }, 10);
		me.ggCurrentTime=new Date().getTime();
		me._map_1.ggUpdateConditionTimer();
		me.ggHotspotCallChildFunctions('ggUpdateConditionTimer');
	};
	function SkinHotspotClass(skinObj,hotspot) {
		var me=this;
		var flag=false;
		this.player=skinObj.player;
		this.skin=skinObj;
		this.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):'';
		this.ggUserdata=this.skin.player.getNodeUserdata(nodeId);
		this.elementMouseDown=[];
		this.elementMouseOver=[];
		
		this.findElements=function(id,regex) {
			return me.skin.findElements(id,regex);
		}
		
		{
			this.__div=document.createElement('div');
			this.__div.ggId="ht_node";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:0.8,sy:0.8 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 5px;';
			hs+='left : 193px;';
			hs+='position : absolute;';
			hs+='top : 297px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			hs+='pointer-events:auto;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			this.__div.style[domTransform]=parameterToTransform(this.__div.ggParameter);
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function (e) {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function (e) {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function (e) {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function (useTransition) {
			}
			this._htmarkercompents=document.createElement('div');
			this._htmarkercompents.ggId="ht-marker-compents";
			this._htmarkercompents.ggLeft=-32;
			this._htmarkercompents.ggTop=-51;
			this._htmarkercompents.ggParameter={ rx:0,ry:0,a:0,sx:0.8,sy:0.8 };
			this._htmarkercompents.ggVisible=true;
			this._htmarkercompents.className='ggskin ggskin_container ';
			this._htmarkercompents.ggType='container';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 60px;';
			hs+='left : -32px;';
			hs+='position : absolute;';
			hs+='top : -51px;';
			hs+='visibility : inherit;';
			hs+='width : 60px;';
			hs+='pointer-events:none;';
			this._htmarkercompents.setAttribute('style',hs);
			this._htmarkercompents.style[domTransform + 'Origin']='50% 50%';
			this._htmarkercompents.style[domTransform]=parameterToTransform(this._htmarkercompents.ggParameter);
			me._htmarkercompents.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._htmarkercompents.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._htmarkercompents.onclick=function (e) {
				me.player.openUrl(me.ggUserdata.information,"_blank");
			}
			this._htmarkercompents.onmouseover=function (e) {
				if (me.player.transitionsDisabled) {
					me._htmarkercompents.style[domTransition]='none';
				} else {
					me._htmarkercompents.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._htmarkercompents.ggParameter.sx=0.9;me._htmarkercompents.ggParameter.sy=0.9;
				me._htmarkercompents.style[domTransform]=parameterToTransform(me._htmarkercompents.ggParameter);
				me.elementMouseOver['htmarkercompents']=true;
			}
			this._htmarkercompents.onmouseout=function (e) {
				if (me.player.transitionsDisabled) {
					me._htmarkercompents.style[domTransition]='none';
				} else {
					me._htmarkercompents.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._htmarkercompents.ggParameter.sx=0.8;me._htmarkercompents.ggParameter.sy=0.8;
				me._htmarkercompents.style[domTransform]=parameterToTransform(me._htmarkercompents.ggParameter);
				me.elementMouseOver['htmarkercompents']=false;
			}
			this._htmarkercompents.ontouchend=function (e) {
				me.elementMouseOver['htmarkercompents']=false;
			}
			me._htmarkercompents.ggCurrentLogicStateVisible = -1;
			this._htmarkercompents.ggUpdateConditionNodeChange=function () {
				var newLogicStateVisible;
				if (
					(me.ggUserdata.tags.indexOf("poi") == -1)
				)
				{
					newLogicStateVisible = 0;
				}
				else if (
					(me.ggUserdata.tags.indexOf("poi") != -1)
				)
				{
					newLogicStateVisible = 1;
				}
				else {
					newLogicStateVisible = -1;
				}
				if (me._htmarkercompents.ggCurrentLogicStateVisible != newLogicStateVisible) {
					me._htmarkercompents.ggCurrentLogicStateVisible = newLogicStateVisible;
					me._htmarkercompents.style[domTransition]='';
					if (me._htmarkercompents.ggCurrentLogicStateVisible == 0) {
						me._htmarkercompents.style.visibility=(Number(me._htmarkercompents.style.opacity)>0||!me._htmarkercompents.style.opacity)?'inherit':'hidden';
						me._htmarkercompents.ggVisible=true;
					}
					else if (me._htmarkercompents.ggCurrentLogicStateVisible == 1) {
						me._htmarkercompents.style.visibility="hidden";
						me._htmarkercompents.ggVisible=false;
					}
					else {
						me._htmarkercompents.style.visibility=(Number(me._htmarkercompents.style.opacity)>0||!me._htmarkercompents.style.opacity)?'inherit':'hidden';
						me._htmarkercompents.ggVisible=true;
					}
				}
			}
			this._htmarkercompents.ggUpdatePosition=function (useTransition) {
				if (useTransition==='undefined') {
					useTransition = false;
				}
				if (!useTransition) {
					this.style[domTransition]='none';
				}
				if (this.parentNode) {
					var w=this.parentNode.offsetWidth;
						this.style.left=(this.ggLeft - 0 + w/2) + 'px';
					var h=this.parentNode.offsetHeight;
						this.style.top=(this.ggTop - 0 + h/2) + 'px';
				}
			}
			this._htmarkercompents.ggNodeChange=function () {
				me._htmarkercompents.ggUpdateConditionNodeChange();
			}
			this._htmarker=document.createElement('div');
			this._htmarker__img=document.createElement('img');
			this._htmarker__img.className='ggskin ggskin_image';
			this._htmarker__img.setAttribute('src',basePath + 'images/htmarker.png');
			this._htmarker__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._htmarker__img.className='ggskin ggskin_image';
			this._htmarker__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._htmarker__img);
			this._htmarker.appendChild(this._htmarker__img);
			this._htmarker.ggId="ht-marker";
			this._htmarker.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._htmarker.ggVisible=true;
			this._htmarker.className='ggskin ggskin_image ';
			this._htmarker.ggType='image';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 64px;';
			hs+='left : -2px;';
			hs+='position : absolute;';
			hs+='top : -2px;';
			hs+='visibility : inherit;';
			hs+='width : 64px;';
			hs+='pointer-events:auto;';
			this._htmarker.setAttribute('style',hs);
			this._htmarker.style[domTransform + 'Origin']='50% 50%';
			me._htmarker.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._htmarker.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._htmarker.ggUpdatePosition=function (useTransition) {
			}
			this._htmarkercompents.appendChild(this._htmarker);
			this._titletext=document.createElement('div');
			this._titletext__text=document.createElement('div');
			this._titletext.className='ggskin ggskin_textdiv';
			this._titletext.ggTextDiv=this._titletext__text;
			this._titletext.ggId="title-text";
			this._titletext.ggParameter={ rx:0,ry:0,a:0,sx:1.35,sy:1.35 };
			this._titletext.ggVisible=true;
			this._titletext.className='ggskin ggskin_text ';
			this._titletext.ggType='text';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 16px;';
			hs+='left : 18px;';
			hs+='position : absolute;';
			hs+='top : 31px;';
			hs+='visibility : inherit;';
			hs+='width : 22px;';
			hs+='pointer-events:auto;';
			this._titletext.setAttribute('style',hs);
			this._titletext.style[domTransform + 'Origin']='50% 50%';
			this._titletext.style[domTransform]=parameterToTransform(this._titletext.ggParameter);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='border: 0px solid #000000;';
			hs+='color: rgba(255,90,96,1);';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._titletext__text.setAttribute('style',hs);
			this._titletext.ggUpdateText=function() {
				var hs="<b>"+me.ggUserdata.title+"<\/b>";
				if (hs!=this.ggText) {
					this.ggText=hs;
					this.ggTextDiv.innerHTML=hs;
					if (this.ggUpdatePosition) this.ggUpdatePosition();
				}
			}
			me._titletext.ggUpdateText();
			this._titletext.appendChild(this._titletext__text);
			me._titletext.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._titletext.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._titletext.ggUpdatePosition=function (useTransition) {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=((22-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			this._htmarkercompents.appendChild(this._titletext);
			this._descrtext=document.createElement('div');
			this._descrtext__text=document.createElement('div');
			this._descrtext.className='ggskin ggskin_textdiv';
			this._descrtext.ggTextDiv=this._descrtext__text;
			this._descrtext.ggId="descr-text";
			this._descrtext.ggParameter={ rx:0,ry:0,a:0,sx:1.5,sy:1.5 };
			this._descrtext.ggVisible=true;
			this._descrtext.className='ggskin ggskin_text ';
			this._descrtext.ggType='text';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 16px;';
			hs+='left : -35px;';
			hs+='opacity : 0;';
			hs+='position : absolute;';
			hs+='top : -54px;';
			hs+='visibility : hidden;';
			hs+='width : 128px;';
			hs+='pointer-events:auto;';
			this._descrtext.setAttribute('style',hs);
			this._descrtext.style[domTransform + 'Origin']='50% 100%';
			this._descrtext.style[domTransform]=parameterToTransform(this._descrtext.ggParameter);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 128px;';
			hs+='height: auto;';
			hs+='background: #ff5a60;';
			hs+='background: rgba(255,90,96,0.941176);';
			hs+='border: 0px solid #ffffff;';
			hs+='border-radius: 3px;';
			hs+=cssPrefix + 'border-radius: 3px;';
			hs+='color: rgba(255,255,255,1);';
			hs+='text-align: center;';
			hs+='white-space: pre-wrap;';
			hs+='padding: 1px 2px 1px 2px;';
			hs+='overflow: hidden;';
			this._descrtext__text.setAttribute('style',hs);
			this._descrtext.ggUpdateText=function() {
				var hs=me.ggUserdata.description;
				if (hs!=this.ggText) {
					this.ggText=hs;
					this.ggTextDiv.innerHTML=hs;
					if (this.ggUpdatePosition) this.ggUpdatePosition();
				}
			}
			me._descrtext.ggUpdateText();
			this._descrtext.appendChild(this._descrtext__text);
			me._descrtext.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._descrtext.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			me._descrtext.ggCurrentLogicStateAlpha = -1;
			this._descrtext.ggUpdateConditionTimer=function () {
				var newLogicStateAlpha;
				if (
					(me.elementMouseOver['htmarkercompents'] == true)
				)
				{
					newLogicStateAlpha = 0;
				}
				else {
					newLogicStateAlpha = -1;
				}
				if (me._descrtext.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
					me._descrtext.ggCurrentLogicStateAlpha = newLogicStateAlpha;
					me._descrtext.style[domTransition]='opacity 250ms ease 0ms, visibility 250ms ease 0ms';
					if (me._descrtext.ggCurrentLogicStateAlpha == 0) {
						me._descrtext.style.visibility=me._descrtext.ggVisible?'inherit':'hidden';
						me._descrtext.style.opacity=1;
					}
					else {
						me._descrtext.style.visibility="hidden";
						me._descrtext.style.opacity=0;
					}
				}
			}
			this._descrtext.ggUpdatePosition=function (useTransition) {
			}
			this._htmarkercompents.appendChild(this._descrtext);
			this.__div.appendChild(this._htmarkercompents);
			this._poicompents=document.createElement('div');
			this._poicompents.ggId="poi-compents";
			this._poicompents.ggLeft=-28;
			this._poicompents.ggTop=-28;
			this._poicompents.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._poicompents.ggVisible=true;
			this._poicompents.className='ggskin ggskin_container ';
			this._poicompents.ggType='container';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 39px;';
			hs+='left : -28px;';
			hs+='position : absolute;';
			hs+='top : -28px;';
			hs+='visibility : inherit;';
			hs+='width : 53px;';
			hs+='pointer-events:none;';
			this._poicompents.setAttribute('style',hs);
			this._poicompents.style[domTransform + 'Origin']='50% 50%';
			me._poicompents.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._poicompents.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._poicompents.onclick=function (e) {
				me.player.openNext(me.hotspot.url,"");
			}
			this._poicompents.onmouseover=function (e) {
				if (me.player.transitionsDisabled) {
					me._poicompents.style[domTransition]='none';
				} else {
					me._poicompents.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._poicompents.ggParameter.sx=1.1;me._poicompents.ggParameter.sy=1.1;
				me._poicompents.style[domTransform]=parameterToTransform(me._poicompents.ggParameter);
				me.elementMouseOver['poicompents']=true;
			}
			this._poicompents.onmouseout=function (e) {
				if (me.player.transitionsDisabled) {
					me._poicompents.style[domTransition]='none';
				} else {
					me._poicompents.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._poicompents.ggParameter.sx=1;me._poicompents.ggParameter.sy=1;
				me._poicompents.style[domTransform]=parameterToTransform(me._poicompents.ggParameter);
				me.elementMouseOver['poicompents']=false;
			}
			this._poicompents.ontouchend=function (e) {
				me.elementMouseOver['poicompents']=false;
			}
			me._poicompents.ggCurrentLogicStateVisible = -1;
			this._poicompents.ggUpdateConditionNodeChange=function () {
				var newLogicStateVisible;
				if (
					(me.ggUserdata.tags.indexOf("poi") == -1)
				)
				{
					newLogicStateVisible = 0;
				}
				else if (
					(me.ggUserdata.tags.indexOf("poi") != -1)
				)
				{
					newLogicStateVisible = 1;
				}
				else {
					newLogicStateVisible = -1;
				}
				if (me._poicompents.ggCurrentLogicStateVisible != newLogicStateVisible) {
					me._poicompents.ggCurrentLogicStateVisible = newLogicStateVisible;
					me._poicompents.style[domTransition]='';
					if (me._poicompents.ggCurrentLogicStateVisible == 0) {
						me._poicompents.style.visibility="hidden";
						me._poicompents.ggVisible=false;
					}
					else if (me._poicompents.ggCurrentLogicStateVisible == 1) {
						me._poicompents.style.visibility=(Number(me._poicompents.style.opacity)>0||!me._poicompents.style.opacity)?'inherit':'hidden';
						me._poicompents.ggVisible=true;
					}
					else {
						me._poicompents.style.visibility=(Number(me._poicompents.style.opacity)>0||!me._poicompents.style.opacity)?'inherit':'hidden';
						me._poicompents.ggVisible=true;
					}
				}
			}
			this._poicompents.ggUpdatePosition=function (useTransition) {
				if (useTransition==='undefined') {
					useTransition = false;
				}
				if (!useTransition) {
					this.style[domTransition]='none';
				}
				if (this.parentNode) {
					var w=this.parentNode.offsetWidth;
						this.style.left=(this.ggLeft - 0 + w/2) + 'px';
					var h=this.parentNode.offsetHeight;
						this.style.top=(this.ggTop - 0 + h/2) + 'px';
				}
			}
			this._poicompents.ggNodeChange=function () {
				me._poicompents.ggUpdateConditionNodeChange();
			}
			this._poipano=document.createElement('div');
			this._poipano__img=document.createElement('img');
			this._poipano__img.className='ggskin ggskin_button';
			this._poipano__img.setAttribute('src',basePath + 'images/poipano.png');
			this._poipano__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._poipano__img.className='ggskin ggskin_button';
			this._poipano__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._poipano__img);
			this._poipano.appendChild(this._poipano__img);
			this._poipano.ggId="poi-pano";
			this._poipano.ggParameter={ rx:0,ry:0,a:0,sx:0.9,sy:0.9 };
			this._poipano.ggVisible=true;
			this._poipano.className='ggskin ggskin_button ';
			this._poipano.ggType='button';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 39px;';
			hs+='left : 0px;';
			hs+='position : absolute;';
			hs+='top : 0px;';
			hs+='visibility : inherit;';
			hs+='width : 53px;';
			hs+='pointer-events:auto;';
			this._poipano.setAttribute('style',hs);
			this._poipano.style[domTransform + 'Origin']='50% 0%';
			this._poipano.style[domTransform]=parameterToTransform(this._poipano.ggParameter);
			me._poipano.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._poipano.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			me._poipano.ggCurrentLogicStateScaling = -1;
			this._poipano.ggUpdateConditionTimer=function () {
				var newLogicStateScaling;
				if (
					(me._poipano.ggIsActive() == true)
				)
				{
					newLogicStateScaling = 0;
				}
				else {
					newLogicStateScaling = -1;
				}
				if (me._poipano.ggCurrentLogicStateScaling != newLogicStateScaling) {
					me._poipano.ggCurrentLogicStateScaling = newLogicStateScaling;
					me._poipano.style[domTransition]='' + cssPrefix + 'transform none';
					if (me._poipano.ggCurrentLogicStateScaling == 0) {
						me._poipano.ggParameter.sx = 1.05;
						me._poipano.ggParameter.sy = 1.05;
						me._poipano.style[domTransform]=parameterToTransform(me._poipano.ggParameter);
					}
					else {
						me._poipano.ggParameter.sx = 0.9;
						me._poipano.ggParameter.sy = 0.9;
						me._poipano.style[domTransform]=parameterToTransform(me._poipano.ggParameter);
					}
				}
			}
			this._poipano.ggUpdatePosition=function (useTransition) {
			}
			this._poicompents.appendChild(this._poipano);
			this._nodeimage_1=document.createElement('div');
			this._nodeimage_1__img=document.createElement('img');
			this._nodeimage_1__img.className='ggskin ggskin_nodeimage';
			this._nodeimage_1__img.setAttribute('src',basePath + "images/nodeimage_1_" + nodeId + ".jpg");
			this._nodeimage_1.ggNodeId=nodeId;
			this._nodeimage_1__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._nodeimage_1__img.className='ggskin ggskin_nodeimage';
			this._nodeimage_1__img['ondragstart']=function() { return false; };
			this._nodeimage_1.appendChild(this._nodeimage_1__img);
			this._nodeimage_1.ggId="NodeImage 1";
			this._nodeimage_1.ggParameter={ rx:0,ry:0,a:0,sx:0.9,sy:0.9 };
			this._nodeimage_1.ggVisible=true;
			this._nodeimage_1.className='ggskin ggskin_nodeimage ';
			this._nodeimage_1.ggType='nodeimage';
			hs ='';
			hs+='height : 150px;';
			hs+='left : -98px;';
			hs+='opacity : 0;';
			hs+='position : absolute;';
			hs+='top : -156px;';
			hs+='visibility : hidden;';
			hs+='width : 250px;';
			hs+='pointer-events:auto;';
			this._nodeimage_1.setAttribute('style',hs);
			this._nodeimage_1.style[domTransform + 'Origin']='50% 100%';
			this._nodeimage_1.style[domTransform]=parameterToTransform(this._nodeimage_1.ggParameter);
			me._nodeimage_1.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me._nodeimage_1.ggElementNodeId=function() {
				return this.ggNodeId;
			}
			me._nodeimage_1.ggCurrentLogicStateAlpha = -1;
			this._nodeimage_1.ggUpdateConditionTimer=function () {
				var newLogicStateAlpha;
				if (
					(me.elementMouseOver['poicompents'] == true)
				)
				{
					newLogicStateAlpha = 0;
				}
				else {
					newLogicStateAlpha = -1;
				}
				if (me._nodeimage_1.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
					me._nodeimage_1.ggCurrentLogicStateAlpha = newLogicStateAlpha;
					me._nodeimage_1.style[domTransition]='opacity 250ms ease 0ms, visibility 250ms ease 0ms';
					if (me._nodeimage_1.ggCurrentLogicStateAlpha == 0) {
						me._nodeimage_1.style.visibility=me._nodeimage_1.ggVisible?'inherit':'hidden';
						me._nodeimage_1.style.opacity=1;
					}
					else {
						me._nodeimage_1.style.visibility="hidden";
						me._nodeimage_1.style.opacity=0;
					}
				}
			}
			this._nodeimage_1.ggUpdatePosition=function (useTransition) {
			}
			this._rectangle_1=document.createElement('div');
			this._rectangle_1.ggId="Rectangle 1";
			this._rectangle_1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._rectangle_1.ggVisible=true;
			this._rectangle_1.className='ggskin ggskin_rectangle ';
			this._rectangle_1.ggType='rectangle';
			hs ='';
			hs+=cssPrefix + 'border-radius : 3px;';
			hs+='border-radius : 3px;';
			hs+='border : 2px solid #ff5a60;';
			hs+='cursor : default;';
			hs+='height : 149px;';
			hs+='left : -1px;';
			hs+='position : absolute;';
			hs+='top : -1px;';
			hs+='visibility : inherit;';
			hs+='width : 249px;';
			hs+='pointer-events:auto;';
			this._rectangle_1.setAttribute('style',hs);
			this._rectangle_1.style[domTransform + 'Origin']='50% 50%';
			me._rectangle_1.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._rectangle_1.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._rectangle_1.ggUpdatePosition=function (useTransition) {
			}
			this._nodeimage_1.appendChild(this._rectangle_1);
			this._rectangle_2=document.createElement('div');
			this._rectangle_2.ggId="Rectangle 2";
			this._rectangle_2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._rectangle_2.ggVisible=true;
			this._rectangle_2.className='ggskin ggskin_rectangle ';
			this._rectangle_2.ggType='rectangle';
			hs ='';
			hs+=cssPrefix + 'border-radius : 3px;';
			hs+='border-radius : 3px;';
			hs+='background : rgba(255,255,255,0.901961);';
			hs+='border : 1px solid #ff5a60;';
			hs+='cursor : default;';
			hs+='height : 19px;';
			hs+='left : 0px;';
			hs+='position : absolute;';
			hs+='top : 0px;';
			hs+='visibility : inherit;';
			hs+='width : 250px;';
			hs+='pointer-events:auto;';
			this._rectangle_2.setAttribute('style',hs);
			this._rectangle_2.style[domTransform + 'Origin']='50% 50%';
			me._rectangle_2.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._rectangle_2.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._rectangle_2.ggUpdatePosition=function (useTransition) {
			}
			this._nodeimage_1.appendChild(this._rectangle_2);
			this._titlepoipanotext=document.createElement('div');
			this._titlepoipanotext__text=document.createElement('div');
			this._titlepoipanotext.className='ggskin ggskin_textdiv';
			this._titlepoipanotext.ggTextDiv=this._titlepoipanotext__text;
			this._titlepoipanotext.ggId="title-poi-pano-text";
			this._titlepoipanotext.ggParameter={ rx:0,ry:0,a:0,sx:1.2,sy:1.2 };
			this._titlepoipanotext.ggVisible=true;
			this._titlepoipanotext.className='ggskin ggskin_text ';
			this._titlepoipanotext.ggType='text';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 16px;';
			hs+='left : 98px;';
			hs+='position : absolute;';
			hs+='top : 0px;';
			hs+='visibility : inherit;';
			hs+='width : 50px;';
			hs+='pointer-events:auto;';
			this._titlepoipanotext.setAttribute('style',hs);
			this._titlepoipanotext.style[domTransform + 'Origin']='50% 0%';
			this._titlepoipanotext.style[domTransform]=parameterToTransform(this._titlepoipanotext.ggParameter);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='border: 0px solid #ff5a60;';
			hs+='color: rgba(255,90,96,1);';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 3px 0px 3px;';
			hs+='overflow: hidden;';
			this._titlepoipanotext__text.setAttribute('style',hs);
			this._titlepoipanotext.ggUpdateText=function() {
				var hs=me.ggUserdata.title;
				if (hs!=this.ggText) {
					this.ggText=hs;
					this.ggTextDiv.innerHTML=hs;
					if (this.ggUpdatePosition) this.ggUpdatePosition();
				}
			}
			me._titlepoipanotext.ggUpdateText();
			this._titlepoipanotext.appendChild(this._titlepoipanotext__text);
			me._titlepoipanotext.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._titlepoipanotext.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._titlepoipanotext.ggUpdatePosition=function (useTransition) {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=((50-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			this._nodeimage_1.appendChild(this._titlepoipanotext);
			this._poicompents.appendChild(this._nodeimage_1);
			this.__div.appendChild(this._poicompents);
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				if (me.elementMouseOver['htmarkercompents']) {
				}
				me._titletext.ggUpdateText();
				me._descrtext.ggUpdateText();
				me._descrtext.ggUpdateConditionTimer();
				if (me.elementMouseOver['poicompents']) {
				}
				me._poipano.ggUpdateConditionTimer();
				me._nodeimage_1.ggUpdateConditionTimer();
				me._titlepoipanotext.ggUpdateText();
			}
			this.hotspotTimerEvent();
		}
	};
	this.addSkinHotspot=function(hotspot) {
		return new SkinHotspotClass(me,hotspot);
	}
	function SkinElement_hidecontainer_Class(skinObj,ggParent) {
		var me=this;
		var flag=false;
		this.player=skinObj.player;
		this.skin=skinObj;
		this.ggParent=ggParent;
		var nodeId=ggParent.ggElementNodeId();
		this.ggNodeId=nodeId;
		this.ggUserdata=this.skin.player.getNodeUserdata(nodeId);
		this.elementMouseDown=[];
		this.elementMouseOver=[];
		
		this.findElements=function(id,regex) {
			return me.skin.findElements(id,regex);
		}
		
		this._hidecontainer=document.createElement('div');
		this._hidecontainer.ggId="hide-container";
		this._hidecontainer.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._hidecontainer.ggVisible=true;
		this._hidecontainer.className='ggskin ggskin_container ';
		this._hidecontainer.ggType='container';
		hs ='';
		hs+='height : 136px;';
		hs+='left : 120px;';
		hs+='position : absolute;';
		hs+='top : 310px;';
		hs+='visibility : inherit;';
		hs+='width : 154px;';
		hs+='pointer-events:none;';
		this._hidecontainer.setAttribute('style',hs);
		this._hidecontainer.style[domTransform + 'Origin']='50% 50%';
		me._hidecontainer.ggIsActive=function() {
			return me.player.getCurrentNode()==this.ggElementNodeId();
		}
		me._hidecontainer.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		this._hidecontainer.ggUpdatePosition=function (useTransition) {
		}
		this._poimapcompents=document.createElement('div');
		this._poimapcompents.ggId="poi-map-compents";
		this._poimapcompents.ggLeft=-28;
		this._poimapcompents.ggTop=-24;
		this._poimapcompents.ggParameter={ rx:0,ry:0,a:0,sx:0.9,sy:0.9 };
		this._poimapcompents.ggVisible=true;
		this._poimapcompents.className='ggskin ggskin_container ';
		this._poimapcompents.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 39px;';
		hs+='left : -28px;';
		hs+='position : absolute;';
		hs+='top : -24px;';
		hs+='visibility : inherit;';
		hs+='width : 53px;';
		hs+='pointer-events:none;';
		this._poimapcompents.setAttribute('style',hs);
		this._poimapcompents.style[domTransform + 'Origin']='50% 50%';
		this._poimapcompents.style[domTransform]=parameterToTransform(this._poimapcompents.ggParameter);
		me._poimapcompents.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._poimapcompents.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		this._poimapcompents.onclick=function (e) {
			me.player.openNext("{"+me.ggNodeId+"}","");
		}
		this._poimapcompents.onmouseover=function (e) {
			me._poimapcompents.style[domTransition]='none';
			me._poimapcompents.ggParameter.sx=1;me._poimapcompents.ggParameter.sy=1;
			me._poimapcompents.style[domTransform]=parameterToTransform(me._poimapcompents.ggParameter);
		}
		this._poimapcompents.onmouseout=function (e) {
			me._poimapcompents.style[domTransition]='none';
			me._poimapcompents.ggParameter.sx=0.9;me._poimapcompents.ggParameter.sy=0.9;
			me._poimapcompents.style[domTransform]=parameterToTransform(me._poimapcompents.ggParameter);
		}
		me._poimapcompents.ggCurrentLogicStateScaling = -1;
		me._poimapcompents.ggCurrentLogicStateVisible = -1;
		this._poimapcompents.ggUpdateConditionTimer=function () {
			var newLogicStateScaling;
			if (
				(me._poimapcompents.ggIsActive() == true)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._poimapcompents.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._poimapcompents.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._poimapcompents.style[domTransition]='' + cssPrefix + 'transform 250ms ease 0ms';
				if (me._poimapcompents.ggCurrentLogicStateScaling == 0) {
					me._poimapcompents.ggParameter.sx = 1;
					me._poimapcompents.ggParameter.sy = 1;
					me._poimapcompents.style[domTransform]=parameterToTransform(me._poimapcompents.ggParameter);
				}
				else {
					me._poimapcompents.ggParameter.sx = 0.9;
					me._poimapcompents.ggParameter.sy = 0.9;
					me._poimapcompents.style[domTransform]=parameterToTransform(me._poimapcompents.ggParameter);
				}
			}
		}
		this._poimapcompents.ggUpdateConditionNodeChange=function () {
			var newLogicStateVisible;
			if (
				(me.ggUserdata.tags.indexOf("poi") == -1)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._poimapcompents.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._poimapcompents.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._poimapcompents.style[domTransition]='' + cssPrefix + 'transform 250ms ease 0ms';
				if (me._poimapcompents.ggCurrentLogicStateVisible == 0) {
					me._poimapcompents.style.visibility="hidden";
					me._poimapcompents.ggVisible=false;
				}
				else {
					me._poimapcompents.style.visibility=(Number(me._poimapcompents.style.opacity)>0||!me._poimapcompents.style.opacity)?'inherit':'hidden';
					me._poimapcompents.ggVisible=true;
				}
			}
		}
		this._poimapcompents.ggUpdatePosition=function (useTransition) {
		}
		this._poimapcompents.ggNodeChange=function () {
			me._poimapcompents.ggUpdateConditionNodeChange();
		}
		this._poimap=document.createElement('div');
		this._poimap__img=document.createElement('img');
		this._poimap__img.className='ggskin ggskin_button';
		this._poimap__img.setAttribute('src',basePath + 'images/poimap.png');
		this._poimap__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._poimap__img.className='ggskin ggskin_button';
		this._poimap__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._poimap__img);
		this._poimap.appendChild(this._poimap__img);
		this._poimap.ggId="poi-map";
		this._poimap.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._poimap.ggVisible=true;
		this._poimap.className='ggskin ggskin_button ';
		this._poimap.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 39px;';
		hs+='left : 1px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 53px;';
		hs+='pointer-events:auto;';
		this._poimap.setAttribute('style',hs);
		this._poimap.style[domTransform + 'Origin']='50% 0%';
		me._poimap.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._poimap.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		this._poimap.ggUpdatePosition=function (useTransition) {
		}
		this._poimapcompents.appendChild(this._poimap);
		this._titlepoimaptext=document.createElement('div');
		this._titlepoimaptext__text=document.createElement('div');
		this._titlepoimaptext.className='ggskin ggskin_textdiv';
		this._titlepoimaptext.ggTextDiv=this._titlepoimaptext__text;
		this._titlepoimaptext.ggId="title-poi-map-text";
		this._titlepoimaptext.ggParameter={ rx:0,ry:0,a:0,sx:1.35,sy:1.35 };
		this._titlepoimaptext.ggVisible=true;
		this._titlepoimaptext.className='ggskin ggskin_text ';
		this._titlepoimaptext.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 15px;';
		hs+='left : 2px;';
		hs+='position : absolute;';
		hs+='top : -21px;';
		hs+='visibility : inherit;';
		hs+='width : 49px;';
		hs+='pointer-events:auto;';
		this._titlepoimaptext.setAttribute('style',hs);
		this._titlepoimaptext.style[domTransform + 'Origin']='50% 100%';
		this._titlepoimaptext.style[domTransform]=parameterToTransform(this._titlepoimaptext.ggParameter);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='border: 1px solid #ff5a60;';
		hs+='border-radius: 2px;';
		hs+=cssPrefix + 'border-radius: 2px;';
		hs+='color: rgba(255,90,96,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 3px 0px 3px;';
		hs+='overflow: hidden;';
		this._titlepoimaptext__text.setAttribute('style',hs);
		this._titlepoimaptext__text.innerHTML=me.ggUserdata.title;
		this._titlepoimaptext.appendChild(this._titlepoimaptext__text);
		me._titlepoimaptext.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._titlepoimaptext.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		this._titlepoimaptext.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=((51-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		this._poimapcompents.appendChild(this._titlepoimaptext);
		this._hidecontainer.appendChild(this._poimapcompents);
		this._panomapcompents=document.createElement('div');
		this._panomapcompents.ggId="pano-map-compents";
		this._panomapcompents.ggLeft=-31;
		this._panomapcompents.ggTop=-21;
		this._panomapcompents.ggParameter={ rx:0,ry:0,a:0,sx:0.9,sy:0.9 };
		this._panomapcompents.ggVisible=true;
		this._panomapcompents.className='ggskin ggskin_container ';
		this._panomapcompents.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : -31px;';
		hs+='position : absolute;';
		hs+='top : -21px;';
		hs+='visibility : inherit;';
		hs+='width : 59px;';
		hs+='pointer-events:none;';
		this._panomapcompents.setAttribute('style',hs);
		this._panomapcompents.style[domTransform + 'Origin']='50% 50%';
		this._panomapcompents.style[domTransform]=parameterToTransform(this._panomapcompents.ggParameter);
		me._panomapcompents.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._panomapcompents.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		this._panomapcompents.onclick=function (e) {
			me.player.openUrl(me.ggUserdata.information,"_blank");
		}
		this._panomapcompents.onmouseover=function (e) {
			me._panomapcompents.style[domTransition]='none';
			me._panomapcompents.ggParameter.sx=1;me._panomapcompents.ggParameter.sy=1;
			me._panomapcompents.style[domTransform]=parameterToTransform(me._panomapcompents.ggParameter);
			me.elementMouseOver['panomapcompents']=true;
		}
		this._panomapcompents.onmouseout=function (e) {
			me._panomapcompents.style[domTransition]='none';
			me._panomapcompents.ggParameter.sx=0.9;me._panomapcompents.ggParameter.sy=0.9;
			me._panomapcompents.style[domTransform]=parameterToTransform(me._panomapcompents.ggParameter);
			me.elementMouseOver['panomapcompents']=false;
		}
		this._panomapcompents.ontouchend=function (e) {
			me.elementMouseOver['panomapcompents']=false;
		}
		me._panomapcompents.ggCurrentLogicStateVisible = -1;
		this._panomapcompents.ggUpdateConditionNodeChange=function () {
			var newLogicStateVisible;
			if (
				(me.ggUserdata.tags.indexOf("poi") != -1)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._panomapcompents.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._panomapcompents.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._panomapcompents.style[domTransition]='';
				if (me._panomapcompents.ggCurrentLogicStateVisible == 0) {
					me._panomapcompents.style.visibility="hidden";
					me._panomapcompents.ggVisible=false;
				}
				else {
					me._panomapcompents.style.visibility=(Number(me._panomapcompents.style.opacity)>0||!me._panomapcompents.style.opacity)?'inherit':'hidden';
					me._panomapcompents.ggVisible=true;
				}
			}
		}
		this._panomapcompents.ggUpdatePosition=function (useTransition) {
		}
		this._panomapcompents.ggNodeChange=function () {
			me._panomapcompents.ggUpdateConditionNodeChange();
		}
		this._abnbpin=document.createElement('div');
		this._abnbpin__img=document.createElement('img');
		this._abnbpin__img.className='ggskin ggskin_button';
		this._abnbpin__img.setAttribute('src',basePath + 'images/abnbpin.png');
		this._abnbpin__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._abnbpin__img.className='ggskin ggskin_button';
		this._abnbpin__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._abnbpin__img);
		this._abnbpin.appendChild(this._abnbpin__img);
		this._abnbpin.ggId="abnb-pin";
		this._abnbpin.ggParameter={ rx:0,ry:0,a:0,sx:0.95,sy:0.95 };
		this._abnbpin.ggVisible=true;
		this._abnbpin.className='ggskin ggskin_button ';
		this._abnbpin.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 59px;';
		hs+='pointer-events:auto;';
		this._abnbpin.setAttribute('style',hs);
		this._abnbpin.style[domTransform + 'Origin']='50% 50%';
		this._abnbpin.style[domTransform]=parameterToTransform(this._abnbpin.ggParameter);
		me._abnbpin.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._abnbpin.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		this._abnbpin.ggUpdatePosition=function (useTransition) {
		}
		this._panomapcompents.appendChild(this._abnbpin);
		this._titlemaptext=document.createElement('div');
		this._titlemaptext__text=document.createElement('div');
		this._titlemaptext.className='ggskin ggskin_textdiv';
		this._titlemaptext.ggTextDiv=this._titlemaptext__text;
		this._titlemaptext.ggId="title-map-text";
		this._titlemaptext.ggParameter={ rx:0,ry:0,a:0,sx:1.3,sy:1.3 };
		this._titlemaptext.ggVisible=true;
		this._titlemaptext.className='ggskin ggskin_text ';
		this._titlemaptext.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 16px;';
		hs+='left : 8px;';
		hs+='position : absolute;';
		hs+='top : 8px;';
		hs+='visibility : inherit;';
		hs+='width : 41px;';
		hs+='pointer-events:auto;';
		this._titlemaptext.setAttribute('style',hs);
		this._titlemaptext.style[domTransform + 'Origin']='50% 50%';
		this._titlemaptext.style[domTransform]=parameterToTransform(this._titlemaptext.ggParameter);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #ff5a60;';
		hs+='border-radius: 1px;';
		hs+=cssPrefix + 'border-radius: 1px;';
		hs+='color: rgba(255,90,96,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._titlemaptext__text.setAttribute('style',hs);
		this._titlemaptext__text.innerHTML="<b>"+me.ggUserdata.title+"<\/b>";
		this._titlemaptext.appendChild(this._titlemaptext__text);
		me._titlemaptext.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._titlemaptext.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		this._titlemaptext.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=((41-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		this._panomapcompents.appendChild(this._titlemaptext);
		this._panotitlepin=document.createElement('div');
		this._panotitlepin__text=document.createElement('div');
		this._panotitlepin.className='ggskin ggskin_textdiv';
		this._panotitlepin.ggTextDiv=this._panotitlepin__text;
		this._panotitlepin.ggId="pano-title-pin";
		this._panotitlepin.ggParameter={ rx:0,ry:0,a:0,sx:1.2,sy:1.2 };
		this._panotitlepin.ggVisible=true;
		this._panotitlepin.className='ggskin ggskin_text ';
		this._panotitlepin.ggType='text';
		hs ='';
		hs+='height : 16px;';
		hs+='left : -30px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -30px;';
		hs+='visibility : hidden;';
		hs+='width : 118px;';
		hs+='pointer-events:auto;';
		this._panotitlepin.setAttribute('style',hs);
		this._panotitlepin.style[domTransform + 'Origin']='50% 100%';
		this._panotitlepin.style[domTransform]=parameterToTransform(this._panotitlepin.ggParameter);
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 118px;';
		hs+='height: auto;';
		hs+='background: #ff5a60;';
		hs+='background: rgba(255,90,96,0.960784);';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 2px;';
		hs+=cssPrefix + 'border-radius: 2px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 3px 0px 3px;';
		hs+='overflow: hidden;';
		this._panotitlepin__text.setAttribute('style',hs);
		this._panotitlepin__text.innerHTML=me.ggUserdata.description;
		this._panotitlepin.appendChild(this._panotitlepin__text);
		me._panotitlepin.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._panotitlepin.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._panotitlepin.ggCurrentLogicStateAlpha = -1;
		this._panotitlepin.ggUpdateConditionTimer=function () {
			var newLogicStateAlpha;
			if (
				(me.elementMouseOver['panomapcompents'] == true)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._panotitlepin.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._panotitlepin.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._panotitlepin.style[domTransition]='opacity 250ms ease 0ms, visibility 250ms ease 0ms';
				if (me._panotitlepin.ggCurrentLogicStateAlpha == 0) {
					me._panotitlepin.style.visibility=me._panotitlepin.ggVisible?'inherit':'hidden';
					me._panotitlepin.style.opacity=1;
				}
				else {
					me._panotitlepin.style.visibility="hidden";
					me._panotitlepin.style.opacity=0;
				}
			}
		}
		this._panotitlepin.ggUpdatePosition=function (useTransition) {
		}
		this._panomapcompents.appendChild(this._panotitlepin);
		this._hidecontainer.appendChild(this._panomapcompents);
		this._hidecontainer.ggUpdateConditionTimer=function() {
			me._poimapcompents.ggUpdateConditionTimer();
			if (me.elementMouseOver['panomapcompents']) {
			}
			me._panotitlepin.ggUpdateConditionTimer();
		}
		this._hidecontainer.ggNodeChangeMain=function() {
			me._poimapcompents.ggNodeChange();
			me._panomapcompents.ggNodeChange();
		}
		return this._hidecontainer;
	};
	this.addSkin();
};