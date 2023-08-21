import{_ as e,o as t,c as o,$ as a}from"./chunks/framework.9fa1e75e.js";const f=JSON.parse('{"title":"@apostrophecms/module","description":"","frontmatter":{},"headers":[],"relativePath":"reference/modules/module.md","filePath":"reference/modules/module.md","lastUpdated":1690289066000}'),d={name:"reference/modules/module.md"},r=a('<h1 id="apostrophecms-module" tabindex="-1"><code>@apostrophecms/module</code> <a class="header-anchor" href="#apostrophecms-module" aria-label="Permalink to &quot;`@apostrophecms/module`&quot;">​</a></h1><p>This module is the foundation of all other Apostrophe modules. It is not <em>directly</em> used for any functionality, but <a href="/guide/modules.html#module-inheritance">every other module inherits its behavior and functionality</a>. Every other module has access to use the features documented here. Critically, this module includes initialization behavior that all modules need to start up correctly and register features.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p><strong>This module should almost never be configured directly in project code.</strong> In other words, there should almost never be a <code>modules/@apostrophecms/module/index.js</code> file in a project codebase. The only reason to do so would be to add a feature that every other module will need. There should <em>never</em> be a <code>@apostrophecms/module: {}</code> line in an <code>app.js</code> file.</p><p><strong>Instead, configure the options below on other modules as needed</strong> (e.g., configure the <code>alias</code> option on a module to create an easy reference to <em>that</em> module). Similarly, run the methods below as needed from the most appropriate module (e.g., use <code>self.email</code> from a contact page-type module).</p></div><h2 id="options" tabindex="-1">Options <a class="header-anchor" href="#options" aria-label="Permalink to &quot;Options&quot;">​</a></h2><table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>alias</code></td><td>String</td><td>A name to use for quick access to the module on the <code>apos</code> object (e.g., <code>&#39;book&#39;</code> to access a module on <code>self.apos.book</code>). Otherwise the longer syntax is necessary (e.g., <code>self.apos.modules.book</code>).</td></tr><tr><td><code>templateData</code></td><td>Object</td><td>An object of properties to include on the <code>data</code> object in templates belonging to that module.</td></tr></tbody></table><h2 id="featured-methods" tabindex="-1">Featured methods <a class="header-anchor" href="#featured-methods" aria-label="Permalink to &quot;Featured methods&quot;">​</a></h2><p>The following methods belong to this module and may be useful in project-level code. As noted above, <em>they should be used via another module.</em> They cannot be directly called from this module as it is not instantiated.</p><p>See the <a href="https://github.com/apostrophecms/apostrophe/blob/main/modules/%40apostrophecms/module/index.js" target="_blank" rel="noreferrer">source code</a> for all methods that belong to this module.</p><h3 id="async-render-req-template-data" tabindex="-1"><code>async render(req, template, data)</code> <a class="header-anchor" href="#async-render-req-template-data" aria-label="Permalink to &quot;`async render(req, template, data)`&quot;">​</a></h3><p>Returns rendered HTML for a template with the data provided. You must pass <code>req</code>, a request object, as the first argument. The <code>template</code> argument should be the name of a template file in the module&#39;s <code>views</code> directory. If the <code>template</code> argument has no file extension Apostrophe will look for an <code>.html</code> or <code>.njk</code> file.</p><p>All properties of <code>data</code> can be used in Nunjucks templates as properties of the <code>data</code> object. This argument may be omitted to include no additional data.</p><h3 id="async-renderstring-req-string-data" tabindex="-1"><code>async renderString(req, string, data)</code> <a class="header-anchor" href="#async-renderstring-req-string-data" aria-label="Permalink to &quot;`async renderString(req, string, data)`&quot;">​</a></h3><p>Returns rendered HTML for a Nunjucks-style string with the data provided. You must pass <code>req</code>, a request object, as the first argument. The <code>string</code> argument will be used as the template itself for rendering (not the template filename).</p><p>All properties of <code>data</code> can be used in Nunjucks templates as properties of the <code>data</code> object. This argument may be omitted to include no additional data.</p><h3 id="async-send-req-template-data" tabindex="-1"><code>async send(req, template, data)</code> <a class="header-anchor" href="#async-send-req-template-data" aria-label="Permalink to &quot;`async send(req, template, data)`&quot;">​</a></h3><p>The <code>send()</code> method renders a template with data as with the <a href="#async-render-req-template-data"><code>render()</code></a>, then sends the rendered HTML as a response to the request (<code>req</code>).</p><h3 id="async-sendpage-req-template-data" tabindex="-1"><code>async sendPage(req, template, data)</code> <a class="header-anchor" href="#async-sendpage-req-template-data" aria-label="Permalink to &quot;`async sendPage(req, template, data)`&quot;">​</a></h3><p>Similar to the <a href="#async-send-req-template-data"><code>send()</code></a> method, this renders a template and sends the rendered HTML as a response to the request (<code>req</code>). Where <code>send()</code> is used to render general template files, <code>sendPage()</code> is specifically used to render and send <em>full pages</em> for Apostrophe projects. Page templates should extend the outer layout template – either directly (<code>{% extends data.outerLayout %}</code>) or by extending a template that does so.</p><p>Templates rendered and sent with this method have full access to all template <a href="/guide/template-data.html">data properties</a> appropriate for the related module. The template is also wrapped with the proper layout file (<code>&#39;@apostrophecms/template:outerLayout.html&#39;</code> by default), including the full <code>head</code> tag.</p><p>This method triggers the <code>@apostrophecms/page</code> module to emit a <a href="/reference/server-events.html#beforesend"><code>beforeSend</code> event</a>.</p><h3 id="enablebrowserdata-scene" tabindex="-1"><code>enableBrowserData(scene)</code> <a class="header-anchor" href="#enablebrowserdata-scene" aria-label="Permalink to &quot;`enableBrowserData(scene)`&quot;">​</a></h3><p>Call this method from a module&#39;s <a href="/reference/module-api/module-overview.html##initialization-function">initialization function</a> if the module implements the <a href="#getbrowserdata-req"><code>getBrowserData()</code> method</a>. <strong>This is only necessary for modules that do not already do this</strong> (all doc type and widget type modules already do this). The data returned by <code>getBrowserData(req)</code> will then be available on <code>apos.modules[&#39;the-module-name&#39;]</code> in the browser.</p><p>The <code>scene</code> argument is only needed if making the data available while logged-out. By default browser data is pushed only for the <code>apos</code> scene (the logged-in context), so the anonymous site visitor experience will include the extra data (except on the /login page and other pages that opt into the <code>apos</code> scene). If <code>scene</code> is set to <code>public</code> then the data is available to all visitors.</p><h3 id="getbrowserdata-req" tabindex="-1"><code>getBrowserData(req)</code> <a class="header-anchor" href="#getbrowserdata-req" aria-label="Permalink to &quot;`getBrowserData(req)`&quot;">​</a></h3><p>The <code>getBrowserData()</code> method can be extended to adjust or add data that the module makes available in the browser. It should return an object to make the data available in browsers (as controlled by <a href="#enablebrowserdata-scene">the <code>enableBrowserData()</code> method</a>).</p><p>The data will be available on a property of the <code>apos.modules</code> object matching the module name. For example, <code>@apostrophecms/i18n</code> module data is available on <code>apos.modules[&#39;@apostrophecms/i18n&#39;]</code>. If the module has an alias the data will also be accessible via <code>apos.yourAlias</code>.</p><p>Many Apostrophe core modules already populate browser data, including piece type, page type, and widget type modules. For this reason, <strong>it is ususally correct to <em>extend</em> this method to add additional browser data</strong> using the module&#39;s <a href="/reference/module-api/module-overview.html#extendmethods-self"><code>extendMethods</code> customization function</a>.</p><p>Avoid returning large data structures, as this will impact page load time and performance.</p><h3 id="getoption-req-dotpathorarray-def" tabindex="-1"><code>getOption(req, dotPathOrArray, def)</code> <a class="header-anchor" href="#getoption-req-dotpathorarray-def" aria-label="Permalink to &quot;`getOption(req, dotPathOrArray, def)`&quot;">​</a></h3><p>This is a convenience method to fetch properties of <code>self.options</code> in a module. It will look for, then return the option identified by the second argument.</p><p><code>req</code> is required to provide extensibility. Modules can use it to change the response based on the current page and other factors tied to the request. The second argument, <code>dotPathOrArray</code>, may be a dot path (<code>&#39;flavors.grape.sweetness&#39;</code>) or an array <code>[ &#39;flavors&#39;, &#39;grape&#39;, &#39;sweetness&#39; ]</code>.</p><p>The optional <code>def</code> argument is returned if the property, or any of its ancestors, does not exist. If no third argument is given in this situation, <code>undefined</code> is returned.</p><h4 id="using-getoption-in-templates" tabindex="-1">Using <code>getOption()</code> in templates <a class="header-anchor" href="#using-getoption-in-templates" aria-label="Permalink to &quot;Using `getOption()` in templates&quot;">​</a></h4><p><code>getOption()</code> is also made available in templates as a global function (directly as <code>getOption()</code>), not as a property of a module or the <code>apos</code> object. <em>In templates, skip the <code>req</code> argument.</em></p><p>Normally in templates this returns options located in the module that called <code>render()</code> (often the module the template file belongs to). If you prefix the option path with a cross-module key, such as <code>module-name:optionName</code>, it will return the option located in the specified module.</p><h3 id="email-req-templatename-data-options" tabindex="-1"><code>email(req, templateName, data, options)</code> <a class="header-anchor" href="#email-req-templatename-data-options" aria-label="Permalink to &quot;`email(req, templateName, data, options)`&quot;">​</a></h3><p>Use the <code>email()</code> method to send email messages from a module. It renders an HTML email message using the template specified by <code>templateName</code>, which receives the third argument as its <code>data</code> object.</p><p><strong>Either the <code>nodemailer</code> option must be configured on the <code>@apostrophecms/email</code> module or another Nodemailer transport must be defined on that module as <code>self.transport</code> before this method can be used.</strong> Examples of other email transports include ones built for particular services that wrap Nodemailer themselves (e.g., <code>nodemailer-mailjet-transport</code>, <code>nodemailer-mailgun-transport</code>).</p><p>A plain text version is automatically generated for email clients that require or prefer it, including plain text versions of links. You do not need a separate plain text template.</p><p>The <code>options</code> object is passed on to the email transport except that <code>options.html</code> and <code>options.plaintext</code> are automatically provided via the template.</p><p>In particular, the <code>options</code> object should contain:</p><ul><li><code>from</code>: The email address the message should come from.</li><li><code>to</code>: One or more email recipient addresses (comma-separated in a string for multiple).</li><li><code>subject</code>: The subject line</li></ul><p>You can also configure a default <code>from</code> address, either globally by setting the <code>from</code> option of the <code>@apostrophecms/email</code> module, or locally for a particular module by adding an <code>email</code> option with a <code>from</code> property. If you need to localize <code>options.subject</code>, you can call <code>req.t(subject)</code>.</p><p>This method returns <code>info</code> as per the Nodemailer documentation. With most transports, a successful return indicates the message was handed off but has not necessarily arrived yet and could still bounce back at some point.</p><h3 id="emit-name-args" tabindex="-1"><code>emit(name, ...args)</code> <a class="header-anchor" href="#emit-name-args" aria-label="Permalink to &quot;`emit(name, ...args)`&quot;">​</a></h3><p>The <code>emit()</code> method is used to emit server-side events. Events are automatically associated with the module that emitted them. The first argument is the name of the event. Additional arguments are passed, in order, to the event handlers listening to the event.</p><p>See the <a href="/guide/server-events.html">server events guide</a> for more on this subject.</p>',47),s=[r];function n(i,l,c,h,m,p){return t(),o("div",null,s)}const g=e(d,[["render",n]]);export{f as __pageData,g as default};
