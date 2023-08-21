import{_ as i,K as o,o as h,c as l,O as d,w as a,k as e,a as t,$ as r}from"./chunks/framework.9fa1e75e.js";const S=JSON.parse('{"title":"@apostrophecms/http","description":"","frontmatter":{"extends":"@apostrophecms/module"},"headers":[],"relativePath":"reference/modules/http.md","filePath":"reference/modules/http.md","lastUpdated":1690289066000}'),p={name:"reference/modules/http.md"},u=e("h1",{id:"apostrophecms-http",tabindex:"-1"},[e("code",null,"@apostrophecms/http"),t(),e("a",{class:"header-anchor",href:"#apostrophecms-http","aria-label":'Permalink to "`@apostrophecms/http`"'},"​")],-1),b=e("p",null,[e("strong",null,"Alias:"),t(),e("code",null,"apos.http")],-1),f=r('<p>This module adds methods for easy HTTP requests in Apostrophe project and module server-side code. These methods are compatible with the respective <a href="/guide/front-end-helpers.html#http-request-methods">client-side HTTP methods</a>. It also defines error codes for use with the main <code>apos.error()</code> method.</p><h2 id="options" tabindex="-1">Options <a class="header-anchor" href="#options" aria-label="Permalink to &quot;Options&quot;">​</a></h2><table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>addErrors</code></td><td>Object</td><td>An object of error names and their associated HTTP response codes.</td></tr></tbody></table><h3 id="adderrors" tabindex="-1"><code>addErrors</code> <a class="header-anchor" href="#adderrors" aria-label="Permalink to &quot;`addErrors`&quot;">​</a></h3><p>This module&#39;s named errors are used in the <code>apos.error()</code> method. The default error names and their codes in Apostrophe are:</p><ul><li><code>min</code>: 400</li><li><code>max</code>: 400</li><li><code>invalid</code>: 400</li><li><code>forbidden</code>: 403</li><li><code>notfound</code>: 404</li><li><code>required</code>: 422</li><li><code>conflict</code>: 409</li><li><code>locked</code>: 409</li><li><code>unprocessable</code>: 422</li><li><code>unimplemented</code>: 501</li></ul><p>Unnamed errors are returned with the 500 error code, so it does not need to be registered. Additional error codes can be added with the <code>addErrors</code> option.</p>',7),m=r('<h2 id="related-documentation" tabindex="-1">Related documentation <a class="header-anchor" href="#related-documentation" aria-label="Permalink to &quot;Related documentation&quot;">​</a></h2><ul><li><a href="/guide/front-end-helpers.html#http-request-methods">Front end HTTP helper methods</a></li></ul><h2 id="featured-methods" tabindex="-1">Featured methods <a class="header-anchor" href="#featured-methods" aria-label="Permalink to &quot;Featured methods&quot;">​</a></h2><p>The following methods belong to this module and may be useful in project-level code. See the <a href="https://github.com/apostrophecms/apostrophe/blob/main/modules/%40apostrophecms/http/index.js" target="_blank" rel="noreferrer">source code</a> for all methods that belong to this module.</p><p>Because this module has an alias, you can call these from another module from the alias path. For example, <code>self.apos.http.addError()</code>.</p><h3 id="adderror-name-code" tabindex="-1"><code>addError(name, code)</code> <a class="header-anchor" href="#adderror-name-code" aria-label="Permalink to &quot;`addError(name, code)`&quot;">​</a></h3><p>An alternate way to register error names to HTTP error codes. Pass the semantic name as the first argument, followed by the <code>code</code> integer. The error code number becomes the HTTP status code when the error name is used in the <code>self.apos.error()</code> method.</p><h3 id="async-get-url-options" tabindex="-1"><code>async get(url, options)</code> <a class="header-anchor" href="#async-get-url-options" aria-label="Permalink to &quot;`async get(url, options)`&quot;">​</a></h3><p>Fetch the given URL (<code>url</code>) via a <code>GET</code> request and return the response body. If the URL is relative (starts with <code>/</code>) it will be requested from the Apostrophe site itself. This is helpful to avoid needing to construct the base URL across environments.</p><p>Accepts the following properties on the optional <code>options</code> object:</p><table><thead><tr><th>Option</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>qs</code></td><td>Object</td><td>An object of query parameters and values. It may contain nested objects, arrays, and properties with null values.</td></tr><tr><td><code>jar</code></td><td>Object</td><td>Pass in a cookie jar obtained from <code>apos.http.jar()</code>.</td></tr><tr><td><code>parse</code></td><td>String</td><td>Set to <code>json</code> to always parse the response body as JSON, otherwise the response body is parsed as JSON only if the <code>content-type</code> is <code>application/json</code>.</td></tr><tr><td><code>headers</code></td><td>Object</td><td>An object containing header names and values.</td></tr><tr><td><code>fullResponse</code></td><td>Boolean</td><td>If <code>true</code>, return an object with <code>status</code>, <code>headers</code> and <code>body</code> properties, rather than returning the body directly. The individual <code>headers</code> are canonicalized to lowercase names. If a header appears multiple times an array is returned for it.</td></tr></tbody></table><p>If the status code is &gt;= 400 an error is thrown. The error object will be similar to a <code>fullResponse</code> object, with a <code>status</code> property.</p><h3 id="async-head-url-options" tabindex="-1"><code>async head(url, options)</code> <a class="header-anchor" href="#async-head-url-options" aria-label="Permalink to &quot;`async head(url, options)`&quot;">​</a></h3><p>Make a <code>HEAD</code> request for the given URL and return the response object, which will include a <code>status</code> property as well as <code>headers</code>. If the URL is relative (starts with <code>/</code>) it will be requested from the Apostrophe site itself. This is helpful to avoid needing to construct the base URL across environments.</p><p>Accepts the following properties on the optional <code>options</code> object:</p><table><thead><tr><th>Option</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>qs</code></td><td>Object</td><td>An object of query parameters and values. It may contain nested objects, arrays, and properties with null values.</td></tr><tr><td><code>jar</code></td><td>Object</td><td>Pass in a cookie jar obtained from <code>apos.http.jar()</code>.</td></tr><tr><td><code>headers</code></td><td>Object</td><td>An object containing header names and values.</td></tr></tbody></table><p>If the status code is &gt;= 400 an error is thrown. The error object will be similar to a <code>fullResponse</code> object, with a <code>status</code> property.</p><h3 id="async-post-url-options" tabindex="-1"><code>async post(url, options)</code> <a class="header-anchor" href="#async-post-url-options" aria-label="Permalink to &quot;`async post(url, options)`&quot;">​</a></h3><p>Send a <code>POST</code> request to the given URL and return the response body. If the URL is relative (starts with <code>/</code>) it will be requested from the Apostrophe site itself. This is helpful to avoid needing to construct the base URL across environments.</p><p>Accepts the following properties on the optional <code>options</code> object:</p><table><thead><tr><th>Option</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>qs</code></td><td>Object</td><td>An object of query parameters and values. It may contain nested objects, arrays, and properties with null values.</td></tr><tr><td><code>jar</code></td><td>Object</td><td>Pass in a cookie jar obtained from <code>apos.http.jar()</code>.</td></tr><tr><td><code>send</code></td><td>String</td><td>Can be &#39;json&#39; to always send <code>options.body</code> JSON-encoded, or <code>form</code> to send it URL-encoded.</td></tr><tr><td><code>body</code></td><td>Variable</td><td>The request body. If an object or array, it is sent as JSON. If a <a href="https://www.npmjs.com/package/form-data" target="_blank" rel="noreferrer"><code>FormData</code> object</a>, it is sent as a <code>multipart/form-data</code> upload. Otherwise it is sent as-is, unless the <code>send</code> option is set.</td></tr><tr><td><code>parse</code></td><td>String</td><td>Set to <code>json</code> to always parse the response body as JSON, otherwise the response body is parsed as JSON only if the <code>content-type</code> is <code>application/json</code>.</td></tr><tr><td><code>headers</code></td><td>Object</td><td>An object containing header names and values.</td></tr><tr><td><code>csrf</code></td><td>Boolean/String</td><td>If set to <code>true</code>, which is the default, and the <code>jar</code> contains the CSRF cookie for this Apostrophe site due to a previous <code>GET</code> request, send it as the X-XSRF-TOKEN header. If a string, send the current value of the cookie of that name in the <code>jar</code> as the X-XSRF-TOKEN header. If <code>false</code>, disable this feature.</td></tr><tr><td><code>fullResponse</code></td><td>Boolean</td><td>If <code>true</code>, return an object with <code>status</code>, <code>headers</code> and <code>body</code> properties, rather than returning the body directly. The individual <code>headers</code> are canonicalized to lowercase names. If a header appears multiple times an array is returned for it.</td></tr></tbody></table><p>If the status code is &gt;= 400 an error is thrown. The error object will be similar to a <code>fullResponse</code> object, with a <code>status</code> property.</p><h3 id="async-delete-url-options" tabindex="-1"><code>async delete(url, options)</code> <a class="header-anchor" href="#async-delete-url-options" aria-label="Permalink to &quot;`async delete(url, options)`&quot;">​</a></h3><p>Send a <code>DELETE</code> request to the given URL and return the response body. If the URL is relative (starts with <code>/</code>) it will be requested from the Apostrophe site itself. This is helpful to avoid needing to construct the base URL across environments.</p><p>Accepts the following properties on the optional <code>options</code> object:</p><table><thead><tr><th>Option</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>qs</code></td><td>Object</td><td>An object of query parameters and values. It may contain nested objects, arrays, and properties with null values.</td></tr><tr><td><code>jar</code></td><td>Object</td><td>Pass in a cookie jar obtained from <code>apos.http.jar()</code>.</td></tr><tr><td><code>send</code></td><td>String</td><td>Can be &#39;json&#39; to always send <code>options.body</code> JSON-encoded, or <code>form</code> to send it URL-encoded.</td></tr><tr><td><code>body</code></td><td>Variable</td><td>The request body. If an object or array, it is sent as JSON. If a <a href="https://www.npmjs.com/package/form-data" target="_blank" rel="noreferrer"><code>FormData</code> object</a>, it is sent as a <code>multipart/form-data</code> upload. Otherwise it is sent as-is, unless the <code>send</code> option is set.</td></tr><tr><td><code>parse</code></td><td>String</td><td>Set to <code>json</code> to always parse the response body as JSON, otherwise the response body is parsed as JSON only if the <code>content-type</code> is <code>application/json</code>.</td></tr><tr><td><code>headers</code></td><td>Object</td><td>An object containing header names and values.</td></tr><tr><td><code>csrf</code></td><td>Boolean/String</td><td>If set to <code>true</code>, which is the default, and the <code>jar</code> contains the CSRF cookie for this Apostrophe site due to a previous <code>GET</code> request, send it as the X-XSRF-TOKEN header. If a string, send the current value of the cookie of that name in the <code>jar</code> as the X-XSRF-TOKEN header. If <code>false</code>, disable this feature.</td></tr><tr><td><code>fullResponse</code></td><td>Boolean</td><td>If <code>true</code>, return an object with <code>status</code>, <code>headers</code> and <code>body</code> properties, rather than returning the body directly. The individual <code>headers</code> are canonicalized to lowercase names. If a header appears multiple times an array is returned for it.</td></tr></tbody></table><p>If the status code is &gt;= 400 an error is thrown. The error object will be similar to a <code>fullResponse</code> object, with a <code>status</code> property.</p><h3 id="async-put-url-options" tabindex="-1"><code>async put(url, options)</code> <a class="header-anchor" href="#async-put-url-options" aria-label="Permalink to &quot;`async put(url, options)`&quot;">​</a></h3><p>Send a <code>PUT</code> request to the given URL and return the response body. If the URL is relative (starts with <code>/</code>) it will be requested from the Apostrophe site itself. This is helpful to avoid needing to construct the base URL across environments.</p><p>Accepts the following properties on the optional <code>options</code> object:</p><table><thead><tr><th>Option</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>qs</code></td><td>Object</td><td>An object of query parameters and values. It may contain nested objects, arrays, and properties with null values.</td></tr><tr><td><code>jar</code></td><td>Object</td><td>Pass in a cookie jar obtained from <code>apos.http.jar()</code>.</td></tr><tr><td><code>send</code></td><td>String</td><td>Can be &#39;json&#39; to always send <code>options.body</code> JSON-encoded, or <code>form</code> to send it URL-encoded.</td></tr><tr><td><code>body</code></td><td>Variable</td><td>The request body. If an object or array, it is sent as JSON. If a <a href="https://www.npmjs.com/package/form-data" target="_blank" rel="noreferrer"><code>FormData</code> object</a>, it is sent as a <code>multipart/form-data</code> upload. Otherwise it is sent as-is, unless the <code>send</code> option is set.</td></tr><tr><td><code>parse</code></td><td>String</td><td>Set to <code>json</code> to always parse the response body as JSON, otherwise the response body is parsed as JSON only if the <code>content-type</code> is <code>application/json</code>.</td></tr><tr><td><code>headers</code></td><td>Object</td><td>An object containing header names and values.</td></tr><tr><td><code>csrf</code></td><td>Boolean/String</td><td>If set to <code>true</code>, which is the default, and the <code>jar</code> contains the CSRF cookie for this Apostrophe site due to a previous <code>GET</code> request, send it as the X-XSRF-TOKEN header. If a string, send the current value of the cookie of that name in the <code>jar</code> as the X-XSRF-TOKEN header. If <code>false</code>, disable this feature.</td></tr><tr><td><code>fullResponse</code></td><td>Boolean</td><td>If <code>true</code>, return an object with <code>status</code>, <code>headers</code> and <code>body</code> properties, rather than returning the body directly. The individual <code>headers</code> are canonicalized to lowercase names. If a header appears multiple times an array is returned for it.</td></tr></tbody></table><p>If the status code is &gt;= 400 an error is thrown. The error object will be similar to a <code>fullResponse</code> object, with a <code>status</code> property.</p><h3 id="async-patch-url-options" tabindex="-1"><code>async patch(url, options)</code> <a class="header-anchor" href="#async-patch-url-options" aria-label="Permalink to &quot;`async patch(url, options)`&quot;">​</a></h3><p>Send a <code>PATCH</code> request to the given URL and return the response body. If the URL is relative (starts with <code>/</code>) it will be requested from the Apostrophe site itself. This is helpful to avoid needing to construct the base URL across environments.</p><p>Accepts the following properties on the optional <code>options</code> object:</p><table><thead><tr><th>Option</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>qs</code></td><td>Object</td><td>An object of query parameters and values. It may contain nested objects, arrays, and properties with null values.</td></tr><tr><td><code>jar</code></td><td>Object</td><td>Pass in a cookie jar obtained from <code>apos.http.jar()</code>.</td></tr><tr><td><code>send</code></td><td>String</td><td>Can be &#39;json&#39; to always send <code>options.body</code> JSON-encoded, or <code>form</code> to send it URL-encoded.</td></tr><tr><td><code>body</code></td><td>Variable</td><td>The request body. If an object or array, it is sent as JSON. If a <a href="https://www.npmjs.com/package/form-data" target="_blank" rel="noreferrer"><code>FormData</code> object</a>, it is sent as a <code>multipart/form-data</code> upload. Otherwise it is sent as-is, unless the <code>send</code> option is set.</td></tr><tr><td><code>parse</code></td><td>String</td><td>Set to <code>json</code> to always parse the response body as JSON, otherwise the response body is parsed as JSON only if the <code>content-type</code> is <code>application/json</code>.</td></tr><tr><td><code>headers</code></td><td>Object</td><td>An object containing header names and values.</td></tr><tr><td><code>csrf</code></td><td>Boolean/String</td><td>If set to <code>true</code>, which is the default, and the <code>jar</code> contains the CSRF cookie for this Apostrophe site due to a previous <code>GET</code> request, send it as the X-XSRF-TOKEN header. If a string, send the current value of the cookie of that name in the <code>jar</code> as the X-XSRF-TOKEN header. If <code>false</code>, disable this feature.</td></tr><tr><td><code>fullResponse</code></td><td>Boolean</td><td>If <code>true</code>, return an object with <code>status</code>, <code>headers</code> and <code>body</code> properties, rather than returning the body directly. The individual <code>headers</code> are canonicalized to lowercase names. If a header appears multiple times an array is returned for it.</td></tr></tbody></table><p>If the status code is &gt;= 400 an error is thrown. The error object will be similar to a <code>fullResponse</code> object, with a <code>status</code> property.</p><h3 id="jar" tabindex="-1"><code>jar()</code> <a class="header-anchor" href="#jar" aria-label="Permalink to &quot;`jar()`&quot;">​</a></h3><p>This method returns a &quot;cookie jar,&quot; a set of HTTP cookies, compatible with the <code>jar</code> option in the request methods and the <code>getCookie()</code> method. The use of other cookie stores is not recommended.</p><h3 id="getcookie-jar-url-name" tabindex="-1"><code>getCookie(jar, url, name)</code> <a class="header-anchor" href="#getcookie-jar-url-name" aria-label="Permalink to &quot;`getCookie(jar, url, name)`&quot;">​</a></h3><p>Given a cookie jar received from <code>apos.http.jar()</code> and a context URL (<code>url</code>), this returns the current value for the given cookie (<code>name</code>), or <code>undefined</code> if there is no cookie set to that name.</p>',41);function y(s,j,w,g,T,v){const c=o("AposRefExtends"),n=o("AposCodeBlock");return h(),l("div",null,[u,b,d(c,{module:s.$frontmatter.extends},null,8,["module"]),f,d(n,null,{caption:a(()=>[t(" modules/@apostrophecms/http/index.js ")]),default:a(()=>[t(" ```javascript module.exports = { options: { addErrors: { timeout: 408 } } } ``` ")]),_:1}),m])}const O=i(p,[["render",y]]);export{S as __pageData,O as default};
