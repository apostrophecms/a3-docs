# Module configuration options

Apostrophe modules can be configured with settings that influence functionality without having to write custom Javascript. The sections below describe the options available in all modules as well as those specific to certain module types.

All settings described here are placed in a module's `options` configuration object. The `options` object can be added in the module's `index.js` file, as well as where the module is instantiated in the `app.js` file.

`index.js` example:
```javascript
// modules/article/index.js
module.exports = {
  extend: '@apostrophecms/piece-type',
  // 👇 Module configuration options
  options: {
    alias: 'article',
    label: 'Article',
    pluralLabel: 'Articles',
    quickCreate: true
  },
  // Other settings, such as `fields`
}
```

`app.js` example:
```javascript
// app.js
require('apostrophe')({
  shortName: 'bowling-league-site', // Unique to your project
  modules: {
    article: {
      extend: '@apostrophecms/piece-type',
      // 👇 Module configuration options
      options: {
        alias: 'article',
        label: 'Article',
        pluralLabel: 'Articles',
        quickCreate: true
      },
      // Other settings, such as `fields`
    }
  }
});
```

## Options for any module

Option settings in this section apply to every module in Apostrophe.

- [`alias`](#alias)
- [`components`](#components)
- [`templateData`](#templatedata)

### `alias`

<!-- TODO: Link to information about the apos object when available. -->
Set to a string, the `alias` value will be applied to the `apos` object (accessible in many places) as a quick reference to the module.
set an alias to easily reference the module from other modules. There is no default value.

#### Example

```javascript
// modules/news-article/index.js
module.exports = {
  extend: '@apostrophecms/piece-type',
  options: {
    alias: 'article'
  },
  // ...
}
```

This `article` module can then be referenced anywhere the `apos` object is present as `apos.article`. Otherwise it would be available via `apos.modules['news-article']`.

:::tip NOTE
With the exception of modules present in Apostrophe core at the time of the 3.x stable release, modules distributed via npm should never set `alias` for themselves or assume that it has been set. This is to avoid conflict when multiple modules attempt to use the same alias.
:::

### `components`

The `components` options is an object identifying Vue components to use for the module's related user interface. The keys of this object, and thus the UI being overridden, will vary based on the module type. For example, piece modules use `managerModal` and `editorModal` components.

This is an advanced option since it can easily break the user interface.

#### Example

```javascript
// modules/@apostrophecms/piece-type/index.js
module.exports = {
  options: {
    components: {
      managerModal: 'MyCustomPiecesManager'
    }
  },
  // ...
}
```

### `templateData`

Similar to [`browser`](#browser), the `templateData` module option can be set to an object whose properties will be made available in templates of that module. Properties are attached directly to the `data` object in templates.

#### Example

```javascript
// modules/heading-widget/index.js
module.exports = {
  extend: '@apostrophecms/widget-type',
  options: {
    templateData: {
      defaultColor: '#55ff93'
    }
  },
  // ...
}
```

You might use that value as a fallback for user-editable fields.

```django
{# In `modules/heading-widget/index.js` #}
{% set bgColor = data.widget.color or data.defaultColor %}
<h2 style="background-color: {{ bgColor }}">
  Title Here
</h2>
```

## Options for all doc type modules

Option settings in this section apply to all modules that extend `@apostrophecms/doc-type` ([doc type](glossary.md#doc) modules). These include all piece and page types.

- [`adminOnly`](#adminonly)
- [`autopublish`](#autopublish)
- [`label`](#label)
- [`localized`](#localized)
- [`sort`](#sort)
- [`slugPrefix`](#slugprefix)
<!-- - [`contextBar`](#contextbar) -->

### `adminOnly`

<!-- TODO: link to permissions docs when available. -->
If `true`, only users with the sitewide admin permission can read or write docs of this type. The `@apostrophecms/user` module uses this setting due to its impact on user access. There is no default value.

#### Example

```javascript
// modules/official-memo/index.js
module.exports = {
  extend: '@apostrophecms/piece-type',
  options: {
    adminOnly: true
  },
  // ...
}
```

### `autopublish`

Set `autopublish` to `true` to automatically publish any changes saved to docs of this type. There is then effectively no draft mode for this doc type.

The core image and file modules use this option, for example. It eliminates the need for users to think about the distinction between draft and published content while preserving the possibility of translation for different locales.

#### Example

```javascript
// modules/article-category/index.js
module.exports = {
  extend: '@apostrophecms/piece-type',
  options: {
    autopublish: true
  },
  // ...
}
```

<!-- ### `contextBar` -->

<!-- NOTE: Should we keep this on the secrete menu? (not document) -->
<!-- If `true`, the second row of the admin bar, the "context bar," will be disabled.
`true` ~ allows the admin bar context bar row to appear -->

### `label`

`label` should be set to a text string to be used in user interface elements related to this doc type. This includes buttons to open piece manager modals and the page type select field.

If not set, Apostrophe will convert the module `name` meta property to a readable label by splitting the `name` on dashes and underscores, then capitalizing the first letter of each word.

#### Example

```javascript
// modules/feature/index.js
module.exports = {
  extend: '@apostrophecms/piece-type',
  options: {
    label: 'Featured Article'
  },
  // ...
}
```

### `localized`

Defaults to `true`. If set to `false`, this doc type will _not_ be included in the locale system. This means there will be only one version of each doc, regardless of whether multiple locales (e.g., for languages or regions) are active. The "users" piece disables localization in this way.

#### Example

```javascript
// modules/administrative-category/index.js
module.exports = {
  extend: '@apostrophecms/piece-type',
  options: {
    localized: false
  },
  // ...
}
```

### `sort`

The `sort` option for a doc type defines a sorting order for requests to the database for that type. The option is set to an object containing field name keys with `1` as a property value for ascending order and `-1` for descending order.

The default sort for all doc types is `{ updatedAt: -1 }`, meaning it returns documents based on the `updatedAt` property (the date and time of the last update) in descending order. The `sort` object can have multiple keys for more specific sorting.

#### Example

This `sort` setting will return articles first based on a custom `priority` field in ascending order, then by the core `updatedAt` property in descending order.

```javascript
// modules/article/index.js
module.exports = {
  extend: '@apostrophecms/piece-type',
  options: {
    sort: {
      priority: 1,
      updatedAt: -1
    }
  },
  fields: {
    add: {
      priority: {
        type: 'integer',
        min: 1,
        max: 5
      },
      // ...
    }
  }
  // ...
}
```

### `slugPrefix`

Set `slugPrefix` to a string to prepend all [slugs](glossary.md#slug) for docs of this type. This can prevent slugs, which must be unique to each doc, from being reserved in some cases. For example, Apostrophe image docs have the `slugPrefix` value of `'image-'` so images, which do not typically have public pages, do not accidentally reserve a more reader-friendly slug.

#### Example

```javascript
// modules/article-category/index.js
module.exports = {
  extend: '@apostrophecms/piece-type',
  options: {
    slugPrefix: 'category-'
  },
  // ...
}
```

## Options for all piece modules

Option settings in this section apply to all piece modules (those that extend `@apostrophecms/piece-type`).

- [`pluralLabel`](#plurallabel)
- [`perPage`](#perpage)
- [`publicApiProjection`](#publicapiprojection-for-pieces)
- [`quickCreate`](#quickcreate-for-pieces)
- [`searchable`](#searchable)

### `pluralLabel`

Similar to `label` for all doc types, the `pluraLabel` option sets the string the user interface will use to describe a piece type in plural contexts. All page types are referred to as "Pages" in these contexts, but pieces should have unique labels (e.g., "Articles," or "Teams").

If no `pluralLabel` value is provided, Apostrophe will append the `label` (whether set manually or generated [as described](#label)), with "s", as is typical for English words. **Even in English this is often not correct, so `pluralLabel` should usually be defined explicitly.**

#### Example

```javascript
// modules/goose/index.js
module.exports = {
  extend: '@apostrophecms/piece-type',
  options: {
    label: 'Goose',
    pluralLabel: 'Geese'
  },
  // ...
}
```

### `perPage`

In piece types, the `perPage` option, expressed as an integer, sets the number of pieces that will be returned in each "page" [during `GET` requests](api/pieces.md#get-api-v1-piece-name) that don't specify an `_id`. This value defaults to 10.

#### Example

```javascript
// modules/article/index.js
module.exports = {
  extend: '@apostrophecms/piece-type',
  options: {
    perPage: 20 // REST `GET` requests will return 20 pieces per page.
  },
  // ...
}
```

### `publicApiProjection` (for pieces)

By default the built-in Apostrophe REST APIs are not accessible without proper [authentication](/reference/api/authentication.md). You can set an exception to this for `GET` requests to return specific document properties with the `publicApiProjection` option.

This should be set to an object containing individual field name keys set to `1` for their values. Those fields names included in the `publicApiProjection` object will be returned when the `GET` API requests are made without authentication.

#### Example

```javascript
// modules/article/index.js
module.exports = {
  extend: '@apostrophecms/piece-type',
  options: {
    publicApiProjection: {
      title: 1,
      authorName: 1,
      _url: 1 // 👈 Dynamic properties are allowed
    }
  },
  // ...
}
```

Unauthenticated [`GET /api/v1/article`](api/pieces.md#get-api-v1-piece-name) requests would return each piece with only the `title`, `authorName`, and `_url` properties.

### `quickCreate` (for pieces)

Setting `quickCreate: true` on a piece adds that piece type to the admin bar "quick create" menu. The Apostrophe admin bar user interface includes the quick create menu button to add new pieces without first opening their respective manager modals.

#### Example

```javascript
// modules/article/index.js
module.exports = {
  extend: '@apostrophecms/piece-type',
  options: {
    quickCreate: true
  },
  // ...
}
```

### `searchable`

<!-- TODO: link to documentation of Apostrophe search when available. -->
Setting `searchable: false` on a piece type will exclude that piece type from the results in Apostrophe's built-in search.

#### Example

```javascript
// modules/article/index.js
module.exports = {
  extend: '@apostrophecms/piece-type',
  options: {
    searchable: false
  },
  // ...
}
```

## Options for the core page module

Option settings in this section apply to the core page module (`@apostrophecms/page`).

| Option | Value type | Description |
|---------|---------|---------|
| [`builders`](#builders) | Object | Set query builder values to be used when pages are served. |
| [`home`](#home) | Boolean/Object | Change how the home page is added to `req.data` when pages are served. |
| [`minimumPark`](#minimumpark) | Array | Override home page default properties when created. |
| [`park`](#park) | Array | Set pages to be created on site start with configuration. |
| [`publicApiProjection`](#publicapiprojection-for-pages) | Object | Set query builder values to be used when pages are served. |
| [`quickCreate`](#quickcreate-for-pages) | Boolean | Set to `false` to remove pages from the quick create menu. |
| [`types`](#types) | Array | Set the page types available for new pages. |

### `builders`

<!-- TODO: Update link to a more detailed explanation of builders when
available. -->
The `builders` option can be used to apply any existing [query builders](/guide/major-changes.md#queries) when a page is served by its URL. This effects the data available on `req.data.page` (`data.page` in templates). This can be used to get more or less included on that page object depending on the need.

The default value is:
```javascript
{
  children: true,
  ancestors: { children: true }
}
```

This includes one level of the page's page tree "children" as `_children` and its "ancestor" pages each with one level of their child pages on `_ancestors`.


#### Example

```javascript
// modules/@apostrophecms/page/index.js
module.exports = {
  options: {
    builders: {
      children: { depth: 2 }
    }
  },
  // ...
}
```

In this example, we are not including ancestor pages and are requesting two levels of child pages (direct children and their direct children).

### `home`

The home page document is added to all page requests on `req.data.home` so it can be referenced in all page templates. That home page object also includes a `_children` property containing an array of top level page objects. There are two settings for this option to change that behavior. These can offer minor performance improvements for large sites.

- Set `home: false` to disable adding the home page document to the requests.
- Set`home: { children: false }` to include the home page document, but without the child pages array. If the [`builders` option](#builders) has an `ancestors` property, that will take precedence.

#### Example

```javascript
// modules/@apostrophecms/page/index.js
module.exports = {
  options: {
    home: { children: false }
  },
  // ...
}
```

### `minimumPark`

The `minimumPark` option offers the ability to overwrite how the default required pages are configured. This includes the home page and the trash "page" (trash is part of the page tree). Most "parking" pages should be done with the [`park`](#park) option.

::: warning
Use with caution. Removing either of those pages as required with this option would have negative effects, but this does offer the ability to change the title or page type of the home page, for example.
:::

The default is:
```javascript
[
  {
    slug: '/',
    parkedId: 'home',
    _defaults: {
      title: 'Home',
      type: '@apostrophecms/home-page'
    },
    _children: [
        {
        slug: '/trash',
        parkedId: 'trash',
        type: '@apostrophecms/trash',
        trash: true,
        orphan: true,
        _defaults: { title: 'Trash' }
      }
    ]
  }
]
```

#### Example

```javascript
// modules/@apostrophecms/page/index.js
module.exports = {
  options: {
    minimumPark: [
      {
        slug: '/',
        parkedId: 'home',
        _defaults: {
          title: 'Welcome',  // 👈
          type: 'welcome-page' // 👈
        },
        _children: [
            {
            slug: '/trash',
            parkedId: 'trash',
            type: '@apostrophecms/trash',
            trash: true,
            orphan: true,
            _defaults: { title: 'Trash' }
          }
        ]
      }
    ]
  },
  // ...
}
```

### `park`

Use the `park` option to add an array of pages that should be created when the app starts up if they do not already exist. Each page is added as an object with initial properties, including the required `parkedId`.

Required and recommended parked page properties include:
- `parkedId` (required): A unique ID value used to identify it among parked pages.
- `slug` (required): The page [slug](/reference/glossary.md#slug). This may be
- `type` (required): The page type to be used for the parked page.
- `title` (recommended): The page title. If not set, it will be "New Page."

If added on the top level of the page object, these properties will not be editable through the user interface. Properties other than `parkedId` may be included in a `_defaults` property instead, which will allow them to be edited in the UI.

#### Example

```javascript
// modules/@apostrophecms/page/index.js
module.exports = {
  options: {
    park: [
      // The blog page has a permanent slug, title, and type.
      {
        parkedId: 'blogParkedId',
        slug: '/blog',
        title: 'Blog',
        type: 'blog-page'
      },
      // The team page has a permanent type, but editable slug and title.
      {
        parkedId: 'teamParkedId',
        type: 'staff-page',
        _defaults: {
          slug: '/team',
          title: 'Our Team',
        }
      }
    ]
  },
  // ...
}
```

### `publicApiProjection` (for pages)

By default the built-in Apostrophe REST APIs are not accessible without proper [authentication](/reference/api/authentication.md). You can set an exception to this for `GET` requests to return specific document properties with the `publicApiProjection` option.

This should be set to an object containing individual field name keys set to `1` for their values. Those fields names included in the `publicApiProjection` object will be returned when the `GET` API requests are made without authentication.

#### Example

```javascript
// modules/@apostrophecms/page/index.js
module.exports = {
  options: {
    publicApiProjection: {
      title: 1,
      _url: 1 // 👈 Dynamic properties are allowed
    }
  },
  // ...
}
```

Unauthenticated [`GET /api/v1/@apostrophecms/page`](api/pages.md#get-api-v1-apostrophecms-page) requests would return each piece with only the `title` and `_url` properties.

### `quickCreate` (for pages)

Pages are included in the admin bar "quick create" menu by default. Setting `quickCreate: false` on the page module will disable this.

#### Example

```javascript
// modules/@apostrophecms/page/index.js
module.exports = {
  options: {
    quickCreate: false
  },
  // ...
}
```

### `types`

The `types` array defines the page types available to users when creating or editing pages. Each item in the array should have a `label` property and a `name` property, which matches an active page type. If no `types` array is set, only the core "Home" page type will be available.

[Parked pages](#park) may use page types that are not in the `types` option array. This allows developers to do things such as parking a single search page but not allowing users to create additional search pages.

#### Example

```javascript
// modules/@apostrophecms/page/index.js
module.exports = {
  options: {
    types: [
      {
        name: 'default-page',
        label: 'Default'
      },
      {
        name: 'article-page',
        label: 'Article Index'
      }
      {
        name: '@apostrophecms/home-page',
        label: 'Home'
      }
    ]
  },
  // ...
}
```

## Options for page type modules

Option settings in this section apply to all page types (modules that extend `@apostrophecms/page-type`).

| Option | Value type | Description |
|---------|---------|---------|
| [`scene`](#scene) | String | Change the "scene" for this page type from the default `'public'`. |

### `scene`

Scenes are contexts in which certain sets of front end assets are delivered. Normally, anonymous site visitors receive only the stylesheets and scripts included in the `'public'` asset scene (those that are placed in the module's `ui/public` directory). If your page will use assets, such as Apostrophe's modals, that are normally reserved for logged-in users you can set `scene: 'apos'` in order to load them with pages of this type.

#### Example

```javascript
// modules/fancy-form-page/index.js
module.exports = {
  extend: '@apostrophecms/page-type',
  options: {
    scene: 'apos'
  },
  // ...
}
```