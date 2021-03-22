# Technical overview

## The core tech

In brief, the main technologies behind Apostrophe are:

- [Node.js](https://nodejs.org): **Popular server-side JavaScript runtime.** We originally chose Node.js to achieve a fully-Javascript development experience for developers. It has continued to improve over time, delivering high performance and powerful features we can use.
- [Express](https://npmjs.org/package/express): **Un-opinionated Node.js web framework.** Express is the most widely used web framework for Node.js. Because it is simple, un-opinionated, and well-known, it was straightforward to extend it to suit Apostrophe's needs.
- [MongoDB](https://www.mongodb.com): **Secure, document-based database engine.** We chose MongoDB for its fluent JavaScript-based API, its safety from "SQL injection"—style attacks, its developer-friendliness, and its support for documents with varying schemas in the same collection.
- [Nunjucks](https://mozilla.github.io/nunjucks/): **Richly featured template language for Javascript.** Nunjucks provides tons of features, extensibility, and a syntax nearly identical to Twig, Jinja, and other Django-inspired templating languages.

## Directory structure

There are a few directories and top-level files that are especially important in Apostrophe projects. Here is a rough overview of these files and folders you will see in the official boilerplate.

| Folder/File | What is it? |
| ------ | ------ |
| `app.js` | The heart of the application. This is where you do some general configuration and tell Apostrophe what modules are in your project. |
| `/modules` | All project-level modules and configuration for installed modules (including those from Apostrophe core). |
| `/public` | Everything in this directory is available to anyone who can view the website. Some directories are generated inside here, but you can also use it to store public, static files.  |
| `/views` | Template files that do not belong to any one module. Apostrophe looks for site wrapper templates here, including `layout.html`. |

::: tip
Core module configuration is all done in a subdirectory of `modules`: `modules/@apostrophecms`. This keeps core modules organized together and out of the way, following [the npm scoping pattern](https://docs.npmjs.com/about-scopes).
:::
