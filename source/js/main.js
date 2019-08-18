$(document).ready(function() {
    NProgress.start();
    init();
    document.onreadystatechange      = subSomething;
    handleSearch();
    // 评论
    new Valine({
        el: "#vcomments",
        appId: "fGSHbxc61eXC9MgR32tTRLKD-gzGzoHsz",
        appKey: "ylVHOgsBL6HOffDYf4H7qzDs",
        placeholder: "ヾﾉ≧∀≦)o 来呀！快活呀！~",
        avatar: "wavatar"
    });

    // 滚动进度条隐藏头部导航
    handleScroll()
    //返回顶部
    goToTop()



});

//当页面加载状态改变的时候执行这个方法.
function subSomething() {
    if (document.readyState          == "complete") {
        //当页面加载状态
        NProgress.done();
    }
}

function init() {
    let $header_wrapper              = $(".header .header_wrapper");
    $header_wrapper.removeAttr("style");

    let $articleList                 = $("#articleList");

    $articleList.removeAttr("style");

    let $mouser_in                   = $(".article-li .img-wrapper");

    $mouser_in
        .mouseover(function() {
            $(this)
                .find("img")
                .css("transform", "scale(1.1)");
        })
        .mouseout(function() {
            $(this)
                .find("img")
                .removeAttr("style");
        });
}

function handleSearch() {
    let $search                      = $('.header_search')
    let $main                        = $('#main');
    let $mask                        = $('.content-front')
    let $goback                      = $('.content-front .goback')
    $search.on('click', function() {
        $mask.show()
        $main.addClass('bg-blur ')
        setTimeout(()                => {
            $('.content-front .keys').removeAttr('style')
        }, 100)
    })

    $goback.on('click', function() {
        $('#local-search-input').val('');
        $('#local-search-result').empty();
        $('.content-front .keys').css('transform', 'translate3d(0, 200px, 0)')
        $main.removeClass('bg-blur ')
        $mask.hide()
    })

}


function handleScroll() {
    let $header_wrapper              = $(".header .header_wrapper");
    var oTop1                        = $(document).scrollTop();

    $(window).scroll(function() {
        var oTop2                    = $(document).scrollTop();

        if (oTop2 > oTop1) {
            $header_wrapper.css("transform", "translate3d(0, -120px, 0)")
            $header_wrapper.css('opacity', '0.3')

        } else {
            $header_wrapper.removeAttr('style')
            console.log('下', oTop2 - oTop1)
        }
        oTop1                        = $(document).scrollTop();
    });

}


// 返回顶部
function goToTop() {

    let $mask                        = $('.content-front')

    $(window).scroll(function() {
        if ($(window).scrollTop() > 100) {
            // 判断如果搜索页面出现则不出现
            if ($mask.css('display') === 'block') {
                return
            }
            $("#totop").fadeIn(1000);
        } else {
            $("#totop").fadeOut(500);
        }
    });
    //当点击跳转链接后，回到页面顶部位置
    $("#totop").click(function() {
        $('body,html').animate({ scrollTop: 0 }, 1000);
        return false;
    });

}