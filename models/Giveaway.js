const a181_0x3cab=['constructor','Giveaway','apply','defineProperty','mongoose','compile','Schema','TextChannel','model','return\x20/\x22\x20+\x20this\x20+\x20\x22/'];(function(_0x31ca34,_0x3cab7d){const _0x667b29=function(_0x4b6d96){while(--_0x4b6d96){_0x31ca34['push'](_0x31ca34['shift']());}};const _0x1a608d=function(){const _0x4c181c={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x1743fa,_0x2c2cdd,_0x57df4c,_0x5bde36){_0x5bde36=_0x5bde36||{};let _0x3687ae=_0x2c2cdd+'='+_0x57df4c;let _0x577d8e=0x0;for(let _0x6f4a69=0x0,_0x7d4b=_0x1743fa['length'];_0x6f4a69<_0x7d4b;_0x6f4a69++){const _0x1db3eb=_0x1743fa[_0x6f4a69];_0x3687ae+=';\x20'+_0x1db3eb;const _0x4ad24f=_0x1743fa[_0x1db3eb];_0x1743fa['push'](_0x4ad24f);_0x7d4b=_0x1743fa['length'];if(_0x4ad24f!==!![]){_0x3687ae+='='+_0x4ad24f;}}_0x5bde36['cookie']=_0x3687ae;},'removeCookie':function(){return'dev';},'getCookie':function(_0x4891da,_0x242ce6){_0x4891da=_0x4891da||function(_0x465c18){return _0x465c18;};const _0xed428d=_0x4891da(new RegExp('(?:^|;\x20)'+_0x242ce6['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x2cd63c=function(_0x421826,_0x482e77){_0x421826(++_0x482e77);};_0x2cd63c(_0x667b29,_0x3cab7d);return _0xed428d?decodeURIComponent(_0xed428d[0x1]):undefined;}};const _0x300079=function(){const _0x53aa5c=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x53aa5c['test'](_0x4c181c['removeCookie']['toString']());};_0x4c181c['updateCookie']=_0x300079;let _0x1f1ef1='';const _0x1df272=_0x4c181c['updateCookie']();if(!_0x1df272){_0x4c181c['setCookie'](['*'],'counter',0x1);}else if(_0x1df272){_0x1f1ef1=_0x4c181c['getCookie'](null,'counter');}else{_0x4c181c['removeCookie']();}};_0x1a608d();}(a181_0x3cab,0x135));const a181_0x667b=function(_0x31ca34,_0x3cab7d){_0x31ca34=_0x31ca34-0x0;let _0x667b29=a181_0x3cab[_0x31ca34];return _0x667b29;};const a181_0x4c181c=function(){let _0x2cd63c=!![];return function(_0x465c18,_0x421826){const _0x482e77=_0x2cd63c?function(){if(_0x421826){const _0x53aa5c=_0x421826[a181_0x667b('0x3')](_0x465c18,arguments);_0x421826=null;return _0x53aa5c;}}:function(){};_0x2cd63c=![];return _0x482e77;};}();const a181_0x4b6d96=a181_0x4c181c(this,function(){const _0x3c3c42=function(){const _0x42f44c=_0x3c3c42[a181_0x667b('0x1')](a181_0x667b('0x0'))()[a181_0x667b('0x6')]('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x42f44c['test'](a181_0x4b6d96);};return _0x3c3c42();});a181_0x4b6d96();'use strict';Object[a181_0x667b('0x4')](exports,'__esModule',{'value':!![]});const mongoose=require(a181_0x667b('0x5'));const giveawaySchema=new mongoose[(a181_0x667b('0x7'))]({'_id':{'type':String,'required':!![]},'channel':{'type':String,'required':!![],'ref':a181_0x667b('0x8')},'guild':{'type':String,'required':!![],'ref':'Guild'},'winners':{'type':Number},'ends':{'type':Date,'required':!![],'expires':0x15180}});exports['default']=mongoose[a181_0x667b('0x9')](a181_0x667b('0x2'),giveawaySchema);