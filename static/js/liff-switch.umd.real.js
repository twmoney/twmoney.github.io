/*! For license information please see liff-switch.umd.real.js.LICENSE.txt */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.liffSwitch=e():t.liffSwitch=e()}(self,(function(){return(()=>{"use strict";var t={613:(t,e,n)=>{n.r(e),n.d(e,{back:()=>b,canBack:()=>U,getLiffSwitchDirection:()=>m,go:()=>v,init:()=>d,restoreAppState:()=>O});var r="liff-switch.state",o=function(t){var e=atob(t);return JSON.parse(e)},i=function(t){var e=JSON.stringify(t);return btoa(e)},a=function(t){var e=f();localStorage.setItem(e,JSON.stringify(t))},l=function(){var t=f(),e=localStorage.getItem(t);return e?JSON.parse(e):{switchHistory:[],appStates:{}}},f=function(){return"LIFF_SWITCH_STORE:"+window.liff.id+":context"},c=function(){return(c=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},s=function(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var r=Array(t),o=0;for(e=0;e<n;e++)for(var i=arguments[e],a=0,l=i.length;a<l;a++,o++)r[o]=i[a];return r},u=function(t){var e,n=l();if(!n.switchHistory.includes(t.appStateToken)){var r={switchHistory:s(n.switchHistory,[t.appStateToken]),appStates:c(c({},n.appStates),(e={},e[t.appStateToken]=t,e))};a(r)}},p=function(t){var e=l(),n=e.switchHistory.filter((function(e){return e!==t.appStateToken})),r={};n.forEach((function(t){r[t]=e.appStates[t]})),a({switchHistory:n,appStates:r})},h=function(){function t(t,e){var n=this;if(this.isLiffUrl=function(){var t=new RegExp(/https:\/\/liff.(line|line-beta).me\/[0-9]+-[0-9a-zA-Z]+/);return!!n.internalUrl.toString().match(t)},this.internalUrl=e?new URL(t,e):new URL(t),!this.isLiffUrl())throw new Error("provided url is not LIFF URL format.")}return t.prototype.toString=function(){return this.internalUrl.toString()},t}(),w=function(t){var e=t.liffUrl.toString(),n=new URL(e);return n.searchParams.set("liff-switch.state",t.liffSwitchState),n.toString()},S=function(t){window.liff.openWindow({url:t})},y=function(){return(y=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},g=null,d=function(){return t=void 0,e=void 0,i=function(){var t;return function(t,e){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(i){return function(l){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}}(this,(function(e){return!window.liff.id||new URLSearchParams(location.search).has("liff.state")?(console.log("liff-switch cannot initialize before completing liff#init"),[2,null]):(t=function(t){var e=new URL(t).searchParams,n=e.get(r);if(n)return o(n);var i=e.get("liff.state");if(i){var a=new URL(i,"https://dummy.com").searchParams.get(r);if(a)return o(a)}return null}(location.href))?(g=t,console.log("liffSwitchState:",t),"go"===t.direction&&(console.log("liff-switch detects to open this LIFFapp with liffSwitch#go"),u(t.appState)),"back"===t.direction&&(console.log("liff-switch detects to open this LIFFapp with liffSwitch#back"),p(t.appState)),[2,t.appState]):(a({switchHistory:[],appStates:{}}),console.log("no required parameter (liff-switch.state) found from URL."),[2,null])}))},new((n=void 0)||(n=Promise))((function(r,o){function a(t){try{f(i.next(t))}catch(t){o(t)}}function l(t){try{f(i.throw(t))}catch(t){o(t)}}function f(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,l)}f((i=i.apply(t,e||[])).next())}));var t,e,n,i},v=function(t,e){var n,r=new h(t),o=null!==(n=null==e?void 0:e.appState)&&void 0!==n?n:{},a=o.returnUrl,l=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]])}return n}(o,["returnUrl"]),f=y({},l);a&&(f.returnUrl=new h(a));var s,p,g=(s=f,p={appStateToken:String(Date.now()),returnUrl:window.liff.permanentLink.createUrl(),scrollX:window.pageXOffset,scrollY:window.pageYOffset},c(c({},p),s));u(g);var d=w({liffUrl:r,liffSwitchState:i({direction:"go",appState:g})});console.log("open liff browser as liffSwitch#go. url: ",d),S(d.toString())},b=function(){var t,e,n=(t=l()).appStates[(e=t.switchHistory)[e.length-1]]||null;if(n){p(n);var r={direction:"back",appState:n},o=w({liffUrl:n.returnUrl,liffSwitchState:i(r)});console.log("open liff browser as liffSwitch#back. url: ",o),S(o)}else console.log("there is no switchable liff-switch-app-state.")},m=function(){return g?g.direction:null},O=function(){return g?"go"===g.direction?null:g.appState:null},U=function(){return!!g&&0<l().switchHistory.length}}},e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={exports:{}};return t[r](o,o.exports,n),o.exports}return n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n(613)})()}));