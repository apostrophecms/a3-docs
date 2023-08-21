import{_ as n,K as r,o as c,c as p,O as a,w as s,$ as t,a as o,k as e}from"./chunks/framework.9fa1e75e.js";const k=JSON.parse('{"title":"Creating webhooks","description":"","frontmatter":{},"headers":[],"relativePath":"cookbook/creating-webhooks.md","filePath":"cookbook/creating-webhooks.md","lastUpdated":1690289066000}'),i={name:"cookbook/creating-webhooks.md"},y=t("",4),F=e("div",{class:"language-javascript"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"javascript"),e("pre",{class:"shiki material-theme-palenight"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#82AAFF"}},"handlers"),e("span",{style:{color:"#A6ACCD"}},"(self) "),e("span",{style:{color:"#89DDFF"}},"{")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F07178"}},"  "),e("span",{style:{color:"#89DDFF","font-style":"italic"}},"return"),e("span",{style:{color:"#F07178"}}," "),e("span",{style:{color:"#89DDFF"}},"{")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F07178"}},"    "),e("span",{style:{color:"#89DDFF"}},"'"),e("span",{style:{color:"#F07178"}},"afterPublish"),e("span",{style:{color:"#89DDFF"}},"'"),e("span",{style:{color:"#89DDFF"}},":"),e("span",{style:{color:"#F07178"}}," "),e("span",{style:{color:"#89DDFF"}},"{")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F07178"}},"      "),e("span",{style:{color:"#C792EA"}},"async"),e("span",{style:{color:"#F07178"}}," sendWebhook"),e("span",{style:{color:"#89DDFF"}},"("),e("span",{style:{color:"#A6ACCD","font-style":"italic"}},"req"),e("span",{style:{color:"#89DDFF"}},","),e("span",{style:{color:"#F07178"}}," "),e("span",{style:{color:"#A6ACCD","font-style":"italic"}},"data"),e("span",{style:{color:"#89DDFF"}},")"),e("span",{style:{color:"#F07178"}}," "),e("span",{style:{color:"#89DDFF"}},"{")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#89DDFF"}},"        "),e("span",{style:{color:"#676E95","font-style":"italic"}},"// data sent by the afterPublish event includes the document data ")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#89DDFF"}},"        "),e("span",{style:{color:"#676E95","font-style":"italic"}},"// and whether it is being published for the first time")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#89DDFF"}},"        "),e("span",{style:{color:"#676E95","font-style":"italic"}},"// https://v3.docs.apostrophecms.org/reference/server-events.html#afterpublish")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F07178"}},"        "),e("span",{style:{color:"#89DDFF","font-style":"italic"}},"if"),e("span",{style:{color:"#F07178"}}," ("),e("span",{style:{color:"#89DDFF"}},"!"),e("span",{style:{color:"#A6ACCD"}},"data"),e("span",{style:{color:"#89DDFF"}},"."),e("span",{style:{color:"#A6ACCD"}},"firstTime"),e("span",{style:{color:"#F07178"}},") "),e("span",{style:{color:"#89DDFF"}},"{")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F07178"}},"          "),e("span",{style:{color:"#89DDFF","font-style":"italic"}},"return"),e("span",{style:{color:"#89DDFF"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F07178"}},"        "),e("span",{style:{color:"#89DDFF"}},"}")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F07178"}},"        "),e("span",{style:{color:"#C792EA"}},"const"),e("span",{style:{color:"#F07178"}}," "),e("span",{style:{color:"#A6ACCD"}},"payload"),e("span",{style:{color:"#F07178"}}," "),e("span",{style:{color:"#89DDFF"}},"="),e("span",{style:{color:"#F07178"}}," "),e("span",{style:{color:"#89DDFF"}},"{")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F07178"}},"          text"),e("span",{style:{color:"#89DDFF"}},":"),e("span",{style:{color:"#F07178"}}," "),e("span",{style:{color:"#89DDFF"}},"`"),e("span",{style:{color:"#C3E88D"}},"Article "),e("span",{style:{color:"#89DDFF"}},"${"),e("span",{style:{color:"#A6ACCD"}},"data"),e("span",{style:{color:"#89DDFF"}},"."),e("span",{style:{color:"#A6ACCD"}},"published"),e("span",{style:{color:"#89DDFF"}},"."),e("span",{style:{color:"#A6ACCD"}},"title"),e("span",{style:{color:"#89DDFF"}},"}"),e("span",{style:{color:"#C3E88D"}}," was published."),e("span",{style:{color:"#89DDFF"}},"`")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F07178"}},"        "),e("span",{style:{color:"#89DDFF"}},"};")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F07178"}},"        "),e("span",{style:{color:"#89DDFF","font-style":"italic"}},"await"),e("span",{style:{color:"#F07178"}}," "),e("span",{style:{color:"#A6ACCD"}},"self"),e("span",{style:{color:"#89DDFF"}},"."),e("span",{style:{color:"#A6ACCD"}},"apos"),e("span",{style:{color:"#89DDFF"}},"."),e("span",{style:{color:"#A6ACCD"}},"http"),e("span",{style:{color:"#89DDFF"}},"."),e("span",{style:{color:"#82AAFF"}},"post"),e("span",{style:{color:"#F07178"}},"("),e("span",{style:{color:"#89DDFF"}},"'"),e("span",{style:{color:"#C3E88D"}},"https://slack-webhook-url-here"),e("span",{style:{color:"#89DDFF"}},"'"),e("span",{style:{color:"#89DDFF"}},","),e("span",{style:{color:"#F07178"}}," "),e("span",{style:{color:"#89DDFF"}},"{")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F07178"}},"          body"),e("span",{style:{color:"#89DDFF"}},":"),e("span",{style:{color:"#F07178"}}," "),e("span",{style:{color:"#89DDFF"}},"{")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F07178"}},"            text"),e("span",{style:{color:"#89DDFF"}},":"),e("span",{style:{color:"#F07178"}}," "),e("span",{style:{color:"#89DDFF"}},"`"),e("span",{style:{color:"#C3E88D"}},"Article "),e("span",{style:{color:"#89DDFF"}},"${"),e("span",{style:{color:"#A6ACCD"}},"data"),e("span",{style:{color:"#89DDFF"}},"."),e("span",{style:{color:"#A6ACCD"}},"published"),e("span",{style:{color:"#89DDFF"}},"."),e("span",{style:{color:"#A6ACCD"}},"title"),e("span",{style:{color:"#89DDFF"}},"}"),e("span",{style:{color:"#C3E88D"}}," was published."),e("span",{style:{color:"#89DDFF"}},"`")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F07178"}},"        "),e("span",{style:{color:"#89DDFF"}},"}")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F07178"}},"        "),e("span",{style:{color:"#89DDFF"}},"}"),e("span",{style:{color:"#F07178"}},")"),e("span",{style:{color:"#89DDFF"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F07178"}},"      "),e("span",{style:{color:"#89DDFF"}},"}")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F07178"}},"    "),e("span",{style:{color:"#89DDFF"}},"}")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F07178"}},"  "),e("span",{style:{color:"#89DDFF"}},"};")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#89DDFF"}},"}")])])])],-1),D=t("",4),h=e("div",{class:"language-javascript"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"javascript"),e("pre",{class:"shiki material-theme-palenight"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#FFCB6B"}},"options"),e("span",{style:{color:"#89DDFF"}},":"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#89DDFF"}},"{")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F07178"}},"  "),e("span",{style:{color:"#FFCB6B"}},"csrfExceptions"),e("span",{style:{color:"#89DDFF"}},":"),e("span",{style:{color:"#F07178"}}," [ "),e("span",{style:{color:"#89DDFF"}},"'"),e("span",{style:{color:"#C3E88D"}},"/webhooks"),e("span",{style:{color:"#89DDFF"}},"'"),e("span",{style:{color:"#F07178"}}," ]")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#89DDFF"}},"},")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#82AAFF"}},"apiRoutes"),e("span",{style:{color:"#A6ACCD"}},"(self) "),e("span",{style:{color:"#89DDFF"}},"{")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F07178"}},"  "),e("span",{style:{color:"#89DDFF","font-style":"italic"}},"return"),e("span",{style:{color:"#F07178"}}," "),e("span",{style:{color:"#89DDFF"}},"{")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F07178"}},"    post"),e("span",{style:{color:"#89DDFF"}},":"),e("span",{style:{color:"#F07178"}}," "),e("span",{style:{color:"#89DDFF"}},"{")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#89DDFF"}},"      "),e("span",{style:{color:"#676E95","font-style":"italic"}},"// change function name to match the desired endpoint URL")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F07178"}},"      "),e("span",{style:{color:"#89DDFF"}},"'"),e("span",{style:{color:"#F07178"}},"/webhooks"),e("span",{style:{color:"#89DDFF"}},"'"),e("span",{style:{color:"#89DDFF"}},":"),e("span",{style:{color:"#F07178"}}," "),e("span",{style:{color:"#C792EA"}},"async"),e("span",{style:{color:"#F07178"}}," "),e("span",{style:{color:"#C792EA"}},"function"),e("span",{style:{color:"#89DDFF"}},"("),e("span",{style:{color:"#A6ACCD","font-style":"italic"}},"req"),e("span",{style:{color:"#89DDFF"}},")"),e("span",{style:{color:"#F07178"}}," "),e("span",{style:{color:"#89DDFF"}},"{")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F07178"}},"        ")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#89DDFF"}},"        "),e("span",{style:{color:"#676E95","font-style":"italic"}},"// Implement your own authorization check here")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#89DDFF"}},"        "),e("span",{style:{color:"#676E95","font-style":"italic"}},"// to make sure the data is from a genuine source")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#89DDFF"}},"        "),e("span",{style:{color:"#676E95","font-style":"italic"}},"// Each webhook provider likely has guidance and ")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#89DDFF"}},"        "),e("span",{style:{color:"#676E95","font-style":"italic"}},"// a specific type of authorization")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F07178"}},"        "),e("span",{style:{color:"#C792EA"}},"const"),e("span",{style:{color:"#F07178"}}," "),e("span",{style:{color:"#A6ACCD"}},"authHeader"),e("span",{style:{color:"#F07178"}}," "),e("span",{style:{color:"#89DDFF"}},"="),e("span",{style:{color:"#F07178"}}," "),e("span",{style:{color:"#A6ACCD"}},"req"),e("span",{style:{color:"#89DDFF"}},"."),e("span",{style:{color:"#A6ACCD"}},"headers"),e("span",{style:{color:"#89DDFF"}},"."),e("span",{style:{color:"#A6ACCD"}},"authorization"),e("span",{style:{color:"#89DDFF"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F07178"}},"        "),e("span",{style:{color:"#89DDFF","font-style":"italic"}},"if"),e("span",{style:{color:"#F07178"}}," ("),e("span",{style:{color:"#89DDFF"}},"!"),e("span",{style:{color:"#A6ACCD"}},"authHeader"),e("span",{style:{color:"#F07178"}},") "),e("span",{style:{color:"#89DDFF"}},"{")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F07178"}},"          "),e("span",{style:{color:"#89DDFF","font-style":"italic"}},"throw"),e("span",{style:{color:"#F07178"}}," "),e("span",{style:{color:"#A6ACCD"}},"self"),e("span",{style:{color:"#89DDFF"}},"."),e("span",{style:{color:"#A6ACCD"}},"apos"),e("span",{style:{color:"#89DDFF"}},"."),e("span",{style:{color:"#82AAFF"}},"error"),e("span",{style:{color:"#F07178"}},"("),e("span",{style:{color:"#89DDFF"}},"'"),e("span",{style:{color:"#C3E88D"}},"forbidden"),e("span",{style:{color:"#89DDFF"}},"'"),e("span",{style:{color:"#F07178"}},")"),e("span",{style:{color:"#89DDFF"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F07178"}},"        "),e("span",{style:{color:"#89DDFF"}},"}")]),o(`
`),e("span",{class:"line"}),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#89DDFF"}},"        "),e("span",{style:{color:"#676E95","font-style":"italic"}},"// Use data passed by webhook to update database")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#89DDFF"}},"        "),e("span",{style:{color:"#676E95","font-style":"italic"}},"// or provide some other type of functionality")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F07178"}},"        "),e("span",{style:{color:"#C792EA"}},"const"),e("span",{style:{color:"#F07178"}}," "),e("span",{style:{color:"#A6ACCD"}},"webhookData"),e("span",{style:{color:"#F07178"}}," "),e("span",{style:{color:"#89DDFF"}},"="),e("span",{style:{color:"#F07178"}}," "),e("span",{style:{color:"#A6ACCD"}},"req"),e("span",{style:{color:"#89DDFF"}},"."),e("span",{style:{color:"#A6ACCD"}},"body"),e("span",{style:{color:"#89DDFF"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F07178"}},"        "),e("span",{style:{color:"#A6ACCD"}},"async"),e("span",{style:{color:"#F07178"}}," "),e("span",{style:{color:"#82AAFF"}},"addNewSubscriber"),e("span",{style:{color:"#F07178"}},"("),e("span",{style:{color:"#A6ACCD"}},"webhookData"),e("span",{style:{color:"#F07178"}},")"),e("span",{style:{color:"#89DDFF"}},";")]),o(`
`),e("span",{class:"line"}),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#89DDFF"}},"        "),e("span",{style:{color:"#676E95","font-style":"italic"}},"// Most webhook providers expect a 200 response")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#89DDFF"}},"        "),e("span",{style:{color:"#676E95","font-style":"italic"}},"// or they will attempt to resend the webhook")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F07178"}},"        "),e("span",{style:{color:"#89DDFF","font-style":"italic"}},"return"),e("span",{style:{color:"#F07178"}}," "),e("span",{style:{color:"#89DDFF"}},"{};")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F07178"}},"      "),e("span",{style:{color:"#89DDFF"}},"}")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F07178"}},"    "),e("span",{style:{color:"#89DDFF"}},"}")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F07178"}},"  "),e("span",{style:{color:"#89DDFF"}},"};")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#89DDFF"}},"}")])])])],-1),d=t("",4);function u(f,m,b,A,C,g){const l=r("AposCodeBlock");return c(),p("div",null,[y,a(l,null,{caption:s(()=>[o(" /modules/article/index.js ")]),default:s(()=>[F,o()]),_:1}),D,a(l,null,{caption:s(()=>[o(" /modules/subscription/index.js ")]),default:s(()=>[h,o()]),_:1}),d])}const _=n(i,[["render",u]]);export{k as __pageData,_ as default};
