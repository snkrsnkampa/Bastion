const a31_0x16bc=['return\x20/\x22\x20+\x20this\x20+\x20\x22/','reports\x20--disable','GREEN','compile','test','tag','COLORS','locale','RED','send','language','Constants','constructor','catch','channel','getString','reportsDisable','reportsChannelId','info','Command','author','exports','guild','MANAGE_GUILD','document','@bastion/tesseract','reports','apply'];(function(_0x4cef3e,_0x16bcd7){const _0x217c00=function(_0x375cec){while(--_0x375cec){_0x4cef3e['push'](_0x4cef3e['shift']());}};const _0x2e9251=function(){const _0x486ae8={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x267865,_0x18fca6,_0x5ae62b,_0xbc4a80){_0xbc4a80=_0xbc4a80||{};let _0x3183d6=_0x18fca6+'='+_0x5ae62b;let _0x44845b=0x0;for(let _0x306b1a=0x0,_0x50d7e0=_0x267865['length'];_0x306b1a<_0x50d7e0;_0x306b1a++){const _0x5ddfa5=_0x267865[_0x306b1a];_0x3183d6+=';\x20'+_0x5ddfa5;const _0x4a3130=_0x267865[_0x5ddfa5];_0x267865['push'](_0x4a3130);_0x50d7e0=_0x267865['length'];if(_0x4a3130!==!![]){_0x3183d6+='='+_0x4a3130;}}_0xbc4a80['cookie']=_0x3183d6;},'removeCookie':function(){return'dev';},'getCookie':function(_0x1d61f8,_0x47409a){_0x1d61f8=_0x1d61f8||function(_0x52afc4){return _0x52afc4;};const _0x1b68fb=_0x1d61f8(new RegExp('(?:^|;\x20)'+_0x47409a['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x19f354=function(_0x199934,_0x4d69f0){_0x199934(++_0x4d69f0);};_0x19f354(_0x217c00,_0x16bcd7);return _0x1b68fb?decodeURIComponent(_0x1b68fb[0x1]):undefined;}};const _0x5d8a4f=function(){const _0x367f26=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x367f26['test'](_0x486ae8['removeCookie']['toString']());};_0x486ae8['updateCookie']=_0x5d8a4f;let _0x135df3='';const _0x6d9c2e=_0x486ae8['updateCookie']();if(!_0x6d9c2e){_0x486ae8['setCookie'](['*'],'counter',0x1);}else if(_0x6d9c2e){_0x135df3=_0x486ae8['getCookie'](null,'counter');}else{_0x486ae8['removeCookie']();}};_0x2e9251();}(a31_0x16bc,0x1a7));const a31_0x217c=function(_0x4cef3e,_0x16bcd7){_0x4cef3e=_0x4cef3e-0x0;let _0x217c00=a31_0x16bc[_0x4cef3e];return _0x217c00;};const a31_0x486ae8=function(){let _0x580c14=!![];return function(_0x5c4adc,_0xc56e37){const _0x389caf=_0x580c14?function(){if(_0xc56e37){const _0x6f88d0=_0xc56e37[a31_0x217c('0x18')](_0x5c4adc,arguments);_0xc56e37=null;return _0x6f88d0;}}:function(){};_0x580c14=![];return _0x389caf;};}();const a31_0x375cec=a31_0x486ae8(this,function(){const _0x2c8abf=function(){const _0xbe6965=_0x2c8abf[a31_0x217c('0x9')](a31_0x217c('0x19'))()[a31_0x217c('0x0')]('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0xbe6965[a31_0x217c('0x1')](a31_0x375cec);};return _0x2c8abf();});a31_0x375cec();'use strict';const tesseract_1=require(a31_0x217c('0x16'));module[a31_0x217c('0x12')]=class Reports extends tesseract_1[a31_0x217c('0x10')]{constructor(){super('reports',{'description':'It\x20allows\x20you\x20to\x20enable\x20(and\x20disable)\x20user\x20reports\x20in\x20the\x20server.\x20It\x20sets\x20the\x20channel\x20as\x20the\x20Report\x20Channel\x20that\x20will\x20receive\x20the\x20user\x20reports,\x20reported\x20by\x20the\x20server\x20members\x20using\x20the\x20`report`\x20command.','triggers':[],'arguments':{'alias':{'disable':['d']},'boolean':['disable']},'scope':a31_0x217c('0x13'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[a31_0x217c('0x14')],'syntax':[a31_0x217c('0x17'),a31_0x217c('0x1a')]});this['exec']=async(_0x20ce16,_0x2caf51)=>{const _0x364661=_0x20ce16[a31_0x217c('0x13')];if(_0x2caf51['disable']){_0x364661[a31_0x217c('0x15')][a31_0x217c('0xe')]=undefined;delete _0x364661[a31_0x217c('0x15')][a31_0x217c('0xe')];}else{_0x364661[a31_0x217c('0x15')]['reportsChannelId']=_0x20ce16[a31_0x217c('0xb')]['id'];}await _0x364661[a31_0x217c('0x15')]['save']();await _0x20ce16[a31_0x217c('0xb')][a31_0x217c('0x6')]({'embed':{'color':_0x364661[a31_0x217c('0x15')]['reportsChannelId']?tesseract_1[a31_0x217c('0x8')]['COLORS'][a31_0x217c('0x1b')]:tesseract_1[a31_0x217c('0x8')][a31_0x217c('0x3')][a31_0x217c('0x5')],'description':this['client'][a31_0x217c('0x4')][a31_0x217c('0xc')](_0x20ce16[a31_0x217c('0x13')]['document'][a31_0x217c('0x7')],a31_0x217c('0xf'),_0x364661[a31_0x217c('0x15')][a31_0x217c('0xe')]?'reportsEnable':a31_0x217c('0xd'),_0x20ce16[a31_0x217c('0x11')][a31_0x217c('0x2')])}})[a31_0x217c('0xa')](()=>{});};}};