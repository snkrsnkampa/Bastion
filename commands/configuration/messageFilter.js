const a26_0x15b4=['catch','client','info','messageFilterDisabled','send','messageFilter\x20--no-infraction','COLORS','messageFilter\x20PATTERN','messageFilter\x20--disable','author','getString','GREEN','filterInfractionDisabled','disable','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','Filter\x20Patterns','messageFilter','locale','language','concat','filters','return\x20/\x22\x20+\x20this\x20+\x20\x22/','enabled','join','exec','../../utils/arrays','exports','MANAGE_GUILD','patterns','infraction','save','@bastion/tesseract','channel','messageFilterEnabled','constructor','Constants','filterInfractionEnabled','tag','enable','guild','length','test','messageFilterDisable','document','Filter\x20Pattern\x20Added'];(function(_0x3bae8a,_0x15b444){const _0x442f60=function(_0x237db1){while(--_0x237db1){_0x3bae8a['push'](_0x3bae8a['shift']());}};const _0x253dd1=function(){const _0x3bb4ff={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x73a85d,_0x5eaaa2,_0x348ed4,_0x239498){_0x239498=_0x239498||{};let _0x8451ea=_0x5eaaa2+'='+_0x348ed4;let _0x3bccc2=0x0;for(let _0x3b2ca0=0x0,_0x4e753b=_0x73a85d['length'];_0x3b2ca0<_0x4e753b;_0x3b2ca0++){const _0x3fed85=_0x73a85d[_0x3b2ca0];_0x8451ea+=';\x20'+_0x3fed85;const _0x4fe3b6=_0x73a85d[_0x3fed85];_0x73a85d['push'](_0x4fe3b6);_0x4e753b=_0x73a85d['length'];if(_0x4fe3b6!==!![]){_0x8451ea+='='+_0x4fe3b6;}}_0x239498['cookie']=_0x8451ea;},'removeCookie':function(){return'dev';},'getCookie':function(_0x5a8468,_0x465d04){_0x5a8468=_0x5a8468||function(_0x4b3195){return _0x4b3195;};const _0x1add29=_0x5a8468(new RegExp('(?:^|;\x20)'+_0x465d04['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x3fd3a1=function(_0x69500e,_0x3b085a){_0x69500e(++_0x3b085a);};_0x3fd3a1(_0x442f60,_0x15b444);return _0x1add29?decodeURIComponent(_0x1add29[0x1]):undefined;}};const _0x594858=function(){const _0x4762d9=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x4762d9['test'](_0x3bb4ff['removeCookie']['toString']());};_0x3bb4ff['updateCookie']=_0x594858;let _0x518aac='';const _0x1432f7=_0x3bb4ff['updateCookie']();if(!_0x1432f7){_0x3bb4ff['setCookie'](['*'],'counter',0x1);}else if(_0x1432f7){_0x518aac=_0x3bb4ff['getCookie'](null,'counter');}else{_0x3bb4ff['removeCookie']();}};_0x253dd1();}(a26_0x15b4,0x15e));const a26_0x442f=function(_0x3bae8a,_0x15b444){_0x3bae8a=_0x3bae8a-0x0;let _0x442f60=a26_0x15b4[_0x3bae8a];return _0x442f60;};const a26_0x3bb4ff=function(){let _0x3dd742=!![];return function(_0x2e14a9,_0x29dcd1){const _0x4b7a62=_0x3dd742?function(){if(_0x29dcd1){const _0x5174f4=_0x29dcd1['apply'](_0x2e14a9,arguments);_0x29dcd1=null;return _0x5174f4;}}:function(){};_0x3dd742=![];return _0x4b7a62;};}();const a26_0x237db1=a26_0x3bb4ff(this,function(){const _0x3416fd=function(){const _0x161110=_0x3416fd[a26_0x442f('0x2c')](a26_0x442f('0x1f'))()['compile'](a26_0x442f('0x18'));return!_0x161110[a26_0x442f('0x6')](a26_0x237db1);};return _0x3416fd();});a26_0x237db1();'use strict';const tesseract_1=require(a26_0x442f('0x29'));const arrays=require(a26_0x442f('0x23'));module[a26_0x442f('0x24')]=class MessageFilterCommand extends tesseract_1['Command']{constructor(){super(a26_0x442f('0x1a'),{'description':'It\x20allows\x20you\x20to\x20enable\x20(and\x20disable)\x20Message\x20Filter\x20in\x20the\x20server.\x20When\x20enabled,\x20it\x20filters\x20the\x20messages\x20that\x20matches\x20the\x20patterns\x20specified\x20by\x20you.\x20And\x20it\x20also\x20allows\x20you\x20to\x20configure\x20if\x20violation\x20of\x20this\x20filter\x20should\x20be\x20considered\x20an\x20infraction.','triggers':[],'arguments':{'alias':{'clear':['c'],'disable':['d'],'enable':['e'],'infraction':['i'],'list':['l']},'boolean':['clear',a26_0x442f('0x17'),a26_0x442f('0x3'),a26_0x442f('0x27'),'list']},'scope':a26_0x442f('0x4'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[a26_0x442f('0x25')],'syntax':[a26_0x442f('0x1a'),a26_0x442f('0x11'),'messageFilter\x20--clear','messageFilter\x20--enable',a26_0x442f('0x12'),'messageFilter\x20--infraction',a26_0x442f('0xf')]});this[a26_0x442f('0x22')]=async(_0x4779cb,_0x3e9ea7)=>{const _0x1a821f=_0x4779cb[a26_0x442f('0x4')];const _0xb060f7=_0x3e9ea7['_'][a26_0x442f('0x5')]?[_0x3e9ea7['_'][a26_0x442f('0x21')]('\x20')]:[];_0x1a821f[a26_0x442f('0x8')][a26_0x442f('0x1e')]={..._0x1a821f['document']['filters'],'messageFilter':{'enabled':_0x3e9ea7[a26_0x442f('0x17')]?undefined:_0x3e9ea7[a26_0x442f('0x3')]||_0x1a821f[a26_0x442f('0x8')][a26_0x442f('0x1e')]&&_0x1a821f[a26_0x442f('0x8')]['filters'][a26_0x442f('0x1a')]&&_0x1a821f[a26_0x442f('0x8')][a26_0x442f('0x1e')][a26_0x442f('0x1a')]['enabled']?!![]:undefined,'patterns':_0x3e9ea7['clear']?undefined:_0x1a821f[a26_0x442f('0x8')][a26_0x442f('0x1e')]&&_0x1a821f['document']['filters']['messageFilter']&&_0x1a821f[a26_0x442f('0x8')][a26_0x442f('0x1e')][a26_0x442f('0x1a')][a26_0x442f('0x26')]?_0xb060f7['length']?_0x1a821f[a26_0x442f('0x8')][a26_0x442f('0x1e')][a26_0x442f('0x1a')][a26_0x442f('0x26')][a26_0x442f('0x1d')](_0xb060f7):_0x1a821f['document'][a26_0x442f('0x1e')][a26_0x442f('0x1a')][a26_0x442f('0x26')]:_0xb060f7[a26_0x442f('0x5')]?_0xb060f7:undefined,'infraction':_0x3e9ea7[a26_0x442f('0x27')]===![]?undefined:_0x3e9ea7['infraction']||_0x1a821f[a26_0x442f('0x8')][a26_0x442f('0x1e')]&&_0x1a821f[a26_0x442f('0x8')]['filters']['messageFilter']&&_0x1a821f['document'][a26_0x442f('0x1e')]['messageFilter']['infraction']?!![]:undefined}};await _0x1a821f[a26_0x442f('0x8')][a26_0x442f('0x28')]();await _0x4779cb[a26_0x442f('0x2a')][a26_0x442f('0xe')]({'embed':{'color':_0x3e9ea7[a26_0x442f('0x3')]?tesseract_1['Constants'][a26_0x442f('0x10')][a26_0x442f('0x15')]:_0x3e9ea7['disable']?tesseract_1[a26_0x442f('0x0')][a26_0x442f('0x10')]['RED']:tesseract_1['Constants'][a26_0x442f('0x10')]['IRIS'],'description':this['client'][a26_0x442f('0x1b')]['getString'](_0x4779cb[a26_0x442f('0x4')][a26_0x442f('0x8')][a26_0x442f('0x1c')],a26_0x442f('0xc'),_0x3e9ea7['enable']?'messageFilterEnable':_0x3e9ea7['disable']?a26_0x442f('0x7'):_0x1a821f[a26_0x442f('0x8')]['filters'][a26_0x442f('0x1a')][a26_0x442f('0x20')]?a26_0x442f('0x2b'):a26_0x442f('0xd'),_0x4779cb[a26_0x442f('0x13')][a26_0x442f('0x2')]),'fields':_0x1a821f['document'][a26_0x442f('0x1e')]['messageFilter'][a26_0x442f('0x20')]||_0xb060f7[a26_0x442f('0x5')]?[{'name':_0xb060f7[a26_0x442f('0x5')]?a26_0x442f('0x9'):a26_0x442f('0x19'),'value':_0xb060f7['length']?_0xb060f7[0x0]:_0x1a821f[a26_0x442f('0x8')]['filters'][a26_0x442f('0x1a')][a26_0x442f('0x26')]?arrays['wrap'](_0x1a821f[a26_0x442f('0x8')][a26_0x442f('0x1e')]['messageFilter'][a26_0x442f('0x26')],'`')[a26_0x442f('0x21')](',\x20'):'-'}]:[],'footer':{'text':_0x1a821f['document'][a26_0x442f('0x1e')][a26_0x442f('0x1a')][a26_0x442f('0x20')]?this[a26_0x442f('0xb')][a26_0x442f('0x1b')][a26_0x442f('0x14')](_0x4779cb[a26_0x442f('0x4')][a26_0x442f('0x8')][a26_0x442f('0x1c')],a26_0x442f('0xc'),_0x1a821f[a26_0x442f('0x8')]['filters']['messageFilter'][a26_0x442f('0x27')]?a26_0x442f('0x1'):a26_0x442f('0x16')):''}}})[a26_0x442f('0xa')](()=>{});};}};