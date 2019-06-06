function animation(obj,attr,iTarget){
		//防止用户多次点击
		clearInterval(obj.timer);
		obj.timer = setInterval(function(){
			//获取当前该属性的值
			var currentVal = parseFloat(getComputedStyle(obj,false)[attr]);
			//处理透明度,将其转化为百分制数
			if(attr == "opacity"){
				currentVal = Math.round(currentVal*100);
			}
			//判断速度的取值
			if(currentVal < iTarget){
				iSpeed = 3;
 			}else{
 				iSpeed = -3;
 			}
 			//动画的终止条件
			if(Math.abs(iTarget - currentVal) < Math.abs(iSpeed)){
				//处理透明度和非透明度的取值
				if(attr == "opacity"){
					obj.style[attr] = iTarget/100;
				}else{
					obj.style[attr] = iTarget + "px";
				}
				//动画终止清除定时器
				clearInterval(obj.timer);
			}else{//动画不终止
				//处理透明度和非透明度的取值
				if(attr == "opacity"){
					obj.style[attr] = (currentVal + iSpeed)/100;
				}else{
					obj.style[attr] = currentVal + iSpeed + "px";
				}
			}
		},30)
	}
	


	function getScrollTop(){
		return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;//获取垂直方向上的距离
	}
	function getScrollLeft(){
		return window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft;//获取垂直方向上的距离
	}


	// oBox1.onclick= function(){
	// 	animation (oBox1,"width",400)}
	// 	oBox2.onclick= function(){
	// 	animation (oBox2,"height",400)}
	// 	oBox3.onclick= function(){
	// 	animation (oBox3,"opacity",400)}
