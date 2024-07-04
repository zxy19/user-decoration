/*! For license information please see admin.js.LICENSE.txt */
(()=>{var t={24:(t,e,r)=>{var n=r(735).default;function o(){"use strict";t.exports=o=function(){return r},t.exports.__esModule=!0,t.exports.default=t.exports;var e,r={},i=Object.prototype,a=i.hasOwnProperty,s=Object.defineProperty||function(t,e,r){t[e]=r.value},c="function"==typeof Symbol?Symbol:{},u=c.iterator||"@@iterator",l=c.asyncIterator||"@@asyncIterator",f=c.toStringTag||"@@toStringTag";function p(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{p({},"")}catch(e){p=function(t,e,r){return t[e]=r}}function h(t,e,r,n){var o=e&&e.prototype instanceof x?e:x,i=Object.create(o.prototype),a=new F(n||[]);return s(i,"_invoke",{value:P(t,r,a)}),i}function d(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}r.wrap=h;var y="suspendedStart",v="suspendedYield",m="executing",g="completed",b={};function x(){}function w(){}function _(){}var j={};p(j,u,(function(){return this}));var L=Object.getPrototypeOf,E=L&&L(L(G([])));E&&E!==i&&a.call(E,u)&&(j=E);var O=_.prototype=x.prototype=Object.create(j);function S(t){["next","throw","return"].forEach((function(e){p(t,e,(function(t){return this._invoke(e,t)}))}))}function I(t,e){function r(o,i,s,c){var u=d(t[o],t,i);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==n(f)&&a.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,s,c)}),(function(t){r("throw",t,s,c)})):e.resolve(f).then((function(t){l.value=t,s(l)}),(function(t){return r("throw",t,s,c)}))}c(u.arg)}var o;s(this,"_invoke",{value:function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}})}function P(t,r,n){var o=y;return function(i,a){if(o===m)throw Error("Generator is already running");if(o===g){if("throw"===i)throw a;return{value:e,done:!0}}for(n.method=i,n.arg=a;;){var s=n.delegate;if(s){var c=k(s,n);if(c){if(c===b)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===y)throw o=g,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=m;var u=d(t,r,n);if("normal"===u.type){if(o=n.done?g:v,u.arg===b)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(o=g,n.method="throw",n.arg=u.arg)}}}function k(t,r){var n=r.method,o=t.iterator[n];if(o===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,k(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),b;var i=d(o,t.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,b;var a=i.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,b):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,b)}function T(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function M(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function F(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(T,this),this.reset(!0)}function G(t){if(t||""===t){var r=t[u];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(a.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}throw new TypeError(n(t)+" is not iterable")}return w.prototype=_,s(O,"constructor",{value:_,configurable:!0}),s(_,"constructor",{value:w,configurable:!0}),w.displayName=p(_,f,"GeneratorFunction"),r.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,_):(t.__proto__=_,p(t,f,"GeneratorFunction")),t.prototype=Object.create(O),t},r.awrap=function(t){return{__await:t}},S(I.prototype),p(I.prototype,l,(function(){return this})),r.AsyncIterator=I,r.async=function(t,e,n,o,i){void 0===i&&(i=Promise);var a=new I(h(t,e,n,o),i);return r.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},S(O),p(O,f,"Generator"),p(O,u,(function(){return this})),p(O,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=G,F.prototype={constructor:F,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(M),!t)for(var r in this)"t"===r.charAt(0)&&a.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(n,o){return s.type="throw",s.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],s=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=a.call(i,"catchLoc"),u=a.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,b):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),b},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),M(r),b}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;M(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:G(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),b}},r}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},735:t=>{function e(r){return t.exports=e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,e(r)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},183:(t,e,r)=>{var n=r(24)();t.exports=n;try{regeneratorRuntime=n}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={exports:{}};return t[n](i,i.exports,r),i.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var n={};(()=>{"use strict";r.r(n),r.d(n,{extend:()=>b});const t=flarum.core.compat["admin/app"];var e=r.n(t);function o(t,e,r,n,o,i,a){try{var s=t[i](a),c=s.value}catch(t){return void r(t)}s.done?e(c):Promise.resolve(c).then(n,o)}var i=r(183),a=r.n(i),s=null,c=function(){function t(t){this.fetchIntervalId=-1,this.fetchId={},this.cb=[],this.app=void 0,s=this,this.app=t}var e=t.prototype;return e.done=function(t){this.cb.push(t)},t.getInstance=function(){return s},e.sendFetch=function(){var t,e=(t=a().mark((function t(){var e,r,n=this;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.fetchIntervalId=-1,e=this.fetchId,r=Object.keys(e).map((function(t){return parseInt(t)})),this.fetchId={},t.next=6,this.app.store.find("user_decoration",{id:r});case 6:t.sent,r.forEach((function(t){e[t].forEach((function(e){e(n.app.store.getById("user-decorations",t+""))}))})),this.cb.forEach((function(t){t()}));case 9:case"end":return t.stop()}}),t,this)})),function(){var e=this,r=arguments;return new Promise((function(n,i){var a=t.apply(e,r);function s(t){o(a,n,i,s,c,"next",t)}function c(t){o(a,n,i,s,c,"throw",t)}s(void 0)}))});return function(){return e.apply(this,arguments)}}(),e.fetchStyle=function(t){var e=this;if(!t)return Promise.resolve(null);t=parseInt(t+"");var r=this.app.store.getById("user-decorations",t+"");return r?Promise.resolve(r):new Promise((function(r){e.fetchId[t]=e.fetchId[t]||[],e.fetchId[t].push(r),-1==e.fetchIntervalId&&(e.fetchIntervalId=setTimeout(e.sendFetch.bind(e),400))}))},e.fetchStyleSync=function(t){return this.app.store.getById("user-decorations",t+"")||void 0},e.getApp=function(){return this.app},t}();e().initializers.add("xypp/user-decoration",(function(){new c(e()),e().extensionData.for("xypp-user-decoration").registerSetting({setting:"xypp-user-decoration.username_hijack",type:"boolean",label:e().translator.trans("xypp-user-decoration.admin.settings.username_hijack.title"),help:e().translator.trans("xypp-user-decoration.admin.settings.username_hijack.desc"),default:!0}).registerSetting({setting:"xypp-user-decoration.avatar_hijack",type:"boolean",label:e().translator.trans("xypp-user-decoration.admin.settings.avatar_hijack.title"),help:e().translator.trans("xypp-user-decoration.admin.settings.avatar_hijack.desc"),default:!0}).registerSetting({setting:"xypp-user-decoration.view-all",type:"boolean",label:e().translator.trans("xypp-user-decoration.admin.settings.view-all.title"),help:e().translator.trans("xypp-user-decoration.admin.settings.view-all.desc"),default:!0}).registerPermission({icon:"fas fa-brush",label:e().translator.trans("xypp-user-decoration.admin.permissions.offer_decoration"),permission:"user.offer_decoration"},"moderate",30).registerPermission({icon:"fas fa-eye",label:e().translator.trans("xypp-user-decoration.admin.permissions.view_decoration"),permission:"user.view_decoration"},"moderate",30).registerPermission({icon:"fas fa-trash",label:e().translator.trans("xypp-user-decoration.admin.permissions.delete_decoration"),permission:"user.delete_decoration"},"moderate",30).registerPermission({icon:"fas fa-plus-circle",label:e().translator.trans("xypp-user-decoration.admin.permissions.create_decoration"),permission:"user.create_decoration"},"moderate",30).registerPermission({icon:"fas fa-eye",label:e().translator.trans("xypp-user-decoration.admin.permissions.view-all"),permission:"user.view_all"},"moderate",30)}));const u=flarum.core.compat["common/extenders"];var l=r.n(u);function f(t,e){return f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},f(t,e)}function p(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,f(t,e)}const h=flarum.core.compat["common/Model"];var d=r.n(h),y=function(t){function e(){for(var e,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))||this).style=d().attribute("style"),e.type=d().attribute("type"),e.createdAt=d().attribute("createdAt",d().transformDate),e.name=d().attribute("name"),e.desc=d().attribute("desc"),e}return p(e,t),e}(d()),v=function(t){function e(){for(var e,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))||this).user_id=d().attribute("user_id"),e.decoration_id=d().attribute("decoration_id"),e.decoration_type=d().attribute("type"),e}return p(e,t),e}(d());const m=flarum.core.compat["common/models/User"];var g=r.n(m);const b=[(new(l().Store)).add("user-decorations",y),(new(l().Store)).add("user-own-decoration",v),new(l().Model)(g()).attribute("avatar_decoration")]})(),module.exports=n})();
//# sourceMappingURL=admin.js.map