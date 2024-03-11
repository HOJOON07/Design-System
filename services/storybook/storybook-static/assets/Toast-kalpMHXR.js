import{j as o}from"./clsx-UwsAJbxu.js";import{M as a,b as s,d as c}from"./index-Xg1LY1Ot.js";import{T as i,a as d}from"./Toast.stories-zjeYsd3u.js";import{useMDXComponents as r}from"./index-_VGcpBFS.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./iframe-Hu3o5ITo.js";import"../sb-preview/runtime.js";import"./index-jmm5gWkb.js";import"./index-ogXoivrg.js";import"./index-MVbLLYTZ.js";import"./index-PPLHz8o0.js";import"./index-uDaHXXFG.js";import"./index-5a0SfqdR.js";function e(n){const t=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",ol:"ol",li:"li"},r(),n.components);return o.jsxs(o.Fragment,{children:[`
`,`
`,`
`,o.jsx(a,{of:i}),`
`,o.jsx(t.h1,{id:"toast",children:"Toast"}),`
`,o.jsx(t.h2,{id:"installation",children:"Installation"}),`
`,o.jsxs(t.p,{children:[o.jsx(t.code,{children:"@hojoon/react-components-toast"})," 패키지를 설치합니다."]}),`
`,o.jsx(s,{dark:!0,language:"bash",code:`
    yarn add @hojoon/react-components-toast
  `}),`
`,o.jsx(t.h2,{id:"usage",children:"Usage"}),`
`,o.jsxs(t.ol,{children:[`
`,o.jsxs(t.li,{children:["Toast를 노출할 영역에 ",o.jsx(t.code,{children:"ToastProvider"}),"를 추가합니다."]}),`
`]}),`
`,o.jsx(s,{dark:!0,language:"jsx",code:`
<ToastProvider>
  <Router /> // e.g. React Router Dom
</ToastProvider>
  `}),`
`,o.jsxs(t.ol,{start:"2",children:[`
`,o.jsxs(t.li,{children:[o.jsx(t.code,{children:"@hojoon/react-components-toast/style.css"}),"를 불러옵니다."]}),`
`]}),`
`,o.jsx(s,{dark:!0,language:"jsx",code:`
import "@hojoon/react-components-toast/style.css";
  `}),`
`,o.jsxs(t.ol,{start:"3",children:[`
`,o.jsxs(t.li,{children:[o.jsx(t.code,{children:"useToast"}),"를 사용하여 ",o.jsx(t.code,{children:"Toast"}),"를 노출합니다."]}),`
`]}),`
`,o.jsx(s,{dark:!0,language:"jsx",code:`
const SomeComponent = () => {
  const { toast } = useToast();
  
  const handleClick = () => {
    toast({
      payload: {
        message: "toast!",
      },
    });
  };

return (<Button onClick={handleClick}>토스트 버튼</Button>);
};
`}),`
`,o.jsx(t.h2,{id:"demo",children:"Demo"}),`
`,o.jsx(c,{of:d})]})}function b(n={}){const{wrapper:t}=Object.assign({},r(),n.components);return t?o.jsx(t,Object.assign({},n,{children:o.jsx(e,n)})):e(n)}export{b as default};
