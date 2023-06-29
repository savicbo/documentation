(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4164],{8716:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cloud/studio/nodes",function(){return n(22)}])},22:function(e,t,n){"use strict";n.r(t);var o=n(1527),i=n(452),s=n(6736);function a(e){let t=Object.assign({p:"p",h2:"h2",h3:"h3"},(0,s.ah)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"Nodes are the primary units of conversational logic of your chatbot. A node generally transitions to another node or flow. You can think of a node as a step in a conversation."}),"\n",(0,o.jsx)(t.p,{children:"A single node can have multiple content types, instructions, and transitions. When there aren't any more transitions, the conversation ends."}),"\n",(0,o.jsx)(t.p,{children:"Node types: Start, Entry, Standard, Exit and End"}),"\n",(0,o.jsx)(t.h2,{id:"types-of-nodes",children:"Types of Nodes"}),"\n",(0,o.jsx)(t.h3,{id:"start-node",children:"Start Node"}),"\n",(0,o.jsx)(t.p,{children:"The Start Node is a specialized Entry Node that is only available in the main flow of a Botpress bot. It serves as the starting point for the conversation and can only execute transitions to other standard nodes."}),"\n",(0,o.jsx)(t.h3,{id:"entry-node",children:"Entry Node"}),"\n",(0,o.jsx)(t.p,{children:"Every workflow in your bot, except the main flow, starts with an Entry node. The Entry node is the starting point for each individual workflow and can only execute transitions to other standard nodes within that workflow. It is used to define the entry point for the workflow and the initial conditions that must be met for the workflow to start executing."}),"\n",(0,o.jsx)(t.h3,{id:"exit-node",children:"Exit Node"}),"\n",(0,o.jsx)(t.p,{children:"Similar to the Entry node, every workflow in your bot, except the main flow, should end with an Exit node. The Exit node is the final node in a workflow and can only receive transitions from other standard nodes within that workflow. It is used to define the exit point for the workflow and specify the conditions that must be met for the workflow to end. The Exit node typically contains cleanup or finalization logic, such as sending a message to the user or updating a database, before the workflow is completed."}),"\n",(0,o.jsx)(t.h3,{id:"standard-node",children:"Standard Node"}),"\n",(0,o.jsx)(t.p,{children:"The Standard node is a versatile building block in your bot's workflow. It allows you to add both instructions and transitions to your flow, and it can be used to represent a variety of steps in the conversation with the user."}),"\n",(0,o.jsx)(t.p,{children:"You can add instructions to the Standard node to define what the bot should do at that point in the conversation, such as sending a message or asking the user for input. You can also add transitions to the Standard node to specify the conditions under which the conversation should proceed to the next node."}),"\n",(0,o.jsx)(t.p,{children:"Standard nodes can be connected to other nodes within the same workflow using transitions, allowing you to create complex conversation flows that adapt to the user's input and actions. They are essential building blocks for creating conversational AI experiences that are engaging and useful for your users."}),"\n",(0,o.jsx)(t.h3,{id:"end-node",children:"End Node"}),"\n",(0,o.jsx)(t.p,{children:"The End Node is a unique node in your bot's Main Flow. Its purpose is to clear the conversation session and reset the bot to its initial state once it is reached. When the End Node is executed, it will erase all variables and user data associated with the conversation and set the cursor back to the beginning of the Main Flow."}),"\n",(0,o.jsx)(t.p,{children:"The End Node is typically used when you want to reset the conversation with the user and start a new session from scratch. It is particularly useful for bots that handle sensitive or personal information, where it is important to ensure that previous session data is not accessible to subsequent users."}),"\n",(0,o.jsx)(t.p,{children:"Note that the End Node is only available in the Main Flow of your bot and cannot be used in other workflows."})]})}n(8027),t.default=(0,i.j)({MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,s.ah)(),e.components);return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(a,{...e})}):a(e)},pageOpts:{filePath:"pages/cloud/studio/nodes.mdx",route:"/cloud/studio/nodes",frontMatter:{title:"Nodes",section:{name:"Studio Interface",slot:"D"},slot:32,slug:"studio/nodes"},headings:[{depth:2,value:"Types of Nodes",id:"types-of-nodes"},{depth:3,value:"Start Node",id:"start-node"},{depth:3,value:"Entry Node",id:"entry-node"},{depth:3,value:"Exit Node",id:"exit-node"},{depth:3,value:"Standard Node",id:"standard-node"},{depth:3,value:"End Node",id:"end-node"}],timestamp:1685139898e3,title:"Nodes"},pageNextRoute:"/cloud/studio/nodes"})}},function(e){e.O(0,[452,9774,2888,179],function(){return e(e.s=8716)}),_N_E=e.O()}]);