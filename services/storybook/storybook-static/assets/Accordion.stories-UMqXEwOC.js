import{j as n,c as h}from"./clsx-UwsAJbxu.js";import{r as d}from"./index-4g5l5LRQ.js";import{s as P}from"./index-5a0SfqdR.js";/* empty css              */import{p as v,T as y}from"./index-4WqgkBQJ.js";import"./_commonjsHelpers-4gQjN7DL.js";var b=d.createContext({activeItems:[],setActiveItem:()=>{}}),_=()=>d.useContext(b),T=b,$="_14zwk5q3 _14zwk5q0",q="_14zwk5q2 _14zwk5q0",R="_14zwk5q5 _14zwk5q0",D="_14zwk5q0",H="var(--_14zwk5q4)",O=(t,r)=>{let{defaultActiveItems:e=[],children:o,className:s,...c}=t,[a,i]=d.useState(e),u=l=>{a.includes(l)?i(a.filter(m=>m!==l)):i([...a,l])};return n.jsx(T.Provider,{value:{activeItems:a,setActiveItem:u},children:n.jsx("div",{...c,ref:r,className:h([D,s]),children:o})})},B=d.forwardRef(O),J=(t,r)=>{let{itemName:e,children:o,className:s,...c}=t,a=d.Children.toArray(o).map(i=>d.isValidElement(i)?d.cloneElement(i,{...i.props,itemName:e}):null);return n.jsx("div",{...c,ref:r,className:h([q,s]),children:a})},p=d.forwardRef(J),G=(t,r)=>{let{className:e,itemName:o="",onClick:s,children:c,...a}=t,{setActiveItem:i}=_(),u=d.useCallback(m=>{i(o),s==null||s(m)},[o,i]),{buttonProps:l}=P({...a,onClick:u,elementType:"button"});return n.jsx("button",{...l,ref:r,className:h([$,e]),children:c})},x=d.forwardRef(G);function j(t){var r=t.match(/^var\((.*)\)$/);return r?r[1]:t}function V(t,r){var e=t;for(var o of r){if(!(o in e))throw new Error("Path ".concat(r.join(" -> ")," does not exist in object"));e=e[o]}return e}function k(t,r){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],o=t.constructor();for(var s in t){var c=t[s],a=[...e,s];typeof c=="string"||typeof c=="number"||c==null?o[s]=r(c,a):typeof c=="object"&&!Array.isArray(c)?o[s]=k(c,r,a):console.warn('Skipping invalid key "'.concat(a.join("."),'". Should be a string, number, null or object. Received: "').concat(Array.isArray(c)?"Array":typeof c,'"'))}return o}function Z(t,r){var e={};if(typeof r=="object"){var o=t;k(r,(i,u)=>{if(i!=null){var l=V(o,u);e[j(l)]=String(i)}})}else{var s=t;for(var c in s){var a=s[c];a!=null&&(e[j(c)]=a)}}return Object.defineProperty(e,"toString",{value:function(){return Object.keys(this).map(i=>"".concat(i,":").concat(this[i])).join(";")},writable:!1}),e}var F=(t,r)=>{let{itemName:e="",children:o,className:s,style:c,...a}=t,i=d.useRef(null),{activeItems:u}=_(),l=u.includes(e),[m,E]=d.useState();return d.useEffect(()=>{i.current&&E(l?`${i.current.clientHeight}px`:"0")},[l,u]),n.jsx("div",{...a,ref:r,className:h([R,s]),"data-action-item":l,style:{...Z({[H]:m??"$innerRef.current.clientHeight}px"}),...c},children:n.jsx("div",{"data-name":"panel-inner",ref:i,children:o})})},g=d.forwardRef(F);B.__docgenInfo={description:"",methods:[],displayName:"z"};x.__docgenInfo={description:"",methods:[],displayName:"J"};p.__docgenInfo={description:"",methods:[],displayName:"$"};g.__docgenInfo={description:"",methods:[],displayName:"tt"};const X={title:"React Components/Accordion",parameters:{layout:"centered"},tags:["autodocs"]},f={render:()=>n.jsxs(B,{defaultActiveItems:["목록1"],style:{width:"500px"},children:[n.jsxs(p,{itemName:"목록1",children:[n.jsx(x,{children:n.jsx(v,{color:"gray",fontSize:"lg",children:"목록 1"})}),n.jsx(g,{children:n.jsx(y,{color:"gray",fontSize:"md",children:"내용입니다."})})]}),n.jsxs(p,{itemName:"목록2",children:[n.jsx(x,{children:n.jsx(v,{color:"gray",fontSize:"lg",children:"목록 2"})}),n.jsx(g,{children:n.jsxs(y,{color:"gray",fontSize:"md",children:["내용입니다.",n.jsx("br",{}),"내용입니다."]})})]})]})},A={args:{items:[{name:"목록1",content:"내용입니다."},{name:"목록2",content:`내용입니다.
내용입니다.`}],defaultActiveItems:[]},render:({defaultActiveItems:t,items:r})=>n.jsx(B,{defaultActiveItems:t,style:{width:"500px"},children:r.map((e,o)=>n.jsxs(p,{itemName:e.name,children:[n.jsx(x,{"data-testid":`button-${o}`,children:n.jsx(v,{color:"gray",fontSize:"lg",children:e.name})}),n.jsx(g,{"data-testid":`panel-${o}`,children:n.jsx(y,{color:"gray",fontSize:"md",children:e.content})})]},e.name))})};var C,S,I;f.parameters={...f.parameters,docs:{...(C=f.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <Accordion defaultActiveItems={["목록1"]} style={{
    width: "500px"
  }}>
      <AccordionItem itemName="목록1">
        <AccordionButton>
          <Heading color="gray" fontSize="lg">
            목록 1
          </Heading>
        </AccordionButton>
        <AccordionPanel>
          <Text color="gray" fontSize="md">
            내용입니다.
          </Text>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem itemName="목록2">
        <AccordionButton>
          <Heading color="gray" fontSize="lg">
            목록 2
          </Heading>
        </AccordionButton>
        <AccordionPanel>
          <Text color="gray" fontSize="md">
            내용입니다.
            <br />
            내용입니다.
          </Text>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
}`,...(I=(S=f.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};var z,N,w;A.parameters={...A.parameters,docs:{...(z=A.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    items: [{
      name: "목록1",
      content: "내용입니다."
    }, {
      name: "목록2",
      content: "내용입니다.\\n내용입니다."
    }],
    defaultActiveItems: []
  },
  render: ({
    defaultActiveItems,
    items
  }) => <Accordion defaultActiveItems={defaultActiveItems} style={{
    width: "500px"
  }}>
      {items.map((item, index) => <AccordionItem key={item.name} itemName={item.name}>
          <AccordionButton data-testid={\`button-\${index}\`}>
            <Heading color="gray" fontSize="lg">
              {item.name}
            </Heading>
          </AccordionButton>
          <AccordionPanel data-testid={\`panel-\${index}\`}>
            <Text color="gray" fontSize="md">
              {item.content}
            </Text>
          </AccordionPanel>
        </AccordionItem>)}
    </Accordion>
}`,...(w=(N=A.parameters)==null?void 0:N.docs)==null?void 0:w.source}}};const Y=["AccordionStory","AccordionTestStory"];export{f as AccordionStory,A as AccordionTestStory,Y as __namedExportsOrder,X as default};
