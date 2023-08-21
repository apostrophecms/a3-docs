import{_ as e,o as t,c as a,$ as o}from"./chunks/framework.9fa1e75e.js";const y=JSON.parse('{"title":"oembed","description":"","frontmatter":{},"headers":[],"relativePath":"reference/field-types/oembed.md","filePath":"reference/field-types/oembed.md","lastUpdated":1690289066000}'),s={name:"reference/field-types/oembed.md"},l=o(`<h1 id="oembed" tabindex="-1"><code>oembed</code> <a class="header-anchor" href="#oembed" aria-label="Permalink to &quot;\`oembed\`&quot;">​</a></h1><p>A <code>oembed</code> field supports the user in embedding media hosted by any <a href="https://oembed.com/#section7" target="_blank" rel="noreferrer">oembed—compatible hosting site</a>, or any site for which you have provided an <a href="https://github.com/apostrophecms/oembetter" target="_blank" rel="noreferrer">oembetter</a> filter via the <code>@apostrophecms/oembed</code> module. </p><p>The field will immediately preview the media embed after entering a valid URL.</p><p>The database value of the field will have <code>url</code>, <code>title</code> and <code>thumbnail</code> properties. <code>title</code> and <code>thumbnail</code> are snapshots from the oembed response at the time the field was saved. <code>thumbnail</code> is the URL of a thumbnail image as provided by the oembed response. Developers should retrieve the full embed code in client-side code to get the latest version available.</p><h2 id="module-field-definition" tabindex="-1">Module field definition <a class="header-anchor" href="#module-field-definition" aria-label="Permalink to &quot;Module field definition&quot;">​</a></h2><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// Configuring the \`video\` field in a module&#39;s \`fields.add\` subsection:</span></span>
<span class="line"><span style="color:#FFCB6B;">video</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">type</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">oembed</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">label</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Featured video</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h2 id="settings" tabindex="-1">Settings <a class="header-anchor" href="#settings" aria-label="Permalink to &quot;Settings&quot;">​</a></h2><h3 id="required" tabindex="-1">Required <a class="header-anchor" href="#required" aria-label="Permalink to &quot;Required&quot;">​</a></h3><table><thead><tr><th>Property</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>label</code></td><td>String</td><td>n/a</td><td>Sets the visible label for the field in the UI</td></tr><tr><td><code>type</code></td><td>String</td><td>n/a</td><td>Specifies the field type (<code>float</code> for this type)</td></tr></tbody></table><h3 id="optional" tabindex="-1">Optional <a class="header-anchor" href="#optional" aria-label="Permalink to &quot;Optional&quot;">​</a></h3><table><thead><tr><th>Property</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>help</code></td><td>String</td><td>n/a</td><td>Help text for the content editor</td></tr><tr><td><code>htmlHelp</code></td><td>String</td><td>n/a</td><td>Help text with support for HTML markup</td></tr><tr><td><code>if</code></td><td>Object</td><td><code>{}</code></td><td>Conditions to meet before the field is active. <a href="/guide/conditional-fields.html">See the guide for details.</a></td></tr><tr><td><code>required</code></td><td>Boolean</td><td><code>false</code></td><td>If <code>true</code>, the field is mandatory</td></tr><tr><td><code>readOnly</code></td><td>Boolean</td><td><code>false</code></td><td>If <code>true</code>, prevents the user from editing the field value</td></tr></tbody></table><h2 id="use-in-templates" tabindex="-1">Use in templates <a class="header-anchor" href="#use-in-templates" aria-label="Permalink to &quot;Use in templates&quot;">​</a></h2><p>Simplest usage could involve simply printing the thumbnail image (if available) and linking to the media:</p><div class="language-njk"><button title="Copy Code" class="copy"></button><span class="lang">njk</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">{% if data.piece.video and data.piece.video.thumbnail %}</span></span>
<span class="line"><span style="color:#A6ACCD;">  {% set video = data.piece.video %}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">a</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">href</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">{{ video.url }}</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">img</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">{{ video.thumbnail }}</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">alt</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">{{ video.title }}</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">a</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">{% endif %}</span></span></code></pre></div><p>More likely, you will want to add the full embed code from the media source. This should be done in client-side JavaScript. Apostrophe provides an API route to get that.</p><p>Submit a <code>GET</code> request to <code>/api/v1/@apostrophecms/oembed/query</code> with the media URL as the <code>url</code> query parameter. A successful response will be an object with several properties to help place and style the embed, including an <code>html</code> property with the actual HTML markup to embed.</p><p>The <code>@apostrophecms/video-widget</code> widget provides a full-featured implementation. It includes <a href="https://github.com/apostrophecms/apostrophe/blob/de46fc3fd540e2e36faaedada13039cb767d9949/modules/%40apostrophecms/video-widget/ui/public/video.js#L1" target="_blank" rel="noreferrer">a widget player</a> that uses that API route to retrieve the full embed code and then replaces a placeholder HTML element with that code. See that widget for a suggested implementation.</p>`,17),n=[l];function d(p,r,i,c,h,m){return t(),a("div",null,n)}const f=e(s,[["render",d]]);export{y as __pageData,f as default};
