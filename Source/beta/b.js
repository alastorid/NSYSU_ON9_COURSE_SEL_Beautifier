// this is v8
//jump to main frame
if( typeof(window.main)== 'undefined' ){
var f2=window.document;
}
else{
var f2=window.main.document;
}
//load jQ from CDN
var j=f2.createElement('link');
j.setAttribute('rel','script');
j.setAttribute('href','http://code.jquery.com/jquery-2.0.3.min.js');
f2.body.insertBefore(j);
while(typeof(jQuery)=='undefined') { alert();}
/*!
 * jQuery Cookie Plugin v1.3.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function ($, document, undefined) {

	var pluses = /\+/g;

	function raw(s) {
		return s;
	}

	function decoded(s) {
		return unRfc2068(decodeURIComponent(s.replace(pluses, ' ')));
	}

	function unRfc2068(value) {
		if (value.indexOf('"') === 0) {
			// This is a quoted cookie as according to RFC2068, unescape
			value = value.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
		}
		return value;
	}

	function fromJSON(value) {
		return config.json ? JSON.parse(value) : value;
	}

	var config = $.cookie = function (key, value, options) {

		// write
		if (value !== undefined) {
			options = $.extend({}, config.defaults, options);

			if (value === null) {
				options.expires = -1;
			}

			if (typeof options.expires === 'number') {
				var days = options.expires, t = options.expires = new Date();
				t.setDate(t.getDate() + days);
			}

			value = config.json ? JSON.stringify(value) : String(value);

			return (document.cookie = [
				encodeURIComponent(key), '=', config.raw ? value : encodeURIComponent(value),
				options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
				options.path    ? '; path=' + options.path : '',
				options.domain  ? '; domain=' + options.domain : '',
				options.secure  ? '; secure' : ''
			].join(''));
		}

		// read
		var decode = config.raw ? raw : decoded;
		var cookies = document.cookie.split('; ');
		var result = key ? null : {};
		for (var i = 0, l = cookies.length; i < l; i++) {
			var parts = cookies[i].split('=');
			var name = decode(parts.shift());
			var cookie = decode(parts.join('='));

			if (key && key === name) {
				result = fromJSON(cookie);
				break;
			}

			if (!key) {
				result[name] = fromJSON(cookie);
			}
		}

		return result;
	};

	config.defaults = {};

	$.removeCookie = function (key, options) {
		if ($.cookie(key) !== null) {
			$.cookie(key, null, options);
			return true;
		}
		return false;
	};

})(jQuery, document);
//--------------------------------------------------------------------------------------------

//latest URL
/*
var a=document.createElement('script');
document.body.appendChild((a.setAttribute('src', 'https://docs.google.com/uc?export=download&id=0B--R0UZKhNeJNXpBa0xkeTFRd0E'),a));
*/
//////////////////////////////////////////////////////////////////
///File: b_imple.js
///Brief: implementation of beautifier
///Author: hiroshi0916
//////////////////////////////////////////////////////////////////
/// this is rev7
//global Const Variables--------------------------------------------------
var stable=1;
var totalStyle=3;

//css Resourses
var CssNameTable=['beta',
'Default',
'TaiwanHighSpeedRail'
];
var CssUrlTable=['https://docs.google.com/uc?export=download&id=0B--R0UZKhNeJVDJCZ21LOXJqWVE',
'https://docs.google.com/uc?export=download&id=0B--R0UZKhNeJVTU1cTR3YVdkX1U',
'https://docs.google.com/uc?export=download&id=0B--R0UZKhNeJZW9mY09vUzZZdlk'
];
//-----------------------------
//global Variables--------------
var CssSel=0;
//------------------------------------------------------------------
//functions --------------------------------------------------------

function A2URL(a){
if( typeof (ob[a])=='undefined' ){
	if( $.cookie(a) != null ) {
		ob[a]=$.cookie(a);
		$('#wowBox').text(ob[a]);
	}
	else{
		var year=a.split('=')[1].split('&')[0];
		var sem=a.split('=')[2].split('&')[0];
		var cid=a.split('=')[3].split('&')[0];
	$.get('http://selcrs.nsysu.edu.tw/menu5/showoutline.asp?SYEAR='+year+'&SEM='+sem+'&CrsDat='+cid,function (data){
		var tempDom= $.parseHTML(data);
		var tempdata = $('td', tempDom);
			
		var intro=tempdata[17].innerText.trim(' ')+'\n'+tempdata[20].innerText.trim(' ');
		var goal=tempdata[24].innerText.trim(' ');

		ob[a]=goal+'\n\n'+intro;
		$('#wowBox').text(ob[a]);
		$.cookie(a,ob[a]);
		});
	//.fail($('#wowBox').text('No data received.'));
	}	
}
else{
	$('#wowBox').text(ob[a]);
}
}

