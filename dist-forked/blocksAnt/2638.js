(self.webpackChunk_lowdefy_blocks_antd=self.webpackChunk_lowdefy_blocks_antd||[]).push([[2638],{32116:(e,t,n)=>{"use strict";var i=n(95131);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.responsiveMap=t.responsiveArray=void 0;var r=i(n(82947)),s=i(n(44067));t.responsiveArray=["xxl","xl","lg","md","sm","xs"];var o={xs:"(max-width: 575px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",xxl:"(min-width: 1600px)"};t.responsiveMap=o;var a=new Map,l=-1,u={},c={matchHandlers:{},dispatch:function(e){return u=e,a.forEach((function(e){return e(u)})),a.size>=1},subscribe:function(e){return a.size||this.register(),l+=1,a.set(l,e),e(u),l},unsubscribe:function(e){a.delete(e),a.size||this.unregister()},unregister:function(){var e=this;Object.keys(o).forEach((function(t){var n=o[t],i=e.matchHandlers[n];null==i||i.mql.removeListener(null==i?void 0:i.listener)})),a.clear()},register:function(){var e=this;Object.keys(o).forEach((function(t){var n=o[t],i=function(n){var i=n.matches;e.dispatch((0,s.default)((0,s.default)({},u),(0,r.default)({},t,i)))},a=window.matchMedia(n);a.addListener(i),e.matchHandlers[n]={mql:a,listener:i},i(a)}))}};t.default=c},13444:(e,t,n)=>{"use strict";var i=n(95131);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(12049)),s=n(73233),o=i(n(32116));t.default=function(){var e=(0,s.useState)({}),t=(0,r.default)(e,2),n=t[0],i=t[1];return(0,s.useEffect)((function(){var e=o.default.subscribe((function(e){i(e)}));return function(){return o.default.unsubscribe(e)}}),[]),n}},56974:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>h}),n(27148);var i=n(42294),r=n(73233),s=n.n(r),o=n(14249),a=n(79942),l=e=>{var{properties:t,value:n}=e;return a.type.isObject(n)&&a.type.isNumber(n.pageSize)?n.pageSize:a.type.isArray(t.pageSizeOptions)?t.pageSizeOptions[0]:10},u=e=>{var{eventName:t,methods:n}=e;return(e,i)=>{n.setValue({current:e,pageSize:i,skip:(e-1)*i}),n.triggerEvent({name:t,event:{current:e,pageSize:i,skip:e*i}})}},c=e=>{var{blockId:t,methods:n,properties:r,value:o}=e,c=a.type.isFunction(r.showTotal)?r.showTotal:(e,t)=>a.type.isString(r.showTotal)?r.showTotal:0===e?"No items":"".concat(t[0],"-").concat(t[1]," of ").concat(e," items");return s().createElement(i.default,{id:t,onShowSizeChange:u({eventName:"onSizeChange",methods:n}),onChange:u({eventName:"onChange",methods:n}),total:void 0!==r.total?r.total:100,size:r.size,simple:!!r.simple,showTotal:c,showSizeChanger:r.showSizeChanger,showQuickJumper:r.showQuickJumper,pageSizeOptions:r.pageSizeOptions||[10,20,30,40],hideOnSinglePage:r.hideOnSinglePage,disabled:r.disabled,pageSize:l({properties:r,value:o}),current:!a.type.isNone(o)&&a.type.isObject(o)&&a.type.isNumber(o.current)?o.current:1})};c.defaultProps=o.blockDefaultProps;const h=c},97968:(e,t,n)=>{"use strict";n.d(t,{Z:()=>v});var i=n(86851),r=n(90610),s=n(45459),o=n(5912),a=n(96174),l=n(73233),u=n(55092),c=n(13294),h=n(41608),d=n(88499),f=n(35507),p=function(e){(0,o.Z)(n,e);var t=(0,a.Z)(n);function n(){var e;return(0,r.Z)(this,n),(e=t.apply(this,arguments)).resizeObserver=null,e.childNode=null,e.currentElement=null,e.state={width:0,height:0,offsetHeight:0,offsetWidth:0},e.onResize=function(t){var n=e.props.onResize,r=t[0].target,s=r.getBoundingClientRect(),o=s.width,a=s.height,l=r.offsetWidth,u=r.offsetHeight,c=Math.floor(o),h=Math.floor(a);if(e.state.width!==c||e.state.height!==h||e.state.offsetWidth!==l||e.state.offsetHeight!==u){var d={width:c,height:h,offsetWidth:l,offsetHeight:u};e.setState(d),n&&Promise.resolve().then((function(){n((0,i.Z)((0,i.Z)({},d),{},{offsetWidth:l,offsetHeight:u}),r)}))}},e.setChildNode=function(t){e.childNode=t},e}return(0,s.Z)(n,[{key:"componentDidMount",value:function(){this.onComponentUpdated()}},{key:"componentDidUpdate",value:function(){this.onComponentUpdated()}},{key:"componentWillUnmount",value:function(){this.destroyObserver()}},{key:"onComponentUpdated",value:function(){if(this.props.disabled)this.destroyObserver();else{var e=(0,u.Z)(this.childNode||this);e!==this.currentElement&&(this.destroyObserver(),this.currentElement=e),!this.resizeObserver&&e&&(this.resizeObserver=new f.Z(this.onResize),this.resizeObserver.observe(e))}}},{key:"destroyObserver",value:function(){this.resizeObserver&&(this.resizeObserver.disconnect(),this.resizeObserver=null)}},{key:"render",value:function(){var e=this.props.children,t=(0,c.Z)(e);if(t.length>1)(0,h.ZP)(!1,"Find more than one child node with `children` in ResizeObserver. Will only observe first one.");else if(0===t.length)return(0,h.ZP)(!1,"`children` of ResizeObserver is empty. Nothing is in observe."),null;var n=t[0];if(l.isValidElement(n)&&(0,d.Yr)(n)){var i=n.ref;t[0]=l.cloneElement(n,{ref:(0,d.sQ)(i,this.setChildNode)})}return 1===t.length?t[0]:t.map((function(e,t){return!l.isValidElement(e)||"key"in e&&null!==e.key?e:l.cloneElement(e,{key:"".concat("rc-observer-key","-").concat(t)})}))}}]),n}(l.Component);p.displayName="ResizeObserver";const v=p},13294:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var i=n(73233),r=n.n(i),s=n(93869);function o(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=[];return r().Children.forEach(e,(function(e){(null!=e||t.keepEmpty)&&(Array.isArray(e)?n=n.concat(o(e)):(0,s.isFragment)(e)&&e.props?n=n.concat(o(e.props.children,t)):n.push(e))})),n}},41608:(e,t,n)=>{"use strict";n.d(t,{ET:()=>a,ZP:()=>l});var i={};function r(e,t){}function s(e,t){}function o(e,t,n){t||i[n]||(e(!1,n),i[n]=!0)}function a(e,t){o(s,e,t)}const l=function(e,t){o(r,e,t)}},85225:(e,t,n)=>{"use strict";function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}n.d(t,{Z:()=>i})},36560:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>i});const i=function(e,t){for(var n=Object.assign({},e),i=0;i<t.length;i+=1)delete n[t[i]];return n}}}]);