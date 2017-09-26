
import wx from 'weixin-js-sdk'
import { getSignature } from './api'

let jsApiList = [
	'onMenuShareTimeline',
	'onMenuShareAppMessage',
	'onMenuShareQQ',
	'onMenuShareWeibo',
	'onMenuShareQZone'];

getSignature( encodeURIComponent(location.href.split('#')[0]) )
	.then( (data) => {
		console.log(data);
		let { appId, timestamp, nonceStr, signature } = data;
		wx.config({
			debug: false,
			appId,
			timestamp: timestamp,
			nonceStr,
			signature,
			jsApiList
		});
		wx.ready(function () {
			let title = document.querySelector('#shareTitle').value,
				link = location.origin + location.pathname,
				desc = document.querySelector('#shareDesc').value,
				imgUrl = document.querySelector('#shareImg').src;
			console.log( { title, link, desc, imgUrl } )
			wx.onMenuShareTimeline({ title, link, desc, imgUrl });
			wx.onMenuShareAppMessage( { title, link, desc, imgUrl } );
			wx.onMenuShareQQ( { title, link, desc, imgUrl } );
			wx.onMenuShareWeibo( { title, link, desc, imgUrl } );
			wx.onMenuShareQZone( { title, link, desc, imgUrl } );
		});
		wx.error(function(res){
			console.log(res);
		});
	})