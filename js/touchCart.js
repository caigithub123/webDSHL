$(function() {
    function prevent_default(e) {
        e.preventDefault();
    };
    function disable_scroll() {
        $(document).on('touchmove', prevent_default);
    };
    function enable_scroll() {
        $(document).unbind('touchmove', prevent_default)
    };

    var x;
    $('.subitems div.goods').on('touchstart', function(e) {
        // console.log( e.originalEvent.pageX )                     
        $('.subitems > div.open').css('left', '0px').removeClass('open') // close em all
        $(e.currentTarget).addClass('open')
        x = e.originalEvent.targetTouches[0].pageX // anchor point
    }).on('touchmove', function(e) {
        var change = e.originalEvent.targetTouches[0].pageX - x
        change = Math.min(Math.max(-100, change), 0) // restrict to -100px left, 0px right
        e.currentTarget.style.left = change + 'px'
        
        if (change < -10) disable_scroll(); // disable scroll once we hit 10px horizontal slide
    }).on('touchend', function(e) {
        var left = parseInt(e.currentTarget.style.left)
        var new_left;
        (left < -35) ? ( new_left = '-100px' ) : ( new_left = '0px' );                
        // e.currentTarget.style.left = new_left
        $(e.currentTarget).animate({left: new_left}, 200);
        enable_scroll();
    });
    
    // 删除商品
    $('.delete-btn').on('touchend', function(e) {
        e.preventDefault();
        var cartItems = $(this).parents(".cartItems");
        var subitems = cartItems.children();

        if( subitems.first().attr("class") == "head" ) {
            subitems = subitems.splice(1,$(subitems).length-1);
            if( subitems.length > 1 ) {
                $(this).parents(".subitems").slideUp('fast', function() {
                    $(this).remove();
                });
            }else {
                $(this).parents(".cartItems").slideUp('fast', function() {
                    $(this).remove();
                });
            }
        }else if( cartItems.parent().attr("id") == "lose-efficacy" ){
            if( subitems.length > 1 ) {
                $(this).parents(".floor-goods").slideUp('fast', function() {
                    $(this).remove();
                });
            }else {
                $(this).parents("#lose-efficacy").slideUp('fast', function() {
                    $(this).remove();
                });
            }
        }else {
            if( subitems.length > 1 ) {
                $(this).parents(".floor-goods").slideUp('fast', function() {
                    $(this).remove();
                });
            }else {
                $(this).parents(".cartItems").slideUp('fast', function() {
                    $(this).remove();
                });
            }
        }
    })
}); 