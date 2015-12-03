var $=function(id){return document.getElementById(id);}
function WinTip(){
	var win=new WinSize();
	var Tip=$("bg");
	Tip.style.width=win.W+"px";
	Tip.style.height=win.H+"px";
	if(Tip.style.display=="block"){
		Tip.style.display="none";
		$("win").style.display="none";
		}else{
				Tip.style.display="block";
				$("win").style.display="block";
			}
	}
function WinSize() //函数：获取尺寸
{
var winWidth = 0;
var winHeight = 0;
if (window.innerWidth)
winWidth = window.innerWidth;
else if ((document.body) && (document.body.clientWidth))
winWidth = document.body.clientWidth;
if (window.innerHeight)
winHeight = window.innerHeight;
else if ((document.body) && (document.body.clientHeight))
winHeight = document.body.clientHeight;
if (document.documentElement  && document.documentElement.clientHeight && document.documentElement.clientWidth)
{winHeight = document.documentElement.clientHeight;
winWidth = document.documentElement.clientWidth;}
return{"W":winWidth,"H":winHeight}
}