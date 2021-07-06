# Page type REST endpoints

All [page types](/reference/glossary.md#page) use a single set of API endpoints, unlike piece types.

## Endpoints

[Authentication](/reference/api/authentication.md) is required for all REST API requests.

### REST endpoints

| Method | Path | Description |
|---------|---------|---------|
|`GET` | [`/api/v1/@apostrophecms/page` ](#get-api-v1-apostrophecms-page)| Fetch the home page and all other pages structured in the home page's `_children` property |
|`GET` | [`/api/v1/@apostrophecms/page/:_id`](#get-api-v1-apostrophecms-page-id) | Fetch a single page with a specified ID |
|`POST` | [`/api/v1/@apostrophecms/page`](#post-api-v1-apostrophecms-page) | Insert a new page |
|`PUT` | [`/api/v1/@apostrophecms/page/:_id`](#put-api-v1-apostrophecms-page-id) | Fully replace a specific page database document |
|`PATCH` | [`/api/v1/@apostrophecms/page/:_id`](#patch-api-v1-apostrophecms-page-id) | Update only certain fields on a specific page |
|`DELETE` | [`/api/v1/@apostrophecms/page/:_id`](#delete-api-v1-apostrophecms-page-id) | **Permanently deletes a page document** |


### Additional page endpoints

| Method | Path | Description |
|---------|---------|---------|---------|
|`GET` | [`/:_url?aposRefresh=1`](#get-url-aposrefresh-1) | Get a page's rendered content |
|`POST` | [`/api/v1/@apostrophecms/page/:_id/publish`](#post-api-v1-apostrophecms-page-id-publish) | Publish the draft version of a page |

<!-- TODO: document -->
<!-- |GET | [`/api/v1/@apostrophecms/page/:_id?locales=1`](#get-api-v1-apostrophecms-page-id-locales-1) | Request the available locales for a specific page |
|POST | [`/api/v1/@apostrophecms/page/:_id/export`](#post-api-v1-apostrophecms-page-id-export) | Copy a page from one locale to another |
|POST | [`/api/v1/@apostrophecms/page/:_id/revert-draft-to-published`](#post-api-v1-apostrophecms-page-id-revert-draft-to-published) | Revert a draft page to the the state of the published version, if available |
|POST | [`/api/v1/@apostrophecms/page/:_id/revert-published-to-previous`](#post-api-v1-apostrophecms-page-id-revert-published-to-previous) | Revert a published page to the previous version, if available |
|POST | [`/api/v1/@apostrophecms/page/:_id/unpublish`](#post-api-v1-apostrophecms-page-id-unpublish) | Unpublish the published version of a page | -->


## `GET /api/v1/@apostrophecms/page`

### Query parameters

| Parameter | Example | Description |
|----------|------|-------------|
|`all` | `?all=1` | Set to `1` to include the *entire* page tree, regardless of depth |
|`flat` | `?flat=1` | Set to `1` to [return page results in an flat array](#flat-array-response) instead of the page tree structure |
|`children` | `?children=false` | Set to `false` to exclude the `_children` array` |
|`apos-mode` | `?apos-mode=draft` | Set to `draft` to request the draft version of page documents instead of the current published versions. Set to `published` or leave it off to get the published version. Authentication is required to get drafts. |
|`apos-locale` | `?apos-locale=fr` | Set to a valid locale to request page document versions for that locale. Defaults to the default locale. |
<!-- TODO: link to docs about locales when available. -->

### Request example

```javascript
// Request inside an async function.
const response = await fetch('http://example.net/api/v1/@apostrophecms/page?apikey=myapikey', {
  method: 'GET'
});
const document = await response.json();
```

### Page tree response (default)

Pages' relationship to one another is a critical feature. For that reason, by default the `GET` request for multiple pages returns the home page as a JSON object, including a `_children` array property. That array contains the "top level" pages.

```json
{
    "_id": "ckhdscx5900054z9k88uqs16w",
    "orphan": false,
    "visibility": "public",
    "type": "@apostrophecms/home-page",
    "title": "Home Page",
    "slug": "/",
    "parkedId": "home",
    "rank": 0,
    "level": 0,
    // ... additional properties
    "_url": "http://localhost:3000/",
    "_ancestors": [],
    // Child pages 👇
    "_children": [
        {
            "_id": "ckhfen8ls0005mq9k8p9izkjt",
            "visibility": "public",
            "orphan": false,
            "type": "article-page",
            "title": "Blog",
            "slug": "/blog",
            // ...
            "_url": "http://localhost:3000/blog",
            "_children": []
        },
        {
            "_id": "ckhurshqd00088v9k6pfnqpjz",
            "visibility": "public",
            "orphan": false,
            "type": "default-page",
            "title": "About us",
            "slug": "/about-us",
            // ...
            "_url": "http://localhost:3000/about-us",
            "_children": []
        }
    ]
}
```

### Flat array response

| Property | Type | Description |
|----------|------|-------------|
|`results` | Array | An array of page documents|

Individual page objects will include `_children` and `_ancestor` arrays, as well as the `rank` and `level` properties to indicate position in the page tree.

```json
{
  "results": [
    {
      "_id": "ckhdscx5900054z9k88uqs16w",
      "orphan": false,
      "visibility": "public",
      "type": "@apostrophecms/home-page",
      "title": "Home Pager",
      "slug": "/",
      "rank": 0,
      "level": 0,
      "path": "ckhdscx5900054z9k88uqs16w",
      // ...
      "_url": "http://localhost:3000/",
      "_ancestors": [],
      "_children": [
        "ckhfen8ls0005mq9k8p9izkjt",
        "ckhurshqd00088v9k6pfnqpjz",
        "ckhdscx6000084z9k56lybljw"
      ]
      },
    {
      "_id": "ckhfen8ls0005mq9k8p9izkjt",
      "visibility": "public",
      "type": "article-page",
      "title": "Blog",
      "slug": "/blog",
      "rank": 0,
      "path": "ckhdscx5900054z9k88uqs16w/ckhfen8ls0005mq9k8p9izkjt",
      "level": 1,
      // ...
      "_url": "http://localhost:3000/blog",
      "_children": []
    },
    {
      "_id": "ckhurshqd00088v9k6pfnqpjz",
      "visibility": "public",
      "type": "default-page",
      "title": "About us",
      "slug": "/about-us",
      "rank": 1,
      "path": "ckhdscx5900054z9k88uqs16w/ckhurshqd00088v9k6pfnqpjz",
      "level": 1,
      // ...
      "_url": "http://localhost:3000/about-us",
      "_children": [
        "ckiz0pmsg006gdr9ker7e99yt",
        "ckiz0pyym0070dr9kv8hzm7y0"
      ]
    },
    {
      "_id": "ckiz0pmsg006gdr9ker7e99yt",
      "visibility": "public",
      "type": "default-page",
      "title": "Our history",
      "slug": "/about-us/our-history",
      "rank": 0,
      "path": "ckhdscx5900054z9k88uqs16w/ckhurshqd00088v9k6pfnqpjz/ckiz0pmsg006gdr9ker7e99yt",
      "level": 2,
      // ...
      "_url": "http://localhost:3000/about-us/our-history",
      "_children": []
    },
    {
      "_id": "ckiz0pyym0070dr9kv8hzm7y0",
      "visibility": "public",
      "type": "default-page",
      "title": "Leadership and staff",
      "slug": "/about-us/leadership-and-staff",
      "rank": 1,
      "path": "ckhdscx5900054z9k88uqs16w/ckhurshqd00088v9k6pfnqpjz/ckiz0pyym0070dr9kv8hzm7y0",
      "level": 2,
      // ...
      "_url": "http://localhost:3000/about-us/leadership-and-staff",
      "_children": []
    },
    {
      "_id": "ckhdscx6000084z9k56lybljw",
      "visibility": "public",
      "type": "@apostrophecms/archive-page",
      "title": "Archive",
      "slug": "/archive",
      // ...
      "rank": 3,
      "path": "ckhdscx5900054z9k88uqs16w/ckhdscx6000084z9k56lybljw",
      "level": 1,
      "_children": []
    }
  ]
}
```

## `GET /api/v1/@apostrophecms/page/:_id`

### Query parameters

| Parameter | Example | Description |
|----------|------|-------------|
|`apos-mode` | `?apos-mode=draft` | Set to `draft` or `published` to request a specific mode version of the page. Authentication is required to get drafts. |
|`apos-locale` | `?apos-locale=fr` | Set to a valid locale to request the page document version for that locale. |
<!-- TODO: link to docs about locales when available. -->

Read more about [mode and locale parameters on single-document requests](/guide/rest-apis#locale-and-mode-in-single-document-requests).

### Request example

```javascript
// Request inside an async function.
const response = await fetch('http://example.net/api/v1/@apostrophecms/page/ckitdo5oq004pu69kr6oxo6fr:en:published?apikey=myapikey', {
  method: 'GET'
});
const document = await response.json();
```

### Response

The successful `GET` request returns the matching document. See the [page document response example](#page-document-response-example) below for a sample response body. In case of an error an appropriate HTTP status code is returned.

## `POST /api/v1/@apostrophecms/page`

### Required properties

| Property | Type | Description |
|----------|------|-------------|
|`_targetId` | String | The `_id` of an existing page to use as a target when inserting the new page. `_home` and `_archive` are optional conveniences for the home page and [archived section](#moving-pages-to-the-archive), respectively. |
|`_position` | String, Number | A numeric value will represent the zero-based child index under the `_targetId` page. `before`, `after`, `firstChild`, or `lastChild` values set the position within the page tree for the new page in relation to the target page (see `_targetId`). `before` and `after` insert the new page as a sibling of the target. `firstChild` and `lastChild` insert the new page as a child of the target. |

The `_position` property uses specific string values rather than index numbers to better support the draft review workflow.

### Query parameters

| Parameter | Example | Description |
|----------|------|-------------|
|`apos-mode` | `?apos-mode=draft` | Set to `draft` to insert a page as a draft instead of immediately published. Set to `published` or leave it off to insert a published page. |
|`apos-locale` | `?apos-locale=fr` | Set to a valid locale to request page document versions for that locale. Defaults to the default locale. |
<!-- TODO: link to docs about locales when available. -->

### Request example

```javascript
// Object with, at a minimum, properties for each required piece field.
const data = {
  title: 'My great new article',
  // Content properties, e.g., `category`, `mainContent`
  _targetId: 'ckhdscx5900054z9k88uqs16w',
  _position: 'firstChild'
};
// Request inside an async function.
const response = await fetch('http://example.net/api/v1/@apostrophecms/page?apikey=myapikey', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
});
const document = await response.json();
```

### Response

The successful `POST` request returns the newly created document. See the [page document response example](#page-document-response-example) below for a sample response body. In case of an error an appropriate HTTP status code is returned.

## `PUT /api/v1/@apostrophecms/page/:_id`

### Required properties

| Property | Type | Description |
|----------|------|-------------|
|`_targetId` | String | The `_id` of an existing page to use as a target when inserting the new page|
|`_position` | String | `before`, `after`, `firstChild`, or `lastChild`. This sets the position within the page tree for the new page in relation to the target page (see `_targetId`). `before` and `after` insert the new page as a sibling of the target. `firstChild` and `lastChild` insert the new page as a child of the target.|

The `_position` property uses specific string values rather than index numbers to better support the draft review workflow.

### Query parameters

| Parameter | Example | Description |
|----------|------|-------------|
|`apos-mode` | `?apos-mode=draft` | Set to `draft` or `published` to replace a specific mode version of the page. |
|`apos-locale` | `?apos-locale=fr` | Set to a valid locale to replace the page document version for that locale. |
|`render-areas` | `?render-areas=true` | Replaces area `items` data with a `_rendered` property set to a string of HTML based on widget templates. |
<!-- TODO: link to docs about locales when available. -->

Read more about [mode and locale parameters on single-document requests](/guide/rest-apis#locale-and-mode-in-single-document-requests).

### Request example

```javascript
// Object with, at a minimum, properties for each required piece field.
const data = {
  title: 'My great new article',
  // Content properties, e.g., `category`, `mainContent`
  _targetId: 'ckhdscx5900054z9k88uqs16w',
  _position: 'lastChild'
};
// Request inside an async function.
const response = await fetch('http://example.net/api/v1/@apostrophecms/page/ckitdo5oq004pu69kr6oxo6fr:en:published?apikey=myapikey', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
});
const document = await response.json();
```

### Response

The successful `PUT` request returns the newly created document. See the [page document response example](#page-document-response-example) below for a sample response body. In case of an error an appropriate HTTP status code is returned.

## `PATCH /api/v1/@apostrophecms/page/:_id`

### Query parameters

| Parameter | Example | Description |
|----------|------|-------------|
|`apos-mode` | `?apos-mode=draft` | Set to `draft` or `published` to update a specific mode version of the page. |
|`apos-locale` | `?apos-locale=fr` | Set to a valid locale to update the page document version for that locale. |
<!-- TODO: link to docs about locales when available. -->

If moving a page within the page tree, the `PATCH`request must include *both* `_targetId` and `_position` as described in the [POST request description](#post-api-v1-apostrophecms-page).

If a `PATCH` operation is attempted in the published mode, the changes in the patch are applied to both the draft and the current document, but properties of the draft not mentioned in the patch are not published. This is to prevent unexpected outcomes.

Read more about [mode and locale parameters on single-document requests](/guide/rest-apis#locale-and-mode-in-single-document-requests).

### Request example

```javascript
// Object with *only* the document fields to overwrite.
// This example only changes the page's title to "Organization history."
const data = {
  title: 'Organization history'
};
// Request inside an async function.
const response = await fetch('http://example.net/api/v1/@apostrophecms/page/ckitdo5oq004pu69kr6oxo6fr:en:published?apikey=myapikey', {
  method: 'PATCH',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
});
const document = await response.json();
```

### MongoDB-style requests

The `PATCH` request body may use MongoDB-style operators. For example, you may use dot or "at" notation to update a nested property:

```json
{
  // Via "dot notation"
  "description.items.0.content": "<p>Update only the rich text.</p>",
  // Same thing via "@ notation," which finds the nested item with that _id
  "@ckgwegpfw00033h5xqlfb74nk.content": "<p>Update only the rich text.</p>"
}
```

### Response

The successful `PATCH` request returns the complete patched document. See the [page document response example](#page-document-response-example) below for a sample response body. In case of an error an appropriate HTTP status code is returned.

### Moving pages to the archive

The archive is part of the overall page tree in order to maintain the nesting structure. As such, there is not only a simple `archived` property to set `true`. Instead, set `_targetId` to `_archive` and `_position` to `lastChild` (or another position within the archive). You may similarly move pages out of the archive by moving them to a position relative to another page that is not in the archive.

## `DELETE /api/v1/@apostrophecms/page/:_id`


**Authentication required.**

This API route **Permanently deletes the page database document**. Moving pieces to the archive in the Apostrophe user interface or [using a `PATCH` request](#moving-pages-to-the-archive) do not permanently delete database documents and should be considered.

`DELETE` requests will be rejected if:
- the `_id` matches the draft mode of a page that has an existing published mode document
- the `_id` matches the home page (`slug: '/'`)
- the `_id` matches a page that has sub-pages, or "children," in the page tree structure. You must delete child pages first

### Query parameters

| Parameter | Example | Description |
|----------|------|-------------|
|`apos-mode` | `?apos-mode=draft` | Set to `draft` or `published` to delete a specific mode version of the piece. |
|`apos-locale` | `?apos-locale=fr` | Set to [a valid locale](#TODO) to delete the piece document version for that locale. |

Read more about [mode and locale parameters on single-document requests](/guide/rest-apis#locale-and-mode-in-single-document-requests).

### Request example

```javascript
// Request inside an async function.
await fetch('http://example.net/api/v1/@apostrophecms/page/ckitdo5oq004pu69kr6oxo6fr:en:published?apikey=myapikey', {
  method: 'DELETE'
});
```

### Response

The successful `DELETE` request simply responds with a `200` HTTP response status code. In case of an error an appropriate HTTP status code is returned. If the error is due to one of the rejection cases documented above, a message will be included to that effect, such as:

```
{
  "name": "invalid",
  "data": {},
  "message": "You must delete the children of this page first."
}
```

## `GET /:_url?aposRefresh=1`

Including the `aposRefresh=1` query parameter value on an Apostrophe page URL returns the rendered HTML from the `refreshLayout.html` template, which excludes the wrapping markup from the `outerLayoutBase.html` template file outside of the `[data-apos-refreshable]` element. Apostrophe UI uses this parameter to refresh content during editing.

Authentication is not required for this API route if `:_url` is a public URL.

**We do not recommend making edits to `refreshLayout.html` for the sake of API requests as this template is critical to normal content editing.**
<!-- TODO: Add and link to a how-to/guide/recipe about an alternative way to
customize the response template (e.g., using a custom query param and looking
for that on `data.query` in the template. We're not documenting alternative
options to customizing the response template here since this is the reference
section, not a how-to. -->

Specifically, the Nunjucks template blocks included in this rendered markup by default include:
-  the `beforeMain`, `mainAnchor`, `main`
, `afterMain` template blocks
<!-- TODO: Document the insertion mechanism in the component section. -->
- [template components](/guide/async-components) prepended and appended to the `main` block

The most critical element that is *excluded* is the `head` tag, with all of its stylesheet and script tags.

### Request example

```javascript
// Request inside an async function.
const response = await fetch('http://example.net/some-page?aposRefresh=1', {
  method: 'GET'
});
const document = await response.text();
```

### Response

Returns the a string of rendered HTML for the requested page.

## `POST /api/v1/@apostrophecms/page/:_id/publish`

Publish an existing `draft` mode document in a document set.

The `:_id` segement of the route should be one of the following:
- The `_id` property of the draft page document to be published
- The `_id` property of the published page document to be replaced by the current `draft` version
- The `aposDocId` property of the pages in the document set

The `body` of the request is ignored.

### Query parameters

| Parameter | Example | Description |
|----------|------|-------------|
|`apos-locale` | `?apos-locale=fr` | Identify a valid locale to publish the draft for that locale. Defaults to the locale of the `_id` in the request or the default locale. |
<!-- TODO: link to docs about locales when available. -->

### Request example

```javascript
// Request inside an async function.
const response = await fetch('http://example.net/api/v1/@apostrophecms/page/ckhdscx5900054z9k88uqs16w:en:draft/publish?apikey=myapikey', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  }
});
const document = await response.json();
```

### Response

The successful `POST` request returns the newly published document. See the [page document response example](#page-document-response-example) below for a sample response body. In case of an error an appropriate HTTP status code is returned.

## Page document response example

### Common properties

| Property | Format | Description |
|----------|------|-------------|
|`_ancestors` | Array | An array of `_id` strings for the page's ancestors in the page tree |
|`_children` | Array | An array of `_id` strings for the page's children in the page tree |
|`_id` | String | A unique and permanent ID for the document|
|`_url` | String | The page's URL, including the domain if a `baseUrl` is set on the site |
|`createdAt` | Date | An [ISO date string](https://en.wikipedia.org/wiki/ISO_8601) of the document's creation date and time|
|`historicUrls` | Array | An array of former `_url` values for the page. These will redirect to the page. URLs will be removed as other pages claim them. |
|`level` | Number | The page tree tier for the page. The home page is `0`, its children are `1`, and so on.  |
|`orphan` | Boolean | `true` if the page has been configured to not be included in standard `_children` properties (usually to exclude from navigation)  |
|`path` | String | A string of page `_id` values, separated by forward slashes (`/`), representing the page's ancestor path |
|`slug`| String | A unique, but changeable, identifier for the page|
|`rank` | Number | The order in which the page appears in the page tree under its parent. The first child page among its siblings will be `0`. |
|`title` | String | The entered title, or name, of the *document*|
|`archived` | Boolean | Whether the document is archived|
|`type` | String | The piece type name|
|`updatedAt` | Date | An [ISO date string](https://en.wikipedia.org/wiki/ISO_8601) of the document's last update date and time|
|`visibility` | String | The visibility setting, controlling public availability|
|Content properties | Variable | Additional properties specific to the piece type and its fields|

**TODO:** Link to examples of each field's response format.

### Example

```json
{
    "_id": "ckhurshqd00088v9k6pfnqpjz",
    "visibility": "public",
    "orphan": false,
    "type": "default-page",
    "title": "About us",
    "slug": "/about-us",
    "rank": 1,
    "path": "ckhdscx5900054z9k88uqs16w/ckhurshqd00088v9k6pfnqpjz",
    "level": 1,
    "metaType": "doc",
    "createdAt": "2020-11-23T16:34:05.894Z",
    "archived": false,
    "titleSortified": "about us",
    "updatedAt": "2020-12-21T20:34:02.636Z",
    "historicUrls": [
        "/tags"
    ],
    "intro": {
        "metaType": "area",
        "_id": "ckhurshsn000b8v9kxhnnsrof",
        "items": [],
        "_edit": true,
        "_docId": "ckhurshqd00088v9k6pfnqpjz"
    },
    "main": {
        "_id": "ckhuu2q2w00012a69tk7hw9m6",
        "items": [
            {
                "_id": "ckiz0oqln000i2a68sr1liirc",
                "metaType": "widget",
                "type": "@apostrophecms/rich-text",
                "content": "<p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</p><p><br /></p>",
                "_edit": true,
                "_docId": "ckhurshqd00088v9k6pfnqpjz"
            }
        ],
        "metaType": "area",
        "_edit": true,
        "_docId": "ckhurshqd00088v9k6pfnqpjz"
    },
    "updatedBy": {
        "_id": "ckhdsd0hk0003509kchzbdl83",
        "firstName": "Super",
        "lastName": "Admin",
        "username": "admin"
    },
    "_edit": true,
    "_url": "https://example.net/about-us",
    "_ancestors": [
        {
            "_id": "ckhdscx5900054z9k88uqs16w",
            "orphan": false,
            "visibility": "public",
            "type": "@apostrophecms/home-page",
            "title": "Home Pager",
            "slug": "/",
            "parkedId": "home",
            "parked": [
                "slug",
                "parkedId",
                "_children"
            ],
            "rank": 0,
            "level": 0,
            "path": "ckhdscx5900054z9k88uqs16w",
            "metaType": "doc",
            "createdAt": "2020-11-11T19:17:53.998Z",
            "archived": false,
            "titleSortified": "home pager",
            "updatedAt": "2020-12-21T20:37:56.066Z",
            "historicUrls": [
                "/"
            ],
            "main": {
                "_id": "ckhdsdhlk0005fv9k2a865nnh",
                "items": [
                    {
                        "_id": "cki7skym100052a69651avehi",
                        "metaType": "widget",
                        "type": "@apostrophecms/rich-text",
                        "content": "<p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Etiam porta sem malesuada magna mollis euismod. Fusce dapidbus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.asdf</p><p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Donec id elit non mi porta gravida at eget metus. Donec ullamcorpesadfasdfr nulla non metus auctor fringilla. Donec ullamcorper nulla non metus auctor fringilla. Donec id elit non mi porta gravida at eget metus. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p>"
                    }
                ],
                "metaType": "area"
            },
            "published": true,
            "updatedBy": {
                "_id": "ckhdsd0hk0003509kchzbdl83",
                "firstName": "Super",
                "lastName": "Admin",
                "username": "admin"
            },
            "_edit": true,
            "_url": "https://example.net/"
        }
    ],
    "_children": [
        {
            "_id": "ckiz0pmsg006gdr9ker7e99yt",
            "visibility": "public",
            "orphan": false,
            "type": "default-page",
            "title": "Our history",
            "slug": "/about-us/our-history",
            "rank": 0,
            "path": "ckhdscx5900054z9k88uqs16w/ckhurshqd00088v9k6pfnqpjz/ckiz0pmsg006gdr9ker7e99yt",
            "level": 2,
            "metaType": "doc",
            "createdAt": "2020-12-21T20:34:36.065Z",
            "titleSortified": "our history",
            "updatedAt": "2020-12-21T20:34:42.605Z",
            "updatedBy": {
                "_id": "ckhdsd0hk0003509kchzbdl83",
                "firstName": "Super",
                "lastName": "Admin",
                "username": "admin"
            },

            "historicUrls": [
                "/our-history",
                "/about-us/our-history"
            ],
            "_edit": true,
            "_url": "https://example.net/about-us/our-history",
            "_children": []
        },
        {
            "_id": "ckiz0pyym0070dr9kv8hzm7y0",
            "visibility": "public",
            "orphan": false,
            "type": "default-page",
            "title": "Leadership and staff",
            "slug": "/about-us/leadership-and-staff",
            "main": {
                "_id": "ckiz0py60000f2a68mizfqogd",
                "items": [],
                "metaType": "area"
            },
            "rank": 1,
            "path": "ckhdscx5900054z9k88uqs16w/ckhurshqd00088v9k6pfnqpjz/ckiz0pyym0070dr9kv8hzm7y0",
            "level": 2,
            "metaType": "doc",
            "createdAt": "2020-12-21T20:34:51.838Z",
            "titleSortified": "leadership and staff",
            "updatedAt": "2020-12-21T20:35:53.239Z",
            "updatedBy": {
                "_id": "ckhdsd0hk0003509kchzbdl83",
                "firstName": "Super",
                "lastName": "Admin",
                "username": "admin"
            },
            "historicUrls": [
                "/about-us/our-history/new-page"
            ],
            "_edit": true,
            "_url": "https://example.net/about-us/leadership-and-staff",
            "_children": []
        }
    ]
}
```