const a105_0x2b07=['Command','setDate','getString','getClaimMessageKey','author','premiumSinceTimestamp','test','tag','exports','toDateString','member','joinedTimestamp','client','default','findOne','Constants','@bastion/tesseract','errors','info','../../utils/numbers','Daily\x20Reward','getRandomInt','channel','It\x20allows\x20you\x20to\x20claim\x20Bastion\x20Coins,\x20that\x20every\x20member\x20receives\x20as\x20a\x20reward\x20for\x20being\x20in\x20the\x20server.\x20You\x20can\x20claim\x20your\x20rewards\x20once\x20every\x2024\x20hours.','claimStreakLast','guild','getDate','../../models/Member','claim','COLORS','apply','send','document','constructor','language','claimStreakFirst','claimRewardBooster','exec','claimStreak','daily','locale','return\x20/\x22\x20+\x20this\x20+\x20\x22/','claimStreakClaimed','getTime','lastClaimed','IRIS','compile'];(function(_0xf27091,_0x2b07c4){const _0x4ae98e=function(_0x511e96){while(--_0x511e96){_0xf27091['push'](_0xf27091['shift']());}};const _0x133e89=function(){const _0x1c9c59={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x2d4edf,_0x1b32b6,_0x55db4f,_0x1229ff){_0x1229ff=_0x1229ff||{};let _0x68996e=_0x1b32b6+'='+_0x55db4f;let _0x24964c=0x0;for(let _0x24518b=0x0,_0x30680c=_0x2d4edf['length'];_0x24518b<_0x30680c;_0x24518b++){const _0x1e82ae=_0x2d4edf[_0x24518b];_0x68996e+=';\x20'+_0x1e82ae;const _0x450b64=_0x2d4edf[_0x1e82ae];_0x2d4edf['push'](_0x450b64);_0x30680c=_0x2d4edf['length'];if(_0x450b64!==!![]){_0x68996e+='='+_0x450b64;}}_0x1229ff['cookie']=_0x68996e;},'removeCookie':function(){return'dev';},'getCookie':function(_0x1edbcb,_0x52690e){_0x1edbcb=_0x1edbcb||function(_0x1d8404){return _0x1d8404;};const _0x64377e=_0x1edbcb(new RegExp('(?:^|;\x20)'+_0x52690e['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x5bf6b1=function(_0x316937,_0x40872f){_0x316937(++_0x40872f);};_0x5bf6b1(_0x4ae98e,_0x2b07c4);return _0x64377e?decodeURIComponent(_0x64377e[0x1]):undefined;}};const _0x35cfe3=function(){const _0x513a92=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x513a92['test'](_0x1c9c59['removeCookie']['toString']());};_0x1c9c59['updateCookie']=_0x35cfe3;let _0x30d90c='';const _0x22262a=_0x1c9c59['updateCookie']();if(!_0x22262a){_0x1c9c59['setCookie'](['*'],'counter',0x1);}else if(_0x22262a){_0x30d90c=_0x1c9c59['getCookie'](null,'counter');}else{_0x1c9c59['removeCookie']();}};_0x133e89();}(a105_0x2b07,0xa3));const a105_0x4ae9=function(_0xf27091,_0x2b07c4){_0xf27091=_0xf27091-0x0;let _0x4ae98e=a105_0x2b07[_0xf27091];return _0x4ae98e;};const a105_0x1c9c59=function(){let _0x47fe19=!![];return function(_0xb354db,_0x38c762){const _0x185fe5=_0x47fe19?function(){if(_0x38c762){const _0xf98cca=_0x38c762[a105_0x4ae9('0x8')](_0xb354db,arguments);_0x38c762=null;return _0xf98cca;}}:function(){};_0x47fe19=![];return _0x185fe5;};}();const a105_0x511e96=a105_0x1c9c59(this,function(){const _0x4349e8=function(){const _0x427563=_0x4349e8[a105_0x4ae9('0xb')](a105_0x4ae9('0x13'))()[a105_0x4ae9('0x18')]('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x427563[a105_0x4ae9('0x1f')](a105_0x511e96);};return _0x4349e8();});a105_0x511e96();'use strict';const tesseract_1=require(a105_0x4ae9('0x29'));const Member_1=require(a105_0x4ae9('0x5'));const numbers=require(a105_0x4ae9('0x2c'));module[a105_0x4ae9('0x21')]=class DailyCommand extends tesseract_1[a105_0x4ae9('0x19')]{constructor(){super(a105_0x4ae9('0x11'),{'description':a105_0x4ae9('0x1'),'triggers':['claim'],'arguments':{},'scope':a105_0x4ae9('0x3'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[]});this['getClaimMessageKey']=_0x54501c=>{switch(_0x54501c){case 0x1:return a105_0x4ae9('0xd');case 0x6:return a105_0x4ae9('0x2');case 0x7:return a105_0x4ae9('0x14');default:return'claimStreak';}};this[a105_0x4ae9('0xf')]=async _0x52fc4c=>{const _0x543a94=await Member_1[a105_0x4ae9('0x26')][a105_0x4ae9('0x27')]({'user':_0x52fc4c['author']['id'],'guild':_0x52fc4c[a105_0x4ae9('0x3')]['id']});const _0x4d8b50=new Date();const _0x143565=(_0x308bea=>new Date(_0x308bea[a105_0x4ae9('0x1a')](_0x308bea[a105_0x4ae9('0x4')]()-0x1)))(new Date());const _0x3fe19d=new Date(_0x543a94[a105_0x4ae9('0x16')]);if(_0x4d8b50[a105_0x4ae9('0x22')]()===_0x3fe19d[a105_0x4ae9('0x22')]())throw new Error(this[a105_0x4ae9('0x25')][a105_0x4ae9('0x12')][a105_0x4ae9('0x1b')](_0x52fc4c[a105_0x4ae9('0x3')][a105_0x4ae9('0xa')]['language'],a105_0x4ae9('0x2a'),'alreadyClaimed',_0x52fc4c[a105_0x4ae9('0x1d')][a105_0x4ae9('0x20')]));_0x543a94[a105_0x4ae9('0x16')]=_0x4d8b50['getTime']();let _0x1440b7=numbers[a105_0x4ae9('0x2e')](0x2a,0x80);if(_0x4d8b50[a105_0x4ae9('0x15')]()-_0x52fc4c[a105_0x4ae9('0x23')][a105_0x4ae9('0x24')]<0xf731400){_0x1440b7/=0x2;}_0x543a94[a105_0x4ae9('0x10')]=_0x143565[a105_0x4ae9('0x22')]()===_0x3fe19d['toDateString']()?_0x543a94['claimStreak']+0x1:0x1;const _0x3aab9e=this[a105_0x4ae9('0x25')][a105_0x4ae9('0x12')][a105_0x4ae9('0x1b')](_0x52fc4c[a105_0x4ae9('0x3')][a105_0x4ae9('0xa')][a105_0x4ae9('0xc')],a105_0x4ae9('0x2b'),this[a105_0x4ae9('0x1c')](_0x543a94[a105_0x4ae9('0x10')]),0x7-_0x543a94[a105_0x4ae9('0x10')]);if(_0x543a94[a105_0x4ae9('0x10')]===0x7){_0x543a94['claimStreak']=0x0;_0x1440b7+=numbers[a105_0x4ae9('0x2e')](0x200,0x400);}if(_0x52fc4c[a105_0x4ae9('0x23')][a105_0x4ae9('0x1e')]){_0x1440b7*=0x2;}await _0x52fc4c['member']['credit'](_0x1440b7,a105_0x4ae9('0x2d'),_0x543a94);await _0x543a94['save']();_0x52fc4c[a105_0x4ae9('0x0')][a105_0x4ae9('0x9')]({'embed':{'color':tesseract_1[a105_0x4ae9('0x28')][a105_0x4ae9('0x7')][a105_0x4ae9('0x17')],'description':this['client'][a105_0x4ae9('0x12')][a105_0x4ae9('0x1b')](_0x52fc4c[a105_0x4ae9('0x3')][a105_0x4ae9('0xa')][a105_0x4ae9('0xc')],a105_0x4ae9('0x2b'),a105_0x4ae9('0x6'),_0x52fc4c[a105_0x4ae9('0x1d')][a105_0x4ae9('0x20')])+'\x0a\x0a'+_0x3aab9e,'footer':{'text':_0x52fc4c[a105_0x4ae9('0x23')][a105_0x4ae9('0x1e')]?this[a105_0x4ae9('0x25')][a105_0x4ae9('0x12')][a105_0x4ae9('0x1b')](_0x52fc4c[a105_0x4ae9('0x3')][a105_0x4ae9('0xa')][a105_0x4ae9('0xc')],a105_0x4ae9('0x2b'),a105_0x4ae9('0xe')):''}}})['catch'](()=>{});};}};