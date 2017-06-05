/**
 *公共变量 
 */

/**
*localStorage KEY
*/

Date.prototype.format = function(format) {
       var date = {
              "M+": this.getMonth() + 1,
              "d+": this.getDate(),
              "h+": this.getHours(),
              "m+": this.getMinutes(),
              "s+": this.getSeconds(),
              "q+": Math.floor((this.getMonth() + 3) / 3),
              "S+": this.getMilliseconds()
       };
       if (/(y+)/i.test(format)) {
              format = format.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
       }
       for (var k in date) {
              if (new RegExp("(" + k + ")").test(format)) {
                     format = format.replace(RegExp.$1, RegExp.$1.length == 1
                            ? date[k] : ("00" + date[k]).substr(("" + date[k]).length));
              }
       }
       return format;
}

var url_api = 'http://47.92.28.251:1024';

var App = {	
	'clientId':'app',
	'secret':'123456',
	'keys':{
		'url_api':'LS_KEY_URL_API',
		'logined':'LOGINED',
		'accessToken':'LS_KEY_ACCESS_TOKEN',
		'refreshToken':'LS_KEY_REFRESH_TOKEN',
		'refreshToken':'LS_KEY_REFRESH_TOKEN',
		'userId':'LS_KEY_USER_ID',
		'id':'LS_KEY_ID',
		'userRoles':'LS_KEY_USER_ROLES',
		'userName':'LS_KEY_USER_NAME',
		'account':'LS_KEY_ACCOUNT',
		'userAvator':'LS_KEY_USER_AVATOR',
		'isSecretary':'LS_KEY_USER_IS_SECRETARY',
		'isGroupLeader':'LS_KEY_USER_IS_GROUP_LEADER',
		'isCommissioner':'LS_KEY_USER_IS_COMMISSIONER',
	},
	'vals':{
		'url_api':url_api,
		'logined_true':'true',
	},
	'urls':{
		'article': url_api + '/article',
		'notice': url_api + '/notice',
		'meeting': url_api + '/meeting',
		'mr': url_api + '/mr',
		'journal': url_api + '/journal',
		'user': url_api + '/user',
		'province': url_api + '/province',
		'university': url_api + '/university',
	},
	'tool':{
		'toDate': function (timestamp) {
			var tmpDate = new Date();
			tmpDate.setTime(timestamp);
			return tmpDate.format('yyyy-MM-dd hh:mm');
		},
		'toDatePoint': function (timestamp) {
			var tmpDate = new Date();
			tmpDate.setTime(timestamp);
			return tmpDate.format('yyyy.MM.dd');
		},
		'toTime': function (timestamp) {
			var tmpDate = new Date();
			tmpDate.setTime(timestamp);
			return tmpDate.format('hh:mm');
		},
	}

}