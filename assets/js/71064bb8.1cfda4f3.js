"use strict";(self.webpackChunkjsm_docs=self.webpackChunkjsm_docs||[]).push([[9259],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),d=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(n),p=a,h=c["".concat(s,".").concat(p)]||c[p]||m[p]||r;return n?o.createElement(h,i(i({ref:t},u),{},{components:n})):o.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var d=2;d<r;d++)i[d]=n[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5434:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var o=n(7462),a=(n(7294),n(3905));const r={sidebar_position:2,sidebar_label:"FAQ"},i="Introduction",l={unversionedId:"jsm/faq",id:"jsm/faq",title:"Introduction",description:"We see a lot of questions asked that can be answered just by reading our documentation. Our community has gathered our most frequently asked questions and compiled them into a list.",source:"@site/docs/jsm/faq.md",sourceDirName:"jsm",slug:"/jsm/faq",permalink:"/docs/jsm/faq",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"FAQ"},sidebar:"jsmSidebar",previous:{title:"Introduction",permalink:"/docs/jsm/"},next:{title:"EAS",permalink:"/docs/category/eas"}},s={},d=[],u={toc:d},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"We see a lot of questions asked that can be answered just by reading our documentation. Our community has gathered our most frequently asked questions and compiled them into a list."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"This FAQ is only for JSM products. Please visit our main ",(0,a.kt)("a",{parentName:"p",href:"https://support.whitehill.club/docs"},"information & FAQ")," for more generalised queries."),(0,a.kt)("h3",{parentName:"admonition",id:"add-tools"},"How do I add more tools?"),(0,a.kt)("p",{parentName:"admonition"},"These instructions are for our mainbank tills. For SCO v3, use ",(0,a.kt)("a",{parentName:"p",href:"./sco-v3/installation#7"},"this guide"),"."),(0,a.kt)("p",{parentName:"admonition"},"To add a tool, you need to go onto the ",(0,a.kt)("inlineCode",{parentName:"p"},"MasterConfig")," & generate an EAN number, this can be a randomised number. Make it a billion characters, or whatever you want; it doesn't matter as long as it is unique. Once you have created the unique number, make sure you've filled in the details with the new tool using the ",(0,a.kt)("inlineCode",{parentName:"p"},"MasterConfig"),"."),(0,a.kt)("p",{parentName:"admonition"},"Create a ",(0,a.kt)("inlineCode",{parentName:"p"},"StringValue")," in the tool's handle, name the ",(0,a.kt)("inlineCode",{parentName:"p"},"StringValue")," EAN, and place your unique number into its value."),(0,a.kt)("h3",{parentName:"admonition",id:"unanchored-products"},"Why are my products becoming unanchored once rotated in-game?"),(0,a.kt)("p",{parentName:"admonition"},"If you're using the F3X plugin in studio, it tends to have a habit of breaking the welds - so please don't use them when working with our products. If you're using the usual method on studio of rotating, ensure you have selected everything inside the group of the product so the welds aren't automatically deleted."),(0,a.kt)("h3",{parentName:"admonition",id:"linked-together"},"Some of my POS tills are linked together, how do I fix?"),(0,a.kt)("p",{parentName:"admonition"},"This only applies for our mainbank tills."),(0,a.kt)("p",{parentName:"admonition"},"One common mistake is that people forget to change the unique till number. You need to do this by clicking on an individual POS, then click onto the JSM | POS Terminal model, then the Screen block, then Settings. You can also change if you want the till to be on, off, or boot upon server start."),(0,a.kt)("p",{parentName:"admonition"},"If you don't do this, scanning an item might link to another till, or logging in, etc."),(0,a.kt)("h3",{parentName:"admonition",id:"cannot-click-login"},"I can't click login, it won't do anything."),(0,a.kt)("p",{parentName:"admonition"},"This only applies for our mainbank tills."),(0,a.kt)("p",{parentName:"admonition"},"Same as above, there's only a player whitelist integrated, so you'll have to disable the whitelist as a whole if it's for a group. Do not ungroup."),(0,a.kt)("h3",{parentName:"admonition",id:"unexpected-operator-barcode"},'I scanned an operator barcode, and it says "unexpected item", why is this?'),(0,a.kt)("blockquote",{parentName:"admonition"},(0,a.kt)("p",{parentName:"blockquote"},"You cannot directly give yourself the tool via an admin system as the barcode isn't configured with the correct values.")),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Ensure the operator barcode has been placed in the ",(0,a.kt)("inlineCode",{parentName:"li"},"ServerStorage")," without being renamed.")),(0,a.kt)("blockquote",{parentName:"admonition"},(0,a.kt)("p",{parentName:"blockquote"},"Alternatively, you can make the operator barcode already configured in ",(0,a.kt)("inlineCode",{parentName:"p"},"ServerStorage")," rather wasting time printing the barcode. This will let you give the barcode to yourself or to staff automatically.")),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Enter Roblox Studio, find the operator barcode & click on it, opening the handle."),(0,a.kt)("li",{parentName:"ul"},"Modify child ",(0,a.kt)("inlineCode",{parentName:"li"},"OperatorID")," to your Colleague ID you'd like to use for logging in to the machine."),(0,a.kt)("li",{parentName:"ul"},"Modify child ",(0,a.kt)("inlineCode",{parentName:"li"},"SecurityKey")," to the passcode of that Colleague ID, remember, Colleague Identification is basically the same as typing in the pin on the machine manually like you'd do for roleplay."))))}m.isMDXComponent=!0}}]);