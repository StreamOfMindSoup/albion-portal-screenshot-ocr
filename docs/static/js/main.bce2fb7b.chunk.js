(this["webpackJsonpalbion-portal-screenshot-ocr"]=this["webpackJsonpalbion-portal-screenshot-ocr"]||[]).push([[0],{119:function(e,t,a){e.exports=a(165)},124:function(e,t,a){},125:function(e,t,a){},165:function(e,t,a){"use strict";a.r(t);var o=a(0),s=a.n(o),r=a(10),n=a.n(r),i=(a(124),a(125),a(75)),l=a(18),u={screenshots:[],addScreenshots:function(e){},setScreenshots:function(e){}},m=s.a.createContext(u),c=function(e){var t=e.children,a=Object(o.useState)(u.screenshots),r=Object(l.a)(a,2),n=r[0],c=r[1],T=Object(o.useCallback)((function(e){c((function(t){return[].concat(Object(i.a)(t),Object(i.a)(e))}))}),[]);return s.a.createElement(m.Provider,{value:{screenshots:n,addScreenshots:T,setScreenshots:c}},t)},T=a(106),N=a(102),L=a(103),d=a.n(L),h=s.a.createContext({data:{},updateData:function(e,t,a){},setData:function(e){}}),g=function(e){var t=e.children,a=Object(o.useState)({}),r=Object(l.a)(a,2),n=r[0],i=r[1],u=Object(o.useCallback)((function(e,t,a){i((function(o){return d.a.set(o,[e,t],a)}))}),[i]);return s.a.createElement(h.Provider,{value:{data:n,updateData:u,setData:i}},t)},S=function(){var e=Object(o.useContext)(m).setScreenshots,t=Object(o.useContext)(h).setData;return s.a.createElement(T.a,{maxFileSize:1/0,filesLimit:1/0,acceptedFiles:["image/*"],onChange:function(a){e(a.map((function(e){return{id:Object(N.v4)(),image:e}}))),t({})},dropzoneText:"Drag and drop your screenshots here (1920x1080 and English only). Screenshots must be taken while mousing over a portal on the minimap."})},f=a(166),y=a(218),O=a(219),p=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:5;return e.map((function(a,o){return Math.abs(e[o]-t[o])})).reduce((function(e,t){return e+t}),0)<=a},v=window.Caman;v.Plugin.register("cropPortalPopup",(function(){var e=this.canvas.getContext("2d");if(!e)throw Error("Context is null");for(var t=e.getImageData(1578,700,1,380),a=0,o=0,s=0,r=0;r<380;r++){o=4*r;var n=Array.from(t.data.slice(o,o+3));if(p(n,[255,178,18])||p(n,[143,109,45])){if(14===++a){s=r-a+1;break}}else a=0}var i=e.getImageData(1450,700+s,470,1);a=0,o=0;for(var l=0,u=0;u<470;u++){o=4*u;var m=Array.from(i.data.slice(o,o+3));if(p(m,[255,178,18])||p(m,[144,110,46])){if(60===++a){console.log("Streak"),l=u-a+1;break}}else a=0}this.crop(357,109,1450+l-16,700+s-59)})),v.Filter.register("cropPortalPopup",(function(){this.processPlugin("cropPortalPopup",arguments)})),v.Filter.register("selectByColor",(function(e,t){this.process("selectByColor",(function(a){for(var o=a.r,s=a.g,r=a.b,n=e.map((function(e){return p([o,s,r],e,t)})).some(Boolean)?255:0,i=0,l=["r","g","b"];i<l.length;i++){a[l[i]]=n}}))}));var b=function(e){var t=e.imageUrl,a=e.camanCallback,r=Object(o.useRef)(null);return Object(o.useEffect)((function(){v(r.current,t,(function(){a.call(this)}))}),[]),s.a.createElement("canvas",{ref:r})},A=a(211),E=a(212),C=a(213),k=function(e){var t=e.parsed,a=e.field,r=Object(o.useContext)(h),n=r.data,i=r.updateData,l=Object(o.useContext)(te);Object(o.useEffect)((function(){return i(l.id,a,t)}),[t]);var u=n&&n[l.id]&&n[l.id][a],m=Object(o.useCallback)((function(e){return i(l.id,a,e.target.value)}),[l.id,a]);return s.a.createElement(w,{value:u,onChange:m})},w=s.a.memo(C.a),F=function(e){var t=e.imageUrl,a=e.camanCallback,o=e.parsed,r=e.field;return s.a.createElement(A.a,null,s.a.createElement(E.a,null,s.a.createElement(b,{imageUrl:t,camanCallback:a})),s.a.createElement(E.a,null,s.a.createElement(k,{field:r,parsed:o})))},P=a(16),H=a.n(P),D=a(48),W=a(74),Q=Object(W.createScheduler)(),U=Promise.all(Array(2).fill(0).map(Object(D.a)(H.a.mark((function e(){var t;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(W.createWorker)({logger:console.log}),e.next=3,t.load();case 3:return e.next=5,t.loadLanguage("eng");case 5:return e.next=7,t.initialize("eng");case 7:Q.addWorker(t);case 8:case"end":return e.stop()}}),e)}))))),x=function(){var e=Object(D.a)(H.a.mark((function e(t,a){var o,s;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U;case 2:return e.next=4,Q.addJob("recognize",t);case 4:return o=e.sent,s=o.data.text,console.log(s),e.abrupt("return",s);case 8:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}();function I(e){var t=Object(o.useState)(""),a=Object(l.a)(t,2),s=a[0],r=a[1],n=Object(o.useState)(0),i=Object(l.a)(n,2),u=i[0],m=i[1];return{parsed:s,progress:u,camanCallback:function(){e.call(this);var t=this;this.render((function(){t.canvas.toBlob(function(){var e=Object(D.a)(H.a.mark((function e(t){var a,o;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=URL.createObjectURL(t),e.next=3,x(a,m);case 3:o=e.sent,r(o);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}))}}}var z=a(104),G={"Tharcal Fissure":"4206","Cairn Darg":"4209","Gwan Gorge":"4210","Malag Crevasse":"4215","Creag Morr":"4216","Cairn Camain":"4213","Cairn Glascore":"4212","Pen Gent":"4207","Pen Garn":"4201","Crose Gorge":"4203","Birken Fell":"3201","Eldon Hill":"3204","Lewsdon Hill":"3203","Blackthorn Quarry":"3207",Haytor:"3206","Brent Knoll":"3209","Mase Knoll":"3210","Croker Hill":"3212","Goffers Knoll":"3215","Vixen Tor":"3213","Prospector's Hope":"2215","Steelhide Meadow":"2213","Longmarch Meadow":"2212","Lazygrass Plain":"2209","Snapshaft Trough":"2210","Drywater Meadow":"2207","Parchthroat Plain":"2206","Deadvein Gully":"2204","Roastcorpse Steppe":"2203","Kindlegrass Steppe":"2201",Ferndell:"1215","Wyre Forest":"1213",Stagbourne:"1212",Murkweald:"1210","Longtimber Glen":"1209",Birchcopse:"1207","Willow Wood":"1206",Oakcopse:"1204",Rowanwood:"1203",Larchroad:"1201","Pen Kerrig":"4204",Slimehag:"0214","Bonepool Marsh":"0212","Spectral Sump":"0211","Willowsigh Marsh":"0203","Stumprot Swamp":"0208","Dusklight Fen":"0206","Dewleaf Fen":"0209",Stinkhag:"0205",Chillhag:"0202","Slowtree Plain":"2208","Smoothfloor Cleft":"2211","Gutras Hill":"3205",Mardale:"3202","Wispwhisper Marsh":"0210","Curlew Fen":"0213","Saddle Tor":"3211","Windripple Fen":"0204","Mawar Gorge":"4208",Russerdell:"1202","Bryn Gorge":"4202","Cairn Gorm":"4205","Bowscale Fell":"3208","Cairn Fidair":"4214","Creag Garr":"4211","Nightcreak Marsh":"0207","Fractured Ground":"2214","Cracked Earth":"2202",Redlake:"1208","Yew Wood":"1211","Highbole Glen":"1205","Hornbeam Wood":"1214","Haldon Tor":"3214","Sleetwater Basin":"0201",Camlann:"0005",Astolat:"2009","Runnel Sink":"3245","Inis Mon":"1007",Cedarcopse:"1246","Bellever Tor":"3249","Pen Uchaf":"4249","Shiftshadow Expanse":"2205","Northstrand Dunes":"2305","Northstrand Beach":"2326","Scuttlesink Mouth":"0324","Deepwood Dell":"1306","Whitebank Portal North":"4302","Whitebank Portal South":"4303","Whitebank Portal East":"4304","Whitebank Stream":"4308","Whitebank Shore":"4309","Whitebank Cross":"4311","Whitebank Wall":"4326","Meltwater Bog":"0307","Whitebank Descent":"4305","Whitebank Ridge":"4338","Timberslope Dell":"1326","Deepwood Pines":"1340","Frostpeak Vista":"4306","Frostpeak Ascent":"4324","Floatshoal Fissure":"4327","Floatshoal Bight":"4339","Meltwater Delta":"0325","Meltwater Sump":"0338","Skysand Plateau":"2307","Everwinter Crossing":"4307","Everwinter Plain":"4323","Everwinter Gorge":"4325","Scuttlesink Marsh":"0353","Brambleshore Hinterlands":"1305","Shaleheath Steep":"3338","Everwinter Reach":"4321","Everwinter Peak":"4322","Everwinter Passage":"4337","Everwinter Expanse":"4340","Everwinter Incline":"4353","Scuttlesink Pools":"0306","Timbertop Dale":"1325","Timbertop Wood":"1338","Timbertop Escarp":"1353","Shaleheath Hills":"3326","Everwinter Shores":"4310","Wetgrave Bog":"0305","Wetgrave Swale":"0339","Wetgrave Marsh":"0342","Timberslope Grove":"1339","Timberslope Bridge":"1354","Swiftsands Plain":"2306","Drybasin Riverbed":"2308","Swiftsands Basin":"2339","Swiftsands Chaparral":"2354","Skylake Bridge":"3327","Greenshore Bay":"1355","Flatrock Cliffs":"3305","Skullmarsh Lower":"0315","Skullmarsh Upper":"0343","Greenshore Peninsula":"1307","Giantweald Dale":"1308","Watchwood Precipice":"1311","Watchwood Grove":"1315","Giantweald Woods":"1328","Watchwood Lakeside":"1329","Watchwood Bluffs":"1330","Giantweald Edge":"1341","Slakesands Canyon":"2309","Drybasin Oasis":"2341","Slakesands Mesa":"2342","Flatrock Plateau":"3328","Munten Rise":"4315","Munten Tundra":"4331","Munten Fell":"4345","Hightree Portal East":"1302","Hightree Portal North":"1303","Hightree Portal West":"1304","Hightree Steep":"1313","Hightree Lake":"1316","Hightree Dale":"1317","Hightree Strand":"1319","Hightree Glade":"1320","Hightree Enclave":"1322","Hightree Pass":"1332","Hightree Levee":"1335","Hightree Cliffs":"1336","Hightree Isle":"1345","Hightree Hillock":"1347","Glacierbreak Summit":"4332","Widemoor Portal North":"0302","Widemoor Portal South":"0303","Widemoor Portal West":"0304","Drownfield Course":"0308","Widemoor Shore":"0309","Widemoor Pool":"0312","Willowshade Wetlands":"0314","Widemoor Estuary":"0316","Widemoor Hills":"0327","Drownfield Wetland":"0328","Widemoor End":"0330","Willowshade Pools":"0331","Widemoor Woods":"0333","Willowshade Hills":"0344","Timberscar Dell":"1309","Timberscar Copse":"1342","Drytop Riverbed":"2327","Drytop Pillars":"2328","Drownfield Mire":"0310","Drownfield Fen":"0313","Drownfield Slough":"0329","Drownfield Rut":"0332","Drownfield Quag":"0340","Meltwater Channel":"0354","Drownfield Sink":"0355","Deadpine Forest":"1312","Skysand Ridge":"2340","Citadel of Ash ":"2355","Glacierfall Passage":"4312","Whitepeak Ascent":"4317","Glacierfall Canyon":"4329","Everwinter Gap":"4341","Glacierfall Cross":"4343","Glacierfall Valley":"4344","Whitepeak Spring":"4348","Glacierfall Pass":"4355","Whitepeak Tundra":"4357","Springsump Basin":"0321","Springsump Wetland":"0335","Springsump Melt":"0351","Southgrove Escarp":"1314","Southgrove Copse":"1337","Southgrove Thicket":"1350","Dryvein Cross":"2315","Sunstrand Shoal":"2316","Sunstrand Delta":"2317","Dryvein Plain":"2319","Farshore Esker":"2320","Dryvein Oasis":"2334","Sunstrand Dunes":"2335","Farshore Heath":"2336","Sunstrand Quicksands":"2348","Battlebrae Peaks":"3317","Stonelake Fields":"3325","Stonelake Hillock":"3336","Stonemouth Southbluff":"3358","Frostspring Passage":"4336","Frostspring Vulcano":"4351","Whitewall Ridge":"4352","Whitewall Pass":"4359","Runnelvein Slough":"0311","Runnelvein Bog":"0326","Runnelvein Sink":"0341","Giantweald Copse":"1310","Deepwood Gorge":"1327","Giantweald Roots":"1331","Deepwood Copse":"1343","Giantweald Glade":"1344","Eye of the Forest ":"1356","Eldersleep ":"1357","Skylake Hinterlands":"3339","Thunderrock Draw":"3353","Floatshoal Floe":"4313","Iceburn Firth":"4318","Flammog Fork":"4319","Iceburn Peaks":"4328","Flammog Valley":"4330","Iceburn Cliffs":"4342","Iceburn Tundra":"4346","Flammog Desolation":"4354","Glacierfall Fissure":"4356","Widemoor Delta":"0317","Willowshade Mire":"0318","Willowshade Lake":"0319","Willowshade Icemarsh":"0320","Widemoor Flats":"0334","Willowshade Sink":"0345","Widemoor Fen":"0348","Twinchannel Narrows":"0350","Unhallowed Cloister ":"0357","Westweald Thicket":"1323","Driftwood Glen":"1334","Westweald Shore":"1351","Sandrift Portal West":"2302","Sandrift Portal North":"2303","Sandrift Portal East":"2304","Sandmount Strand":"2312","Bleachskull Steppe":"2314","Sandmount Esker":"2318","Sandrift Steppe":"2321","Sandrift Prairie":"2322","Sandrift Coast":"2323","Sandrift Shore":"2324","Farshore Bay":"2325","Bleachskull Desert":"2333","Sandrift Expanse":"2337","Farshore Lagoon":"2338","Sandmount Desert":"2349","Sandrift Dunes":"2350","Farshore Drylands":"2351","Sandrift Fringe":"2352","Farshore Cape":"2353","Sandmount Ascent":"2358","Windgrass Portal West":"3302","Windgrass Portal North":"3303","Windgrass Portal South":"3304","Braemore Upland":"3309","Windgrass Border":"3318","Windgrass Gully":"3320","Windgrass Rill":"3321","Windgrass Precipice":"3322","Braemore Lowland":"3331","Windgrass Fields":"3333","Windgrass Coast":"3334","Highstone Mound":"3346","Avalanche Ravine":"4314","Frostbite Chasm":"4316","Frostseep Ravine":"4320","Frostbite Mountain":"4335","Frostseep Crevasse":"4347","Longfen Marsh":"0322","Mudfoot Sump":"0323","Mudfoot Mounds":"0337","Longfen Veins":"0352","Deathreach Priory ":"0359","Greenhollow Vale":"1324","Greenhollow Copse":"1352","Highstone Plains":"3315","Battlebrae Flatland":"3316","Highstone Grassland":"3319","Gravemound Brim":"3323","Gravemound Hills":"3324","Gravemound Slope":"3337","Battlebrae Meadow":"3349","Windgrass Terrace":"3350","Gravemound Knoll":"3351","Gravemound Cliffs":"3352","Highstone Loch":"3357","Redtree Enclave":"3359","Deathwisp Sink":"0346","Deathwisp Bog":"0347","Sunkenbough Woods":"0349","Black Monastery ":"0356","Sunkenbough Spring":"0358","Rivercopse Crossing":"1318","Driftwood Vale":"1321","Hightree Borderlands":"1333","Rivercopse Curve":"1346","Driftwood Hollow":"1348","Rivercopse Path":"1349","Darkbough Snag":"1358","Rivercopse Fount":"1359","Sunfang Ravine":"2310","Sunfang Approach":"2330","Parchsand Cliffs":"2331","Sunfang Cliffs":"2343","Sunfang Wasteland":"2344","Wailing Bulwark ":"2356","Sunfang Dawn":"2357","Parchsand Drought":"2359","Murdergulch Cross":"3306","Murdergulch Gap":"3307","Razorrock Passage":"3308","Razorrock Valley":"3310","Highstone Meadow":"3311","Battlebrae Plain":"3312","Battlebrae Lake":"3313","Stonemouth Northbluff":"3314","Thunderrock Rapids":"3329","Razorrock Ravine":"3330","Razorrock Edge":"3332","Stonemouth Bay":"3335","Thunderrock Ascent":"3340","Thunderrock Upland":"3341","Murdergulch Trail":"3342","Razorrock Chasm":"3343","Razorrock Verge":"3344","Razorrock Bank":"3345","Highstone Plateau":"3347","Battlebrae Grassland":"3348","Murdergulch Divide":"3354","Murdergulch Ravine":"3355","Razorrock Gulch":"3356","Firesink Caldera":"4333","Whitecliff Peak":"4334","Firesink Trench":"4349","Whitecliff Expanse":"4350","Avalanche Incline":"4358","Longfen Arms":"0336","Thirstwater Steppe":"2311","Dryvein Riverbed":"2313","Thirstwater Waste":"2329","Dryvein Steppe":"2332","Dryvein End":"2345","Thirstwater Gully":"2346","Dryvein Confluence":"2347","Daemonium Keep ":"2360",ResourceDebug:"ResourceDebug","Ouyos-Aoeuam":"TNL-001","Coues-Exakrom":"TNL-002","Puros-Amayam":"TNL-003","Pures-Ouozlum":"TNL-004","Soros-Axaesum":"TNL-005","Huyos-Uxeulum":"TNL-006","Ceres-Iooinum":"TNL-007","Cetos-Obaelos":"TNL-008","Oieos-Umiutum":"TNL-009","Sebos-Avoirom":"TNL-010","Teros-Auiusum":"TNL-011","Oebos-Ixakaum":"TNL-012","Touos-Uoemtum":"TNL-013","Xasos-Aeoilos":"TNL-014","Xuros-Eyoztum":"TNL-015","Pasos-Avosam":"TNL-016","Oasos-Uromlum":"TNL-017","Casos-Uruxtum":"TNL-018","Ceros-Aeaylum":"TNL-019","Xouos-Aioblos":"TNL-020","Oasos-Eraerom":"TNL-021","Tetos-Igaelum":"TNL-022","Hynos-Oiaelos":"TNL-023","Hebos-Ulamsum":"TNL-024","Hiros-Iuaerom":"TNL-025","Cynos-Avixnum":"TNL-026","Conos-Avaelum":"TNL-027","Tetos-Ulaurom":"TNL-028","Oures-Araosum":"TNL-029","Hures-Ugumtum":"TNL-030","Hasos-Iuimaum":"TNL-031","Foros-Egoisum":"TNL-032","Hasos-Agoitum":"TNL-033","Setos-Avamsum":"TNL-034","Tonos-Obayam":"TNL-035","Honos-Umayaum":"TNL-036","Huyes-Ogozlum":"TNL-037","Curos-Avulsum":"TNL-038","Cebos-Avemlum":"TNL-039","Hasos-Inayaum":"TNL-040","Sasos-Egeylos":"TNL-041","Coros-Aiayrom":"TNL-042","Hiros-Exozlos":"TNL-043","Tiros-Ouultum":"TNL-044","Cases-Ugumlos":"TNL-045","Fynes-Unavtum":"TNL-046","Fetos-Aiaylos":"TNL-047","Fouos-Agosaum":"TNL-048","Huyos-Eyoztum":"TNL-049","Poues-Unatam":"TNL-050","Fouos-Amaurom":"TNL-051","Suyos-Onaytum":"TNL-052","Xasos-Oneulum":"TNL-053","Oynos-Oyozam":"TNL-054","Coros-Atinaum":"TNL-055","Sasos-Oiozlum":"TNL-056","Xynos-Oyogam":"TNL-057","Cynos-Oxaeaum":"TNL-058","Tynos-Atatlos":"TNL-059","Firos-Enomaum":"TNL-060","Hynes-Exemrom":"TNL-061","Hebes-Ouaylos":"TNL-062","Foues-Aeaosum":"TNL-063","Xilos-Osayam":"TNL-064","Casos-Ayosrom":"TNL-065","Souos-Ososlos":"TNL-066","Xebos-Emimsum":"TNL-067","Oetos-Oyexlos":"TNL-068","Xebos-Exostum":"TNL-069","Tynos-Eyexrom":"TNL-070","Casos-Aximam":"TNL-071","Hasos-Ayousum":"TNL-072","Fasos-Ayiotum":"TNL-073","Pebos-Avosrom":"TNL-074","Sases-Avuotum":"TNL-075","Xases-Oxoulum":"TNL-076","Hieos-Avaolum":"TNL-077","Xasos-Aoemaum":"TNL-078","Hasos-Osuorom":"TNL-079","Oynos-Eramtum":"TNL-080","Couos-Ayayaum":"TNL-081","Siros-Obobrom":"TNL-082","Souos-Umogaum":"TNL-083","Cilos-Avioaum":"TNL-084","Fonos-Aiugsum":"TNL-085","Synos-Ayailos":"TNL-086","Xiles-Aiavlum":"TNL-087","Sases-Aoarsum":"TNL-088","Casos-Aiagsum":"TNL-089","Tieos-Ayoslum":"TNL-090","Hieos-Aiigaum":"TNL-091","Poros-Aiayrom":"TNL-092","Cilos-Ofailos":"TNL-093","Silos-Apenlum":"TNL-094","Fynos-Alodrom":"TNL-095","Firos-Ezatam":"TNL-096","Firos-Osinsum":"TNL-097","Soues-Uzurtum":"TNL-098","Ooros-Ataltum":"TNL-099","Hynes-Ieatun":"TNL-100","Fuyes-Izohun":"TNL-101","Xetos-Obursum":"TNL-102","Oetos-Ofailos":"TNL-103","Tynos-Igurlum":"TNL-104","Puros-Ofavam":"TNL-105","Setos-Aiaitum":"TNL-106","Tynos-Uxavrom":"TNL-107","Souos-Availos":"TNL-108","Sebos-Ugersum":"TNL-109","Peros-Aiataum":"TNL-110","Pieos-Ofairom":"TNL-111","Sieos-Ofugtum":"TNL-112","Tasos-Iriglos":"TNL-113","Tiros-Odoxlum":"TNL-114","Xases-Ataglos":"TNL-115","Oires-Oloblum":"TNL-116","Firos-Aiavam":"TNL-117","Heros-Atoyam":"TNL-118","Petos-Aietam":"TNL-119","Touos-Ataglos":"TNL-120","Poros-Oconun":"TNL-121","Honos-Oyezam":"TNL-122","Fieos-Atezsum":"TNL-123","Ooros-Ecunsum":"TNL-124","Coros-Alieam":"TNL-125","Couos-Opodam":"TNL-126","Horos-Ohenlum":"TNL-127","Files-Azazsum":"TNL-128","Sasos-Abizaum":"TNL-129","Fones-Opavun":"TNL-130","Fiees-Ohohtum":"TNL-131","Siros-Ofurlos":"TNL-132","Oiros-Alaiam":"TNL-133","Xiros-Aiairom":"TNL-134","Silos-Oyarlum":"TNL-135","Fonos-Oleraum":"TNL-136","Fieos-Aiuttum":"TNL-137","Filos-Abalam":"TNL-138","Synos-Oyarlos":"TNL-139","Febos-Acalun":"TNL-140","Pieos-Eterrom":"TNL-141","Feros-Oyuctum":"TNL-142","Pynos-Opabrom":"TNL-143","Foros-Uzazlum":"TNL-144","Cieos-Atatlum":"TNL-145","Huros-Atontum":"TNL-146","Tonos-Aboysum":"TNL-147","Hiles-Izizaum":"TNL-148","Sebos-Oyohun":"TNL-149","Cilos-Otatrom":"TNL-150","Oasitos-Aoeuam":"TNL-201","Curites-Exakrom":"TNL-202","Petitos-Amayam":"TNL-203","Pynites-Ouozlum":"TNL-204","Suyitos-Axaesum":"TNL-205","Honitos-Uxeulum":"TNL-206","Cuyites-Iooinum":"TNL-207","Cieitos-Obaelos":"TNL-208","Oonitos-Umiutum":"TNL-209","Siritos-Avoirom":"TNL-210","Tuyitos-Auiusum":"TNL-211","Oieitos-Ixakaum":"TNL-212","Turitos-Uoemtum":"TNL-213","Xouitos-Aeoilos":"TNL-214","Xouitos-Eyoztum":"TNL-215","Peritos-Avosam":"TNL-216","Oynitos-Uromlum":"TNL-217","Conitos-Uruxtum":"TNL-218","Cebitos-Aeaylum":"TNL-219","Xuyitos-Aioblos":"TNL-220","Oebitos-Eraerom":"TNL-221","Tebitos-Igaelum":"TNL-222","Huritos-Oiaelos":"TNL-223","Hynitos-Ulamsum":"TNL-224","Hetitos-Iuaerom":"TNL-225","Cetitos-Avixnum":"TNL-226","Casitos-Avaelum":"TNL-227","Tasitos-Ulaurom":"TNL-228","Oynites-Araosum":"TNL-229","Hilites-Ugumtum":"TNL-230","Huritos-Iuimaum":"TNL-231","Fynitos-Egoisum":"TNL-232","Huyitos-Agoitum":"TNL-233","Soritos-Avamsum":"TNL-234","Tasitos-Obayam":"TNL-235","Hasitos-Umayaum":"TNL-236","Hynites-Ogozlum":"TNL-237","Ceritos-Avulsum":"TNL-238","Coritos-Avemlum":"TNL-239","Heritos-Inayaum":"TNL-240","Seritos-Egeylos":"TNL-241","Cetitos-Aiayrom":"TNL-242","Heritos-Exozlos":"TNL-243","Tieitos-Ouultum":"TNL-244","Cieites-Ugumlos":"TNL-245","Fieites-Unavtum":"TNL-246","Foritos-Aiaylos":"TNL-247","Fynitos-Agosaum":"TNL-248","Heritos-Eyoztum":"TNL-249","Pirites-Unatam":"TNL-250","Fonitos-Amaurom":"TNL-251","Seritos-Onaytum":"TNL-252","Xetitos-Oneulum":"TNL-253","Oebitos-Oyozam":"TNL-254","Casitos-Atinaum":"TNL-255","Souitos-Oiozlum":"TNL-256","Xebitos-Oyogam":"TNL-257","Conitos-Oxaeaum":"TNL-258","Turitos-Atatlos":"TNL-259","Feritos-Enomaum":"TNL-260","Hebites-Exemrom":"TNL-261","Hurites-Ouaylos":"TNL-262","Fynites-Aeaosum":"TNL-263","Xoritos-Osayam":"TNL-264","Cieitos-Ayosrom":"TNL-265","Synitos-Ososlos":"TNL-266","Xetitos-Emimsum":"TNL-267","Oeritos-Oyexlos":"TNL-268","Xoritos-Exostum":"TNL-269","Tieitos-Eyexrom":"TNL-270","Cetitos-Aximam":"TNL-271","Hynitos-Ayousum":"TNL-272","Fuyitos-Ayiotum":"TNL-273","Petitos-Avosrom":"TNL-274","Suyites-Avuotum":"TNL-275","Xerites-Oxoulum":"TNL-276","Hasitos-Avaolum":"TNL-277","Xilitos-Aoemaum":"TNL-278","Hilitos-Osuorom":"TNL-279","Oiritos-Eramtum":"TNL-280","Curitos-Ayayaum":"TNL-281","Setitos-Obobrom":"TNL-282","Sasitos-Umogaum":"TNL-283","Cieitos-Avioaum":"TNL-284","Fynitos-Aiugsum":"TNL-285","Sonitos-Ayailos":"TNL-286","Xonites-Aiavlum":"TNL-287","Synites-Aoarsum":"TNL-288","Cynitos-Aiagsum":"TNL-289","Tetitos-Ayoslum":"TNL-290","Hilitos-Aiigaum":"TNL-291","Ponitos-Aiayrom":"TNL-292","Conitos-Ofailos":"TNL-293","Soritos-Apenlum":"TNL-294","Firitos-Alodrom":"TNL-295","Fynitos-Ezatam":"TNL-296","Feritos-Osinsum":"TNL-297","Suyites-Uzurtum":"TNL-298","Ouritos-Ataltum":"TNL-299","Hurites-Ieatun":"TNL-300","Filites-Izohun":"TNL-301","Xynitos-Obursum":"TNL-302","Ouritos-Ofailos":"TNL-303","Tonitos-Igurlum":"TNL-304","Piritos-Ofavam":"TNL-305","Soritos-Aiaitum":"TNL-306","Tonitos-Uxavrom":"TNL-307","Synitos-Availos":"TNL-308","Sasitos-Ugersum":"TNL-309","Puyitos-Aiataum":"TNL-310","Pouitos-Ofairom":"TNL-311","Suyitos-Ofugtum":"TNL-312","Toritos-Iriglos":"TNL-313","Tebitos-Odoxlum":"TNL-314","Xurites-Ataglos":"TNL-315","Oynites-Oloblum":"TNL-316","Furitos-Aiavam":"TNL-317","Hynitos-Atoyam":"TNL-318","Pynitos-Aietam":"TNL-319","Tilitos-Ataglos":"TNL-320","Peritos-Oconun":"TNL-321","Hynitos-Oyezam":"TNL-322","Fasitos-Atezsum":"TNL-323","Oeritos-Ecunsum":"TNL-324","Casitos-Alieam":"TNL-325","Cilitos-Opodam":"TNL-326","Huyitos-Ohenlum":"TNL-327","Fasites-Azazsum":"TNL-328","Silitos-Abizaum":"TNL-329","Febites-Opavun":"TNL-330","Ferites-Ohohtum":"TNL-331","Synitos-Ofurlos":"TNL-332","Oouitos-Alaiam":"TNL-333","Xoritos-Aiairom":"TNL-334","Sasitos-Oyarlum":"TNL-335","Fasitos-Oleraum":"TNL-336","Fouitos-Aiuttum":"TNL-337","Fynitos-Abalam":"TNL-338","Suyitos-Oyarlos":"TNL-339","Fuyitos-Acalun":"TNL-340","Pilitos-Eterrom":"TNL-341","Fasitos-Oyuctum":"TNL-342","Piritos-Opabrom":"TNL-343","Filitos-Uzazlum":"TNL-344","Cynitos-Atatlum":"TNL-345","Hebitos-Atontum":"TNL-346","Tuyitos-Aboysum":"TNL-347","Honites-Izizaum":"TNL-348","Siritos-Oyohun":"TNL-349","Cieitos-Otatrom":"TNL-350","Quaent-Vynsum":"TNL-151","Quaent-Al-Vynsum":"TNL-351","Quaent-Tersis":"TNL-152","Quaent-Al-Tersis":"TNL-352","Quaent-Viesom":"TNL-153","Quaent-Al-Viesom":"TNL-353","Quatun-Nusas":"TNL-154","Quatun-Et-Nusas":"TNL-354","Quaent-Qintis":"TNL-155","Quaent-Al-Qintis":"TNL-355","Quatun-Odetum":"TNL-156","Quatun-Et-Odetum":"TNL-356","Quaent-Al-Odesum":"TNL-157","Quaent-In-Odesum":"TNL-357","Quaent-Al-Nusis":"TNL-158","Quaent-In-Nusis":"TNL-358","Qiient-Tersom":"TNL-159","Qiient-In-Tersom":"TNL-359","Qiient-Odesas":"TNL-160","Qiient-Qi-Odesas":"TNL-360","Qiient-Nutis":"TNL-161","Qiient-In-Nutis":"TNL-361","Qiient-Vyntum":"TNL-162","Qiient-In-Vyntum":"TNL-362","Qiient-Al-Odesum":"TNL-163","Qiient-Si-Odesum":"TNL-363","Qiient-Al-Vynsis":"TNL-164","Qiient-Qi-Vynsis":"TNL-364","Qiitun-Et-Vynsom":"TNL-165","Qiitun-Si-Vynsom":"TNL-365","Qiient-Al-Tersas":"TNL-166","Qiient-Qi-Tersas":"TNL-366","Qiitun-Vietis":"TNL-167","Qiitun-Et-Vietis":"TNL-367","Qiient-Et-Tertum":"TNL-168","Qiient-Si-Tertum":"TNL-368","Qiient-Qinsum":"TNL-169","Qiient-Et-Qinsum":"TNL-369","Qiient-Al-Viesis":"TNL-170","Qiient-In-Viesis":"TNL-370","Qiient-Al-Nusom":"TNL-171","Qiient-Qi-Nusom":"TNL-371","Qiient-Et-Nusas":"TNL-172","Qiient-Si-Nusas":"TNL-372","Qiient-Et-Odetis":"TNL-173","Qiient-Sa-Odetis":"TNL-373","Qiient-In-Odetum":"TNL-174","Qiient-Oc-Odetum":"TNL-374","Qiitun-Duosum":"TNL-175","Qiitun-Al-Duosum":"TNL-375","Qiient-Al-Qinsis":"TNL-176","Qiient-In-Qinsis":"TNL-376","Secent-Odesom":"TNL-177","Secent-Qi-Odesom":"TNL-377","Sectun-Tersas":"TNL-178","Sectun-Et-Tersas":"TNL-378","Secent-Al-Odetis":"TNL-179","Secent-Si-Odetis":"TNL-379","Secent-Vyntum":"TNL-180","Secent-Et-Vyntum":"TNL-380","Secent-Viesum":"TNL-181","Secent-Al-Viesum":"TNL-381","Secent-Et-Odesis":"TNL-182","Secent-Sa-Odesis":"TNL-382","Sectun-Qinsom":"TNL-183","Sectun-In-Qinsom":"TNL-383","Secent-Al-Qinsom":"TNL-184","Secent-Qi-Qinsom":"TNL-384","Sectun-Al-Vyntis":"TNL-185","Sectun-In-Vyntis":"TNL-385","Secent-Nutum":"TNL-186","Secent-Al-Nutum":"TNL-386","Secent-Al-Tersum":"TNL-187","Secent-In-Tersum":"TNL-387","Sectun-In-Odesis":"TNL-188","Sectun-Oc-Odesis":"TNL-388","Secent-Duosom":"TNL-189","Secent-Al-Duosom":"TNL-389","Secent-Et-Qinsas":"TNL-190","Secent-Si-Qinsas":"TNL-390","Setent-Vietis":"TNL-191","Setent-Al-Vietis":"TNL-391","Settun-Odetum":"TNL-192","Settun-Et-Odetum":"TNL-392","Setent-Nusum":"TNL-193","Setent-Et-Nusum":"TNL-393","Settun-Vynsis":"TNL-194","Settun-Al-Vynsis":"TNL-394","Settun-Tersom":"TNL-195","Settun-Al-Tersom":"TNL-395","Setent-Duosas":"TNL-196","Setent-Al-Duosas":"TNL-396","Setent-Qintis":"TNL-197","Setent-Et-Qintis":"TNL-397","Settun-Al-Odetum":"TNL-198","Settun-In-Odetum":"TNL-398","Setent-Al-Qinsum":"TNL-199","Setent-In-Qinsum":"TNL-399","Settun-Al-Nusis":"TNL-200","Settun-In-Nusis":"TNL-400"},M=Object.keys(G),R=function(e){return e?Object(z.findBestMatch)(e,M).bestMatch.target:e},B=function(e){var t=e.imageUrl,a=I((function(){this.crop(167,25,1668,1035),this.greyscale(),this.threshold(128)})),o=a.camanCallback,r=a.parsed,n=a.progress,i=s.a.useMemo((function(){return R(r)}),[r]);return s.a.createElement(F,{imageUrl:t,camanCallback:o,parsed:i,progress:n,field:"from"})},j=a(215),V=a(216),X=a(217),K=function(e){var t=e.imageUrl,a=I((function(){this.crop(54,25,1836,1035),this.greyscale(),this.threshold(128)})),o=a.camanCallback,r=a.parsed,n=a.progress,i=s.a.useMemo((function(){return function(e){var t=e.replace(/\s/g,"").match(/(\d\d:\d\d)/);return t?t[1]:""}(r)}),[r]);return s.a.createElement(F,{imageUrl:t,camanCallback:o,parsed:i,progress:n,field:"currentTime"})},J=function(e){var t=e.imageUrl,a=I((function(){this.crop(286,29,61,23),this.invert(),this.greyscale(),this.threshold(128)})),o=a.camanCallback,r=a.parsed,n=a.progress,i=s.a.useMemo((function(){return R(r)}),[r]);return s.a.createElement(F,{imageUrl:t,camanCallback:o,parsed:i,progress:n,field:"to"})},q=function(e){var t=e.imageUrl,a=I((function(){this.crop(155,20,200,83),this.invert()})),o=a.camanCallback,r=a.parsed,n=a.progress,i=s.a.useMemo((function(){return function(e){var t=e.toLowerCase().replace(/\s/g,"").match(/closesin((?:[0-2]?[0-9]h[0-5][0-9]m)|(?:[0-5]?[0-9]m[0-5][0-9][s8\xa7]))/);if(!t)return"";var a=t[1];return"m"!==a[a.length-1]&&(a=a.substr(0,a.length-1)+"s"),a}(r)}),[r]);return s.a.createElement(F,{imageUrl:t,camanCallback:o,parsed:i,progress:n,field:"remainingTime"})},Y=a(223),$=a(214),Z=a(222),_=function(e){var t=e.imageUrl,a=Object(o.useContext)(te),r=Object(o.useContext)(h),n=r.updateData,i=r.data,u=Object(o.useCallback)((function(e){return n(a.id,"size",e)}),[a.id,"size",n]),m=Object(o.useCallback)((function(e){return u(e.target.value)}),[u]);return s.a.createElement(A.a,null,s.a.createElement(E.a,null,s.a.createElement(b,{imageUrl:t,camanCallback:function(){this.crop(55,55);var e=this;this.render((function(){var t=e.canvas.getContext("2d").getImageData(34,22,1,1),a=Array.from(t.data),o=Object(l.a)(a,3),s=o[0],r=o[1],n=o[2];s>160?u("RAID"):r>160?u("SOLO"):n>160&&u("GROUP")}))}})),s.a.createElement(E.a,null,s.a.createElement(Y.a,{row:!0,value:i&&i[a.id]&&i[a.id].size||"MISSING",onChange:m},s.a.createElement($.a,{value:"SOLO",control:s.a.createElement(Z.a,null),label:"2"}),s.a.createElement($.a,{value:"GROUP",control:s.a.createElement(Z.a,null),label:"7"}),s.a.createElement($.a,{value:"RAID",control:s.a.createElement(Z.a,null),label:"20"}))))},ee=function(e){var t=e.imageUrl,a=Object(o.useState)(""),r=Object(l.a)(a,2),n=r[0],i=r[1],u=Object(o.useCallback)((function(){var e=this;e.cropPortalPopup(),e.render((function(){e.canvas.toBlob((function(e){i(URL.createObjectURL(e))}))}))}),[]);return s.a.createElement(s.a.Fragment,null,s.a.createElement(A.a,null,s.a.createElement(E.a,null,s.a.createElement(b,{imageUrl:t,camanCallback:u})),s.a.createElement(E.a,null)),n&&s.a.createElement(s.a.Fragment,null,s.a.createElement(J,{imageUrl:n}),s.a.createElement(q,{imageUrl:n}),s.a.createElement(_,{imageUrl:n})))},te=s.a.createContext({}),ae=function(e){var t=e.screenshot,a=URL.createObjectURL(t.image);return s.a.createElement(te.Provider,{value:t},s.a.createElement(j.a,null,s.a.createElement(V.a,null,s.a.createElement(E.a,null,"Image"),s.a.createElement(E.a,null,"Parsed")),s.a.createElement(X.a,null,s.a.createElement(ee,{imageUrl:a}),s.a.createElement(B,{imageUrl:a}),s.a.createElement(K,{imageUrl:a}))))},oe=function(e){var t=Object(o.useContext)(m).screenshots;return s.a.createElement(s.a.Fragment,null,s.a.createElement(f.a,{variant:"h4"},"Review and edit results"),s.a.createElement(y.a,null,t.map((function(e){return s.a.createElement(O.a,{key:e.id},s.a.createElement(ae,{screenshot:e}))}))))},se=a(105),re=a.n(se),ne=a(220),ie=a(107),le=function(e){var t=new Date;return e.map((function(e){var a,o=e.currentTime.match(/(\d{2}):(\d{2})/);if(o){var s=parseInt(o[1]),r=parseInt(o[2]),n=e.remainingTime.match(/(?:(\d{0,2})h)?(?:(\d{1,2}m))/);if(n){var i=parseInt(n[1]||"0"),l=parseInt(n[2]),u=new Date(Date.UTC(t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate(),s,r));u>t&&u.setUTCDate(u.getUTCDate()-1),(a=new Date(u)).setUTCMinutes(r+l),a.setUTCHours(a.getUTCHours()+i)}}return Object(ie.a)({},e,{fromId:G[e.from],toId:G[e.to],closingDate:a})}))},ue=["from","to","currentTime","remainingTime","size"],me=["from","fromId","to","toId","currentTime","remainingTime","closingDate","size"],ce=function(){var e,t=Object(o.useContext)(h).data,a=Object.values(t),r=a.filter((function(e){return ue.every((function(t){return e[t]&&"MISSING"!==e[t]}))})),n=a.length-r.length,i=le(r),u=Object(o.useState)("csv"),m=Object(l.a)(u,2),c=m[0],T=m[1];switch(c){case"csv":e=re.a.unparse(i,{columns:me});break;case"json":e=JSON.stringify(i,void 0,2)}return s.a.createElement(s.a.Fragment,null,s.a.createElement(f.a,{variant:"h4"},"Export your data (complete portals only)"),s.a.createElement(f.a,null,n," portal(s) require additional processing (manual annotation may be required)"),s.a.createElement(Y.a,{row:!0,value:c,onChange:function(e){return T(e.target.value)}},s.a.createElement($.a,{value:"csv",control:s.a.createElement(Z.a,null),label:"CSV"}),s.a.createElement($.a,{value:"json",control:s.a.createElement(Z.a,null),label:"JSON"})),s.a.createElement(ne.a,{multiline:!0,fullWidth:!0,label:"Data",value:e}))};var Te=function(){return s.a.createElement(g,null,s.a.createElement(c,null,s.a.createElement(S,null),s.a.createElement(ce,null),s.a.createElement(oe,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(Te,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[119,1,2]]]);
//# sourceMappingURL=main.bce2fb7b.chunk.js.map