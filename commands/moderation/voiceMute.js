const a84_0x4888=['errors','Constants','RED','It\x20allows\x20you\x20to\x20voice\x20mute\x20(and\x20unmute)\x20users\x20in\x20a\x20channel.\x20Voice\x20muted\x20users\x20can\x27t\x20speak\x20in\x20the\x20voice\x20channels\x20they\x20are\x20muted.','author','COLORS','locale','name','resolver','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','rolePosition','client','@bastion/tesseract','user','MUTE_MEMBERS','unauthorized','set','ORANGE','getString','constructor','setMute','memberSetVoiceMute','send','Command','voice','tag','Reason','apply','guild','memberUnsetVoiceMute','canManage','ownerID','test','voiceMute\x20--unset\x20--user\x20USER_ID\x20--\x20REASON','document','BASTION_ERROR_TYPE','resolveGuildMember','exports','catch','channel','../../utils/errors','compile','join','voiceMute','exec','member','language'];(function(_0xbfb60a,_0x488802){const _0x54daf8=function(_0x987aae){while(--_0x987aae){_0xbfb60a['push'](_0xbfb60a['shift']());}};const _0x108de7=function(){const _0x37b39e={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x495534,_0x1dbfae,_0x238dd2,_0x2f2e3c){_0x2f2e3c=_0x2f2e3c||{};let _0x1bf0e1=_0x1dbfae+'='+_0x238dd2;let _0x423575=0x0;for(let _0xcaf398=0x0,_0x122329=_0x495534['length'];_0xcaf398<_0x122329;_0xcaf398++){const _0x3d4c2b=_0x495534[_0xcaf398];_0x1bf0e1+=';\x20'+_0x3d4c2b;const _0x32c56a=_0x495534[_0x3d4c2b];_0x495534['push'](_0x32c56a);_0x122329=_0x495534['length'];if(_0x32c56a!==!![]){_0x1bf0e1+='='+_0x32c56a;}}_0x2f2e3c['cookie']=_0x1bf0e1;},'removeCookie':function(){return'dev';},'getCookie':function(_0x56d674,_0x48508d){_0x56d674=_0x56d674||function(_0x30eb27){return _0x30eb27;};const _0x2e27ec=_0x56d674(new RegExp('(?:^|;\x20)'+_0x48508d['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x5868b9=function(_0x525f9b,_0x278471){_0x525f9b(++_0x278471);};_0x5868b9(_0x54daf8,_0x488802);return _0x2e27ec?decodeURIComponent(_0x2e27ec[0x1]):undefined;}};const _0x43ae79=function(){const _0x409d04=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x409d04['test'](_0x37b39e['removeCookie']['toString']());};_0x37b39e['updateCookie']=_0x43ae79;let _0x1c62af='';const _0xad1161=_0x37b39e['updateCookie']();if(!_0xad1161){_0x37b39e['setCookie'](['*'],'counter',0x1);}else if(_0xad1161){_0x1c62af=_0x37b39e['getCookie'](null,'counter');}else{_0x37b39e['removeCookie']();}};_0x108de7();}(a84_0x4888,0x96));const a84_0x54da=function(_0xbfb60a,_0x488802){_0xbfb60a=_0xbfb60a-0x0;let _0x54daf8=a84_0x4888[_0xbfb60a];return _0x54daf8;};const a84_0x37b39e=function(){let _0x3dfbe4=!![];return function(_0x2425b2,_0x446464){const _0xec7fb8=_0x3dfbe4?function(){if(_0x446464){const _0x1d447d=_0x446464[a84_0x54da('0x12')](_0x2425b2,arguments);_0x446464=null;return _0x1d447d;}}:function(){};_0x3dfbe4=![];return _0xec7fb8;};}();const a84_0x987aae=a84_0x37b39e(this,function(){const _0x17aef9=function(){const _0x72a9b5=_0x17aef9[a84_0x54da('0xa')]('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()[a84_0x54da('0x20')](a84_0x54da('0x0'));return!_0x72a9b5[a84_0x54da('0x17')](a84_0x987aae);};return _0x17aef9();});a84_0x987aae();'use strict';const tesseract_1=require(a84_0x54da('0x3'));const errors=require(a84_0x54da('0x1f'));module[a84_0x54da('0x1c')]=class VoiceMute extends tesseract_1[a84_0x54da('0xe')]{constructor(){super(a84_0x54da('0x22'),{'description':a84_0x54da('0x29'),'triggers':[],'arguments':{'configuration':{'negation-prefix':'un'},'alias':{'user':'u'},'default':{'set':!![]},'boolean':['set'],'string':['user']},'scope':a84_0x54da('0x13'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':['MUTE_MEMBERS'],'userPermissions':[a84_0x54da('0x5')],'syntax':['voiceMute\x20--user\x20USER_ID\x20--\x20REASON',a84_0x54da('0x18')]});this[a84_0x54da('0x23')]=async(_0x2e2849,_0x3a9038)=>{const _0x38a637=this['client'][a84_0x54da('0x2e')][a84_0x54da('0x1b')](_0x2e2849[a84_0x54da('0x13')],_0x3a9038[a84_0x54da('0x4')]);if(!_0x38a637)throw new errors['DiscordError'](errors[a84_0x54da('0x1a')]['INVALID_COMMAND_SYNTAX'],this[a84_0x54da('0x2d')]);if(_0x2e2849['author']['id']!==_0x2e2849[a84_0x54da('0x13')][a84_0x54da('0x16')]&&!_0x2e2849[a84_0x54da('0x24')][a84_0x54da('0x15')](_0x38a637)){return await _0x2e2849[a84_0x54da('0x1e')][a84_0x54da('0xd')]({'embed':{'color':tesseract_1[a84_0x54da('0x27')][a84_0x54da('0x2b')][a84_0x54da('0x28')],'title':this[a84_0x54da('0x2')][a84_0x54da('0x2c')][a84_0x54da('0x9')](_0x2e2849[a84_0x54da('0x13')][a84_0x54da('0x19')][a84_0x54da('0x25')],a84_0x54da('0x26'),a84_0x54da('0x6')),'description':this[a84_0x54da('0x2')][a84_0x54da('0x2c')][a84_0x54da('0x9')](_0x2e2849['guild'][a84_0x54da('0x19')][a84_0x54da('0x25')],a84_0x54da('0x26'),a84_0x54da('0x1'),_0x2e2849['author'][a84_0x54da('0x10')],_0x38a637[a84_0x54da('0x4')][a84_0x54da('0x10')])}})['catch'](()=>{});}const _0x1699ed=_0x3a9038['_'][a84_0x54da('0x21')]('\x20')||'-';await _0x38a637[a84_0x54da('0xf')][a84_0x54da('0xb')](!!_0x3a9038[a84_0x54da('0x7')],_0x1699ed);await _0x2e2849[a84_0x54da('0x1e')][a84_0x54da('0xd')]({'embed':{'color':tesseract_1[a84_0x54da('0x27')][a84_0x54da('0x2b')][a84_0x54da('0x8')],'description':_0x3a9038[a84_0x54da('0x7')]?this['client'][a84_0x54da('0x2c')][a84_0x54da('0x9')](_0x2e2849['guild'][a84_0x54da('0x19')][a84_0x54da('0x25')],'info',a84_0x54da('0xc'),_0x2e2849[a84_0x54da('0x2a')]['tag'],_0x38a637[a84_0x54da('0x4')][a84_0x54da('0x10')]):this[a84_0x54da('0x2')][a84_0x54da('0x2c')][a84_0x54da('0x9')](_0x2e2849['guild'][a84_0x54da('0x19')][a84_0x54da('0x25')],'info',a84_0x54da('0x14'),_0x2e2849[a84_0x54da('0x2a')][a84_0x54da('0x10')],_0x38a637['user'][a84_0x54da('0x10')]),'fields':[{'name':a84_0x54da('0x11'),'value':_0x1699ed}],'footer':{'text':_0x38a637['id']}}})[a84_0x54da('0x1d')](()=>{});};}};