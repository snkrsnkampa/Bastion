const a40_0x6952=['PREMIUM_MEMBERSHIP_REQUIRED','send','PLATINUM','findByIdAndUpdate','votingChannels\x20--remove','PremiumTier','constructor','../../utils/omnic','votingChannels','VOTING_CHANNELS','exec','Command','catch','COLORS','getString','guild','IRIS','../../utils/constants','remove','votingChannelsAdd','length','LIMITED_PREMIUM_MEMBERSHIP','_id','exports','isPublicBastion','info','GREEN','MANAGE_GUILD','Constants','BASTION_ERROR_TYPE','has','push','tag','cache','@bastion/tesseract','client','DiscordError','compile','add','apply','name','membershipLimitVotingChannels','language','premiumVotingChannels','user','channel','locale','errors','document','votingChannelsRemove','../../utils/errors','get','LIMITS','default','find','author','\x20Voting\x20Channels','return\x20/\x22\x20+\x20this\x20+\x20\x22/','join','\x20/\x20','countDocuments','GOLD','channels'];(function(_0x36dfbf,_0x6952c5){const _0x346e7c=function(_0x38385d){while(--_0x38385d){_0x36dfbf['push'](_0x36dfbf['shift']());}};const _0x42977b=function(){const _0x5f3e69={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x1eca4b,_0x4329a9,_0x4cf27b,_0x51a63a){_0x51a63a=_0x51a63a||{};let _0x341871=_0x4329a9+'='+_0x4cf27b;let _0x5c3914=0x0;for(let _0x358957=0x0,_0x6a96f9=_0x1eca4b['length'];_0x358957<_0x6a96f9;_0x358957++){const _0x180de7=_0x1eca4b[_0x358957];_0x341871+=';\x20'+_0x180de7;const _0xa4a2ee=_0x1eca4b[_0x180de7];_0x1eca4b['push'](_0xa4a2ee);_0x6a96f9=_0x1eca4b['length'];if(_0xa4a2ee!==!![]){_0x341871+='='+_0xa4a2ee;}}_0x51a63a['cookie']=_0x341871;},'removeCookie':function(){return'dev';},'getCookie':function(_0x2e780f,_0x1c11da){_0x2e780f=_0x2e780f||function(_0xeb65a0){return _0xeb65a0;};const _0x531bf0=_0x2e780f(new RegExp('(?:^|;\x20)'+_0x1c11da['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x5e30ca=function(_0x12ce7d,_0x287e8b){_0x12ce7d(++_0x287e8b);};_0x5e30ca(_0x346e7c,_0x6952c5);return _0x531bf0?decodeURIComponent(_0x531bf0[0x1]):undefined;}};const _0x310674=function(){const _0x9a4308=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x9a4308['test'](_0x5f3e69['removeCookie']['toString']());};_0x5f3e69['updateCookie']=_0x310674;let _0xbc59d5='';const _0x326f7e=_0x5f3e69['updateCookie']();if(!_0x326f7e){_0x5f3e69['setCookie'](['*'],'counter',0x1);}else if(_0x326f7e){_0xbc59d5=_0x5f3e69['getCookie'](null,'counter');}else{_0x5f3e69['removeCookie']();}};_0x42977b();}(a40_0x6952,0x14a));const a40_0x346e=function(_0x36dfbf,_0x6952c5){_0x36dfbf=_0x36dfbf-0x0;let _0x346e7c=a40_0x6952[_0x36dfbf];return _0x346e7c;};const a40_0x5f3e69=function(){let _0x14ed9d=!![];return function(_0xd9beb5,_0x1bbc1b){const _0x3a385d=_0x14ed9d?function(){if(_0x1bbc1b){const _0x2ad3a7=_0x1bbc1b[a40_0x346e('0x18')](_0xd9beb5,arguments);_0x1bbc1b=null;return _0x2ad3a7;}}:function(){};_0x14ed9d=![];return _0x3a385d;};}();const a40_0x38385d=a40_0x5f3e69(this,function(){const _0x232967=function(){const _0xad531c=_0x232967[a40_0x346e('0x36')](a40_0x346e('0x2a'))()[a40_0x346e('0x16')]('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0xad531c['test'](a40_0x38385d);};return _0x232967();});a40_0x38385d();'use strict';const tesseract_1=require(a40_0x346e('0x13'));const TextChannel_1=require('../../models/TextChannel');const constants=require(a40_0x346e('0x2'));const errors=require(a40_0x346e('0x23'));const omnic=require(a40_0x346e('0x37'));module[a40_0x346e('0x8')]=class Announcements extends tesseract_1[a40_0x346e('0x3b')]{constructor(){super(a40_0x346e('0x38'),{'description':'It\x20allows\x20you\x20to\x20set\x20(and\x20unset)\x20channels\x20as\x20Voting\x20Channels.\x20If\x20a\x20channel\x20is\x20set\x20as\x20a\x20Voting\x20Channel,\x20anything\x20sent\x20in\x20the\x20channel\x20will\x20be\x20set\x20up\x20for\x20everyone\x20to\x20vote.','triggers':[],'arguments':{'alias':{'add':['a'],'remove':['r']},'boolean':['add',a40_0x346e('0x3')]},'scope':a40_0x346e('0x0'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[a40_0x346e('0xc')],'syntax':[a40_0x346e('0x38'),'votingChannels\x20--add',a40_0x346e('0x34')]});this[a40_0x346e('0x3a')]=async(_0x34079f,_0x186cd6)=>{if(_0x186cd6[a40_0x346e('0x17')]){if(constants[a40_0x346e('0x9')](this['client'][a40_0x346e('0x1d')])){const _0x5c76c3=await TextChannel_1['default'][a40_0x346e('0x2d')]({'guild':_0x34079f[a40_0x346e('0x0')]['id'],'voting':!![]});if(_0x5c76c3>=constants[a40_0x346e('0x25')]['VOTING_CHANNELS']){const _0x5cca28=await omnic['fetchPremiumTier'](_0x34079f['guild'])[a40_0x346e('0x3c')](()=>{});if(_0x5cca28){if(_0x5cca28===omnic['PremiumTier'][a40_0x346e('0x2e')]&&_0x5c76c3>=constants[a40_0x346e('0x25')][a40_0x346e('0x2e')]['VOTING_CHANNELS']){throw new errors['DiscordError'](errors[a40_0x346e('0xe')][a40_0x346e('0x6')],this['client']['locale'][a40_0x346e('0x3e')](_0x34079f[a40_0x346e('0x0')][a40_0x346e('0x21')][a40_0x346e('0x1b')],'errors','membershipLimitVotingChannels',constants[a40_0x346e('0x25')]['GOLD']['VOTING_CHANNELS']));}else if(_0x5cca28===omnic[a40_0x346e('0x35')]['PLATINUM']&&_0x5c76c3>=constants[a40_0x346e('0x25')]['PLATINUM'][a40_0x346e('0x39')]){throw new errors[(a40_0x346e('0x15'))](errors[a40_0x346e('0xe')][a40_0x346e('0x6')],this['client']['locale'][a40_0x346e('0x3e')](_0x34079f[a40_0x346e('0x0')][a40_0x346e('0x21')][a40_0x346e('0x1b')],a40_0x346e('0x20'),a40_0x346e('0x1a'),constants['LIMITS'][a40_0x346e('0x32')][a40_0x346e('0x39')]));}}else{throw new errors[(a40_0x346e('0x15'))](errors[a40_0x346e('0xe')][a40_0x346e('0x30')],this['client']['locale'][a40_0x346e('0x3e')](_0x34079f[a40_0x346e('0x0')][a40_0x346e('0x21')]['language'],a40_0x346e('0x20'),a40_0x346e('0x1c'),constants['LIMITS'][a40_0x346e('0x39')]));}}}await TextChannel_1[a40_0x346e('0x26')][a40_0x346e('0x33')](_0x34079f[a40_0x346e('0x1e')]['id'],{'_id':_0x34079f[a40_0x346e('0x1e')]['id'],'guild':_0x34079f[a40_0x346e('0x0')]['id'],'voting':!![]},{'upsert':!![]});return await _0x34079f['channel'][a40_0x346e('0x31')]({'embed':{'color':tesseract_1[a40_0x346e('0xd')][a40_0x346e('0x3d')][a40_0x346e('0xb')],'description':this['client']['locale'][a40_0x346e('0x3e')](_0x34079f['guild'][a40_0x346e('0x21')][a40_0x346e('0x1b')],a40_0x346e('0xa'),a40_0x346e('0x4'),_0x34079f[a40_0x346e('0x28')][a40_0x346e('0x11')])}})[a40_0x346e('0x3c')](()=>{});}if(_0x186cd6[a40_0x346e('0x3')]){await TextChannel_1[a40_0x346e('0x26')][a40_0x346e('0x33')](_0x34079f['channel']['id'],{'_id':_0x34079f[a40_0x346e('0x1e')]['id'],'guild':_0x34079f[a40_0x346e('0x0')]['id'],'$unset':{'voting':0x1}});return await _0x34079f[a40_0x346e('0x1e')]['send']({'embed':{'color':tesseract_1[a40_0x346e('0xd')][a40_0x346e('0x3d')]['RED'],'description':this[a40_0x346e('0x14')][a40_0x346e('0x1f')][a40_0x346e('0x3e')](_0x34079f[a40_0x346e('0x0')][a40_0x346e('0x21')][a40_0x346e('0x1b')],a40_0x346e('0xa'),a40_0x346e('0x22'),_0x34079f[a40_0x346e('0x28')][a40_0x346e('0x11')])}})[a40_0x346e('0x3c')](()=>{});}const _0xacc5ed=await TextChannel_1[a40_0x346e('0x26')][a40_0x346e('0x27')]({'guild':_0x34079f['guild']['id'],'voting':!![]});const _0x9717df=[];for(const _0xc42cb6 of _0xacc5ed){if(_0x34079f['guild'][a40_0x346e('0x2f')][a40_0x346e('0x12')][a40_0x346e('0xf')](_0xc42cb6[a40_0x346e('0x7')])){_0x9717df[a40_0x346e('0x10')](_0x34079f[a40_0x346e('0x0')][a40_0x346e('0x2f')][a40_0x346e('0x12')][a40_0x346e('0x24')](_0xc42cb6[a40_0x346e('0x7')])[a40_0x346e('0x19')]+a40_0x346e('0x2c')+_0xc42cb6[a40_0x346e('0x7')]);}else{await _0xc42cb6['remove']()[a40_0x346e('0x3c')](()=>{});}}await _0x34079f[a40_0x346e('0x1e')]['send']({'embed':{'color':tesseract_1[a40_0x346e('0xd')][a40_0x346e('0x3d')][a40_0x346e('0x1')],'title':'Voting\x20Channels','description':this[a40_0x346e('0x14')][a40_0x346e('0x1f')][a40_0x346e('0x3e')](_0x34079f[a40_0x346e('0x0')][a40_0x346e('0x21')]['language'],'info',a40_0x346e('0x38')),'fields':[{'name':(_0x9717df[a40_0x346e('0x5')]?_0x9717df[a40_0x346e('0x5')]:'No')+a40_0x346e('0x29'),'value':_0x9717df[a40_0x346e('0x2b')]('\x0a\x0a')||'-'}]}})['catch'](()=>{});};}};