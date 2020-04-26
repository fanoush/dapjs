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
    ***************************************************************************** */var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,n)};function n(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}function r(t,e,n,r){return new(n||(n=Promise))((function(i,o){function s(t){try{a(r.next(t))}catch(t){o(t)}}function u(t){try{a(r.throw(t))}catch(t){o(t)}}function a(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(s,u)}a((r=r.apply(t,e||[])).next())}))}function i(t,e){var n,r,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(o){return function(u){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,r=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!(i=s.trys,(i=i.length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){s=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){s.label=o[1];break}if(6===o[0]&&s.label<i[1]){s.label=i[1],i=o;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(o);break}i[2]&&s.ops.pop(),s.trys.pop();continue}o=e.call(t,s)}catch(t){o=[6,t],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}}function o(){}function s(){s.init.call(this)}function u(t){return void 0===t._maxListeners?s.defaultMaxListeners:t._maxListeners}function a(t,e,n){if(e)t.call(n);else for(var r=t.length,i=w(t,r),o=0;o<r;++o)i[o].call(n)}function c(t,e,n,r){if(e)t.call(n,r);else for(var i=t.length,o=w(t,i),s=0;s<i;++s)o[s].call(n,r)}function f(t,e,n,r,i){if(e)t.call(n,r,i);else for(var o=t.length,s=w(t,o),u=0;u<o;++u)s[u].call(n,r,i)}function h(t,e,n,r,i,o){if(e)t.call(n,r,i,o);else for(var s=t.length,u=w(t,s),a=0;a<s;++a)u[a].call(n,r,i,o)}function d(t,e,n,r){if(e)t.apply(n,r);else for(var i=t.length,o=w(t,i),s=0;s<i;++s)o[s].apply(n,r)}function l(t,e,n,r){var i,s,a,c;if("function"!=typeof n)throw new TypeError('"listener" argument must be a function');if((s=t._events)?(s.newListener&&(t.emit("newListener",e,n.listener?n.listener:n),s=t._events),a=s[e]):(s=t._events=new o,t._eventsCount=0),a){if("function"==typeof a?a=s[e]=r?[n,a]:[a,n]:r?a.unshift(n):a.push(n),!a.warned&&(i=u(t))&&i>0&&a.length>i){a.warned=!0;var f=new Error("Possible EventEmitter memory leak detected. "+a.length+" "+e+" listeners added. Use emitter.setMaxListeners() to increase limit");f.name="MaxListenersExceededWarning",f.emitter=t,f.type=e,f.count=a.length,c=f,"function"==typeof console.warn?console.warn(c):console.log(c)}}else a=s[e]=n,++t._eventsCount;return t}function p(t,e,n){var r=!1;function i(){t.removeListener(e,i),r||(r=!0,n.apply(t,arguments))}return i.listener=n,i}function v(t){var e=this._events;if(e){var n=e[t];if("function"==typeof n)return 1;if(n)return n.length}return 0}function w(t,e){for(var n=new Array(e);e--;)n[e]=t[e];return n}o.prototype=Object.create(null),s.EventEmitter=s,s.usingDomains=!1,s.prototype.domain=void 0,s.prototype._events=void 0,s.prototype._maxListeners=void 0,s.defaultMaxListeners=10,s.init=function(){this.domain=null,s.usingDomains&&(void 0).active,this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=new o,this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},s.prototype.setMaxListeners=function(t){if("number"!=typeof t||t<0||isNaN(t))throw new TypeError('"n" argument must be a positive number');return this._maxListeners=t,this},s.prototype.getMaxListeners=function(){return u(this)},s.prototype.emit=function(t){var e,n,r,i,o,s,u,l="error"===t;if(s=this._events)l=l&&null==s.error;else if(!l)return!1;if(u=this.domain,l){if(e=arguments[1],!u){if(e instanceof Error)throw e;var p=new Error('Uncaught, unspecified "error" event. ('+e+")");throw p.context=e,p}return e||(e=new Error('Uncaught, unspecified "error" event')),e.domainEmitter=this,e.domain=u,e.domainThrown=!1,u.emit("error",e),!1}if(!(n=s[t]))return!1;var v="function"==typeof n;switch(r=arguments.length){case 1:a(n,v,this);break;case 2:c(n,v,this,arguments[1]);break;case 3:f(n,v,this,arguments[1],arguments[2]);break;case 4:h(n,v,this,arguments[1],arguments[2],arguments[3]);break;default:for(i=new Array(r-1),o=1;o<r;o++)i[o-1]=arguments[o];d(n,v,this,i)}return!0},s.prototype.addListener=function(t,e){return l(this,t,e,!1)},s.prototype.on=s.prototype.addListener,s.prototype.prependListener=function(t,e){return l(this,t,e,!0)},s.prototype.once=function(t,e){if("function"!=typeof e)throw new TypeError('"listener" argument must be a function');return this.on(t,p(this,t,e)),this},s.prototype.prependOnceListener=function(t,e){if("function"!=typeof e)throw new TypeError('"listener" argument must be a function');return this.prependListener(t,p(this,t,e)),this},s.prototype.removeListener=function(t,e){var n,r,i,s,u;if("function"!=typeof e)throw new TypeError('"listener" argument must be a function');if(!(r=this._events))return this;if(!(n=r[t]))return this;if(n===e||n.listener&&n.listener===e)0==--this._eventsCount?this._events=new o:(delete r[t],r.removeListener&&this.emit("removeListener",t,n.listener||e));else if("function"!=typeof n){for(i=-1,s=n.length;s-- >0;)if(n[s]===e||n[s].listener&&n[s].listener===e){u=n[s].listener,i=s;break}if(i<0)return this;if(1===n.length){if(n[0]=void 0,0==--this._eventsCount)return this._events=new o,this;delete r[t]}else!function(t,e){for(var n=e,r=n+1,i=t.length;r<i;n+=1,r+=1)t[n]=t[r];t.pop()}(n,i);r.removeListener&&this.emit("removeListener",t,u||e)}return this},s.prototype.removeAllListeners=function(t){var e,n;if(!(n=this._events))return this;if(!n.removeListener)return 0===arguments.length?(this._events=new o,this._eventsCount=0):n[t]&&(0==--this._eventsCount?this._events=new o:delete n[t]),this;if(0===arguments.length){for(var r,i=Object.keys(n),s=0;s<i.length;++s)"removeListener"!==(r=i[s])&&this.removeAllListeners(r);return this.removeAllListeners("removeListener"),this._events=new o,this._eventsCount=0,this}if("function"==typeof(e=n[t]))this.removeListener(t,e);else if(e)do{this.removeListener(t,e[e.length-1])}while(e[0]);return this},s.prototype.listeners=function(t){var e,n=this._events;return n&&(e=n[t])?"function"==typeof e?[e.listener||e]:function(t){for(var e=new Array(t.length),n=0;n<e.length;++n)e[n]=t[n].listener||t[n];return e}(e):[]},s.listenerCount=function(t,e){return"function"==typeof t.listenerCount?t.listenerCount(e):v.call(t,e)},s.prototype.listenerCount=v,s.prototype.eventNames=function(){return this._eventsCount>0?Reflect.ownKeys(this._events):[]};var m,y=function(t){function e(e,n,r){void 0===n&&(n=0),void 0===r&&(r=1e7);var i=t.call(this)||this;i.transport=e,i.mode=n,i.clockFrequency=r,i.connected=!1,i.blockSize=i.transport.packetSize-4-1;var o=i.transport.packetSize-2-1;return i.operationCount=Math.floor(o/5),i}return n(e,t),e.prototype.bufferSourceToUint8Array=function(t,e){if(!e)return new Uint8Array([t]);var n=void 0!==e.buffer?e.buffer:e,r=new Uint8Array(n.byteLength+1);return r.set([t]),r.set(new Uint8Array(n),1),r},e.prototype.selectProtocol=function(t){return r(this,void 0,void 0,(function(){var e;return i(this,(function(n){switch(n.label){case 0:return e=2===t?59196:59294,[4,this.swjSequence(new Uint8Array([255,255,255,255,255,255,255]))];case 1:return n.sent(),[4,this.swjSequence(new Uint16Array([e]))];case 2:return n.sent(),[4,this.swjSequence(new Uint8Array([255,255,255,255,255,255,255]))];case 3:return n.sent(),[4,this.swjSequence(new Uint8Array([0]))];case 4:return n.sent(),[2]}}))}))},e.prototype.send=function(t,e){return r(this,void 0,void 0,(function(){var n,r;return i(this,(function(i){switch(i.label){case 0:return n=this.bufferSourceToUint8Array(t,e),[4,this.transport.write(n)];case 1:return i.sent(),[4,this.transport.read()];case 2:if((r=i.sent()).getUint8(0)!==t)throw new Error("Bad response for "+t+" -> "+r.getUint8(0));switch(t){case 3:case 8:case 9:case 10:case 17:case 18:case 19:case 29:case 23:case 24:case 26:case 21:case 22:case 4:if(0!==r.getUint8(1))throw new Error("Bad status for "+t+" -> "+r.getUint8(1))}return[2,r]}}))}))},e.prototype.dapInfo=function(t){return r(this,void 0,void 0,(function(){var e,n,r;return i(this,(function(i){switch(i.label){case 0:return[4,this.send(0,new Uint8Array([t]))];case 1:if(e=i.sent(),0===(n=e.getUint8(1)))throw new Error("DAP Info Failure");switch(t){case 240:case 254:case 255:case 253:if(1===n)return[2,e.getUint8(2)];if(2===n)return[2,e.getUint16(2)];if(4===n)return[2,e.getUint32(2)]}return r=Array.prototype.slice.call(new Uint8Array(e.buffer,2,n)),[2,String.fromCharCode.apply(null,r)]}}))}))},e.prototype.swjSequence=function(t){return r(this,void 0,void 0,(function(){var e,n;return i(this,(function(r){switch(r.label){case 0:return e=8*t.byteLength,n=this.bufferSourceToUint8Array(e,t),[4,this.send(18,n)];case 1:return r.sent(),[2]}}))}))},e.prototype.configureTransfer=function(t,e,n){return r(this,void 0,void 0,(function(){var r,o;return i(this,(function(i){switch(i.label){case 0:return r=new Uint8Array(5),(o=new DataView(r.buffer)).setUint8(0,t),o.setUint16(1,e,!0),o.setUint16(3,n,!0),[4,this.send(4,r)];case 1:return i.sent(),[2]}}))}))},e.prototype.connect=function(){return r(this,void 0,void 0,(function(){var t;return i(this,(function(e){switch(e.label){case 0:return!0===this.connected?[2,Promise.resolve()]:[4,this.transport.open()];case 1:return e.sent(),[4,this.send(17,new Uint32Array([this.clockFrequency]))];case 2:return e.sent(),[4,this.send(2,new Uint8Array([this.mode]))];case 3:if(0===(t=e.sent()).getUint8(1)||0!==this.mode&&t.getUint8(1)!==this.mode)throw new Error("Mode not enabled.");return[4,this.configureTransfer(0,100,0)];case 4:return e.sent(),[4,this.selectProtocol(1)];case 5:return e.sent(),this.connected=!0,[2]}}))}))},e.prototype.disconnect=function(){return r(this,void 0,void 0,(function(){return i(this,(function(t){switch(t.label){case 0:return!1===this.connected?[2,Promise.resolve()]:[4,this.send(3)];case 1:return t.sent(),[4,this.transport.close()];case 2:return t.sent(),this.connected=!1,[2]}}))}))},e.prototype.reconnect=function(){return r(this,void 0,void 0,(function(){return i(this,(function(t){switch(t.label){case 0:return[4,this.disconnect()];case 1:return t.sent(),[4,new Promise((function(t){return setTimeout(t,100)}))];case 2:return t.sent(),[4,this.connect()];case 3:return t.sent(),[2]}}))}))},e.prototype.reset=function(){return r(this,void 0,void 0,(function(){return i(this,(function(t){switch(t.label){case 0:return[4,this.send(10)];case 1:return[2,1===t.sent().getUint8(2)]}}))}))},e.prototype.transfer=function(t,e,n,o){return void 0===e&&(e=2),void 0===n&&(n=0),void 0===o&&(o=0),r(this,void 0,void 0,(function(){var r,s,u,a,c,f;return i(this,(function(i){switch(i.label){case 0:return r="number"==typeof t?[{port:t,mode:e,register:n,value:o}]:t,s=new Uint8Array(2+5*r.length),(u=new DataView(s.buffer)).setUint8(0,0),u.setUint8(1,r.length),r.forEach((function(t,e){var n=2+5*e;u.setUint8(n,t.port|t.mode|t.register),u.setUint32(n+1,t.value||0,!0)})),[4,this.send(5,s)];case 1:if((a=i.sent()).getUint8(1)!==r.length)throw new Error("Transfer count mismatch");if(2===(c=a.getUint8(2)))throw new Error("Transfer response WAIT");if(4===c)throw new Error("Transfer response FAULT");if(8===c)throw new Error("Transfer response PROTOCOL_ERROR");if(16===c)throw new Error("Transfer response VALUE_MISMATCH");if(7===c)throw new Error("Transfer response NO_ACK");return"number"==typeof t?[2,a.getUint32(3,!0)]:(f=4*r.length,[2,new Uint32Array(a.buffer.slice(3,3+f))])}}))}))},e.prototype.transferBlock=function(t,e,n){return r(this,void 0,void 0,(function(){var r,o,s,u,a,c,f;return i(this,(function(i){switch(i.label){case 0:return s=4,"number"==typeof n?(r=n,o=2):(r=n.length,o=0,s+=n.byteLength),u=new Uint8Array(s),(a=new DataView(u.buffer)).setUint8(0,0),a.setUint16(1,r,!0),a.setUint8(3,t|o|e),"number"!=typeof n&&n.forEach((function(t,e){var n=4+4*e;a.setUint32(n,t,!0)})),[4,this.send(6,a)];case 1:if((c=i.sent()).getUint16(1,!0)!==r)throw new Error("Transfer count mismatch");if(2===(f=c.getUint8(3)))throw new Error("Transfer response WAIT");if(4===f)throw new Error("Transfer response FAULT");if(8===f)throw new Error("Transfer response PROTOCOL_ERROR");if(7===f)throw new Error("Transfer response NO_ACK");return"number"==typeof n?[2,new Uint32Array(c.buffer.slice(4,4+4*r))]:[2,void 0]}}))}))},e}(s),b=/[\xc0-\xff][\x80-\xbf]*$/g,g=/[\xc0-\xff][\x80-\xbf]*/g,C=function(){function t(){}return t.prototype.decode=function(t){var e=Array.prototype.slice.call(new Uint8Array(t)),n=String.fromCodePoint.apply(void 0,e);this.partialChar&&(n=""+this.partialChar+n,this.partialChar=void 0);var r=n.match(b);if(r){var i=r[0].length;this.partialChar=n.slice(-i),n=n.slice(0,-i)}return n.replace(g,this.decoderReplacer)},t.prototype.decoderReplacer=function(t){var e=t.codePointAt(0)<<24,n=Math.clz32(~e),r=0,i=t.length,o="";if(n<5&&i>=n){for(e=e<<n>>>24+n,r=1;r<n;r+=1)e=e<<6|63&t.codePointAt(r);e<=65535?o+=String.fromCodePoint(e):e<=1114111?(e-=65536,o+=String.fromCodePoint(55296+(e>>10),56320+(1023&e))):r=0}for(;r<i;r+=1)o+="�";return o},t}(),A=new C,E=function(t){function e(n,o,s){void 0===o&&(o=0),void 0===s&&(s=1e7);var u=t.call(this,n,o,s)||this;return u.serialPolling=!1,u.serialListeners=!1,u.on("newListener",(function(t){return r(u,void 0,void 0,(function(){return i(this,(function(n){return t===e.EVENT_SERIAL_DATA&&0===this.listenerCount(t)&&(this.serialListeners=!0),[2]}))}))})),u.on("removeListener",(function(t){t===e.EVENT_SERIAL_DATA&&(0===u.listenerCount(t)&&(u.serialListeners=!1))})),u}return n(e,t),e.prototype.isBufferBinary=function(t){for(var e=Array.prototype.slice.call(new Uint16Array(t,0,50)),n=String.fromCharCode.apply(null,e),r=0;r<n.length;r++){var i=n.charCodeAt(r);if(65533===i||i<=8)return!0}return!1},e.prototype.writeBuffer=function(t,n,o){return void 0===o&&(o=0),r(this,void 0,void 0,(function(){var r,s,u;return i(this,(function(i){switch(i.label){case 0:return r=Math.min(t.byteLength,o+n),s=t.slice(o,r),(u=new Uint8Array(s.byteLength+1)).set([s.byteLength]),u.set(new Uint8Array(s),1),[4,this.send(140,u)];case 1:return i.sent(),this.emit(e.EVENT_PROGRESS,o/t.byteLength),r<t.byteLength?[2,this.writeBuffer(t,n,r)]:[2]}}))}))},e.prototype.flash=function(t,n){return void 0===n&&(n=62),r(this,void 0,void 0,(function(){var r,o;return i(this,(function(i){switch(i.label){case 0:return r=function(t){return void 0!==t.buffer}(t)?t.buffer:t,o=this.isBufferBinary(r)?0:1,[4,this.send(138,new Uint32Array([o]))];case 1:if(0!==i.sent().getUint8(1))throw new Error("Flash error");return[4,this.writeBuffer(r,n)];case 2:return i.sent(),this.emit(e.EVENT_PROGRESS,1),[4,this.send(139)];case 3:if(0!==i.sent().getUint8(1))throw new Error("Flash error");return[4,this.send(137)];case 4:return i.sent(),[2]}}))}))},e.prototype.getSerialBaudrate=function(){return r(this,void 0,void 0,(function(){return i(this,(function(t){switch(t.label){case 0:return[4,this.send(129)];case 1:return[2,t.sent().getUint32(1,!0)]}}))}))},e.prototype.setSerialBaudrate=function(t){return void 0===t&&(t=9600),r(this,void 0,void 0,(function(){return i(this,(function(e){switch(e.label){case 0:return[4,this.send(130,new Uint32Array([t]))];case 1:return e.sent(),[2]}}))}))},e.prototype.serialWrite=function(t){return r(this,void 0,void 0,(function(){var e;return i(this,(function(n){switch(n.label){case 0:return(e=t.split("").map((function(t){return t.charCodeAt(0)}))).unshift(e.length),[4,this.send(132,new Uint8Array(e).buffer)];case 1:return n.sent(),[2]}}))}))},e.prototype.serialRead=function(){return r(this,void 0,void 0,(function(){var t,e;return i(this,(function(n){switch(n.label){case 0:return[4,this.send(131)];case 1:return 0===(t=n.sent()).byteLength||(131!==t.getUint8(0)||0===(e=t.getUint8(1)))?[2,void 0]:(2,[2,t.buffer.slice(2,2+e)])}}))}))},e.prototype.startSerialRead=function(t,n){return void 0===t&&(t=100),void 0===n&&(n=!0),r(this,void 0,void 0,(function(){var r,o,s;return i(this,(function(i){switch(i.label){case 0:this.serialPolling=!0,i.label=1;case 1:return this.serialPolling?this.serialListeners?(r=this.connected,!1!==this.connected||!0!==n?[3,3]:[4,this.connect()]):[3,7]:[3,9];case 2:i.sent(),i.label=3;case 3:return[4,this.serialRead()];case 4:return o=i.sent(),!1!==r||!0!==n?[3,6]:[4,this.disconnect()];case 5:i.sent(),i.label=6;case 6:void 0!==o&&(s=A.decode(o),this.emit(e.EVENT_SERIAL_DATA,s)),i.label=7;case 7:return[4,new Promise((function(e){return setTimeout(e,t)}))];case 8:return i.sent(),[3,1];case 9:return[2]}}))}))},e.prototype.stopSerialRead=function(){this.serialPolling=!1},e.EVENT_PROGRESS="progress",e.EVENT_SERIAL_DATA="serial",e}(y),U=function(){function t(t,e,n){void 0===e&&(e=0),void 0===n&&(n=1e7);this.proxy=void 0!==t.open?new y(t,e,n):t}return t.prototype.waitDelay=function(t,e,n){return void 0===e&&(e=0),void 0===n&&(n=100),r(this,void 0,void 0,(function(){var r;return i(this,(function(i){switch(i.label){case 0:r=!0,e>0&&setTimeout((function(){if(r)throw r=!1,new Error("Wait timed out")}),e),i.label=1;case 1:return r?[4,t()]:[3,5];case 2:return!0===i.sent()?(r=!1,[2]):n>0?[4,new Promise((function(t){return setTimeout(t,e)}))]:[3,4];case 3:i.sent(),i.label=4;case 4:return[3,1];case 5:return[2]}}))}))},t.prototype.concatTypedArray=function(t){if(1===t.length)return t[0];for(var e=0,n=0,r=t;n<r.length;n++){e+=r[n].length}for(var i=new Uint32Array(e),o=0,s=0;o<t.length;o++)i.set(t[o],s),s+=t[o].length;return i},t.prototype.readDPCommand=function(t){return[{mode:2,port:0,register:t}]},t.prototype.writeDPCommand=function(t,e){if(8===t){if(e===this.selectedAddress)return[];this.selectedAddress=e}return[{mode:0,port:0,register:t,value:e}]},t.prototype.readAPCommand=function(t){var e=4278190080&t|240&t;return this.writeDPCommand(8,e).concat({mode:2,port:1,register:t})},t.prototype.writeAPCommand=function(t,e){if(0===t){if(e===this.cswValue)return[];this.cswValue=e}var n=4278190080&t|240&t;return this.writeDPCommand(8,n).concat({mode:0,port:1,register:t,value:e})},t.prototype.readMem16Command=function(t){return this.writeAPCommand(0,587202641).concat(this.writeAPCommand(4,t)).concat(this.readAPCommand(12))},t.prototype.writeMem16Command=function(t,e){return this.writeAPCommand(0,587202641).concat(this.writeAPCommand(4,t)).concat(this.writeAPCommand(12,e))},t.prototype.readMem32Command=function(t){return this.writeAPCommand(0,587202642).concat(this.writeAPCommand(4,t)).concat(this.readAPCommand(12))},t.prototype.writeMem32Command=function(t,e){return this.writeAPCommand(0,587202642).concat(this.writeAPCommand(4,t)).concat(this.writeAPCommand(12,e))},t.prototype.transferSequence=function(t){return r(this,void 0,void 0,(function(){var e,n,r,o;return i(this,(function(i){switch(i.label){case 0:e=(e=[]).concat.apply(e,t),n=[],i.label=1;case 1:return e.length?(r=e.splice(0,this.proxy.operationCount),[4,this.proxy.transfer(r)]):[3,3];case 2:return o=i.sent(),n.push(o),[3,1];case 3:return[2,this.concatTypedArray(n)]}}))}))},t.prototype.connect=function(){return r(this,void 0,void 0,(function(){var t,e=this;return i(this,(function(n){switch(n.label){case 0:return t=-1610612736,[4,this.proxy.connect()];case 1:return n.sent(),[4,this.readDP(0)];case 2:return n.sent(),[4,this.transferSequence([this.writeDPCommand(0,4),this.writeDPCommand(8,0),this.writeDPCommand(4,1342177280)])];case 3:return n.sent(),[4,this.waitDelay((function(){return r(e,void 0,void 0,(function(){return i(this,(function(e){switch(e.label){case 0:return[4,this.readDP(4)];case 1:return[2,(e.sent()&t)===t]}}))}))}))];case 4:return n.sent(),[2]}}))}))},t.prototype.disconnect=function(){return this.proxy.disconnect()},t.prototype.reconnect=function(){return r(this,void 0,void 0,(function(){return i(this,(function(t){switch(t.label){case 0:return[4,this.disconnect()];case 1:return t.sent(),[4,new Promise((function(t){return setTimeout(t,100)}))];case 2:return t.sent(),[4,this.connect()];case 3:return t.sent(),[2]}}))}))},t.prototype.reset=function(){return this.proxy.reset()},t.prototype.readDP=function(t){return r(this,void 0,void 0,(function(){return i(this,(function(e){switch(e.label){case 0:return[4,this.proxy.transfer(this.readDPCommand(t))];case 1:return[2,e.sent()[0]]}}))}))},t.prototype.writeDP=function(t,e){return r(this,void 0,void 0,(function(){return i(this,(function(n){switch(n.label){case 0:return[4,this.proxy.transfer(this.writeDPCommand(t,e))];case 1:return n.sent(),[2]}}))}))},t.prototype.readAP=function(t){return r(this,void 0,void 0,(function(){return i(this,(function(e){switch(e.label){case 0:return[4,this.proxy.transfer(this.readAPCommand(t))];case 1:return[2,e.sent()[0]]}}))}))},t.prototype.writeAP=function(t,e){return r(this,void 0,void 0,(function(){return i(this,(function(n){switch(n.label){case 0:return[4,this.proxy.transfer(this.writeAPCommand(t,e))];case 1:return n.sent(),[2]}}))}))},t.prototype.readMem16=function(t){return r(this,void 0,void 0,(function(){return i(this,(function(e){switch(e.label){case 0:return[4,this.proxy.transfer(this.readMem16Command(t))];case 1:return[2,e.sent()[0]]}}))}))},t.prototype.writeMem16=function(t,e){return r(this,void 0,void 0,(function(){return i(this,(function(n){switch(n.label){case 0:return e<<=(2&t)<<3,[4,this.proxy.transfer(this.writeMem16Command(t,e))];case 1:return n.sent(),[2]}}))}))},t.prototype.readMem32=function(t){return r(this,void 0,void 0,(function(){return i(this,(function(e){switch(e.label){case 0:return[4,this.proxy.transfer(this.readMem32Command(t))];case 1:return[2,e.sent()[0]]}}))}))},t.prototype.writeMem32=function(t,e){return r(this,void 0,void 0,(function(){return i(this,(function(n){switch(n.label){case 0:return[4,this.proxy.transfer(this.writeMem32Command(t,e))];case 1:return n.sent(),[2]}}))}))},t.prototype.readBlock=function(t,e){return r(this,void 0,void 0,(function(){var n,r,o,s;return i(this,(function(i){switch(i.label){case 0:return[4,this.transferSequence([this.writeAPCommand(0,587202642),this.writeAPCommand(4,t)])];case 1:i.sent(),n=[],r=e,i.label=2;case 2:return r>0?(o=Math.min(r,Math.floor(this.proxy.blockSize/4)),[4,this.proxy.transferBlock(1,12,o)]):[3,4];case 3:return s=i.sent(),n.push(s),r-=o,[3,2];case 4:return[2,this.concatTypedArray(n)]}}))}))},t.prototype.writeBlock=function(t,e){return r(this,void 0,void 0,(function(){var n,r;return i(this,(function(i){switch(i.label){case 0:return[4,this.transferSequence([this.writeAPCommand(0,587202642),this.writeAPCommand(4,t)])];case 1:i.sent(),n=0,i.label=2;case 2:return n<e.length?(r=e.slice(n,n+Math.floor(this.proxy.blockSize/4)),[4,this.proxy.transferBlock(1,12,r)]):[3,4];case 3:return i.sent(),n+=Math.floor(this.proxy.blockSize/4),[3,2];case 4:return[2]}}))}))},t}(),P=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return n(e,t),e.prototype.enableDebug=function(){return this.writeMem32(3758157296,-1604386815)},e.prototype.readCoreRegisterCommand=function(t){return this.writeMem32Command(3758157300,t).concat(this.readMem32Command(3758157296)).concat(this.readMem32Command(3758157304))},e.prototype.writeCoreRegisterCommand=function(t,e){return this.writeMem32Command(3758157304,e).concat(this.writeMem32Command(3758157300,65536|t))},e.prototype.getState=function(){return r(this,void 0,void 0,(function(){var t,e,n;return i(this,(function(r){switch(r.label){case 0:return[4,this.readMem32(3758157296)];case 1:return t=r.sent(),e=524288&t?1:262144&t?2:131072&t?3:4,33554432&t?[4,this.readMem32(3758157296)]:[3,3];case 2:return 33554432&(n=r.sent())&&!(16777216&n)?[2,0]:[2,e];case 3:return[2,e];case 4:return[2]}}))}))},e.prototype.isHalted=function(){return r(this,void 0,void 0,(function(){return i(this,(function(t){switch(t.label){case 0:return[4,this.readMem32(3758157296)];case 1:return[2,!!(131072&t.sent())]}}))}))},e.prototype.halt=function(t,e){return void 0===t&&(t=!0),void 0===e&&(e=0),r(this,void 0,void 0,(function(){var n=this;return i(this,(function(r){switch(r.label){case 0:return[4,this.isHalted()];case 1:return r.sent()?[2]:[4,this.writeMem32(3758157296,-1604386813)];case 2:return r.sent(),t?[2,this.waitDelay((function(){return n.isHalted()}),e)]:[2]}}))}))},e.prototype.resume=function(t,e){return void 0===t&&(t=!0),void 0===e&&(e=0),r(this,void 0,void 0,(function(){var n=this;return i(this,(function(o){switch(o.label){case 0:return[4,this.isHalted()];case 1:return o.sent()?[4,this.writeMem32(3758157104,7)]:[2];case 2:return o.sent(),[4,this.enableDebug()];case 3:return o.sent(),t?[2,this.waitDelay((function(){return r(n,void 0,void 0,(function(){return i(this,(function(t){switch(t.label){case 0:return[4,this.isHalted()];case 1:return[2,!t.sent()]}}))}))}),e)]:[2]}}))}))},e.prototype.readCoreRegister=function(t){return r(this,void 0,void 0,(function(){var e;return i(this,(function(n){switch(n.label){case 0:return[4,this.transferSequence([this.writeMem32Command(3758157300,t),this.readMem32Command(3758157296)])];case 1:if(e=n.sent(),!(65536&e[0]))throw new Error("Register not ready");return[2,this.readMem32(3758157304)]}}))}))},e.prototype.readCoreRegisters=function(t){return r(this,void 0,void 0,(function(){var e,n,r,o,s;return i(this,(function(i){switch(i.label){case 0:e=[],n=0,r=t,i.label=1;case 1:return n<r.length?(o=r[n],[4,this.readCoreRegister(o)]):[3,4];case 2:s=i.sent(),e.push(s),i.label=3;case 3:return n++,[3,1];case 4:return[2,e]}}))}))},e.prototype.writeCoreRegister=function(t,e){return r(this,void 0,void 0,(function(){var n;return i(this,(function(r){switch(r.label){case 0:return[4,this.transferSequence([this.writeMem32Command(3758157304,e),this.writeMem32Command(3758157300,65536|t),this.readMem32Command(3758157296)])];case 1:if(n=r.sent(),!(65536&n[0]))throw new Error("Register not ready");return[2]}}))}))},e.prototype.execute=function(t,e,n,o,s){void 0===s&&(s=t+1);for(var u=[],a=5;a<arguments.length;a++)u[a-5]=arguments[a];return r(this,void 0,void 0,(function(){var r,a,c,f=this;return i(this,(function(i){switch(i.label){case 0:for(48682!==e[e.length-1]&&((r=new Uint32Array(e.length+1)).set(e),r.set([48682],e.length-1),e=r),a=[this.writeCoreRegisterCommand(13,n),this.writeCoreRegisterCommand(15,o),this.writeCoreRegisterCommand(14,s)],c=0;c<Math.min(u.length,12);c++)a.push(this.writeCoreRegisterCommand(c,u[c]));return a.push(this.writeCoreRegisterCommand(16,16777216)),[4,this.halt()];case 1:return i.sent(),[4,this.transferSequence(a)];case 2:return i.sent(),[4,this.writeBlock(t,e)];case 3:return i.sent(),[4,this.resume(!1)];case 4:return i.sent(),[4,this.waitDelay((function(){return f.isHalted()}),1e4)];case 5:return i.sent(),[2]}}))}))},e.prototype.softReset=function(){return r(this,void 0,void 0,(function(){return i(this,(function(t){switch(t.label){case 0:return[4,this.writeMem32(3758157308,0)];case 1:return t.sent(),[2,this.writeMem32(3758157068,100270084)]}}))}))},e.prototype.setTargetResetState=function(t){return void 0===t&&(t=!0),r(this,void 0,void 0,(function(){var e;return i(this,(function(n){switch(n.label){case 0:return[4,this.writeMem32(3758157308,1)];case 1:return n.sent(),!0!==t?[3,3]:[4,this.reset()];case 2:return n.sent(),[3,6];case 3:return[4,this.readMem32(3758157068)];case 4:return e=n.sent(),[4,this.writeMem32(3758157068,100270084|e)];case 5:n.sent(),n.label=6;case 6:return[4,this.writeMem32(3758157308,0)];case 7:return n.sent(),[2]}}))}))},e}(U);(m=t.FPBCtrlMask||(t.FPBCtrlMask={}))[m.ENABLE=1]="ENABLE",m[m.KEY=2]="KEY";var T=function(){function t(t){this.os="browser",this.packetSize=64;this.path=void 0!==t.path?t.path:t}return t.prototype.open=function(){return r(this,void 0,void 0,(function(){var t;return i(this,(function(e){if(!this.path.length)throw new Error("No path specified");return t=require("node-hid"),this.device=new t.HID(this.path),[2]}))}))},t.prototype.close=function(){return r(this,void 0,void 0,(function(){return i(this,(function(t){return this.device&&this.device.close(),[2]}))}))},t.prototype.read=function(){return r(this,void 0,void 0,(function(){var t,e,n=this;return i(this,(function(r){switch(r.label){case 0:if(!this.device)throw new Error("No device opened");return[4,new Promise((function(t,e){n.device.read((function(n,r){if(n)return e(new Error(n));t(r)}))}))];case 1:return t=r.sent(),e=new Uint8Array(t).buffer,[2,new DataView(e)]}}))}))},t.prototype.write=function(t){return r(this,void 0,void 0,(function(){var e,n;return i(this,(function(r){if(!this.device)throw new Error("No device opened");for(e=function(t){return void 0!==t.buffer}(t)?t.buffer:t,n=Array.prototype.slice.call(new Uint8Array(e));n.length<this.packetSize;)n.push(0);if("win32"===this.os&&n.unshift(0),this.device.write(n)!==n.length)throw new Error("Incorrect bytecount written");return[2]}))}))},t}(),L=function(){function t(t,e,n,r){void 0===e&&(e=255),void 0===n&&(n=1),void 0===r&&(r=!1),this.device=t,this.interfaceClass=e,this.configuration=n,this.alwaysControlTransfer=r,this.packetSize=64}return t.prototype.bufferToDataView=function(t){var e=new Uint8Array(t).buffer;return new DataView(e)},t.prototype.isView=function(t){return void 0!==t.buffer},t.prototype.bufferSourceToBuffer=function(t){var e=this.isView(t)?t.buffer:t;return Buffer.from(e)},t.prototype.extendBuffer=function(t,e){var n=this.isView(t)?t.buffer:t,r=Math.min(n.byteLength,e),i=new Uint8Array(r);return i.set(new Uint8Array(n)),i},t.prototype.open=function(){return r(this,void 0,void 0,(function(){var t,e,n,r,o,s,u=this;return i(this,(function(i){switch(i.label){case 0:return this.device.open(),[4,new Promise((function(t,e){u.device.setConfiguration(u.configuration,(function(n){n?e(new Error(n)):t()}))}))];case 1:if(i.sent(),!(t=this.device.interfaces.filter((function(t){return t.descriptor.bInterfaceClass===u.interfaceClass}))).length)throw new Error("No valid interfaces found.");if((e=t.find((function(t){return t.endpoints.length>0})))||(e=t[0]),this.interfaceNumber=e.interfaceNumber,!this.alwaysControlTransfer){for(n=e.endpoints,this.endpointIn=void 0,this.endpointOut=void 0,r=0,o=n;r<o.length;r++)"in"===(s=o[r]).direction?this.endpointIn=s:this.endpointOut=s;if(this.endpointIn||this.endpointOut)try{e.claim()}catch(t){this.endpointIn=void 0,this.endpointOut=void 0}}return[2]}}))}))},t.prototype.close=function(){return r(this,void 0,void 0,(function(){return i(this,(function(t){return this.device.close(),[2]}))}))},t.prototype.read=function(){return r(this,void 0,void 0,(function(){var t,e=this;return i(this,(function(n){switch(n.label){case 0:if(void 0===this.interfaceNumber)throw new Error("No device opened");return[4,new Promise((function(t,n){e.endpointIn?e.endpointIn.transfer(e.packetSize,(function(e,r){e?n(e):t(r)})):e.device.controlTransfer(161,1,256,e.interfaceNumber,e.packetSize,(function(e,r){e?n(e):r?t(r):n(new Error("No buffer read"))}))}))];case 1:return t=n.sent(),[2,this.bufferToDataView(t)]}}))}))},t.prototype.write=function(t){return r(this,void 0,void 0,(function(){var e,n,r=this;return i(this,(function(i){switch(i.label){case 0:if(void 0===this.interfaceNumber)throw new Error("No device opened");return e=this.extendBuffer(t,this.packetSize),n=this.bufferSourceToBuffer(e),[4,new Promise((function(t,e){r.endpointOut?r.endpointOut.transfer(n,(function(n){if(n)return e(n);t()})):r.device.controlTransfer(33,9,512,r.interfaceNumber,n,(function(n){if(n)return e(n);t()}))}))];case 1:return i.sent(),[2]}}))}))},t}(),_=function(){function t(t,e,n,r){void 0===e&&(e=255),void 0===n&&(n=1),void 0===r&&(r=!1),this.device=t,this.interfaceClass=e,this.configuration=n,this.alwaysControlTransfer=r,this.packetSize=64}return t.prototype.extendBuffer=function(t,e){var n=void 0!==t.buffer?t.buffer:t,r=Math.min(n.byteLength,e),i=new Uint8Array(r);return i.set(new Uint8Array(n)),i},t.prototype.open=function(){return r(this,void 0,void 0,(function(){var t,e,n,r,o,s,u=this;return i(this,(function(i){switch(i.label){case 0:return[4,this.device.open()];case 1:return i.sent(),[4,this.device.selectConfiguration(this.configuration)];case 2:if(i.sent(),!(t=this.device.configuration.interfaces.filter((function(t){return t.alternates[0].interfaceClass===u.interfaceClass}))).length)throw new Error("No valid interfaces found.");if((e=t.find((function(t){return t.alternates[0].endpoints.length>0})))||(e=t[0]),this.interfaceNumber=e.interfaceNumber,!this.alwaysControlTransfer)for(n=e.alternates[0].endpoints,this.endpointIn=void 0,this.endpointOut=void 0,r=0,o=n;r<o.length;r++)"in"===(s=o[r]).direction?this.endpointIn=s:this.endpointOut=s;return[2,this.device.claimInterface(this.interfaceNumber)]}}))}))},t.prototype.close=function(){return this.device.close()},t.prototype.read=function(){return r(this,void 0,void 0,(function(){var t;return i(this,(function(e){switch(e.label){case 0:return void 0===this.interfaceNumber?[2,Promise.reject("No device opened")]:this.endpointIn?[4,this.device.transferIn(this.endpointIn.endpointNumber,this.packetSize)]:[3,2];case 1:return t=e.sent(),[3,4];case 2:return[4,this.device.controlTransferIn({requestType:"class",recipient:"interface",request:1,value:256,index:this.interfaceNumber},this.packetSize)];case 3:t=e.sent(),e.label=4;case 4:return[2,t.data]}}))}))},t.prototype.write=function(t){return r(this,void 0,void 0,(function(){var e;return i(this,(function(n){switch(n.label){case 0:if(void 0===this.interfaceNumber)throw new Error("No device opened");return e=this.extendBuffer(t,this.packetSize),this.endpointOut?[4,this.device.transferOut(this.endpointOut.endpointNumber,e)]:[3,2];case 1:return n.sent(),[3,4];case 2:return[4,this.device.controlTransferOut({requestType:"class",recipient:"interface",request:9,value:512,index:this.interfaceNumber},e)];case 3:n.sent(),n.label=4;case 4:return[2]}}))}))},t}();t.ADI=U,t.CmsisDAP=y,t.CortexM=P,t.DAPLink=E,t.DEFAULT_CLOCK_FREQUENCY=1e7,t.HID=T,t.USB=L,t.WebUSB=_,Object.defineProperty(t,"__esModule",{value:!0})}));
//# sourceMappingURL=dap.umd.js.map
