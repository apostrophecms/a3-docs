import{_ as e,o as s,c as t,$ as a}from"./chunks/framework.9fa1e75e.js";const D=JSON.parse('{"title":"relationship","description":"","frontmatter":{},"headers":[],"relativePath":"reference/field-types/relationship.md","filePath":"reference/field-types/relationship.md","lastUpdated":1690289066000}'),o={name:"reference/field-types/relationship.md"},n=a(`<h1 id="relationship" tabindex="-1"><code>relationship</code> <a class="header-anchor" href="#relationship" aria-label="Permalink to &quot;\`relationship\`&quot;">​</a></h1><p>A <code>relationship</code> field expresses a one-to-many connection between an Apostrophe document, a piece or page, and another.</p><p>The <code>_id</code> values for the related docs are stored in an array. When ready to be used, Apostrophe fetches the full related documents, filtering properties as configured, and attaching them on a property matching the <code>relationship</code> field name.</p><p>For instance, a website may have <code>pizza</code> pieces with a <code>relationship</code> field named <code>_toppings</code> that relates them to <code>topping</code> pieces. The topping <code>_id</code> values will be stored on <code>toppingsIds</code> in the database. In the template and in API responses, the related topping piece data will be available as the <code>pizza._toppings</code> array property of each product.</p><h2 id="module-field-definition" tabindex="-1">Module field definition <a class="header-anchor" href="#module-field-definition" aria-label="Permalink to &quot;Module field definition&quot;">​</a></h2><p>The field name must begin with an underscore (<code>_</code>). This indicates that the ultimate value is not stored in the database, but is populated when needed.</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// Configuring the \`_toppings\` field in a module&#39;s \`fields.add\` subsection:</span></span>
<span class="line"><span style="color:#FFCB6B;">_toppings</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">label</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Toppings</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">type</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">relationship</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">withType</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">topping</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">builders</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// Include only the information you need with a projection</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">project</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#FFCB6B;">title</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#FFCB6B;">_url</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p><strong>For better performance, it is strongly recommended that you set a projection filter</strong> via the <code>builders</code> option, limiting the amount of information fetched about each related doc. You may also call other query builders by setting subproperties of the <code>builders</code> property. This is a useful way to limit the acceptable choices for the join.</p></div><h2 id="settings" tabindex="-1">Settings <a class="header-anchor" href="#settings" aria-label="Permalink to &quot;Settings&quot;">​</a></h2><h3 id="required" tabindex="-1">Required <a class="header-anchor" href="#required" aria-label="Permalink to &quot;Required&quot;">​</a></h3><table><thead><tr><th>Property</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>label</code></td><td>String</td><td>n/a</td><td>Sets the visible label for the field in the UI</td></tr><tr><td><code>type</code></td><td>String</td><td>n/a</td><td>Specifies the field type (<code>relationship</code> for this type)</td></tr></tbody></table><h3 id="optional" tabindex="-1">Optional <a class="header-anchor" href="#optional" aria-label="Permalink to &quot;Optional&quot;">​</a></h3><table><thead><tr><th>Property</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>builders</code></td><td>Object</td><td>n/a</td><td>Query builders to limit acceptable options for the join. <a href="#filtering-related-document-properties">See below</a> for more.</td></tr><tr><td><code>fields</code></td><td>Object</td><td>n/a</td><td>A field schema object, allowing editors to <a href="/guide/relationships.html#providing-context-with-fields">add additional information to relationships</a>.</td></tr><tr><td><code>help</code></td><td>String</td><td>n/a</td><td>Help text for the content editor</td></tr><tr><td><code>htmlHelp</code></td><td>String</td><td>n/a</td><td>Help text with support for HTML markup</td></tr><tr><td><code>if</code></td><td>Object</td><td><code>{}</code></td><td>Conditions to meet before the field is active. <a href="/guide/conditional-fields.html">See the guide for details.</a></td></tr><tr><td><code>idsStorage</code></td><td>String</td><td>n/a</td><td>The name of the property in which to store related document IDs. If not set, the IDs property will be based on the field name.</td></tr><tr><td><code>ifOnlyOne</code></td><td>Boolean</td><td><code>false</code></td><td>If <code>true</code>, the related doc data will only be populated if the original document was the only one requested. <a href="#limiting-returned-data-with-ifonlyone">See below</a> for more.</td></tr><tr><td><code>min</code></td><td>Integer</td><td>n/a</td><td>The minimum number of related docs required</td></tr><tr><td><code>max</code></td><td>Integer</td><td>n/a</td><td>The maximum number of related docs allowed</td></tr><tr><td><code>required</code></td><td>Boolean</td><td><code>false</code></td><td>If <code>true</code>, the field is mandatory</td></tr><tr><td><code>readOnly</code></td><td>Boolean</td><td><code>false</code></td><td>If <code>true</code>, prevents the user from editing the field value</td></tr><tr><td><code>withRelationships</code></td><td>Array</td><td>n/a</td><td>An array of field names representing <code>relationship</code> fields you wish to populate with the connected docs. <a href="#populating-nested-relationships-using-withrelationship">See below</a> for more.</td></tr><tr><td><code>withType</code></td><td>String</td><td>Uses the field name, minus its leading <code>_</code> and possible trailing <code>s</code></td><td>The name of the related type.</td></tr><tr><td><code>browse</code></td><td>Boolean</td><td><code>true</code></td><td>If <code>false</code>, hide the browse button.</td></tr><tr><td><code>suggestionLabel</code></td><td>String</td><td><code>apostrophe:relationshipSuggestionLabel</code></td><td>The label at the top of the autocomplete suggestions</td></tr><tr><td><code>suggestionHelp</code></td><td>String</td><td><code>apostrophe:relationshipSuggestionHelp</code></td><td>The text to display next to the autocomplete suggestion label</td></tr><tr><td><code>suggestionLimit</code></td><td>Number</td><td>25</td><td>How many suggestions should be displayed when you focus the search field</td></tr><tr><td><code>suggestionSort</code></td><td>Object</td><td><code>{ updatedAt: -1 }</code></td><td>How to sort the autocomplete results</td></tr><tr><td><code>suggestionIcon</code></td><td>String</td><td><code>text-box-icon</code></td><td>The icon to display before the autocomplete item. Please refer to the <a href="/reference/module-api/module-overview.html#icons"><code>icons</code> module setting</a></td></tr><tr><td><code>suggestionFields</code></td><td>Array</td><td><code>[ &#39;slug&#39; ]</code></td><td>The document properties to display next to the autocomplete label</td></tr></tbody></table><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>To create relationships with pages, use <code>withType: &#39;@apostrophecms/any-page-type&#39;</code>.</p><p>If <code>withType</code> is not set the name of the field must match the name of the related type, with a leading <code>_</code> (underscore), and <em>optional</em> trailing <code>s</code> added (e.g., <code>_article</code> or <code>_articles</code> to connect to the <code>article</code> piece type).</p></div><h2 id="filtering-related-document-properties" tabindex="-1">Filtering related document properties <a class="header-anchor" href="#filtering-related-document-properties" aria-label="Permalink to &quot;Filtering related document properties&quot;">​</a></h2><p>Often when two Apostrophe documents are connected by a <code>relationship</code> field, the original doc only needs one or two properties from the connected doc. For example, an <code>article</code> piece may connect to an <code>author</code> piece, but only need the author&#39;s name and portrait photo. That <code>author</code> piece may also contain rich text for a biography, an additional set of photos for a slideshow, and a string field with their home town, but we don&#39;t want to send all of that to the <code>article</code> piece as it is unnecessary and adds to work done by the server.</p><p>A <code>project</code> query builder limits the properties of the connected doc that are populated on the original doc. The following configuration would limit the author data to only what we need:</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">_author</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">label</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Author</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">type</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">relationship</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">max</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// There&#39;s only one author</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// Limiting our data here 👇</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">builders</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">project</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#FFCB6B;">title</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// The author&#39;s name is entered as its \`title\`</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#FFCB6B;">photo</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>By doing that, we don&#39;t get any slideshow, biography, home town, or other data that isn&#39;t needed. The projection filter format comes from the similar MongoDB projection operator.</p><h2 id="limiting-returned-data-with-ifonlyone" tabindex="-1">Limiting returned data with <code>ifOnlyOne</code> <a class="header-anchor" href="#limiting-returned-data-with-ifonlyone" aria-label="Permalink to &quot;Limiting returned data with \`ifOnlyOne\`&quot;">​</a></h2><p>The <code>ifOnlyOne</code> option was designed to lighten document data in situations where many of that type of document are being displayed. The primary example of this are the index, or listing, pages.</p><p>For example, if a <code>team</code> piece type has a relationship field that connects it to many <code>players</code> (as in baseball &quot;players&quot;), you may want to display all of the players&#39; information on the individual team page (the <a href="/reference/glossary.html#show-page">show page</a>). However, on the <a href="/reference/glossary.html#index-page">index page</a> for all teams, you are not displaying all players for every team, so it lightens the server load to ignore the relationship field in that context. So you might configure the field as such:</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// \`_players\` will only be populated when only one team document is being fetched</span></span>
<span class="line"><span style="color:#FFCB6B;">_players</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">label</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Players</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">type</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">relationship</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">withType</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">player</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">ifOnlyOne</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h2 id="populating-nested-relationships-using-withrelationship" tabindex="-1">Populating nested relationships using <code>withRelationship</code> <a class="header-anchor" href="#populating-nested-relationships-using-withrelationship" aria-label="Permalink to &quot;Populating nested relationships using \`withRelationship\`&quot;">​</a></h2><p>It is not unusual for one piece type to have situations with &quot;nested relationships&quot; across piece types. For example, <code>team</code> may have a relationship field connecting to <code>player</code> pieces, then <code>player</code> pieces connect to <code>specialty</code> pieces. Imagine that the players had multiple relationship fields, and suddenly the data populated two levels up on teams could get very large.</p><p>By default, these &quot;nested relationships&quot; are excluded. So on the <code>team</code> show page, <code>data.piece._players</code> would include only <code>specialtiesIds</code> by default. With the following configuration, that same piece data would <em>also</em> include <code>_specialties</code>, an array of populated specialty objects.</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// With this configuration, \`_players\` will include the populated \`_specialties\` documents rather than only the specialty \`_id\` values.</span></span>
<span class="line"><span style="color:#FFCB6B;">_players</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">label</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Players</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">type</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">relationship</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">withType</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">player</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">withRelationships</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> [ </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">_specialties</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> ]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>In the case of double nesting e.g., <code>_specialties</code> piece has a <code>_photo</code> relationship field with another piece <code>@apostrophecms/image</code>, then <code>_photo</code> can be accessed as <code>_specialties._photo</code>.</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// With this configuration, \`_players\` will include the populated \`_specialties\` and \`_photo\` documents rather than only the specialty and photo \`_id\` values.</span></span>
<span class="line"><span style="color:#FFCB6B;">_players</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">label</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Players</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">type</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">relationship</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">withType</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">player</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">withRelationships</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> [ </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">_specialties._photo</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> ]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div>`,29),l=[n];function p(r,c,i,d,y,h){return s(),t("div",null,l)}const u=e(o,[["render",p]]);export{D as __pageData,u as default};
