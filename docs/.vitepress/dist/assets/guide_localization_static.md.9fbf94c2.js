import{_ as n,K as i,o as r,c,O as a,w as o,$ as l,k as e,a as s}from"./chunks/framework.9fa1e75e.js";const V=JSON.parse('{"title":"Static string localization","description":"","frontmatter":{"prev":{"text":"Overview","link":"guide/localization/"},"next":{"text":"Dynamic i10n","link":"guide/localization/dynamic.md"}},"headers":[],"relativePath":"guide/localization/static.md","filePath":"guide/localization/static.md","lastUpdated":1690289066000}'),p={name:"guide/localization/static.md"},d=l('<h1 id="static-string-localization" tabindex="-1">Static string localization <a class="header-anchor" href="#static-string-localization" aria-label="Permalink to &quot;Static string localization&quot;">​</a></h1><p>This section covers localization of strings throughout template files and Apostrophe user interface. These strings are hard-coded, not editable by logged-in users, and thus are not stored in the database. Instead, this localization is stored in JSON files associated with the various locales.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>Localizing static strings is only possible if the Apostrophe app has configured locales. If you are looking for information on configuring locales, see the <a href="./#configuring-locales">localization landing page</a>. There is also a <a href="/reference/glossary.html#localization-terms">glossary section</a> of related terms.</p></div><h2 id="localizing-strings" tabindex="-1">Localizing strings <a class="header-anchor" href="#localizing-strings" aria-label="Permalink to &quot;Localizing strings&quot;">​</a></h2><p>There are often good reasons to hard-code text in templates even if we operate in multiple languages. For example, if our website has a blog with related articles featured at the bottom of each post using a relationship field. The heading &quot;Related articles&quot; belongs in the show page template. We don&#39;t want to make content editors translate that each time and we want to avoid creating any custom global fields for a text string that is not likely to change.</p><p>That section of our show page template might look like this:</p>',6),h=e("div",{class:"language-njk"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"njk"),e("pre",{class:"shiki material-theme-palenight"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"{# More article template stuff above ⤴ #}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"  "),e("span",{style:{color:"#89DDFF"}},"<"),e("span",{style:{color:"#F07178"}},"section"),e("span",{style:{color:"#89DDFF"}},">")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"    "),e("span",{style:{color:"#89DDFF"}},"<"),e("span",{style:{color:"#F07178"}},"h2"),e("span",{style:{color:"#89DDFF"}},">"),e("span",{style:{color:"#A6ACCD"}},"Related articles"),e("span",{style:{color:"#89DDFF"}},"</"),e("span",{style:{color:"#F07178"}},"h2"),e("span",{style:{color:"#89DDFF"}},">"),e("span",{style:{color:"#A6ACCD"}}," {# 👈 We need to localize this. #}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"    "),e("span",{style:{color:"#89DDFF"}},"<"),e("span",{style:{color:"#F07178"}},"ul"),e("span",{style:{color:"#89DDFF"}},">")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"      {% for post in data.piece._related %}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"        "),e("span",{style:{color:"#89DDFF"}},"<"),e("span",{style:{color:"#F07178"}},"li"),e("span",{style:{color:"#89DDFF"}},"><"),e("span",{style:{color:"#F07178"}},"a"),e("span",{style:{color:"#89DDFF"}}," "),e("span",{style:{color:"#C792EA"}},"href"),e("span",{style:{color:"#89DDFF"}},"="),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#C3E88D"}},"{{ post._url }}"),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#89DDFF"}},">"),e("span",{style:{color:"#A6ACCD"}},"{{ post.title }}"),e("span",{style:{color:"#89DDFF"}},"</"),e("span",{style:{color:"#F07178"}},"a"),e("span",{style:{color:"#89DDFF"}},"></"),e("span",{style:{color:"#F07178"}},"li"),e("span",{style:{color:"#89DDFF"}},">")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"      {% endfor %}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"    "),e("span",{style:{color:"#89DDFF"}},"</"),e("span",{style:{color:"#F07178"}},"ul"),e("span",{style:{color:"#89DDFF"}},">")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"  "),e("span",{style:{color:"#89DDFF"}},"</"),e("span",{style:{color:"#F07178"}},"section"),e("span",{style:{color:"#89DDFF"}},">")])])])],-1),y=e("p",null,[s("Localizing that string is as easy as wrapping it in a template helper: "),e("code",null,"__t()"),s(". Make sure the string passed to the helper is in quotes and any matching quotes in the string are escaped (e.g., "),e("code",null,"__t('Gritty\\'s friends')"),s(").")],-1),u=e("div",{class:"language-njk"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"njk"),e("pre",{class:"shiki material-theme-palenight"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"{# More article template stuff above ⤴ #}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"  "),e("span",{style:{color:"#89DDFF"}},"<"),e("span",{style:{color:"#F07178"}},"section"),e("span",{style:{color:"#89DDFF"}},">")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"    "),e("span",{style:{color:"#89DDFF"}},"<"),e("span",{style:{color:"#F07178"}},"h2"),e("span",{style:{color:"#89DDFF"}},">"),e("span",{style:{color:"#A6ACCD"}},"{{ __t('Related articles') }}"),e("span",{style:{color:"#89DDFF"}},"</"),e("span",{style:{color:"#F07178"}},"h2"),e("span",{style:{color:"#89DDFF"}},">"),e("span",{style:{color:"#A6ACCD"}}," {# 🎉 It's localized! #}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"    "),e("span",{style:{color:"#89DDFF"}},"<"),e("span",{style:{color:"#F07178"}},"ul"),e("span",{style:{color:"#89DDFF"}},">")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"      {% for post in data.piece._related %}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"        "),e("span",{style:{color:"#89DDFF"}},"<"),e("span",{style:{color:"#F07178"}},"li"),e("span",{style:{color:"#89DDFF"}},"><"),e("span",{style:{color:"#F07178"}},"a"),e("span",{style:{color:"#89DDFF"}}," "),e("span",{style:{color:"#C792EA"}},"href"),e("span",{style:{color:"#89DDFF"}},"="),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#C3E88D"}},"{{ post._url }}"),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#89DDFF"}},">"),e("span",{style:{color:"#A6ACCD"}},"{{ post.title }}"),e("span",{style:{color:"#89DDFF"}},"</"),e("span",{style:{color:"#F07178"}},"a"),e("span",{style:{color:"#89DDFF"}},"></"),e("span",{style:{color:"#F07178"}},"li"),e("span",{style:{color:"#89DDFF"}},">")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"      {% endfor %}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"    "),e("span",{style:{color:"#89DDFF"}},"</"),e("span",{style:{color:"#F07178"}},"ul"),e("span",{style:{color:"#89DDFF"}},">")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"  "),e("span",{style:{color:"#89DDFF"}},"</"),e("span",{style:{color:"#F07178"}},"section"),e("span",{style:{color:"#89DDFF"}},">")])])])],-1),D=l('<p>In that example, we passed the actual text to the localization helper. This has the benefit that it will be automatically used for the default locale and any other locales that don&#39;t translate it.</p><p>Our other option is to use a <strong>localization key that is different from the original text</strong>. Taking our example, that heading tag might instead look like:</p><div class="language-njk"><button title="Copy Code" class="copy"></button><span class="lang">njk</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">h2</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">{{ __t(&#39;relatedArticles&#39;) }}</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">h2</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p>This method is better if your team prefers to maintain all hard-coded strings in the same way across locales (treating the default locale the same as others). Using the original text as the key, as in our previous example, might be better so that translators can see the original text alongside their translations in the JSON files. It mostly depends how you prefer to work. The important thing is to be consistent.</p><h3 id="registering-text-outside-of-templates" tabindex="-1">Registering text outside of templates <a class="header-anchor" href="#registering-text-outside-of-templates" aria-label="Permalink to &quot;Registering text outside of templates&quot;">​</a></h3><p>Two other places you may want to register strings are in <strong>API routes</strong> and in Vue.js <strong>user interface components</strong>.</p><p>To register strings in <strong>custom API routes</strong>, use the <code>req.t()</code> method on the request object.</p>',7),F=e("div",{class:"language-javascript"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"javascript"),e("pre",{class:"shiki material-theme-palenight"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#89DDFF"}},"module.exports"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#89DDFF"}},"="),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#89DDFF"}},"  "),e("span",{style:{color:"#676E95","font-style":"italic"}},"// ...")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"  "),e("span",{style:{color:"#F07178"}},"apiRoutes"),e("span",{style:{color:"#89DDFF"}},"("),e("span",{style:{color:"#A6ACCD","font-style":"italic"}},"self"),e("span",{style:{color:"#89DDFF"}},")"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F07178"}},"    "),e("span",{style:{color:"#89DDFF","font-style":"italic"}},"return"),e("span",{style:{color:"#F07178"}}," "),e("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F07178"}},"      get"),e("span",{style:{color:"#89DDFF"}},":"),e("span",{style:{color:"#F07178"}}," "),e("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#89DDFF"}},"        "),e("span",{style:{color:"#676E95","font-style":"italic"}},"// GET /api/v1/product/newest")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F07178"}},"        "),e("span",{style:{color:"#C792EA"}},"async"),e("span",{style:{color:"#F07178"}}," newest"),e("span",{style:{color:"#89DDFF"}},"("),e("span",{style:{color:"#A6ACCD","font-style":"italic"}},"req"),e("span",{style:{color:"#89DDFF"}},")"),e("span",{style:{color:"#F07178"}}," "),e("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F07178"}},"          "),e("span",{style:{color:"#C792EA"}},"const"),e("span",{style:{color:"#F07178"}}," "),e("span",{style:{color:"#A6ACCD"}},"product"),e("span",{style:{color:"#F07178"}}," "),e("span",{style:{color:"#89DDFF"}},"="),e("span",{style:{color:"#F07178"}}," "),e("span",{style:{color:"#89DDFF","font-style":"italic"}},"await"),e("span",{style:{color:"#F07178"}}," "),e("span",{style:{color:"#A6ACCD"}},"self"),e("span",{style:{color:"#89DDFF"}},"."),e("span",{style:{color:"#82AAFF"}},"find"),e("span",{style:{color:"#F07178"}},"("),e("span",{style:{color:"#A6ACCD"}},"req"),e("span",{style:{color:"#F07178"}},")"),e("span",{style:{color:"#89DDFF"}},"."),e("span",{style:{color:"#82AAFF"}},"sort"),e("span",{style:{color:"#F07178"}},"("),e("span",{style:{color:"#89DDFF"}},"{"),e("span",{style:{color:"#F07178"}}," createdAt"),e("span",{style:{color:"#89DDFF"}},":"),e("span",{style:{color:"#F07178"}}," "),e("span",{style:{color:"#89DDFF"}},"-"),e("span",{style:{color:"#F78C6C"}},"1"),e("span",{style:{color:"#F07178"}}," "),e("span",{style:{color:"#89DDFF"}},"}"),e("span",{style:{color:"#F07178"}},")"),e("span",{style:{color:"#89DDFF"}},"."),e("span",{style:{color:"#82AAFF"}},"toObject"),e("span",{style:{color:"#F07178"}},"()"),e("span",{style:{color:"#89DDFF"}},";")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F07178"}},"          "),e("span",{style:{color:"#89DDFF","font-style":"italic"}},"if"),e("span",{style:{color:"#F07178"}}," ("),e("span",{style:{color:"#89DDFF"}},"!"),e("span",{style:{color:"#A6ACCD"}},"product"),e("span",{style:{color:"#F07178"}},") "),e("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#89DDFF"}},"            "),e("span",{style:{color:"#676E95","font-style":"italic"}},"// 👇 Sends a localized version of the error with req.t()")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F07178"}},"            "),e("span",{style:{color:"#89DDFF","font-style":"italic"}},"throw"),e("span",{style:{color:"#F07178"}}," "),e("span",{style:{color:"#A6ACCD"}},"self"),e("span",{style:{color:"#89DDFF"}},"."),e("span",{style:{color:"#A6ACCD"}},"apos"),e("span",{style:{color:"#89DDFF"}},"."),e("span",{style:{color:"#82AAFF"}},"error"),e("span",{style:{color:"#F07178"}},"("),e("span",{style:{color:"#89DDFF"}},"'"),e("span",{style:{color:"#C3E88D"}},"notfound"),e("span",{style:{color:"#89DDFF"}},"'"),e("span",{style:{color:"#89DDFF"}},","),e("span",{style:{color:"#F07178"}}," "),e("span",{style:{color:"#A6ACCD"}},"req"),e("span",{style:{color:"#89DDFF"}},"."),e("span",{style:{color:"#82AAFF"}},"t"),e("span",{style:{color:"#F07178"}},"("),e("span",{style:{color:"#89DDFF"}},"'"),e("span",{style:{color:"#C3E88D"}},"No products were found."),e("span",{style:{color:"#89DDFF"}},"'"),e("span",{style:{color:"#F07178"}},"))"),e("span",{style:{color:"#89DDFF"}},";")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F07178"}},"          "),e("span",{style:{color:"#89DDFF"}},"}")]),s(`
`),e("span",{class:"line"}),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F07178"}},"          "),e("span",{style:{color:"#89DDFF","font-style":"italic"}},"return"),e("span",{style:{color:"#F07178"}}," "),e("span",{style:{color:"#89DDFF"}},"{"),e("span",{style:{color:"#F07178"}}," "),e("span",{style:{color:"#A6ACCD"}},"product"),e("span",{style:{color:"#F07178"}}," "),e("span",{style:{color:"#89DDFF"}},"};")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F07178"}},"        "),e("span",{style:{color:"#89DDFF"}},"}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F07178"}},"      "),e("span",{style:{color:"#89DDFF"}},"}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F07178"}},"    "),e("span",{style:{color:"#89DDFF"}},"};")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F07178"}},"  "),e("span",{style:{color:"#89DDFF"}},"}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#89DDFF"}},"};")])])])],-1),g=l('<div class="tip custom-block"><p class="custom-block-title">TIP</p><p>There is currently no browser method available to register strings in project client-side JS. A good alternative is to create an API route that returns localized strings then use the response from that route in client-side JS.</p></div><h3 id="localizing-with-string-interpolation" tabindex="-1">Localizing with string interpolation <a class="header-anchor" href="#localizing-with-string-interpolation" aria-label="Permalink to &quot;Localizing with string interpolation&quot;">​</a></h3><p>Consider the following string: &quot;<em>Contact the London office</em>.&quot; Maybe we have offices in multiple countries and use this heading on each office&#39;s page. In this case we don&#39;t know the <em>exact</em> string to translate since the city will change. The variable part, the city, is also in the middle (for some languages, at least) so we could not even translate the rest very easily. In cases like this we use <strong>string interpolation</strong>.</p><p>String interpolation is a process of generating a text string that is partly dynamic. In the previous paragraph&#39;s example, the city name is dynamic, or variable, since it is reused for each office.</p><p>Regardless of whether we are localizing text in templates, server-side code, or UI Vue files, interpolation works essentially the same way. The string or localization key is still the first argument in the localization function. <strong>Then an object is passed as a second argument to the l10n function, containing interpolation properties that match keys in curly braces.</strong></p><p>Template example:</p>',6),m=e("div",{class:"language-njk"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"njk"),e("pre",{class:"shiki material-theme-palenight"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"{{ __t('Contact the {{ city }} office', {")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"    city: data.piece.city")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"  }) }}")])])])],-1),f=e("p",null,[s("The arguments would look essentially identical in server-side or a UI file, using the respective l10n functions ("),e("code",null,"req.t()"),s(" and "),e("code",null,"this.$t()"),s(", respectively). This also works if the first argument was a localization key that had that string assigned as its value.")],-1),A=e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",{class:"shiki material-theme-palenight"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"    "),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#C792EA"}},"contactOffice"),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#89DDFF"}},":"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#C3E88D"}},"Contact the {{ city }} office"),e("span",{style:{color:"#89DDFF"}},'"')]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"  "),e("span",{style:{color:"#89DDFF"}},"}")])])])],-1),C=e("div",{class:"language-njk"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"njk"),e("pre",{class:"shiki material-theme-palenight"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"{{ __t('contactOffice', {")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"    city: data.piece.city")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"  }) }}")])])])],-1),_=l('<p>See the <a href="https://www.i18next.com/translation-function/interpolation" target="_blank" rel="noreferrer">i18next documentation</a> for more available options.</p><h2 id="adding-and-using-localization-files" tabindex="-1">Adding and using localization files <a class="header-anchor" href="#adding-and-using-localization-files" aria-label="Permalink to &quot;Adding and using localization files&quot;">​</a></h2><p>Now that there are strings to localize, we need to add JSON files for locales with the strings and their translations. For the purposes of our example we will assume we have two locales: <code>&#39;en&#39;</code> (English) and <code>&#39;es&#39;</code> (Spanish). Each locale should get its own JSON file using the locale name, in a <code>i18n</code> subdirectory of a module that has internationalization active.</p><p>Like all modules, we would need to activate this module in <code>app.js</code>, even if we don&#39;t need an <code>index.js</code> file. Our JSON files would be:</p><ul><li><code>modules/localization/i18n/en.json</code></li><li><code>modules/localization/i18n/es.json</code></li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>These files can be spread across modules if you like. For example you might want to localize strings from a particular module&#39;s template files in that module directory. Like with many things, this depends how you and your team like to work.</p><p>It&#39;s important to note that <strong>if the same key is used in multiple template files they will be rendered to the same string</strong>. It does not matter if each template has a localization JSON file with that key registered.</p></div><p>Each JSON file will include key/value pairs with the localization key and a string that should replace the localization key.</p><p>If the only localization key we registered in our project was <code>relatedArticles</code> from above, our files would look like:</p>',8),w=e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",{class:"shiki material-theme-palenight"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"  "),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#C792EA"}},"relatedArticles"),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#89DDFF"}},":"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#C3E88D"}},"Related articles"),e("span",{style:{color:"#89DDFF"}},'"')]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#89DDFF"}},"}")])])])],-1),b=e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",{class:"shiki material-theme-palenight"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"  "),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#C792EA"}},"relatedArticles"),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#89DDFF"}},":"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#C3E88D"}},"Artículos relacionados"),e("span",{style:{color:"#89DDFF"}},'"')]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#89DDFF"}},"}")])])])],-1),k=l('<p>When rendering the show page template, Apostrophe will look in these files, find the registered key and replace it with the correct string based on the active locale.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>The primary module to avoid using to store l10n strings for project-level text is <code>@apostrophecms/i18n</code>, the actual internationalization module. This is used by Apostrophe core for the user interface and it uses a namespace to keep its l10n keys separate from project-level localization.</p></div><h2 id="using-namespaces" tabindex="-1">Using namespaces <a class="header-anchor" href="#using-namespaces" aria-label="Permalink to &quot;Using namespaces&quot;">​</a></h2><p>A l10n <strong>namespace</strong> is a prefix on localization keys that makes it harder to accidentally override. In project-level l10n namespacing is <em>not really necessary</em> since there are not additional layers of work that might override translation there.</p><p>Namespacing can be useful if you are building your own modules with hard-coded strings that you intend to publish. When that module is installed in a project later it would be less likely that the project will change them accidentally.</p><p>To use a l10n namespace, first choose a namespace name. Let&#39;s say it&#39;s <code>ourTeam</code>. Create an <code>i18n/ourTeam</code> subdirectory inside your module, and populate it with <code>.json</code> files.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Although you can set the <code>i18n.ns</code> option of the module instead to define the namespace for <code>.json</code> files placed directly in <code>i18n/</code>, we do not recommend this legacy approach because it can break localization of text inherited from another module. Use namespace subdirectories instead.</p></div>',7),v=e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",{class:"shiki material-theme-palenight"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"  "),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#C792EA"}},"relatedArticles"),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#89DDFF"}},":"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#C3E88D"}},"Related articles"),e("span",{style:{color:"#89DDFF"}},'"')]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#89DDFF"}},"}")])])])],-1),T=l('<p><strong>You do not need to include the namespace name in the contents of the l10n JSON files themselves.</strong> Apostrophe will know the namespace already based on the directory name.</p><p>Then when you use the localization keys in template files (or elsewhere), start each key with the namespace:</p><div class="language-njk"><button title="Copy Code" class="copy"></button><span class="lang">njk</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">h2</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">__t(&#39;ourTeam:relatedArticles&#39;)</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">h2</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p>Apostrophe will then treat keys with the namespace differently from the same key without the namespace (<code>ourTeam:relatedArticles</code> vs. <code>relatedArticles</code>). If someone uses the version <em>without</em> the namespace it will not overwrite the version <em>with</em> the namespace.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Avoid using namespaces that begin with <code>apos</code>. The core team uses namespaces that begin with that for official modules, e.g., <code>aposForm</code> and <code>aposSeo</code>. Using that prefix is not technically forbidden, but it could result in conflicts with official modules. Using the <code>apostrophe</code> namespace should definitely be avoided since it is used in Apostrophe core.</p><p>As a reminder, namespacing is primarily necessary for <em>installable modules</em> and not for project-level localization.</p></div><h2 id="localizing-the-apostrophe-user-interface" tabindex="-1">Localizing the Apostrophe user interface <a class="header-anchor" href="#localizing-the-apostrophe-user-interface" aria-label="Permalink to &quot;Localizing the Apostrophe user interface&quot;">​</a></h2><p>The Apostrophe user interface contains many registered strings, currently localized to English and a few other languages. We will be working to provide more localization files, but if you are interested in adding l10n files to your project for the UI, you are welcome to do that. Localizing text in your own <strong>custom</strong> admin UI modules is a separate topic which we&#39;ll address later.</p><p>To localize Apostrophe&#39;s existing user interface strings, we need to create JSON files for the <code>apostrophe</code> namespace, which contains all of the phrases for the core UI of Apotrophe. To do that, add JSON files for the locales to a project-level <code>modules/@apostrophecms/i18n/i18n/apostrophe</code> directory. The name of the subdirectory determines the namespace. You can also do this in any other module as long as you use an <code>i18n/apostrophe</code> subdirectory within that module, keeping these localizations separate from your project-level strings.</p><p>Note that separately installed npm modules may use other namespaces, which you can see in their source code. You can create subdirectories for these as well, again keeping these localizations separate from your project-level strings.</p><p>In each JSON file, copy the contents of <a href="https://github.com/apostrophecms/apostrophe/blob/main/modules/@apostrophecms/i18n/i18n/en.json" target="_blank" rel="noreferrer">the Apostrophe core l10n file</a> to get all the keys. You can then start translating each string.</p><p>Of course, this can be a lot of work and would likely involve tracking down where strings are used for testing purposes. If you are interested in being part of translating the UI for a language that isn&#39;t supported yet, please contact us in <a href="http://chat.apostrophecms.com" target="_blank" rel="noreferrer">Discord</a> or at <a href="mailto:help@apostrophecms.com" target="_blank" rel="noreferrer">help@apostrophecms.com</a> so we can coordinate efforts and let the whole community benefit.</p><h3 id="localizing-your-own-custom-apostrophe-user-interface-modules" tabindex="-1">Localizing your own custom Apostrophe user interface modules <a class="header-anchor" href="#localizing-your-own-custom-apostrophe-user-interface-modules" aria-label="Permalink to &quot;Localizing your own custom Apostrophe user interface modules&quot;">​</a></h3><p>If you are <a href="./../custom-ui.html">writing your own extensions to the Apostrophe user interface</a>, you will want to localize strings there just as you would in any module, with the following additions:</p><ul><li>You should use a custom namespace for your strings, to avoid any confusion with our official <code>apostrophe</code> namespace.</li><li>You&#39;ll need to set <code>browser: true</code> for your namespace, as shown below. Doing this in any module will ensure strings for this namespace make it to the browser for the admin UI.</li><li>You&#39;ll need to register the text strings in your custom Vue admin UI components.</li></ul><p>Here is an example module <code>index.js</code> file that sets the <code>browser: true</code> flag for a namespace:</p>',15),z=e("div",{class:"language-javascript"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"javascript"),e("pre",{class:"shiki material-theme-palenight"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#89DDFF"}},"module.exports"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#89DDFF"}},"="),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#89DDFF"}},"  "),e("span",{style:{color:"#676E95","font-style":"italic"}},"// Note this is at top level, not under options")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"  "),e("span",{style:{color:"#F07178"}},"i18n"),e("span",{style:{color:"#89DDFF"}},":"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"    "),e("span",{style:{color:"#F07178"}},"ourTeamUI"),e("span",{style:{color:"#89DDFF"}},":"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"      "),e("span",{style:{color:"#F07178"}},"browser"),e("span",{style:{color:"#89DDFF"}},":"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#FF9CAC"}},"true")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"    "),e("span",{style:{color:"#89DDFF"}},"}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"  "),e("span",{style:{color:"#89DDFF"}},"}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#89DDFF"}},"};")])])])],-1),I=l('<p>Once that file is in place we can populate the <code>/modules/team-ui/i18n/ourTeamUI</code> folder with JSON files as described earlier.</p><p>To access our phrases in our custom admin UI Vue components, we invoke <code>this.$t()</code> when writing Vue methods, or just <code>$t()</code> when in the template block. In all other respects invoking <code>$t()</code> works the same way as <code>__t()</code>, discussed earlier.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>As a reminder, the Vue.js components of the user interface are not connected to any Vue app you may be running for your website visitors. The registration method will not be automatically available outside the UI components.</p></div><h2 id="debugging-localization" tabindex="-1">Debugging localization <a class="header-anchor" href="#debugging-localization" aria-label="Permalink to &quot;Debugging localization&quot;">​</a></h2><p>There are two environment variables developers can use to debug during localization.</p><h3 id="apos-debug-i18n" tabindex="-1"><code>APOS_DEBUG_I18N</code> <a class="header-anchor" href="#apos-debug-i18n" aria-label="Permalink to &quot;`APOS_DEBUG_I18N`&quot;">​</a></h3><p>Starting Apostrophe with the <code>APOS_DEBUG_I18N=1</code> environment variable will trigger the <code>i18next</code> debugging mode. This provides information about the i18n settings that may help resolve issues.</p><h3 id="apos-show-i18n" tabindex="-1"><code>APOS_SHOW_I18N</code> <a class="header-anchor" href="#apos-show-i18n" aria-label="Permalink to &quot;`APOS_SHOW_I18N`&quot;">​</a></h3><p>Using the <code>APOS_SHOW_I18N=1</code> environment variable adds emoji indicators to localized strings. For example, the localized string &quot;Images&quot; would be displayed as &quot;🌍 Images.&quot; These help identify that text in a web page (or logged errors) have been passed through localization. Different emojis indicate additional information.</p><table><thead><tr><th>Emoji indicator</th><th>Meaning</th></tr></thead><tbody><tr><td>🌍</td><td>The string used a localization key and is registered with a value.</td></tr><tr><td>🕳️</td><td>The displayed string is identical to the string passed into localization. It also <em>does not</em> seem to be using a l10n namespace.</td></tr><tr><td>❌</td><td>The displayed string is identical to the string passed into localization. It also <em>does</em> seem to be using a l10n namespace. Look for a module using the string&#39;s namespace (the part before <code>:</code>).</td></tr></tbody></table><p>For 🕳️ and ❌ indicators those are likely either localization keys that have not yet been registered with values (e.g., not translated) or they are not localization keys at all. Those do not necessarily indicate a problem, but simply are meant to give developers more information if a problem occurs.</p>',11);function j(x,S,N,q,P,E){const t=i("AposCodeBlock");return r(),c("div",null,[d,a(t,null,{caption:o(()=>[s(" /modules/article-page/views/show.html ")]),default:o(()=>[h,s()]),_:1}),y,a(t,null,{caption:o(()=>[s(" /modules/article-page/views/show.html ")]),default:o(()=>[u,s()]),_:1}),D,a(t,null,{caption:o(()=>[s(" /modules/product/index.js ")]),default:o(()=>[F,s()]),_:1}),g,a(t,null,{caption:o(()=>[s(" /modules/office-page/views/show.html ")]),default:o(()=>[m,s()]),_:1}),f,a(t,null,{caption:o(()=>[s(" /modules/office-page/i18n/en.json ")]),default:o(()=>[A,s()]),_:1}),a(t,null,{caption:o(()=>[s(" /modules/office-page/views/show.html ")]),default:o(()=>[C,s()]),_:1}),_,a(t,null,{caption:o(()=>[s(" /modules/localization/i18n/en.json ")]),default:o(()=>[w,s()]),_:1}),a(t,null,{caption:o(()=>[s(" /modules/localization/i18n/es.json ")]),default:o(()=>[b,s()]),_:1}),k,a(t,null,{caption:o(()=>[s(" /modules/localization/i18n/ourTeam/en.json ")]),default:o(()=>[v,s()]),_:1}),T,a(t,null,{caption:o(()=>[s(" /modules/team-ui/index.js ")]),default:o(()=>[z,s()]),_:1}),I])}const U=n(p,[["render",j]]);export{V as __pageData,U as default};
