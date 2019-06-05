$(function(){
    // 表格全选
    $(".allcheck").change(function(){
        var box = $(this).parent().parent(".optable").siblings(".tabledata").find("input[name='checkbox']")
        if($(this).is(':checked')){
            if(box.length==box.filter(':not(:checked)').length){
                box.prop('checked',true);
            }else{
                box.each(function(){
                    $(this).prop('checked',$(this).is(':checked')?false:true);
                });
            }
        }else{
            box.prop('checked',false);
        }
    });
    // 切换
    $(".tabbox").find("button").click(function(){
        var index = $(this).index();
        $(this).siblings().removeClass("now");
        $(this).addClass("now");
        $(".tabcontent").find(".tab").removeClass("now");
        $(".tabcontent").find(".tab").eq(index).addClass("now")
    })
    // 菜单折叠
	$("#Puilist").Puilist({	
		titCell:'.list-item h4',//标题域	
		mainCell:'.list-item .info',//内容域	
		type:1,//打开方式 1.只打开一个，可以全部关闭;2.必须有一个打开;3.可打开多个	
		trigger:'click',//操作方式 1. click 点击 2. mouseover 鼠标触碰	
		className:"selected",// 内容展开后添加的样式名 当前框架无效果 开发者可以自行添加	
		speed:"normal",//速度 1.毫秒（1500）2.slow 3.normal 4.fast
	});	
    //菜单选中
    $(".info li.now").parent().parent().parent().addClass("active");
});