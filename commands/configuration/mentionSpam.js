const a25_0x4aa9=['It\x20allows\x20you\x20to\x20set\x20(and\x20unset)\x20the\x20threshold\x20for\x20mention\x20spam\x20in\x20the\x20server.\x20If\x20set,\x20Bastion\x20will\x20warn\x20the\x20users\x20who\x20violate\x20this\x20and\x20add\x20it\x20to\x20their\x20infractions.','mentionSpamInfractionsDisable','mentionSpam\x20--threshold\x20NUMBER','compile','catch','constructor','document','exports','apply','number','@bastion/tesseract','mentionSpam','Constants','send','save','tag','locale','return\x20/\x22\x20+\x20this\x20+\x20\x22/','test','threshold','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','COLORS','channel','getString','RED','guild','language'];(function(_0x1ad2e1,_0x4aa95e){const _0x188e40=function(_0x469aab){while(--_0x469aab){_0x1ad2e1['push'](_0x1ad2e1['shift']());}};const _0x19b0ce=function(){const _0x1d7623={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x3eacb5,_0x2e8f5e,_0x5d8cf4,_0x431356){_0x431356=_0x431356||{};let _0xda018d=_0x2e8f5e+'='+_0x5d8cf4;let _0x9ff18d=0x0;for(let _0x5eaf2a=0x0,_0x2ae08a=_0x3eacb5['length'];_0x5eaf2a<_0x2ae08a;_0x5eaf2a++){const _0x2113ea=_0x3eacb5[_0x5eaf2a];_0xda018d+=';\x20'+_0x2113ea;const _0x29d760=_0x3eacb5[_0x2113ea];_0x3eacb5['push'](_0x29d760);_0x2ae08a=_0x3eacb5['length'];if(_0x29d760!==!![]){_0xda018d+='='+_0x29d760;}}_0x431356['cookie']=_0xda018d;},'removeCookie':function(){return'dev';},'getCookie':function(_0x38428c,_0x4f6b76){_0x38428c=_0x38428c||function(_0x508bdd){return _0x508bdd;};const _0x2c47b4=_0x38428c(new RegExp('(?:^|;\x20)'+_0x4f6b76['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x379d09=function(_0x5d73d6,_0xdd0292){_0x5d73d6(++_0xdd0292);};_0x379d09(_0x188e40,_0x4aa95e);return _0x2c47b4?decodeURIComponent(_0x2c47b4[0x1]):undefined;}};const _0x4e0a7f=function(){const _0x2fe854=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x2fe854['test'](_0x1d7623['removeCookie']['toString']());};_0x1d7623['updateCookie']=_0x4e0a7f;let _0x2f69a0='';const _0xd73397=_0x1d7623['updateCookie']();if(!_0xd73397){_0x1d7623['setCookie'](['*'],'counter',0x1);}else if(_0xd73397){_0x2f69a0=_0x1d7623['getCookie'](null,'counter');}else{_0x1d7623['removeCookie']();}};_0x19b0ce();}(a25_0x4aa9,0xd4));const a25_0x188e=function(_0x1ad2e1,_0x4aa95e){_0x1ad2e1=_0x1ad2e1-0x0;let _0x188e40=a25_0x4aa9[_0x1ad2e1];return _0x188e40;};const a25_0x1d7623=function(){let _0x7eabfa=!![];return function(_0x173683,_0x362d00){const _0x5b84ae=_0x7eabfa?function(){if(_0x362d00){const _0x219575=_0x362d00[a25_0x188e('0xc')](_0x173683,arguments);_0x362d00=null;return _0x219575;}}:function(){};_0x7eabfa=![];return _0x5b84ae;};}();const a25_0x469aab=a25_0x1d7623(this,function(){const _0x2aab2a=function(){const _0x1e63cc=_0x2aab2a[a25_0x188e('0x9')](a25_0x188e('0x15'))()[a25_0x188e('0x7')](a25_0x188e('0x18'));return!_0x1e63cc[a25_0x188e('0x16')](a25_0x469aab);};return _0x2aab2a();});a25_0x469aab();'use strict';const tesseract_1=require(a25_0x188e('0xe'));module[a25_0x188e('0xb')]=class MentionSpamCommand extends tesseract_1['Command']{constructor(){super(a25_0x188e('0xf'),{'description':a25_0x188e('0x4'),'triggers':[],'arguments':{'alias':{'threshold':['t']},'number':[a25_0x188e('0x17')]},'scope':a25_0x188e('0x2'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':['MANAGE_GUILD'],'syntax':[a25_0x188e('0xf'),a25_0x188e('0x6')]});this['exec']=async(_0xfa773a,_0x85eb9)=>{const _0x3a5ef6=_0xfa773a['guild'];_0x3a5ef6[a25_0x188e('0xa')][a25_0x188e('0xf')]={..._0x3a5ef6['document'][a25_0x188e('0xf')],'threshold':typeof _0x85eb9[a25_0x188e('0x17')]===a25_0x188e('0xd')&&_0x85eb9[a25_0x188e('0x17')]>0x1?_0x85eb9[a25_0x188e('0x17')]:undefined};await _0x3a5ef6[a25_0x188e('0xa')][a25_0x188e('0x12')]();await _0xfa773a[a25_0x188e('0x1a')][a25_0x188e('0x11')]({'embed':{'color':_0x3a5ef6[a25_0x188e('0xa')][a25_0x188e('0xf')]['threshold']?tesseract_1['Constants']['COLORS']['GREEN']:tesseract_1[a25_0x188e('0x10')][a25_0x188e('0x19')][a25_0x188e('0x1')],'description':this['client'][a25_0x188e('0x14')][a25_0x188e('0x0')](_0xfa773a[a25_0x188e('0x2')]['document'][a25_0x188e('0x3')],'info',_0x3a5ef6['document'][a25_0x188e('0xf')][a25_0x188e('0x17')]?'mentionSpamInfractionsEnable':a25_0x188e('0x5'),_0xfa773a['author'][a25_0x188e('0x13')],_0x3a5ef6[a25_0x188e('0xa')][a25_0x188e('0xf')][a25_0x188e('0x17')])}})[a25_0x188e('0x8')](()=>{});};}};