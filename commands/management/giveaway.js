const a61_0x3902=['errors','../../models/Giveaway','COLORS','../../utils/numbers','GIVEAWAY_TIMEOUT','Constants','PremiumTier','user','MANAGE_CHANNELS','locale','timeout','../../utils/errors','react','channel','membershipLimitGiveaways','length','../../utils/constants','BASTION_ERROR_TYPE','floor','fetchPremiumTier','winners','membershipLimitGiveawayTimeout','name','language','default','return\x20/\x22\x20+\x20this\x20+\x20\x22/','constructor','client','exec','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','LIMITED_PREMIUM_MEMBERSHIP','exports','Command','defaultTimeout','compile','guild','\x20Winners\x20•\x20Ends','../../utils/omnic','GOLD','create','PLATINUM','join','GIVEAWAYS','catch','reactions','React\x20to\x20this\x20message\x20with\x20','PREMIUM_MEMBERSHIP_REQUIRED','\x20to\x20participate\x20in\x20the\x20giveaway\x20for\x20a\x20chance\x20to\x20win.','number','giveaway\x20--timeout\x20HOURS\x20--\x20ITEM','now','countDocuments','MAX_SAFE_INTEGER','\x20or\x20','@bastion/tesseract','getString','DiscordError','premiumGiveawayTimeout','LIMITS','premiumGiveaways','document','defaultWinners'];(function(_0x10c8b2,_0x3902f1){const _0x34cd6e=function(_0x4bb28a){while(--_0x4bb28a){_0x10c8b2['push'](_0x10c8b2['shift']());}};const _0x291689=function(){const _0x1e609b={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x18e151,_0x2997a2,_0x18710a,_0x4b2a4e){_0x4b2a4e=_0x4b2a4e||{};let _0x2a74ef=_0x2997a2+'='+_0x18710a;let _0x2d0a84=0x0;for(let _0x21014e=0x0,_0x237301=_0x18e151['length'];_0x21014e<_0x237301;_0x21014e++){const _0x7ea418=_0x18e151[_0x21014e];_0x2a74ef+=';\x20'+_0x7ea418;const _0xff50fe=_0x18e151[_0x7ea418];_0x18e151['push'](_0xff50fe);_0x237301=_0x18e151['length'];if(_0xff50fe!==!![]){_0x2a74ef+='='+_0xff50fe;}}_0x4b2a4e['cookie']=_0x2a74ef;},'removeCookie':function(){return'dev';},'getCookie':function(_0x26a709,_0x2b3fc1){_0x26a709=_0x26a709||function(_0x2ebea5){return _0x2ebea5;};const _0x5ec175=_0x26a709(new RegExp('(?:^|;\x20)'+_0x2b3fc1['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x502197=function(_0x476415,_0x19f335){_0x476415(++_0x19f335);};_0x502197(_0x34cd6e,_0x3902f1);return _0x5ec175?decodeURIComponent(_0x5ec175[0x1]):undefined;}};const _0x5bc80c=function(){const _0x4b0afa=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x4b0afa['test'](_0x1e609b['removeCookie']['toString']());};_0x1e609b['updateCookie']=_0x5bc80c;let _0x5a01fa='';const _0x13671e=_0x1e609b['updateCookie']();if(!_0x13671e){_0x1e609b['setCookie'](['*'],'counter',0x1);}else if(_0x13671e){_0x5a01fa=_0x1e609b['getCookie'](null,'counter');}else{_0x1e609b['removeCookie']();}};_0x291689();}(a61_0x3902,0xaa));const a61_0x34cd=function(_0x10c8b2,_0x3902f1){_0x10c8b2=_0x10c8b2-0x0;let _0x34cd6e=a61_0x3902[_0x10c8b2];return _0x34cd6e;};const a61_0x1e609b=function(){let _0x282c14=!![];return function(_0x302133,_0x58a324){const _0x551429=_0x282c14?function(){if(_0x58a324){const _0x513120=_0x58a324['apply'](_0x302133,arguments);_0x58a324=null;return _0x513120;}}:function(){};_0x282c14=![];return _0x551429;};}();const a61_0x4bb28a=a61_0x1e609b(this,function(){const _0x4e4f4e=function(){const _0x30c8e8=_0x4e4f4e[a61_0x34cd('0x2a')](a61_0x34cd('0x29'))()[a61_0x34cd('0x32')](a61_0x34cd('0x2d'));return!_0x30c8e8['test'](a61_0x4bb28a);};return _0x4e4f4e();});a61_0x4bb28a();'use strict';const tesseract_1=require(a61_0x34cd('0x8'));const Giveaway_1=require(a61_0x34cd('0x11'));const constants=require(a61_0x34cd('0x20'));const errors=require(a61_0x34cd('0x1b'));const numbers=require(a61_0x34cd('0x13'));const omnic=require(a61_0x34cd('0x35'));module[a61_0x34cd('0x2f')]=class GiveawayCommand extends tesseract_1[a61_0x34cd('0x30')]{constructor(){super('giveaway',{'description':'It\x20allows\x20you\x20to\x20run\x20giveaway\x20events\x20in\x20the\x20server\x20for\x20at\x20least\x20an\x20hour\x20and\x20at\x20most\x20a\x20month.\x20You\x20can\x20set\x20any\x20number\x20of\x20winners\x20for\x20the\x20event.\x20And\x20it\x20also\x20allows\x20you\x20to\x20reroll\x20the\x20winners,\x20if\x20need\x20be,\x20after\x20the\x20end\x20of\x20the\x20event.','triggers':[],'arguments':{'alias':{'timeout':['t'],'winners':['w']},'number':[a61_0x34cd('0x1a'),a61_0x34cd('0x24')],'coerce':{'timeout':_0x207a56=>typeof _0x207a56===a61_0x34cd('0x2')&&numbers['clamp'](_0x207a56,0x1,0x2d0),'winners':_0x17df48=>typeof _0x17df48==='number'&&Math[a61_0x34cd('0x22')](numbers['clamp'](_0x17df48,0x1,Number[a61_0x34cd('0x6')]))},'default':{'timeout':0x3,'winners':0x1}},'scope':a61_0x34cd('0x33'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[a61_0x34cd('0x18')],'syntax':['giveaway\x20--\x20ITEM','giveaway\x20--winners\x20NUMBER\x20--\x20ITEM',a61_0x34cd('0x3')]});this[a61_0x34cd('0x2c')]=async(_0x349c5f,_0xa495bf)=>{if(!_0xa495bf['_'][a61_0x34cd('0x1f')])throw new errors[(a61_0x34cd('0xa'))](errors['BASTION_ERROR_TYPE']['INVALID_COMMAND_SYNTAX'],this[a61_0x34cd('0x26')]);const _0x350840=_0xa495bf['_'][a61_0x34cd('0x39')]('\x20');const _0x632a48=_0xa495bf[a61_0x34cd('0x1a')]?_0xa495bf[a61_0x34cd('0x1a')]:this['defaultTimeout'];const _0x16752c=_0xa495bf[a61_0x34cd('0x24')]?_0xa495bf[a61_0x34cd('0x24')]:this[a61_0x34cd('0xf')];if(constants['isPublicBastion'](this[a61_0x34cd('0x2b')][a61_0x34cd('0x17')])){const _0x26111f=await omnic[a61_0x34cd('0x23')](_0x349c5f[a61_0x34cd('0x33')])['catch'](()=>{});if(_0x26111f){if(_0x26111f===omnic['PremiumTier'][a61_0x34cd('0x36')]&&_0x632a48>constants['LIMITS'][a61_0x34cd('0x36')]['GIVEAWAY_TIMEOUT']){throw new errors[(a61_0x34cd('0xa'))](errors[a61_0x34cd('0x21')][a61_0x34cd('0x2e')],this[a61_0x34cd('0x2b')][a61_0x34cd('0x19')][a61_0x34cd('0x9')](_0x349c5f['guild'][a61_0x34cd('0xe')]['language'],a61_0x34cd('0x10'),'membershipLimitGiveawayTimeout',constants[a61_0x34cd('0xc')]['GOLD'][a61_0x34cd('0x14')]));}else if(_0x26111f===omnic[a61_0x34cd('0x16')]['PLATINUM']&&_0x632a48>constants['LIMITS'][a61_0x34cd('0x38')][a61_0x34cd('0x14')]){throw new errors[(a61_0x34cd('0xa'))](errors[a61_0x34cd('0x21')][a61_0x34cd('0x2e')],this[a61_0x34cd('0x2b')][a61_0x34cd('0x19')]['getString'](_0x349c5f[a61_0x34cd('0x33')][a61_0x34cd('0xe')]['language'],'errors',a61_0x34cd('0x25'),constants['LIMITS']['PLATINUM'][a61_0x34cd('0x14')]));}}else if(_0x632a48>constants['LIMITS']['GIVEAWAY_TIMEOUT']){throw new errors[(a61_0x34cd('0xa'))](errors[a61_0x34cd('0x21')][a61_0x34cd('0x0')],this[a61_0x34cd('0x2b')][a61_0x34cd('0x19')]['getString'](_0x349c5f[a61_0x34cd('0x33')][a61_0x34cd('0xe')][a61_0x34cd('0x27')],a61_0x34cd('0x10'),a61_0x34cd('0xb'),constants[a61_0x34cd('0xc')][a61_0x34cd('0x14')]));}const _0x2dc721=await Giveaway_1[a61_0x34cd('0x28')][a61_0x34cd('0x5')]({'guild':_0x349c5f[a61_0x34cd('0x33')]['id'],'ends':{'$gte':new Date()}});if(_0x26111f){if(_0x26111f===omnic['PremiumTier'][a61_0x34cd('0x36')]&&_0x2dc721>=constants[a61_0x34cd('0xc')]['GOLD'][a61_0x34cd('0x3a')]){throw new errors[(a61_0x34cd('0xa'))](errors[a61_0x34cd('0x21')][a61_0x34cd('0x2e')],this['client']['locale']['getString'](_0x349c5f[a61_0x34cd('0x33')][a61_0x34cd('0xe')][a61_0x34cd('0x27')],'errors',a61_0x34cd('0x1e'),constants[a61_0x34cd('0xc')][a61_0x34cd('0x36')][a61_0x34cd('0x3a')]));}else if(_0x26111f===omnic[a61_0x34cd('0x16')]['PLATINUM']&&_0x2dc721>=constants['LIMITS'][a61_0x34cd('0x38')][a61_0x34cd('0x3a')]){throw new errors[(a61_0x34cd('0xa'))](errors[a61_0x34cd('0x21')][a61_0x34cd('0x2e')],this[a61_0x34cd('0x2b')][a61_0x34cd('0x19')][a61_0x34cd('0x9')](_0x349c5f[a61_0x34cd('0x33')][a61_0x34cd('0xe')][a61_0x34cd('0x27')],a61_0x34cd('0x10'),a61_0x34cd('0x1e'),constants['LIMITS'][a61_0x34cd('0x38')]['GIVEAWAYS']));}}else{throw new errors[(a61_0x34cd('0xa'))](errors['BASTION_ERROR_TYPE'][a61_0x34cd('0x0')],this[a61_0x34cd('0x2b')][a61_0x34cd('0x19')][a61_0x34cd('0x9')](_0x349c5f['guild'][a61_0x34cd('0xe')][a61_0x34cd('0x27')],'errors',a61_0x34cd('0xd'),constants[a61_0x34cd('0xc')][a61_0x34cd('0x3a')]));}}const _0xf5d4ae=new Date(Date[a61_0x34cd('0x4')]()+_0x632a48*0x36ee80);const _0x8b8f77=await _0x349c5f[a61_0x34cd('0x1d')]['send']({'embed':{'color':tesseract_1[a61_0x34cd('0x15')][a61_0x34cd('0x12')]['IRIS'],'author':{'name':'GIVEAWAY!'},'title':_0x350840,'description':a61_0x34cd('0x3d')+this[a61_0x34cd('0x3c')][a61_0x34cd('0x39')](a61_0x34cd('0x7'))+a61_0x34cd('0x1'),'footer':{'text':_0x16752c+a61_0x34cd('0x34')},'timestamp':_0xf5d4ae}});await Giveaway_1['default'][a61_0x34cd('0x37')]({'_id':_0x8b8f77['id'],'channel':_0x8b8f77[a61_0x34cd('0x1d')]['id'],'guild':_0x8b8f77['guild']['id'],'winners':_0x16752c,'ends':_0xf5d4ae});for(const _0x4c5593 of this[a61_0x34cd('0x3c')]){await _0x8b8f77[a61_0x34cd('0x1c')](_0x4c5593)[a61_0x34cd('0x3b')](()=>{});}};this[a61_0x34cd('0x3c')]=['🎊','🎉'];this[a61_0x34cd('0x31')]=0x3;this['defaultWinners']=0x1;}};