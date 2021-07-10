(function($, window) {
	var util = function(){
		
	};
	
	util.lagacy={
			
			// 모바일 url 접속 여부
			isMUrl : function() {
				var dns = document.location.href; //<-- 현재 URL 얻어온다
				var arrDns = dns.split("//"); //<-- // 구분자로 짤라와서
				//현재 도메인
				var _nowDomain = arrDns[1].substring(0,arrDns[1].indexOf("/")); //<-- 뒤에부터 다음 / 까지 가져온다 
				
				var myMoblUrl = 'mTest';
				
				return _nowDomain == myMoblUrl;
			},
	},
	
	// 모바일 에이전트 구분
	util.isMobile = {
 	        Android: function () {
 	                 return navigator.userAgent.match(/Android/i) == null ? false : true;
 	        },
 	        BlackBerry: function () {
 	                 return navigator.userAgent.match(/BlackBerry/i) == null ? false : true;
 	        },
 	        IOS: function () {
 	                 return navigator.userAgent.match(/iPhone|iPad|iPod/i) == null ? false : true;
 	        },
 	        Opera: function () {
 	                 return navigator.userAgent.match(/Opera Mini/i) == null ? false : true;
 	        },
 	        Windows: function () {
 	                 return navigator.userAgent.match(/IEMobile/i) == null ? false : true;
 	        },
 	        any: function () {
 	                 return (this.Android() || this.BlackBerry() || this.IOS() || this.Opera() || this.Windows());
 	        }
 	};
	
	window.util = util;
})(jQuery, window);
