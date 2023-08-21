import{_ as e,o as t,c as a,$ as d}from"./chunks/framework.9fa1e75e.js";const m=JSON.parse('{"title":"time","description":"","frontmatter":{},"headers":[],"relativePath":"reference/field-types/time.md","filePath":"reference/field-types/time.md","lastUpdated":1690289066000}'),o={name:"reference/field-types/time.md"},s=d('<h1 id="time" tabindex="-1"><code>time</code> <a class="header-anchor" href="#time" aria-label="Permalink to &quot;`time`&quot;">​</a></h1><p><code>time</code> fields are text field with UI support, and limitation, for saving time values. Times are stored in 24 hour <code>HH:MM:SS</code> format.</p><h2 id="module-field-definition" tabindex="-1">Module field definition <a class="header-anchor" href="#module-field-definition" aria-label="Permalink to &quot;Module field definition&quot;">​</a></h2><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// Configuring the `eventTime` field in a module&#39;s `fields.add` subsection:</span></span>\n<span class="line"><span style="color:#FFCB6B;">eventTime</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">label</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">What time is the event?</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">type</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">time</span><span style="color:#89DDFF;">&#39;</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h2 id="settings" tabindex="-1">Settings <a class="header-anchor" href="#settings" aria-label="Permalink to &quot;Settings&quot;">​</a></h2><h3 id="required" tabindex="-1">Required <a class="header-anchor" href="#required" aria-label="Permalink to &quot;Required&quot;">​</a></h3><table><thead><tr><th>Property</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>label</code></td><td>String</td><td>n/a</td><td>Sets the visible label for the field in the UI</td></tr><tr><td><code>type</code></td><td>String</td><td>n/a</td><td>Specifies the field type (<code>string</code> for this type)</td></tr></tbody></table><h3 id="optional" tabindex="-1">Optional <a class="header-anchor" href="#optional" aria-label="Permalink to &quot;Optional&quot;">​</a></h3><table><thead><tr><th>Property</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>def</code></td><td>String</td><td>n/a</td><td>The default value for the field. Must be in <code>HH:MM:SS</code> format.</td></tr><tr><td><code>help</code></td><td>String</td><td>n/a</td><td>Help text for the content editor</td></tr><tr><td><code>htmlHelp</code></td><td>String</td><td>n/a</td><td>Help text with support for HTML markup</td></tr><tr><td><code>if</code></td><td>Object</td><td><code>{}</code></td><td>Conditions to meet before the field is active. <a href="/guide/conditional-fields.html">See the guide for details.</a></td></tr><tr><td><code>required</code></td><td>Boolean</td><td><code>false</code></td><td>If <code>true</code>, the field is mandatory</td></tr><tr><td><code>readOnly</code></td><td>Boolean</td><td><code>false</code></td><td>If <code>true</code>, prevents the user from editing the field value</td></tr></tbody></table><div class="warning custom-block"><p class="custom-block-title">NOTE</p><p>If you do not set <code>def: null</code> or <code>required: true</code>, the time defaults to the current time.</p></div><h2 id="use-in-templates" tabindex="-1">Use in templates <a class="header-anchor" href="#use-in-templates" aria-label="Permalink to &quot;Use in templates&quot;">​</a></h2><p>Times are stored, and will print, in the <code>HH:MM:SS</code> format.</p><div class="language-njk"><button title="Copy Code" class="copy"></button><span class="lang">njk</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">{{ data.piece.eventTime }}</span></span></code></pre></div>',13),n=[s];function l(i,r,c,p,h,f){return t(),a("div",null,n)}const y=e(o,[["render",l]]);export{m as __pageData,y as default};
