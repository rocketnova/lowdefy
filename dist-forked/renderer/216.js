(self.webpackChunk_lowdefy_renderer=self.webpackChunk_lowdefy_renderer||[]).push([[216],{74216:(e,t,n)=>{"use strict";n.r(t);var r=n(12161),o=n.n(r),i=n(56679),a=n.n(i),s=n(44274),l=n.n(s),c=n(78235);l()(c.Z,{insert:"head",singleton:!1}),c.Z.locals;var d=n(99352),u=n(15458),p=n(87062),f=n(43729),m=n(67109),h=n(99425),g=n(36579),w=n(61493),y=n(53906),v=n(66192),b=n(47952);const E={basePath:window.lowdefy.basePath,contexts:{},displayMessage:()=>()=>{},document,imports:{jsActions:window.lowdefy.imports.jsActions,jsOperators:window.lowdefy.imports.jsOperators},inputs:{},link:()=>{},localStorage,registerJsAction:window.lowdefy.registerJsAction,registerJsOperator:window.lowdefy.registerJsOperator,updaters:{},window};delete window.lowdefy.imports,window.location.origin.includes("http://localhost")&&(window.lowdefy=E);const I=u.gql`
  fragment MenuLinkFragment on MenuLink {
    id
    type
    properties
    pageId
    url
  }
  query getRoot {
    authenticated
    lowdefyGlobal
    menu {
      menus {
        id
        menuId
        properties
        links {
          ...MenuLinkFragment
          ... on MenuGroup {
            id
            type
            properties
            links {
              ... on MenuGroup {
                id
                type
                properties
                links {
                  ...MenuLinkFragment
                }
              }
              ...MenuLinkFragment
            }
          }
        }
      }
      homePageId
      initPageId
    }
  }
`,S=({children:e,lowdefy:t})=>{const{data:n,loading:r,error:i}=(0,u.useQuery)(I);if(r)return o().createElement(p.Loading,{type:"Spinner",properties:{height:"100vh"}});if(i)return o().createElement("h1",null,"Error");if(t.homePageId=(0,f.get)(n,"menu.homePageId"),t.initPageId=(0,f.get)(n,"menu.initPageId"),t.lowdefyGlobal=JSON.parse(JSON.stringify((0,f.get)(n,"lowdefyGlobal",{default:{}}))),t.menus=(0,f.get)(n,"menu.menus"),n.authenticated){const e=t.localStorage.getItem("idToken");e||t.auth.logout();const{iat:n,exp:r,aud:o,iss:i,...a}=(0,b.Z)(e);t.user=a}return o().createElement(o().Fragment,null,e)},L=({lowdefy:e})=>{const{search:t}=(0,d.useLocation)();return e.homePageId?o().createElement(d.Redirect,{to:{pathname:`${e.basePath}/${e.homePageId}`,search:t}}):o().createElement(d.Redirect,{to:`${e.basePath}/404`})},k=({lowdefy:e})=>{const{initPageId:t}=e,[n,i]=(0,r.useState)(!1);return f.type.isNone(t)||n?o().createElement(v.Z,{lowdefy:e,initEventsTriggered:i}):o().createElement(v.Z,{lowdefy:e,pageId:t,initEventsTriggered:i})},P=({gqlUri:e})=>(E.updateBlock=e=>E.updaters[e]&&E.updaters[e](),E.client=(0,m.Z)({gqlUri:e,lowdefy:E}),E.auth={login:(0,h.Z)(E),logout:(0,g.Z)(E)},E.user={},o().createElement(p.ErrorBoundary,{fullPage:!0},o().createElement(u.ApolloProvider,{client:E.client},o().createElement(S,{lowdefy:E},o().createElement(y.Z,{methods:{registerMethod:(e,t)=>{E.displayMessage=t}}}),o().createElement(d.Switch,null,o().createElement(d.Route,{exact:!0,path:`${E.basePath}/`},o().createElement(L,{lowdefy:E})),o().createElement(d.Route,{exact:!0,path:`${E.basePath}/auth/openid-callback`},o().createElement(w.Z,{lowdefy:E})),o().createElement(d.Route,{exact:!0,path:`${E.basePath}/:pageId`},o().createElement(k,{lowdefy:E}))))))),M=({gqlUri:e})=>o().createElement(d.BrowserRouter,null,o().createElement(P,{gqlUri:e}));a().render(o().createElement(M,null),document.getElementById("root"))},78235:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(6031),o=n.n(r)()((function(e){return e[1]}));o.push([e.id,'/*\n  Copyright 2020-2021 Lowdefy, Inc\n\n  Licensed under the Apache License, Version 2.0 (the "License");\n  you may not use this file except in compliance with the License.\n  You may obtain a copy of the License at\n\n      http://www.apache.org/licenses/LICENSE-2.0\n\n  Unless required by applicable law or agreed to in writing, software\n  distributed under the License is distributed on an "AS IS" BASIS,\n  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  See the License for the specific language governing permissions and\n  limitations under the License.\n*/\n\nbody {\n  margin: 0;\n  padding: 0;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n* {\n  box-sizing: border-box;\n}\n\n@media print {\n  .hide-on-print {\n    display: none !important;\n  }\n}\n',""]);const i=o},6031:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);r&&o[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}},44274:(e,t,n)=>{"use strict";var r,o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function a(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function s(e,t){for(var n={},r=[],o=0;o<e.length;o++){var s=e[o],l=t.base?s[0]+t.base:s[0],c=n[l]||0,d="".concat(l," ").concat(c);n[l]=c+1;var u=a(d),p={css:s[1],media:s[2],sourceMap:s[3]};-1!==u?(i[u].references++,i[u].updater(p)):i.push({identifier:d,updater:h(p,t),references:1}),r.push(d)}return r}function l(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=n.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var c,d=(c=[],function(e,t){return c[e]=t,c.filter(Boolean).join("\n")});function u(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=d(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function p(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var f=null,m=0;function h(e,t){var n,r,o;if(t.singleton){var i=m++;n=f||(f=l(t)),r=u.bind(null,n,i,!1),o=u.bind(null,n,i,!0)}else n=l(t),r=p.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=a(n[r]);i[o].references--}for(var l=s(e,t),c=0;c<n.length;c++){var d=a(n[c]);0===i[d].references&&(i[d].updater(),i.splice(d,1))}n=l}}}}}]);