(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[861],{7577:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/integration/moving-parts",function(){return o(8805)}])},8805:function(e,t,o){"use strict";o.r(t);var s=o(1527),n=o(452),i=o(6736);function a(e){let t=Object.assign({h1:"h1",p:"p",a:"a",ul:"ul",li:"li",code:"code"},(0,i.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{children:"Moving Parts"}),"\n",(0,s.jsxs)(t.p,{children:["The standard way to develop a chatbot on Botpress Cloud is to use the ",(0,s.jsx)(t.a,{href:"https://studio.botpress.cloud",children:"Studio"}),". It is a low-code platform; that is, the Studio allows you to create chatbots by writing little code, or even none at all."]}),"\n",(0,s.jsx)(t.p,{children:"To please developers, Botpress Cloud also allows you to develop chatbots with code only. This set of features is called the developer side of Botpress Cloud or the developer experience (DX)."}),"\n",(0,s.jsx)(t.p,{children:"In addition to allowing the development of Chatbots, the developer experience also allows the creation of Integrations. Integrations are applications that allow Chatbots to communicate with external services as well as share/reuse certain features. The only way to develop integrations is to do it with code."}),"\n",(0,s.jsx)(t.p,{children:"The developer experience is composed of the following parts:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["the ",(0,s.jsx)(t.a,{href:"https://botpress.com/docs/api/",children:"public HTTP API"})]}),"\n",(0,s.jsxs)(t.li,{children:["the ",(0,s.jsx)(t.a,{href:"https://npmjs.com/package/@botpress/client",children:"TypeScript HTTP Client"})]}),"\n",(0,s.jsxs)(t.li,{children:["the ",(0,s.jsx)(t.a,{href:"https://npmjs.com/package/@botpress/sdk",children:"TypeScript SDK"})]}),"\n",(0,s.jsxs)(t.li,{children:["the ",(0,s.jsx)(t.a,{href:"https://npmjs.com/package/@botpress/cli",children:"CLI"})]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["The public HTTP API of Botpress Cloud is already documented ",(0,s.jsx)(t.a,{href:"https://botpress.io/docs/cloud/api",children:"here"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"The TypeScript HTTP Client, on the other hand, only exposes the API in an npm package to facilitate requests to the API in JavaScript and TypeScript. It contains all the types of requests and responses of the API."}),"\n",(0,s.jsxs)(t.p,{children:["To create a Chatbot or an Integration, you must call the ",(0,s.jsx)(t.a,{href:"https://botpress.com/docs/api/#bot-create-bot",children:"create-bot"})," or ",(0,s.jsx)(t.a,{href:"https://botpress.com/docs/api/#bot-create-integration",children:"create-integration"})," route of the API. The HTTP body of the request contains a ",(0,s.jsx)(t.code,{children:"code"})," field. This is the JavaScript program of the Bot or Integration. This code is executed by Botpress Cloud. However, this field cannot contain any program, it must have a certain format and a certain behavior for Botpress Cloud to be able to execute it. This is where the SDK comes in."]}),"\n",(0,s.jsx)(t.p,{children:"The SDK is an npm package that is used and executed with the code of the Bot or Integration. It facilitates development by providing functions and classes that frame your development. It is theoretically possible to develop a Bot or an Integration without using the SDK, but this is strongly discouraged."}),"\n",(0,s.jsx)(t.p,{children:"At the time of writing, all Bots and Integrations are hosted and executed by Botpress Cloud. This means that it is not possible to host a server on your side. For this reason, the use of the JavaScript language is mandatory. If your program is written in TypeScript, it must be transpiled and bundled before being sent to Botpress Cloud. This is where CLI comes in."}),"\n",(0,s.jsx)(t.p,{children:"The CLI wears several hats. It allows you to interact with the public HTTP API of Botpress Cloud and to develop/deploy Bots and Integrations. Just like the SDK, it is theoretically possible to do without it but this is strongly discouraged."}),"\n",(0,s.jsx)(t.p,{children:"Since the public HTTP API of Botpress Cloud is already documented and the TypeScript HTTP Client only exposes it in an npm package, the next sections of this document will focus on the SDK and the CLI."})]})}o(8027),t.default=(0,n.j)({MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,i.ah)(),e.components);return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)},pageOpts:{filePath:"pages/integration/moving-parts.mdx",route:"/integration/moving-parts",headings:[{depth:1,value:"Moving Parts",id:"moving-parts"}],timestamp:1688060051e3,title:"Moving Parts"},pageNextRoute:"/integration/moving-parts"})}},function(e){e.O(0,[452,9774,2888,179],function(){return e(e.s=7577)}),_N_E=e.O()}]);