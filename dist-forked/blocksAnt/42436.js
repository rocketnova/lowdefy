(self.webpackChunk_lowdefy_blocks_antd=self.webpackChunk_lowdefy_blocks_antd||[]).push([[42436],{60417:(e,t,n)=>{"use strict";var r=n(4078);Object.defineProperty(t,"__esModule",{value:!0}),t.replaceElement=a,t.cloneElement=function(e,t){return a(e,e,t)},t.isValidElement=void 0;var o=r(n(73233)),l=o.isValidElement;function a(e,t,n){return l(e)?o.cloneElement(e,"function"==typeof n?n():n):t}t.isValidElement=l},97892:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.tupleNum=t.tuple=void 0,t.tuple=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t},t.tupleNum=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t}},6730:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>c}),n(64253);var r=n(23759),o=n(73233),l=n.n(o),a=n(14249),i=e=>{var{blockId:t,content:n,properties:o,methods:i}=e;return l().createElement(r.default,{id:t,title:(0,a.renderHtml)({html:o.title,methods:i}),overlayStyle:i.makeCssClass(o.overlayStyle,{styleObjectOnly:!0}),arrowPointAtCenter:o.arrowPointAtCenter,autoAdjustOverflow:o.autoAdjustOverflow,color:o.color,defaultVisible:o.defaultVisible,destroyTooltipOnHide:o.destroyTooltipOnHide,mouseEnterDelay:o.mouseEnterDelay,mouseLeaveDelay:o.mouseLeaveDelay,placement:o.placement,trigger:o.trigger||"hover",zIndex:o.zIndex,onVisibleChange:()=>i.triggerEvent({name:"onVisibleChange"})},n.content&&n.content(),"")};i.defaultProps=a.blockDefaultProps;const c=i},15090:function(e){(function(){var t,n,r,o,l,a;"undefined"!=typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:"undefined"!=typeof process&&null!==process&&process.hrtime?(e.exports=function(){return(t()-l)/1e6},n=process.hrtime,o=(t=function(){var e;return 1e9*(e=n())[0]+e[1]})(),a=1e9*process.uptime(),l=o-a):Date.now?(e.exports=function(){return Date.now()-r},r=Date.now()):(e.exports=function(){return(new Date).getTime()-r},r=(new Date).getTime())}).call(this)},20270:(e,t,n)=>{for(var r=n(15090),o="undefined"==typeof window?n.g:window,l=["moz","webkit"],a="AnimationFrame",i=o["request"+a],c=o["cancel"+a]||o["cancelRequest"+a],u=0;!i&&u<l.length;u++)i=o[l[u]+"Request"+a],c=o[l[u]+"Cancel"+a]||o[l[u]+"CancelRequest"+a];if(!i||!c){var s=0,f=0,d=[];i=function(e){if(0===d.length){var t=r(),n=Math.max(0,16.666666666666668-(t-s));s=n+t,setTimeout((function(){var e=d.slice(0);d.length=0;for(var t=0;t<e.length;t++)if(!e[t].cancelled)try{e[t].callback(s)}catch(e){setTimeout((function(){throw e}),0)}}),Math.round(n))}return d.push({handle:++f,callback:e,cancelled:!1}),f},c=function(e){for(var t=0;t<d.length;t++)d[t].handle===e&&(d[t].cancelled=!0)}}e.exports=function(e){return i.call(o,e)},e.exports.cancel=function(){c.apply(o,arguments)},e.exports.polyfill=function(e){e||(e=o),e.requestAnimationFrame=i,e.cancelAnimationFrame=c}}}]);