const a79_0x553b=['BASTION_ERROR_TYPE','client','It\x20allows\x20you\x20to\x20report\x20a\x20server\x20member\x20to\x20the\x20moderators\x20of\x20the\x20server,\x20provided\x20a\x20Report\x20Channel\x20is\x20set.','name','cache','Constants','document','RED','Reported\x20by\x20','send','locale','../../utils/errors','join','INVALID_COMMAND_SYNTAX','tag','reportConfirmation','apply','resolveUser','@bastion/tesseract','compile','user','channels','reportsChannelId','report','ORANGE','constructor','language','delete','User\x20Report','DiscordError','exports','author','guild','channel','deletable','COLORS','\x20/\x20','info','resolver','get','noReportChannel','User','Report','Command','getString','User\x20Report\x20Command','catch'];(function(_0x1fda06,_0x553bac){const _0xee8b49=function(_0xaad9fe){while(--_0xaad9fe){_0x1fda06['push'](_0x1fda06['shift']());}};const _0x3d59dc=function(){const _0x158753={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x50ad36,_0x5c563c,_0x49fb5e,_0x4bc70d){_0x4bc70d=_0x4bc70d||{};let _0x107323=_0x5c563c+'='+_0x49fb5e;let _0x3ed301=0x0;for(let _0x365b2b=0x0,_0xb1ccf5=_0x50ad36['length'];_0x365b2b<_0xb1ccf5;_0x365b2b++){const _0x7a4d7f=_0x50ad36[_0x365b2b];_0x107323+=';\x20'+_0x7a4d7f;const _0x26c4a3=_0x50ad36[_0x7a4d7f];_0x50ad36['push'](_0x26c4a3);_0xb1ccf5=_0x50ad36['length'];if(_0x26c4a3!==!![]){_0x107323+='='+_0x26c4a3;}}_0x4bc70d['cookie']=_0x107323;},'removeCookie':function(){return'dev';},'getCookie':function(_0x9d2353,_0x230f81){_0x9d2353=_0x9d2353||function(_0x20bf45){return _0x20bf45;};const _0x5cf860=_0x9d2353(new RegExp('(?:^|;\x20)'+_0x230f81['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x5018e5=function(_0x1f7bb7,_0x3d3675){_0x1f7bb7(++_0x3d3675);};_0x5018e5(_0xee8b49,_0x553bac);return _0x5cf860?decodeURIComponent(_0x5cf860[0x1]):undefined;}};const _0x14cb13=function(){const _0x370eaa=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x370eaa['test'](_0x158753['removeCookie']['toString']());};_0x158753['updateCookie']=_0x14cb13;let _0x44eec6='';const _0x13d778=_0x158753['updateCookie']();if(!_0x13d778){_0x158753['setCookie'](['*'],'counter',0x1);}else if(_0x13d778){_0x44eec6=_0x158753['getCookie'](null,'counter');}else{_0x158753['removeCookie']();}};_0x3d59dc();}(a79_0x553b,0xe9));const a79_0xee8b=function(_0x1fda06,_0x553bac){_0x1fda06=_0x1fda06-0x0;let _0xee8b49=a79_0x553b[_0x1fda06];return _0xee8b49;};const a79_0x158753=function(){let _0x5eed2e=!![];return function(_0x212422,_0xa22986){const _0x82d8b1=_0x5eed2e?function(){if(_0xa22986){const _0x3c9b2d=_0xa22986[a79_0xee8b('0x12')](_0x212422,arguments);_0xa22986=null;return _0x3c9b2d;}}:function(){};_0x5eed2e=![];return _0x82d8b1;};}();const a79_0xaad9fe=a79_0x158753(this,function(){const _0x436e34=function(){const _0x5896ba=_0x436e34[a79_0xee8b('0x1b')]('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()[a79_0xee8b('0x15')]('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x5896ba['test'](a79_0xaad9fe);};return _0x436e34();});a79_0xaad9fe();'use strict';const tesseract_1=require(a79_0xee8b('0x14'));const errors=require(a79_0xee8b('0xd'));module[a79_0xee8b('0x20')]=class Report extends tesseract_1[a79_0xee8b('0x2d')]{constructor(){super(a79_0xee8b('0x19'),{'description':a79_0xee8b('0x4'),'triggers':[],'arguments':{'alias':{'user':'u'},'string':[a79_0xee8b('0x16')]},'scope':a79_0xee8b('0x22'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':['report\x20--user\x20USER_ID\x20--\x20REASON']});this['exec']=async(_0x2d02f1,_0x3961bd)=>{const _0x1ed7c7=this[a79_0xee8b('0x3')][a79_0xee8b('0x28')][a79_0xee8b('0x13')](_0x3961bd[a79_0xee8b('0x16')]);const _0x59638e=_0x3961bd['_'][a79_0xee8b('0xe')]('\x20');if(!_0x1ed7c7||!_0x59638e)throw new errors[(a79_0xee8b('0x1f'))](errors[a79_0xee8b('0x2')][a79_0xee8b('0xf')],this[a79_0xee8b('0x5')]);if(_0x2d02f1[a79_0xee8b('0x22')][a79_0xee8b('0x8')][a79_0xee8b('0x18')]){await _0x2d02f1[a79_0xee8b('0x22')][a79_0xee8b('0x17')][a79_0xee8b('0x6')][a79_0xee8b('0x29')](_0x2d02f1[a79_0xee8b('0x22')][a79_0xee8b('0x8')]['reportsChannelId'])[a79_0xee8b('0xb')]({'embed':{'color':tesseract_1[a79_0xee8b('0x7')]['COLORS'][a79_0xee8b('0x1a')],'title':a79_0xee8b('0x1e'),'fields':[{'name':a79_0xee8b('0x2b'),'value':_0x1ed7c7[a79_0xee8b('0x10')]+a79_0xee8b('0x26')+_0x1ed7c7['id']},{'name':a79_0xee8b('0x2c'),'value':_0x59638e}],'footer':{'text':a79_0xee8b('0xa')+_0x2d02f1['author'][a79_0xee8b('0x10')]+a79_0xee8b('0x26')+_0x2d02f1[a79_0xee8b('0x21')]['id']}}});await _0x2d02f1['channel']['send']({'embed':{'color':tesseract_1['Constants'][a79_0xee8b('0x25')][a79_0xee8b('0x1a')],'description':this[a79_0xee8b('0x3')]['locale']['getString'](_0x2d02f1['guild'][a79_0xee8b('0x8')][a79_0xee8b('0x1c')],a79_0xee8b('0x27'),a79_0xee8b('0x11'),_0x2d02f1[a79_0xee8b('0x21')][a79_0xee8b('0x10')])}})[a79_0xee8b('0x1')](()=>{});if(_0x2d02f1[a79_0xee8b('0x24')])await _0x2d02f1[a79_0xee8b('0x1d')]({'reason':a79_0xee8b('0x0')})['catch'](()=>{});}else{return await _0x2d02f1[a79_0xee8b('0x23')][a79_0xee8b('0xb')]({'embed':{'color':tesseract_1[a79_0xee8b('0x7')][a79_0xee8b('0x25')][a79_0xee8b('0x9')],'description':this[a79_0xee8b('0x3')][a79_0xee8b('0xc')][a79_0xee8b('0x2e')](_0x2d02f1[a79_0xee8b('0x22')][a79_0xee8b('0x8')][a79_0xee8b('0x1c')],'errors',a79_0xee8b('0x2a'))}})[a79_0xee8b('0x1')](()=>{});}};}};