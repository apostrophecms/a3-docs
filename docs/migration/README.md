---
title: "Coming from A2"
---

# A Brand New Apostrophe

Apostrophe 3 introduces a number of new features for developers and content-editors. Its been re-engineered from the ground-up to provide a best-in-class experience for organizations large and small.

## 100% RESTful Headless APIs
While A2 had custom APIs and a separate `apostrophe-headless` module, A3 is powered by RESTful APIs from the ground up.

## New Editing Experience
Powered by [Vue](https://vuejs.org/), the new editing experience is much faster than in A2. We've completely overhauled the design and UX with superior editor interactions.

## New Rich Text Editor
A3 uses the [tiptap](https://tiptap.dev/) rich text editor, a modern Vue-based editor powered by [ProseMirror](https://prosemirror.net/). ProseMirror is a rich text editing framework embraced by many companies, notably including The New York Times.

## Improved Module Architecture
A2 developers told us it was hard to learn how to structure their code. So in A3, we have a clearer layout for modules. Each module has a clearly defined home for methods, event handlers, Nunjucks helpers, async components, query builders and more.

## All `async/await`, No Callbacks

Callback-driven code has been completely eliminated from the core of Apostrophe, and all of the JavaScript APIs return promises, so you can `await` them.

## Async Components & Lazy Loading
A2 developers often asked why they couldn't fetch content from the database from inside a template. Now you can. The async component pattern delivers this feature without cluttering your templates with complex JavaScript. Load what you need, when you need it.

## Un-opinionated Front End
A2 shipped with jQuery, lodash, momentjs and more. Later, we added the lean option to remove these things. A3 takes this one step further: there are no frontend libraries at all sent to logged-out users, except for a very small vanilla JavaScript helper library for core tasks like communicating with Apostrophe and displaying our video widget. The new library is under 10K gzipped.

## Coming soon...

The core team is continually adding and tweaking features in Apostrophe 3. Check in on [the product roadmap](https://apostrophecms.productboard.com/portal/1-product-portal/tabs/1690f4df-bbbe-4d8d-aad0-42e4f1ff7643) to learn about some of the big features and the estimated timeline.
