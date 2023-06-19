"use strict";(self.webpackChunkunity_tsif_documentation=self.webpackChunkunity_tsif_documentation||[]).push([[283],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>s});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=c(r),s=a,f=u["".concat(i,".").concat(s)]||u[s]||m[s]||o;return r?n.createElement(f,l(l({ref:t},d),{},{components:r})):n.createElement(f,l({ref:t},d))}));function s(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=u;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},4887:(e,t,r)=>{r.d(t,{AA:()=>l,V3:()=>p,qh:()=>o});r(7462),r(7294);var n=r(3905);function a(e,t,r,a){return(0,n.kt)("div",{style:{backgroundColor:a,color:r,border:"1px "+r+" solid",borderRadius:"5px",padding:".1rem .4rem"}},t)}const o=e=>{let{children:t}=e;return a(0,"Released","#afa","#181")},l=e=>{let{children:t}=e;return a(0,"In Progress","#ffa","#882")},p=e=>{let{children:t}=e;return a(0,"Planned","#aff","#288")}},2226:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>p,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=r(7462),a=(r(7294),r(3905)),o=r(4887);const l={},p="Roadmap",i={type:"mdx",permalink:"/Unity-TSIF-Documentation/roadmap",source:"@site/src/pages/roadmap.mdx",title:"Roadmap",description:"| Plugin Version |    Status     | Release Date | Feature                                 | Unity2022.x - 2020.x |",frontMatter:{}},c=[],d={toc:c};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"roadmap"},"Roadmap"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"Plugin Version"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Status"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Release Date"),(0,a.kt)("th",{parentName:"tr",align:null},"Feature"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Unity",(0,a.kt)("br",null),(0,a.kt)("nobr",null,"2022.x - 2020.x")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"1.0.x"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)(o.qh,{mdxType:"Released"})),(0,a.kt)("td",{parentName:"tr",align:"center"},"2023-06-xx"),(0,a.kt)("td",{parentName:"tr",align:null},"Core"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"1.1.x"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)(o.AA,{mdxType:"InProgress"})),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:null},"IPNS support"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"1.2.x"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)(o.V3,{mdxType:"Planned"})),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:null},"CAR support (directories & large files)"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"1.3.x"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)(o.V3,{mdxType:"Planned"})),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:null},"Addressable Asset System support"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714")))))}m.isMDXComponent=!0}}]);