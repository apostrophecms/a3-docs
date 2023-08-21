import{_ as l,K as c,o as p,c as r,O as t,w as o,k as e,$ as n,a as s}from"./chunks/framework.9fa1e75e.js";const j=JSON.parse('{"title":"Querying the database","description":"","frontmatter":{"prev":{"text":"Caching","link":"guide/caching.md"},"next":{"text":"Inserting and updating docs","link":"guide/database-insert-update.md"}},"headers":[],"relativePath":"guide/database-queries.md","filePath":"guide/database-queries.md","lastUpdated":1690289066000}'),i={name:"guide/database-queries.md"},d=n("",10),y=e("div",{class:"language-javascript"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"javascript"),e("pre",{class:"shiki material-theme-palenight"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#89DDFF"}},"module.exports"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#89DDFF"}},"="),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"  "),e("span",{style:{color:"#F07178"}},"extend"),e("span",{style:{color:"#89DDFF"}},":"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#89DDFF"}},"'"),e("span",{style:{color:"#C3E88D"}},"@apostrophecms/piece-type"),e("span",{style:{color:"#89DDFF"}},"'"),e("span",{style:{color:"#89DDFF"}},",")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#89DDFF"}},"  "),e("span",{style:{color:"#676E95","font-style":"italic"}},"// ...")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"  "),e("span",{style:{color:"#F07178"}},"components"),e("span",{style:{color:"#89DDFF"}},"("),e("span",{style:{color:"#A6ACCD","font-style":"italic"}},"self"),e("span",{style:{color:"#89DDFF"}},")"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F07178"}},"    "),e("span",{style:{color:"#89DDFF","font-style":"italic"}},"return"),e("span",{style:{color:"#F07178"}}," "),e("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#89DDFF"}},"      "),e("span",{style:{color:"#676E95","font-style":"italic"}},"// Returning the five most recently created products.")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F07178"}},"      "),e("span",{style:{color:"#C792EA"}},"async"),e("span",{style:{color:"#F07178"}}," latest"),e("span",{style:{color:"#89DDFF"}},"("),e("span",{style:{color:"#A6ACCD","font-style":"italic"}},"req"),e("span",{style:{color:"#89DDFF"}},","),e("span",{style:{color:"#F07178"}}," "),e("span",{style:{color:"#A6ACCD","font-style":"italic"}},"data"),e("span",{style:{color:"#89DDFF"}},")"),e("span",{style:{color:"#F07178"}}," "),e("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#89DDFF"}},"        "),e("span",{style:{color:"#676E95","font-style":"italic"}},"// 👇 Setting up our query criteria.")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F07178"}},"        "),e("span",{style:{color:"#C792EA"}},"const"),e("span",{style:{color:"#F07178"}}," "),e("span",{style:{color:"#A6ACCD"}},"criteria"),e("span",{style:{color:"#F07178"}}," "),e("span",{style:{color:"#89DDFF"}},"="),e("span",{style:{color:"#F07178"}}," "),e("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F07178"}},"          _id"),e("span",{style:{color:"#89DDFF"}},":"),e("span",{style:{color:"#F07178"}}," "),e("span",{style:{color:"#89DDFF"}},"{"),e("span",{style:{color:"#F07178"}}," $ne"),e("span",{style:{color:"#89DDFF"}},":"),e("span",{style:{color:"#F07178"}}," "),e("span",{style:{color:"#A6ACCD"}},"data"),e("span",{style:{color:"#89DDFF"}},"."),e("span",{style:{color:"#A6ACCD"}},"productId"),e("span",{style:{color:"#F07178"}}," "),e("span",{style:{color:"#89DDFF"}},"}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F07178"}},"        "),e("span",{style:{color:"#89DDFF"}},"};")]),s(`
`),e("span",{class:"line"}),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#89DDFF"}},"        "),e("span",{style:{color:"#676E95","font-style":"italic"}},"// 👇 The `find` method starting the query.")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F07178"}},"        "),e("span",{style:{color:"#C792EA"}},"const"),e("span",{style:{color:"#F07178"}}," "),e("span",{style:{color:"#A6ACCD"}},"products"),e("span",{style:{color:"#F07178"}}," "),e("span",{style:{color:"#89DDFF"}},"="),e("span",{style:{color:"#F07178"}}," "),e("span",{style:{color:"#89DDFF","font-style":"italic"}},"await"),e("span",{style:{color:"#F07178"}}," "),e("span",{style:{color:"#A6ACCD"}},"self"),e("span",{style:{color:"#89DDFF"}},"."),e("span",{style:{color:"#82AAFF"}},"find"),e("span",{style:{color:"#F07178"}},"("),e("span",{style:{color:"#A6ACCD"}},"req"),e("span",{style:{color:"#89DDFF"}},","),e("span",{style:{color:"#F07178"}}," "),e("span",{style:{color:"#A6ACCD"}},"criteria"),e("span",{style:{color:"#F07178"}},")")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F07178"}},"          "),e("span",{style:{color:"#89DDFF"}},"."),e("span",{style:{color:"#82AAFF"}},"sort"),e("span",{style:{color:"#F07178"}},"("),e("span",{style:{color:"#89DDFF"}},"{"),e("span",{style:{color:"#F07178"}}," createdAt"),e("span",{style:{color:"#89DDFF"}},":"),e("span",{style:{color:"#F07178"}}," "),e("span",{style:{color:"#89DDFF"}},"-"),e("span",{style:{color:"#F78C6C"}},"1"),e("span",{style:{color:"#F07178"}}," "),e("span",{style:{color:"#89DDFF"}},"}"),e("span",{style:{color:"#F07178"}},")")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F07178"}},"          "),e("span",{style:{color:"#89DDFF"}},"."),e("span",{style:{color:"#82AAFF"}},"limit"),e("span",{style:{color:"#F07178"}},"("),e("span",{style:{color:"#F78C6C"}},"5"),e("span",{style:{color:"#F07178"}},")")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F07178"}},"          "),e("span",{style:{color:"#89DDFF"}},"."),e("span",{style:{color:"#82AAFF"}},"toArray"),e("span",{style:{color:"#F07178"}},"()"),e("span",{style:{color:"#89DDFF"}},";")]),s(`
`),e("span",{class:"line"}),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F07178"}},"        "),e("span",{style:{color:"#89DDFF","font-style":"italic"}},"return"),e("span",{style:{color:"#F07178"}}," "),e("span",{style:{color:"#89DDFF"}},"{"),e("span",{style:{color:"#F07178"}}," "),e("span",{style:{color:"#A6ACCD"}},"products"),e("span",{style:{color:"#F07178"}}," "),e("span",{style:{color:"#89DDFF"}},"};")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F07178"}},"      "),e("span",{style:{color:"#89DDFF"}},"}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F07178"}},"    "),e("span",{style:{color:"#89DDFF"}},"};")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F07178"}},"  "),e("span",{style:{color:"#89DDFF"}},"}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#89DDFF"}},"};")])])])],-1),u={class:"info custom-block"},h=e("p",{class:"custom-block-title"},"INFO",-1),D=e("p",null,"For context, this is what it would look like to invoke this async component in a product show page template:",-1),F=e("div",{class:"language-njk"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"njk"),e("pre",{class:"shiki material-theme-palenight"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"{% component 'product:latest' with { productId: data.piece._id } %}")])])])],-1),A=n("",33),C=e("div",{class:"language-javascript"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"javascript"),e("pre",{class:"shiki material-theme-palenight"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#89DDFF"}},"module.exports"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#89DDFF"}},"="),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"  "),e("span",{style:{color:"#F07178"}},"fields"),e("span",{style:{color:"#89DDFF"}},":"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"    "),e("span",{style:{color:"#F07178"}},"add"),e("span",{style:{color:"#89DDFF"}},":"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#89DDFF"}},"      "),e("span",{style:{color:"#676E95","font-style":"italic"}},"//...")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"      "),e("span",{style:{color:"#F07178"}},"category"),e("span",{style:{color:"#89DDFF"}},":"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"        "),e("span",{style:{color:"#F07178"}},"type"),e("span",{style:{color:"#89DDFF"}},":"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#89DDFF"}},"'"),e("span",{style:{color:"#C3E88D"}},"select"),e("span",{style:{color:"#89DDFF"}},"'"),e("span",{style:{color:"#89DDFF"}},",")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"        "),e("span",{style:{color:"#F07178"}},"label"),e("span",{style:{color:"#89DDFF"}},":"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#89DDFF"}},"'"),e("span",{style:{color:"#C3E88D"}},"Product Line"),e("span",{style:{color:"#89DDFF"}},"'"),e("span",{style:{color:"#89DDFF"}},",")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"        "),e("span",{style:{color:"#F07178"}},"choices"),e("span",{style:{color:"#89DDFF"}},":"),e("span",{style:{color:"#A6ACCD"}}," [")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"          "),e("span",{style:{color:"#89DDFF"}},"{"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#F07178"}},"value"),e("span",{style:{color:"#89DDFF"}},":"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#89DDFF"}},"'"),e("span",{style:{color:"#C3E88D"}},"professional"),e("span",{style:{color:"#89DDFF"}},"'"),e("span",{style:{color:"#89DDFF"}},","),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#F07178"}},"label"),e("span",{style:{color:"#89DDFF"}},":"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#89DDFF"}},"'"),e("span",{style:{color:"#C3E88D"}},"Professional"),e("span",{style:{color:"#89DDFF"}},"'"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#89DDFF"}},"},")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"          "),e("span",{style:{color:"#89DDFF"}},"{"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#F07178"}},"value"),e("span",{style:{color:"#89DDFF"}},":"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#89DDFF"}},"'"),e("span",{style:{color:"#C3E88D"}},"hobbyist"),e("span",{style:{color:"#89DDFF"}},"'"),e("span",{style:{color:"#89DDFF"}},","),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#F07178"}},"label"),e("span",{style:{color:"#89DDFF"}},":"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#89DDFF"}},"'"),e("span",{style:{color:"#C3E88D"}},"Hobby"),e("span",{style:{color:"#89DDFF"}},"'"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#89DDFF"}},"},")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"          "),e("span",{style:{color:"#89DDFF"}},"{"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#F07178"}},"value"),e("span",{style:{color:"#89DDFF"}},":"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#89DDFF"}},"'"),e("span",{style:{color:"#C3E88D"}},"athletic"),e("span",{style:{color:"#89DDFF"}},"'"),e("span",{style:{color:"#89DDFF"}},","),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#F07178"}},"label"),e("span",{style:{color:"#89DDFF"}},":"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#89DDFF"}},"'"),e("span",{style:{color:"#C3E88D"}},"Athletic"),e("span",{style:{color:"#89DDFF"}},"'"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#89DDFF"}},"}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"        ]")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"      "),e("span",{style:{color:"#89DDFF"}},"}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"    "),e("span",{style:{color:"#89DDFF"}},"}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"  "),e("span",{style:{color:"#89DDFF"}},"}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#89DDFF"}},"}")])])])],-1),m=n("",49);function g(f,b,w,q,v,k){const a=c("AposCodeBlock");return p(),r("div",null,[d,t(a,null,{caption:o(()=>[s(" modules/product/index.js ")]),default:o(()=>[y,s()]),_:1}),e("div",u,[h,D,t(a,null,{caption:o(()=>[s(" modules/product-page/views/show.html ")]),default:o(()=>[F,s()]),_:1})]),A,t(a,null,{caption:o(()=>[s(" modules/product-page/views/show.html ")]),default:o(()=>[C,s()]),_:1}),m])}const T=l(i,[["render",g]]);export{j as __pageData,T as default};
