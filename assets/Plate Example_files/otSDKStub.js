(function(w){function x(){var a=this;this.implementThePolyfill=function(){var b=Element.prototype.setAttribute;Element.prototype.setAttribute=function(c,e){if("style"!==c.toLowerCase()&&b.apply(this,[c,e]),"style"!==c.toLowerCase()||e||this.removeAttribute("style"),"style"===c.toLowerCase()&&e){this.removeAttribute("style");var f;c=a.strToObj(e);for(f in c)this.style[f]=c[f]}}}}function z(a,b,c){function e(l){return l?(";"!==(l=l.trim()).charAt(l.length-1)&&(l+=";"),l.trim()):null}void 0===c&&(c=
!1);var f=e(a.getAttribute("style")),h=e(b);b="";b=c&&f?function(){for(var l=f.split(";").concat(h.split(";")).filter(function(u){return 0!==u.length}),q="",n="",m=l.length-1;0<=m;m--){var p=l[m].substring(0,l[m].indexOf(":")+1).trim();0>q.indexOf(p)&&(q+=p,n+=l[m]+";")}return n}():h;a.setAttribute("style",b)}function g(){var a=this;this.iabType=null;this.iabTypeAdded=!0;this.crossOrigin=null;this.isAmp=!1;this.domainId="";this.isPreview=this.isReset=!1;this.nonce=this.geoFromUrl="";this.setAttributePolyfillIsActive=
!1;this.storageBaseURL="";this.charset=null;this.addBannerSDKScript=function(b){var c=a.getRegionSet(b),e=(c.GCEnable||(a.updateGtmMacros(),a.gtmUpdated=!0),a.iabTypeAdded&&("IAB"!==c.Type&&"IAB2"!==c.Type||(a.iabType=c.Type,a.intializeIabStub()),"IAB2"!==c.Type)&&a.removeTcf(),c.IsGPPEnabled?y.init():y.removeGppApi(),d.stubScriptElement.cloneNode(!0)),f="";f=b.UseSDKRefactor?(d.isMigratedURL&&(e.src=d.storageBaseURL+"/scripttemplates/new/scripttemplates/"+d.stubFileName+".js"),d.storageBaseURL+"/scripttemplates/new/scripttemplates/"+
b.Version+"/"+d.bannerScriptName):"5.11.0"===b.Version?(d.isMigratedURL&&(e.src=d.storageBaseURL+"/scripttemplates/old/scripttemplates/"+d.stubFileName+".js"),d.storageBaseURL+"/scripttemplates/old/scripttemplates/5.11.0/"+d.bannerScriptName):(d.isMigratedURL&&(e.src=d.storageBaseURL+"/scripttemplates/"+d.stubFileName+".js"),d.storageBaseURL+"/scripttemplates/"+b.Version+"/"+d.bannerScriptName);"charset data-language data-document-language data-domain-script crossorigin data-ignore-ga".split(" ").forEach(function(h){d.stubScriptElement.getAttribute(h)&&
e.setAttribute(h,d.stubScriptElement.getAttribute(h))});a.charset=d.stubScriptElement.getAttribute("charset");a.isAmp=!!d.stubScriptElement.getAttribute("amp");window.otStubData={bannerBaseDataURL:d.bannerBaseDataURL,crossOrigin:a.crossOrigin,domainData:b,domainId:a.domainId,geoFromUrl:a.geoFromUrl,isAmp:a.isAmp,isPreview:a.isPreview,isReset:a.isReset,mobileOnlineURL:d.mobileOnlineURL,nonce:a.nonce,otDataLayer:a.otDataLayer,regionRule:c,setAttributePolyfillIsActive:a.setAttributePolyfillIsActive,
storageBaseURL:a.storageBaseURL,stubElement:e,urlParams:a.urlParams,userLocation:d.userLocation,gtmUpdated:a.gtmUpdated,previewMode:a.previewMode,charset:a.charset};a.jsonp(f,null)};this.intializeIabStub=function(){var b=window;a.iabTypeAdded?("IAB"===a.iabType?void 0===b.__cmp&&(window.__cmp=a.executeCmpApi):void 0===b.__tcfapi&&(window.__tcfapi=a.executeTcfApi),a.addIabFrame()):a.addBackwardIabFrame();b.receiveOTMessage=a.receiveIabMessage;(b.attachEvent||window.addEventListener)("message",b.receiveOTMessage,
!1)};this.addIabFrame=function(){var b=window,c="IAB"===a.iabType?"__cmpLocator":"__tcfapiLocator";!b.frames[c]&&(b.document.body?a.addLocator(c,"CMP"):setTimeout(a.addIabFrame,5))};this.addBackwardIabFrame=function(){var b=window,c="__cmpLocator";c=(!!b.frames[c]||(b.document.body?a.addLocator(c,"CMP"):setTimeout(a.addIabFrame,5)),"__tcfapiLocator");!b.frames[c]&&(b.document.body?a.addLocator(c,"TCF"):setTimeout(a.addIabFrame,5))};this.addLocator=function(b,c){var e=window,f=e.document.createElement("iframe");
z(f,"display: none;",!0);f.name=b;f.setAttribute("title",c+" Locator");e.document.body.appendChild(f)};this.receiveIabMessage=function(b){var c,e,f,h,l,q,n="string"==typeof b.data,m={};try{m=n?JSON.parse(b.data):b.data}catch(p){}m.__cmpCall&&"IAB"===a.iabType?(c=m.__cmpCall.callId,e=m.__cmpCall.command,l=m.__cmpCall.parameter,a.executeCmpApi(e,l,function(p,u){p={__cmpReturn:{returnValue:p,success:u,callId:c,command:e}};b.source.postMessage(n?JSON.stringify(p):p,b.origin)})):m.__cmpCall&&"IAB2"===
a.iabType&&console.log("Expecting IAB TCF v2.0 vendor iFrame call; Received IAB TCF v1.1");m.__tcfapiCall&&"IAB2"===a.iabType?(f=m.__tcfapiCall.callId,h=m.__tcfapiCall.command,l=m.__tcfapiCall.parameter,q=m.__tcfapiCall.version,a.executeTcfApi(h,l,function(p,u){p={__tcfapiReturn:{returnValue:p,success:u,callId:f,command:h}};b&&b.source&&b.source.postMessage&&b.source.postMessage(n?JSON.stringify(p):p,"*")},q)):m.__tcfapiCall&&"IAB"===a.iabType&&console.log("Expecting IAB TCF v1.1 vendor iFrame call; Received IAB TCF v2.0")};
this.executeCmpApi=function(){for(var b=[],c=0;c<arguments.length;c++)b[c]=arguments[c];a.iabType="IAB";c=b[0];var e=b[1];b=b[2];if("function"==typeof b&&c)if(d.isStubReady&&d.IABCookieValue)switch(c){case "ping":a.getPingRequest(b,!0);break;case "getConsentData":a.getConsentDataRequest(b);break;default:a.addToQueue(c,e,b)}else a.addToQueue(c,e,b)};this.executeTcfApi=function(){for(var b=[],c=0;c<arguments.length;c++)b[c]=arguments[c];if(a.iabType="IAB2",!b.length)return window.__tcfapi.a||[];c=b[0];
var e=b[1],f=b[2];b=b[3];"function"==typeof f&&c&&("ping"===c?a.getPingRequest(f):a.addToQueue(c,e,f,b))};this.addToQueue=function(b,c,e,f){var h=window,l="IAB"===a.iabType?"__cmp":"__tcfapi";h[l].a=h[l].a||[];h[l].a.push([b,c,e,f])};this.getPingRequest=function(b,c){var e,f;void 0===c&&(c=!1);b&&(f=!(e={}),"IAB"===a.iabType?(e={gdprAppliesGlobally:d.oneTrustIABgdprAppliesGlobally,cmpLoaded:c},f=!0):"IAB2"===a.iabType&&(e={gdprApplies:d.oneTrustIABgdprAppliesGlobally,cmpLoaded:!1,cmpStatus:"stub",
displayStatus:"stub",apiVersion:"2.0",cmpVersion:void 0,cmpId:void 0,gvlVersion:void 0,tcfPolicyVersion:void 0},f=!0),b(e,f))};this.getConsentDataRequest=function(b){b&&d.IABCookieValue&&b({gdprApplies:d.oneTrustIABgdprAppliesGlobally,hasGlobalScope:d.hasIABGlobalScope,consentData:d.IABCookieValue},!0)};this.initConsentSDK()}var d=new function(){this.optanonCookieName="OptanonConsent";this.optanonHtmlGroupData=[];this.optanonHostData=[];this.genVendorsData=[];this.vendorsServiceData=[];this.IABCookieValue=
"";this.oneTrustIABCookieName="eupubconsent";this.oneTrustIsIABCrossConsentEnableParam="isIABGlobal";this.isStubReady=!0;this.geolocationCookiesParam="geolocation";this.EUCOUNTRIES="BE BG CZ DK DE EE IE GR ES FR IT CY LV LT LU HU MT NL AT PL PT RO SI SK FI SE GB HR LI NO IS".split(" ");this.stubFileName="otSDKStub";this.DATAFILEATTRIBUTE="data-domain-script";this.bannerScriptName="otBannerSdk.js";this.mobileOnlineURL=[];this.isMigratedURL=!1;this.migratedCCTID="[[OldCCTID]]";this.migratedDomainId=
"[[NewDomainId]]";this.userLocation={country:"",state:""}};(k=t=t||{})[k.Days=1]="Days";k[k.Weeks=7]="Weeks";k[k.Months=30]="Months";k[k.Years=365]="Years";(k=r=r||{}).Name="OTGPPConsent";k[k.ChunkSize=4E3]="ChunkSize";k.ChunkCountParam="GPPCookiesCount";(k={CPRA:8,8:"CPRA",CCPA:8})[8]="CCPA";k[k.CDPA=9]="CDPA";k[k.USNATIONAL=7]="USNATIONAL";k[k.COLORADO=10]="COLORADO";k[k.UCPA=11]="UCPA";k[k.CTDPA=12]="CTDPA";var v,r,A=(r.Name,"PRODUCTION"),B=((k={})[t.Days]="PCenterVendorListLifespanDay",k[t.Weeks]=
"LfSpnWk",k[t.Months]="PCenterVendorListLifespanMonth",k[t.Years]="LfSpnYr",x.prototype.camelize=function(a){return a.split("-").map(function(b,c){return 0===c?b:b[0].toUpperCase()+b.slice(1)}).join("")},x.prototype.strToObj=function(a){var b={};a=a.split(";").map(function(f){return f.trim()});for(var c=0,e=void 0;c<a.length;++c)if(/:/.test(a[c])){if(!(e=a[c].split(/:(.+)/))[1])return null;b[this.camelize(e[0])]=e[1].trim()}return b},x);(r=v=v||{}).ping="ping";r.addEventListener="addEventListener";
r.removeEventListener="removeEventListener";r.hasSection="hasSection";r.getSection="getSection";r.getField="getField";r.getGPPData="getGPPData";var y=new function(){var a=this;this.LOCATOR_NAME="__gppLocator";this.win=window;this.customInit="CUSTOMINIT";this.init=function(){a.win.__gpp&&"function"==typeof a.win.__gpp||(a.win.__gpp=a.executeGppApi,window.addEventListener("message",a.messageHandler,!1),a.addFrame(a.LOCATOR_NAME))};this.removeGppApi=function(){delete a.win.__gpp;var b=document.querySelectorAll("iframe[name\x3d"+
a.LOCATOR_NAME+"]")[0];b&&b.parentElement.removeChild(b)};this.executeGppApi=function(){for(var b=[],c=0;c<arguments.length;c++)b[c]=arguments[c];var e=null==(e=a.win)?void 0:e.__gpp;if(e.queue=e.queue||[],e.events=e.events||[],!b.length||1===b.length&&"queue"===b[0])return e.queue;if(1===b.length&&"events"===b[0])return e.events;c=b[0];e=1<b.length?b[1]:null;b=2<b.length?b[2]:null;switch(c){case v.ping:return a.getPingRequest(e);case v.addEventListener:return a.addEventListener(e,b);case v.removeEventListener:return a.removeEventListener(b);
default:return void a.addToQueue(c,e,b)}};this.getPingRequest=function(b){var c={gppVersion:1,cmpStatus:"stub",cmpDisplayStatus:"hidden",apiSupport:["uspcav1","uspvav1"],currentAPI:"",cmpId:Number.parseInt("28")};return b&&b(c,!0),c};this.addFrame=function(b){var c,e=a.win.document;a.win.frames[b]||(e.body?((c=e.createElement("iframe")).style.cssText="display:none",c.name=b,c.setAttribute("title","GPP Locator"),e.body.appendChild(c)):setTimeout(function(){a.addFrame(b)},5))};this.addEventListener=
function(b,c){var e=a.win.__gpp;return e.events=e.events||[],null!=e&&e.lastId||(e.lastId=0),e.lastId++,e.events.push({id:e.lastId,callback:b,parameter:c}),{eventName:"listenerRegistered",listenerId:e.lastId,data:!0,pingData:a.getPingRequest()}};this.removeEventListener=function(b){var c=!1,e=a.win.__gpp;return e.events=e.events||[],e.events=e.events.filter(function(f){return f.id.toString()!==b.toString()||!(c=!0)}),{eventName:"listenerRemoved",listenerId:b,data:c,pingData:a.getPingRequest()}};this.addToQueue=
function(b,c,e){var f=a.win.__gpp;f.queue=f.queue||[];f.queue.push([b,c,e])};this.messageHandler=function(b){var c,e="string"==typeof b.data;try{var f=e?JSON.parse(b.data):b.data}catch(h){f=null}f&&f.__gppCall&&(c=f.__gppCall,(0,a.win.__gpp)(c.command,function(h,l){h={__gppReturn:{returnValue:h,success:l,callId:c.callId}};b&&b.source&&b.source.postMessage&&b.source.postMessage(e?JSON.stringify(h):h,b.origin||"*")},c.parameter))};this.customInit||this.init()},k=(g.prototype.initConsentSDK=function(){this.initCustomEventPolyfill();
this.ensureHtmlGroupDataInitialised();this.setStubScriptElement();this.setOTDataLayer();this.getParam();this.fetchBannerSDKDependency();this.captureNonce()},g.prototype.captureNonce=function(){this.nonce=d.stubScriptElement.nonce||d.stubScriptElement.getAttribute("nonce")||null},g.prototype.fetchBannerSDKDependency=function(){this.setDomainDataFileURL();this.crossOrigin=d.stubScriptElement.getAttribute("crossorigin")||null;this.previewMode="true"===d.stubScriptElement.getAttribute("data-preview-mode");
this.otFetch(d.bannerDataParentURL,this.getLocation.bind(this))},g.prototype.setDomainIfBulkDomainEnabled=function(a){var b=a&&a.TenantFeatures,c=window.location.hostname,e=a.Domain,f=a.BulkDomainCheckUrl;b&&b.CookieV2BulkDomainManagement&&c!==e&&a.ScriptType===A&&((b=window.sessionStorage)&&b.getItem("bulkDomainMgmtEnabled")?this.handleBulkDomainMgmt({isValid:"true"===window.sessionStorage.getItem("bulkDomainMgmtEnabled")},a):(e={location:d.storageBaseURL.replace(/^https?:\/\//,""),domainId:this.domainId,
url:c},this.otFetch(f,this.handleBulkDomainMgmt,!1,e,a)))},g.prototype.getLocation=function(a){if(this.setDomainIfBulkDomainEnabled(a),(a.TenantFeatures&&a.TenantFeatures.CookieV2CSP||a.CookieV2CSPEnabled)&&this.nonce&&(this.setAttributePolyfillIsActive=!0,(new B).implementThePolyfill()),!a.RuleSet[0].Type)return this.iabTypeAdded=!1,window.__cmp=this.executeCmpApi,window.__tcfapi=this.executeTcfApi,this.intializeIabStub(),this.addBannerSDKScript(a);var b,c=window;c.OneTrust&&c.OneTrust.geolocationResponse?
(c=c.OneTrust.geolocationResponse,this.setGeoLocation(c.countryCode,c.stateCode),this.addBannerSDKScript(a)):(c=this.readCookieParam(d.optanonCookieName,d.geolocationCookiesParam))||a.SkipGeolocation?(b=c.split(";")[0],c=c.split(";")[1],this.setGeoLocation(b,c),this.addBannerSDKScript(a)):this.getGeoLocation(a)},g.prototype.handleBulkDomainMgmt=function(a,b){window.sessionStorage&&window.sessionStorage.setItem("bulkDomainMgmtEnabled",JSON.stringify(a.isValid));a.isValid&&(b.Domain=window.location.hostname)},
g.prototype.getGeolocationURL=function(a){a.TenantFeatures;var b=""+d.stubScriptElement.getAttribute("src").split(d.stubFileName)[0]+a.Version;return RegExp("^file://","i").test(b)&&a.MobileSDK?(b="/"+a.GeolocationUrl.replace(/^(http|https):\/\//,"").split("/").slice(1).join("/")+".js",d.storageBaseURL+b):a.GeolocationUrl},g.prototype.geoLocationJsonCallback=function(a,b){b&&this.setGeoLocation(b.country,b.state);this.addBannerSDKScript(a)},g.prototype.getGeoLocation=function(a){var b=this.getGeolocationURL(a);
this.otFetch(b,this.geoLocationJsonCallback.bind(this,a),!0)},g.prototype.setOTDataLayer=function(){var a="data-dLayer-ignore",b=d.stubScriptElement.hasAttribute(a);a=d.stubScriptElement.getAttribute(a);this.otDataLayer={ignore:b&&"true"===a||b&&""===a,name:d.stubScriptElement.getAttribute("data-dLayer-name")||"dataLayer"}},g.prototype.setGeoLocation=function(a,b){d.userLocation={country:a,state:void 0===b?"":b}},g.prototype.otFetch=function(a,b,c,e,f){void 0===c&&(c=!1);void 0===e&&(e=null);var h=
window.sessionStorage&&window.sessionStorage.getItem("otPreviewData");if(RegExp("^file://","i").test(a))this.otFetchOfflineFile(a,b);else if(0<=a.indexOf("/consent/")&&this.previewMode&&h)h=JSON.parse(h).domainJson,b(h);else{d.mobileOnlineURL.push(a);h=new XMLHttpRequest;if(h.onload=function(q){var n;this&&this.responseText?n=this.responseText:q&&q.target&&(n=q.target.responseText);f?b(JSON.parse(n),f):b(JSON.parse(n))},h.onerror=function(){b()},h.open("GET",a),h.withCredentials=!1,c&&h.setRequestHeader("accept",
"application/json"),e)for(var l in e)h.setRequestHeader(l,e[l]);h.send()}},g.prototype.otFetchOfflineFile=function(a,b){var c=(a=a.replace(".json",".js")).split("/"),e=c[c.length-1].split(".js")[0];this.jsonp(a,function(){b(window[e])})},g.prototype.jsonp=function(a,b){var c=document.createElement("script");c.setAttribute("src",a);this.nonce&&c.setAttribute("nonce",this.nonce);c.async=!0;c.type="text/javascript";this.crossOrigin&&c.setAttribute("crossorigin",this.crossOrigin);document.getElementsByTagName("head")[0].appendChild(c);
RegExp("^file://","i").test(a)||d.mobileOnlineURL.push(a);b&&(c.onload=c.onerror=function(){b()})},g.prototype.getRegionSet=function(a){var b,c=d.userLocation,e=a.RuleSet.filter(function(n){return!0===n.Default});if(!c.country&&!c.state)return e&&0<e.length?e[0]:null;e=c.state.toLowerCase();c=c.country.toLowerCase();for(var f=0;f<a.RuleSet.length;f++)if(!0===a.RuleSet[f].Global)var h=a.RuleSet[f];else{var l=a.RuleSet[f].States;if(l[c]&&0<=l[c].indexOf(e)){var q=a.RuleSet[f];break}0<=a.RuleSet[f].Countries.indexOf(c)&&
(b=a.RuleSet[f])}return q||b||h},g.prototype.ensureHtmlGroupDataInitialised=function(){this.initializeIABData();this.initializeGroupData();this.initializeHostData();this.initializeGenVenData()},g.prototype.initializeGroupData=function(){var a=this.readCookieParam(d.optanonCookieName,"groups");a&&(d.optanonHtmlGroupData=this.deserialiseStringToArray(a))},g.prototype.initializeHostData=function(){var a=this.readCookieParam(d.optanonCookieName,"hosts");a&&(d.optanonHostData=this.deserialiseStringToArray(a))},
g.prototype.initializeGenVenData=function(){var a=this.readCookieParam(d.optanonCookieName,"genVendors");a&&(d.genVendorsData=this.deserialiseStringToArray(a))},g.prototype.initializeIABData=function(){this.validateIABGDPRApplied();this.validateIABGlobalScope()},g.prototype.validateIABGlobalScope=function(){var a=this.readCookieParam(d.optanonCookieName,d.oneTrustIsIABCrossConsentEnableParam);a?"true"===a?(d.hasIABGlobalScope=!0,d.isStubReady=!1):(d.hasIABGlobalScope=!1,d.IABCookieValue=this.getCookie(d.oneTrustIABCookieName)):
d.isStubReady=!1},g.prototype.validateIABGDPRApplied=function(){var a=this.readCookieParam(d.optanonCookieName,d.geolocationCookiesParam).split(";")[0];a?this.isBoolean(a)?d.oneTrustIABgdprAppliesGlobally="true"===a:d.oneTrustIABgdprAppliesGlobally=0<=d.EUCOUNTRIES.indexOf(a):d.isStubReady=!1},g.prototype.isBoolean=function(a){return"true"===a||"false"===a},g.prototype.readCookieParam=function(a,b){if(a=this.getCookie(a)){var c={};var e=a.split("\x26");for(a=0;a<e.length;a+=1){var f=e[a].split("\x3d");
c[decodeURIComponent(f[0])]=decodeURIComponent(f[1]).replace(/\+/g," ")}return b&&c[b]?c[b]:b&&!c[b]?"":c}return""},g.prototype.getCookie=function(a){if(this.isAmp)return(JSON.parse(window.localStorage.getItem(this.domainId))||{})[a]||null;for(var b=a+"\x3d",c=document.cookie.split(";"),e=0;e<c.length;e+=1){for(a=c[e];" "==a.charAt(0);)a=a.substring(1,a.length);if(0==a.indexOf(b))return a.substring(b.length,a.length)}return null},g.prototype.updateGtmMacros=function(){for(var a=[],b=d.optanonHtmlGroupData.length,
c=0;c<b;c++)this.endsWith(d.optanonHtmlGroupData[c],":1")&&a.push(d.optanonHtmlGroupData[c].replace(":1",""));b=d.optanonHostData.length;for(c=0;c<b;c++)this.endsWith(d.optanonHostData[c],":1")&&a.push(d.optanonHostData[c].replace(":1",""));b=d.genVendorsData.length;for(c=0;c<b;c++)this.endsWith(d.genVendorsData[c],":1")&&a.push(d.genVendorsData[c].replace(":1",""));b=d.vendorsServiceData.length;for(c=0;c<b;c++)this.endsWith(d.vendorsServiceData[c],":1")&&a.push(d.vendorsServiceData[c].replace(":1",
""));var e;b=","+this.serialiseArrayToString(a)+",";c=(window.OnetrustActiveGroups=b,window.OptanonActiveGroups=b,window);var f=(this.otDataLayer.ignore||void 0===c[this.otDataLayer.name]?this.otDataLayer.ignore||(c[this.otDataLayer.name]=[{event:"OneTrustLoaded",OnetrustActiveGroups:b},{event:"OptanonLoaded",OptanonActiveGroups:b}]):c[this.otDataLayer.name].constructor===Array&&(c[this.otDataLayer.name].push({OnetrustActiveGroups:b}),c[this.otDataLayer.name].push({OptanonActiveGroups:b})),new CustomEvent("consent.onetrust",
{detail:a}));!this.otDataLayer.ignore&&a.length&&(c[this.otDataLayer.name].constructor===Array&&c[this.otDataLayer.name].push({event:"OneTrustGroupsUpdated",OnetrustActiveGroups:b}),e=new CustomEvent("OneTrustGroupsUpdated",{detail:a}));setTimeout(function(){a.length&&window.dispatchEvent(f);e&&window.dispatchEvent(e)})},g.prototype.deserialiseStringToArray=function(a){return a?a.split(","):[]},g.prototype.endsWith=function(a,b){return-1!==a.indexOf(b,a.length-b.length)},g.prototype.serialiseArrayToString=
function(a){return a.toString()},g.prototype.setStubScriptElement=function(){d.stubScriptElement=document.querySelector("script[src*\x3d'"+d.stubFileName+"']");var a=d.stubScriptElement&&0<=d.stubScriptElement.getAttribute("src").indexOf("did\x3d");d.stubScriptElement&&d.stubScriptElement.hasAttribute(d.DATAFILEATTRIBUTE)?this.domainId=d.stubScriptElement.getAttribute(d.DATAFILEATTRIBUTE).trim():a?this.domainId=d.stubScriptElement.getAttribute("src").split("did\x3d")[1]:d.stubScriptElement||(d.stubScriptElement=
document.querySelector("script[src*\x3d'"+d.migratedCCTID+"']"),d.stubScriptElement&&(d.isMigratedURL=!0,this.domainId=d.migratedDomainId.trim()))},g.prototype.setDomainDataFileURL=function(){var a=d.stubScriptElement.getAttribute("src"),b=-1<a.indexOf("/consent");a&&(d.isMigratedURL?d.storageBaseURL=a.split("/consent/"+d.migratedCCTID)[0]:d.storageBaseURL=(b?a.split("/consent"):a.split("/scripttemplates/"+d.stubFileName))[0]);this.storageBaseURL=d.storageBaseURL;this.isPreview&&-1===this.domainId.indexOf("test")?
this.domainId+="-test":this.isPreview=!1;d.bannerBaseDataURL=d.storageBaseURL&&d.storageBaseURL+"/consent/"+this.domainId;d.bannerDataParentURL=d.bannerBaseDataURL+"/"+this.domainId+".json"},g.prototype.initCustomEventPolyfill=function(){function a(b,c){c=c||{bubbles:!1,cancelable:!1,detail:void 0};var e=document.createEvent("CustomEvent");return e.initCustomEvent(b,c.bubbles,c.cancelable,c.detail),e}if("function"==typeof window.CustomEvent)return!1;a.prototype=window.Event.prototype;window.CustomEvent=
a},g.prototype.removeTcf=function(){delete window.__tcfapi;var a=document.querySelectorAll("iframe[name\x3d'__tcfapiLocator']")[0];a&&a.parentElement.removeChild(a)},g.prototype.getParamForIE=function(){return{get:function(a){a=(new RegExp("[?\x26]"+a+"\x3d([^\x26#]*)")).exec(window.location.search);return null===a?null:decodeURI(a[1])||""}}},g.prototype.getParam=function(){window.document.documentMode||!window.URLSearchParams?this.urlParams=this.getParamForIE():this.urlParams=new URLSearchParams(window.location.search);
var a="true"===this.urlParams.get("otreset"),b="true"===this.urlParams.get("otpreview"),c=(this.geoFromUrl=(this.urlParams.get("otgeo")||"").toLowerCase(),this.readCookieParam("otpreview","expiry")),e=this.readCookieParam("otpreview","geo");this.isReset=a||c&&new Date(c)<new Date;this.isPreview=!this.isReset&&(b||c&&new Date(c)>new Date);this.setGeoParam(this.geoFromUrl||e)},g.prototype.setGeoParam=function(a){var b;a&&((b=window).OneTrust||(b.OneTrust={}),a=a.split(","),b.OneTrust.geolocationResponse=
{countryCode:a[0],stateCode:a[1]})},g),t=new k;return w.OtSDKStub=k,w.otSdkStub=t,w})({});