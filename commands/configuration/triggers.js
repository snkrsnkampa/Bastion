const a38_0x5c9e=['isPublicBastion','user','PLATINUM','../../utils/constants','locale','getString','../../utils/errors','Response\x20Message','info','client','generateBastionEmbed','triggers\x20--clear','IRIS','test','RED','countDocuments','fetchPremiumTier','catch','Trigger','```','../../utils/emojis','exec','pattern','document','author','@bastion/tesseract','triggersAdd','LIMITED_PREMIUM_MEMBERSHIP','../../utils/embeds','default','LIMITS','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','It\x20allows\x20you\x20to\x20add\x20(and\x20remove)\x20Triggers\x20in\x20the\x20server.\x20When\x20a\x20trigger\x20is\x20set,\x20and\x20Bastion\x20sees\x20a\x20message\x20from\x20a\x20human\x20containing\x20the\x20pattern\x20specified\x20in\x20the\x20trigger,\x20it\x27ll\x20respond\x20with\x20either\x20the\x20specified\x20response\x20message\x20or\x20reaction,\x20or\x20both.','join','compile','triggers\x20--pattern\x20PATTERN\x20--reaction\x20EMOJI','../../models/Trigger','responseReaction','push','PREMIUM_MEMBERSHIP_REQUIRED','triggers\x20--delete\x20PATTERN','language','GOLD','clear','tag','apply','reaction','length','deleteMany','MANAGE_GUILD','delete','BASTION_ERROR_TYPE','```json\x0a','map','Message\x20Response','triggersList','return\x20/\x22\x20+\x20this\x20+\x20\x22/','value','triggersClear','PremiumTier','triggersRemove','errors','COLORS','triggers','send','../../utils/omnic','GREEN','Constants','Response\x20Reaction','channel','DiscordError','TRIGGERS','guild'];(function(_0x158b90,_0x5c9e12){const _0x24209a=function(_0x29e1cb){while(--_0x29e1cb){_0x158b90['push'](_0x158b90['shift']());}};const _0x5603ba=function(){const _0x15ab71={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x2ef1f1,_0x17c6c7,_0xb25d00,_0x429a7e){_0x429a7e=_0x429a7e||{};let _0x245872=_0x17c6c7+'='+_0xb25d00;let _0x458683=0x0;for(let _0x2d3a78=0x0,_0x17c7c0=_0x2ef1f1['length'];_0x2d3a78<_0x17c7c0;_0x2d3a78++){const _0x31b00b=_0x2ef1f1[_0x2d3a78];_0x245872+=';\x20'+_0x31b00b;const _0x13d4fa=_0x2ef1f1[_0x31b00b];_0x2ef1f1['push'](_0x13d4fa);_0x17c7c0=_0x2ef1f1['length'];if(_0x13d4fa!==!![]){_0x245872+='='+_0x13d4fa;}}_0x429a7e['cookie']=_0x245872;},'removeCookie':function(){return'dev';},'getCookie':function(_0x3480dc,_0x4df30f){_0x3480dc=_0x3480dc||function(_0x246df3){return _0x246df3;};const _0x566879=_0x3480dc(new RegExp('(?:^|;\x20)'+_0x4df30f['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x1b21c5=function(_0x2824c6,_0x427d44){_0x2824c6(++_0x427d44);};_0x1b21c5(_0x24209a,_0x5c9e12);return _0x566879?decodeURIComponent(_0x566879[0x1]):undefined;}};const _0x2163a0=function(){const _0x31ba82=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x31ba82['test'](_0x15ab71['removeCookie']['toString']());};_0x15ab71['updateCookie']=_0x2163a0;let _0x4779ce='';const _0x58a20c=_0x15ab71['updateCookie']();if(!_0x58a20c){_0x15ab71['setCookie'](['*'],'counter',0x1);}else if(_0x58a20c){_0x4779ce=_0x15ab71['getCookie'](null,'counter');}else{_0x15ab71['removeCookie']();}};_0x5603ba();}(a38_0x5c9e,0xbe));const a38_0x2420=function(_0x158b90,_0x5c9e12){_0x158b90=_0x158b90-0x0;let _0x24209a=a38_0x5c9e[_0x158b90];return _0x24209a;};const a38_0x15ab71=function(){let _0x1a6eb2=!![];return function(_0x327442,_0x25c306){const _0x48252f=_0x1a6eb2?function(){if(_0x25c306){const _0x16be62=_0x25c306[a38_0x2420('0x1')](_0x327442,arguments);_0x25c306=null;return _0x16be62;}}:function(){};_0x1a6eb2=![];return _0x48252f;};}();const a38_0x29e1cb=a38_0x15ab71(this,function(){const _0x581717=function(){const _0x533bee=_0x581717['constructor'](a38_0x2420('0xc'))()[a38_0x2420('0x3f')](a38_0x2420('0x3c'));return!_0x533bee[a38_0x2420('0x2a')](a38_0x29e1cb);};return _0x581717();});a38_0x29e1cb();'use strict';const tesseract_1=require(a38_0x2420('0x36'));const Trigger_1=require(a38_0x2420('0x41'));const constants=require(a38_0x2420('0x20'));const embeds=require(a38_0x2420('0x39'));const emojis=require(a38_0x2420('0x31'));const errors=require(a38_0x2420('0x23'));const omnic=require(a38_0x2420('0x15'));module['exports']=class MessageFilterCommand extends tesseract_1['Command']{constructor(){super(a38_0x2420('0x13'),{'description':a38_0x2420('0x3d'),'triggers':[],'arguments':{'alias':{'clear':['c'],'delete':['d'],'pattern':['p'],'reaction':['e']},'boolean':[a38_0x2420('0x48')],'array':[a38_0x2420('0x6'),a38_0x2420('0x33')],'string':[a38_0x2420('0x6'),a38_0x2420('0x33'),a38_0x2420('0x2')]},'scope':'guild','owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[a38_0x2420('0x5')],'syntax':[a38_0x2420('0x13'),'triggers\x20--pattern\x20PATTERN\x20--\x20RESPONSE',a38_0x2420('0x40'),a38_0x2420('0x45'),a38_0x2420('0x28')]});this[a38_0x2420('0x32')]=async(_0xad08ca,_0x323927)=>{if(_0x323927[a38_0x2420('0x48')]){await Trigger_1[a38_0x2420('0x3a')]['deleteMany']({'guild':_0xad08ca['guild']['id']});return await _0xad08ca['channel'][a38_0x2420('0x14')]({'embed':{'color':tesseract_1[a38_0x2420('0x17')][a38_0x2420('0x12')][a38_0x2420('0x2b')],'description':this['client'][a38_0x2420('0x21')][a38_0x2420('0x22')](_0xad08ca[a38_0x2420('0x1c')][a38_0x2420('0x34')][a38_0x2420('0x46')],'info',a38_0x2420('0xe'),_0xad08ca[a38_0x2420('0x35')][a38_0x2420('0x0')])}})[a38_0x2420('0x2e')](()=>{});}if(_0x323927[a38_0x2420('0x6')]&&_0x323927[a38_0x2420('0x6')][a38_0x2420('0x3')]){const _0x2303e7=_0x323927['delete'][a38_0x2420('0x3e')]('\x20');await Trigger_1[a38_0x2420('0x3a')][a38_0x2420('0x4')]({'guild':_0xad08ca[a38_0x2420('0x1c')]['id'],'trigger':_0x2303e7});return await _0xad08ca[a38_0x2420('0x19')][a38_0x2420('0x14')]({'embed':{'color':tesseract_1['Constants']['COLORS'][a38_0x2420('0x2b')],'description':this['client'][a38_0x2420('0x21')][a38_0x2420('0x22')](_0xad08ca[a38_0x2420('0x1c')]['document'][a38_0x2420('0x46')],a38_0x2420('0x25'),a38_0x2420('0x10'),_0xad08ca[a38_0x2420('0x35')][a38_0x2420('0x0')],_0x2303e7)}})[a38_0x2420('0x2e')](()=>{});}if(_0x323927[a38_0x2420('0x33')]&&_0x323927[a38_0x2420('0x33')][a38_0x2420('0x3')]&&(_0x323927['_']['length']||_0x323927[a38_0x2420('0x2')])){if(constants[a38_0x2420('0x1d')](this[a38_0x2420('0x26')][a38_0x2420('0x1e')])){const _0x565372=await Trigger_1[a38_0x2420('0x3a')][a38_0x2420('0x2c')]({'guild':_0xad08ca['guild']['id']});if(_0x565372>=constants['LIMITS'][a38_0x2420('0x1b')]){const _0xaf22a4=await omnic[a38_0x2420('0x2d')](_0xad08ca[a38_0x2420('0x1c')])[a38_0x2420('0x2e')](()=>{});if(_0xaf22a4){if(_0xaf22a4===omnic[a38_0x2420('0xf')][a38_0x2420('0x47')]&&_0x565372>=constants[a38_0x2420('0x3b')][a38_0x2420('0x47')][a38_0x2420('0x1b')]){throw new errors[(a38_0x2420('0x1a'))](errors[a38_0x2420('0x7')]['LIMITED_PREMIUM_MEMBERSHIP'],this[a38_0x2420('0x26')]['locale'][a38_0x2420('0x22')](_0xad08ca[a38_0x2420('0x1c')][a38_0x2420('0x34')][a38_0x2420('0x46')],a38_0x2420('0x11'),'membershipLimitTriggers',constants[a38_0x2420('0x3b')][a38_0x2420('0x47')][a38_0x2420('0x1b')]));}else if(_0xaf22a4===omnic[a38_0x2420('0xf')][a38_0x2420('0x1f')]&&_0x565372>=constants[a38_0x2420('0x3b')][a38_0x2420('0x1f')][a38_0x2420('0x1b')]){throw new errors[(a38_0x2420('0x1a'))](errors[a38_0x2420('0x7')][a38_0x2420('0x38')],this['client'][a38_0x2420('0x21')][a38_0x2420('0x22')](_0xad08ca[a38_0x2420('0x1c')][a38_0x2420('0x34')][a38_0x2420('0x46')],a38_0x2420('0x11'),'membershipLimitTriggers',constants['LIMITS'][a38_0x2420('0x1f')]['TRIGGERS']));}}else{throw new errors['DiscordError'](errors['BASTION_ERROR_TYPE'][a38_0x2420('0x44')],this[a38_0x2420('0x26')][a38_0x2420('0x21')][a38_0x2420('0x22')](_0xad08ca[a38_0x2420('0x1c')]['document'][a38_0x2420('0x46')],a38_0x2420('0x11'),'premiumTriggers',constants['LIMITS'][a38_0x2420('0x1b')]));}}}const _0x524490=_0x323927[a38_0x2420('0x33')]['join']('\x20');const _0x308e52=[{'name':a38_0x2420('0x2f'),'value':_0x524490,'inline':!![]}];let _0x2d1cde;if(_0x323927['_'][a38_0x2420('0x3')]){_0x2d1cde=embeds[a38_0x2420('0x27')](_0x323927['_'][a38_0x2420('0x3e')]('\x20'));_0x308e52[a38_0x2420('0x43')]({'name':a38_0x2420('0x24'),'value':a38_0x2420('0x8')+JSON['stringify'](_0x2d1cde)+a38_0x2420('0x30')});}let _0x3bb502;if(_0x323927[a38_0x2420('0x2')]){const _0x4a8472=emojis['parseEmoji'](_0x323927[a38_0x2420('0x2')]);if(_0x4a8472){_0x3bb502=_0x4a8472[a38_0x2420('0xd')];_0x308e52[a38_0x2420('0x43')]({'name':a38_0x2420('0x18'),'value':_0x323927[a38_0x2420('0x2')]});}}await Trigger_1[a38_0x2420('0x3a')]['create']({'guild':_0xad08ca[a38_0x2420('0x1c')]['id'],'trigger':_0x524490,'responseMessage':_0x2d1cde,'responseReaction':_0x3bb502});return await _0xad08ca[a38_0x2420('0x19')]['send']({'embed':{'color':tesseract_1[a38_0x2420('0x17')]['COLORS'][a38_0x2420('0x16')],'description':this[a38_0x2420('0x26')]['locale'][a38_0x2420('0x22')](_0xad08ca['guild'][a38_0x2420('0x34')][a38_0x2420('0x46')],'info',a38_0x2420('0x37'),_0xad08ca['author'][a38_0x2420('0x0')]),'fields':_0x308e52}})[a38_0x2420('0x2e')](()=>{});}const _0x58d63b=await Trigger_1['default']['find']({'guild':_0xad08ca[a38_0x2420('0x1c')]['id']});return await _0xad08ca[a38_0x2420('0x19')][a38_0x2420('0x14')]({'embed':{'color':tesseract_1[a38_0x2420('0x17')][a38_0x2420('0x12')][a38_0x2420('0x29')],'description':this[a38_0x2420('0x26')][a38_0x2420('0x21')][a38_0x2420('0x22')](_0xad08ca[a38_0x2420('0x1c')][a38_0x2420('0x34')][a38_0x2420('0x46')],a38_0x2420('0x25'),a38_0x2420('0xb')),'fields':_0x58d63b[a38_0x2420('0x9')](_0x2435fe=>({'name':_0x2435fe['trigger'],'value':(_0x2435fe['responseMessage']?a38_0x2420('0xa'):'')+'\x0a'+(_0x2435fe[a38_0x2420('0x42')]?'Reaction\x20Response':'')}))}})['catch'](()=>{});};}};