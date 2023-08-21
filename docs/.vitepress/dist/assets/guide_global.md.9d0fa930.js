import{_ as s,o as a,c as n,$ as l}from"./chunks/framework.9fa1e75e.js";const C=JSON.parse('{"title":"Global settings","description":"","frontmatter":{},"headers":[],"relativePath":"guide/global.md","filePath":"guide/global.md","lastUpdated":1690289066000}'),o={name:"guide/global.md"},e=l(`<h1 id="global-settings" tabindex="-1">Global settings <a class="header-anchor" href="#global-settings" aria-label="Permalink to &quot;Global settings&quot;">​</a></h1><p>Editable content or settings used across your app can be managed through the <strong>global doc</strong>. You can use this for many things, including configuring:</p><ul><li>company information or navigation in the website footer</li><li>a special ID for a third-party service, such as Google Analytics</li><li>social media account URLs</li></ul><p>The global doc is a special <a href="/guide/pieces.html">piece</a>: it is created automatically and there can only be one. It is configured through the <code>@apostrophecms/global</code> piece type module.</p><p>To demonstrate, we may want to display an organizational Github URL in the website footer and a &quot;Contact&quot; page. We can add that to the global doc as we would on any other piece type.</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// modules/@apostrophecms/global/index.js</span></span>
<span class="line"><span style="color:#89DDFF;">module.exports</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">fields</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">add</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">githubUrl</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">url</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">label</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Github organization url</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">group</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">basics</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">label</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Basics</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">fields</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">githubUrl</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>Once the global doc is configured with fields, it will be added to the admin bar for editing.</p><p><strong>Templates always have direct access to the global doc as <code>data.global</code>.</strong> The Github URL field could be used in a template as a property of that doc:</p><div class="language-njk"><button title="Copy Code" class="copy"></button><span class="lang">njk</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">{% extends data.outerLayout %}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">{% block afterMain %}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">footer</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    {% if data.global.githubUrl %}</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">a</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">href</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">{{ data.global.githubUrl }}</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Our Github organization</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">a</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    {% endif %}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">footer</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">{% endblock %}</span></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Since the global doc is available in every template it can be tempting to add all kinds of data to it. This can eventually lead to performance problems since <strong>the whole global doc is fetched for templates on every page request</strong>. If it contains a lot of <a href="/guide/areas-and-widgets.html">content areas</a> and has <a href="/guide/relationships.html">relationships</a> with other docs, that one request can get very large.</p><p>A basic guideline is that things should only be added to the global doc if they are used in <em>at least</em> 50% of pages.</p></div>`,10),p=[e];function t(c,r,i,D,y,d){return a(),n("div",null,p)}const g=s(o,[["render",t]]);export{C as __pageData,g as default};
