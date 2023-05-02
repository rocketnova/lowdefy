(self.webpackChunk_lowdefy_renderer=self.webpackChunk_lowdefy_renderer||[]).push([[941],{51941:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>I});var n=r(12161),o=r.n(n),a=r(99352),l=r(15458),i=r(87062),d=r(43729),s=r(67109),u=r(99425),c=r(36579),g=r(61493),m=r(53906),p=r(66192),w=r(47952);const h={basePath:window.lowdefy.basePath,contexts:{},displayMessage:()=>()=>{},document,imports:{jsActions:window.lowdefy.imports.jsActions,jsOperators:window.lowdefy.imports.jsOperators},inputs:{},link:()=>{},localStorage,registerJsAction:window.lowdefy.registerJsAction,registerJsOperator:window.lowdefy.registerJsOperator,updaters:{},window};delete window.lowdefy.imports,window.location.origin.includes("http://localhost")&&(window.lowdefy=h);const y=l.gql`
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
`,f=({children:e,lowdefy:t})=>{const{data:r,loading:n,error:a}=(0,l.useQuery)(y);if(n)return o().createElement(i.Loading,{type:"Spinner",properties:{height:"100vh"}});if(a)return o().createElement("h1",null,"Error");if(t.homePageId=(0,d.get)(r,"menu.homePageId"),t.initPageId=(0,d.get)(r,"menu.initPageId"),t.lowdefyGlobal=JSON.parse(JSON.stringify((0,d.get)(r,"lowdefyGlobal",{default:{}}))),t.menus=(0,d.get)(r,"menu.menus"),r.authenticated){const e=t.localStorage.getItem("idToken");e||t.auth.logout();const{iat:r,exp:n,aud:o,iss:a,...l}=(0,w.Z)(e);t.user=l}return o().createElement(o().Fragment,null,e)},E=({lowdefy:e})=>{const{search:t}=(0,a.useLocation)();return e.homePageId?o().createElement(a.Redirect,{to:{pathname:`${e.basePath}/${e.homePageId}`,search:t}}):o().createElement(a.Redirect,{to:`${e.basePath}/404`})},P=({lowdefy:e})=>{const{initPageId:t}=e,[r,a]=(0,n.useState)(!1);return d.type.isNone(t)||r?o().createElement(p.Z,{lowdefy:e,initEventsTriggered:a}):o().createElement(p.Z,{lowdefy:e,pageId:t,initEventsTriggered:a})},k=({gqlUri:e})=>(h.updateBlock=e=>h.updaters[e]&&h.updaters[e](),h.client=(0,s.Z)({gqlUri:e,lowdefy:h}),h.auth={login:(0,u.Z)(h),logout:(0,c.Z)(h)},h.user={},o().createElement(i.ErrorBoundary,{fullPage:!0},o().createElement(l.ApolloProvider,{client:h.client},o().createElement(f,{lowdefy:h},o().createElement(m.Z,{methods:{registerMethod:(e,t)=>{h.displayMessage=t}}}),o().createElement(a.Switch,null,o().createElement(a.Route,{exact:!0,path:`${h.basePath}/`},o().createElement(E,{lowdefy:h})),o().createElement(a.Route,{exact:!0,path:`${h.basePath}/auth/openid-callback`},o().createElement(g.Z,{lowdefy:h})),o().createElement(a.Route,{exact:!0,path:`${h.basePath}/:pageId`},o().createElement(P,{lowdefy:h}))))))),I=({gqlUri:e})=>o().createElement(a.BrowserRouter,null,o().createElement(k,{gqlUri:e}))}}]);