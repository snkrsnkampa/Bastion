const a49_0x148f=['getString','category','```','document','Command\x20Categories','channel','push','exports','Commands','modules','toString','constructor','return\x20/\x22\x20+\x20this\x20+\x20\x22/','Command\x20Search','```\x0a','guild','send','name','commandDetailsOption','\x20Category','length','info','Want\x20the\x20complete\x20list?','locale','Constants','```css\x0a','catch','values','client','/commands','size','test','categoryCommandsCommand','didYouKnowCommandsCount','../../utils/strings','filter','manager','bastion.name','COLORS','compile','commandsWebsite','snakeToTitleCase','map','includes','exec','bastion.website','apply','commandCategoriesCommand','toSnakeCase','@bastion/tesseract','commandSearchFound','language','Need\x20more\x20details?','join','keys','search','Command','YELLOW','toLowerCase','commands\x20CATEGORY','slice','getConstant','commands','\x20is\x20an\x20invalid\x20command\x20category.\x20Use\x20the\x20`commands`\x20command\x20without\x20any\x20arguments\x20to\x20get\x20a\x20list\x20of\x20all\x20the\x20available\x20command\x20categories.'];(function(_0xe8207a,_0x148fd6){const _0x4de440=function(_0x1eb1e9){while(--_0x1eb1e9){_0xe8207a['push'](_0xe8207a['shift']());}};const _0x3c24c2=function(){const _0x5a8740={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0xe441a2,_0x3d5233,_0x51577c,_0x2ccdfd){_0x2ccdfd=_0x2ccdfd||{};let _0x1f8017=_0x3d5233+'='+_0x51577c;let _0x93e5be=0x0;for(let _0x3d6f13=0x0,_0x3b959=_0xe441a2['length'];_0x3d6f13<_0x3b959;_0x3d6f13++){const _0x4eb571=_0xe441a2[_0x3d6f13];_0x1f8017+=';\x20'+_0x4eb571;const _0x5868c2=_0xe441a2[_0x4eb571];_0xe441a2['push'](_0x5868c2);_0x3b959=_0xe441a2['length'];if(_0x5868c2!==!![]){_0x1f8017+='='+_0x5868c2;}}_0x2ccdfd['cookie']=_0x1f8017;},'removeCookie':function(){return'dev';},'getCookie':function(_0x145756,_0x54f680){_0x145756=_0x145756||function(_0x54961c){return _0x54961c;};const _0x3df77f=_0x145756(new RegExp('(?:^|;\x20)'+_0x54f680['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x467a25=function(_0x14c42d,_0x1788d4){_0x14c42d(++_0x1788d4);};_0x467a25(_0x4de440,_0x148fd6);return _0x3df77f?decodeURIComponent(_0x3df77f[0x1]):undefined;}};const _0x1dd4ca=function(){const _0x5cd9fe=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x5cd9fe['test'](_0x5a8740['removeCookie']['toString']());};_0x5a8740['updateCookie']=_0x1dd4ca;let _0x426d2b='';const _0x3665cf=_0x5a8740['updateCookie']();if(!_0x3665cf){_0x5a8740['setCookie'](['*'],'counter',0x1);}else if(_0x3665cf){_0x426d2b=_0x5a8740['getCookie'](null,'counter');}else{_0x5a8740['removeCookie']();}};_0x3c24c2();}(a49_0x148f,0xa0));const a49_0x4de4=function(_0xe8207a,_0x148fd6){_0xe8207a=_0xe8207a-0x0;let _0x4de440=a49_0x148f[_0xe8207a];return _0x4de440;};const a49_0x5a8740=function(){let _0x379739=!![];return function(_0x2a038b,_0x559c23){const _0x56e2f1=_0x379739?function(){if(_0x559c23){const _0x2c644b=_0x559c23[a49_0x4de4('0xe')](_0x2a038b,arguments);_0x559c23=null;return _0x2c644b;}}:function(){};_0x379739=![];return _0x56e2f1;};}();const a49_0x1eb1e9=a49_0x5a8740(this,function(){const _0x589077=function(){const _0x4da9f6=_0x589077[a49_0x4de4('0x2b')](a49_0x4de4('0x2c'))()[a49_0x4de4('0x7')]('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x4da9f6[a49_0x4de4('0x3f')](a49_0x1eb1e9);};return _0x589077();});a49_0x1eb1e9();'use strict';const tesseract_1=require(a49_0x4de4('0x11'));const strings=require(a49_0x4de4('0x2'));module[a49_0x4de4('0x27')]=class Commands extends tesseract_1[a49_0x4de4('0x18')]{constructor(){super('commands',{'description':'It\x20allows\x20you\x20the\x20see\x20the\x20list\x20of\x20commands\x20available\x20in\x20Bastion.\x20You\x20can\x20also\x20use\x20it\x20to\x20search\x20for\x20commands\x20matching\x20a\x20given\x20query.','triggers':[],'arguments':{'alias':{'search':['s']},'string':[a49_0x4de4('0x17')]},'scope':'guild','owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[a49_0x4de4('0x1e'),a49_0x4de4('0x1b'),'commands\x20--search\x20QUERY']});this[a49_0x4de4('0xc')]=async(_0x1b9795,_0x46e3f7)=>{if(_0x46e3f7[a49_0x4de4('0x17')]){const _0x19956e=this['manager'][a49_0x4de4('0x29')][a49_0x4de4('0xa')](_0x459b66=>_0x459b66[a49_0x4de4('0x31')])[a49_0x4de4('0x3')](_0x350f65=>_0x350f65[a49_0x4de4('0x1a')]()[a49_0x4de4('0xb')](_0x46e3f7[a49_0x4de4('0x17')]['toLowerCase']()));return await _0x1b9795[a49_0x4de4('0x25')][a49_0x4de4('0x30')]({'embed':{'color':tesseract_1['Constants'][a49_0x4de4('0x6')]['YELLOW'],'author':{'name':this[a49_0x4de4('0x3c')]['locale']['getConstant'](a49_0x4de4('0x5')),'url':this['client'][a49_0x4de4('0x37')]['getConstant'](a49_0x4de4('0xd'))},'title':a49_0x4de4('0x2d'),'url':this[a49_0x4de4('0x3c')]['locale']['getConstant'](a49_0x4de4('0xd'))+a49_0x4de4('0x3d'),'description':this[a49_0x4de4('0x3c')]['locale'][a49_0x4de4('0x20')](_0x1b9795['guild']['document']['language'],a49_0x4de4('0x35'),a49_0x4de4('0x12'),_0x19956e[a49_0x4de4('0x34')][a49_0x4de4('0x2a')](),_0x46e3f7[a49_0x4de4('0x17')]),'fields':[{'name':a49_0x4de4('0x28'),'value':a49_0x4de4('0x2e')+_0x19956e[a49_0x4de4('0x1c')](0x0,0xa)[a49_0x4de4('0x15')]('\x0a')+a49_0x4de4('0x22')},{'name':a49_0x4de4('0x36'),'value':this['client'][a49_0x4de4('0x37')][a49_0x4de4('0x20')](_0x1b9795[a49_0x4de4('0x2f')]['document'][a49_0x4de4('0x13')],'info','commandsWebsite')}],'footer':{'text':this['client'][a49_0x4de4('0x37')]['getString'](_0x1b9795[a49_0x4de4('0x2f')]['document'][a49_0x4de4('0x13')],'info',a49_0x4de4('0x1'),this['manager']['modules'][a49_0x4de4('0x3e')])}}})[a49_0x4de4('0x3a')](()=>{});}const _0x4234a3={};for(const _0x19eacd of this[a49_0x4de4('0x4')][a49_0x4de4('0x29')][a49_0x4de4('0x3b')]()){if(_0x19eacd['category']in _0x4234a3){_0x4234a3[_0x19eacd[a49_0x4de4('0x21')]][a49_0x4de4('0x26')](_0x19eacd[a49_0x4de4('0x31')]);}else{_0x4234a3[_0x19eacd[a49_0x4de4('0x21')]]=[_0x19eacd[a49_0x4de4('0x31')]];}}if(_0x46e3f7['_']['length']){const _0xfd260f=strings[a49_0x4de4('0x10')](_0x46e3f7['_']['join']('\x20'));if(Object[a49_0x4de4('0x16')](_0x4234a3)['includes'](_0xfd260f)){return await _0x1b9795[a49_0x4de4('0x25')][a49_0x4de4('0x30')]({'embed':{'color':tesseract_1[a49_0x4de4('0x38')][a49_0x4de4('0x6')]['YELLOW'],'author':{'name':this[a49_0x4de4('0x3c')][a49_0x4de4('0x37')][a49_0x4de4('0x1d')](a49_0x4de4('0x5')),'url':this['client']['locale'][a49_0x4de4('0x1d')]('bastion.website')},'title':'Commands\x20in\x20'+strings['snakeToTitleCase'](_0xfd260f)+a49_0x4de4('0x33'),'url':this[a49_0x4de4('0x3c')]['locale']['getConstant'](a49_0x4de4('0xd'))+a49_0x4de4('0x3d'),'description':this[a49_0x4de4('0x3c')][a49_0x4de4('0x37')][a49_0x4de4('0x20')](_0x1b9795[a49_0x4de4('0x2f')][a49_0x4de4('0x23')][a49_0x4de4('0x13')],'info',a49_0x4de4('0xf'),Object[a49_0x4de4('0x16')](_0x4234a3)[a49_0x4de4('0x34')]),'fields':[{'name':a49_0x4de4('0x28'),'value':a49_0x4de4('0x39')+_0x4234a3[_0xfd260f][a49_0x4de4('0x15')]('\x0a')+a49_0x4de4('0x22')},{'name':a49_0x4de4('0x14'),'value':this[a49_0x4de4('0x3c')][a49_0x4de4('0x37')][a49_0x4de4('0x20')](_0x1b9795[a49_0x4de4('0x2f')]['document'][a49_0x4de4('0x13')],'info',a49_0x4de4('0x32'))+'```bash\x0acommands\x20--help```'}],'footer':{'text':this[a49_0x4de4('0x3c')]['locale'][a49_0x4de4('0x20')](_0x1b9795[a49_0x4de4('0x2f')][a49_0x4de4('0x23')]['language'],a49_0x4de4('0x35'),a49_0x4de4('0x1'),this[a49_0x4de4('0x4')][a49_0x4de4('0x29')][a49_0x4de4('0x3e')])}}})[a49_0x4de4('0x3a')](()=>{});}return await _0x1b9795[a49_0x4de4('0x25')]['send']({'embed':{'color':tesseract_1[a49_0x4de4('0x38')][a49_0x4de4('0x6')][a49_0x4de4('0x19')],'description':strings['snakeToTitleCase'](_0xfd260f)+a49_0x4de4('0x1f')}})['catch'](()=>{});}await _0x1b9795['channel'][a49_0x4de4('0x30')]({'embed':{'color':tesseract_1['Constants'][a49_0x4de4('0x6')][a49_0x4de4('0x19')],'author':{'name':this[a49_0x4de4('0x3c')]['locale'][a49_0x4de4('0x1d')]('bastion.name'),'url':this[a49_0x4de4('0x3c')][a49_0x4de4('0x37')][a49_0x4de4('0x1d')](a49_0x4de4('0xd'))},'title':a49_0x4de4('0x24'),'url':this['client']['locale'][a49_0x4de4('0x1d')](a49_0x4de4('0xd'))+'/commands','description':this[a49_0x4de4('0x3c')][a49_0x4de4('0x37')][a49_0x4de4('0x20')](_0x1b9795[a49_0x4de4('0x2f')]['document'][a49_0x4de4('0x13')],a49_0x4de4('0x35'),a49_0x4de4('0x0')),'fields':[{'name':a49_0x4de4('0x24'),'value':'```css\x0a'+Object[a49_0x4de4('0x16')](_0x4234a3)['map'](_0x45ba7b=>strings[a49_0x4de4('0x9')](_0x45ba7b))[a49_0x4de4('0x15')]('\x0a')+'```'},{'name':'Want\x20the\x20complete\x20list?','value':this['client'][a49_0x4de4('0x37')][a49_0x4de4('0x20')](_0x1b9795[a49_0x4de4('0x2f')]['document'][a49_0x4de4('0x13')],a49_0x4de4('0x35'),a49_0x4de4('0x8'))}],'footer':{'text':this[a49_0x4de4('0x3c')][a49_0x4de4('0x37')][a49_0x4de4('0x20')](_0x1b9795[a49_0x4de4('0x2f')][a49_0x4de4('0x23')][a49_0x4de4('0x13')],a49_0x4de4('0x35'),a49_0x4de4('0x1'),this[a49_0x4de4('0x4')][a49_0x4de4('0x29')]['size'])}}})['catch'](()=>{});};}};