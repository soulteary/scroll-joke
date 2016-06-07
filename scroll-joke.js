/**
 * 偷个懒, 不写高度获取和判断了, 包装下jb51的
 * @ref http://www.jb51.net/article/42744.htm
 */

var helper = (function (document) {
    //滚动条在Y轴上的滚动距离
    function getScrollTop () {
        var scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0;
        if (document.body) {
            bodyScrollTop = document.body.scrollTop;
        }
        if (document.documentElement) {
            documentScrollTop = document.documentElement.scrollTop;
        }
        scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
        return scrollTop;
    }

    //文档的总高度
    function getScrollHeight () {
        var scrollHeight = 0, bodyScrollHeight = 0, documentScrollHeight = 0;
        if (document.body) {
            bodyScrollHeight = document.body.scrollHeight;
        }
        if (document.documentElement) {
            documentScrollHeight = document.documentElement.scrollHeight;
        }
        scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;
        return scrollHeight;
    }

    //浏览器视口的高度
    function getWindowHeight () {
        var windowHeight = 0;
        if (document.compatMode == "CSS1Compat") {
            windowHeight = document.documentElement.clientHeight;
        } else {
            windowHeight = document.body.clientHeight;
        }
        return windowHeight;
    }

    return {
        getWindowHeight: getWindowHeight,
        getScrollHeight: getScrollHeight,
        getScrollTop   : getScrollTop
    };
}(document))

var app = (function (document, window) {

    // 创建可滚动元素
    function createScrollElement () {
        var body = document.body, scrollContent = document.createElement('pre');
        var crlf = '\r\n';
        for (var i = 0, j = 10; i < j; i++) {
            crlf += crlf;
        }
        scrollContent.innerHTML = crlf;
        body.appendChild(scrollContent);
    }

    function neverEnd () {
        createScrollElement();
        window.onscroll = function (e) {
            // already end
            if (helper.getScrollTop() + helper.getWindowHeight() == helper.getScrollHeight()) {
                document.body.scrollTop = document.body.scrollTop - 100;
            }

        }
    }

    return {
        neverEnd: neverEnd
    };
}(document, window))

app.neverEnd();