const a130_0x4407=['apply','&q=','DiscordError','https://lmgtfy.com/?s=','Command','It\x20allows\x20you\x20to\x20send\x20a\x20LMGTFY\x20link\x20for\x20the\x20specified\x20search\x20query.\x20Use\x20it\x20to\x20teach\x20people\x20how\x20to\x20do\x20an\x20internet\x20search\x20and\x20get\x20answers\x20to\x20their\x20questions.','lmstfy\x20--duckduckgo\x20QUERY','lmgtfy','lmstfy\x20QUERY','guild','Let\x20me\x20search\x20that\x20for\x20you...','google','length','ddg','return\x20/\x22\x20+\x20this\x20+\x20\x22/','exec','lmstfy\x20--google\x20QUERY','lmstfy','name','../../utils/errors','send','join','INVALID_COMMAND_SYNTAX'];(function(_0x4c815c,_0x4407a7){const _0x4608ce=function(_0x3a43c1){while(--_0x3a43c1){_0x4c815c['push'](_0x4c815c['shift']());}};const _0x50813d=function(){const _0x11a9e4={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x36dac1,_0x5b4fb8,_0x4e0d5e,_0x5be374){_0x5be374=_0x5be374||{};let _0x4b7416=_0x5b4fb8+'='+_0x4e0d5e;let _0x34f800=0x0;for(let _0x5aa116=0x0,_0x21ac3f=_0x36dac1['length'];_0x5aa116<_0x21ac3f;_0x5aa116++){const _0x26bacd=_0x36dac1[_0x5aa116];_0x4b7416+=';\x20'+_0x26bacd;const _0x1c2008=_0x36dac1[_0x26bacd];_0x36dac1['push'](_0x1c2008);_0x21ac3f=_0x36dac1['length'];if(_0x1c2008!==!![]){_0x4b7416+='='+_0x1c2008;}}_0x5be374['cookie']=_0x4b7416;},'removeCookie':function(){return'dev';},'getCookie':function(_0x6f9a3c,_0x3235c8){_0x6f9a3c=_0x6f9a3c||function(_0x465492){return _0x465492;};const _0x51881b=_0x6f9a3c(new RegExp('(?:^|;\x20)'+_0x3235c8['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x5bf3a6=function(_0x1ca154,_0x3ba4d0){_0x1ca154(++_0x3ba4d0);};_0x5bf3a6(_0x4608ce,_0x4407a7);return _0x51881b?decodeURIComponent(_0x51881b[0x1]):undefined;}};const _0x4ce13d=function(){const _0x45b026=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x45b026['test'](_0x11a9e4['removeCookie']['toString']());};_0x11a9e4['updateCookie']=_0x4ce13d;let _0x456dac='';const _0x5164f1=_0x11a9e4['updateCookie']();if(!_0x5164f1){_0x11a9e4['setCookie'](['*'],'counter',0x1);}else if(_0x5164f1){_0x456dac=_0x11a9e4['getCookie'](null,'counter');}else{_0x11a9e4['removeCookie']();}};_0x50813d();}(a130_0x4407,0x1a5));const a130_0x4608=function(_0x4c815c,_0x4407a7){_0x4c815c=_0x4c815c-0x0;let _0x4608ce=a130_0x4407[_0x4c815c];return _0x4608ce;};const a130_0x11a9e4=function(){let _0x67cc46=!![];return function(_0x396eb5,_0x548b7c){const _0x172fe5=_0x67cc46?function(){if(_0x548b7c){const _0x3cb5ff=_0x548b7c[a130_0x4608('0x10')](_0x396eb5,arguments);_0x548b7c=null;return _0x3cb5ff;}}:function(){};_0x67cc46=![];return _0x172fe5;};}();const a130_0x3a43c1=a130_0x11a9e4(this,function(){const _0x57bb4b=function(){const _0x5cc08b=_0x57bb4b['constructor'](a130_0x4608('0x7'))()['compile']('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x5cc08b['test'](a130_0x3a43c1);};return _0x57bb4b();});a130_0x3a43c1();'use strict';const tesseract_1=require('@bastion/tesseract');const errors=require(a130_0x4608('0xc'));module['exports']=class LMSTFYCommand extends tesseract_1[a130_0x4608('0x14')]{constructor(){super(a130_0x4608('0xa'),{'description':a130_0x4608('0x15'),'triggers':[a130_0x4608('0x0')],'arguments':{'alias':{'duckduckgo':[a130_0x4608('0x6'),'d'],'google':['g']},'boolean':['duckduckgo','google']},'scope':a130_0x4608('0x2'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[a130_0x4608('0x1'),a130_0x4608('0x16'),a130_0x4608('0x9')]});this[a130_0x4608('0x8')]=async(_0x3ec04b,_0x3df3e8)=>{if(!_0x3df3e8['_'][a130_0x4608('0x5')])throw new errors[(a130_0x4608('0x12'))](errors['BASTION_ERROR_TYPE'][a130_0x4608('0xf')],this[a130_0x4608('0xb')]);await _0x3ec04b['channel'][a130_0x4608('0xd')]({'embed':{'color':tesseract_1['Constants']['COLORS']['IRIS'],'title':a130_0x4608('0x3'),'description':a130_0x4608('0x13')+(_0x3df3e8[a130_0x4608('0x4')]?'g':'d')+a130_0x4608('0x11')+encodeURIComponent(_0x3df3e8['_'][a130_0x4608('0xe')]('\x20')),'footer':{'text':'Powered\x20by\x20LMGTFY'}}});};}};