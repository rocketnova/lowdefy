(self.webpackChunk_lowdefy_blocks_antd=self.webpackChunk_lowdefy_blocks_antd||[]).push([[97507],{3263:(n,e,t)=>{"use strict";var r=t(95131);Object.defineProperty(e,"__esModule",{value:!0}),e.fillRef=a,e.composeRef=function(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];return function(n){e.forEach((function(e){a(e,n)}))}};var o=r(t(58050));function a(n,e){"function"==typeof n?n(e):"object"===(0,o.default)(n)&&n&&"current"in n&&(n.current=e)}},27247:(n,e,t)=>{"use strict";var r=t(4078);Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.RadioGroupContextProvider=void 0;var o=r(t(73233)).createContext(null),a=o.Provider;e.RadioGroupContextProvider=a;var i=o;e.default=i},52763:(n,e,t)=>{"use strict";var r=t(4078),o=t(95131);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=o(t(82947)),i=o(t(12049)),d=r(t(73233)),l=o(t(88711)),c=o(t(22971)),u=o(t(47625)),p=t(3931),s=o(t(31551)),b=t(27247),f=d.forwardRef((function(n,e){var t=d.useContext(p.ConfigContext),r=t.getPrefixCls,o=t.direction,f=d.useContext(s.default),h=(0,c.default)(n.defaultValue,{value:n.value}),g=(0,i.default)(h,2),v=g[0],y=g[1];return d.createElement(b.RadioGroupContextProvider,{value:{onChange:function(e){var t=v,r=e.target.value;"value"in n||y(r);var o=n.onChange;o&&r!==t&&o(e)},value:v,disabled:n.disabled,name:n.name}},function(){var t,i=n.prefixCls,c=n.className,p=void 0===c?"":c,s=n.options,b=n.optionType,h=n.buttonStyle,g=n.disabled,y=n.children,w=n.size,x=n.style,k=n.id,m=n.onMouseEnter,O=n.onMouseLeave,C=r("radio",i),P="".concat(C,"-group"),j=y;if(s&&s.length>0){var E="button"===b?"".concat(C,"-button"):C;j=s.map((function(n){return"string"==typeof n?d.createElement(u.default,{ref:e,key:n,prefixCls:E,disabled:g,value:n,checked:v===n},n):d.createElement(u.default,{ref:e,key:"radio-group-value-options-".concat(n.value),prefixCls:E,disabled:n.disabled||g,value:n.value,checked:v===n.value,style:n.style},n.label)}))}var Z=w||f,_=(0,l.default)(P,"".concat(P,"-").concat(h),(t={},(0,a.default)(t,"".concat(P,"-").concat(Z),Z),(0,a.default)(t,"".concat(P,"-rtl"),"rtl"===o),t),p);return d.createElement("div",{className:_,style:x,onMouseEnter:m,onMouseLeave:O,id:k},j)}())}));f.defaultProps={buttonStyle:"outline"};var h=d.memo(f);e.default=h},77881:(n,e,t)=>{"use strict";var r=t(95131);Object.defineProperty(e,"__esModule",{value:!0});var o={Group:!0,Button:!0};Object.defineProperty(e,"Group",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(e,"Button",{enumerable:!0,get:function(){return d.default}}),e.default=void 0;var a=r(t(47625)),i=r(t(52763)),d=r(t(17007)),l=t(15528);Object.keys(l).forEach((function(n){"default"!==n&&"__esModule"!==n&&(Object.prototype.hasOwnProperty.call(o,n)||Object.defineProperty(e,n,{enumerable:!0,get:function(){return l[n]}}))}));var c=a.default;c.Button=d.default,c.Group=i.default;var u=c;e.default=u},15528:()=>{},47625:(n,e,t)=>{"use strict";var r=t(4078),o=t(95131);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=o(t(82947)),i=o(t(44067)),d=r(t(73233)),l=o(t(41927)),c=o(t(88711)),u=t(3931),p=o(t(27247)),s=t(3263),b=o(t(51815)),f=function(n,e){var t,r=d.useContext(p.default),o=d.useContext(u.ConfigContext),f=o.getPrefixCls,h=o.direction,g=d.useRef(),v=(0,s.composeRef)(e,g);d.useEffect((function(){(0,b.default)(!("optionType"in n),"Radio","`optionType` is only support in Radio.Group.")}),[]);var y=n.prefixCls,w=n.className,x=n.children,k=n.style,m=function(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(n);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(n,r[o])&&(t[r[o]]=n[r[o]])}return t}(n,["prefixCls","className","children","style"]),O=f("radio",y),C=(0,i.default)({},m);r&&(C.name=r.name,C.onChange=function(e){n.onChange&&n.onChange(e),(null==r?void 0:r.onChange)&&r.onChange(e)},C.checked=n.value===r.value,C.disabled=n.disabled||r.disabled);var P=(0,c.default)(w,(t={},(0,a.default)(t,"".concat(O,"-wrapper"),!0),(0,a.default)(t,"".concat(O,"-wrapper-checked"),C.checked),(0,a.default)(t,"".concat(O,"-wrapper-disabled"),C.disabled),(0,a.default)(t,"".concat(O,"-wrapper-rtl"),"rtl"===h),t));return d.createElement("label",{className:P,style:k,onMouseEnter:n.onMouseEnter,onMouseLeave:n.onMouseLeave},d.createElement(l.default,(0,i.default)({},C,{prefixCls:O,ref:v})),void 0!==x?d.createElement("span",null,x):null)},h=d.forwardRef(f);h.displayName="Radio",h.defaultProps={type:"radio"};var g=h;e.default=g},17007:(n,e,t)=>{"use strict";var r=t(4078),o=t(95131);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=o(t(44067)),i=r(t(73233)),d=o(t(47625)),l=t(3931),c=o(t(27247)),u=function(n,e){var t=i.useContext(c.default),r=i.useContext(l.ConfigContext).getPrefixCls,o=n.prefixCls,u=function(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(n);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(n,r[o])&&(t[r[o]]=n[r[o]])}return t}(n,["prefixCls"]),p=r("radio-button",o);return t&&(u.checked=n.value===t.value,u.disabled=n.disabled||t.disabled),i.createElement(d.default,(0,a.default)({prefixCls:p},u,{type:"radio",ref:e}))},p=i.forwardRef(u);e.default=p},58476:(n,e,t)=>{"use strict";t(70299),t(73589)},35440:(n,e,t)=>{"use strict";t.d(e,{Z:()=>a});var r=t(74453),o=t.n(r)()((function(n){return n[1]}));o.push([n.id,"/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */\n.ant-radio-group {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  color: rgba(0, 0, 0, 0.65);\n  font-size: 14px;\n  font-variant: tabular-nums;\n  line-height: 1.5715;\n  list-style: none;\n  font-feature-settings: 'tnum';\n  display: inline-block;\n  font-size: 0;\n  line-height: unset;\n}\n.ant-radio-group .ant-badge-count {\n  z-index: 1;\n}\n.ant-radio-group > .ant-badge:not(:first-child) > .ant-radio-button-wrapper {\n  border-left: none;\n}\n.ant-radio-wrapper {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  color: rgba(0, 0, 0, 0.65);\n  font-size: 14px;\n  font-variant: tabular-nums;\n  line-height: 1.5715;\n  list-style: none;\n  font-feature-settings: 'tnum';\n  position: relative;\n  display: inline-block;\n  margin-right: 8px;\n  white-space: nowrap;\n  cursor: pointer;\n}\n.ant-radio {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  color: rgba(0, 0, 0, 0.65);\n  font-size: 14px;\n  font-variant: tabular-nums;\n  line-height: 1.5715;\n  list-style: none;\n  font-feature-settings: 'tnum';\n  position: relative;\n  top: 0px;\n  display: inline-block;\n  line-height: 1;\n  white-space: nowrap;\n  vertical-align: sub;\n  outline: none;\n  cursor: pointer;\n}\n.ant-radio-wrapper:hover .ant-radio,\n.ant-radio:hover .ant-radio-inner,\n.ant-radio-input:focus + .ant-radio-inner {\n  border-color: #697a8c;\n}\n.ant-radio-input:focus + .ant-radio-inner {\n  box-shadow: 0 0 0 3px rgba(105, 122, 140, 0.08);\n}\n.ant-radio-checked::after {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border: 1px solid #697a8c;\n  border-radius: 50%;\n  visibility: hidden;\n  animation: antRadioEffect 0.36s ease-in-out;\n  animation-fill-mode: both;\n  content: '';\n}\n.ant-radio:hover::after,\n.ant-radio-wrapper:hover .ant-radio::after {\n  visibility: visible;\n}\n.ant-radio-inner {\n  position: relative;\n  top: 0;\n  left: 0;\n  display: block;\n  width: 16px;\n  height: 16px;\n  background-color: #fff;\n  border-color: #d9d9d9;\n  border-style: solid;\n  border-width: 1px;\n  border-radius: 100px;\n  transition: all 0.3s;\n}\n.ant-radio-inner::after {\n  position: absolute;\n  top: 3px;\n  left: 3px;\n  display: table;\n  width: 8px;\n  height: 8px;\n  background-color: #697a8c;\n  border-top: 0;\n  border-left: 0;\n  border-radius: 8px;\n  transform: scale(0);\n  opacity: 0;\n  transition: all 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);\n  content: ' ';\n}\n.ant-radio-input {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1;\n  cursor: pointer;\n  opacity: 0;\n}\n.ant-radio-checked .ant-radio-inner {\n  border-color: #697a8c;\n}\n.ant-radio-checked .ant-radio-inner::after {\n  transform: scale(1);\n  opacity: 1;\n  transition: all 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);\n}\n.ant-radio-disabled .ant-radio-inner {\n  background-color: #f5f5f5;\n  border-color: #d9d9d9 !important;\n  cursor: not-allowed;\n}\n.ant-radio-disabled .ant-radio-inner::after {\n  background-color: rgba(0, 0, 0, 0.2);\n}\n.ant-radio-disabled .ant-radio-input {\n  cursor: not-allowed;\n}\n.ant-radio-disabled + span {\n  color: rgba(0, 0, 0, 0.25);\n  cursor: not-allowed;\n}\nspan.ant-radio + * {\n  padding-right: 8px;\n  padding-left: 8px;\n}\n.ant-radio-button-wrapper {\n  position: relative;\n  display: inline-block;\n  height: 32px;\n  margin: 0;\n  padding: 0 15px;\n  color: rgba(0, 0, 0, 0.65);\n  font-size: 14px;\n  line-height: 30px;\n  background: #fff;\n  border: 1px solid #d9d9d9;\n  border-top-width: 1.02px;\n  border-left-width: 0;\n  cursor: pointer;\n  transition: color 0.3s, background 0.3s, border-color 0.3s, box-shadow 0.3s;\n}\n.ant-radio-button-wrapper a {\n  color: rgba(0, 0, 0, 0.65);\n}\n.ant-radio-button-wrapper > .ant-radio-button {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n.ant-radio-group-large .ant-radio-button-wrapper {\n  height: 40px;\n  font-size: 16px;\n  line-height: 38px;\n}\n.ant-radio-group-small .ant-radio-button-wrapper {\n  height: 24px;\n  padding: 0 7px;\n  line-height: 22px;\n}\n.ant-radio-button-wrapper:not(:first-child)::before {\n  position: absolute;\n  top: -1px;\n  left: -1px;\n  display: block;\n  box-sizing: content-box;\n  width: 1px;\n  height: 100%;\n  padding: 1px 0;\n  background-color: #d9d9d9;\n  transition: background-color 0.3s;\n  content: '';\n}\n.ant-radio-button-wrapper:first-child {\n  border-left: 1px solid #d9d9d9;\n  border-radius: 2px 0 0 2px;\n}\n.ant-radio-button-wrapper:last-child {\n  border-radius: 0 2px 2px 0;\n}\n.ant-radio-button-wrapper:first-child:last-child {\n  border-radius: 2px;\n}\n.ant-radio-button-wrapper:hover {\n  position: relative;\n  color: #697a8c;\n}\n.ant-radio-button-wrapper:focus-within {\n  box-shadow: 0 0 0 3px rgba(105, 122, 140, 0.08);\n}\n.ant-radio-button-wrapper .ant-radio-inner,\n.ant-radio-button-wrapper input[type='checkbox'],\n.ant-radio-button-wrapper input[type='radio'] {\n  width: 0;\n  height: 0;\n  opacity: 0;\n  pointer-events: none;\n}\n.ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled) {\n  z-index: 1;\n  color: #697a8c;\n  background: #fff;\n  border-color: #697a8c;\n}\n.ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled)::before {\n  background-color: #697a8c;\n}\n.ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):first-child {\n  border-color: #697a8c;\n}\n.ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):hover {\n  color: #8b9299;\n  border-color: #8b9299;\n}\n.ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):hover::before {\n  background-color: #8b9299;\n}\n.ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):active {\n  color: #475566;\n  border-color: #475566;\n}\n.ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):active::before {\n  background-color: #475566;\n}\n.ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):focus-within {\n  box-shadow: 0 0 0 3px rgba(105, 122, 140, 0.08);\n}\n.ant-radio-group-solid .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled) {\n  color: #fff;\n  background: #697a8c;\n  border-color: #697a8c;\n}\n.ant-radio-group-solid .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):hover {\n  color: #fff;\n  background: #8b9299;\n  border-color: #8b9299;\n}\n.ant-radio-group-solid .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):active {\n  color: #fff;\n  background: #475566;\n  border-color: #475566;\n}\n.ant-radio-group-solid .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):focus-within {\n  box-shadow: 0 0 0 3px rgba(105, 122, 140, 0.08);\n}\n.ant-radio-button-wrapper-disabled {\n  color: rgba(0, 0, 0, 0.25);\n  background-color: #f5f5f5;\n  border-color: #d9d9d9;\n  cursor: not-allowed;\n}\n.ant-radio-button-wrapper-disabled:first-child,\n.ant-radio-button-wrapper-disabled:hover {\n  color: rgba(0, 0, 0, 0.25);\n  background-color: #f5f5f5;\n  border-color: #d9d9d9;\n}\n.ant-radio-button-wrapper-disabled:first-child {\n  border-left-color: #d9d9d9;\n}\n.ant-radio-button-wrapper-disabled.ant-radio-button-wrapper-checked {\n  color: #fff;\n  background-color: #e6e6e6;\n  border-color: #d9d9d9;\n  box-shadow: none;\n}\n@keyframes antRadioEffect {\n  0% {\n    transform: scale(1);\n    opacity: 0.5;\n  }\n  100% {\n    transform: scale(1.6);\n    opacity: 0;\n  }\n}\n@supports (-moz-appearance: meterbar) and (background-blend-mode: difference, normal) {\n  .ant-radio {\n    vertical-align: text-bottom;\n  }\n}\n.ant-radio-group.ant-radio-group-rtl {\n  direction: rtl;\n}\n.ant-radio-wrapper.ant-radio-wrapper-rtl {\n  margin-right: 0;\n  margin-left: 8px;\n  direction: rtl;\n}\n.ant-radio-button-wrapper.ant-radio-button-wrapper-rtl {\n  border-right-width: 0;\n  border-left-width: 1px;\n}\n.ant-radio-button-wrapper.ant-radio-button-wrapper-rtl.ant-radio-button-wrapper:not(:first-child)::before {\n  right: -1px;\n  left: 0;\n}\n.ant-radio-button-wrapper.ant-radio-button-wrapper-rtl.ant-radio-button-wrapper:first-child {\n  border-right: 1px solid #d9d9d9;\n  border-radius: 0 2px 2px 0;\n}\n.ant-radio-button-wrapper-checked:not([class*=' ant-radio-button-wrapper-disabled']).ant-radio-button-wrapper:first-child {\n  border-right-color: #8b9299;\n}\n.ant-radio-button-wrapper.ant-radio-button-wrapper-rtl.ant-radio-button-wrapper:last-child {\n  border-radius: 2px 0 0 2px;\n}\n.ant-radio-button-wrapper.ant-radio-button-wrapper-rtl.ant-radio-button-wrapper-disabled:first-child {\n  border-right-color: #d9d9d9;\n}\n",""]);const a=o},41927:(n,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>g});var r=t(85225),o=t(54581),a=t(53322),i=t(86851),d=t(90610),l=t(45459),c=t(5912),u=t(96174),p=t(73233),s=t.n(p),b=t(88711),f=t.n(b),h=function(n){(0,c.Z)(t,n);var e=(0,u.Z)(t);function t(n){var r;(0,d.Z)(this,t),(r=e.call(this,n)).handleChange=function(n){var e=r.props,t=e.disabled,o=e.onChange;t||("checked"in r.props||r.setState({checked:n.target.checked}),o&&o({target:(0,i.Z)((0,i.Z)({},r.props),{},{checked:n.target.checked}),stopPropagation:function(){n.stopPropagation()},preventDefault:function(){n.preventDefault()},nativeEvent:n.nativeEvent}))},r.saveInput=function(n){r.input=n};var o="checked"in n?n.checked:n.defaultChecked;return r.state={checked:o},r}return(0,l.Z)(t,[{key:"focus",value:function(){this.input.focus()}},{key:"blur",value:function(){this.input.blur()}},{key:"render",value:function(){var n,e=this.props,t=e.prefixCls,i=e.className,d=e.style,l=e.name,c=e.id,u=e.type,p=e.disabled,b=e.readOnly,h=e.tabIndex,g=e.onClick,v=e.onFocus,y=e.onBlur,w=e.onKeyDown,x=e.onKeyPress,k=e.onKeyUp,m=e.autoFocus,O=e.value,C=e.required,P=(0,a.Z)(e,["prefixCls","className","style","name","id","type","disabled","readOnly","tabIndex","onClick","onFocus","onBlur","onKeyDown","onKeyPress","onKeyUp","autoFocus","value","required"]),j=Object.keys(P).reduce((function(n,e){return"aria-"!==e.substr(0,5)&&"data-"!==e.substr(0,5)&&"role"!==e||(n[e]=P[e]),n}),{}),E=this.state.checked,Z=f()(t,i,(n={},(0,o.Z)(n,"".concat(t,"-checked"),E),(0,o.Z)(n,"".concat(t,"-disabled"),p),n));return s().createElement("span",{className:Z,style:d},s().createElement("input",(0,r.Z)({name:l,id:c,type:u,required:C,readOnly:b,disabled:p,tabIndex:h,className:"".concat(t,"-input"),checked:!!E,onClick:g,onFocus:v,onBlur:y,onKeyUp:k,onKeyDown:w,onKeyPress:x,onChange:this.handleChange,autoFocus:m,ref:this.saveInput,value:O},j)),s().createElement("span",{className:"".concat(t,"-inner")}))}}],[{key:"getDerivedStateFromProps",value:function(n,e){return"checked"in n?(0,i.Z)((0,i.Z)({},e),{},{checked:n.checked}):null}}]),t}(p.Component);h.defaultProps={prefixCls:"rc-checkbox",className:"",style:{},type:"checkbox",defaultChecked:!1,onFocus:function(){},onBlur:function(){},onChange:function(){},onKeyDown:function(){},onKeyPress:function(){},onKeyUp:function(){}};const g=h},22971:(n,e,t)=>{"use strict";var r=t(4078),o=t(95131);Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(n,e){var t=e||{},r=t.defaultValue,o=t.value,d=t.onChange,l=t.postState,c=i.useState((function(){return void 0!==o?o:void 0!==r?"function"==typeof r?r():r:"function"==typeof n?n():n})),u=(0,a.default)(c,2),p=u[0],s=u[1],b=void 0!==o?o:p;l&&(b=l(b));var f=i.useRef(!0);return i.useEffect((function(){f.current?f.current=!1:void 0===o&&s(o)}),[o]),[b,function(n){s(n),b!==n&&d&&d(n,b)}]};var a=o(t(12049)),i=r(t(73233))},73589:(n,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>i});var r=t(578),o=t.n(r),a=t(35440);o()(a.Z,{insert:"head",singleton:!1});const i=a.Z.locals||{}},96174:(n,e,t)=>{"use strict";t.d(e,{Z:()=>a});var r=t(94614),o=t(40343);function a(n){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}();return function(){var t,a=(0,r.Z)(n);if(e){var i=(0,r.Z)(this).constructor;t=Reflect.construct(a,arguments,i)}else t=a.apply(this,arguments);return(0,o.Z)(this,t)}}},85225:(n,e,t)=>{"use strict";function r(){return(r=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(this,arguments)}t.d(e,{Z:()=>r})},86851:(n,e,t)=>{"use strict";t.d(e,{Z:()=>a});var r=t(54581);function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function a(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){(0,r.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}}}]);