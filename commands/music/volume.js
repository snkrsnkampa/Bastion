const a96_0x460e=['../../utils/errors','playing','textChannel','send','info','BASTION_ERROR_TYPE','channel','tag','setVolume','document','INVALID_COMMAND_SYNTAX','length','DiscordError','queue','connection','dispatcher','PINK','getString','locale','author','constructor','client','isMusicMaster','isInteger','musicDisabledPublic','paused','Constants','@bastion/tesseract','../../utils/constants','volume','voice','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','isPublicBastion','name','COLORS','music','It\x20allows\x20you\x20to\x20set\x20the\x20volume\x20of\x20the\x20music\x20track\x20that\x20is\x20currently\x20being\x20played\x20in\x20the\x20server.','catch','language','Command','compile','return\x20/\x22\x20+\x20this\x20+\x20\x22/','guild','errors','apply'];(function(_0x1eeb42,_0x460ef5){const _0x37834a=function(_0x1832a4){while(--_0x1832a4){_0x1eeb42['push'](_0x1eeb42['shift']());}};const _0x5ead8c=function(){const _0x148116={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x35b9b4,_0x46adc3,_0x365591,_0x4bd4b2){_0x4bd4b2=_0x4bd4b2||{};let _0x7874fc=_0x46adc3+'='+_0x365591;let _0x3f8ca0=0x0;for(let _0xecd189=0x0,_0x5e9690=_0x35b9b4['length'];_0xecd189<_0x5e9690;_0xecd189++){const _0x25506e=_0x35b9b4[_0xecd189];_0x7874fc+=';\x20'+_0x25506e;const _0x439285=_0x35b9b4[_0x25506e];_0x35b9b4['push'](_0x439285);_0x5e9690=_0x35b9b4['length'];if(_0x439285!==!![]){_0x7874fc+='='+_0x439285;}}_0x4bd4b2['cookie']=_0x7874fc;},'removeCookie':function(){return'dev';},'getCookie':function(_0x42f540,_0x56c610){_0x42f540=_0x42f540||function(_0x5c8be9){return _0x5c8be9;};const _0x4f5370=_0x42f540(new RegExp('(?:^|;\x20)'+_0x56c610['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x579916=function(_0x3fe2e5,_0xba9bd){_0x3fe2e5(++_0xba9bd);};_0x579916(_0x37834a,_0x460ef5);return _0x4f5370?decodeURIComponent(_0x4f5370[0x1]):undefined;}};const _0x4362da=function(){const _0x2d48b7=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x2d48b7['test'](_0x148116['removeCookie']['toString']());};_0x148116['updateCookie']=_0x4362da;let _0x3ebe3b='';const _0x77c4c6=_0x148116['updateCookie']();if(!_0x77c4c6){_0x148116['setCookie'](['*'],'counter',0x1);}else if(_0x77c4c6){_0x3ebe3b=_0x148116['getCookie'](null,'counter');}else{_0x148116['removeCookie']();}};_0x5ead8c();}(a96_0x460e,0xe5));const a96_0x3783=function(_0x1eeb42,_0x460ef5){_0x1eeb42=_0x1eeb42-0x0;let _0x37834a=a96_0x460e[_0x1eeb42];return _0x37834a;};const a96_0x148116=function(){let _0x5b250a=!![];return function(_0x20385e,_0x5d9c79){const _0x4fe50e=_0x5b250a?function(){if(_0x5d9c79){const _0x1faef2=_0x5d9c79[a96_0x3783('0x28')](_0x20385e,arguments);_0x5d9c79=null;return _0x1faef2;}}:function(){};_0x5b250a=![];return _0x4fe50e;};}();const a96_0x1832a4=a96_0x148116(this,function(){const _0x2e9f26=function(){const _0x361899=_0x2e9f26[a96_0x3783('0x10')](a96_0x3783('0x25'))()[a96_0x3783('0x24')](a96_0x3783('0x1b'));return!_0x361899['test'](a96_0x1832a4);};return _0x2e9f26();});a96_0x1832a4();'use strict';const tesseract_1=require(a96_0x3783('0x17'));const constants=require(a96_0x3783('0x18'));const errors=require(a96_0x3783('0x29'));module['exports']=class Volume extends tesseract_1[a96_0x3783('0x23')]{constructor(){super(a96_0x3783('0x19'),{'description':a96_0x3783('0x20'),'triggers':[],'arguments':{},'scope':'guild','owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':['volume\x2042']});this['exec']=async(_0x31fbc4,_0x2b4404)=>{let _0xe7e6ab=Number['parseInt'](_0x2b4404['_'][0x0]);if(!_0x2b4404['_'][a96_0x3783('0x7')]||!Number[a96_0x3783('0x13')](_0xe7e6ab))throw new errors[(a96_0x3783('0x8'))](errors[a96_0x3783('0x1')][a96_0x3783('0x6')],this['name']);const _0xa1b693=_0x31fbc4[a96_0x3783('0x26')];if(!_0xa1b693[a96_0x3783('0x5')]['music']||!_0xa1b693[a96_0x3783('0x5')][a96_0x3783('0x1f')]['enabled']){return await _0x31fbc4['channel'][a96_0x3783('0x2c')]({'embed':{'color':tesseract_1[a96_0x3783('0x16')][a96_0x3783('0x1e')]['RED'],'description':this[a96_0x3783('0x11')][a96_0x3783('0xe')]['getString'](_0x31fbc4['guild']['document'][a96_0x3783('0x22')],a96_0x3783('0x27'),constants[a96_0x3783('0x1c')](_0x31fbc4['author'])?a96_0x3783('0x14'):'musicDisabled')}})[a96_0x3783('0x21')](()=>{});}if(!_0x31fbc4['member'][a96_0x3783('0x12')]())return;if(_0xa1b693[a96_0x3783('0x1f')][a96_0x3783('0x2a')]&&_0xa1b693[a96_0x3783('0x1a')]&&_0xa1b693['voice'][a96_0x3783('0xa')][a96_0x3783('0xb')]&&!_0xa1b693[a96_0x3783('0x1a')][a96_0x3783('0xa')][a96_0x3783('0xb')][a96_0x3783('0x15')]){_0xe7e6ab=_0xe7e6ab<0x1?0x1:_0xe7e6ab>0xc8?0xc8:_0xe7e6ab;_0xa1b693[a96_0x3783('0x1a')][a96_0x3783('0xa')][a96_0x3783('0xb')]['setVolume'](_0xe7e6ab/0x64);const _0x5ab875=_0xa1b693['music'][a96_0x3783('0x9')][0x0];_0xa1b693[a96_0x3783('0x1f')][a96_0x3783('0x2b')]['send']({'embed':{'color':tesseract_1['Constants'][a96_0x3783('0x1e')][a96_0x3783('0xc')],'title':'Volume','description':this[a96_0x3783('0x11')][a96_0x3783('0xe')][a96_0x3783('0xd')](_0x31fbc4[a96_0x3783('0x26')]['document'][a96_0x3783('0x22')],a96_0x3783('0x0'),a96_0x3783('0x4'),_0x31fbc4[a96_0x3783('0xf')][a96_0x3783('0x3')],_0xe7e6ab),'footer':{'text':_0x5ab875['track']+'\x20•\x20'+_0xa1b693[a96_0x3783('0x1a')][a96_0x3783('0xa')][a96_0x3783('0x2')][a96_0x3783('0x1d')]}}})['catch'](()=>{});}};}};