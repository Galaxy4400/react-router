import{g as k,c as L,r as n,d as U,e as x,j as u,s as A,f as C,h as B,i as V,k as Y,l as w,m as q}from"./index-DTcQp-1c.js";function J(e){return k("MuiListItem",e)}L("MuiListItem",["root","container","dense","alignItemsFlexStart","divider","gutters","padding","secondaryAction"]);const K=L("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]);function Q(e){return k("MuiListItemSecondaryAction",e)}L("MuiListItemSecondaryAction",["root","disableGutters"]);const W=e=>{const{disableGutters:t,classes:s}=e;return B({root:["root",t&&"disableGutters"]},Q,s)},X=A("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:s}=e;return[t.root,s.disableGutters&&t.disableGutters]}})({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)",variants:[{props:({ownerState:e})=>e.disableGutters,style:{right:0}}]}),E=n.forwardRef(function(t,s){const i=U({props:t,name:"MuiListItemSecondaryAction"}),{className:r,...d}=i,a=n.useContext(x),o={...i,disableGutters:a.disableGutters},c=W(o);return u.jsx(X,{className:C(c.root,r),ownerState:o,ref:s,...d})});E.muiName="ListItemSecondaryAction";const Z=(e,t)=>{const{ownerState:s}=e;return[t.root,s.dense&&t.dense,s.alignItems==="flex-start"&&t.alignItemsFlexStart,s.divider&&t.divider,!s.disableGutters&&t.gutters,!s.disablePadding&&t.padding,s.hasSecondaryAction&&t.secondaryAction]},_=e=>{const{alignItems:t,classes:s,dense:i,disableGutters:r,disablePadding:d,divider:a,hasSecondaryAction:o}=e;return B({root:["root",i&&"dense",!r&&"gutters",!d&&"padding",a&&"divider",t==="flex-start"&&"alignItemsFlexStart",o&&"secondaryAction"],container:["container"]},J,s)},tt=A("div",{name:"MuiListItem",slot:"Root",overridesResolver:Z})(q(({theme:e})=>({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left",variants:[{props:({ownerState:t})=>!t.disablePadding,style:{paddingTop:8,paddingBottom:8}},{props:({ownerState:t})=>!t.disablePadding&&t.dense,style:{paddingTop:4,paddingBottom:4}},{props:({ownerState:t})=>!t.disablePadding&&!t.disableGutters,style:{paddingLeft:16,paddingRight:16}},{props:({ownerState:t})=>!t.disablePadding&&!!t.secondaryAction,style:{paddingRight:48}},{props:({ownerState:t})=>!!t.secondaryAction,style:{[`& > .${K.root}`]:{paddingRight:48}}},{props:{alignItems:"flex-start"},style:{alignItems:"flex-start"}},{props:({ownerState:t})=>t.divider,style:{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"}},{props:({ownerState:t})=>t.button,style:{transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}}},{props:({ownerState:t})=>t.hasSecondaryAction,style:{paddingRight:48}}]}))),et=A("li",{name:"MuiListItem",slot:"Container",overridesResolver:(e,t)=>t.container})({position:"relative"}),nt=n.forwardRef(function(t,s){const i=U({props:t,name:"MuiListItem"}),{alignItems:r="center",children:d,className:a,component:o,components:c={},componentsProps:p={},ContainerComponent:l="li",ContainerProps:{className:f,...F}={},dense:R=!1,disableGutters:h=!1,disablePadding:$=!1,divider:D=!1,secondaryAction:P,slotProps:T={},slots:H={},...z}=i,M=n.useContext(x),S=n.useMemo(()=>({dense:R||M.dense||!1,alignItems:r,disableGutters:h}),[r,M.dense,R,h]),O=n.useRef(null),m=n.Children.toArray(d),G=m.length&&V(m[m.length-1],["ListItemSecondaryAction"]),y={...i,alignItems:r,dense:S.dense,disableGutters:h,disablePadding:$,divider:D,hasSecondaryAction:G},j=_(y),N=Y(O,s),I=H.root||c.Root||tt,b=T.root||p.root||{},v={className:C(j.root,b.className,a),...z};let g=o||"li";return G?(g=!v.component&&!o?"div":g,l==="li"&&(g==="li"?g="div":v.component==="li"&&(v.component="div")),u.jsx(x.Provider,{value:S,children:u.jsxs(et,{as:l,className:C(j.container,f),ref:N,ownerState:y,...F,children:[u.jsx(I,{...b,...!w(I)&&{as:g,ownerState:{...y,...b.ownerState}},...v,children:m}),m.pop()]})})):u.jsx(x.Provider,{value:S,children:u.jsxs(I,{...b,as:g,ref:N,...!w(I)&&{ownerState:{...y,...b.ownerState}},...v,children:[m,P&&u.jsx(E,{children:P})]})})}),st=(e,t)=>{const[s,i]=n.useState([]),[r,d]=n.useState(!0),[a,o]=n.useState(!1),[c,p]=n.useState(!0);return n.useEffect(()=>{d(!0),o(!1),c&&fetch(`https://rickandmortyapi.com/api/${e}?page=${t}`).then(l=>l.json()).then(l=>{l.results?i(f=>[...f,...l.results]):p(!1)}).catch(()=>{o(!0)}).finally(()=>d(!1))},[c,t,e]),{data:s,loading:r,error:a,hasMore:c}},rt=e=>{const[t,s]=n.useState(1),{data:i,loading:r,error:d,hasMore:a}=st(e,t),o=n.useRef(null),c=n.useCallback(p=>{r||(o.current&&o.current.disconnect(),o.current=new IntersectionObserver(l=>{l[0].isIntersecting&&a&&s(f=>++f)}),p&&o.current.observe(p))},[r,a]);return{data:i,loading:r,error:d,hasMore:a,lastNodeRef:c}};export{nt as L,rt as u};
