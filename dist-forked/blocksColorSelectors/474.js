(self.webpackChunk_lowdefy_blocks_color_selectors=self.webpackChunk_lowdefy_blocks_color_selectors||[]).push([[474],{80474:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>b});var o=r(73233),n=r.n(o),l=r(79132),c=r(44506),i=r(14249);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var p=e=>{var{blockId:t,loading:r,methods:o,properties:i,required:a,validation:u,value:p}=e;return n().createElement(c.Label,{blockId:t,loading:r,methods:o,properties:s({title:i.title,size:i.size},i.label),required:a,validation:u,content:{content:()=>n().createElement(l.GithubPicker,{id:"".concat(t,"_input"),className:o.makeCssClass([{marginBottom:"0px !important"},i.inputStyle]),color:p||i.defaultColor||"#000000",colors:i.colors,triangle:i.triangle||"hide",width:i.width||"100%",onChangeComplete:e=>{o.setValue(e.hex?e.hex:"#000000"),o.triggerEvent({name:"onChange"})}})}})};p.defaultProps=i.blockDefaultProps;const b=p}}]);