# Glossary

## Module

Apostrophe sites are powered by Apostrophe modules. Each module is responsible for providing one feature, such as a type of widget, a type of customized page, or a service like pushing assets to the browser. Apostrophe has many standard modules which provide its core features.

A module can extend, or "subclass", another module, and most of the modules you create at "project level" (in your project code) will. All modules implicitly extend `@apostrophecms/module`, which provides a rich set of conveniences, like rendering templates or pushing assets relative to your module's folder.

<!-- TODO: Move this description of module directories to a guide page and link there instead. This goes beyond definition. -->

Modules created at project level live in subdirectories of `/modules`. For example, an `article` module would be managed in the `/modules/article` directory. Code and configuration for a module lives in it's `index.js` file (`/modules/article/index.js`, in the example).

## Doc

A "doc" refers to a content-related document in Apostrophe's database. They are in the `aposDocs` MongoDB collection.

Docs contain various properties, including [areas](#area), as described by a schema configured for their **document types**. Each doc type will extend `@apostrophecms/piece-type`, `@apostrophecms/page-type`, `@apostrophecms/piece-page-type`, or another doc type that itself extends one of those core modules.

At a minimum, a doc has unique `_id` and `slug` properties. The `type` property identifies the doc type and determines what other behaviors it might have. The `@apostrophecms/doc` module provides methods for working with docs, including the `apos.docs.getManager(doc.type)` method, which returns a reference to the module suited to working with that type of document.

## Piece

A "piece" is a unit of standalone, structured, non-page content in Apostrophe. A piece module extends `@apostrophecms/piece-type`. These include core elements such as images and users, as well as project-specific content, such as events or products.

They are not pages themselves, but can be displayed at individual page URLs if there is a matching piece page type (extending the `@apostrophecms/piece-page-type` module). They could then have individual "show pages" once an "index page" (an often-paginated listing page) of that type is created.

## Page

A doc that is part of the page tree and is designed to be viewed like any traditional web page. It can potentially have "child" pages via the page tree hierarchy. Pages belong to particular "page types," and may have custom fields based on their type, but are not displayed in an index listing as pieces are.

Their `slug` property begins with `/`, which is only true for pages. A page also has `path`, `rank` and `depth` properties that help make its relationship to other pages in the tree clear.

`path` differs from `slug` in that it always reflects the true parent-child relationships between pages in the tree, while `slug` can be edited and shortened if desired so that URLs don't have to contain a lot of slashes to reach a deep page.

## Global doc

There is a single doc with the slug, `global`, which is always loaded and available to page templates as `data.global`. This is useful for shared, site-wide headers and footers that are editable, etc. It is managed by the `@apostrophecms/global` module.

## Widget

A widget is a single section of content in an [area](#area) that can usually be edited, such as a block of rich text, an image slideshow, or a callout block. You can create entirely new types of widgets by extending the `@apostrophecms/widget-type` module.

## Area

An area is a special field in a piece or page where you can add any number of widgets of any type, as configured for that piece or page type. Editors can add, edit, move, and remove widgets within the area. Widgets in the area maintain their order for consistent displaying.

Areas are inserted into your templates using the [`area` template tag](/guide/widgets-and-templates.md#home-page-template). They are implemented by the `@apostrophecms/area` module.

## Template

Apostrophe uses the [Nunjucks template language](https://mozilla.github.io/nunjucks/) to render webpages and components of pages, such as widgets and [blocks](#block). Nunjucks shares a syntax with the Jinja and Twig languages which are popular in the Python and PHP worlds, respectively.

## Block

In Nunjucks templates, [a block is a section of a template that can be overridden in a template that extends it](https://mozilla.github.io/nunjucks/templating.html#block). This is a useful technique in page templates when paired with [template inheritance](https://mozilla.github.io/nunjucks/templating.html#template-inheritance).

## Schema

A piece, page, or widget type's schema is the definition of its fields. Apostrophe's schemas are used both to create an editing interface and to sanitize and save data on the server side. Commonly used field types include strings, integers, floats, select elements and "relationship" fields, which allow editors to define connections to other docs.

Schemas are built by using the `add`, `remove`, and `group` properites of the `fields` option when configuring any module that extends `@apostrophecms/piece-ype`, `@apostrophecms/page-type`, or `@apostrophecms/widget-type`.

Here is a simple example in which we add a required "author" string field to the schema for "story," a custom piece type:

```javascript
// modules/story/index.js in our project
module.exports = {
  extend: 'apostrophe-pieces',
  name: 'story',
  fields: {
    add: {
      author: {
        type: 'string',
        required: true
      }
    }
  }
}
```

<!-- TODO: Return when module reference is available. -->
<!-- See the [apostrophe-schemas](/reference/modules/apostrophe-schemas/README.md) module documentation for more information. -->

## Relationship

In [Apostrophe schemas](#schema), a "relationship" field describes a connection with another doc. A development agency might want to connect "services" to "projects," or you might want to select "office" pieces for display in the website footer.

In that second case, the schema containing the relationship field might look like this:

```javascript
fields: {
  add: {
    _offices: {
      label: 'Offices',
      type: 'relationship',
      withType: 'office'
    }
  }
}
```

The editing interface for this join allows the user to pick offices to associate with this service. When writing templates, the developer is then able to access a `._offices` array as a property of each service.

<!-- TODO: Return when module reference is available. -->
<!-- See the [apostrophe-schemas](/reference/modules/apostrophe-schemas/README.md) module documentation for more information about joins. -->

<!-- TODO: Display this when other locale information is added. -->
<!-- ## Document set

The database documents that exist as mode and locale versions of one another. For example, in a project with an English and a French locale, the home page would be managed in the database by six documents: 1) the draft English, 2) published English, 3) previous English, 4) draft French, 5) published French, and 6) previously published French. These six database documents make up the document set. -->