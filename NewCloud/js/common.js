!function($){
	$.fn.Puilist = function(options){
		var defaults = {
			titCell:'',//标题域
			mainCell:'',//内容域
			type:1,//打开方式 1.只打开一个，可以全部关闭;2.必须有一个打开;3.可打开多个
			trigger:'click',//操作方式 1. click 点击 2. mouseover 鼠标触碰
			className:"selected",// 内容展开后添加的样式名 当前框架无效果 开发者可以自行添加
			speed:'speed',//速度 1.毫秒（1500）2.slow 3.normal 4.fast
		}
		var options = $.extend(defaults, options);
		this.each(function(){	
			var that = $(this);
			that.find(options.titCell).on(options.trigger,function(){
				if ($(this).next().is(":visible")) {
					if (options.type == 2) {
						return false;
					} //只有当打开方式为 "必须有一个打开时" 无法操作
					else {
						$(this).next().slideUp(options.speed).end().removeClass(options.className);
						if ($(this).find("b")) {
							$(this).find("b").html("<i class='iconfont icon-sanx-up'></i>");
						}//如果有标识 改变标识状态
					}
				}//第一种大情况 当操作目标内容被展开时
				else {
					if (options.type == 3) {
						$(this).next().slideDown(options.speed).end().addClass(options.className);
						if ($(this).find("b")) {
							$(this).find("b").html("<i class='iconfont icon-choose-copy'></i>");
						}//如果有标识 改变标识状态
					} //只有当打开方式为"可以打开多个时" 无需将其他内容收回
					else {
						that.find(options.mainCell).slideUp(options.speed);
						that.find(options.titCell).removeClass(options.className);
						if (that.find(options.titCell).find("b")) {
							that.find(options.titCell).find("b").html("<i class='iconfont icon-sanx-up'></i>");
						}//如果有标识 改变标识状态
						$(this).next().slideDown(options.speed).end().addClass(options.className);
						if ($(this).find("b")) {
							$(this).find("b").html("<i class='iconfont icon-choose-copy'></i>");
						}//如果有标识 改变标识状态
					}//收回其他内容 展开当前内容
				}//第二种大情况 当操作目标内容未被展开时
			});
			
		});
	}
	$.fn.autoHeight = function(){
		function autoHeight(elem){
			elem.style.height = 'auto';
			elem.scrollTop = 0; //防抖动
			elem.style.height = elem.scrollHeight + 'px';
		}
		this.each(function(){
			autoHeight(this);
			$(this).on('keyup', function(){
				autoHeight(this);
			});
		});
	}
} (window.jQuery);