function $(id){
	return typeof id==='string'?document.getElementById(id):id;
}
window.onload=function(){
	var titles=$('main_content').getElementsByTagName('button');
	var divs=$('list_content').getElementsByTagName('div');
	for(var i=0;i<titles.length;i++){
		titles[i].id=i;
		titles[i].onclick=function(){
			for(var j=0;j<titles.length;j++){
				titles[j].className='';
			}
			for(var n=0;n<divs.length;n++){
				divs[n].style.display='none';
			}
		    this.className='btn_1';
			divs[this.id].style.display='block';
		}
	}
}