"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[290],{8556:(t,e,a)=>{a.r(e),a.d(e,{frontMatter:()=>p,contentTitle:()=>d,metadata:()=>u,toc:()=>g,default:()=>k});var n=a(7896),l=a(1461),o=(a(2784),a(876)),r=a(2039),i=a(1846),s=["components"],p={sidebar_label:"useToggle",sidebar_position:3,title:"useToggle"},d=void 0,u={unversionedId:"custom-hooks/use-toggle",id:"custom-hooks/use-toggle",isDocsHomePage:!1,title:"useToggle",description:"About",source:"@site/docs/custom-hooks/use-toggle.mdx",sourceDirName:"custom-hooks",slug:"/custom-hooks/use-toggle",permalink:"/react-hooks-extended/custom-hooks/use-toggle",editUrl:"https://github.com/MomenSherif/react-hooks-extended/tree/master/apps/docs/docs/custom-hooks/use-toggle.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"useToggle",sidebar_position:3,title:"useToggle"},sidebar:"docsSidebar",previous:{title:"useStepper",permalink:"/react-hooks-extended/custom-hooks/use-stepper"},next:{title:"useTimeout",permalink:"/react-hooks-extended/custom-hooks/use-timeout"}},g=[{value:"About",id:"about",children:[],level:2},{value:"Import",id:"import",children:[],level:2},{value:"Examples",id:"examples",children:[],level:2},{value:"Arguments",id:"arguments",children:[],level:2},{value:"Return",id:"return",children:[],level:2},{value:"Playground",id:"playground",children:[],level:2}],m={toc:g};function k(t){var e=t.components,a=(0,l.Z)(t,s);return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"about"},"About"),(0,o.kt)("p",null,"Toggle between ",(0,o.kt)("inlineCode",{parentName:"p"},"booleans")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"custom data")," easily with useToggle."),(0,o.kt)("h2",{id:"import"},"Import"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { useToggle } from 'react-hooks-extended';\n")),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Booleans"),(0,o.kt)(r.Z,{groupId:"lng",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"javascript",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"function Example() {\n  const [state, toggle] = useToggle();\n\n  return (\n    <div>\n      <p>{String(state)}</p>\n      <button onClick={toggle}>Toggle</button>\n    </div>\n  );\n}\n"))),(0,o.kt)(i.Z,{value:"typescript",label:"TypeScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"function Example() {\n  const [state, toggle] = useToggle();\n\n  return (\n    <div>\n      <p>{String(state)}</p>\n      <button onClick={toggle}>Toggle</button>\n    </div>\n  );\n}\n"))))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Custom data"),(0,o.kt)(r.Z,{groupId:"lng",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"javascript",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"function Example() {\n  const [state, toggle] = useToggle('on', v => (v === 'on' ? 'off' : 'on'));\n\n  return (\n    <div>\n      <p>{state}</p>\n      <button onClick={toggle}>Toggle</button>\n    </div>\n  );\n}\n"))),(0,o.kt)(i.Z,{value:"typescript",label:"TypeScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"function Example() {\n  const [state, toggle] = useToggle<'on' | 'off'>('on', v =>\n    v === 'on' ? 'off' : 'on'\n  );\n\n  return (\n    <div>\n      <p>{state}</p>\n      <button onClick={toggle}>Toggle</button>\n    </div>\n  );\n}\n"))))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"arguments"},"Arguments"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Argument"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Default value"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"initialState")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"T")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Initial state value"),(0,o.kt)("td",{parentName:"tr",align:"left"},"false"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"false"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"toggleFunction")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"(prevState: T) => T")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Custom toggle functionality"),(0,o.kt)("td",{parentName:"tr",align:"left"},"false"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"s => !s"))))),(0,o.kt)("h2",{id:"return"},"Return"),(0,o.kt)("p",null,"Array with a stateful value, a function to toggle it and a function to force update the state to certain"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Return value"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"state")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"T")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Current state")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"toggle")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"Function")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Toggle between values")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"setState")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"(state: T) => void")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Set state to a certain value")))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"playground"},"Playground"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Playground() {\n  const [state, toggle] = useToggle(1, () => Math.floor(Math.random() * 6) + 1);\n\n  return (\n    <div>\n      <p>{state}</p>\n      <button onClick={toggle}>Toggle</button>\n    </div>\n  );\n}\n")))}k.isMDXComponent=!0}}]);