const a63_0x46be=['bastion.server.invite','channel','**Are\x20you\x20sure\x20you\x20want\x20me\x20to\x20leave\x20the\x20server?**\x20I\x27ll\x20have\x20to\x20remove\x20all\x20the\x20data\x20I\x20have\x20on\x20this\x20server\x20and\x20all\x20the\x20configurations\x20that\x20you\x27ve\x20done\x20to\x20me.\x20I\x20won\x27t\x20recognize\x20you\x20the\x20next\x20time\x20you\x20invite\x20me\x20here.','send','test','leave','COLORS','constructor','exports','It\x20allows\x20you\x20to\x20ask\x20Bastion\x20to\x20leave\x20the\x20server\x20and\x20clear\x20all\x20data\x20it\x20has\x20on\x20server\x20and\x20its\x20members.','guild','*has\x20left\x20the\x20chat.*','compile','RED','MANAGE_GUILD','exec','locale','client','IRIS','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','I\x20knew\x20it\x20in\x20my\x20heart\x20that\x20you\x20won\x27t\x20let\x20me\x20leave.\x20💙','Constants','apply'];(function(_0x3fee58,_0x46bebc){const _0x309b48=function(_0xabdacf){while(--_0xabdacf){_0x3fee58['push'](_0x3fee58['shift']());}};const _0x2e1b2f=function(){const _0x50b858={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x55b8db,_0x4437f9,_0x340098,_0x2f590d){_0x2f590d=_0x2f590d||{};let _0x53f38e=_0x4437f9+'='+_0x340098;let _0x548256=0x0;for(let _0x2014dc=0x0,_0x53204b=_0x55b8db['length'];_0x2014dc<_0x53204b;_0x2014dc++){const _0x288634=_0x55b8db[_0x2014dc];_0x53f38e+=';\x20'+_0x288634;const _0x17dfd9=_0x55b8db[_0x288634];_0x55b8db['push'](_0x17dfd9);_0x53204b=_0x55b8db['length'];if(_0x17dfd9!==!![]){_0x53f38e+='='+_0x17dfd9;}}_0x2f590d['cookie']=_0x53f38e;},'removeCookie':function(){return'dev';},'getCookie':function(_0x47a5c8,_0x268d54){_0x47a5c8=_0x47a5c8||function(_0x417546){return _0x417546;};const _0x19b683=_0x47a5c8(new RegExp('(?:^|;\x20)'+_0x268d54['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x47d42d=function(_0x4ce8a6,_0x5c9c05){_0x4ce8a6(++_0x5c9c05);};_0x47d42d(_0x309b48,_0x46bebc);return _0x19b683?decodeURIComponent(_0x19b683[0x1]):undefined;}};const _0x4d0138=function(){const _0x7d0e19=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x7d0e19['test'](_0x50b858['removeCookie']['toString']());};_0x50b858['updateCookie']=_0x4d0138;let _0x33ac41='';const _0x17c5c4=_0x50b858['updateCookie']();if(!_0x17c5c4){_0x50b858['setCookie'](['*'],'counter',0x1);}else if(_0x17c5c4){_0x33ac41=_0x50b858['getCookie'](null,'counter');}else{_0x50b858['removeCookie']();}};_0x2e1b2f();}(a63_0x46be,0x170));const a63_0x309b=function(_0x3fee58,_0x46bebc){_0x3fee58=_0x3fee58-0x0;let _0x309b48=a63_0x46be[_0x3fee58];return _0x309b48;};const a63_0x50b858=function(){let _0xb9017f=!![];return function(_0x3190af,_0x13c943){const _0x582a68=_0xb9017f?function(){if(_0x13c943){const _0x5a49ea=_0x13c943[a63_0x309b('0x16')](_0x3190af,arguments);_0x13c943=null;return _0x5a49ea;}}:function(){};_0xb9017f=![];return _0x582a68;};}();const a63_0xabdacf=a63_0x50b858(this,function(){const _0x1b37ee=function(){const _0x14edcf=_0x1b37ee[a63_0x309b('0x7')]('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()[a63_0x309b('0xc')](a63_0x309b('0x13'));return!_0x14edcf[a63_0x309b('0x4')](a63_0xabdacf);};return _0x1b37ee();});a63_0xabdacf();'use strict';const tesseract_1=require('@bastion/tesseract');const confirmation_1=require('../../utils/confirmation');module[a63_0x309b('0x8')]=class LeaveCommand extends tesseract_1['Command']{constructor(){super(a63_0x309b('0x5'),{'description':a63_0x309b('0x9'),'triggers':[],'arguments':{},'scope':'guild','owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[a63_0x309b('0xe')],'syntax':[]});this[a63_0x309b('0xf')]=async _0x2bbdb3=>{const _0x113c69=await confirmation_1['default'](_0x2bbdb3,a63_0x309b('0x2'));await _0x2bbdb3['channel']['send']({'embed':{'color':_0x113c69?tesseract_1[a63_0x309b('0x15')][a63_0x309b('0x6')][a63_0x309b('0xd')]:tesseract_1[a63_0x309b('0x15')]['COLORS'][a63_0x309b('0x12')],'description':_0x113c69?'I\x20will\x20miss\x20each\x20and\x20everyone\x20of\x20you\x20here.\x20May\x20we\x20meet\x20again.\x0aIf\x20you\x20think\x20I\x20can\x20improve\x20in\x20some\x20way,\x20please\x20[let\x20my\x20team\x20know]('+this[a63_0x309b('0x11')][a63_0x309b('0x10')]['getConstant'](a63_0x309b('0x0'))+').\x0a\x0a*sad\x20robot\x20noises*':a63_0x309b('0x14')}})['catch'](()=>{});if(_0x113c69){await _0x2bbdb3[a63_0x309b('0x1')][a63_0x309b('0x3')](a63_0x309b('0xb'))['catch'](()=>{});await _0x2bbdb3[a63_0x309b('0xa')][a63_0x309b('0x5')]();}};}};