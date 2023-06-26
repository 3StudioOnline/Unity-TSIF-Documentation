"use strict";(self.webpackChunkunity_tsif_documentation=self.webpackChunkunity_tsif_documentation||[]).push([[738],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),f=p(n),u=o,m=f["".concat(l,".").concat(u)]||f[u]||c[u]||a;return n?i.createElement(m,r(r({ref:t},d),{},{components:n})):i.createElement(m,r({ref:t},d))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var p=2;p<a;p++)r[p]=n[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4887:(e,t,n)=>{n.d(t,{AA:()=>r,V3:()=>s,qh:()=>a});n(7462),n(7294);var i=n(3905);function o(e,t,n,o){return(0,i.kt)("div",{style:{backgroundColor:o,color:n,border:"1px "+n+" solid",borderRadius:"5px",padding:".1rem .4rem"}},t)}const a=e=>{let{children:t}=e;return o(0,"Released","#afa","#181")},r=e=>{let{children:t}=e;return o(0,"In Progress","#ffa","#882")},s=e=>{let{children:t}=e;return o(0,"Planned","#aff","#288")}},1159:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var i=n(7462),o=(n(7294),n(3905));n(4887);const a={sidebar_position:4,title:"Download File"},r=void 0,s={unversionedId:"ipfs-functions/download-file",id:"version-1.0.0/ipfs-functions/download-file",title:"Download File",description:"Download File Function (Task)",source:"@site/versioned_docs/version-1.0.0/ipfs-functions/download-file.mdx",sourceDirName:"ipfs-functions",slug:"/ipfs-functions/download-file",permalink:"/Unity-TSIF-Documentation/docs/ipfs-functions/download-file",draft:!1,editUrl:"https://github.com/3StudioOnline/Unity-TSIF-Documentation/edit/master/versioned_docs/version-1.0.0/ipfs-functions/download-file.mdx",tags:[],version:"1.0.0",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Download File"},sidebar:"tutorialSidebar",previous:{title:"Get Data As Image",permalink:"/Unity-TSIF-Documentation/docs/ipfs-functions/get-data-as-image"},next:{title:"Upload Data",permalink:"/Unity-TSIF-Documentation/docs/ipfs-functions/upload-data"}},l={},p=[{value:"Download File Function (Task)",id:"download-file-function-task",level:2},{value:"Download File Function (Delegate)",id:"download-file-function-delegate",level:2}],d={toc:p};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"download-file-function-task"},"Download File Function (Task)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},"Task<> IPFS.IpfsFunctionLibrary.DownloadFile(\n    IpfsHttpGatewayConfig ipfsHttpGatewayConfig,\n    IpfsAddress ipfsAddress,\n    string writeToFilepath,\n    bool createPathIfMissing,\n    bool overwriteExistingFile)\n")),(0,o.kt)("p",null,"This function downloads a file from the ",(0,o.kt)("em",{parentName:"p"},"IPFS")," network for the specified CID/Path. This function requires\ninputs as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ipfsHttpGatewayConfig"),": Holds the URL of the gateway to send the request to."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ipfsAddress"),": Holds the CID and path of the file on ",(0,o.kt)("em",{parentName:"li"},"IPFS")," network."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"writeToFilepath"),": The filepath where the downloaded data is written to."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"createPathIfMissing"),": Creates the filepath to where the downloaded data should be written to\nif it is missing."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"overwriteExistingFile"),": If set to false and the file exists this function will abort with failure.\nOtherwise, an existing file will be overwritten.")),(0,o.kt)("p",null,"The returned ",(0,o.kt)("em",{parentName:"p"},"Response")," is a ",(0,o.kt)("inlineCode",{parentName:"p"},"Task")," that holds data such as headers, status code, and body of the response of the HTTP\nrequest."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},"Task<(bool success, string errorMessage, HttpResponse response, string cid)>\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"If ",(0,o.kt)("inlineCode",{parentName:"p"},"success")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," that means that the response from the ",(0,o.kt)("em",{parentName:"p"},"IPFS")," network was successful and writing file to disk to\nthe specified path was also successful.")),(0,o.kt)("h2",{id:"download-file-function-delegate"},"Download File Function (Delegate)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},"void IPFS.IpfsFunctionLibrary.DownloadFile(\n    IpfsHttpGatewayConfig ipfsHttpGatewayConfig,\n    IpfsAddress ipfsAddress,\n    string writeToFilepath,\n    bool createPathIfMissing,\n    bool overwriteExistingFile,\n    IpfsDownloadFileDelegate responseDelegate)\n")),(0,o.kt)("p",null,"This is a wrapper function for the async implementation. It exists to provide\nthe same functionality but using a delegate for handling responses."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},"delegate void IpfsDownloadFileDelegate(\n    bool success,\n    string errorMessage,\n    HttpResponse response)\n")))}c.isMDXComponent=!0}}]);