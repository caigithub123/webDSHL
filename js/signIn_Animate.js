$(function(){
	$(".datyMain").on("click",".signIn-Btn",function(){
		var dayItems = $(this).parent(),
			Img = $(dayItems).parents(".path-items").find("#Ant-Man"),
			idx = dayItems.index()+1;
		var antBean = $(".antBean").find("b"),
			text = $(".text");
		dayItems.addClass("done").removeClass("doing");
		switch( idx ){
		    case 1 :
		    	$(Img).stop().animate({"top": 0+"rem","left": 2.12+"rem"},500,function(){
		    		layer.tips('签到完成！', dayItems, {
	                	time: 0,
						tips: [2, '#E6C3FC']
					});
					$(dayItems).next().addClass("doing");
		    	});
	            $(text).html("第1天签到完成，获得20个豆");
		    	break;
		    case 2 :
		        $(Img).stop().animate({"top": .96+"rem","left": 4.8+"rem"},700,function(){
		        	layer.tips('签到完成！', dayItems, {
	                	time: 0,
						tips: [1, '#E6C3FC']
					});
					$(dayItems).next().addClass("doing");
		        });
	            $(text).html("已连续签到2天");
		    	break;
		    case 3 :
		        $(Img).animate({"top": 1.82+"rem","left": 6.2+"rem"},400,function(){
					$(Img).find("img").attr("src","images/signIn/signIn_ant-2.png");
		        }).animate({"top": 3.14+"rem","left": 6.06+"rem"},400,function(){
		        	layer.tips('签到完成！', dayItems, {
	                	time: 0,
						tips: [1, '#E6C3FC']
					});
					$(dayItems).next().addClass("doing");
		        });
	            $(text).html("已连续签到3天");
		    	break;
		    case 4 :
		        $(Img).stop().animate({"top": 3.8+"rem","left": 5.4+"rem"},300)
		        	.animate({"top": 3.52+"rem","left": 4.52+"rem"},300,function(){
		        		layer.tips('签到完成！', dayItems, {
		                	time: 0,
							tips: [1, '#E6C3FC']
						});
						$(dayItems).next().addClass("doing");
		        	});
	            $(text).html("已连续签到4天");
		    	break;
		    case 5 :
		        $(Img).stop().animate({"top": 2.9+"rem","left": 2.26+"rem"},700,function(){
		        	layer.tips('签到完成！', dayItems, {
	                	time: 0,
						tips: [4, '#E6C3FC']
					});
					$(dayItems).next().addClass("doing");
		        });
	            $(text).html("已连续签到5天");
		    	break;
		    case 6 :
		        $(Img).stop().animate({"top": 2.6+"rem","left": 1.48+"rem"},200,function(){
		        	$(Img).find("img").attr("src","images/signIn/signIn_ant-1.png")
		        }).animate({"top": 4.5+"rem","left": .6+"rem"},200)
		       	.animate({"top": 4.96+"rem","left": 2.3+"rem"},200,function(){
					layer.tips('签到完成！', dayItems, {
	                	time: 0,
						tips: [1, '#E6C3FC']
					});
					$(dayItems).next().addClass("doing");
		       	});
	            $(text).html("已连续签到6天");
		    	break;
		    case 7 :
		        $(Img).stop().animate({"top": 5.6+"rem","left": 4.6+"rem"},700,function(){
		        	layer.tips('任务完成！', dayItems, {
	                	time: 0,
						tips: [1, '#E6C3FC']
					});
		        });
		        setTimeout(function(){
					layer.open({
						type: 1,
						title: false,
						skin: 'layui-Complete', //样式类名
						closeBtn: 0, //不显示关闭按钮
						anim: 2,
						shade: 0.6,
						scrollbar: false,
						shadeClose: true, //开启遮罩关闭
						content: '<img src="images/signIn/signIn_MissionComplete.png">'
					});
	            },800)
	            $(text).html("任务完成，您获得了300个豆");
		    	break;
		}
	})
})