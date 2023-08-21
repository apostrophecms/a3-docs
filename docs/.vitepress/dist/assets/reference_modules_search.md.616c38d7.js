import{_ as n,K as c,o as r,c as p,O as a,w as o,$ as t,k as e,a as s}from"./chunks/framework.9fa1e75e.js";const E=JSON.parse('{"title":"@apostrophecms/search","description":"","frontmatter":{"extends":"@apostrophecms/module"},"headers":[],"relativePath":"reference/modules/search.md","filePath":"reference/modules/search.md","lastUpdated":1690289066000}'),i={name:"reference/modules/search.md"},d=t('<h1 id="apostrophecms-search" tabindex="-1"><code>@apostrophecms/search</code> <a class="header-anchor" href="#apostrophecms-search" aria-label="Permalink to &quot;`@apostrophecms/search`&quot;">​</a></h1><p><strong>Alias:</strong> <code>apos.search</code></p><p>The <code>@apostrophecms/search</code> module implements a sitewide search powered by the full-text search features of MongoDB. The module also provides the <code>@apostrophecms/search</code> page type to be used as a <a href="/reference/modules/page.html#park">parked page</a>. Like other page types, the module must be added to your <code>app.js</code> and project level <code>@apostrophecms/page/index.js</code> files.</p>',3),y=e("div",{class:"language-js"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"js"),e("pre",{class:"shiki material-theme-palenight"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#89DDFF"}},"module.exports"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#89DDFF"}},"="),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"  "),e("span",{style:{color:"#F07178"}},"options"),e("span",{style:{color:"#89DDFF"}},":"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"    "),e("span",{style:{color:"#F07178"}},"park"),e("span",{style:{color:"#89DDFF"}},":"),e("span",{style:{color:"#A6ACCD"}}," [")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"      "),e("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"        "),e("span",{style:{color:"#F07178"}},"slug"),e("span",{style:{color:"#89DDFF"}},":"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#89DDFF"}},"'"),e("span",{style:{color:"#C3E88D"}},"/search"),e("span",{style:{color:"#89DDFF"}},"'"),e("span",{style:{color:"#89DDFF"}},",")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"        "),e("span",{style:{color:"#F07178"}},"parkedId"),e("span",{style:{color:"#89DDFF"}},":"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#89DDFF"}},"'"),e("span",{style:{color:"#C3E88D"}},"search"),e("span",{style:{color:"#89DDFF"}},"'"),e("span",{style:{color:"#89DDFF"}},",")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"        "),e("span",{style:{color:"#F07178"}},"title"),e("span",{style:{color:"#89DDFF"}},":"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#89DDFF"}},"'"),e("span",{style:{color:"#C3E88D"}},"Search"),e("span",{style:{color:"#89DDFF"}},"'"),e("span",{style:{color:"#89DDFF"}},",")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"        "),e("span",{style:{color:"#F07178"}},"type"),e("span",{style:{color:"#89DDFF"}},":"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#89DDFF"}},"'"),e("span",{style:{color:"#C3E88D"}},"@apostrophecms/search"),e("span",{style:{color:"#89DDFF"}},"'")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"      "),e("span",{style:{color:"#89DDFF"}},"}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"    ]")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"  "),e("span",{style:{color:"#89DDFF"}},"}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#89DDFF"}},"};")])])])],-1),h=t('<h2 id="customizing-the-search-template" tabindex="-1">Customizing the search template <a class="header-anchor" href="#customizing-the-search-template" aria-label="Permalink to &quot;Customizing the search template&quot;">​</a></h2><p>The <code>@apostrophe/search</code> module template can be customized through adding files to the project-level <code>modules/@apostrophecms/search/views</code> folder. The default template is <code>index.html</code>. This file can be copied to your project-level folder for modification or used as an example to build a page from scratch. The main block of this template contains a form for adding any filters to the search if the <code>filters</code> option has been populated, as well as the query terms. Below the form is a section to output the search results returned to the page in the <code>data.doc</code> object. Finally, the page includes the <a href="/guide/piece-pages.html#pagination">standard pagination section</a>. In this case, it is added using <code>{% include &quot;pager.html&quot; %}</code> to load it in from another file in the <code>views</code> folder so that it can be easily reused. You can elect to add the pager directly to your project template or keep it as a separate file.</p><h2 id="options" tabindex="-1">Options <a class="header-anchor" href="#options" aria-label="Permalink to &quot;Options&quot;">​</a></h2><table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>perPage</code></td><td>Integer</td><td>Search results per page. Defaults to 10.</td></tr><tr><td><a href="#types"><code>types</code></a></td><td>Array</td><td>An array of page and piece type names to be searched.</td></tr><tr><td><a href="#filters"><code>filters</code></a></td><td>Array</td><td>An array of filters offered to the user to refine results.</td></tr></tbody></table><h3 id="types" tabindex="-1">Types <a class="header-anchor" href="#types" aria-label="Permalink to &quot;Types&quot;">​</a></h3><p>The <code>types</code> option takes an array of page-type and piece-type document names that will be included within the search results. By default, all page and piece docs are searchable. Piece types can opt out of searching by adding an option of <code>seachable: false</code>. Adding an array to the <code>types</code> option will provide search results from just those types of pages and pieces, regardless of the value of the <code>searchable</code> option of any piece type. Excluding a page type from the <code>types</code> array is the only way to exclude search results from a particular page type.</p>',6),D=e("div",{class:"language-js"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"js"),e("pre",{class:"shiki material-theme-palenight"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#89DDFF"}},"module.exports"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#89DDFF"}},"="),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"  "),e("span",{style:{color:"#F07178"}},"options"),e("span",{style:{color:"#89DDFF"}},":"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#89DDFF"}},"    "),e("span",{style:{color:"#676E95","font-style":"italic"}},"// search only the product piece-type, blog piece-types, and blog page-types")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#89DDFF"}},"    "),e("span",{style:{color:"#676E95","font-style":"italic"}},"// not adding 'product-page' will exclude results from product `index.html` page")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#89DDFF"}},"    "),e("span",{style:{color:"#676E95","font-style":"italic"}},"// including '@apostrophecms/blog-page' will include the 'index.html' blog page,")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#89DDFF"}},"    "),e("span",{style:{color:"#676E95","font-style":"italic"}},"// including `@apostrophecms/blog` will include results from individual 'show.html'pages")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"    "),e("span",{style:{color:"#F07178"}},"types"),e("span",{style:{color:"#89DDFF"}},":"),e("span",{style:{color:"#A6ACCD"}}," [ "),e("span",{style:{color:"#89DDFF"}},"'"),e("span",{style:{color:"#C3E88D"}},"product"),e("span",{style:{color:"#89DDFF"}},"'"),e("span",{style:{color:"#89DDFF"}},","),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#89DDFF"}},"'"),e("span",{style:{color:"#C3E88D"}},"@apostrophecms/blog"),e("span",{style:{color:"#89DDFF"}},"'"),e("span",{style:{color:"#89DDFF"}},","),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#89DDFF"}},"'"),e("span",{style:{color:"#C3E88D"}},"@apostrophecms/blog-page"),e("span",{style:{color:"#89DDFF"}},"'"),e("span",{style:{color:"#A6ACCD"}}," ]")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"  "),e("span",{style:{color:"#89DDFF"}},"}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#89DDFF"}},"};")])])])],-1),F=t('<h3 id="filters" tabindex="-1">Filters <a class="header-anchor" href="#filters" aria-label="Permalink to &quot;Filters&quot;">​</a></h3><p>The <code>filters</code> option takes an array of objects that each have <code>name</code> and <code>label</code> properties. The <code>name</code> key takes a piece or page type document name as value. The <code>label</code> key takes a l10n-localizable string that is presented to the user. On the search page, the user will be presented with a list of filters by label, along with a checkbox to toggle the filter on and off. In addition to the filters derived from this array, users will also be presented with an <code>Everything else</code> filter that will allow the user to filter any other piece or page documents that are not included in the named filters.</p>',2),u=e("div",{class:"language-js"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"js"),e("pre",{class:"shiki material-theme-palenight"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#89DDFF"}},"module.exports"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#89DDFF"}},"="),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"  "),e("span",{style:{color:"#F07178"}},"options"),e("span",{style:{color:"#89DDFF"}},":"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"    "),e("span",{style:{color:"#F07178"}},"filters"),e("span",{style:{color:"#89DDFF"}},":"),e("span",{style:{color:"#A6ACCD"}}," [")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"      "),e("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"        "),e("span",{style:{color:"#F07178"}},"name"),e("span",{style:{color:"#89DDFF"}},":"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#89DDFF"}},"'"),e("span",{style:{color:"#C3E88D"}},"product"),e("span",{style:{color:"#89DDFF"}},"'"),e("span",{style:{color:"#89DDFF"}},",")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"        "),e("span",{style:{color:"#F07178"}},"label"),e("span",{style:{color:"#89DDFF"}},":"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#89DDFF"}},"'"),e("span",{style:{color:"#C3E88D"}},"Product"),e("span",{style:{color:"#89DDFF"}},"'")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"      "),e("span",{style:{color:"#89DDFF"}},"},")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"      "),e("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"        "),e("span",{style:{color:"#F07178"}},"name"),e("span",{style:{color:"#89DDFF"}},":"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#89DDFF"}},"'"),e("span",{style:{color:"#C3E88D"}},"default-page"),e("span",{style:{color:"#89DDFF"}},"'"),e("span",{style:{color:"#89DDFF"}},",")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"        "),e("span",{style:{color:"#F07178"}},"label"),e("span",{style:{color:"#89DDFF"}},":"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#89DDFF"}},"'"),e("span",{style:{color:"#C3E88D"}},"Default Page"),e("span",{style:{color:"#89DDFF"}},"'")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"      "),e("span",{style:{color:"#89DDFF"}},"}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"    ]")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"  "),e("span",{style:{color:"#89DDFF"}},"}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#89DDFF"}},"};")])])])],-1),C=e("h2",{id:"module-tasks",tabindex:"-1"},[s("Module tasks "),e("a",{class:"header-anchor",href:"#module-tasks","aria-label":'Permalink to "Module tasks"'},"​")],-1),m=e("h3",{id:"index",tabindex:"-1"},[e("code",null,"index"),s(),e("a",{class:"header-anchor",href:"#index","aria-label":'Permalink to "`index`"'},"​")],-1),A=e("p",null,[s("Full command: "),e("code",null,"node app @apostrophecms/search:index")],-1),f=e("p",null,'Rebuild the search index. Normally this happens automatically. This should only be needed if you have changed the "searchable" property for various fields or types.',-1);function g(_,b,x,k,T,w){const l=c("AposCodeBlock");return r(),p("div",null,[d,a(l,null,{caption:o(()=>[s(" modules/@apostrophecms/page/index.js ")]),default:o(()=>[y]),_:1}),h,a(l,null,{caption:o(()=>[s(" modules/@apostrophecms/search/index.js ")]),default:o(()=>[D]),_:1}),F,a(l,null,{caption:o(()=>[s(" modules/@apostrophecms/search/index.js ")]),default:o(()=>[u]),_:1}),C,m,A,f])}const P=n(i,[["render",g]]);export{E as __pageData,P as default};
