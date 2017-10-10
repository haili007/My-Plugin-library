/**
 * Created by liangyongxin on 2017/9/25.
 */
/**
 * ren 转换
 * @param rem
 * @param windowWidth
 * @returns {number}
 */
export const rem2px = function (rem, windowWidth) {
  return rem*(windowWidth*20/375)
}
/**
 * 简单的提示
 * @param text
 * @param duration
 * @returns {{hide: (function())}}
 */
export const simpleTips = (text, duration)=>{
  let $tips = $('#simple-tips');
  let ww = $(window).width();

  if($tips.length==0){
    $tips = $("<div id='simple-tips'></div>");
    $tips.css({
      "position": "fixed",
      "z-index": "999999",
      "left": "50%",
      "top": "50%",
      "font-size": rem2px(14/20, ww)+"px",
      "-webkit-transform": "translate(-50%, -50%)",
      "-moz-transform": "translate(-50%, -50%)",
      "-ms-transform": "translate(-50%, -50%)",
      "-o-transform": "translate(-50%, -50%)",
      "transform": "translate(-50%, -50%)",
      "background-color": "rgba(0,0,0,0.7)",
      "border-radius": rem2px(5/20, ww)+"px",
      "padding": "0.5em",
      "min-width": rem2px(120/20, ww)+"px",
      "max-width": rem2px(360/20, ww)+"px",
      "color": "#fff",
      "text-align": "center",
    });

    $('body').append($tips);
  }

  $tips.fadeIn().text(text);

  if( window.tipsTimeout ) clearTimeout(window.tipsTimeout);
  window.tipsTimeout = setTimeout(function () {
    $tips.fadeOut();
  }, duration||1500);

  return {
    hide(){
      if( window.tipsTimeout ) clearTimeout(window.tipsTimeout);
      $tips.fadeOut();
    }
  }
};
/**
 * 手机号加密
 * @param phone
 * @returns {string}
 */
export const encodePhone = (phone) => {
  return phone.substr(0, 3) + '****' + phone.substr(7, 11);
};
/**
 * 存cookie
 * @param name
 */
export const setCookie = (name) => {
  var exp = new Date();
  exp.setTime(exp.getTime() + 30*60*1000);
  document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
}
/**
 * 读取cookie
 * @param name
 * @returns {null}
 */
export const setCookie = (name) => {
  var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");

  if(arr=document.cookie.match(reg))

    return unescape(arr[2]);
  else
    return null;
}
/**
 * 删除cookie
 * @param name
 */
export const delCookie = (name) => {
  var exp = new Date();
  exp.setTime(exp.getTime() - 1);
  var cval=getCookie(name);
  if(cval!=null)
    document.cookie= name + "="+cval+";expires="+exp.toGMTString();
};
export const checkPhone = () => {
  var phone = $(this).val();
  if (!phone) {
    showTips('手机号码不能为空');
    $(this).val("").focus();
    return false
  }
  if (!(/^1[34578]\d{9}$/.test(phone))) {
    showTips('手机号码输入有误,请重新填写');
    $(this).val("").focus();
    return false
  }
}
/**
 * 提示
 * @param text
 * @param time
 */
export const showTips = (text,time=1500) => {
  $('#disTips .text').html(text).parents('#disTips').fadeIn().delay(time).fadeOut(time);
}
/**
 * 数字千分号
 * @param num
 * @returns {string}
 */
export const formatNumberRgx = (num) => {
  var parts = num.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
};