/*
######################################################
# ORA_CODE_OCOM.JS - v3.11
# BUILD DATE: 07-OCTOBER-2013
# COPYRIGHT ORACLE CORP 2013 [UNLESS STATED OTHERWISE]
######################################################
*/
/* Report suite set up */
function s_setAccount(){var sa=["oracledevall","ocom",s_setOraLangCountryGLOBAL("oracle.com")];if(location.href.indexOf("www.oracle.com/mn/index.html")!=-1){sa[1]="global";sa[2]="en-mn";}if(location.href.indexOf("www.oracle.com/ee/index.html")!=-1){sa[1]="global";sa[2]="en-ee";}if(location.href.indexOf("www.oracle.com/sk/index.html")!=-1){sa[1]="global";sa[2]="en-sk";}if(location.href.indexOf("www.oracle.com/lv/index.html")!=-1){sa[1]="global";sa[2]="en-lv";}if(location.href.indexOf("www.oracle.com/lt/index.html")!=-1){sa[1]="global";sa[2]="en-lt";}if(sa[2]!="en-us"||location.host.indexOf("oracle.co.jp")!=-1){sa[1]="global";}sa[1]=(location.host.indexOf("m.oracle.com")!=-1||location.host.indexOf("m-stage.oracle.com")!=-1)?"ocom:mobile":sa[1];sa[2]=(location.host.indexOf("oracle.co.jp")!=-1)?"ja-jp":sa[2];if(s_checkdev()){sa[0]=(sa[2]!="en-us")?"oracledevworldwide1,oracledevall":"devoraclecom,oracledevall";}else{sa[0]=(sa[2]!="en-us")?"oracleworldwide,oracleglobal":"oraclecom,oracleglobal";}return sa;}
/* PrePlugins */
function s_prePlugins(s){s_oraVer(":ocom",":3.11");}
/* postPlugins plus site functions */
function s_postPlugins(s){if(typeof(s_meta)!="undefined"){if(s_meta.access=="gated"){s.events="event19";s.eVar27=s.pageName;}}if(s.pageName.indexOf("ocom:mobile")!=-1&&location.href.indexOf("m.oracle.com/partners")!=-1){s.pageName=s.pageName.replace("/","/partners/");}if(s.pageName.indexOf("ocom:mobile")!=-1&&location.href.indexOf("m.oracle.com/technetwork")!=-1){s.pageName=s.pageName.replace("/","/technetwork/");}}function s_checkdev(){var isDev=false;var devSites=new Array();devSites=["-stage","-dev","-content","localhost","127.0.0.1"];var al=devSites.length;for(i=0;i<al;i++){if(location.host.indexOf(devSites[i])!=-1){isDev=true;i=al+1;}}return(isDev);}function s_oraVer(_s,_v){_v=_s+_v;oraVersion=(oraVersion.indexOf(_s)==-1)?oraVersion+_v:oraVersion.substr(0,oraVersion.indexOf(_s))+_v;}function oraSetInternalFilters(){s.linkInternalFilters="javascript:,.oracle.";if(location.href.indexOf(":8888")||location.href.indexOf("webstandards-us")){s.linkInternalFilters="javascript:,localhost,webstandards-us.oracle.com,.oracle.";}}function gotjQ(){try{var jq=(jQuery)?true:false;}catch(err){var jq=false;}return jq;}
/* JQUERY FUNCTIONS */
if(gotjQ()){jQuery(document).ready(function($){
/* TRACKAS MOSAIC */
$("li.cn02menu").each(function(){if(!$(this).find(".cn02w1").attr("data-lbl")&&$(this).find(".cn02w1").get(0)){$(this).find(".cn02w1").attr("data-lbl",$(this).find(".cn02w1").attr("id").toLowerCase().split("cn02-")[1]);}$(this).find("h3 a").attr("data-lbl",$(this).find(".cn02w1").attr("data-lbl"));});$("div.c25w3").each(function(){if(!$(this).parent().attr("data-lbl")){if($(this).find("h3 a").get(0)&&!$(this).find("h3 a").attr("data-lbl")){$(this).parent().attr("data-lbl",$(this).find("h3 a").text().toLowerCase().replace(/ /g,"-").replace(/'/g,""));$(this).find("h3 a").attr("data-trackas","c25w2");}else{if($(this).find("h3 a").get(0)&&$(this).find("h3 a").attr("data-lbl")){$(this).parent().attr("data-lbl",$(this).find("h3 a").attr("data-lbl"));$(this).find("h3 a").attr("data-trackas","c25w2");}else{$(this).parent().attr("data-lbl",$(this).find("h3").text().toLowerCase().replace(/ /g,"-").replace(/'/g,""));}}}$(this).children("a").each(function(){if($(this).attr("data-lbl")){$(this).attr("data-trackas","c25w2");}});});$("form.u01searchform").bind("submit",function(e){if(s_setAccount()[1]){navTrack(s_setAccount()[1],s_setAccount()[2],"header","search");}});
/* TRACKAS OBJECTS */
var trackas=[["div.c01w4","c01"],["div.c04","c04"],["div.c19w1","social"],["div.c22","c22"],["div.c25w1","c25w1"],["div.c25w2","c25w2"],["div.c26w5","c26w5"],["div.c31","c31"],["div.c37","c37"],["div.c37w2","BillBoard-CTA"],["div.c37w3","c37w3"],["div.c38","c38"],["div.c40","c40"],["div.c48","c48"],["div.c49","c49"],[".c51v0","assets"],[".c51v1","rhs-assets"],[".c51v2","full-width-carousel"],[".c51v3","dual-carousel"],["div.c52w1","c52w1"],["div.c52w2","subfeature"],[".c52v0","subfeature"],["div.c54v1","c54v1"],["div.c54w1","c54w1"],["div.c54w4","c54w4"],[".c54plan","c54plan"],[".c54support","c54support"],[".c54people","c54people"],[".c54sales","c54sales"],[".c54social","c54social"],[".c54apps","c54apps"],[".c54gears","c54gears"],["a.c26link",false,"notrack"],["li.cn02menu","cn02menu"],["li.cn02more","cn02moremenu"],["div.ct02","ct02"],["div.ct05c1","ct05tab"],["div.ct05w2","ct05asset"],["div.ct05c1","ct05c1"],["div.cw01","cw01"],["div.cw01 a.cw01steplink","cw01","resetpage"],["div.cw02","cw02"],["div.cw03","cw03"],["a.cw19prev","cw19prev"],["a.cw19next","cw19next"],["li.cw19thumb","cw19thumb"],["div.w06","w06"],[".s09","live-chat"],[".s11","rhs-assets"],["#atgchat-body","atg-chat"],[".fblike","facebooklike"],[".fbicon","facebook"],[".inicon","linkin"],[".twicon","twitter"],[".yticon","youtube"],[".blicon","oracle-blogs"],["div.f02w2","f02w2"],["div.f02w3","f02w3"]];trackas.push(["div.cw22inpage","cw22-carouselinpage"],["div.cw24w2","cw24w2"],["div.cw24img","cw24img-withpopups"],["div.c74w3","c74w3-selectYourRole"],["div.ct06","ct06-carouselMenu"],["div#cw25shuffle","cw25shuffle"],["div.cn11","cn11-getStarted"],["a.cw23facebook","cw23","facebook"],["a.cw23twitter","cw23","twitter"],["a.cw23youtube","cw23","youtube"],["a.cw23linkedin","cw23","linkedin"],["a.cw23blog","cw23","blog"],["a.cw23newsletter","cw23","newsletter"],["ul.cw21navigation","cw21navigation"],["div.ct06w3","ct06-carouselSubMenu"],["div.cn10","cn10"],["div.u01mmenu","header","menu"],["div.u01mlogo","header","logo"],["div.u01msearch","header","search"]);
/* TRACKAS LIGHTBOX & OPOP */
$('a[rel*="lightbox"],a[rel*="opop"]').each(function(){var type=($(this).attr("rel")=="opop")?"popup":"lightbox";if(!$(this).attr("data-lbl")&&$(this).attr("title")){$(this).attr("data-lbl",type+"-open-"+$(this).attr("title").toLowerCase().replace(/ /g,"-"));}else{if(!$(this).attr("data-lbl")&&$(this).text()){$(this).attr("data-lbl",type+"-open-"+$(this).text().toLowerCase().replace(/ /g,"-"));}else{if($(this).attr("data-lbl")){$(this).attr("data-lbl",$(this).attr("data-lbl")+"-"+type+"-open");}else{$(this).attr("data-lbl",type+"-open");}}}if(!$(this).attr("data-trackas")){$(this).attr("data-trackas",type);}});
/* TRACKAS CODE */
var sn=s_setAccount()[1];var ln=s_setAccount()[2];$("div.cw22snav a").bind("click",function(e){var btxt=$(this).text();var topORmid=$(this).parent().parent().parent().parent().parent().parent().attr("data-trackas");topORmid=(typeof(topORmid)=="undefined")?"cw22-carouseltop:":topORmid;btxt=btxt.replace(/[*,\r\n\t ]+/gi,"");navTrack(sn,ln,topORmid+"jumpnav",btxt);});$("div.cw22bnav a, div.cw22nnav a").bind("click",function(e){var btxt=$(this).text();var topORmid=$(this).parent().parent().parent().attr("data-trackas");topORmid=(typeof(topORmid)=="undefined")?"cw22-carouseltop:":topORmid;btxt=btxt.replace(/[*,\r\n\t ]+/gi,"");navTrack(sn,ln,topORmid,btxt);});for(var i=0;i<trackas.length;i++){if(!$(trackas[i][0]).attr("data-trackas")&&trackas[i][1]){$(trackas[i][0]).attr("data-trackas",trackas[i][1]);}if(trackas[i][2]&&trackas[i][2]=="resetpage"){$(trackas[i][0]).attr("data-pgreset","true");}else{if(trackas[i][2]&&!$(trackas[i][0]).attr("data-lbl")){$(trackas[i][0]).attr("data-lbl",trackas[i][2]);}}}$(document).on("click","*[data-trackas] a,a[data-trackas]",function(e){var lbl="";var o=$(this);if(o.attr("data-lbl")!="notrack"){if(o.attr("data-lbl")){lbl=o.attr("data-lbl");}else{if(o.attr("name")){lbl=o.attr("name");}else{if(o.attr("title")){lbl=o.attr("title");}else{if(o.find("img")&&o.find("img").first().attr("title")){lbl=o.find("img").first().attr("title");}else{if(o.find("img")&&o.find("img").first().attr("alt")){lbl=o.find("img").first().attr("alt");}else{if(o.find("img").first().attr("src")){lbl=o.find("img").first().attr("src");lbl=lbl.split("/")[(lbl.split("/").length-1)];}else{lbl=o.text();}}}}}}if(typeof(o.closest("[data-personalization-state]").attr("data-personalization-state"))!="undefined"){var p_dataPersonalizationState=o.closest("[data-personalization-state]").attr("data-personalization-state");var p_dataPersonalizedBy=(typeof(o.closest("[data-personalized-by]").attr("data-personalized-by")!="undefined"))?o.closest("[data-personalized-by]").attr("data-personalized-by"):"~";var p_dataId=(typeof(o.closest("[data-data-id]").attr("data-id")!="undefined"))?o.closest("[data-id]").attr("data-id"):"~";var p_dataContentId=(typeof(o.closest("[data-content-id]").attr("data-content-id")!="undefined"))?o.closest("[data-content-id]").attr("data-content-id"):"~";var p_dataNontentName=(typeof(o.closest("[data-content-name]").attr("data-content-name")!="undefined"))?o.closest("[data-content-name]").attr("data-content-name"):"~";p_dataPersonalizedBy="_"+p_dataPersonalizedBy.toLowerCase().replace(/,/g,"_").replace(/-+/g,"_");if((lbl.indexOf("prev")==-1&&lbl.indexOf("next")==-1)&&(p_dataPersonalizationState!="")){navTrack(sn,"personalized",p_dataPersonalizationState+":"+p_dataPersonalizedBy+":"+p_dataNontentName,p_dataId+":"+p_dataContentId);}}var d=o.closest("[data-trackas]").attr("data-trackas");d=(d=="hnav"||d=="header")?":":"-";if(!o.attr("data-trackas")){while(o.parent()){o=o.parent();if(o.attr("data-lbl")){lbl=o.attr("data-lbl")+d+lbl;}if(o.attr("data-trackas")){break;}}}lbl=lbl.toLowerCase().replace(/ /g,"-").replace(/-+/g,"-");var sec=(o.attr("data-trackas"))?o.attr("data-trackas"):o.closest("*[data-trackas]").attr("data-trackas");navTrack(sn,ln,sec,lbl);if(o.attr("data-pgreset")=="true"){s.clearVars();if(o.attr("href").indexOf("#")==0&&s.pageName){if(!$("body").attr("data-pgname")){$("body").attr("data-pgname",s.pageName);var pn=s.pageName;}else{var pn=$("body").attr("data-pgname");}s.pageName=pn+"/"+o.attr("href").split("#")[1];}else{s_orapageName(o.attr("href"));}oraSetInternalFilters();s.linkInternalFilters=s.linkInternalFilters+","+o.attr("href");var s_code=s.t();if(s_code){document.write(s_code);}oraSetInternalFilters();}}});});}