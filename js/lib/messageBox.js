(function () {
    $.MsgBox = {
        Popup: function ( msg ) {            
            GenerateHtml("popup", msg);            
        },
        Alert: function (title, msg) {
            GenerateHtml("alert", title, msg);
            btnOk(); //alert只是弹出消息，因此没必要用到回调函数callback
            btnNo();
        },
        Confirm: function (title, msg, callback) {
            GenerateHtml("confirm", title, msg);
            btnOk(callback);
            btnNo();
        },        
        NewAlert: function (title, msg) {
            NewGenerateHtml("alert", title, msg);
            newbtnOk(); //alert只是弹出消息，因此没必要用到回调函数callback
            newbtnNo();
        },
        NewConfirm: function (title, msg, callback) {
            NewGenerateHtml("confirm", title, msg);
            newbtnOk(callback);
            newbtnNo();
        }
    }

    //生成Html
    var GenerateHtml = function (type, title, msg) {

        var _html = "";

        _html += '<div id="mb_box"></div><div id="mb_con"><span id="mb_tit">' + title + '</span>';
        // _html += '<a id="mb_ico">x</a><div id="mb_msg">' + msg + '</div><div id="mb_btnbox">';
        _html += '<div id="mb_msg">' + msg + '</div><div id="mb_btnbox">';
        if( type == "popup" ){
            _html += '';
        }
        if (type == "alert") {
            _html += '<input id="mb_btn_ok" type="button" value="确定" />';
        }
        if (type == "confirm") {
            _html += '<input id="mb_btn_ok" type="button" value="确定"  />';
            _html += '<input id="mb_btn_no" type="button" value="取消" />';
        }
        _html += '</div></div>';

        //必须先将_html添加到body，再设置Css样式
        $("body").append(_html); GenerateCss();
    }

    //生成Css
    var GenerateCss = function () {

        $("#mb_box").css({ width: '100%', height: '100%', zIndex: '99999', position: 'fixed',
            filter: 'Alpha(opacity=60)', backgroundColor: 'black', top: '0', left: '0', opacity: '0.6'
        });

        $("#mb_con").css({ zIndex: '999999', width: '300px', position: 'fixed',
            border: '1px solid #bc0303', backgroundColor: 'White', borderRadius: '10px'
        });

        $("#mb_tit").css({ display: 'block', fontSize: '14px', color: '#333', padding: '10px 15px',
            backgroundColor: '#fff', borderRadius: '15px 15px 0 0', textAlign: 'center',
            borderBottom: '1px solid #bc0303', fontWeight: 'bold'
        });

        $("#mb_msg").css({ padding: '25px 20px 10px 25px', lineHeight: '20px',
            fontSize: '15px'
        });

        $("#mb_ico").css({ display: 'block', position: 'absolute', right: '10px', top: '9px',
            border: '1px solid Gray', width: '18px', height: '18px', textAlign: 'center',
            lineHeight: '16px', cursor: 'pointer', borderRadius: '12px', fontFamily: '微软雅黑'
        });

        $("#mb_btnbox").css({ margin: '10px 0 15px 0', textAlign: 'center' });
        $("#mb_btn_ok,#mb_btn_no").css({ width: '110px', height: '35px', color: 'white', border: '1px solid #bc0303', borderRadius: '5px', 
            fontFamily: '微软雅黑', backgroundImage: 'url(/Areas/MShop/Themes/DSHL/Content/images/messageBoxBtnBg.jpg)' });
        $("#mb_btn_no").css({ marginLeft: '30px' });


        //右上角关闭按钮hover样式
        $("#mb_ico").hover(function () {
            $(this).css({ backgroundColor: 'Red', color: 'White' });
        }, function () {
            $(this).css({ backgroundColor: '#DDD', color: 'black' });
        });

        var _widht = document.documentElement.clientWidth; //屏幕宽
        var _height = document.documentElement.clientHeight; //屏幕高

        var boxWidth = $("#mb_con").width();
        var boxHeight = $("#mb_con").height();

        //让提示框居中
        $("#mb_con").css({ top: (_height - boxHeight) / 2 + "px", left: (_widht - boxWidth) / 2 + "px" });
    }


    //生成Html
    var NewGenerateHtml = function (type, title, msg) {

        var _html = "";

        _html += '<div id="newmb_box"></div><div id="newmb_con"><span id="newmb_tit">' + title + '</span>';
        // _html += '<a id="mb_ico">x</a><div id="mb_msg">' + msg + '</div><div id="mb_btnbox">';
        _html += '<div id="newmb_msg">' + msg + '</div><div id="newmb_btnbox">';
        if (type == "alert") {
            _html += '<input id="newmb_btn_ok" type="button" value="确定" />';
        }
        if (type == "confirm") {
			_html += '<input id="newmb_btn_no" type="button" value="取消" />';
            _html += '<input id="newmb_btn_ok" type="button" value="确定"  />';
            
        }
        _html += '</div></div>';

        //必须先将_html添加到body，再设置Css样式
        $("body").append(_html); NewGenerateCss();
    }

    //生成Css
    var NewGenerateCss = function () {

        $("#newmb_box").css({ width: '100%', height: '100%', zIndex: '99999', position: 'fixed',
            filter: 'Alpha(opacity=60)', backgroundColor: 'black', top: '0', left: '0', opacity: '0.6'
        });

        $("#newmb_con").css({ zIndex: '999999', width: '280px', position: 'fixed',
            border: '1px solid #fff', backgroundColor: 'White', borderRadius: '1px'
        });

        $("#newmb_tit").css({ display: 'block', fontSize: '15px', color: '#333', marginTop:'25px',
            backgroundColor: '#fff', textAlign: 'center'
        });

        $("#newmb_msg").css({ marginTop:'10px', lineHeight: '20px',
            fontSize: '15px', textAlign: 'center', fontSize: '13px'
        });

        $("#newmb_ico").css({ display: 'block', position: 'absolute', right: '10px', top: '9px',
            border: '1px solid Gray', width: '18px', height: '18px', textAlign: 'center',
            lineHeight: '16px', cursor: 'pointer', borderRadius: '12px', fontFamily: '微软雅黑'
        });

        $("#newmb_btnbox").css({ margin: '30px 0 20px 0', textAlign: 'center' });
        $("#newmb_btn_ok").css({ width: '110px', height: '35px', color: 'white', border: '1px solid #de1919', borderRadius: '2px', 
            backgroundColor: '#de1919', fontFamily: '微软雅黑'});

        $("#newmb_btn_no").css({width: '110px', height: '35px', color: '#666666', border: '1px solid #d7d7d7', borderRadius: '2px', 
            backgroundColor: '#fff', fontFamily: '微软雅黑', marginRight: '25px' });


        //右上角关闭按钮hover样式
        $("#newmb_ico").hover(function () {
            $(this).css({ backgroundColor: 'Red', color: 'White' });
        }, function () {
            $(this).css({ backgroundColor: '#DDD', color: 'black' });
        });

        var _widht = document.documentElement.clientWidth; //屏幕宽
        var _height = document.documentElement.clientHeight; //屏幕高

        var boxWidth = $("#newmb_con").width();
        var boxHeight = $("#newmb_con").height();

        //让提示框居中
        $("#newmb_con").css({ top: (_height - boxHeight) / 2 + "px", left: (_widht - boxWidth) / 2 + "px" });
    }


    //确定按钮事件
    var btnOk = function (callback) {
        $("#mb_btn_ok").click(function () {
            $("#mb_box,#mb_con").remove();
            if (typeof (callback) == 'function') {
                callback();
            }
        });
    }
    //取消按钮事件
    var btnNo = function () {
        $("#mb_btn_no,#mb_ico").click(function () {
            $("#mb_box,#mb_con").remove();
        });
    }	
	 //确定按钮事件
    var newbtnOk = function (callback) {
        $("#newmb_btn_ok").click(function () {
            $("#newmb_box,#newmb_con").remove();
            if (typeof (callback) == 'function') {
                callback();
            }
        });
    }
    //取消按钮事件
    var newbtnNo = function () {
        $("#newmb_btn_no,#newmb_ico").click(function () {
            $("#newmb_box,#newmb_con").remove();
        });
    }
})();