const a36_0x29f2=['BASTION_ERROR_TYPE','includes','@bastion/tesseract','getString','PREMIUM_MEMBERSHIP_REQUIRED','Followed\x20Streamers','LIMITS','PLATINUM','errors','COLORS','LIMITED_PREMIUM_MEMBERSHIP','See\x20`','save','twitch','DiscordError','send','Twitch','../../utils/omnic','isPublicBastion','STREAMERS_PER_SERVICE','\x20--help`\x20for\x20more\x20information.','You\x20aren\x27t\x20following\x20any\x20streamers.','streamers','../../utils/errors','locale','apply','join','GOLD','remove','client','guild','concat','membershipLimitStreamers','length','MANAGE_GUILD','exec','language','test','fetchPremiumTier','Constants','PremiumTier','user','users','premiumStreamers','document','It\x20allows\x20you\x20to\x20follow\x20streamers,\x20from\x20various\x20platforms,\x20in\x20the\x20server.\x20When\x20the\x20streamers\x20go\x20live,\x20or\x20post\x20a\x20video,\x20Bastion\x20will\x20notify\x20about\x20it\x20in\x20the\x20server.','exports','channel','TWITCH','return\x20/\x22\x20+\x20this\x20+\x20\x22/','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','compile','filter','channelId'];(function(_0x33268b,_0x29f2bd){const _0x372ca5=function(_0x296c06){while(--_0x296c06){_0x33268b['push'](_0x33268b['shift']());}};const _0x1947a4=function(){const _0x55a3eb={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0xeb2b17,_0x638a1b,_0x2ae59d,_0x21e190){_0x21e190=_0x21e190||{};let _0x2a5a16=_0x638a1b+'='+_0x2ae59d;let _0x5dc010=0x0;for(let _0x3004db=0x0,_0x20cdc0=_0xeb2b17['length'];_0x3004db<_0x20cdc0;_0x3004db++){const _0x18ae27=_0xeb2b17[_0x3004db];_0x2a5a16+=';\x20'+_0x18ae27;const _0x57fbc9=_0xeb2b17[_0x18ae27];_0xeb2b17['push'](_0x57fbc9);_0x20cdc0=_0xeb2b17['length'];if(_0x57fbc9!==!![]){_0x2a5a16+='='+_0x57fbc9;}}_0x21e190['cookie']=_0x2a5a16;},'removeCookie':function(){return'dev';},'getCookie':function(_0x199b2c,_0x34d37f){_0x199b2c=_0x199b2c||function(_0x155465){return _0x155465;};const _0x1b14b4=_0x199b2c(new RegExp('(?:^|;\x20)'+_0x34d37f['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x47a884=function(_0x2ef76a,_0x5b9ed3){_0x2ef76a(++_0x5b9ed3);};_0x47a884(_0x372ca5,_0x29f2bd);return _0x1b14b4?decodeURIComponent(_0x1b14b4[0x1]):undefined;}};const _0x3abd9d=function(){const _0x4efe05=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x4efe05['test'](_0x55a3eb['removeCookie']['toString']());};_0x55a3eb['updateCookie']=_0x3abd9d;let _0x2c9565='';const _0x48c507=_0x55a3eb['updateCookie']();if(!_0x48c507){_0x55a3eb['setCookie'](['*'],'counter',0x1);}else if(_0x48c507){_0x2c9565=_0x55a3eb['getCookie'](null,'counter');}else{_0x55a3eb['removeCookie']();}};_0x1947a4();}(a36_0x29f2,0x13b));const a36_0x372c=function(_0x33268b,_0x29f2bd){_0x33268b=_0x33268b-0x0;let _0x372ca5=a36_0x29f2[_0x33268b];return _0x372ca5;};const a36_0x55a3eb=function(){let _0x316d6b=!![];return function(_0x56e9a7,_0x4874a0){const _0xa19a53=_0x316d6b?function(){if(_0x4874a0){const _0xb4d64d=_0x4874a0[a36_0x372c('0x22')](_0x56e9a7,arguments);_0x4874a0=null;return _0xb4d64d;}}:function(){};_0x316d6b=![];return _0xa19a53;};}();const a36_0x296c06=a36_0x55a3eb(this,function(){const _0x248ff6=function(){const _0x561858=_0x248ff6['constructor'](a36_0x372c('0x4'))()[a36_0x372c('0x6')](a36_0x372c('0x5'));return!_0x561858[a36_0x372c('0x2e')](a36_0x296c06);};return _0x248ff6();});a36_0x296c06();'use strict';const tesseract_1=require(a36_0x372c('0xb'));const constants=require('../../utils/constants');const errors=require(a36_0x372c('0x20'));const omnic=require(a36_0x372c('0x1a'));module[a36_0x372c('0x1')]=class InviteFilterCommand extends tesseract_1['Command']{constructor(){super(a36_0x372c('0x1f'),{'description':a36_0x372c('0x0'),'triggers':[],'arguments':{'alias':{'remove':['r'],'twitch':['t']},'boolean':[a36_0x372c('0x25')],'string':['twitch']},'scope':a36_0x372c('0x27'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[a36_0x372c('0x2b')],'syntax':['streamers','streamers\x20--twitch\x20USERNAME','streamers\x20--twitch\x20USERNAME\x20--remove']});this[a36_0x372c('0x2c')]=async(_0x2837bb,_0x173193)=>{const _0x5f21f7=_0x2837bb[a36_0x372c('0x27')];if(_0x173193['twitch']){_0x5f21f7[a36_0x372c('0x35')][a36_0x372c('0x1f')]={..._0x5f21f7[a36_0x372c('0x35')][a36_0x372c('0x1f')],'twitch':{'channelId':_0x2837bb[a36_0x372c('0x2')]['id'],'users':_0x5f21f7[a36_0x372c('0x35')][a36_0x372c('0x1f')]&&_0x5f21f7[a36_0x372c('0x35')][a36_0x372c('0x1f')][a36_0x372c('0x16')]&&_0x5f21f7[a36_0x372c('0x35')][a36_0x372c('0x1f')]['twitch'][a36_0x372c('0x33')]&&_0x5f21f7[a36_0x372c('0x35')][a36_0x372c('0x1f')][a36_0x372c('0x16')][a36_0x372c('0x33')][a36_0x372c('0x2a')]&&!_0x5f21f7[a36_0x372c('0x35')][a36_0x372c('0x1f')][a36_0x372c('0x16')]['users'][a36_0x372c('0xa')](_0x173193[a36_0x372c('0x16')])?_0x5f21f7['document'][a36_0x372c('0x1f')]['twitch'][a36_0x372c('0x33')][a36_0x372c('0x28')](_0x173193[a36_0x372c('0x16')]):[_0x173193[a36_0x372c('0x16')]]}};if(_0x173193[a36_0x372c('0x25')]){_0x5f21f7[a36_0x372c('0x35')][a36_0x372c('0x1f')][a36_0x372c('0x16')][a36_0x372c('0x33')]=_0x5f21f7[a36_0x372c('0x35')]['streamers'][a36_0x372c('0x16')][a36_0x372c('0x33')][a36_0x372c('0x7')](_0x240ebb=>_0x240ebb!==_0x173193['twitch']);if(_0x5f21f7[a36_0x372c('0x35')][a36_0x372c('0x1f')][a36_0x372c('0x16')][a36_0x372c('0x33')][a36_0x372c('0x2a')]===0x0){_0x5f21f7[a36_0x372c('0x35')]['streamers'][a36_0x372c('0x16')]=undefined;delete _0x5f21f7[a36_0x372c('0x35')]['streamers'][a36_0x372c('0x16')];}}if(_0x5f21f7[a36_0x372c('0x35')][a36_0x372c('0x1f')][a36_0x372c('0x16')][a36_0x372c('0x33')][a36_0x372c('0x2a')]>constants[a36_0x372c('0xf')][a36_0x372c('0x1c')]&&constants[a36_0x372c('0x1b')](this[a36_0x372c('0x26')][a36_0x372c('0x32')])){const _0x247f84=await omnic[a36_0x372c('0x2f')](_0x2837bb[a36_0x372c('0x27')])['catch'](()=>{});if(_0x247f84){if(_0x247f84===omnic['PremiumTier'][a36_0x372c('0x24')]&&_0x5f21f7['document'][a36_0x372c('0x1f')][a36_0x372c('0x16')][a36_0x372c('0x33')][a36_0x372c('0x2a')]>constants[a36_0x372c('0xf')][a36_0x372c('0x24')][a36_0x372c('0x1c')]){throw new errors[(a36_0x372c('0x17'))](errors[a36_0x372c('0x9')][a36_0x372c('0x13')],this[a36_0x372c('0x26')][a36_0x372c('0x21')][a36_0x372c('0xc')](_0x2837bb[a36_0x372c('0x27')][a36_0x372c('0x35')][a36_0x372c('0x2d')],a36_0x372c('0x11'),a36_0x372c('0x29'),constants['LIMITS'][a36_0x372c('0x24')]['STREAMERS_PER_SERVICE']));}else if(_0x247f84===omnic[a36_0x372c('0x31')][a36_0x372c('0x10')]&&_0x5f21f7[a36_0x372c('0x35')][a36_0x372c('0x1f')][a36_0x372c('0x16')]['users'][a36_0x372c('0x2a')]>constants[a36_0x372c('0xf')]['PLATINUM']['STREAMERS_PER_SERVICE']){throw new errors[(a36_0x372c('0x17'))](errors[a36_0x372c('0x9')][a36_0x372c('0x13')],this['client'][a36_0x372c('0x21')][a36_0x372c('0xc')](_0x2837bb[a36_0x372c('0x27')]['document']['language'],a36_0x372c('0x11'),'membershipLimitStreamers',constants[a36_0x372c('0xf')][a36_0x372c('0x10')]['STREAMERS_PER_SERVICE']));}}else{throw new errors[(a36_0x372c('0x17'))](errors['BASTION_ERROR_TYPE'][a36_0x372c('0xd')],this[a36_0x372c('0x26')][a36_0x372c('0x21')][a36_0x372c('0xc')](_0x2837bb[a36_0x372c('0x27')]['document'][a36_0x372c('0x2d')],a36_0x372c('0x11'),a36_0x372c('0x34'),constants[a36_0x372c('0xf')][a36_0x372c('0x1c')]));}}await _0x5f21f7[a36_0x372c('0x35')][a36_0x372c('0x15')]();}const _0x266ee1=[];if(_0x5f21f7['document'][a36_0x372c('0x1f')]&&_0x5f21f7['document'][a36_0x372c('0x1f')]['twitch']){_0x266ee1['push']({'name':a36_0x372c('0x19'),'value':'<#'+_0x5f21f7[a36_0x372c('0x35')][a36_0x372c('0x1f')][a36_0x372c('0x16')][a36_0x372c('0x8')]+'>\x0a'+(_0x5f21f7[a36_0x372c('0x35')]['streamers'][a36_0x372c('0x16')][a36_0x372c('0x33')]&&_0x5f21f7[a36_0x372c('0x35')][a36_0x372c('0x1f')]['twitch'][a36_0x372c('0x33')][a36_0x372c('0x2a')]?_0x5f21f7[a36_0x372c('0x35')][a36_0x372c('0x1f')][a36_0x372c('0x16')][a36_0x372c('0x33')][a36_0x372c('0x23')]('\x0a'):'-')});}await _0x2837bb[a36_0x372c('0x2')][a36_0x372c('0x18')]({'embed':{'color':_0x173193[a36_0x372c('0x16')]&&_0x173193[a36_0x372c('0x16')][a36_0x372c('0x2a')]?constants[a36_0x372c('0x12')][a36_0x372c('0x3')]:tesseract_1[a36_0x372c('0x30')][a36_0x372c('0x12')]['IRIS'],'title':a36_0x372c('0xe'),'fields':_0x266ee1[a36_0x372c('0x2a')]?_0x266ee1:[{'name':a36_0x372c('0x1e'),'value':a36_0x372c('0x14')+this['name']+a36_0x372c('0x1d')}]}})['catch'](()=>{});};}};