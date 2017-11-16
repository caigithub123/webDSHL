(function($){
    var defaults = {
        name : "ProgressBar",
        box: $(".fg-ms-box"),
        click: false
    };
    $.fn.ProgressBar = function(option){
        var options = $.extend(defaults,option);

        this.each(function( index, val ){
            var box = $(val),
                ms_btn = box.children()[1],
                idx = 0;
            ( options.click ) && (
                $(ms_btn).on('click',function(){
                    var _this = this;
                    if( $(ms_btn).is('.ms-nowPpurchase') ){
                        idx++;
                        var progressbar = $(_this).prev().children(),
                            bar_bg = $(progressbar).children()[0],
                            bar_num = $(progressbar).children()[1];
                        var inventory = $(bar_num).attr("inventory");
                        var mWidth = parseInt(inventory-idx)/inventory*$(progressbar).width()+"px";
                        if ( parseInt(inventory-idx) <= 0 ) {
                            $(_this).addClass("disabled");
                            $(bar_bg).css({"width":mWidth});
                            $(bar_num).html( "已抢光" );
                            return false;
                        }
                        if ( idx >= inventory ) idx = inventory;
                        $(bar_bg).css({"width":mWidth});
                        $(bar_num).find("span").html( parseInt(inventory-idx) );

                    }else if( $(ms_btn).is('.ms-remindMe') ){
                        if( $(_this).hasClass("setSucceed") ){
                            $(_this).text("设置提醒").removeClass("setSucceed");
                        }else{
                            $(_this).text("取消提醒").addClass("setSucceed");
                        }
                    }
                })
            )
        });
    }
})(jQuery)