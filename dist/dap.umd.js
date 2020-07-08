!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t=t||self).DAPjs={})}(this,(function(t){"use strict";
/*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */var e=function(t,r){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,r)};function r(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}function n(t,e,r,n){return new(r||(r=Promise))((function(i,s){function o(t){try{u(n.next(t))}catch(t){s(t)}}function c(t){try{u(n.throw(t))}catch(t){s(t)}}function u(t){var e;t.done?i(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(o,c)}u((n=n.apply(t,e||[])).next())}))}function i(t,e){var r,n,i,s,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return s={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function c(s){return function(c){return function(s){if(r)throw new TypeError("Generator is already executing.");for(;o;)try{if(r=1,n&&(i=2&s[0]?n.return:s[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,s[1])).done)return i;switch(n=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,n=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!(i=o.trys,(i=i.length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){o=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){o.label=s[1];break}if(6===s[0]&&o.label<i[1]){o.label=i[1],i=s;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(s);break}i[2]&&o.ops.pop(),o.trys.pop();continue}s=e.call(t,o)}catch(t){s=[6,t],n=0}finally{r=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,c])}}}function s(){}function o(){o.init.call(this)}function c(t){return void 0===t._maxListeners?o.defaultMaxListeners:t._maxListeners}function u(t,e,r){if(e)t.call(r);else for(var n=t.length,i=w(t,n),s=0;s<n;++s)i[s].call(r)}function a(t,e,r,n){if(e)t.call(r,n);else for(var i=t.length,s=w(t,i),o=0;o<i;++o)s[o].call(r,n)}function h(t,e,r,n,i){if(e)t.call(r,n,i);else for(var s=t.length,o=w(t,s),c=0;c<s;++c)o[c].call(r,n,i)}function f(t,e,r,n,i,s){if(e)t.call(r,n,i,s);else for(var o=t.length,c=w(t,o),u=0;u<o;++u)c[u].call(r,n,i,s)}function l(t,e,r,n){if(e)t.apply(r,n);else for(var i=t.length,s=w(t,i),o=0;o<i;++o)s[o].apply(r,n)}function d(t,e,r,n){var i,o,u,a;if("function"!=typeof r)throw new TypeError('"listener" argument must be a function');if((o=t._events)?(o.newListener&&(t.emit("newListener",e,r.listener?r.listener:r),o=t._events),u=o[e]):(o=t._events=new s,t._eventsCount=0),u){if("function"==typeof u?u=o[e]=n?[r,u]:[u,r]:n?u.unshift(r):u.push(r),!u.warned&&(i=c(t))&&i>0&&u.length>i){u.warned=!0;var h=new Error("Possible EventEmitter memory leak detected. "+u.length+" "+e+" listeners added. Use emitter.setMaxListeners() to increase limit");h.name="MaxListenersExceededWarning",h.emitter=t,h.type=e,h.count=u.length,a=h,"function"==typeof console.warn?console.warn(a):console.log(a)}}else u=o[e]=r,++t._eventsCount;return t}function p(t,e,r){var n=!1;function i(){t.removeListener(e,i),n||(n=!0,r.apply(t,arguments))}return i.listener=r,i}function v(t){var e=this._events;if(e){var r=e[t];if("function"==typeof r)return 1;if(r)return r.length}return 0}function w(t,e){for(var r=new Array(e);e--;)r[e]=t[e];return r}s.prototype=Object.create(null),o.EventEmitter=o,o.usingDomains=!1,o.prototype.domain=void 0,o.prototype._events=void 0,o.prototype._maxListeners=void 0,o.defaultMaxListeners=10,o.init=function(){this.domain=null,o.usingDomains&&(void 0).active,this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=new s,this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},o.prototype.setMaxListeners=function(t){if("number"!=typeof t||t<0||isNaN(t))throw new TypeError('"n" argument must be a positive number');return this._maxListeners=t,this},o.prototype.getMaxListeners=function(){return c(this)},o.prototype.emit=function(t){var e,r,n,i,s,o,c,d="error"===t;if(o=this._events)d=d&&null==o.error;else if(!d)return!1;if(c=this.domain,d){if(e=arguments[1],!c){if(e instanceof Error)throw e;var p=new Error('Uncaught, unspecified "error" event. ('+e+")");throw p.context=e,p}return e||(e=new Error('Uncaught, unspecified "error" event')),e.domainEmitter=this,e.domain=c,e.domainThrown=!1,c.emit("error",e),!1}if(!(r=o[t]))return!1;var v="function"==typeof r;switch(n=arguments.length){case 1:u(r,v,this);break;case 2:a(r,v,this,arguments[1]);break;case 3:h(r,v,this,arguments[1],arguments[2]);break;case 4:f(r,v,this,arguments[1],arguments[2],arguments[3]);break;default:for(i=new Array(n-1),s=1;s<n;s++)i[s-1]=arguments[s];l(r,v,this,i)}return!0},o.prototype.addListener=function(t,e){return d(this,t,e,!1)},o.prototype.on=o.prototype.addListener,o.prototype.prependListener=function(t,e){return d(this,t,e,!0)},o.prototype.once=function(t,e){if("function"!=typeof e)throw new TypeError('"listener" argument must be a function');return this.on(t,p(this,t,e)),this},o.prototype.prependOnceListener=function(t,e){if("function"!=typeof e)throw new TypeError('"listener" argument must be a function');return this.prependListener(t,p(this,t,e)),this},o.prototype.removeListener=function(t,e){var r,n,i,o,c;if("function"!=typeof e)throw new TypeError('"listener" argument must be a function');if(!(n=this._events))return this;if(!(r=n[t]))return this;if(r===e||r.listener&&r.listener===e)0==--this._eventsCount?this._events=new s:(delete n[t],n.removeListener&&this.emit("removeListener",t,r.listener||e));else if("function"!=typeof r){for(i=-1,o=r.length;o-- >0;)if(r[o]===e||r[o].listener&&r[o].listener===e){c=r[o].listener,i=o;break}if(i<0)return this;if(1===r.length){if(r[0]=void 0,0==--this._eventsCount)return this._events=new s,this;delete n[t]}else!function(t,e){for(var r=e,n=r+1,i=t.length;n<i;r+=1,n+=1)t[r]=t[n];t.pop()}(r,i);n.removeListener&&this.emit("removeListener",t,c||e)}return this},o.prototype.removeAllListeners=function(t){var e,r;if(!(r=this._events))return this;if(!r.removeListener)return 0===arguments.length?(this._events=new s,this._eventsCount=0):r[t]&&(0==--this._eventsCount?this._events=new s:delete r[t]),this;if(0===arguments.length){for(var n,i=Object.keys(r),o=0;o<i.length;++o)"removeListener"!==(n=i[o])&&this.removeAllListeners(n);return this.removeAllListeners("removeListener"),this._events=new s,this._eventsCount=0,this}if("function"==typeof(e=r[t]))this.removeListener(t,e);else if(e)do{this.removeListener(t,e[e.length-1])}while(e[0]);return this},o.prototype.listeners=function(t){var e,r=this._events;return r&&(e=r[t])?"function"==typeof e?[e.listener||e]:function(t){for(var e=new Array(t.length),r=0;r<e.length;++r)e[r]=t[r].listener||t[r];return e}(e):[]},o.listenerCount=function(t,e){return"function"==typeof t.listenerCount?t.listenerCount(e):v.call(t,e)},o.prototype.listenerCount=v,o.prototype.eventNames=function(){return this._eventsCount>0?Reflect.ownKeys(this._events):[]};var y,m=function(){function t(){this.locked=!1}return t.prototype.lock=function(){return n(this,void 0,void 0,(function(){return i(this,(function(t){switch(t.label){case 0:return this.locked?[4,new Promise((function(t){return setTimeout(t,1)}))]:[3,2];case 1:return t.sent(),[3,0];case 2:return this.locked=!0,[2]}}))}))},t.prototype.unlock=function(){this.locked=!1},t}(),b=function(t){function e(e,r,n){void 0===r&&(r=0),void 0===n&&(n=1e7);var i=t.call(this)||this;i.transport=e,i.mode=r,i.clockFrequency=n,i.connected=!1,i.sendMutex=new m,i.blockSize=i.transport.packetSize-4-1;var s=i.transport.packetSize-2-1;return i.operationCount=Math.floor(s/5),i}return r(e,t),e.prototype.bufferSourceToUint8Array=function(t,e){if(!e)return new Uint8Array([t]);var r=void 0!==e.buffer?e.buffer:e,n=new Uint8Array(r.byteLength+1);return n.set([t]),n.set(new Uint8Array(r),1),n},e.prototype.selectProtocol=function(t){return n(this,void 0,void 0,(function(){var e;return i(this,(function(r){switch(r.label){case 0:return e=2===t?59196:59294,[4,this.swjSequence(new Uint8Array([255,255,255,255,255,255,255]))];case 1:return r.sent(),[4,this.swjSequence(new Uint16Array([e]))];case 2:return r.sent(),[4,this.swjSequence(new Uint8Array([255,255,255,255,255,255,255]))];case 3:return r.sent(),[4,this.swjSequence(new Uint8Array([0]))];case 4:return r.sent(),[2]}}))}))},e.prototype.send=function(t,e){return n(this,void 0,void 0,(function(){var r,n;return i(this,(function(i){switch(i.label){case 0:return r=this.bufferSourceToUint8Array(t,e),[4,this.sendMutex.lock()];case 1:i.sent(),i.label=2;case 2:return i.trys.push([2,,5,6]),[4,this.transport.write(r)];case 3:return i.sent(),[4,this.transport.read()];case 4:if((n=i.sent()).getUint8(0)!==t)throw new Error("Bad response for "+t+" -> "+n.getUint8(0));switch(t){case 3:case 8:case 9:case 10:case 17:case 18:case 19:case 29:case 23:case 24:case 26:case 21:case 22:case 4:if(0!==n.getUint8(1))throw new Error("Bad status for "+t+" -> "+n.getUint8(1))}return[2,n];case 5:return this.sendMutex.unlock(),[7];case 6:return[2]}}))}))},e.prototype.clearAbort=function(t){return void 0===t&&(t=30),n(this,void 0,void 0,(function(){return i(this,(function(e){switch(e.label){case 0:return[4,this.send(8,new Uint8Array([0,t]))];case 1:return e.sent(),[2]}}))}))},e.prototype.dapInfo=function(t){return n(this,void 0,void 0,(function(){var e,r,n,s;return i(this,(function(i){switch(i.label){case 0:return i.trys.push([0,2,,4]),[4,this.send(0,new Uint8Array([t]))];case 1:if(e=i.sent(),0===(r=e.getUint8(1)))return[2,""];switch(t){case 240:case 254:case 255:case 253:if(1===r)return[2,e.getUint8(2)];if(2===r)return[2,e.getUint16(2)];if(4===r)return[2,e.getUint32(2)]}return n=Array.prototype.slice.call(new Uint8Array(e.buffer,2,r)),[2,String.fromCharCode.apply(null,n)];case 2:return s=i.sent(),[4,this.clearAbort()];case 3:throw i.sent(),s;case 4:return[2]}}))}))},e.prototype.swjSequence=function(t){return n(this,void 0,void 0,(function(){var e,r,n;return i(this,(function(i){switch(i.label){case 0:e=8*t.byteLength,r=this.bufferSourceToUint8Array(e,t),i.label=1;case 1:return i.trys.push([1,3,,5]),[4,this.send(18,r)];case 2:return i.sent(),[3,5];case 3:return n=i.sent(),[4,this.clearAbort()];case 4:throw i.sent(),n;case 5:return[2]}}))}))},e.prototype.configureTransfer=function(t,e,r){return n(this,void 0,void 0,(function(){var n,s,o;return i(this,(function(i){switch(i.label){case 0:n=new Uint8Array(5),(s=new DataView(n.buffer)).setUint8(0,t),s.setUint16(1,e,!0),s.setUint16(3,r,!0),i.label=1;case 1:return i.trys.push([1,3,,5]),[4,this.send(4,n)];case 2:return i.sent(),[3,5];case 3:return o=i.sent(),[4,this.clearAbort()];case 4:throw i.sent(),o;case 5:return[2]}}))}))},e.prototype.connect=function(){return n(this,void 0,void 0,(function(){var t,e,r;return i(this,(function(n){switch(n.label){case 0:return!0===this.connected?[2]:[4,this.transport.open()];case 1:n.sent(),n.label=2;case 2:return n.trys.push([2,5,,8]),[4,this.send(17,new Uint32Array([this.clockFrequency]))];case 3:return n.sent(),[4,this.send(2,new Uint8Array([this.mode]))];case 4:if(0===(t=n.sent()).getUint8(1)||0!==this.mode&&t.getUint8(1)!==this.mode)throw new Error("Mode not enabled.");return[3,8];case 5:return e=n.sent(),[4,this.clearAbort()];case 6:return n.sent(),[4,this.transport.close()];case 7:throw n.sent(),e;case 8:return n.trys.push([8,11,,13]),[4,this.configureTransfer(0,100,0)];case 9:return n.sent(),[4,this.selectProtocol(1)];case 10:return n.sent(),[3,13];case 11:return r=n.sent(),[4,this.transport.close()];case 12:throw n.sent(),r;case 13:return this.connected=!0,[2]}}))}))},e.prototype.disconnect=function(){return n(this,void 0,void 0,(function(){var t;return i(this,(function(e){switch(e.label){case 0:if(!1===this.connected)return[2];e.label=1;case 1:return e.trys.push([1,3,,5]),[4,this.send(3)];case 2:return e.sent(),[3,5];case 3:return t=e.sent(),[4,this.clearAbort()];case 4:throw e.sent(),t;case 5:return[4,this.transport.close()];case 6:return e.sent(),this.connected=!1,[2]}}))}))},e.prototype.reconnect=function(){return n(this,void 0,void 0,(function(){return i(this,(function(t){switch(t.label){case 0:return[4,this.disconnect()];case 1:return t.sent(),[4,new Promise((function(t){return setTimeout(t,100)}))];case 2:return t.sent(),[4,this.connect()];case 3:return t.sent(),[2]}}))}))},e.prototype.reset=function(){return n(this,void 0,void 0,(function(){var t;return i(this,(function(e){switch(e.label){case 0:return e.trys.push([0,2,,4]),[4,this.send(10)];case 1:return[2,1===e.sent().getUint8(2)];case 2:return t=e.sent(),[4,this.clearAbort()];case 3:throw e.sent(),t;case 4:return[2]}}))}))},e.prototype.transfer=function(t,e,r,s){return void 0===e&&(e=2),void 0===r&&(r=0),void 0===s&&(s=0),n(this,void 0,void 0,(function(){var n,o,c,u,a,h,f;return i(this,(function(i){switch(i.label){case 0:n="number"==typeof t?[{port:t,mode:e,register:r,value:s}]:t,o=new Uint8Array(2+5*n.length),(c=new DataView(o.buffer)).setUint8(0,0),c.setUint8(1,n.length),n.forEach((function(t,e){var r=2+5*e;c.setUint8(r,t.port|t.mode|t.register),c.setUint32(r+1,t.value||0,!0)})),i.label=1;case 1:return i.trys.push([1,3,,5]),[4,this.send(5,o)];case 2:if((u=i.sent()).getUint8(1)!==n.length)throw new Error("Transfer count mismatch");if(2===(a=u.getUint8(2)))throw new Error("Transfer response WAIT");if(4===a)throw new Error("Transfer response FAULT");if(8===a)throw new Error("Transfer response PROTOCOL_ERROR");if(16===a)throw new Error("Transfer response VALUE_MISMATCH");if(7===a)throw new Error("Transfer response NO_ACK");return"number"==typeof t?[2,u.getUint32(3,!0)]:(h=4*n.length,[2,new Uint32Array(u.buffer.slice(3,3+h))]);case 3:return f=i.sent(),[4,this.clearAbort()];case 4:throw i.sent(),f;case 5:return[2]}}))}))},e.prototype.transferBlock=function(t,e,r){return n(this,void 0,void 0,(function(){var n,s,o,c,u,a,h,f;return i(this,(function(i){switch(i.label){case 0:o=4,"number"==typeof r?(n=r,s=2):(n=r.length,s=0,o+=r.byteLength),c=new Uint8Array(o),(u=new DataView(c.buffer)).setUint8(0,0),u.setUint16(1,n,!0),u.setUint8(3,t|s|e),"number"!=typeof r&&r.forEach((function(t,e){var r=4+4*e;u.setUint32(r,t,!0)})),i.label=1;case 1:return i.trys.push([1,3,,5]),[4,this.send(6,u)];case 2:if((a=i.sent()).getUint16(1,!0)!==n)throw new Error("Transfer count mismatch");if(2===(h=a.getUint8(3)))throw new Error("Transfer response WAIT");if(4===h)throw new Error("Transfer response FAULT");if(8===h)throw new Error("Transfer response PROTOCOL_ERROR");if(7===h)throw new Error("Transfer response NO_ACK");return"number"==typeof r?[2,new Uint32Array(a.buffer.slice(4,4+4*n))]:[3,5];case 3:return f=i.sent(),[4,this.clearAbort()];case 4:throw i.sent(),f;case 5:return[2,void 0]}}))}))},e}(o),g=/[\xc0-\xff][\x80-\xbf]*$/g,A=/[\xc0-\xff][\x80-\xbf]*/g,C=function(){function t(){}return t.prototype.decode=function(t){var e=Array.prototype.slice.call(new Uint8Array(t)),r=String.fromCodePoint.apply(void 0,e);this.partialChar&&(r=""+this.partialChar+r,this.partialChar=void 0);var n=r.match(g);if(n){var i=n[0].length;this.partialChar=r.slice(-i),r=r.slice(0,-i)}return r.replace(A,this.decoderReplacer)},t.prototype.decoderReplacer=function(t){var e=t.codePointAt(0)<<24,r=Math.clz32(~e),n=0,i=t.length,s="";if(r<5&&i>=r){for(e=e<<r>>>24+r,n=1;n<r;n+=1)e=e<<6|63&t.codePointAt(n);e<=65535?s+=String.fromCodePoint(e):e<=1114111?(e-=65536,s+=String.fromCodePoint(55296+(e>>10),56320+(1023&e))):n=0}for(;n<i;n+=1)s+="�";return s},t}(),E=new C,U=function(t){function e(r,s,o){void 0===s&&(s=0),void 0===o&&(o=1e7);var c=t.call(this,r,s,o)||this;return c.serialPolling=!1,c.serialListeners=!1,c.on("newListener",(function(t){return n(c,void 0,void 0,(function(){return i(this,(function(r){return t===e.EVENT_SERIAL_DATA&&0===this.listenerCount(t)&&(this.serialListeners=!0),[2]}))}))})),c.on("removeListener",(function(t){t===e.EVENT_SERIAL_DATA&&(0===c.listenerCount(t)&&(c.serialListeners=!1))})),c}return r(e,t),e.prototype.isBufferBinary=function(t){for(var e=Array.prototype.slice.call(new Uint16Array(t,0,50)),r=String.fromCharCode.apply(null,e),n=0;n<r.length;n++){var i=r.charCodeAt(n);if(65533===i||i<=8)return!0}return!1},e.prototype.writeBuffer=function(t,r,s){return void 0===s&&(s=0),n(this,void 0,void 0,(function(){var n,o,c,u;return i(this,(function(i){switch(i.label){case 0:n=Math.min(t.byteLength,s+r),o=t.slice(s,n),(c=new Uint8Array(o.byteLength+1)).set([o.byteLength]),c.set(new Uint8Array(o),1),i.label=1;case 1:return i.trys.push([1,3,,5]),[4,this.send(140,c)];case 2:return i.sent(),[3,5];case 3:return u=i.sent(),[4,this.clearAbort()];case 4:throw i.sent(),u;case 5:return this.emit(e.EVENT_PROGRESS,s/t.byteLength),n<t.byteLength?[2,this.writeBuffer(t,r,n)]:[2]}}))}))},e.prototype.flash=function(t,r){return void 0===r&&(r=62),n(this,void 0,void 0,(function(){var n,s,o;return i(this,(function(i){switch(i.label){case 0:n=function(t){return void 0!==t.buffer}(t)?t.buffer:t,s=this.isBufferBinary(n)?0:1,i.label=1;case 1:return i.trys.push([1,6,,8]),[4,this.send(138,new Uint32Array([s]))];case 2:if(0!==i.sent().getUint8(1))throw new Error("Flash error");return[4,this.writeBuffer(n,r)];case 3:return i.sent(),this.emit(e.EVENT_PROGRESS,1),[4,this.send(139)];case 4:if(0!==i.sent().getUint8(1))throw new Error("Flash error");return[4,this.send(137)];case 5:return i.sent(),[3,8];case 6:return o=i.sent(),[4,this.clearAbort()];case 7:throw i.sent(),o;case 8:return[2]}}))}))},e.prototype.getSerialBaudrate=function(){return n(this,void 0,void 0,(function(){var t;return i(this,(function(e){switch(e.label){case 0:return e.trys.push([0,2,,4]),[4,this.send(129)];case 1:return[2,e.sent().getUint32(1,!0)];case 2:return t=e.sent(),[4,this.clearAbort()];case 3:throw e.sent(),t;case 4:return[2]}}))}))},e.prototype.setSerialBaudrate=function(t){return void 0===t&&(t=9600),n(this,void 0,void 0,(function(){var e;return i(this,(function(r){switch(r.label){case 0:return r.trys.push([0,2,,4]),[4,this.send(130,new Uint32Array([t]))];case 1:return r.sent(),[3,4];case 2:return e=r.sent(),[4,this.clearAbort()];case 3:throw r.sent(),e;case 4:return[2]}}))}))},e.prototype.serialWrite=function(t){return n(this,void 0,void 0,(function(){var e,r;return i(this,(function(n){switch(n.label){case 0:(e=t.split("").map((function(t){return t.charCodeAt(0)}))).unshift(e.length),n.label=1;case 1:return n.trys.push([1,3,,5]),[4,this.send(132,new Uint8Array(e).buffer)];case 2:return n.sent(),[3,5];case 3:return r=n.sent(),[4,this.clearAbort()];case 4:throw n.sent(),r;case 5:return[2]}}))}))},e.prototype.serialRead=function(){return n(this,void 0,void 0,(function(){var t,e,r;return i(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,4]),[4,this.send(131)];case 1:return 0===(t=n.sent()).byteLength||(131!==t.getUint8(0)||0===(e=t.getUint8(1)))?[2,void 0]:(2,[2,t.buffer.slice(2,2+e)]);case 2:return r=n.sent(),[4,this.clearAbort()];case 3:throw n.sent(),r;case 4:return[2]}}))}))},e.prototype.startSerialRead=function(t,r){return void 0===t&&(t=100),void 0===r&&(r=!0),n(this,void 0,void 0,(function(){var n,s,o;return i(this,(function(i){switch(i.label){case 0:this.serialPolling=!0,i.label=1;case 1:return this.serialPolling?this.serialListeners?(n=this.connected,!1!==this.connected||!0!==r?[3,3]:[4,this.connect()]):[3,7]:[3,9];case 2:i.sent(),i.label=3;case 3:return[4,this.serialRead()];case 4:return s=i.sent(),!1!==n||!0!==r?[3,6]:[4,this.disconnect()];case 5:i.sent(),i.label=6;case 6:void 0!==s&&(o=E.decode(s),this.emit(e.EVENT_SERIAL_DATA,o)),i.label=7;case 7:return[4,new Promise((function(e){return setTimeout(e,t)}))];case 8:return i.sent(),[3,1];case 9:return[2]}}))}))},e.prototype.stopSerialRead=function(){this.serialPolling=!1},e.EVENT_PROGRESS="progress",e.EVENT_SERIAL_DATA="serial",e}(b),P=function(){function t(t,e,r){void 0===e&&(e=0),void 0===r&&(r=1e7);this.proxy=void 0!==t.open?new b(t,e,r):t}return t.prototype.waitDelay=function(t,e,r){return void 0===e&&(e=0),void 0===r&&(r=100),n(this,void 0,void 0,(function(){var n;return i(this,(function(i){switch(i.label){case 0:n=!0,e>0&&setTimeout((function(){if(n)throw n=!1,new Error("Wait timed out")}),e),i.label=1;case 1:return n?[4,t()]:[3,5];case 2:return!0===i.sent()?(n=!1,[2]):r>0?[4,new Promise((function(t){return setTimeout(t,e)}))]:[3,4];case 3:i.sent(),i.label=4;case 4:return[3,1];case 5:return[2]}}))}))},t.prototype.concatTypedArray=function(t){if(1===t.length)return t[0];for(var e=0,r=0,n=t;r<n.length;r++){e+=n[r].length}for(var i=new Uint32Array(e),s=0,o=0;s<t.length;s++)i.set(t[s],o),o+=t[s].length;return i},t.prototype.readDPCommand=function(t){return[{mode:2,port:0,register:t}]},t.prototype.writeDPCommand=function(t,e){if(8===t){if(e===this.selectedAddress)return[];this.selectedAddress=e}return[{mode:0,port:0,register:t,value:e}]},t.prototype.readAPCommand=function(t){var e=4278190080&t|240&t;return this.writeDPCommand(8,e).concat({mode:2,port:1,register:t})},t.prototype.writeAPCommand=function(t,e){if(0===t){if(e===this.cswValue)return[];this.cswValue=e}var r=4278190080&t|240&t;return this.writeDPCommand(8,r).concat({mode:0,port:1,register:t,value:e})},t.prototype.readMem16Command=function(t){return this.writeAPCommand(0,587202641).concat(this.writeAPCommand(4,t)).concat(this.readAPCommand(12))},t.prototype.writeMem16Command=function(t,e){return this.writeAPCommand(0,587202641).concat(this.writeAPCommand(4,t)).concat(this.writeAPCommand(12,e))},t.prototype.readMem32Command=function(t){return this.writeAPCommand(0,587202642).concat(this.writeAPCommand(4,t)).concat(this.readAPCommand(12))},t.prototype.writeMem32Command=function(t,e){return this.writeAPCommand(0,587202642).concat(this.writeAPCommand(4,t)).concat(this.writeAPCommand(12,e))},t.prototype.transferSequence=function(t){return n(this,void 0,void 0,(function(){var e,r,n,s;return i(this,(function(i){switch(i.label){case 0:e=(e=[]).concat.apply(e,t),r=[],i.label=1;case 1:return e.length?(n=e.splice(0,this.proxy.operationCount),[4,this.proxy.transfer(n)]):[3,3];case 2:return s=i.sent(),r.push(s),[3,1];case 3:return[2,this.concatTypedArray(r)]}}))}))},t.prototype.connect=function(){return n(this,void 0,void 0,(function(){var t,e=this;return i(this,(function(r){switch(r.label){case 0:return t=-1610612736,[4,this.proxy.connect()];case 1:return r.sent(),[4,this.readDP(0)];case 2:return r.sent(),[4,this.transferSequence([this.writeDPCommand(0,4),this.writeDPCommand(8,0),this.writeDPCommand(4,1342177280)])];case 3:return r.sent(),[4,this.waitDelay((function(){return n(e,void 0,void 0,(function(){return i(this,(function(e){switch(e.label){case 0:return[4,this.readDP(4)];case 1:return[2,(e.sent()&t)===t]}}))}))}))];case 4:return r.sent(),[2]}}))}))},t.prototype.disconnect=function(){return this.proxy.disconnect()},t.prototype.reconnect=function(){return n(this,void 0,void 0,(function(){return i(this,(function(t){switch(t.label){case 0:return[4,this.disconnect()];case 1:return t.sent(),[4,new Promise((function(t){return setTimeout(t,100)}))];case 2:return t.sent(),[4,this.connect()];case 3:return t.sent(),[2]}}))}))},t.prototype.reset=function(){return this.proxy.reset()},t.prototype.readDP=function(t){return n(this,void 0,void 0,(function(){return i(this,(function(e){switch(e.label){case 0:return[4,this.proxy.transfer(this.readDPCommand(t))];case 1:return[2,e.sent()[0]]}}))}))},t.prototype.writeDP=function(t,e){return n(this,void 0,void 0,(function(){return i(this,(function(r){switch(r.label){case 0:return[4,this.proxy.transfer(this.writeDPCommand(t,e))];case 1:return r.sent(),[2]}}))}))},t.prototype.readAP=function(t){return n(this,void 0,void 0,(function(){return i(this,(function(e){switch(e.label){case 0:return[4,this.proxy.transfer(this.readAPCommand(t))];case 1:return[2,e.sent()[0]]}}))}))},t.prototype.writeAP=function(t,e){return n(this,void 0,void 0,(function(){return i(this,(function(r){switch(r.label){case 0:return[4,this.proxy.transfer(this.writeAPCommand(t,e))];case 1:return r.sent(),[2]}}))}))},t.prototype.readMem16=function(t){return n(this,void 0,void 0,(function(){return i(this,(function(e){switch(e.label){case 0:return[4,this.proxy.transfer(this.readMem16Command(t))];case 1:return[2,e.sent()[0]]}}))}))},t.prototype.writeMem16=function(t,e){return n(this,void 0,void 0,(function(){return i(this,(function(r){switch(r.label){case 0:return e<<=(2&t)<<3,[4,this.proxy.transfer(this.writeMem16Command(t,e))];case 1:return r.sent(),[2]}}))}))},t.prototype.readMem32=function(t){return n(this,void 0,void 0,(function(){return i(this,(function(e){switch(e.label){case 0:return[4,this.proxy.transfer(this.readMem32Command(t))];case 1:return[2,e.sent()[0]]}}))}))},t.prototype.writeMem32=function(t,e){return n(this,void 0,void 0,(function(){return i(this,(function(r){switch(r.label){case 0:return[4,this.proxy.transfer(this.writeMem32Command(t,e))];case 1:return r.sent(),[2]}}))}))},t.prototype.readBlock=function(t,e){return n(this,void 0,void 0,(function(){var r,n,s,o;return i(this,(function(i){switch(i.label){case 0:return[4,this.transferSequence([this.writeAPCommand(0,587202642),this.writeAPCommand(4,t)])];case 1:i.sent(),r=[],n=e,i.label=2;case 2:return n>0?(s=Math.min(n,Math.floor(this.proxy.blockSize/4)),[4,this.proxy.transferBlock(1,12,s)]):[3,4];case 3:return o=i.sent(),r.push(o),n-=s,[3,2];case 4:return[2,this.concatTypedArray(r)]}}))}))},t.prototype.writeBlock=function(t,e){return n(this,void 0,void 0,(function(){var r,n;return i(this,(function(i){switch(i.label){case 0:return[4,this.transferSequence([this.writeAPCommand(0,587202642),this.writeAPCommand(4,t)])];case 1:i.sent(),r=0,i.label=2;case 2:return r<e.length?(n=e.slice(r,r+Math.floor(this.proxy.blockSize/4)),[4,this.proxy.transferBlock(1,12,n)]):[3,4];case 3:return i.sent(),r+=Math.floor(this.proxy.blockSize/4),[3,2];case 4:return[2]}}))}))},t}(),T=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),e.prototype.enableDebug=function(){return this.writeMem32(3758157296,-1604386815)},e.prototype.readCoreRegisterCommand=function(t){return this.writeMem32Command(3758157300,t).concat(this.readMem32Command(3758157296)).concat(this.readMem32Command(3758157304))},e.prototype.writeCoreRegisterCommand=function(t,e){return this.writeMem32Command(3758157304,e).concat(this.writeMem32Command(3758157300,65536|t))},e.prototype.getState=function(){return n(this,void 0,void 0,(function(){var t,e,r;return i(this,(function(n){switch(n.label){case 0:return[4,this.readMem32(3758157296)];case 1:return t=n.sent(),e=524288&t?1:262144&t?2:131072&t?3:4,33554432&t?[4,this.readMem32(3758157296)]:[3,3];case 2:return 33554432&(r=n.sent())&&!(16777216&r)?[2,0]:[2,e];case 3:return[2,e];case 4:return[2]}}))}))},e.prototype.isHalted=function(){return n(this,void 0,void 0,(function(){return i(this,(function(t){switch(t.label){case 0:return[4,this.readMem32(3758157296)];case 1:return[2,!!(131072&t.sent())]}}))}))},e.prototype.halt=function(t,e){return void 0===t&&(t=!0),void 0===e&&(e=0),n(this,void 0,void 0,(function(){var r=this;return i(this,(function(n){switch(n.label){case 0:return[4,this.isHalted()];case 1:return n.sent()?[2]:[4,this.writeMem32(3758157296,-1604386813)];case 2:return n.sent(),t?[2,this.waitDelay((function(){return r.isHalted()}),e)]:[2]}}))}))},e.prototype.resume=function(t,e){return void 0===t&&(t=!0),void 0===e&&(e=0),n(this,void 0,void 0,(function(){var r=this;return i(this,(function(s){switch(s.label){case 0:return[4,this.isHalted()];case 1:return s.sent()?[4,this.writeMem32(3758157104,7)]:[2];case 2:return s.sent(),[4,this.enableDebug()];case 3:return s.sent(),t?[2,this.waitDelay((function(){return n(r,void 0,void 0,(function(){return i(this,(function(t){switch(t.label){case 0:return[4,this.isHalted()];case 1:return[2,!t.sent()]}}))}))}),e)]:[2]}}))}))},e.prototype.readCoreRegister=function(t){return n(this,void 0,void 0,(function(){var e;return i(this,(function(r){switch(r.label){case 0:return[4,this.transferSequence([this.writeMem32Command(3758157300,t),this.readMem32Command(3758157296)])];case 1:if(e=r.sent(),!(65536&e[0]))throw new Error("Register not ready");return[2,this.readMem32(3758157304)]}}))}))},e.prototype.readCoreRegisters=function(t){return n(this,void 0,void 0,(function(){var e,r,n,s,o;return i(this,(function(i){switch(i.label){case 0:e=[],r=0,n=t,i.label=1;case 1:return r<n.length?(s=n[r],[4,this.readCoreRegister(s)]):[3,4];case 2:o=i.sent(),e.push(o),i.label=3;case 3:return r++,[3,1];case 4:return[2,e]}}))}))},e.prototype.writeCoreRegister=function(t,e){return n(this,void 0,void 0,(function(){var r;return i(this,(function(n){switch(n.label){case 0:return[4,this.transferSequence([this.writeMem32Command(3758157304,e),this.writeMem32Command(3758157300,65536|t),this.readMem32Command(3758157296)])];case 1:if(r=n.sent(),!(65536&r[0]))throw new Error("Register not ready");return[2]}}))}))},e.prototype.execute=function(t,e,r,s,o){void 0===o&&(o=t+1);for(var c=[],u=5;u<arguments.length;u++)c[u-5]=arguments[u];return n(this,void 0,void 0,(function(){var n,u,a,h=this;return i(this,(function(i){switch(i.label){case 0:for(48682!==e[e.length-1]&&((n=new Uint32Array(e.length+1)).set(e),n.set([48682],e.length-1),e=n),u=[this.writeCoreRegisterCommand(13,r),this.writeCoreRegisterCommand(15,s),this.writeCoreRegisterCommand(14,o)],a=0;a<Math.min(c.length,12);a++)u.push(this.writeCoreRegisterCommand(a,c[a]));return u.push(this.writeCoreRegisterCommand(16,16777216)),[4,this.halt()];case 1:return i.sent(),[4,this.transferSequence(u)];case 2:return i.sent(),[4,this.writeBlock(t,e)];case 3:return i.sent(),[4,this.resume(!1)];case 4:return i.sent(),[4,this.waitDelay((function(){return h.isHalted()}),1e4)];case 5:return i.sent(),[2]}}))}))},e.prototype.softReset=function(){return n(this,void 0,void 0,(function(){return i(this,(function(t){switch(t.label){case 0:return[4,this.writeMem32(3758157308,0)];case 1:return t.sent(),[2,this.writeMem32(3758157068,100270084)]}}))}))},e.prototype.setTargetResetState=function(t){return void 0===t&&(t=!0),n(this,void 0,void 0,(function(){var e;return i(this,(function(r){switch(r.label){case 0:return[4,this.writeMem32(3758157308,1)];case 1:return r.sent(),!0!==t?[3,3]:[4,this.reset()];case 2:return r.sent(),[3,6];case 3:return[4,this.readMem32(3758157068)];case 4:return e=r.sent(),[4,this.writeMem32(3758157068,100270084|e)];case 5:r.sent(),r.label=6;case 6:return[4,this.writeMem32(3758157308,0)];case 7:return r.sent(),[2]}}))}))},e}(P);(y=t.FPBCtrlMask||(t.FPBCtrlMask={}))[y.ENABLE=1]="ENABLE",y[y.KEY=2]="KEY";var L=function(){function t(t){this.device=t,this.os="browser",this.packetSize=64}return t.prototype.open=function(){return n(this,void 0,void 0,(function(){return i(this,(function(t){return[2]}))}))},t.prototype.close=function(){return n(this,void 0,void 0,(function(){return i(this,(function(t){return this.device.close(),[2]}))}))},t.prototype.read=function(){return n(this,void 0,void 0,(function(){var t,e,r=this;return i(this,(function(n){switch(n.label){case 0:return[4,new Promise((function(t,e){r.device.read((function(r,n){if(r)return e(new Error(r));t(n)}))}))];case 1:return t=n.sent(),e=new Uint8Array(t).buffer,[2,new DataView(e)]}}))}))},t.prototype.write=function(t){return n(this,void 0,void 0,(function(){var e,r;return i(this,(function(n){for(e=function(t){return void 0!==t.buffer}(t)?t.buffer:t,r=Array.prototype.slice.call(new Uint8Array(e));r.length<this.packetSize;)r.push(0);if("win32"===this.os&&r.unshift(0),this.device.write(r)!==r.length)throw new Error("Incorrect bytecount written");return[2]}))}))},t}(),_=function(){function t(t,e,r,n){void 0===e&&(e=255),void 0===r&&(r=1),void 0===n&&(n=!1),this.device=t,this.interfaceClass=e,this.configuration=r,this.alwaysControlTransfer=n,this.packetSize=64}return t.prototype.bufferToDataView=function(t){var e=new Uint8Array(t).buffer;return new DataView(e)},t.prototype.isView=function(t){return void 0!==t.buffer},t.prototype.bufferSourceToBuffer=function(t){var e=this.isView(t)?t.buffer:t;return Buffer.from(e)},t.prototype.extendBuffer=function(t,e){var r=this.isView(t)?t.buffer:t,n=Math.min(r.byteLength,e),i=new Uint8Array(n);return i.set(new Uint8Array(r)),i},t.prototype.open=function(){return n(this,void 0,void 0,(function(){var t,e,r,n,s,o,c=this;return i(this,(function(i){switch(i.label){case 0:return this.device.open(),[4,new Promise((function(t,e){c.device.setConfiguration(c.configuration,(function(r){r?e(new Error(r)):t()}))}))];case 1:if(i.sent(),!(t=this.device.interfaces.filter((function(t){return t.descriptor.bInterfaceClass===c.interfaceClass}))).length)throw new Error("No valid interfaces found.");if((e=t.find((function(t){return t.endpoints.length>0})))||(e=t[0]),this.interfaceNumber=e.interfaceNumber,!this.alwaysControlTransfer){for(r=e.endpoints,this.endpointIn=void 0,this.endpointOut=void 0,n=0,s=r;n<s.length;n++)"in"===(o=s[n]).direction?this.endpointIn=o:this.endpointOut=o;if(this.endpointIn||this.endpointOut)try{e.claim()}catch(t){this.endpointIn=void 0,this.endpointOut=void 0}}return[2]}}))}))},t.prototype.close=function(){return n(this,void 0,void 0,(function(){return i(this,(function(t){return this.device.close(),[2]}))}))},t.prototype.read=function(){return n(this,void 0,void 0,(function(){var t,e=this;return i(this,(function(r){switch(r.label){case 0:if(void 0===this.interfaceNumber)throw new Error("No device opened");return[4,new Promise((function(t,r){e.endpointIn?e.endpointIn.transfer(e.packetSize,(function(e,n){e?r(e):t(n)})):e.device.controlTransfer(161,1,256,e.interfaceNumber,e.packetSize,(function(e,n){e?r(e):n?t(n):r(new Error("No buffer read"))}))}))];case 1:return t=r.sent(),[2,this.bufferToDataView(t)]}}))}))},t.prototype.write=function(t){return n(this,void 0,void 0,(function(){var e,r,n=this;return i(this,(function(i){switch(i.label){case 0:if(void 0===this.interfaceNumber)throw new Error("No device opened");return e=this.extendBuffer(t,this.packetSize),r=this.bufferSourceToBuffer(e),[4,new Promise((function(t,e){n.endpointOut?n.endpointOut.transfer(r,(function(r){if(r)return e(r);t()})):n.device.controlTransfer(33,9,512,n.interfaceNumber,r,(function(r){if(r)return e(r);t()}))}))];case 1:return i.sent(),[2]}}))}))},t}(),M=function(){function t(t,e,r,n){void 0===e&&(e=255),void 0===r&&(r=1),void 0===n&&(n=!1),this.device=t,this.interfaceClass=e,this.configuration=r,this.alwaysControlTransfer=n,this.packetSize=64}return t.prototype.extendBuffer=function(t,e){var r=void 0!==t.buffer?t.buffer:t,n=Math.min(r.byteLength,e),i=new Uint8Array(n);return i.set(new Uint8Array(r)),i},t.prototype.open=function(){return n(this,void 0,void 0,(function(){var t,e,r,n,s,o,c=this;return i(this,(function(i){switch(i.label){case 0:return[4,this.device.open()];case 1:return i.sent(),[4,this.device.selectConfiguration(this.configuration)];case 2:if(i.sent(),!(t=this.device.configuration.interfaces.filter((function(t){return t.alternates[0].interfaceClass===c.interfaceClass}))).length)throw new Error("No valid interfaces found.");if((e=t.find((function(t){return t.alternates[0].endpoints.length>0})))||(e=t[0]),this.interfaceNumber=e.interfaceNumber,!this.alwaysControlTransfer)for(r=e.alternates[0].endpoints,this.endpointIn=void 0,this.endpointOut=void 0,n=0,s=r;n<s.length;n++)"in"===(o=s[n]).direction?this.endpointIn=o:this.endpointOut=o;return[2,this.device.claimInterface(this.interfaceNumber)]}}))}))},t.prototype.close=function(){return this.device.close()},t.prototype.read=function(){return n(this,void 0,void 0,(function(){var t;return i(this,(function(e){switch(e.label){case 0:if(void 0===this.interfaceNumber)throw new Error("No device opened");return this.endpointIn?[4,this.device.transferIn(this.endpointIn.endpointNumber,this.packetSize)]:[3,2];case 1:return t=e.sent(),[3,4];case 2:return[4,this.device.controlTransferIn({requestType:"class",recipient:"interface",request:1,value:256,index:this.interfaceNumber},this.packetSize)];case 3:t=e.sent(),e.label=4;case 4:return[2,t.data]}}))}))},t.prototype.write=function(t){return n(this,void 0,void 0,(function(){var e;return i(this,(function(r){switch(r.label){case 0:if(void 0===this.interfaceNumber)throw new Error("No device opened");return e=this.extendBuffer(t,this.packetSize),this.endpointOut?[4,this.device.transferOut(this.endpointOut.endpointNumber,e)]:[3,2];case 1:return r.sent(),[3,4];case 2:return[4,this.device.controlTransferOut({requestType:"class",recipient:"interface",request:9,value:512,index:this.interfaceNumber},e)];case 3:r.sent(),r.label=4;case 4:return[2]}}))}))},t}();t.ADI=P,t.CmsisDAP=b,t.CortexM=T,t.DAPLink=U,t.DEFAULT_CLOCK_FREQUENCY=1e7,t.HID=L,t.USB=_,t.WebUSB=M,Object.defineProperty(t,"__esModule",{value:!0})}));
//# sourceMappingURL=dap.umd.js.map
