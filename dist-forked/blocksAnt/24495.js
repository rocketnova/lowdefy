(self.webpackChunk_lowdefy_blocks_antd=self.webpackChunk_lowdefy_blocks_antd||[]).push([[24495],{55092:(t,e,n)=>{"use strict";n.d(e,{Z:()=>o});var r=n(90711),i=n.n(r);function o(t){return t instanceof HTMLElement?t:i().findDOMNode(t)}},88499:(t,e,n)=>{"use strict";n.d(e,{mH:()=>o,sQ:()=>s,Yr:()=>c});var r=n(17347),i=n(93869);function o(t,e){"function"==typeof t?t(e):"object"===(0,r.Z)(t)&&t&&"current"in t&&(t.current=e)}function s(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(t){e.forEach((function(e){o(e,t)}))}}function c(t){var e,n,r=(0,i.isMemo)(t)?t.type.type:t.type;return!("function"==typeof r&&!(null===(e=r.prototype)||void 0===e?void 0:e.render)||"function"==typeof t&&!(null===(n=t.prototype)||void 0===n?void 0:n.render))}},96174:(t,e,n)=>{"use strict";n.d(e,{Z:()=>o});var r=n(94614),i=n(40343);function o(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=(0,r.Z)(t);if(e){var s=(0,r.Z)(this).constructor;n=Reflect.construct(o,arguments,s)}else n=o.apply(this,arguments);return(0,i.Z)(this,n)}}},86851:(t,e,n)=>{"use strict";n.d(e,{Z:()=>o});var r=n(54581);function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){(0,r.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}},35507:(t,e,n)=>{"use strict";n.d(e,{Z:()=>E});var r=function(){if("undefined"!=typeof Map)return Map;function t(t,e){var n=-1;return t.some((function(t,r){return t[0]===e&&(n=r,!0)})),n}return function(){function e(){this.__entries__=[]}return Object.defineProperty(e.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),e.prototype.get=function(e){var n=t(this.__entries__,e),r=this.__entries__[n];return r&&r[1]},e.prototype.set=function(e,n){var r=t(this.__entries__,e);~r?this.__entries__[r][1]=n:this.__entries__.push([e,n])},e.prototype.delete=function(e){var n=this.__entries__,r=t(n,e);~r&&n.splice(r,1)},e.prototype.has=function(e){return!!~t(this.__entries__,e)},e.prototype.clear=function(){this.__entries__.splice(0)},e.prototype.forEach=function(t,e){void 0===e&&(e=null);for(var n=0,r=this.__entries__;n<r.length;n++){var i=r[n];t.call(e,i[1],i[0])}},e}()}(),i="undefined"!=typeof window&&"undefined"!=typeof document&&window.document===document,o=void 0!==n.g&&n.g.Math===Math?n.g:"undefined"!=typeof self&&self.Math===Math?self:"undefined"!=typeof window&&window.Math===Math?window:Function("return this")(),s="function"==typeof requestAnimationFrame?requestAnimationFrame.bind(o):function(t){return setTimeout((function(){return t(Date.now())}),1e3/60)},c=["top","right","bottom","left","width","height","size","weight"],u="undefined"!=typeof MutationObserver,a=function(){function t(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(t,e){var n=!1,r=!1,i=0;function o(){n&&(n=!1,t()),r&&u()}function c(){s(o)}function u(){var t=Date.now();if(n){if(t-i<2)return;r=!0}else n=!0,r=!1,setTimeout(c,20);i=t}return u}(this.refresh.bind(this))}return t.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},t.prototype.removeObserver=function(t){var e=this.observers_,n=e.indexOf(t);~n&&e.splice(n,1),!e.length&&this.connected_&&this.disconnect_()},t.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},t.prototype.updateObservers_=function(){var t=this.observers_.filter((function(t){return t.gatherActive(),t.hasActive()}));return t.forEach((function(t){return t.broadcastActive()})),t.length>0},t.prototype.connect_=function(){i&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),u?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},t.prototype.disconnect_=function(){i&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},t.prototype.onTransitionEnd_=function(t){var e=t.propertyName,n=void 0===e?"":e;c.some((function(t){return!!~n.indexOf(t)}))&&this.refresh()},t.getInstance=function(){return this.instance_||(this.instance_=new t),this.instance_},t.instance_=null,t}(),h=function(t,e){for(var n=0,r=Object.keys(e);n<r.length;n++){var i=r[n];Object.defineProperty(t,i,{value:e[i],enumerable:!1,writable:!1,configurable:!0})}return t},f=function(t){return t&&t.ownerDocument&&t.ownerDocument.defaultView||o},d=b(0,0,0,0);function p(t){return parseFloat(t)||0}function l(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return e.reduce((function(e,n){return e+p(t["border-"+n+"-width"])}),0)}var v="undefined"!=typeof SVGGraphicsElement?function(t){return t instanceof f(t).SVGGraphicsElement}:function(t){return t instanceof f(t).SVGElement&&"function"==typeof t.getBBox};function _(t){return i?v(t)?function(t){var e=t.getBBox();return b(0,0,e.width,e.height)}(t):function(t){var e=t.clientWidth,n=t.clientHeight;if(!e&&!n)return d;var r=f(t).getComputedStyle(t),i=function(t){for(var e={},n=0,r=["top","right","bottom","left"];n<r.length;n++){var i=r[n],o=t["padding-"+i];e[i]=p(o)}return e}(r),o=i.left+i.right,s=i.top+i.bottom,c=p(r.width),u=p(r.height);if("border-box"===r.boxSizing&&(Math.round(c+o)!==e&&(c-=l(r,"left","right")+o),Math.round(u+s)!==n&&(u-=l(r,"top","bottom")+s)),!function(t){return t===f(t).document.documentElement}(t)){var a=Math.round(c+o)-e,h=Math.round(u+s)-n;1!==Math.abs(a)&&(c-=a),1!==Math.abs(h)&&(u-=h)}return b(i.left,i.top,c,u)}(t):d}function b(t,e,n,r){return{x:t,y:e,width:n,height:r}}var y=function(){function t(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=b(0,0,0,0),this.target=t}return t.prototype.isActive=function(){var t=_(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},t.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},t}(),m=function(t,e){var n,r,i,o,s,c,u,a=(r=(n=e).x,i=n.y,o=n.width,s=n.height,c="undefined"!=typeof DOMRectReadOnly?DOMRectReadOnly:Object,u=Object.create(c.prototype),h(u,{x:r,y:i,width:o,height:s,top:i,right:r+o,bottom:s+i,left:r}),u);h(this,{target:t,contentRect:a})},w=function(){function t(t,e,n){if(this.activeObservations_=[],this.observations_=new r,"function"!=typeof t)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=e,this.callbackCtx_=n}return t.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof f(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)||(e.set(t,new y(t)),this.controller_.addObserver(this),this.controller_.refresh())}},t.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof f(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)&&(e.delete(t),e.size||this.controller_.removeObserver(this))}},t.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},t.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach((function(e){e.isActive()&&t.activeObservations_.push(e)}))},t.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,e=this.activeObservations_.map((function(t){return new m(t.target,t.broadcastRect())}));this.callback_.call(t,e,t),this.clearActive()}},t.prototype.clearActive=function(){this.activeObservations_.splice(0)},t.prototype.hasActive=function(){return this.activeObservations_.length>0},t}(),g="undefined"!=typeof WeakMap?new WeakMap:new r,O=function t(e){if(!(this instanceof t))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=a.getInstance(),r=new w(e,n,this);g.set(this,r)};["observe","unobserve","disconnect"].forEach((function(t){O.prototype[t]=function(){var e;return(e=g.get(this))[t].apply(e,arguments)}}));const E=void 0!==o.ResizeObserver?o.ResizeObserver:O}}]);