const a128_0x2c52=['join','length','followRedirects','name','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','COLORS','apply','URL','It\x20follows\x20all\x20the\x20redirects\x20in\x20the\x20specified\x20URL\x20and\x20allows\x20you\x20to\x20see\x20the\x20final\x20URL.','IRIS','follow','INVALID_COMMAND_SYNTAX','url','followRedirects\x20URL','exports','@bastion/tesseract','Command','DiscordError','test','channel','../../utils/errors','exec','return\x20/\x22\x20+\x20this\x20+\x20\x22/'];(function(_0x1d8759,_0x2c521f){const _0x380a39=function(_0x477ab4){while(--_0x477ab4){_0x1d8759['push'](_0x1d8759['shift']());}};const _0x969a17=function(){const _0x243c4c={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x138721,_0x5c48ee,_0x917a73,_0x4344ab){_0x4344ab=_0x4344ab||{};let _0x86bd07=_0x5c48ee+'='+_0x917a73;let _0x49f40e=0x0;for(let _0x1dcd51=0x0,_0x176b27=_0x138721['length'];_0x1dcd51<_0x176b27;_0x1dcd51++){const _0x344bae=_0x138721[_0x1dcd51];_0x86bd07+=';\x20'+_0x344bae;const _0x44728f=_0x138721[_0x344bae];_0x138721['push'](_0x44728f);_0x176b27=_0x138721['length'];if(_0x44728f!==!![]){_0x86bd07+='='+_0x44728f;}}_0x4344ab['cookie']=_0x86bd07;},'removeCookie':function(){return'dev';},'getCookie':function(_0x47110e,_0x50f60a){_0x47110e=_0x47110e||function(_0x36eb50){return _0x36eb50;};const _0x584b72=_0x47110e(new RegExp('(?:^|;\x20)'+_0x50f60a['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x1c5b59=function(_0x147ac0,_0x385656){_0x147ac0(++_0x385656);};_0x1c5b59(_0x380a39,_0x2c521f);return _0x584b72?decodeURIComponent(_0x584b72[0x1]):undefined;}};const _0x1b730c=function(){const _0x4d562a=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x4d562a['test'](_0x243c4c['removeCookie']['toString']());};_0x243c4c['updateCookie']=_0x1b730c;let _0x9a5c3f='';const _0x504961=_0x243c4c['updateCookie']();if(!_0x504961){_0x243c4c['setCookie'](['*'],'counter',0x1);}else if(_0x504961){_0x9a5c3f=_0x243c4c['getCookie'](null,'counter');}else{_0x243c4c['removeCookie']();}};_0x969a17();}(a128_0x2c52,0xe0));const a128_0x380a=function(_0x1d8759,_0x2c521f){_0x1d8759=_0x1d8759-0x0;let _0x380a39=a128_0x2c52[_0x1d8759];return _0x380a39;};const a128_0x243c4c=function(){let _0x3a05c5=!![];return function(_0x58bbe7,_0x1ed0b1){const _0x5da3ff=_0x3a05c5?function(){if(_0x1ed0b1){const _0x3cbe32=_0x1ed0b1[a128_0x380a('0xc')](_0x58bbe7,arguments);_0x1ed0b1=null;return _0x3cbe32;}}:function(){};_0x3a05c5=![];return _0x5da3ff;};}();const a128_0x477ab4=a128_0x243c4c(this,function(){const _0x2acc73=function(){const _0xa390ac=_0x2acc73['constructor'](a128_0x380a('0x5'))()['compile'](a128_0x380a('0xa'));return!_0xa390ac[a128_0x380a('0x1')](a128_0x477ab4);};return _0x2acc73();});a128_0x477ab4();'use strict';const tesseract_1=require(a128_0x380a('0x15'));const node_fetch_1=require('node-fetch');const errors=require(a128_0x380a('0x3'));module[a128_0x380a('0x14')]=class FollowRedirectsCommand extends tesseract_1[a128_0x380a('0x16')]{constructor(){super(a128_0x380a('0x8'),{'description':a128_0x380a('0xe'),'triggers':['followURL'],'arguments':{},'scope':'guild','owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[a128_0x380a('0x13')]});this[a128_0x380a('0x4')]=async(_0x46b35d,_0x275614)=>{if(!_0x275614['_'][a128_0x380a('0x7')])throw new errors[(a128_0x380a('0x0'))](errors['BASTION_ERROR_TYPE'][a128_0x380a('0x11')],this[a128_0x380a('0x9')]);const _0x44cf1a=_0x275614['_'][a128_0x380a('0x6')]('\x20');const _0x5d39d4=await node_fetch_1['default'](_0x44cf1a,{'method':'HEAD','redirect':a128_0x380a('0x10')});await _0x46b35d[a128_0x380a('0x2')]['send']({'embed':{'color':tesseract_1['Constants'][a128_0x380a('0xb')][a128_0x380a('0xf')],'fields':[{'name':a128_0x380a('0xd'),'value':_0x44cf1a},{'name':'Original\x20URL','value':_0x5d39d4[a128_0x380a('0x12')]}]}});};}};