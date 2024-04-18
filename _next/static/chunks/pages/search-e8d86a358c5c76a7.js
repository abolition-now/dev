(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9603,5789],{7570:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return N},default:function(){return search}});var n=r(7294),a=r(6873),i=r(9499),c=r(5893);function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach(function(t){(0,i.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var o={facetsActive:[]},s=(0,n.createContext)(void 0);function facetsReducer(e,t){if("updateFacetsActive"===t.type)return _objectSpread(_objectSpread({},e),{},{facetsActive:t.facetsActive})}function FacetsProvider(e){var t=e.initialState,r=e.children,a=(0,n.useReducer)(facetsReducer,void 0===t?o:t),i=a[0],u=a[1];return(0,c.jsx)(s.Provider,{value:{facetsDispatch:u,facetsState:i},children:r})}function useFacetsState(){var e=(0,n.useContext)(s);if(void 0===e)throw Error("useFacetsState must be used within a FacetsProvider");return e}var u=r(8557),l=r(6835),d=r(2765),f=r(2854),p=(0,f.zo)("span",{position:"absolute",display:"flex",justifyContent:"center",alignItems:"center",top:"-$gr1",right:"$gr2",width:"$gr3",height:"$gr3",fontSize:"$gr1",color:"var(--accent-1)",backgroundColor:"var(--accent-12)",borderRadius:"50%"}),h=(0,f.zo)(u.Vq.xz,{position:"relative",right:"0",boxShadow:"none",transition:"$canopySlideIn"}),g=(0,f.zo)("div",{display:"flex",position:"fixed",left:"0",zIndex:"5",width:"100%",variants:{isScrolling:{true:(0,i.Z)({},"".concat(h),{right:"50%",transform:"translate(50%)",backfaceVisibility:"hidden",webkitFontSmoothing:"subpixel-antialiased",boxShadow:"5px 5px 38px ".concat(d.t3E.grayA9)})}}}),v=r(5407),y=r(5014),x=r(2469),b=r(5049),hooks_useElementPosition=function(e){var t=(0,n.useState)(0),r=t[0],a=t[1];return(0,n.useEffect)(function(){var updatePosition=function(){a(window.pageYOffset),e.current&&a(window.pageYOffset-(null==e?void 0:e.current.offsetTop))};return window.addEventListener("scroll",updatePosition),updatePosition(),function(){return window.removeEventListener("scroll",updatePosition)}},[e]),r},Activate=function(){var e=n.useState(!1),t=(0,l.Z)(e,2),r=t[0],i=t[1],o=n.useRef(null),s=hooks_useElementPosition(o),d=Array.from(useFacetsState().facetsState.facetsActive.keys()).filter(function(e){return"q"!==e}).length;return(0,n.useEffect)(function(){return i(s>b.J9-100)},[s,b.J9]),(0,c.jsx)(g,{isScrolling:r,ref:o,children:(0,c.jsx)(a.Z,{containerType:"wide",children:(0,c.jsx)(u.kC,{justify:"end",children:(0,c.jsx)(h,{children:(0,c.jsxs)(v.O,{size:"3",children:[(0,y.EK)("searchFilter")," ",(0,c.jsx)(x.hsZ,{}),d>0&&(0,c.jsx)(p,{children:d})]})})})})})},j=r(9802),m=(0,f.zo)("div",{display:"flex",flexDirection:"column",flexWrap:"nowrap",width:"100%",overflow:"scroll"}),S=r(7058),w=(0,f.zo)(j.xz,{display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%",padding:"$gr2 0",backgroundColor:"transparent",border:"none",cursor:"pointer",borderTop:"1px solid var(--gray-4)",fontSize:"$gr3","> span":{display:"flex",alignItems:"center",gap:"$gr1"},"&:hover, &:focus":{color:"var(--accent-11)"},svg:{transition:"$canopyAll",transform:"rotate(-90deg)",color:"var(--gray-10)"},"&[aria-expanded='true']":{color:"var(--gray-12) !important",fontWeight:"800",svg:{color:"var(--gray-12) !important",transform:"rotate(0deg)"}}}),O=(0,f.zo)(j.VY,{padding:"$gr1 0 $gr4"}),P=(0,f.zo)(j.h4,{}),E=(0,f.zo)(j.ck,{"&:first-child":(0,i.Z)({},"".concat(w),{border:"none"})}),_=r(6069),k=(0,f.zo)("label",{transition:"$canopyAll",cursor:"pointer",fontWeight:"500",variants:{isChecked:{true:{color:"var(--gray-12) !important",fontWeight:"700"}}},"&:hover, &:focus":{color:"var(--accent-11)"},span:{color:"var(--gray-10) !important",fontSize:"$gr1"}}),C=(0,f.zo)(_.fC,{position:"relative",zIndex:"0",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:"$gr3",height:"$gr3",margin:"0 $gr1 0 0",background:"var(--gray-3)",boxShadow:"inset 1px 1px 2px var(--gray-a4)",border:"none",borderRadius:"50%",cursor:"pointer",transition:"$canopyAll",flexShrink:"0","&::before":{position:"absolute",width:"100%",height:"100%",content:"",background:"linear-gradient(-45deg, var(--accent-11), var(--accent-8))",opacity:"0",borderRadius:"50%",transition:"$canopyAll",zIndex:"0"},"&[aria-checked='true']":{"&::before":{opacity:"1"}}}),F=(0,f.zo)(_.z$,{position:"absolute",zIndex:"1",color:"var(--accent-1)",textShadow:"1px 1px 2px var(--accent-a12)"}),$=(0,f.zo)("span",{display:"flex",margin:"0 0 $gr1",color:"var(--gray-11)",fontSize:"$gr2","&:last-child":{margin:"0"}}),Option=function(e){var t=e.active,r=e.facet,n=e.identifier,a=e.option,i=useFacetsState(),o=i.facetsDispatch,s=i.facetsState.facetsActive;return(0,c.jsxs)($,{children:[(0,c.jsx)(C,{value:a.value,id:n,checked:t,onCheckedChange:function(e){s.delete(r),e&&s.append(r,a.slug),o({type:"updateFacetsActive",facetsActive:s})},children:(0,c.jsx)(F,{asChild:!0,children:(0,c.jsx)(x.nQG,{})})}),(0,c.jsxs)(k,{htmlFor:n,isChecked:t,children:[a.value," ",(0,c.jsxs)("span",{children:["(",a.doc_count,")"]})]})]})},Facet=function(e){var t=e.label,r=e.slug,a=e.values,i=useFacetsState().facetsState.facetsActive,o=null==i?void 0:i.toString(),s={slug:"",value:(0,y.EK)("searchFilterAny")},u=(0,n.useState)({slug:"",value:(0,y.EK)("searchFilterAny")}),l=u[0],d=u[1];return(0,n.useEffect)(function(){var e,t=null==i?void 0:i.get(r);d(t?{slug:t,value:null===(e=a.find(function(e){return e.slug===t}))||void 0===e?void 0:e.value}:s)},[i,o,r,a]),(0,c.jsxs)(E,{value:r,children:[(0,c.jsx)(P,{asChild:!0,children:(0,c.jsxs)(w,{children:[(0,c.jsxs)("span",{children:[t," ",(0,c.jsx)(x.v4q,{})]}),(0,c.jsx)("span",{children:l.value})]})}),(0,c.jsx)(O,{children:a.map(function(e,t){var n="".concat(r,"-").concat(e.slug,"-").concat(t);return(0,c.jsx)(Option,{active:l.slug===e.slug,facet:r,identifier:n,option:e},n)})})]})},z=r(1163);function Modal_ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function Modal_objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Modal_ownKeys(Object(r),!0).forEach(function(t){(0,i.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Modal_ownKeys(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var Modal=function(){var e=useFacetsState(),t=e.facetsState,r=e.facetsDispatch,a=t.facetsActive,i=(0,z.useRouter)(),handleViewResults=function(){i.push({pathname:"/search",query:a.toString()})};return(0,c.jsx)(u.Vq.VY,{children:(0,c.jsxs)(m,{children:[(0,c.jsx)(u.kC,{mb:"3",align:"center",justify:"between",asChild:!0,children:(0,c.jsxs)("header",{children:[(0,c.jsx)(u.Vq.Dx,{as:"h3",mb:"0",size:"4",children:(0,c.jsx)("span",{children:(0,y.EK)("searchFilter")})}),(0,c.jsx)(u.Vq.x8,{"aria-label":(0,y.EK)("searchFilterClose"),children:(0,c.jsx)(u.hU,{variant:"soft",size:"2",style:{cursor:"pointer"},children:(0,c.jsx)(x.Pxu,{})})})]})}),(0,c.jsx)("div",{children:(0,c.jsx)(j.fC,{type:"single",collapsible:!0,children:S.map(function(e){return(0,n.createElement)(Facet,Modal_objectSpread(Modal_objectSpread({},e),{},{key:e.slug}))})})}),(0,c.jsx)(u.kC,{mt:"5",style:{justifyContent:"space-between"},asChild:!0,children:(0,c.jsxs)("footer",{children:[(0,c.jsx)(u.Vq.x8,{children:(0,c.jsx)(v.O,{variant:"soft",onClick:function(){S.forEach(function(e){return a.delete(e.slug)}),r({type:"updateFacetsActive",facetsActive:a}),handleViewResults()},children:(0,y.EK)("searchFilterClear")})}),(0,c.jsx)(u.Vq.x8,{children:(0,c.jsx)(v.O,{onClick:handleViewResults,children:(0,y.EK)("searchFilterSubmit")})})]})})]})})},R=r(7642),Facets=function(){var e=useFacetsState().facetsDispatch,t=(0,R.MQ)().canopyState.searchParams;return(0,n.useEffect)(function(){e({type:"updateFacetsActive",facetsActive:t})},[t,e]),(0,c.jsxs)(u.Vq.fC,{children:[(0,c.jsx)(Activate,{}),(0,c.jsx)(Modal,{})]})},Facets_Facets=function(){return(0,c.jsx)(FacetsProvider,{children:(0,c.jsx)(Facets,{})})},A=r(7843),D=(0,f.zo)("div",{height:"$gr5",padding:"$gr4 0 $gr2","@sm":{height:"$gr5",padding:"$gr3 0 $gr2"},"#canopy-search-summary":{position:"relative",display:"block",fontSize:"$gr3",color:"var(--gray-11)",fontWeight:"500",padding:"$gr2 0","@sm":{fontSize:"$gr3"}}}),q=r(2929),Z=r(7812),getPartOf=function(e){var t=new URL(e);return t.searchParams.delete("page"),[{id:t,type:"Collection"}]},K=r(3981),I=r(633),M=r(6486),V=r.n(M),U=r(4921),getDocuments=function(e,t){var r=new U.Z.Document(t);K.forEach(function(e){return r.add(e)});var n=r.search(e).reduce(function(e,t){return(0,Z.Z)(new Set([].concat((0,Z.Z)(e),(0,Z.Z)(t.result))))},[]);return n.length>0?n:[]},getResults=function(e,t,r,n){var a,i=t?getDocuments(t,n):K.map(function(e){return e.id}),c=0===r.length?I:(a=r.map(function(e){var t=S.find(function(t){return t.slug===e.label}).values.find(function(t){return t.slug===e.value});return null==t?void 0:t.docs}),I.filter(function(e){return V().intersection.apply(V(),(0,Z.Z)(a)).includes(e.index)}));return i.filter(function(e){return c.some(function(t){return t.index===e})}).map(function(t){var r;return{id:(r=c.find(function(e){return e.index===t})).id,type:"Manifest",label:r.label,thumbnail:r.thumbnail,homepage:[{id:"".concat(e,"/works/").concat(r.slug),type:"Text",label:r.label}]}})};function request_ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function request_objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?request_ownKeys(Object(r),!0).forEach(function(t){(0,i.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):request_ownKeys(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var searchRequest=function(e){var t,r=e.params,n=e.baseUrl,a=e.flexSearch,i=S.map(function(e){return e.slug}).filter(function(e){return r.has(e)}).map(function(e){var t=r.get(e);return{label:e,value:t}}),c=null==r?void 0:r.get("q"),o=null==r?void 0:r.get("page"),s=new URL("".concat(n,"/search"));s.search=null==r?void 0:r.toString();var u=getResults(n,c,i,a),l=Array.from(Array(Math.ceil(u.length/10)).keys()).map(function(e){var t=u.slice(10*e,10*(e+1)).map(function(e){return e.id});return{page:e+1,items:t}}),d=o?(t=parseInt(o),l.find(function(e){return e.page===t}).items.map(function(e){return u.find(function(t){return t.id===e})})):l.map(function(e){var t=new URL(s);return t.searchParams.append("page",e.page),{id:t.toString(),type:"Collection",label:{none:["Page ".concat(e.page," (").concat(e.items.length," Total)")]}}});return request_objectSpread(request_objectSpread({"@context":"https://iiif.io/api/presentation/3/context.json",id:s.toString(),type:"Collection",label:{none:[c||"All Results"]},items:d},o?{summary:{none:["".concat(u.length,"}")]}}:{summary:{none:["".concat(u.length)]}}),o&&{partOf:getPartOf(s)})},hooks_usePageResults=function(e,t,r){var a=(0,n.useState)([]),i=a[0],c=a[1],o=(0,n.useState)(!1),s=o[0],u=o[1],l=(0,n.useState)(!0),d=l[0],f=l[1],p=(0,n.useState)(!1),h=p[0],g=p[1],v=(0,R.MQ)().canopyState.config,reset=function(){c([]),u(!1),f(!0),g(!1)};return(0,n.useEffect)(function(){return reset()},[r]),(0,n.useEffect)(function(){if(f(!0),u(!1),(null==e?void 0:e.length)>0&&e[t]){var r,n=searchRequest({params:new URL(e[t]).searchParams,baseUrl:null==v?void 0:v.baseUrl,flexSearch:null==v?void 0:null===(r=v.search)||void 0===r?void 0:r.flexSearch}).items;c(function(e){return[].concat((0,Z.Z)(e),(0,Z.Z)(n))}),g(e.length>t),f(!1)}},[v,e,t]),{data:i,error:s,loading:d,more:h}},Results=function(e){var t=e.pages,r=e.query,a=(0,n.useState)(0),i=a[0],o=a[1],s=hooks_usePageResults(t,i,r),u=s.data,l=s.loading,d=s.more;(0,n.useEffect)(function(){return o(0)},[r]);var f=(0,n.useRef)(),p=(0,n.useCallback)(function(e){!l&&(f.current&&f.current.disconnect(),f.current=new IntersectionObserver(function(e){e[0].isIntersecting&&d&&o(function(e){return e+1})}),e&&f.current.observe(e))},[l,d]);return(0,c.jsx)(q.Z,{children:u.map(function(e,t){return u.length===t+1?(0,c.jsx)("span",{ref:u.length===t+1?p:void 0,children:(0,c.jsx)(q.Z.Item,{item:e})},e.id):(0,c.jsx)("span",{children:(0,c.jsx)(q.Z.Item,{item:e})},e.id)})})},T=r(1830),L=r(9332),N=!0,search=function(){var e=(0,L.useSearchParams)(),t=(0,n.useState)([]),r=t[0],i=t[1],o=(0,n.useState)(),s=o[0],l=o[1],d=n.useRef(null),f=(0,R.MQ)(),p=f.canopyDispatch,h=f.canopyState,g=h.config,v=h.searchSummary;return(0,n.useEffect)(function(){i([]),l(new URLSearchParams(e.toString()))},[e]),(0,n.useEffect)(function(){if(void 0!==s){p({searchParams:s,type:"updateSearchParams"});var e,t=null==g?void 0:null===(e=g.search)||void 0===e?void 0:e.flexSearch,r=searchRequest({params:s,baseUrl:null==g?void 0:g.baseUrl,flexSearch:t}),n=r.items,a=r.summary;i(n.map(function(e){return e.id})),a&&p({type:"updateSearchSummary",searchSummary:a})}},[s,g]),(0,c.jsxs)(A.Z,{children:[(0,c.jsxs)(D,{ref:d,children:[(0,c.jsx)(Facets_Facets,{}),(0,c.jsx)(a.Z,{containerType:"wide",children:v&&(0,c.jsxs)(u.xv,{id:"canopy-search-summary",children:[(0,c.jsx)(T.Summary,{summary:v})," ",(0,y.EK)("searchResults")]})})]}),(0,c.jsx)(a.Z,{containerType:"wide",children:(0,c.jsx)(Results,{pages:r,query:s})})]})}},8266:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/search",function(){return r(7570)}])},5789:function(){}},function(e){e.O(0,[9412,7409,3662,1971,1339,2765,1119,4340,9041,7058,4490,9774,2888,179],function(){return e(e.s=8266)}),_N_E=e.O()}]);