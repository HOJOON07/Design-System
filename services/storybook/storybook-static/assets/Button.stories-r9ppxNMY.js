import{j as r}from"./clsx-UwsAJbxu.js";import{I as s}from"./index-uDaHXXFG.js";import{l as S}from"./index-7qIoYkfN.js";import{T as f}from"./index-4WqgkBQJ.js";import{s as y,y as C}from"./index-5a0SfqdR.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";const j={title:"React Components/Button",component:s,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{size:{options:["xs","sm","md","lg"],control:"select"},color:{options:Object.keys(S.colors.$scale),control:"select"},variant:{options:["solid","outline","ghost"],control:"select"}}},o={args:{children:"Button",size:"lg",variant:"outline",isDisabled:!1,leftIcon:"왼쪽",rightIcon:"오른쪽",isLoading:!1},render:e=>r.jsx(s,{...e})},t={render:()=>{const{buttonProps:e}=y({elementType:"div",onClick:()=>{console.log("!!!!!")}});return r.jsx(f,{...e,as:"div",fontSize:"md",color:"green",style:{userSelect:"none",cursor:"pointer"},children:"텍스트 버튼입니다"})}},n={render:()=>{const{buttonProps:e,isSelected:u}=C({elementType:"button"},!1);return r.jsx(s,{...e,variant:u?"solid":"outline",color:"green",children:u?"셀렉":"노셀렉 "})}};var a,l,c;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    children: "Button",
    size: "lg",
    variant: "outline",
    isDisabled: false,
    leftIcon: "왼쪽",
    rightIcon: "오른쪽",
    isLoading: false
  },
  render: args => <_Button {...args}></_Button>
}`,...(c=(l=o.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var i,d,p;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => {
    const {
      buttonProps
    } = useButton({
      elementType: "div",
      onClick: () => {
        console.log("!!!!!");
      }
    });
    return <Text {...buttonProps} as="div" fontSize="md" color="green" style={{
      userSelect: "none",
      cursor: "pointer"
    }}>
        텍스트 버튼입니다
      </Text>;
  }
}`,...(p=(d=t.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var m,g,B;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    const {
      buttonProps,
      isSelected
    } = useToggleButton({
      elementType: "button"
    }, false);
    return <_Button {...buttonProps} variant={isSelected ? "solid" : "outline"} color="green">
        {isSelected ? "셀렉" : "노셀렉 "}
      </_Button>;
  }
}`,...(B=(g=n.parameters)==null?void 0:g.docs)==null?void 0:B.source}}};const I=["ButtonStory","TextButtonStory","ToggleButtonStory"];export{o as ButtonStory,t as TextButtonStory,n as ToggleButtonStory,I as __namedExportsOrder,j as default};
