"use strict";(self.webpackChunkjsm_docs=self.webpackChunkjsm_docs||[]).push([[369],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,h=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8311:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>I,contentTitle:()=>S,default:()=>j,frontMatter:()=>A,metadata:()=>O,toc:()=>x});var a=n(7462),r=n(7294),o=n(3905),i=n(6010),l=n(2466),s=n(6550),u=n(1980),c=n(7392),p=n(12);function m(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??m(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=d(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,u]=f({queryString:n,groupId:a}),[c,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,p.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),b=(()=>{const e=s??c;return h({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{b&&l(b)}),[b]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),m(e)}),[u,m,o]),tabValues:o}}var k=n(2389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:n,selectedValue:o,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),m=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==o&&(p(t),s(a))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>c.push(e),onKeyDown:d,onClick:m},l,{className:(0,i.Z)("tabs__item",y.tabItem,l?.className,{"tabs__item--active":o===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function N(e){const t=b(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",y.tabList)},r.createElement(g,(0,a.Z)({},e,t)),r.createElement(v,(0,a.Z)({},e,t)))}function w(e){const t=(0,k.Z)();return r.createElement(N,(0,a.Z)({key:String(t)},e))}const C={tabItem:"tabItem_Ymn6"};function T(e){let{children:t,hidden:n,className:a}=e;return r.createElement("div",{role:"tabpanel",className:(0,i.Z)(C.tabItem,a),hidden:n},t)}const A={sidebar_position:1},S="Installation",O={unversionedId:"jsm/sco-v3/installation",id:"jsm/sco-v3/installation",title:"Installation",description:"Download the recent available file for this product via Axon. If you were using SCO v2 before SCO v3, it is important to note that the setup process has changed massively.",source:"@site/docs/jsm/sco-v3/installation.mdx",sourceDirName:"jsm/sco-v3",slug:"/jsm/sco-v3/installation",permalink:"/docs/jsm/sco-v3/installation",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"jsmSidebar",previous:{title:"SCO v3",permalink:"/docs/category/sco-v3"},next:{title:"Themes",permalink:"/docs/jsm/sco-v3/themes"}},I={},x=[{value:"1) Enable HTTP Requests",id:"1",level:3},{value:"2) Product Insertion",id:"2",level:3},{value:"3) Folder Movement",id:"3",level:3},{value:"4) Whole System Configuration",id:"4",level:3},{value:"5) Operator Barcodes &amp; Pins",id:"5",level:3},{value:"6) Pick &amp; Mix",id:"6",level:3},{value:"7) Adding Items",id:"7",level:3}],E={toc:x},P="wrapper";function j(e){let{components:t,...r}=e;return(0,o.kt)(P,(0,a.Z)({},E,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"installation"},"Installation"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Download the recent available file for this product via ",(0,o.kt)("a",{parentName:"p",href:"https://axon.whitehill.club"},"Axon"),". If you were using SCO v2 before SCO v3, it is important to note that the setup process has changed massively.")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"This product comes with the ",(0,o.kt)("strong",{parentName:"p"},"JSM SelfServ"),", an ATM which can also work with the self-checkouts. You must own this side-product for the ATM to work, as it is not part of your SCO v3 purchase. It is available on our ",(0,o.kt)("a",{parentName:"p",href:"https://www.roblox.com/games/13188104119"},"ePortal"),".")),(0,o.kt)("h3",{id:"1"},"1) Enable HTTP Requests"),(0,o.kt)("iframe",{width:"705.61",height:"397.5",src:"https://www.youtube.com/embed/qtKN_3Moi7M",title:"Tutorial | Enable HTTP Requests",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"}),(0,o.kt)("h3",{id:"2"},"2) Product Insertion"),(0,o.kt)("p",null,"Insert your file by 'dragging' the product file into Roblox studio with your game fully loaded. Use ",(0,o.kt)("inlineCode",{parentName:"p"},"CTRL + U")," to ungroup the model. You can delete anything relevant to the ATM if you do not own it."),(0,o.kt)("h3",{id:"3"},"3) Folder Movement"),(0,o.kt)("p",null,"Move ",(0,o.kt)("inlineCode",{parentName:"p"},"JSM | ATM Tools"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"JSM | UI Template"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Receipt"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Debit Card")," into ",(0,o.kt)("strong",{parentName:"p"},"ServerStorage"),"."),(0,o.kt)("h3",{id:"4"},"4) Whole System Configuration"),(0,o.kt)("p",null,"Inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"JSM | SelfCheckout V3")," folder, you will find the ",(0,o.kt)("inlineCode",{parentName:"p"},"SystemConfig")," script. Double-click it to be shown the different options that can be customised. This step will contain some features to elaborate, although the rest is annotated or self-explanatory."),(0,o.kt)(w,{mdxType:"Tabs"},(0,o.kt)(T,{value:"uitheme",label:"UITheme",default:!0,mdxType:"TabItem"},(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If you set this to 'Custom', it will load your own theme from ",(0,o.kt)("strong",{parentName:"li"},"ServerStorage"),"."),(0,o.kt)("li",{parentName:"ul"},"If you set this to 'Default', it will load the commonly used JSM UI."),(0,o.kt)("li",{parentName:"ul"},"We offer some additional themes created by other creators, check out the ",(0,o.kt)("strong",{parentName:"li"},"Themes")," page for information."))),(0,o.kt)(T,{value:"maintenance",label:"Maintenance",mdxType:"TabItem"},(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"It is important to note that not all self-checkouts support this feature."),(0,o.kt)("li",{parentName:"ul"},"Some checkouts, not all, are presented with an 'on/off' button."))),(0,o.kt)(T,{value:"ingamestaff",label:"InGameStaff",mdxType:"TabItem"},(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"This feature is used to disable interventions, e.g, help call, when a staff member is not present in-game to keep checkouts running"),(0,o.kt)("li",{parentName:"ul"},"You can control the ",(0,o.kt)("inlineCode",{parentName:"li"},"StaffThreshold")," to set the bare minimum of staff required before disabling interventions")))),(0,o.kt)("h3",{id:"5"},"5) Operator Barcodes & Pins"),(0,o.kt)("p",null,"Inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"JSM | SelfCheckout V3")," folder, you will find the ",(0,o.kt)("inlineCode",{parentName:"p"},"Accounts")," settings script under ",(0,o.kt)("inlineCode",{parentName:"p"},"Deploy"),". You can manage the access level, operator ID and pins through this script."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Employee")," - able to handle basic interventions, e.g, age approval\n",(0,o.kt)("inlineCode",{parentName:"p"},"Manager")," - ability to close & open checkouts\n",(0,o.kt)("inlineCode",{parentName:"p"},"Administrator")," - ability to access the system functions section"),(0,o.kt)("p",null,"The ID in each account must be ",(0,o.kt)("strong",{parentName:"p"},"unique"),". To setup the actual operator barcode, click the tool, open the handle and click ",(0,o.kt)("inlineCode",{parentName:"p"},"SCO-AUTH"),". You can then update the information underneath attributes, including the ",(0,o.kt)("inlineCode",{parentName:"p"},"OperatorID")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"SecurityKey"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"barcodeConfiguring",src:n(1614).Z,width:"352",height:"443"})),(0,o.kt)("h3",{id:"6"},"6) Pick & Mix"),(0,o.kt)("p",null,"We offer several types of different checkouts. Some checkouts differ, such as the scanner or the ability to accept cash. You can choose and delete anything that you're not interested in."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"To duplicate (create more) of a certain self-checkout, click the checkout and hit ",(0,o.kt)("inlineCode",{parentName:"li"},"CTRL + D")),(0,o.kt)("li",{parentName:"ol"},"Ensure the new self checkout is in the ",(0,o.kt)("inlineCode",{parentName:"li"},"Terminals")," folder."),(0,o.kt)("li",{parentName:"ol"},"For your new checkout, open its path on Explorer and double-click ",(0,o.kt)("inlineCode",{parentName:"li"},"Settings"),"."),(0,o.kt)("li",{parentName:"ol"},"Set the ",(0,o.kt)("inlineCode",{parentName:"li"},"LaneNumber")," to another unique number that hasn't been used by any other self-checkouts.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"examplePathOfCheckout",src:n(2945).Z,width:"227",height:"70"})),(0,o.kt)("p",null,"You can also adjust the ",(0,o.kt)("inlineCode",{parentName:"p"},"CardOnly")," feature to disable cash payments. The ",(0,o.kt)("inlineCode",{parentName:"p"},"StartMode")," feature has 4 different labelled options, used to control the boot process when the game starts."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"If you fail to set the ",(0,o.kt)("inlineCode",{parentName:"p"},"LaneNumber")," to something unique, your checkout won't boot. ")),(0,o.kt)("h3",{id:"7"},"7) Adding Items"),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"poppadom")," is an example item. You can use the example item to copy and paste the configuration to add items, or use the instructions given below. It is important to note that once a product has been scanned & bought, the customer won't be able to rescan that specific item."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create a bindable function named ",(0,o.kt)("inlineCode",{parentName:"li"},"SCOItem"),", this must be under the tool and ",(0,o.kt)("strong",{parentName:"li"},"not")," in ",(0,o.kt)("inlineCode",{parentName:"li"},"Handle")),(0,o.kt)("li",{parentName:"ol"},"In the bindable function, add a ",(0,o.kt)("strong",{parentName:"li"},"BoolValue")," named ",(0,o.kt)("inlineCode",{parentName:"li"},"AgeRestricted"),". Set this to true to enable age/check 25 verification."),(0,o.kt)("li",{parentName:"ol"},"In the bindable function, add a ",(0,o.kt)("strong",{parentName:"li"},"NumberValue")," named ",(0,o.kt)("inlineCode",{parentName:"li"},"Cost"),". Change the value to the cost of your product."),(0,o.kt)("li",{parentName:"ol"},"Inside the ",(0,o.kt)("inlineCode",{parentName:"li"},"Handle"),", add a ",(0,o.kt)("strong",{parentName:"li"},"BoolValue")," named ",(0,o.kt)("inlineCode",{parentName:"li"},"EAS_Active")," and set it to true. This is for customers who own the anti-theft gates.")))}j.isMDXComponent=!0},2945:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,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"},1614:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/operatorBarcode-af7772a2ac4811e738f4c2e8274b9776.png"}}]);