//OEP--------------------------------------------------------

//if ( CreateMutexA('OAO')==Success )
if(f2.getElementById("OAO") == null){
//CreateMutexA
var Mutex = f2.createElement('div');
Mutex.setAttribute('id','OAO');
Mutex.setAttribute('display','none');
f2.body.appendChild(Mutex);

  //add css style
  CssSel=stable;
$('body').prepend('<link rel="stylesheet" id="GGstyle" type="text/css" href="'+ CssUrlTable[stable] +'">');

var src=f2.getElementsByTagName('table')[0];
var dst=f2.getElementsByTagName('table')[2];
var t;
var ob=new Object();
var bye=new Array();
var byeid=0;
var classid;
var rowspancount;
//Collect Course Information
for(var i=2,l;(l=(t=src.getElementsByTagName('tr')[i].getElementsByTagName('td')).length)!=1;++i){
if(l==14){
ob[t[2].innerText+'teacher']= t[11].innerText;
ob[t[2].innerText+'classname']= t[5].innerText;
ob[t[2].innerText+'classroom']= t[12].innerText;
ob[t[2].innerText+'URL']=t[5].innerHTML.toString().split('"')[1];
}}
//About the object :ob
//ob['COURSE NUMBER'+'teacher'] : the teacher of this COURSE NUMBER
//ob['COURSE NUMBER'+'classname'] : the name of this course
//ob['COURSE NUMBER'+'classroom'] : the classroom of this course

//Classify Tittle Row
t=dst.getElementsByTagName('tr')[0].getElementsByTagName('td')[0].setAttribute('class','CourseTable');

//Classify Week Row
t=dst.getElementsByTagName('tr')[1].getElementsByTagName('td');
for(var col=0;col<9;++col){
t[col].setAttribute('class','week');
}
//Butify it!
for(var i=2;i<=16;++i){
t=dst.getElementsByTagName('tr')[i].getElementsByTagName('td');
t[0].setAttribute('class','CourseTimeInAlphabet');
t[1].setAttribute('class','CourseTime');
for(var j=2;j<9;++j){
if (typeof(t[j].getElementsByTagName('a')[0])!="undefined"){
for(rowspancount=1;(t[j].innerText==dst.getElementsByTagName('tr')[i+rowspancount].getElementsByTagName('td')[j].innerText);++rowspancount ){
bye[byeid++]=dst.getElementsByTagName('tr')[i+rowspancount].getElementsByTagName('td')[j];
}
t[j].setAttribute('rowspan',rowspancount);
if (typeof(ob[(classid=t[j].getElementsByTagName('a')[0].innerText)+'classname'])!="undefined" ) 
{
t[j].getElementsByTagName('font')[0].innerHTML=
ob[classid+'teacher']+'<br/>'+
t[j].getElementsByTagName('font')[0].innerHTML+'<br/>'+
ob[classid+'classroom'];
t[j].getElementsByTagName('a')[0].innerText=ob[classid+'classname'];
t[j].setAttribute('class','__course ' + classid);
}
}
}
}

for (i=0;i<byeid;++i)
bye[i].remove();

dst.setAttribute('id','OVO');

$('.CourseTable').append('<div id="clickme" style="cursor:default">Style</div>');

$('body').prepend('<div class="info" id="wowBox">OAO!!</div>');
$(document).ready(function() {
  // Handler for .ready() called.
	$('.__course ').mouseenter(function (){
		$('#wowBox').show();
		A2URL(ob[$(this).attr('class').split(' ')[1]+'URL']);
	}).mouseleave(function (){
		$('#wowBox').hide();
		$('#wowBox').text('Processing^_^y');
	});
	$('.__course ').mousemove(function (e){
						$('#wowBox').css({
							left: e.pageX+14,
							top: e.pageY
							});
	});
	$('#clickme').hide();
	$('.CourseTable').mouseenter(function (){
	$('#clickme').fadeIn(60);
	})
	.mouseleave(function (){
	$('#clickme').fadeOut(100);
	})
	.mousedown(function (){
		CssSel=(CssSel+1-stable)%(totalStyle-stable)+stable;
		$('#GGstyle').attr("href",CssUrlTable[CssSel]);
		$('#clickme').text(CssNameTable[CssSel]);
		$('#OVO').fadeTo(448,0.2);
		$('#OVO').fadeTo(64,1.0);
	});
	
	$('.CourseTable').mousemove(function (e){
						$('#clickme').css({
							left: e.pageX-34,
							top: e.pageY-16
							});
	});
						
});
}
