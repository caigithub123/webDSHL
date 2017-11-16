$(function(){
	var idx = 1;
	$(".file_upload").live("change", function (event) { //上传图片,字段自动压缩图片,将图片压缩并转换成base64(data:image/jpeg;base64)格式	    	
	    var that = this;
	    var loadfile = $(that).parents("ul#loadfile").children();
	    if (that.files.length === 0){
	    	var li_loadfile = $(that).parents("ul#loadfile").find("li"),		
				len = li_loadfile.length,
				_idx = $(li_loadfile).attr("times");
			if( len < 3 ){
		   		$(that).parent().parent().parent().remove();
				// var oneUi = $("ul#loadfile").find("li");
				// if( oneUi.length == 1 ){
				// 	$("#notuseSubmit").show();
				// 	$("#useSubmit").hide();
				// }
		   	}else if( len == 3 ){       		
		   		var idName = $(that).parents("ul#loadfile").find("li:last").attr("id");
		   		if( idName ){
		   			$(that).parent().parent().parent().remove();
		   			addhtmlFn(_idx);
		   		}else {
		   			$(that).parent().parent().parent().remove();
		   		}
		   	}
	    	return;
	    }
	    idx++;
	    lrz( that.files[0],{ width:300 })
			.then(function (rst) {
				var submitData = {
					Img: rst.base64,
					Name: rst.origin.name,
					FileLen: rst.base64.length
				};
				$(that).parent().css("background-image", 'url('+ submitData.Img +')').next().show();
				$(that).parent().parent().parent().attr('id','loadIdIMG');
				// $("#notuseSubmit").hide();
				// $("#useSubmit").show();

			}).catch(function (err){

        	});			
	    addhtmlFn( idx );
	});		
});
//追加元素
function addhtmlFn(idx){
	var ui_html = '<li class="gz-item gz-item-3 loadfile" times="'+idx+'">'+
					'<div class="uploadImg">'+
						'<a href="javascript:void(0);">'+
							'<input type="file" value="选择文件" class="file_upload" name="file_upload" accept="image/png,image/jpeg,image/jpg">'+
						'</a>'+
						'<i class="remove" style="display:none;" onclick="removeFn(this,'+idx+')"></i>'+
					'</div>'+
				   '</li>';
	var len = $("ul#loadfile").children().length;
	if( len < 3 ){
		$("ul#loadfile").append( ui_html );
   	} else {
   		return false;
   	}
}
//删除
function removeFn( opt,idx ){
	var li_loadfile = $(opt).parents("ul#loadfile").find("li"),		
		len = li_loadfile.length;
	if( len < 3 ){
		$(opt).parent().parent().remove();
		// var oneUi = $("ul#loadfile").find("li");
		// if( oneUi.length == 1 ){
		// 	$("#notuseSubmit").show();
		// 	$("#useSubmit").hide();
		// }
   	}else if( len == 3 ){       		
   		var idName = $(opt).parents("ul#loadfile").find("li:last").attr("id");
   		if( idName ){
   			$(opt).parent().parent().remove();
   			addhtmlFn(idx);
   		}else {
   			$(opt).parent().parent().remove();
   		}
   	}
}