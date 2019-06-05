$(function(){
	$("#puilist1").Puilist({
		titCell:'.list-item h4',//标题域
		mainCell:'.list-item .info',//内容域
		type:3,//打开方式 1.只打开一个，可以全部关闭;2.必须有一个打开;3.可打开多个
		trigger:'click',//操作方式 1. click 点击 2. mouseover 鼠标触碰
		className:"selected",// 内容展开后添加的样式名 当前框架无效果 开发者可以自行添加
		speed:"normal",//速度 1.毫秒（1500）2.slow 3.normal 4.fast
	});
	$("#puilist2").Puilist({
		titCell:'.list-item h4',//标题域
		mainCell:'.list-item .info',//内容域
		type:3,//打开方式 1.只打开一个，可以全部关闭;2.必须有一个打开;3.可打开多个
		trigger:'click',//操作方式 1. click 点击 2. mouseover 鼠标触碰
		className:"selected",// 内容展开后添加的样式名 当前框架无效果 开发者可以自行添加
		speed:"normal",//速度 1.毫秒（1500）2.slow 3.normal 4.fast
	});
    $('img').on('mousedown',function (e) {
	    e.preventDefault()
	})
})