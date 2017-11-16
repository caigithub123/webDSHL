/* javascript */
(function (doc, win) {
    var docEl = doc.documentElement, //获取html标签
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize', //判断是屏幕旋转还是resize;
        recalc = function () {
            var winWidth =  window.innerWidth;  // 获取window 宽度
            if (!winWidth) return;
            ( winWidth >= 750 ) ? ( docEl.style.fontSize = '100px' ) : ( docEl.style.fontSize = 100 * (winWidth / 750) + 'px' );
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);


// 注解
/*
    1.微信端页面全频展示时或PC端页面，字体大小和定位距离的数值 = 全频时测量长度/全频时字体大小的数值(html)
    2.微信端页面在手机端展示时，字体大小和定位距离的数值 = 全频时测量长度/2/屏幕字体大小的数值(html)
    
*/