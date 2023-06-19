"use strict";(self.webpackChunkunity_tsif_documentation=self.webpackChunkunity_tsif_documentation||[]).push([[67],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=u(n),d=i,g=f["".concat(s,".").concat(d)]||f[d]||p[d]||a;return n?r.createElement(g,o(o({ref:t},l),{},{components:n})):r.createElement(g,o({ref:t},l))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4887:(e,t,n)=>{n.d(t,{AA:()=>o,V3:()=>c,qh:()=>a});n(7462),n(7294);var r=n(3905);function i(e,t,n,i){return(0,r.kt)("div",{style:{backgroundColor:i,color:n,border:"1px "+n+" solid",borderRadius:"5px",padding:".1rem .4rem"}},t)}const a=e=>{let{children:t}=e;return i(0,"Released","#afa","#181")},o=e=>{let{children:t}=e;return i(0,"In Progress","#ffa","#882")},c=e=>{let{children:t}=e;return i(0,"Planned","#aff","#288")}},349:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var r=n(7462),i=(n(7294),n(3905));n(4887);const a={sidebar_position:2,title:"IPFS Gateway Config"},o=void 0,c={unversionedId:"quick-start/ipfs-gateway-config",id:"version-1.0.0/quick-start/ipfs-gateway-config",title:"IPFS Gateway Config",description:"Get IPFS Gateway Config Function",source:"@site/versioned_docs/version-1.0.0/quick-start/ipfs-gateway-config.mdx",sourceDirName:"quick-start",slug:"/quick-start/ipfs-gateway-config",permalink:"/Unity-TSIF-Documentation/docs/quick-start/ipfs-gateway-config",draft:!1,editUrl:"https://github.com/3StudioOnline/Unity-TSIF-Documentation/edit/master/versioned_docs/version-1.0.0/quick-start/ipfs-gateway-config.mdx",tags:[],version:"1.0.0",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"IPFS Gateway Config"},sidebar:"tutorialSidebar",previous:{title:"Debugging",permalink:"/Unity-TSIF-Documentation/docs/quick-start/Debugging"},next:{title:"IPFS Pinning Service Config",permalink:"/Unity-TSIF-Documentation/docs/quick-start/ipfs-pinning-service-config"}},s={},u=[{value:"Get IPFS Gateway Config Function",id:"get-ipfs-gateway-config-function",level:2}],l={toc:u};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"get-ipfs-gateway-config-function"},"Get IPFS Gateway Config Function"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"Ipfs.GetIpfsHttpGatewayConfig(IpfsHttpGateway ipfsHttpGateway)\n")),(0,i.kt)("p",null,"This a helper function that holds default information for commonly used ",(0,i.kt)("inlineCode",{parentName:"p"},"IPFS")," gateways."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Additional gateways will be added in future updates if needed.")),(0,i.kt)("p",null,"This function returns an ",(0,i.kt)("inlineCode",{parentName:"p"},"IpfsHttpGatewayConfig")," object that contains:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Url"),": The gateway URL to send the Http requests to.")))}p.isMDXComponent=!0}}]);