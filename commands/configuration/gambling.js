const a18_0x48e7=['number','../../utils/errors','toString','exports','gambling','COLORS','premiumGamblingMultiplier','tag','user','PREMIUM_MEMBERSHIP_REQUIRED','info','test','isPublicBastion','enabled','locale','channel','compile','gamblingEnable','multiplier','@bastion/tesseract','../../utils/constants','apply','constructor','client','return\x20/\x22\x20+\x20this\x20+\x20\x22/','exec','getString','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','GREEN','guild','catch','Constants','document','language'];(function(_0x441c3b,_0x48e731){const _0x279c4f=function(_0x18ff00){while(--_0x18ff00){_0x441c3b['push'](_0x441c3b['shift']());}};const _0x39bdf1=function(){const _0x149012={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x390f74,_0x3fe8f5,_0x1e6964,_0x45bbd7){_0x45bbd7=_0x45bbd7||{};let _0x311af7=_0x3fe8f5+'='+_0x1e6964;let _0x14d151=0x0;for(let _0x9fb085=0x0,_0x4f078b=_0x390f74['length'];_0x9fb085<_0x4f078b;_0x9fb085++){const _0x438436=_0x390f74[_0x9fb085];_0x311af7+=';\x20'+_0x438436;const _0x48c387=_0x390f74[_0x438436];_0x390f74['push'](_0x48c387);_0x4f078b=_0x390f74['length'];if(_0x48c387!==!![]){_0x311af7+='='+_0x48c387;}}_0x45bbd7['cookie']=_0x311af7;},'removeCookie':function(){return'dev';},'getCookie':function(_0x1bf5bd,_0x59ac70){_0x1bf5bd=_0x1bf5bd||function(_0x4fb197){return _0x4fb197;};const _0x20d8fb=_0x1bf5bd(new RegExp('(?:^|;\x20)'+_0x59ac70['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x38206c=function(_0x2ebce2,_0x480084){_0x2ebce2(++_0x480084);};_0x38206c(_0x279c4f,_0x48e731);return _0x20d8fb?decodeURIComponent(_0x20d8fb[0x1]):undefined;}};const _0x505f14=function(){const _0x2a692d=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x2a692d['test'](_0x149012['removeCookie']['toString']());};_0x149012['updateCookie']=_0x505f14;let _0xfb634c='';const _0x16f112=_0x149012['updateCookie']();if(!_0x16f112){_0x149012['setCookie'](['*'],'counter',0x1);}else if(_0x16f112){_0xfb634c=_0x149012['getCookie'](null,'counter');}else{_0x149012['removeCookie']();}};_0x39bdf1();}(a18_0x48e7,0x182));const a18_0x279c=function(_0x441c3b,_0x48e731){_0x441c3b=_0x441c3b-0x0;let _0x279c4f=a18_0x48e7[_0x441c3b];return _0x279c4f;};const a18_0x149012=function(){let _0x1270e4=!![];return function(_0x1b1439,_0x219bb2){const _0x493d3a=_0x1270e4?function(){if(_0x219bb2){const _0x37813b=_0x219bb2[a18_0x279c('0x9')](_0x1b1439,arguments);_0x219bb2=null;return _0x37813b;}}:function(){};_0x1270e4=![];return _0x493d3a;};}();const a18_0x18ff00=a18_0x149012(this,function(){const _0x46e57d=function(){const _0x4d89a0=_0x46e57d[a18_0x279c('0xa')](a18_0x279c('0xc'))()[a18_0x279c('0x4')](a18_0x279c('0xf'));return!_0x4d89a0[a18_0x279c('0x21')](a18_0x18ff00);};return _0x46e57d();});a18_0x18ff00();'use strict';const tesseract_1=require(a18_0x279c('0x7'));const constants=require(a18_0x279c('0x8'));const errors=require(a18_0x279c('0x17'));const omnic=require('../../utils/omnic');module[a18_0x279c('0x19')]=class GamblingCommand extends tesseract_1['Command']{constructor(){super(a18_0x279c('0x1a'),{'description':'It\x20allows\x20you\x20to\x20enable\x20(or\x20disable)\x20gambling\x20in\x20the\x20server.\x20When\x20enabled,\x20members\x20can\x20use\x20their\x20Bastion\x20Coins\x20to\x20gamble\x20in\x20games.','triggers':[],'arguments':{'number':[a18_0x279c('0x6')]},'scope':a18_0x279c('0x11'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':['MANAGE_GUILD'],'syntax':[a18_0x279c('0x1a'),'gambling\x20--multiplier\x201..13']});this[a18_0x279c('0xd')]=async(_0x168e0a,_0x4b5042)=>{if(_0x4b5042[a18_0x279c('0x6')]&&constants[a18_0x279c('0x0')](this[a18_0x279c('0xb')][a18_0x279c('0x1e')])){const _0x484181=await omnic['fetchPremiumTier'](_0x168e0a[a18_0x279c('0x11')])['catch'](()=>{});if(!_0x484181)throw new errors['DiscordError'](errors['BASTION_ERROR_TYPE'][a18_0x279c('0x1f')],this['client'][a18_0x279c('0x2')][a18_0x279c('0xe')](_0x168e0a[a18_0x279c('0x11')][a18_0x279c('0x14')]['language'],'errors',a18_0x279c('0x1c')));}const _0x44f964=_0x168e0a[a18_0x279c('0x11')];const _0x3365bc=_0x4b5042[a18_0x279c('0x6')]?!![]:!(_0x44f964[a18_0x279c('0x14')][a18_0x279c('0x1a')]&&_0x44f964['document'][a18_0x279c('0x1a')][a18_0x279c('0x1')]);_0x44f964[a18_0x279c('0x14')][a18_0x279c('0x1a')]={'enabled':_0x3365bc,'multiplier':typeof _0x4b5042[a18_0x279c('0x6')]===a18_0x279c('0x16')?_0x4b5042[a18_0x279c('0x6')]:_0x3365bc?_0x44f964[a18_0x279c('0x14')]['gambling']&&_0x44f964['document']['gambling'][a18_0x279c('0x6')]:undefined};await _0x44f964[a18_0x279c('0x14')]['save']();await _0x168e0a[a18_0x279c('0x3')]['send']({'embed':{'color':_0x44f964[a18_0x279c('0x14')][a18_0x279c('0x1a')][a18_0x279c('0x1')]?tesseract_1[a18_0x279c('0x13')]['COLORS'][a18_0x279c('0x10')]:tesseract_1[a18_0x279c('0x13')][a18_0x279c('0x1b')]['RED'],'description':this[a18_0x279c('0xb')][a18_0x279c('0x2')][a18_0x279c('0xe')](_0x168e0a['guild'][a18_0x279c('0x14')][a18_0x279c('0x15')],a18_0x279c('0x20'),_0x44f964[a18_0x279c('0x14')][a18_0x279c('0x1a')][a18_0x279c('0x1')]?a18_0x279c('0x5'):'gamblingDisable',_0x168e0a['author'][a18_0x279c('0x1d')]),'fields':_0x44f964[a18_0x279c('0x14')]['gambling'][a18_0x279c('0x1')]?[{'name':'Gambling\x20Reward\x20Multiplier','value':_0x44f964[a18_0x279c('0x14')][a18_0x279c('0x1a')][a18_0x279c('0x6')]?_0x44f964['document'][a18_0x279c('0x1a')][a18_0x279c('0x6')][a18_0x279c('0x18')]():0x1[a18_0x279c('0x18')](),'inline':!![]}]:[]}})[a18_0x279c('0x12')](()=>{});};}};