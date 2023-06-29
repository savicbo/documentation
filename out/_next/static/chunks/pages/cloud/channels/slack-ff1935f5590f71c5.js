(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8406],{8774:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cloud/channels/slack",function(){return s(1836)}])},1836:function(e,n,s){"use strict";s.r(n);var t=s(1527),i=s(452),o=s(6736);function r(e){let n=Object.assign({h1:"h1",p:"p",img:"img",h2:"h2",h3:"h3",ol:"ol",li:"li",a:"a",strong:"strong",code:"code"},(0,o.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{children:"Slack"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"/docs/content/slack-banner.png",alt:"Messaging channels"})}),"\n",(0,t.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,t.jsx)(n.h3,{id:"create-a-slack-app",children:"Create a Slack App"}),"\n",(0,t.jsx)(n.p,{children:"You will need a Slack App to connect your bot to Slack"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Go to your ",(0,t.jsx)(n.a,{href:"https://api.slack.com/apps",children:"apps page"})]}),"\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.strong,{children:"Create new app"}),", select ",(0,t.jsx)(n.strong,{children:"From scratch"})," then give it a name. Remember your App's name, you'll need it in a few minutes"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"channel-configuration",children:"Channel Configuration"}),"\n",(0,t.jsx)(n.h3,{id:"signing-secret",children:"Signing Secret"}),"\n",(0,t.jsx)(n.p,{children:"The signing secret is used to verify webhook requests"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["In the left sidebar, click on ",(0,t.jsx)(n.strong,{children:"Settings"})," > ",(0,t.jsx)(n.strong,{children:"Basic Information"})]}),"\n",(0,t.jsxs)(n.li,{children:["Scroll down to ",(0,t.jsx)(n.strong,{children:"App Credentials"})," section. Next to ",(0,t.jsx)(n.strong,{children:"Signing Secret"}),", click ",(0,t.jsx)(n.strong,{children:"Show"})," to reveal the signing secret."]}),"\n",(0,t.jsxs)(n.li,{children:["In Botpress, copy the signing secret from the previous step in the ",(0,t.jsx)(n.strong,{children:"Signing Secret"})," box."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"bot-token",children:"Bot Token"}),"\n",(0,t.jsx)(n.p,{children:"The bot token is used to authenticate requests made to the Slack API"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["In the left sidebar, click on ",(0,t.jsx)(n.strong,{children:"Features"})," > ",(0,t.jsx)(n.strong,{children:"OAuth & Permissions"})]}),"\n",(0,t.jsxs)(n.li,{children:["Under the ",(0,t.jsx)(n.strong,{children:"Scope"})," > ",(0,t.jsx)(n.strong,{children:"Bot Token Scopes"})," section, click ",(0,t.jsx)(n.strong,{children:"Add an OAuth Scope"}),". Select the ",(0,t.jsx)(n.code,{children:"chat:write"})," option from the list."]}),"\n",(0,t.jsxs)(n.li,{children:["Near the top of the page, click on ",(0,t.jsx)(n.strong,{children:"Install to Workspace"})," in the ",(0,t.jsx)(n.strong,{children:"OAuth Tokens for Your Workspace"})," section"]}),"\n",(0,t.jsxs)(n.li,{children:["In the next screen, your app will request access to your Slack workspace. Click ",(0,t.jsx)(n.strong,{children:"Allow"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["In the ",(0,t.jsx)(n.strong,{children:"OAuth & Permissions > OAuth Tokens for Your Workspace"})," section, copy the ",(0,t.jsx)(n.strong,{children:"Bot User OAuth Token"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["In Botpress, copy the ",(0,t.jsx)(n.strong,{children:"Bot User OAuth Token"})," from the previous step in the ",(0,t.jsx)(n.strong,{children:"Bot Token"})," box."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"save-configuration",children:"Save Configuration"}),"\n",(0,t.jsxs)(n.p,{children:["Channel configuration is complete, you can now click ",(0,t.jsx)(n.strong,{children:"Save"}),". It is important you save your configuration before configuring the webhooks, otherwise Slack will be unable to validate the webhook url"]}),"\n",(0,t.jsx)(n.h2,{id:"webhook-configuration",children:"Webhook Configuration"}),"\n",(0,t.jsx)(n.h3,{id:"events-webhook",children:"Events Webhook"}),"\n",(0,t.jsx)(n.p,{children:"Slack sends regular events such as messages to the event webhook"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["In the left sidebar, click on ",(0,t.jsx)(n.strong,{children:"Features"})," > ",(0,t.jsx)(n.strong,{children:"Event Subscriptions"})]}),"\n",(0,t.jsx)(n.li,{children:"Turn on events by click the On/Off button"}),"\n",(0,t.jsxs)(n.li,{children:["Copy paste the webhook url provided in the channel configuration UI to the ",(0,t.jsx)(n.strong,{children:"Request URL"})," field"]}),"\n",(0,t.jsxs)(n.li,{children:["Under ",(0,t.jsx)(n.strong,{children:"Subscribe to bot event"}),", add ",(0,t.jsx)(n.code,{children:"message.im"})," and ",(0,t.jsx)(n.code,{children:"message.channels"})]}),"\n",(0,t.jsxs)(n.li,{children:["Click the ",(0,t.jsx)(n.strong,{children:"Save Changes"})," button. Make sure your Slack channel configuration is saved before doing this step, otherwise webhook validation will fail"]}),"\n",(0,t.jsxs)(n.li,{children:["A yellow banner will be displayed at the top of the screen. Click the ",(0,t.jsx)(n.strong,{children:"reinstall your app"})," link"]}),"\n",(0,t.jsxs)(n.li,{children:["In the next screen, your app will request access to your Slack workspace. Click ",(0,t.jsx)(n.strong,{children:"Allow"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"interactivity-webhook",children:"Interactivity Webhook"}),"\n",(0,t.jsx)(n.p,{children:'Slack sends "interactive" events such as reactions to message to the interactivity webhook'}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["In the left sidebar, click on ",(0,t.jsx)(n.strong,{children:"Features"})," > ",(0,t.jsx)(n.strong,{children:"Interactivity & Shortcuts"})]}),"\n",(0,t.jsx)(n.li,{children:"Turn on interactivity by click the On/Off button"}),"\n",(0,t.jsxs)(n.li,{children:["Copy paste the webhook url provided in the channel configuration UI to the ",(0,t.jsx)(n.strong,{children:"Request URL"})," field"]}),"\n",(0,t.jsxs)(n.li,{children:["Click the ",(0,t.jsx)(n.strong,{children:"Save Changes"})," button"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"install-app",children:"Install App"}),"\n",(0,t.jsx)(n.h3,{id:"add-app-to-workspace",children:"Add App to Workspace"}),"\n",(0,t.jsx)(n.p,{children:"Your Slack app needs to be added to your workspace to allow Slack users to communicate with it"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["In the left sidebar, click on ",(0,t.jsx)(n.strong,{children:"Features"})," > ",(0,t.jsx)(n.strong,{children:"App Home"})]}),"\n",(0,t.jsxs)(n.li,{children:["Scroll down and in the ",(0,t.jsx)(n.strong,{children:"Show Tabs > Messages Tab"})," section, tick ",(0,t.jsx)(n.strong,{children:"Allow users to send Slash commands and messages from the messages tab"})]}),"\n",(0,t.jsxs)(n.li,{children:["In Slack, under the ",(0,t.jsx)(n.strong,{children:"Apps"})," section of the sidebar, click the ",(0,t.jsx)(n.strong,{children:"+ Add apps"})," button. In the search bar, type the name of your Slack app. Click on your Slack app in the search results. You can now chat with your Slack App"]}),"\n"]})]})}s(8027),n.default=(0,i.j)({MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,o.ah)(),e.components);return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(r,{...e})}):r(e)},pageOpts:{filePath:"pages/cloud/channels/slack.mdx",route:"/cloud/channels/slack",headings:[{depth:1,value:"Slack",id:"slack"},{depth:2,value:"Requirements",id:"requirements"},{depth:3,value:"Create a Slack App",id:"create-a-slack-app"},{depth:2,value:"Channel Configuration",id:"channel-configuration"},{depth:3,value:"Signing Secret",id:"signing-secret"},{depth:3,value:"Bot Token",id:"bot-token"},{depth:3,value:"Save Configuration",id:"save-configuration"},{depth:2,value:"Webhook Configuration",id:"webhook-configuration"},{depth:3,value:"Events Webhook",id:"events-webhook"},{depth:3,value:"Interactivity Webhook",id:"interactivity-webhook"},{depth:2,value:"Install App",id:"install-app"},{depth:3,value:"Add App to Workspace",id:"add-app-to-workspace"}],timestamp:1687979724e3,title:"Slack"},pageNextRoute:"/cloud/channels/slack"})}},function(e){e.O(0,[452,9774,2888,179],function(){return e(e.s=8774)}),_N_E=e.O()}]);