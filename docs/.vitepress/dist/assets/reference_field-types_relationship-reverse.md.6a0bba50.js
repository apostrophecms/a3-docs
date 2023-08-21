import{_ as e,o as t,c as a,$ as o}from"./chunks/framework.9fa1e75e.js";const m=JSON.parse('{"title":"relationshipReverse","description":"","frontmatter":{},"headers":[],"relativePath":"reference/field-types/relationship-reverse.md","filePath":"reference/field-types/relationship-reverse.md","lastUpdated":1690289066000}'),s={name:"reference/field-types/relationship-reverse.md"},n=o('<h1 id="relationshipreverse" tabindex="-1"><code>relationshipReverse</code> <a class="header-anchor" href="#relationshipreverse" aria-label="Permalink to &quot;`relationshipReverse`&quot;">​</a></h1><p>Adding a <code>relationshipReverse</code> field to a doc type schema reveals Apostrophe docs that have established relationships with a given doc. It is a developer convenience, showing the receiving side of a <a href="/reference/field-types/relationship.html"><code>relationship</code> field</a>. There is no editing interface for this field type as the relationship is defined in the paired <code>relationship</code> field.</p><p>Take the example of a website that has a <code>pizza</code> piece type with a <code>relationship</code> field connecting to its <code>topping</code> piece type. Each pizza piece chooses the registered toppings that it has (the relationship is <em>pizza-to-topping</em>). The website might also want to list all available toppings on a page and show all pizzas that use each topping (the <em>topping-to-pizza</em> direction). A <code>relationshipReverse</code> field could make it easy to find and display that information.</p><h2 id="module-field-definition" tabindex="-1">Module field definition <a class="header-anchor" href="#module-field-definition" aria-label="Permalink to &quot;Module field definition&quot;">​</a></h2><p>The field name must begin with an underscore (<code>_</code>). This indicates that the ultimate value is not stored in the database, but is populated when needed.</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// Configuring the `_pizzas` field in a module&#39;s `fields.add` subsection:</span></span>\n<span class="line"><span style="color:#FFCB6B;">_pizzas</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">type</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">relationshipReverse</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">withType</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">pizza</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">reverseOf</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">_toppings</span><span style="color:#89DDFF;">&#39;</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h2 id="settings" tabindex="-1">Settings <a class="header-anchor" href="#settings" aria-label="Permalink to &quot;Settings&quot;">​</a></h2><h3 id="required" tabindex="-1">Required <a class="header-anchor" href="#required" aria-label="Permalink to &quot;Required&quot;">​</a></h3><table><thead><tr><th>Property</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>type</code></td><td>String</td><td>n/a</td><td>Specifies the field type (<code>relationshipReverse</code> for this type)</td></tr></tbody></table><h3 id="optional" tabindex="-1">Optional <a class="header-anchor" href="#optional" aria-label="Permalink to &quot;Optional&quot;">​</a></h3><table><thead><tr><th>Property</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>reverseOf</code></td><td>String</td><td>n/a</td><td>Set to the name of the related <code>relationship</code> field.</td></tr><tr><td><code>ifOnlyOne</code></td><td>Boolean</td><td><code>false</code></td><td>If <code>true</code>, it will only reveal the relationship data if the doc query returned only one document. <a href="#ifonlyone">See below</a> for more.</td></tr><tr><td><code>withType</code></td><td>String</td><td>Uses the field name, minus its leading <code>_</code> and possible trailing <code>s</code></td><td>The name of the related type.</td></tr><tr><td><code>readOnly</code></td><td>Boolean</td><td><code>false</code></td><td>If <code>true</code>, prevents the user from editing the field value</td></tr></tbody></table><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>For relationships with pages, use <code>withType: &#39;@apostrophecms/any-page-type&#39;</code>.</p><p>If <code>withType</code> is not set the name of the field must match the name of the related type, with a leading <code>_</code> (underscore), and <em>optional</em> trailing <code>s</code> added (e.g., <code>_article</code> or <code>_articles</code> to connect to the <code>article</code> piece type).</p></div><h2 id="ifonlyone" tabindex="-1"><code>ifOnlyOne</code> <a class="header-anchor" href="#ifonlyone" aria-label="Permalink to &quot;`ifOnlyOne`&quot;">​</a></h2><p>The <code>ifOnlyOne</code> option can provide a performance improvement if the reverse relationship data is only needed when one piece is queried. For example, in the example above, the pizza relationship data may be only needed on a topping <a href="/reference/glossary.html#show-page">show page</a>, where only one topping is displayed; not on the <a href="/reference/glossary.html#index-page">index page</a>, where many toppings are listed.</p><p>Setting <code>ifOnlyOne: true</code> tells Apostrophe not to look for the extra relationship data in those contexts, such as index pages, where many pieces are queried.</p>',15),i=[n];function d(l,r,p,c,h,f){return t(),a("div",null,i)}const u=e(s,[["render",d]]);export{m as __pageData,u as default};
