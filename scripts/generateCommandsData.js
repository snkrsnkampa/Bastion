const a196_0x4d9a=['clientPermission','./assets/commands.json','.js','stringify','scope','writeFileSync','yaml','schedulable','path','name','return\x20/\x22\x20+\x20this\x20+\x20\x22/','readdirSync','__esModule','defineProperty','utf-8','description','nsfw','unsafe','filter','owner','existsSync','userPermissions','push','dirname','syntax','triggers','test','ratelimit','isDirectory'];(function(_0x5ffcce,_0x4d9aaa){const _0x2f560b=function(_0x363ef1){while(--_0x363ef1){_0x5ffcce['push'](_0x5ffcce['shift']());}};const _0x3c8dd1=function(){const _0x3e9bb6={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x10cc9f,_0x5117b3,_0x5016a2,_0x3697c1){_0x3697c1=_0x3697c1||{};let _0x2bd70e=_0x5117b3+'='+_0x5016a2;let _0x2ed543=0x0;for(let _0x380823=0x0,_0x1896e7=_0x10cc9f['length'];_0x380823<_0x1896e7;_0x380823++){const _0x1a43ab=_0x10cc9f[_0x380823];_0x2bd70e+=';\x20'+_0x1a43ab;const _0x5bc2e7=_0x10cc9f[_0x1a43ab];_0x10cc9f['push'](_0x5bc2e7);_0x1896e7=_0x10cc9f['length'];if(_0x5bc2e7!==!![]){_0x2bd70e+='='+_0x5bc2e7;}}_0x3697c1['cookie']=_0x2bd70e;},'removeCookie':function(){return'dev';},'getCookie':function(_0x564fd2,_0x162846){_0x564fd2=_0x564fd2||function(_0x5ddc0e){return _0x5ddc0e;};const _0x12a5f1=_0x564fd2(new RegExp('(?:^|;\x20)'+_0x162846['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x556b62=function(_0x362809,_0x1ff328){_0x362809(++_0x1ff328);};_0x556b62(_0x2f560b,_0x4d9aaa);return _0x12a5f1?decodeURIComponent(_0x12a5f1[0x1]):undefined;}};const _0x593fef=function(){const _0x571402=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x571402['test'](_0x3e9bb6['removeCookie']['toString']());};_0x3e9bb6['updateCookie']=_0x593fef;let _0x59e90a='';const _0x4b071a=_0x3e9bb6['updateCookie']();if(!_0x4b071a){_0x3e9bb6['setCookie'](['*'],'counter',0x1);}else if(_0x4b071a){_0x59e90a=_0x3e9bb6['getCookie'](null,'counter');}else{_0x3e9bb6['removeCookie']();}};_0x3c8dd1();}(a196_0x4d9a,0x7d));const a196_0x2f56=function(_0x5ffcce,_0x4d9aaa){_0x5ffcce=_0x5ffcce-0x0;let _0x2f560b=a196_0x4d9a[_0x5ffcce];return _0x2f560b;};const a196_0x3e9bb6=function(){let _0x353ed4=!![];return function(_0x141194,_0x204ce6){const _0x50453b=_0x353ed4?function(){if(_0x204ce6){const _0x189a15=_0x204ce6['apply'](_0x141194,arguments);_0x204ce6=null;return _0x189a15;}}:function(){};_0x353ed4=![];return _0x50453b;};}();const a196_0x363ef1=a196_0x3e9bb6(this,function(){const _0x561327=function(){const _0x182101=_0x561327['constructor'](a196_0x2f56('0x1'))()['compile']('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x182101[a196_0x2f56('0x11')](a196_0x363ef1);};return _0x561327();});a196_0x363ef1();'use strict';Object[a196_0x2f56('0x4')](exports,a196_0x2f56('0x3'),{'value':!![]});const fs=require('fs');const path=require(a196_0x2f56('0x1c'));const yaml=require(a196_0x2f56('0x1a'));const walkDirectory=_0x1636f9=>{const _0x566934=[];(function _0x28c664(_0x24bb5e){const _0x5b36cb=fs[a196_0x2f56('0x2')](_0x24bb5e);for(const _0x299ede of _0x5b36cb){const _0x56736d=path['join'](_0x24bb5e,_0x299ede);if(fs['statSync'](_0x56736d)[a196_0x2f56('0x13')]())_0x28c664(_0x56736d);else _0x566934[a196_0x2f56('0xd')](_0x56736d);}}(_0x1636f9));return _0x566934;};const commandsDirectory=path['resolve']('./commands/');if(fs[a196_0x2f56('0xb')](commandsDirectory)){const files=walkDirectory(commandsDirectory);const commandStrings={};const commands={};for(const file of files[a196_0x2f56('0x9')](_0x2de6dd=>_0x2de6dd['endsWith'](a196_0x2f56('0x16')))){const Command=require(file);const command=new Command();const commandCategory=path[a196_0x2f56('0xe')](path['relative'](commandsDirectory,file));commandStrings[command['name']]=command[a196_0x2f56('0x6')];if(commandCategory in commands){commands[commandCategory][a196_0x2f56('0xd')]({'name':command[a196_0x2f56('0x0')],'description':command['description'],'triggers':command[a196_0x2f56('0x10')],'scope':command[a196_0x2f56('0x18')],'owner':command[a196_0x2f56('0xa')],'typing':command['typing'],'schedulable':command[a196_0x2f56('0x1b')],'unsafe':command[a196_0x2f56('0x8')],'nsfw':command[a196_0x2f56('0x7')],'cooldown':command['cooldown'],'ratelimit':command[a196_0x2f56('0x12')],'clientPermission':command[a196_0x2f56('0x14')],'userPermissions':command[a196_0x2f56('0xc')],'syntax':command['syntax']});}else{commands[commandCategory]=[{'name':command['name'],'description':command[a196_0x2f56('0x6')],'triggers':command['triggers'],'scope':command['scope'],'owner':command[a196_0x2f56('0xa')],'typing':command['typing'],'schedulable':command[a196_0x2f56('0x1b')],'unsafe':command[a196_0x2f56('0x8')],'nsfw':command[a196_0x2f56('0x7')],'cooldown':command['cooldown'],'ratelimit':command['ratelimit'],'clientPermission':command[a196_0x2f56('0x14')],'userPermissions':command[a196_0x2f56('0xc')],'syntax':command[a196_0x2f56('0xf')]}];}}fs[a196_0x2f56('0x19')]('./locales/en_us/commands.yaml',yaml['stringify'](commandStrings),{'encoding':a196_0x2f56('0x5')});fs[a196_0x2f56('0x19')](a196_0x2f56('0x15'),JSON[a196_0x2f56('0x17')](commands),{'encoding':a196_0x2f56('0x5')});}