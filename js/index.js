/*$(function(){
	function resize(thesize,type){
		var type=type||x;
		var html=$("html");
		var w=$(window).width();
		var h=$(window).height();
		if(type=="x"){
			var scale=w/thesize*100;	
		}else if(type=="y"){
			var scale=h/thesize*100
		}
		document.getElementsByTagName("html").style.fontSize=scale+"px";
	}
	resize(1334,"y");
	var mySwiper = new Swiper ('.swiper-container', {
        pagination : '.swiper-pagination',
        onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
            swiperAnimateCache(swiper); //隐藏动画元素
            swiperAnimate(swiper); //初始化完成开始动画
        },
        onSlideChangeEnd: function(swiper){
            swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
        }
  });
})
*/