parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"QVnC":[function(require,module,exports) {
var define;
var t,r=function(t){"use strict";var r,e=Object.prototype,n=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{u({},"")}catch(P){u=function(t,r,e){return t[r]=e}}function h(t,r,e,n){var o=r&&r.prototype instanceof d?r:d,i=Object.create(o.prototype),a=new G(n||[]);return i._invoke=function(t,r,e){var n=l;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===y){if("throw"===o)throw i;return F()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=j(a,e);if(c){if(c===v)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(n===l)throw n=y,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n=p;var u=f(t,r,e);if("normal"===u.type){if(n=e.done?y:s,u.arg===v)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n=y,e.method="throw",e.arg=u.arg)}}}(t,e,a),i}function f(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(P){return{type:"throw",arg:P}}}t.wrap=h;var l="suspendedStart",s="suspendedYield",p="executing",y="completed",v={};function d(){}function g(){}function m(){}var w={};w[i]=function(){return this};var L=Object.getPrototypeOf,x=L&&L(L(N([])));x&&x!==e&&n.call(x,i)&&(w=x);var b=m.prototype=d.prototype=Object.create(w);function E(t){["next","throw","return"].forEach(function(r){u(t,r,function(t){return this._invoke(r,t)})})}function _(t,r){var e;this._invoke=function(o,i){function a(){return new r(function(e,a){!function e(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var h=u.arg,l=h.value;return l&&"object"==typeof l&&n.call(l,"__await")?r.resolve(l.__await).then(function(t){e("next",t,a,c)},function(t){e("throw",t,a,c)}):r.resolve(l).then(function(t){h.value=t,a(h)},function(t){return e("throw",t,a,c)})}c(u.arg)}(o,i,e,a)})}return e=e?e.then(a,a):a()}}function j(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,j(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=f(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,v;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,v):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function O(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function k(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function G(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function N(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function e(){for(;++o<t.length;)if(n.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=r,e.done=!0,e};return a.next=a}}return{next:F}}function F(){return{value:r,done:!0}}return g.prototype=b.constructor=m,m.constructor=g,g.displayName=u(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===g||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,u(t,c,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},E(_.prototype),_.prototype[a]=function(){return this},t.AsyncIterator=_,t.async=function(r,e,n,o,i){void 0===i&&(i=Promise);var a=new _(h(r,e,n,o),i);return t.isGeneratorFunction(e)?a:a.next().then(function(t){return t.done?t.value:a.next()})},E(b),u(b,c,"Generator"),b[i]=function(){return this},b.toString=function(){return"[object Generator]"},t.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=N,G.prototype={constructor:G,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),h=n.call(a,"finallyLoc");if(u&&h){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!h)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),v},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),k(e),v}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;k(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:N(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),v}},t}("object"==typeof module?module.exports:{});try{regeneratorRuntime=r}catch(e){Function("r","regeneratorRuntime = r")(r)}
},{}],"OGUO":[function(require,module,exports) {
"use strict";function t(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var i=function i(){var s=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"normal";t(this,i),this.isPaused=!0,this.gameIsOver=!1,this.setDifficulty=function(t){s.difficulty=t},this.setIsPaused=function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];s.isPaused=t},this.difficulty=e};exports.default=i;
},{}],"LEGo":[function(require,module,exports) {
"use strict";function s(s,e){if(!(s instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var e=function e(){var i=this;s(this,e),this.observerList=[],this.subscribe=function(){var s;(s=i.observerList).push.apply(s,arguments)},this.unsubscribe=function(s){i.observerList.filter(function(e){return e!==s})},this.unsubscribeAll=function(){i.observerList=[]},this.notify=function(s){i.observerList.forEach(function(e){return e(s)})}},i=function i(){s(this,i),this.observer=new e,this.observerList=this.observer.observerList,this.subscribe=this.observer.subscribe,this.unsubscribe=this.observer.unsubscribe,this.unsubscribeAll=this.observer.unsubscribeAll,this.notify=this.observer.notify};exports.default=i;
},{}],"Nvqm":[function(require,module,exports) {
"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var t=require("./app"),n=function n(a){e(this,n),this.game=t.htmlElement("#game"),this.destination=a};exports.default=n;
},{"./app":"haqf"}],"yP2I":[function(require,module,exports) {
"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function o(t){var e=c();return function(){var n,r=f(t);if(e){var o=f(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return i(this,n)}}function i(e,n){return!n||"object"!==t(n)&&"function"!=typeof n?u(e):n}function u(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function c(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var s=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(exports,"__esModule",{value:!0});var a=require("./app"),l=s(require("./entity")),p=function(t){n(i,l.default);var r=o(i);function i(t,n){var o;return e(this,i),(o=r.call(this,t)).collection="bullets",o.w=3,o.h=6,o.destroy=function(){o.game.destroyEntity(u(o))},o.update=function(){o.destination.y+=o.props.speed,(o.destination.y>o.game.canvas.height||o.destination.y<0)&&o.game.destroyEntity(u(o))},o.draw=function(){o.game.ctx.fillStyle="white",o.game.ctx.fillRect(o.destination.x,o.destination.y,o.w,o.h)},o.props=n,a.playerDeath.subscribe(o.destroy),o}return i}();exports.default=p;
},{"./app":"haqf","./entity":"Nvqm"}],"ZF1Y":[function(require,module,exports) {
"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function o(t){var e=u();return function(){var n,r=f(t);if(e){var o=f(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return i(this,n)}}function i(e,n){return!n||"object"!==t(n)&&"function"!=typeof n?c(e):n}function c(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function u(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var s=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(exports,"__esModule",{value:!0});var a=require("./app"),l=s(require("./entity")),y=s(require("./bullet")),p=function(t){n(i,l.default);var r=o(i);function i(t){var n;return e(this,i),(n=r.call(this,t)).w=a.ship.w,n.h=a.ship.h,n.x=0,n.speed=1,n.collection="ships",n.cycleIdx=0,n.cycle=[{x:0,y:0},{x:0,y:120}],n.explode=function(){},n.isBottom=function(){var t=n.game.entity.ships,e={destination:{x:n.destination.x,y:n.destination.y+n.h+1},w:n.w,h:n.h};return t.every(function(t){return!a.isColliding(t,e)})},n.bulletFrequency=function(){switch(a.state.difficulty){case"easy":return a.randomInt(1,500)>499;case"hard":return a.randomInt(1,100)>99;default:case"normal":return a.randomInt(1,300)>299}},n.update=function(){(n.x<0||n.x>n.game.canvas.width/2)&&(n.speed=-n.speed),n.destination.x+=n.speed,n.x+=n.speed,n.isBottom()&&n.bulletFrequency()&&n.game.addEntity(new y.default({x:n.destination.x+n.w/2-a.bullet.w/2,y:n.destination.y+n.h},{speed:a.bullet.s,shooter:"invader"}))},n.draw=function(t){30===t&&(n.cycleIdx=(n.cycleIdx+1)%n.cycle.length),a.drawImg(n.game.ctx,n.cycle[n.cycleIdx],n.destination)},n}return i}();exports.default=p;
},{"./app":"haqf","./entity":"Nvqm","./bullet":"yP2I"}],"KDlq":[function(require,module,exports) {
module.exports="/space_invaders_typescript/shoot.061da15d.wav";
},{}],"tTEs":[function(require,module,exports) {
"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e,n,o,r,i,u){try{var s=t[i](u),c=s.value}catch(a){return void n(a)}s.done?e(c):Promise.resolve(c).then(o,r)}function n(t){return function(){var n=this,o=arguments;return new Promise(function(r,i){var u=t.apply(n,o);function s(t){e(u,r,i,s,c,"next",t)}function c(t){e(u,r,i,s,c,"throw",t)}s(void 0)})}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&i(t,e)}function i(t,e){return(i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function u(t){var e=a();return function(){var n,o=f(t);if(e){var r=f(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return s(this,n)}}function s(e,n){return!n||"object"!==t(n)&&"function"!=typeof n?c(e):n}function c(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function a(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var l=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(exports,"__esModule",{value:!0});var p=require("./app"),d=l(require("./entity")),y=l(require("./bullet")),h=function(t){r(i,d.default);var e=u(i);function i(t){var r;return o(this,i),(r=e.call(this,t)).keyboard=new w,r.onCoolDown=!1,r.scoreCount=0,r.w=p.ship.w,r.h=p.ship.h,r.collection="ships",r.shootSound=new Audio(require("../audio/shoot.wav")),r.explode=function(){console.log("explode animation")},r.destroy=function(t){var e,n=t.entities,o=document.querySelector("#lives-list");r.game.header.pause(),n.forEach(r.game.destroyEntity),p.playerDeath.unsubscribeAll(),null===(e=o.firstElementChild)||void 0===e||e.remove(),o.childElementCount<=0&&p.showGameOver()},r.scorePoints=n(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e=1;case 1:if(!(e<=10)){t.next=9;break}return r.scoreCount++,document.querySelector("#score-count").textContent=r.scoreCount.toString(),t.next=6,p.sleep(25);case 6:e++,t.next=1;break;case 9:case"end":return t.stop()}},t)})),r.update=function(){r.keyboard.pressing.ArrowLeft&&r.destination.x>0&&(r.destination.x-=5),r.keyboard.pressing.ArrowRight&&r.destination.x<r.game.canvas.width-p.ship.w&&(r.destination.x+=5),!r.onCoolDown&&r.keyboard.pressing[" "]&&(r.onCoolDown=!0,r.shootSound.play(),r.game.addEntity(new y.default({x:r.destination.x+p.ship.w/2-p.bullet.w/2,y:r.destination.y-p.bullet.h},{speed:-p.bullet.s,shooter:"player"})),p.sleep(200).then(function(){return r.onCoolDown=!1}))},r.draw=function(){p.drawImg(r.game.ctx,{x:0,y:240},r.destination)},p.playerDeath.subscribe(r.destroy),r}return i}();exports.default=h;var w=function t(){var e=this;o(this,t),this.pressing={},window.addEventListener("keydown",function(t){e.pressing[t.key]=!0}),window.addEventListener("keyup",function(t){e.pressing[t.key]=!1})};
},{"./app":"haqf","./entity":"Nvqm","./bullet":"yP2I","../audio/shoot.wav":"KDlq"}],"Ym77":[function(require,module,exports) {
"use strict";function t(n){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(n)}function n(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function e(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function r(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}function o(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&p(t,n)}function i(t){var n=s();return function(){var e,r=d(t);if(n){var o=d(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return c(this,e)}}function c(n,e){return!e||"object"!==t(e)&&"function"!=typeof e?u(n):e}function u(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function a(t){var n="function"==typeof Map?new Map:void 0;return(a=function(t){if(null===t||!f(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,e)}function e(){return l(t,arguments,d(this).constructor)}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),p(e,t)})(t)}function l(t,n,e){return(l=s()?Reflect.construct:function(t,n,e){var r=[null];r.push.apply(r,n);var o=new(Function.bind.apply(t,r));return e&&p(o,e.prototype),o}).apply(null,arguments)}function s(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}function f(t){return-1!==Function.toString.call(t).indexOf("[native code]")}function p(t,n){return(p=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function d(t){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}Object.defineProperty(exports,"__esModule",{value:!0});var y=require("./app"),v=function(t){o(c,a(HTMLElement));var e=i(c);function c(){var t;return n(this,c),(t=e.call(this)).pause=function(){t.controlBtns.contains(t.pauseBtn)&&(y.state.setIsPaused(!0),t.controlBtns.appendChild(t.playBtn),t.controlBtns.removeChild(t.pauseBtn))},t.play=function(){y.htmlElement("#lives-list").childElementCount&&t.controlBtns.contains(t.playBtn)&&(y.showCountDown(),t.controlBtns.appendChild(t.pauseBtn),t.controlBtns.removeChild(t.playBtn))},t.innerHTML='\n            <div id="control-btns"></div>\n            <div id="score">\n                <span>Score: </span><span id="score-count">0</span>\n            </div>\n            <div id="lives">\n                <div>Lives: </div>\n                <div id="lives-list">\n                    <div class="life"></div>\n                    <div class="life"></div>\n                    <div class="life"></div>\n                </div>\n            </div>\n        ',t.id="header",t.resetBtn=c.createBtn("RESET",function(){return y.loadGame()}),t.startMenuBtn=c.createBtn("MENU",function(){return y.loadStartMenu()}),t.playBtn=c.createBtn("PLAY",t.play),t.pauseBtn=c.createBtn("PAUSE",t.pause),t.controlBtns=t.querySelector("#control-btns"),t.controlBtns.append(t.startMenuBtn,t.resetBtn,t.playBtn),t}return r(c,[{key:"connectedCallback",value:function(){window.addEventListener("blur",this.pause)}},{key:"disconnectedCallback",value:function(){window.removeEventListener("blur",this.pause)}}]),c}();exports.default=v,v.createBtn=function(t,n){return Object.assign(document.createElement("button"),{onclick:n,textContent:t,className:"btn"})};
},{"./app":"haqf"}],"tnHS":[function(require,module,exports) {
"use strict";function t(n){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(n)}function n(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function e(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function r(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}function o(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&p(t,n)}function u(t){var n=a();return function(){var e,r=y(t);if(n){var o=y(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return i(this,e)}}function i(n,e){return!e||"object"!==t(e)&&"function"!=typeof e?c(n):e}function c(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function f(t){var n="function"==typeof Map?new Map:void 0;return(f=function(t){if(null===t||!s(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,e)}function e(){return l(t,arguments,y(this).constructor)}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),p(e,t)})(t)}function l(t,n,e){return(l=a()?Reflect.construct:function(t,n,e){var r=[null];r.push.apply(r,n);var o=new(Function.bind.apply(t,r));return e&&p(o,e.prototype),o}).apply(null,arguments)}function a(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}function s(t){return-1!==Function.toString.call(t).indexOf("[native code]")}function p(t,n){return(p=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function y(t){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.StartMenuBtn=void 0;var d=require("./app"),b=function(t){o(i,f(HTMLElement));var e=u(i);function i(){var t;return n(this,i),(t=e.call(this)).loadGame=function(){d.loadGame(t.difficulty)},t.difficulty=t.getAttribute("difficulty"),t.innerHTML='\n            <li class="menu__difficulty">\n                <a>'.concat(t.difficulty,"</a>\n            </li>\n        "),t}return r(i,[{key:"connectedCallback",value:function(){this.addEventListener("click",this.loadGame)}},{key:"disconnectedCallback",value:function(){this.removeEventListener("click",this.loadGame)}}]),i}();exports.StartMenuBtn=b;var m=function(t){o(r,f(HTMLElement));var e=u(r);function r(){var t;return n(this,r),(t=e.call(this)).innerHTML='\n            <div class="menu__gif"></div>\n            <h1 class="menu__title">Space Invaders</h1>\n            <div class="menu__difficulty-container">\n                <h3 class="difficulty__title">Select Difficulty</h3>\n                <ul class="menu__difficulty-list">\n                    <start-menu-button difficulty="easy"></start-menu-button>\n                    <start-menu-button difficulty="normal"></start-menu-button>\n                    <start-menu-button difficulty="hard"></start-menu-button>\n                </ul>\n            </div>\n        ',t.id="menu",t}return r}();exports.default=m;
},{"./app":"haqf"}],"haqf":[function(require,module,exports) {
"use strict";function t(t){return o(t)||r(t)||n(t)||e()}function e(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function n(t,e){if(t){if("string"==typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(t,e):void 0}}function r(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function o(t){if(Array.isArray(t))return i(t)}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function a(t,e,n,r,o,i,a){try{var u=t[i](a),c=u.value}catch(s){return void n(s)}u.done?e(c):Promise.resolve(c).then(r,o)}function u(t){return function(){var e=this,n=arguments;return new Promise(function(r,o){var i=t.apply(e,n);function u(t){a(i,r,o,u,c,"next",t)}function c(t){a(i,r,o,u,c,"throw",t)}u(void 0)})}}function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function l(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function f(t,e,n){return e&&l(t.prototype,e),n&&l(t,n),t}function p(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&w(t,e)}function d(t){var e=x();return function(){var n,r=g(t);if(e){var o=g(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return h(this,n)}}function h(t,e){return!e||"object"!==c(e)&&"function"!=typeof e?m(t):e}function m(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function y(t){var e="function"==typeof Map?new Map:void 0;return(y=function(t){if(null===t||!b(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return v(t,arguments,g(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),w(n,t)})(t)}function v(t,e,n){return(v=x()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&w(o,n.prototype),o}).apply(null,arguments)}function x(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}function b(t){return-1!==Function.toString.call(t).indexOf("[native code]")}function w(t,e){return(w=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function g(t){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var E=this&&this.__createBinding||(Object.create?function(t,e,n,r){void 0===r&&(r=n),Object.defineProperty(t,r,{enumerable:!0,get:function(){return e[n]}})}:function(t,e,n,r){void 0===r&&(r=n),t[r]=e[n]}),M=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),_=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)"default"!==n&&Object.prototype.hasOwnProperty.call(t,n)&&E(e,t,n);return M(e,t),e},O=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.Game=exports.isColliding=exports.showGameOver=exports.showCountDown=exports.loadStartMenu=exports.loadGame=exports.drawImg=exports.htmlElement=exports.randomInt=exports.sleep=exports.playerDeath=exports.state=exports.bullet=exports.ship=void 0,require("regenerator-runtime/runtime");var S=O(require("./state")),k=O(require("./observers")),C=O(require("./invader")),j=O(require("./player")),I=O(require("./header")),A=_(require("./start-menu"));exports.ship={spriteW:110,spriteH:110,w:30,h:30,rX:15,rY:15},exports.bullet={w:3,h:6,rY:3,rX:1.5,s:5},exports.sleep=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return new Promise(function(e){return setTimeout(e,t)})},exports.randomInt=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return Math.floor(Math.random()*(e-t+1)+t)},exports.htmlElement=function(t){return document.querySelector(t)};var P=Object.assign(new Image,{src:"https://i.postimg.cc/YC0dkRm8/sprite-sheet.png"});exports.drawImg=function(t,e,n){t.drawImage(P,e.x,e.y,exports.ship.spriteW,exports.ship.spriteH,n.x,n.y,exports.ship.w,exports.ship.h)},exports.loadGame=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:exports.state.difficulty;exports.state.setDifficulty(t),exports.state.setIsPaused(!0),exports.playerDeath=new k.default,document.body.innerHTML="<game-map />"},exports.loadStartMenu=function(){exports.state=new S.default,document.body.innerHTML="<start-menu />"},exports.showCountDown=function(){exports.htmlElement("#game").appendChild(new L)},exports.showGameOver=function(){exports.htmlElement("#game").appendChild(new q)},exports.isColliding=function(t,e){return!!(t!==e&&t.destination.x+t.w>e.destination.x&&t.destination.x<e.destination.x+e.w&&t.destination.y+t.h>e.destination.y&&t.destination.y<e.destination.y+e.h)};var q=function(t){p(n,y(HTMLElement));var e=d(n);function n(){var t;return s(this,n),(t=e.call(this)).id="modal",t.innerHTML='\n            <div id="modal__inner">\n                <h1 id="modal__title">GAME OVER!</h1>\n                <button id="play-again-btn" class="btn">\n                    PLAY AGAIN\n                </button>\n                <button id="main-menu-btn" class="btn">\n                    MAIN MENU\n                </button>\n            </div>\n        ',t.playAgainBtn=t.querySelector("#play-again-btn"),t.mainMenuBtn=t.querySelector("#main-menu-btn"),t}return f(n,[{key:"connectedCallback",value:function(){this.playAgainBtn.addEventListener("click",function(){return exports.loadGame()}),this.mainMenuBtn.addEventListener("click",function(){return exports.loadStartMenu()})}},{key:"disconnectedCallback",value:function(){this.playAgainBtn.removeEventListener("click",function(){return exports.loadGame()}),this.mainMenuBtn.removeEventListener("click",function(){return exports.loadStartMenu()})}}]),n}(),L=function(t){p(n,y(HTMLElement));var e=d(n);function n(){var t;return s(this,n),(t=e.call(this)).startCountDown=u(regeneratorRuntime.mark(function e(){var n,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n=exports.htmlElement("#game"),r=3;case 2:if(!(r>=1)){e.next=9;break}return n.querySelector("#modal h1").textContent=r.toString(),e.next=6,exports.sleep(1e3);case 6:r--,e.next=2;break;case 9:n.entity.ships.find(function(t){return t instanceof j.default})||n.addEntity(new j.default({x:n.canvas.width/2,y:n.canvas.height-exports.ship.h})),t.remove(),exports.state.setIsPaused(!1);case 12:case"end":return e.stop()}},e)})),t.id="modal",t.innerHTML='\n            <div id="modal__inner">\n                <h1 id="modal__title">3</h1>\n            </div>\n        ',t}return f(n,[{key:"connectedCallback",value:function(){this.startCountDown()}}]),n}(),T={w:Math.min(window.innerWidth-10,1200),h:Math.min(window.innerHeight-10,700)},D=function(e){p(r,y(HTMLElement));var n=d(r);function r(){var e;return s(this,r),(e=n.call(this)).reqId=0,e.frameCount=0,e.addEntity=function(t){e.entity[t.collection].push(t)},e.destroyEntity=function(t){var n=e.entity[t.collection].indexOf(t);-1!==n&&e.entity[t.collection].splice(n,1)},e.tick=function(){exports.state.isPaused?e.draw():(e.update(),e.draw()),e.reqId=window.requestAnimationFrame(e.tick)},e.getEntities=function(){return Object.values(e.entity).reduce(function(e,n){return[].concat(t(e),t(n))},[])},e.update=function(){e.checkCollisions(),e.getEntities().forEach(function(t){t.update()})},e.draw=function(){e.ctx.clearRect(0,0,e.canvas.width,e.canvas.height),e.frameCount=(e.frameCount+1)%60,e.getEntities().forEach(function(t){t.draw(e.frameCount)})},e.checkCollisions=function(){var t=e.entity,n=t.ships;t.bullets.forEach(function(t){n.forEach(function(n){exports.isColliding(n,t)&&(n instanceof C.default&&"player"===t.props.shooter&&([n,t].forEach(e.destroyEntity),n.explode()),n instanceof j.default&&"invader"===t.props.shooter&&exports.playerDeath.notify({entities:[n,t]}))})})},e.innerHTML='\n            <top-header></top-header>\n            <canvas\n                id="canvas"\n                width="'.concat(T.w,'"\n                height="').concat(T.h,'">\n            </canvas>\n        '),e.id="game",e.header=exports.htmlElement("#header"),e.canvas=exports.htmlElement("#canvas"),e.ctx=e.canvas.getContext("2d"),e.entity={bullets:[],explosions:[],ships:[].concat(t(r.createInvaders()),[new j.default({x:e.canvas.width/2,y:e.canvas.height-exports.ship.h})])},e}return f(r,[{key:"connectedCallback",value:function(){this.tick()}},{key:"disconnectedCallback",value:function(){window.cancelAnimationFrame(this.reqId)}}],[{key:"createInvaders",value:function(){for(var t=[],e=0;e<60;e++){var n=20+e%12*50,r=20+e%5*50;t.push(new C.default({x:n,y:r}))}return t}}]),r}();exports.Game=D;var R=[{tagName:"start-menu",component:A.default},{tagName:"start-menu-button",component:A.StartMenuBtn},{tagName:"game-map",component:D},{tagName:"game-over",component:q},{tagName:"top-header",component:I.default},{tagName:"count-down",component:L}];R.forEach(function(t){window.customElements.define(t.tagName,t.component)}),window.addEventListener("load",exports.loadStartMenu);
},{"regenerator-runtime/runtime":"QVnC","./state":"OGUO","./observers":"LEGo","./invader":"ZF1Y","./player":"tTEs","./header":"Ym77","./start-menu":"tnHS"}]},{},["haqf"], null)
//# sourceMappingURL=/space_invaders_typescript/app.3e09ead0.js.map