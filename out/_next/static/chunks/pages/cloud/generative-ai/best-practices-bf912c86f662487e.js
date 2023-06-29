(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3303],{196:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cloud/generative-ai/best-practices",function(){return t(5612)}])},5612:function(e,n,t){"use strict";t.r(n);var i=t(1527),s=t(452),a=t(6736);function o(e){let n=Object.assign({h1:"h1",p:"p",img:"img",h2:"h2",h3:"h3",ul:"ul",li:"li",strong:"strong",pre:"pre",code:"code",span:"span",a:"a"},(0,a.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{children:"Best Practices"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"/docs/content/generative-ai-best-practices-cover.png",alt:"Shortcuts"})}),"\n",(0,i.jsx)(n.h2,{id:"dos-and-donts",children:"Do's and Dont's"}),"\n",(0,i.jsx)(n.p,{children:"In general, the AI Task, Execute Code, and the transition don't know what is happening in the rest of the flow. Each is concerned only with itself. To get the best results with AI, these are the words to use and the words to stay away from:"}),"\n",(0,i.jsx)(n.h3,{id:"dos---use-effective-phrasing",children:"Do's - Use Effective phrasing:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:'"What is the capital of France?"'}),"\n",(0,i.jsx)(n.li,{children:'"Can you tell me about the history of the Great Wall of China?"'}),"\n",(0,i.jsx)(n.li,{children:"\"Please provide a definition of the word 'algorithm.'\""}),"\n",(0,i.jsx)(n.li,{children:"Use absolutes, words like: “ignore”, “add”, “extract”, “use”, “store”, etc."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"donts---use-ineffective-phrasing",children:"Dont's - Use Ineffective phrasing:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:'"Don\'t tell me the wrong answer."'}),"\n",(0,i.jsx)(n.li,{children:'"I\'m not interested in hearing your opinion."'}),"\n",(0,i.jsx)(n.li,{children:"\"You wouldn't happen to know what I'm talking about, would you?\""}),"\n",(0,i.jsx)(n.li,{children:'Don\'t use hedge words like: “maybe”, “try”, "potentially", "avoid", etc.'}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"personality-tone-language",children:"Personality, Tone, Language"}),"\n",(0,i.jsx)(n.p,{children:"You can set the personality, tone, and language of your bot using simple natural words."}),"\n",(0,i.jsx)(n.h3,{id:"personality",children:"Personality"}),"\n",(0,i.jsxs)(n.p,{children:["Words such as ",(0,i.jsx)(n.strong,{children:"act like"}),", ",(0,i.jsx)(n.strong,{children:"pretend"}),", and ",(0,i.jsx)(n.strong,{children:"sound like"})," can influence the AI to act like a celebrity or to sound like a person from specific profession can have a great effect on the users who use your bot."]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsxs)(n.p,{children:["For example, you can use ",(0,i.jsx)(n.strong,{children:'"Act like Kevin Hart"'})," "]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"/docs/content/kevin-hart-personality.png",alt:"Shortcuts"})}),"\n",(0,i.jsxs)(n.p,{children:["Or ",(0,i.jsx)(n.strong,{children:'"Act like a Teacher"'})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"/docs/content/teacher-personality.png",alt:"Shortcuts"})}),"\n",(0,i.jsx)(n.h3,{id:"tone",children:"Tone"}),"\n",(0,i.jsxs)(n.p,{children:["Phrases starting with ",(0,i.jsx)(n.strong,{children:'"use emojis"'}),", ",(0,i.jsx)(n.strong,{children:'"be extra friendly"'})," or ",(0,i.jsx)(n.strong,{children:'"be empathetic"'})," can influence the AI by showing emotions in its text."]}),"\n",(0,i.jsxs)(n.p,{children:["For example, you can use ",(0,i.jsx)(n.strong,{children:'"sound like a loving mum who is fond of babies"'})]}),"\n",(0,i.jsxs)(n.p,{children:["We can also mix that with ",(0,i.jsx)(n.strong,{children:'"Use a lot of emojis"'})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"/docs/content/mum-emojis-personality.png",alt:"Shortcuts"})}),"\n",(0,i.jsx)(n.h3,{id:"language",children:"Language"}),"\n",(0,i.jsxs)(n.p,{children:["You can also instruct your bot to answer or speak in a specific language using ",(0,i.jsx)(n.strong,{children:'"speak in"'}),", ",(0,i.jsx)(n.strong,{children:'"use language"'})," and ",(0,i.jsx)(n.strong,{children:'"answer using"'})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"/docs/content/language-personality.png",alt:"Shortcuts"})}),"\n",(0,i.jsx)(n.h2,{id:"input-and-output",children:"Input and Output"}),"\n",(0,i.jsx)(n.p,{children:"What words can we use to direct the AI to our inputs and outputs effectively? These are just guidelines, so feel free to be as creative as you want."}),"\n",(0,i.jsx)(n.h3,{id:"input-sample",children:"Input Sample"}),"\n",(0,i.jsxs)(n.p,{children:["We can use a phrase like ",(0,i.jsx)(n.strong,{children:"Taking the user's input into consideration"}),", and in the input, we can specify exactly what each input means."]}),"\n",(0,i.jsx)(n.p,{children:"For example - the AI Task Instruction could be:"}),"\n",(0,i.jsx)(n.pre,{"data-language":"text","data-theme":"default",hasCopyCode:!0,children:(0,i.jsx)(n.code,{"data-language":"text","data-theme":"default",children:(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:'Taking the user\'s input into consideration, what is the typical budget for a family that consists of "No of Family Members" and lives in "Country & City Name" for those inputs?'})})})}),"\n",(0,i.jsx)(n.p,{children:"And the AI Input will be:"}),"\n",(0,i.jsx)(n.pre,{"data-language":"text","data-theme":"default",hasCopyCode:!0,children:(0,i.jsxs)(n.code,{"data-language":"text","data-theme":"default",children:[(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"Country & City Name: {{workflow.fullAddress.country}} - {{workflow.fullAddress.city}}"})}),"\n",(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"No of Family Members: {{workflow.noOfPeople}}"})})]})}),"\n",(0,i.jsxs)(n.p,{children:["We can also direct it to where it will find the information and in which variable like ",(0,i.jsx)(n.strong,{children:"in the variable"}),", and then mention the variable name."]}),"\n",(0,i.jsx)(n.p,{children:"For example - the AI Task Instruction could be:"}),"\n",(0,i.jsx)(n.pre,{"data-language":"text","data-theme":"default",hasCopyCode:!0,children:(0,i.jsx)(n.code,{"data-language":"text","data-theme":"default",children:(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"Give advice to the question in the variable userQuestion"})})})}),"\n",(0,i.jsx)(n.p,{children:"And the AI Input will be:"}),"\n",(0,i.jsx)(n.pre,{"data-language":"text","data-theme":"default",hasCopyCode:!0,children:(0,i.jsx)(n.code,{"data-language":"text","data-theme":"default",children:(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"This is the question that needs advice {{workflow.userQuestion}}"})})})}),"\n",(0,i.jsx)(n.h3,{id:"output-sample",children:"Output Sample"}),"\n",(0,i.jsxs)(n.p,{children:["We can use words like ",(0,i.jsx)(n.strong,{children:"store"})," and ",(0,i.jsx)(n.strong,{children:"into"})," to direct it to store the extracted value into a specific variable."]}),"\n",(0,i.jsx)(n.p,{children:"For example - the AI Task Instruction could be:"}),"\n",(0,i.jsx)(n.pre,{"data-language":"text","data-theme":"default",hasCopyCode:!0,children:(0,i.jsx)(n.code,{"data-language":"text","data-theme":"default",children:(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"store it in variable whatDoYouThink"})})})}),"\n",(0,i.jsxs)(n.p,{children:["And the output will be stored in a Variable named ",(0,i.jsx)(n.strong,{children:"whatDoYouThink"})]}),"\n",(0,i.jsx)(n.h2,{id:"example---preserving-context",children:"Example - Preserving Context"}),"\n",(0,i.jsx)(n.p,{children:"To ensure that the AI knows the context and keeps it into its consideration, we will need to do a couple of things."}),"\n",(0,i.jsx)(n.h3,{id:"step-1-saving-context",children:"Step 1: Saving context"}),"\n",(0,i.jsx)(n.p,{children:"For this step, we can use an Execute code to append everything related to the context to a string variable:"}),"\n",(0,i.jsx)(n.p,{children:"So every time the user says something, it is concatenated/append to what they said before"}),"\n",(0,i.jsx)(n.h3,{id:"step-2-pass-it-to-ai-input",children:"Step 2: Pass it to AI Input"}),"\n",(0,i.jsxs)(n.p,{children:["In the AI Task, we can pass that variable as an input, then direct the AI to consider it using a statement like ",(0,i.jsx)(n.strong,{children:"Take into consideration the user history."})]}),"\n",(0,i.jsx)(n.h3,{id:"the-result",children:"The Result"}),"\n",(0,i.jsx)(n.p,{children:"In the end, we can ask multiple questions while making sure the AI takes into consideration the history of the conversation."}),"\n",(0,i.jsxs)(n.p,{children:["You can also pass the past answers from the AI and direct it to ",(0,i.jsx)(n.strong,{children:"Use new answers every time"}),". This way you can achieve AI Prompt Chaining."]}),"\n",(0,i.jsx)(n.h2,{id:"limitations",children:"Limitations"}),"\n",(0,i.jsx)(n.h3,{id:"token-limitation",children:"Token Limitation"}),"\n",(0,i.jsx)(n.p,{children:"The current limitation is 5000 characters, and we are working to increase it."}),"\n",(0,i.jsxs)(n.p,{children:["You can find more information here: ",(0,i.jsx)(n.a,{href:"https://help.openai.com/en/articles/4936856-what-are-tokens-and-how-to-count-them",children:"https://help.openai.com/en/articles/4936856-what-are-tokens-and-how-to-count-them"})]}),"\n",(0,i.jsx)(n.h3,{id:"understanding-limitation",children:"Understanding Limitation"}),"\n",(0,i.jsx)(n.p,{children:"There are limitations to what the AI can understand, such as complex or nuanced language involving sarcasm, irony, or figurative expressions."}),"\n",(0,i.jsx)(n.h3,{id:"time-limitation",children:"Time Limitation"}),"\n",(0,i.jsx)(n.p,{children:"Since the AI is based on ChatGPT models, you must know that ChatGPT is not connected to the internet, and it can occasionally produce incorrect answers. It has limited knowledge of the world and events that happened after 2021 and may also occasionally produce harmful instructions or biased content."}),"\n",(0,i.jsxs)(n.p,{children:["You can find more information here: ",(0,i.jsx)(n.a,{href:"https://help.openai.com/en/articles/6783457-chatgpt-general-faq",children:"https://help.openai.com/en/articles/6783457-chatgpt-general-faq"})]}),"\n",(0,i.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,i.jsx)(n.p,{children:"Generally, it's best to avoid negative and vague language or ambiguous statements when using AI-related tasks. Instead, always try to be specific and direct, and use a language that is easy to understand."}),"\n",(0,i.jsx)(n.p,{children:"It is better to use natural language; you can use a wide range of inputs, including commands and requests. AI doesn't have human emotions; it may not fully understand some complex or nuanced language, especially if it involves sarcasm, irony, or figurative expressions."})]})}t(8027),n.default=(0,s.j)({MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)},pageOpts:{filePath:"pages/cloud/generative-ai/best-practices.mdx",route:"/cloud/generative-ai/best-practices",headings:[{depth:1,value:"Best Practices",id:"best-practices"},{depth:2,value:"Do's and Dont's",id:"dos-and-donts"},{depth:3,value:"Do's - Use Effective phrasing:",id:"dos---use-effective-phrasing"},{depth:3,value:"Dont's - Use Ineffective phrasing:",id:"donts---use-ineffective-phrasing"},{depth:2,value:"Personality, Tone, Language",id:"personality-tone-language"},{depth:3,value:"Personality",id:"personality"},{depth:3,value:"Tone",id:"tone"},{depth:3,value:"Language",id:"language"},{depth:2,value:"Input and Output",id:"input-and-output"},{depth:3,value:"Input Sample",id:"input-sample"},{depth:3,value:"Output Sample",id:"output-sample"},{depth:2,value:"Example - Preserving Context",id:"example---preserving-context"},{depth:3,value:"Step 1: Saving context",id:"step-1-saving-context"},{depth:3,value:"Step 2: Pass it to AI Input",id:"step-2-pass-it-to-ai-input"},{depth:3,value:"The Result",id:"the-result"},{depth:2,value:"Limitations",id:"limitations"},{depth:3,value:"Token Limitation",id:"token-limitation"},{depth:3,value:"Understanding Limitation",id:"understanding-limitation"},{depth:3,value:"Time Limitation",id:"time-limitation"},{depth:2,value:"Conclusion",id:"conclusion"}],timestamp:1687979724e3,title:"Best Practices"},pageNextRoute:"/cloud/generative-ai/best-practices"})}},function(e){e.O(0,[452,9774,2888,179],function(){return e(e.s=196)}),_N_E=e.O()}]);