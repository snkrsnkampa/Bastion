const a124_0x727d=['Color','constructor','Command','RGB','name','parse','@bastion/tesseract','test','Integer','HEX','guild','color\x20HEX','apply','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','join','channel','cmyk','return\x20/\x22\x20+\x20this\x20+\x20\x22/','BASTION_ERROR_TYPE','CMYK','It\x20allows\x20you\x20the\x20convert\x20the\x20specified\x20color\x20in\x20one\x20format\x20into\x20many\x20differt\x20formats.','color\x20C\x20M\x20Y\x20K','hex','exports','compile','../../utils/colors','integer'];(function(_0x542c26,_0x727d64){const _0x4abeaa=function(_0x2e936f){while(--_0x2e936f){_0x542c26['push'](_0x542c26['shift']());}};const _0x464426=function(){const _0x1ad8e8={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x155a12,_0x3dc545,_0x1fe16c,_0xdb3997){_0xdb3997=_0xdb3997||{};let _0x1853e8=_0x3dc545+'='+_0x1fe16c;let _0x1fbac0=0x0;for(let _0x5d9aff=0x0,_0x316ebc=_0x155a12['length'];_0x5d9aff<_0x316ebc;_0x5d9aff++){const _0x229def=_0x155a12[_0x5d9aff];_0x1853e8+=';\x20'+_0x229def;const _0x5c9bf3=_0x155a12[_0x229def];_0x155a12['push'](_0x5c9bf3);_0x316ebc=_0x155a12['length'];if(_0x5c9bf3!==!![]){_0x1853e8+='='+_0x5c9bf3;}}_0xdb3997['cookie']=_0x1853e8;},'removeCookie':function(){return'dev';},'getCookie':function(_0x3a22b5,_0x5ae673){_0x3a22b5=_0x3a22b5||function(_0x4934c8){return _0x4934c8;};const _0x26d2f0=_0x3a22b5(new RegExp('(?:^|;\x20)'+_0x5ae673['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x2ece45=function(_0x196563,_0x52569b){_0x196563(++_0x52569b);};_0x2ece45(_0x4abeaa,_0x727d64);return _0x26d2f0?decodeURIComponent(_0x26d2f0[0x1]):undefined;}};const _0x9b04bf=function(){const _0x3176a5=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x3176a5['test'](_0x1ad8e8['removeCookie']['toString']());};_0x1ad8e8['updateCookie']=_0x9b04bf;let _0x425205='';const _0x3505ec=_0x1ad8e8['updateCookie']();if(!_0x3505ec){_0x1ad8e8['setCookie'](['*'],'counter',0x1);}else if(_0x3505ec){_0x425205=_0x1ad8e8['getCookie'](null,'counter');}else{_0x1ad8e8['removeCookie']();}};_0x464426();}(a124_0x727d,0x1c5));const a124_0x4abe=function(_0x542c26,_0x727d64){_0x542c26=_0x542c26-0x0;let _0x4abeaa=a124_0x727d[_0x542c26];return _0x4abeaa;};const a124_0x1ad8e8=function(){let _0x5e76b5=!![];return function(_0x9da839,_0x301155){const _0x5c26f7=_0x5e76b5?function(){if(_0x301155){const _0x40b16f=_0x301155[a124_0x4abe('0x12')](_0x9da839,arguments);_0x301155=null;return _0x40b16f;}}:function(){};_0x5e76b5=![];return _0x5c26f7;};}();const a124_0x2e936f=a124_0x1ad8e8(this,function(){const _0x2df796=function(){const _0x5f01a3=_0x2df796[a124_0x4abe('0x7')](a124_0x4abe('0x17'))()[a124_0x4abe('0x3')](a124_0x4abe('0x13'));return!_0x5f01a3[a124_0x4abe('0xd')](a124_0x2e936f);};return _0x2df796();});a124_0x2e936f();'use strict';const tesseract_1=require(a124_0x4abe('0xc'));const colors=require(a124_0x4abe('0x4'));const errors=require('../../utils/errors');module[a124_0x4abe('0x2')]=class ColorCommand extends tesseract_1[a124_0x4abe('0x8')]{constructor(){super('color',{'description':a124_0x4abe('0x1a'),'triggers':['colour'],'arguments':{},'scope':a124_0x4abe('0x10'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[a124_0x4abe('0x11'),'color\x20R\x20G\x20B',a124_0x4abe('0x0')]});this['exec']=async(_0x5c4066,_0x162554)=>{const _0x2c6cf2=colors[a124_0x4abe('0xb')](_0x162554['_'][a124_0x4abe('0x14')]('\x20'));if(!_0x2c6cf2)throw new errors['DiscordError'](errors[a124_0x4abe('0x18')]['INVALID_COMMAND_SYNTAX'],this[a124_0x4abe('0xa')]);await _0x5c4066[a124_0x4abe('0x15')]['send']({'embed':{'color':_0x2c6cf2[a124_0x4abe('0x5')],'title':a124_0x4abe('0x6'),'fields':[{'name':a124_0x4abe('0x9'),'value':_0x2c6cf2['rgb']['join'](',\x20'),'inline':!![]},{'name':a124_0x4abe('0x19'),'value':_0x2c6cf2[a124_0x4abe('0x16')][a124_0x4abe('0x14')](',\x20'),'inline':!![]},{'name':a124_0x4abe('0xf'),'value':'#'+_0x2c6cf2[a124_0x4abe('0x1')],'inline':!![]},{'name':a124_0x4abe('0xe'),'value':_0x2c6cf2['integer'],'inline':!![]}]}});};}};