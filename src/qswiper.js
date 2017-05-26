/**
 * Created by zhengqiguang on 2017/4/26.
 */

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(['qswiper'], factory);
    } else if (typeof exports === 'object') {
        // Node, CommonJS之类的
        module.exports = factory(require('swiper'));
    } else {
        // 浏览器全局变量(root 即 window)
        root.qswiper = factory();
    }
}(this, function ($) {
    //    方法
    var Qswiper = function (swiperItems, opt) {
        console.log(swiperItems, opt);

    }

    Qswiper.prototype = {
        constructor: Qswiper,
        init: function () {


        }


    }


    //    暴露公共方法
    return Qswiper;
}));
