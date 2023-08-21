import{_ as e,o as s,c as t,$ as a}from"./chunks/framework.9fa1e75e.js";const o="/assets/users-admin-bar.a3dd245f.png",n="/assets/users-editor.0ba96b3a.png",r="/assets/users-login.39505587.png",i="/assets/users-visibility.c4f7f6fc.png",w=JSON.parse('{"title":"Users and user roles","description":"","frontmatter":{},"headers":[],"relativePath":"guide/users.md","filePath":"guide/users.md","lastUpdated":1690289066000}'),d={name:"guide/users.md"},l=a('<h1 id="users-and-user-roles" tabindex="-1">Users and user roles <a class="header-anchor" href="#users-and-user-roles" aria-label="Permalink to &quot;Users and user roles&quot;">​</a></h1><p>A <strong>&quot;user&quot;</strong> in Apostrophe is an account (usually for a human or benevolent robot) that can be used to log into the application. Beyond that, users get specific sets of permissions based on the <strong>role</strong> they are assigned.</p><h2 id="adding-new-users" tabindex="-1">Adding new users <a class="header-anchor" href="#adding-new-users" aria-label="Permalink to &quot;Adding new users&quot;">​</a></h2><p>If you want to do anything with your Apostrophe website, you will need users. There are two main ways to add them: using the command line task or through the user interface.</p><h3 id="adding-users-with-the-cli-task" tabindex="-1">Adding users with the CLI task <a class="header-anchor" href="#adding-users-with-the-cli-task" aria-label="Permalink to &quot;Adding users with the CLI task&quot;">​</a></h3><p>The CLI task for adding users is primarily useful to add the very first admin user. The command is:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">node</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">app</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">@apostrophecms/user:add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">my-user</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">admin</span></span></code></pre></div><p>The two final arguments passed to the task are, in order, the new username (<code>my-user</code>) and the <a href="#user-roles">user role</a> (<code>admin</code>).</p><h3 id="adding-users-through-the-ui" tabindex="-1">Adding users through the UI <a class="header-anchor" href="#adding-users-through-the-ui" aria-label="Permalink to &quot;Adding users through the UI&quot;">​</a></h3><p>Once you have that first user, you have the option to add new ones through the user interface. The first and most important thing to know is that <strong>only admin users can create and manage other users.</strong> The admin user created with the CLI command above will have this ability.</p><p>Open the users manager interface by clicking the &quot;Users&quot; button in the admin menu.</p><p><img src="'+o+'" alt="The admin menu at the top of the browser window with the Users button highlighted"></p><p>When the manager opens, click the &quot;New User&quot; button to open a fresh content editor modal. Populate the required fields, including the user&#39;s &quot;Display Name,&quot; <a href="#user-roles">role</a>, username, and password.</p><p><img src="'+n+'" alt="A user editor modal with values filled in for our user, &quot;Sam Wilson&quot;"></p><h2 id="logging-into-an-apostrophe-website" tabindex="-1">Logging into an Apostrophe website <a class="header-anchor" href="#logging-into-an-apostrophe-website" aria-label="Permalink to &quot;Logging into an Apostrophe website&quot;">​</a></h2><p>Users can log into Apostrophe websites at the <code>/login</code> URL path for the website. If the website base URL (homepage) is <code>https://example.rocks</code>, the login page will be <code>https://example.rocks/login</code>.</p><p><img src="'+r+'" alt="The Apostrophe login page with username and password fields"></p><h2 id="user-roles" tabindex="-1">User roles <a class="header-anchor" href="#user-roles" aria-label="Permalink to &quot;User roles&quot;">​</a></h2><p>Users are assigned one of four <strong>user roles</strong>. Each role is assigned a set of permissions that cover typical content editing, review, and administration duties.</p><table><thead><tr><th>User role</th><th>What can they do?</th></tr></thead><tbody><tr><td><strong>Guest</strong></td><td>Guest users can log into the website and view content with visibility set to &quot;Login required.&quot; They cannot edit any content or view unpublished content.</td></tr><tr><td><strong>Contributor</strong></td><td>Contributors may create and edit content, including the global doc. They cannot upload files (i.e., images, PDFs) or take any action on users.</td></tr><tr><td><strong>Editor</strong></td><td>Editors have all the permissions of contributors. They can also <em>publish</em> content and upload files. They cannot take any action on users.</td></tr><tr><td><strong>Admin</strong></td><td>Administrators have permissions to create, edit, archive, and publish any content. They are the only role that may create, update, or archive users. At the time of writing, an admin account is needed to reset passwords through the user interface.</td></tr></tbody></table><div class="info custom-block"><p class="custom-block-title">INFO</p><p>We can also change passwords through the command line task below. The <code>username</code> argument will be the username of the account you are updating.</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">node</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">app</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">@apostrophecms/user:change-password</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">username</span></span></code></pre></div></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Sometimes certain content should never be fully public. You may have subscribers who get special access or information that only employees should see. The &quot;Guest&quot; role can be used for that.</p><p>Require login access to view specific pages or pieces using the visibility field, labeled <strong>&quot;Who can view this?&quot;</strong> This field is found in the &quot;Permissions&quot; editor tab by default.</p><p><img src="'+i+'" alt="A page editor interface showing the permission tab and &quot;who can view this&quot; field"></p></div>',22),h=[l];function u(c,p,g,m,b,y){return s(),t("div",null,h)}const q=e(d,[["render",u]]);export{w as __pageData,q as default};
