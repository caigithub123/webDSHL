 
// 套餐明细 展开/收起
function packUp(obj){
    var setmeal = $(obj).parents(".totalBox").find(".gs-tcBox .gs-main-tc");
    if($(obj).html().indexOf("icon_yellow_down")>-1){
        setmeal.css({'height':'85px'});
        setmeal.find('.gs-main-left').css('border','1px solid #e1e1e1');
        setmeal.find('.gs-main-left img').css({'height':'55px','width':'55px'});
        $(obj).find("img").attr("src","images/icon_yellow_up.png");
     }else {      
        setmeal.css({'height':'0px'});
        setmeal.find('.gs-main-left').css('border','none');
        setmeal.find('.gs-main-left img').css({'height':'0','width':'0'});
        $(obj).find("img").attr("src","images/icon_yellow_down.png");                   
    }
}

// 查看全部 展开/收起
function seeMore(obj){
	var good_num = $(obj).parents('.goods-info').find('.gs-main-box .gs-main').length;
	var parents = $(obj).parents('.goods-info').find('.goods-list-hide .gs-main');
    if($(obj).html().indexOf("order_tag_ic_ckqb@2x")>-1){
        parents.css({'height':'110px','margin-top':'10px'});
        parents.find('.gs-main-left').css('border','1px solid #e1e1e1');
        parents.find('.gs-main-left img').css('height','74px');
        $(obj).find("img").attr("src","images/order_tag_ic_sqqb@2x.png");
        $(obj).find("span").html('收回全部'+good_num+'件');
        $('.gift .gift-txt').css({'height':'27px'});
     }else {      
        parents.css({'height':'0px','margin-top':'0px'});
        parents.find('.gs-main-left').css('border','none');
        parents.find('.gs-main-left img').css('height','0px');
        $(obj).find("img").attr("src","images/order_tag_ic_ckqb@2x.png");
        $(obj).find("span").html('查看全部'+good_num+'件');	  
        $('.gift .gift-txt').css({'height':'0px'});          
    } 
}
var good_num = $('.gs-main-box .gs-main').length;
$('.goods-more .goods-more-num').text(good_num);


$(function(){
    // 控制 查看全部是否显示
    if(good_num>1){
        $('.goods-more').show();
    }else{
        $('.goods-more').hide();
    }
})

