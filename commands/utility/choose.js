const a122_0x1a4a=['send','It\x20allows\x20you\x20to\x20ask\x20Bastion\x20to\x20choose\x20an\x20option\x20from\x20the\x20given\x20set\x20of\x20options.\x20Let\x20Bastion\x20make\x20a\x20decision\x20for\x20you.','compile','random','My\x20choice\x20would\x20be...','apply','DiscordError','exec','return\x20/\x22\x20+\x20this\x20+\x20\x22/','exports','INVALID_COMMAND_SYNTAX','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','name','IRIS','Command','guild','COLORS','decide','choose\x20--\x20OPTIONS...','test','Constants','choose'];(function(_0x200db6,_0x1a4a77){const _0x52e3c3=function(_0x5700f9){while(--_0x5700f9){_0x200db6['push'](_0x200db6['shift']());}};const _0x30d491=function(){const _0x39e74e={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x160f3c,_0x2b1191,_0x1af213,_0x394110){_0x394110=_0x394110||{};let _0x4f4740=_0x2b1191+'='+_0x1af213;let _0x4fa344=0x0;for(let _0x2757f8=0x0,_0x80e6f2=_0x160f3c['length'];_0x2757f8<_0x80e6f2;_0x2757f8++){const _0x152f44=_0x160f3c[_0x2757f8];_0x4f4740+=';\x20'+_0x152f44;const _0x2b348d=_0x160f3c[_0x152f44];_0x160f3c['push'](_0x2b348d);_0x80e6f2=_0x160f3c['length'];if(_0x2b348d!==!![]){_0x4f4740+='='+_0x2b348d;}}_0x394110['cookie']=_0x4f4740;},'removeCookie':function(){return'dev';},'getCookie':function(_0x119db1,_0x14f7d6){_0x119db1=_0x119db1||function(_0x4df0cf){return _0x4df0cf;};const _0x439e3c=_0x119db1(new RegExp('(?:^|;\x20)'+_0x14f7d6['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x2b0ba1=function(_0xfe97e6,_0x51c00d){_0xfe97e6(++_0x51c00d);};_0x2b0ba1(_0x52e3c3,_0x1a4a77);return _0x439e3c?decodeURIComponent(_0x439e3c[0x1]):undefined;}};const _0xbd9ce1=function(){const _0x108b1e=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x108b1e['test'](_0x39e74e['removeCookie']['toString']());};_0x39e74e['updateCookie']=_0xbd9ce1;let _0x3fe5c8='';const _0x5bdda3=_0x39e74e['updateCookie']();if(!_0x5bdda3){_0x39e74e['setCookie'](['*'],'counter',0x1);}else if(_0x5bdda3){_0x3fe5c8=_0x39e74e['getCookie'](null,'counter');}else{_0x39e74e['removeCookie']();}};_0x30d491();}(a122_0x1a4a,0xea));const a122_0x52e3=function(_0x200db6,_0x1a4a77){_0x200db6=_0x200db6-0x0;let _0x52e3c3=a122_0x1a4a[_0x200db6];return _0x52e3c3;};const a122_0x39e74e=function(){let _0x2a95b5=!![];return function(_0x2cf7f0,_0x41d49a){const _0x569d78=_0x2a95b5?function(){if(_0x41d49a){const _0x161b73=_0x41d49a[a122_0x52e3('0xd')](_0x2cf7f0,arguments);_0x41d49a=null;return _0x161b73;}}:function(){};_0x2a95b5=![];return _0x569d78;};}();const a122_0x5700f9=a122_0x39e74e(this,function(){const _0x15349c=function(){const _0x251b5e=_0x15349c['constructor'](a122_0x52e3('0x10'))()[a122_0x52e3('0xa')](a122_0x52e3('0x13'));return!_0x251b5e[a122_0x52e3('0x5')](a122_0x5700f9);};return _0x15349c();});a122_0x5700f9();'use strict';const tesseract_1=require('@bastion/tesseract');const errors=require('../../utils/errors');module[a122_0x52e3('0x11')]=class ChooseCommand extends tesseract_1[a122_0x52e3('0x0')]{constructor(){super(a122_0x52e3('0x7'),{'description':a122_0x52e3('0x9'),'triggers':[a122_0x52e3('0x3')],'arguments':{},'scope':a122_0x52e3('0x1'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[a122_0x52e3('0x4')]});this[a122_0x52e3('0xf')]=async(_0x3e94f3,_0x584261)=>{if(!_0x584261['_']['length'])throw new errors[(a122_0x52e3('0xe'))](errors['BASTION_ERROR_TYPE'][a122_0x52e3('0x12')],this[a122_0x52e3('0x14')]);const _0x182bbb=_0x584261['_'][Math['floor'](Math[a122_0x52e3('0xb')]()*_0x584261['_']['length'])];await _0x3e94f3['channel'][a122_0x52e3('0x8')]({'embed':{'color':tesseract_1[a122_0x52e3('0x6')][a122_0x52e3('0x2')][a122_0x52e3('0x15')],'title':a122_0x52e3('0xc'),'description':_0x182bbb}});};}};