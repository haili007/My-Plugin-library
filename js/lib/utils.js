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
