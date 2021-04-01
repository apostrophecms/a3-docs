# Module format example

The new A3 module format is best understood by reviewing a complete example with all of the sections. As experienced A2 developers will know, this code goes in the module's `index.js` file.

```js
// modules/product/index.js
module.exports = {

  // Inherit from this "base class" module
  extend: '@apostrophecms/piece-type',

  // Options that formerly went at top level go here
  options: {
    // Lets us write `apos.product` in other modules,
    // instead of `apos.modules.product`
    alias: 'product',
    label: 'Product',
    pluralLabel: 'Products'
  },

  // `fields` can optionally be a function that takes (self)
  // and returns an object, if you need access to the options to decide
  // what fields to include
  fields: {
    // Replaces `addFields`
    add: {
      price: {
        type: 'float',
        label: 'Price'
      },
      tax: {
        type: 'float',
        label: 'Tax'
      }
    },
    // Replaces `removeFields`. You can remove inherited fields here if desired.
    remove: [],
    // Replaces `arrangeFields`. Groups fields into tabs in the editor modal.
    group: {
      pricing: {
        label: 'Pricing',
        fields: [ 'price', 'tax' ]
      }
    }
  },

  filters: {
    add: {
      belowAverage: {
        label: 'Below Average'
      }
    }
  },

  // This is only run when Apostrophe first
  // starts up. Formerly known as `afterConstruct`.
  // Can use "await".
  async init(self) {},

  // Methods that can be invoked on `self`, or from
  // another module via our alias, `self.apos.product`.
  // `self` refers to this module.
  methods(self) {
    return {
      async averagePrice(req) {
        let sum = 0;
        const products = await self.find(req).toArray();
        if (!products.length) {
          return 0;
        }
        for (const product of products) {
          sum += product.price;
        }
        return sum / products.length;
      }
    };
  },

  // Extend methods we inherited from `@apostrophecms/piece-type`
  extendMethods(self) {
    return {
      // Extend a method we inherited from `@apostrophecms/piece-type`.
      // The arguments are the same, plus `_super` is always the
      // first argument. Calling `_super` calls the original method.
      // If you don't need to call the original method, just declare
      // the method again in `methods`.
      generate(_super, i) {
        const piece = _super(i);
        piece.price = Math.random() * 100;
        return piece;
      }
    };
  },

  // Async components. These allow us to fetch data from
  // inside any template in an SEO-friendly way
  //
  // `extendComponents` is also supported, like `extendMethods`

  components(self) {
    return {
      // Invoke from any template like this:
      // {% component 'product:latest' with { max: 1 } %}
      //
      // The returned object is passed as `data` to the
      // `views/latest.html` Nunjucks template of this module
      async latest(req, data) {
        const products = await self.find(req).sort({
          createdAt: -1
        }).limit(data.max || 5).toArray();
        return {
          products
        };
      }
    };
  },

  // Helper functions. These can be called from Nunjucks
  // templates, i.e. `{{ apos.product.discountPrice(data.product) }}`
  //
  // They may NOT be async functions. For that see async
  // components above.
  //
  // `extendHelpers` is also supported, like `extendMethods`

  helpers(self) {
    return {
      discountPrice(product) {
        return '$' + (product.price * 0.90).toFixed(2);
      }
    };
  },

  // apiRoutes lets us write Express routes that just return
  // a value or throw an exception. Exceptions are converted
  // to HTTP status codes, and returned objects and arrays
  // are sent as JSON. If you return a string it is sent
  // as HTML.
  //
  // `extendApiRoutes` is also supported, like extendMethods

  apiRoutes(self) {
    return {
      // This section contains all the `GET` routes. Also
      // supported: `post`, `patch`, `delete`
      get: {
        // Accessible via `GET` request to: /api/v1/product/cheapest
        //
        // Function names like `cheapestOne` become URLs like `cheapest-one`
        //
        // You can also use a a custom URL path starting with `/` as
        // the name of the route. If you do so, nothing is prefixed to it
        // and it is not converted to "kebab case."
        async cheapest(req) {
          const product = await self.find(req).sort({
            price: 1
          }).toObject();
          if (!product) {
            // Browser receives a 404 error
            throw self.apos.error('notfound', 'No products were found.');
          }
          // Response is a JSON object with a `product` property
          return {
            product
          };
        }
      }
    };
  },

  // Piece types already have REST APIs in A3!
  //
  // But if your module does not extend pieces, you can implement
  // your own REST API
  //
  // extendRestApiRoutes is also useful when inheriting from
  // a base class, and works just like `extendMethods`

  // restApiRoutes(self) {
  //   return {
  //     // GET /api/v1/product
  //     async getAll(req) {
  //       // Get real data from somewhere
  //       const results = [];
  //       return {
  //         results
  //       };
  //     },
  //     // GET /api/v1/product/:docId
  //     async getOne(req, _id) {
  //       // Get real data from somewhere
  //       const result = {};
  //       return result;
  //     },
  //     // PATCH /api/v1/product/:docId
  //     async patch(req, _id) {
  //       // Modify an object somewhere
  //       return {};
  //     },
  //     // PUT /api/v1/product/:docId
  //     async put(req, _id) {
  //       // Replace an object somewhere
  //       return {};
  //     },
  //     // DELETE /api/v1/product/:docId
  //     async delete(req, _id) {
  //       // Delete an object somewhere
  //       return;
  //     }
  //   };
  // },

  // Like components, `renderRoutes` invoke a Nunjucks template
  // of the same name. Unlike components, they do so in response
  // to an HTTP request, and send the rendered markup back
  // to the client

  renderRoutes(self) {
    return {
      get: {
        // Accessible via `GET` as /api/v1/product/latest
        async latest(req) {
          const products = await self.find(req).sort({
            createdAt: -1
          }).limit(self.apos.launder.integer(req.query.max) || 5).toArray();
          return {
            products
          };
        }
      }
    };
  },

  routes(self) {
    return {
      get: {
        // Old-fashioned Express route. Useful if you need
        // to directly respond via `res.redirect`, or stream a
        // response. Return value is ignored, you *must*
        // respond via `res`.
        //
        // Accessible as `/api/v1/product/redirect`
        async redirect(req, res) {
          // ... find the product in the database first, then:
          const product = {
            _url: '/pretend-url'
          };
          return res.redirect(product._url);
        }
      }
    };
  },

  // Handlers ("promise event handlers" in 2.x) let us do work in
  // response to events. `extendHandlers` is also available and
  // works just like `extendMethods`

  handlers(self) {
    return {
      // Since this event is emitted by the same module,
      // we do not have to write `'product:beforeInsert'`
      beforeInsert: {
        async applyTax(req, piece) {
          piece.totalPrice = piece.price * (1.0 + (piece.tax / 100));
        }
      },
      // This event is emitted just before the page is sent.
      // It is still available, but in 3.x you would usually
      // use an async component instead
      '@apostrophecms/page:beforeSend': {
        async attachProducts(req) {
          // Make all products available in every template all of the time
          req.data.products = await self.find(req).project({
            title: 1,
            _url: 1
          }).toArray();
        }
      },
      '@apostrophecms/piece-type:beforeInsert': {
        async beforeAnyPieceIsInserted(req, piece) {
          // This code would run when ANY piece is inserted,
          // since all piece types extend `@apostrophecms/piece-type`
          console.log('something is being inserted');
        }
      }
    };
  },

  queries(self, query) {
    return {
      builders: {
        // This builder can be used to filter products in a query
        // like this one:
        // await self.apos.product.find(req, {}).belowAverage(true).toArray();
        belowAverage: {
          // finalize is called at the time the query
          // is about to be processed by the database
          async finalize() {
            // Make sure this filter was actually invoked first
            if (query.get('belowAverage')) {
              // See method example above. `req` is available
              // as `query.req`.
              const average = await self.averagePrice(query.req);
              // Merge in more MongoDB criteria
              query.and({
                price: {
                  $lt: average
                }
              });
            }
          },
          // If you provide this, the builder can also be invoked
          // via the module's REST API as a query string parameter,
          // e.g. `?belowAverage=1`.
          launder(value) {
            return self.apos.launder.boolean(value);
          },
          choices() {
            return [
              {
                value: '0',
                label: 'No'
              },
              {
                value: '1',
                label: 'Yes'
              }
            ];
          }
        }
      }
    };
  },

  // Add standard Express middleware to be called on *every* request.
  // Usually used to import third-party middleware into Apostrophe.
  // For your own code, you will find it is usually better to write a
  // handler, or await a method if the middleware is needed in just one
  // route. `ours` could also be an object with a `before` property
  // and a `middleware` property, in which case it would run `before`
  // the middleware of the module with the specified name

  middleware(self) {
    return {
      ours(req, res, next) {
        // Restrict access by IP address, in a crude way
        const allowlist = [ '127.0.0.1', '::1' ];
        if (!allowlist.includes(req.connection.remoteAddress)) {
          return res.status(403).send('forbidden');
        }
        return next();
      }
    };
  },

  tasks(self) {
    return {
      // If the module is named product, then you can
      // run this CLI task by typing:
      //
      // node app product:list
      list: {
        usage: 'List the titles of all pieces of this type.',
        async task(argv) {
          // Get an req object with admin privileges.
          // You can also use getAnonReq
          const req = self.apos.task.getReq();
          const pieces = await self.find(req).toArray();
          for (const piece of pieces) {
            console.log(piece.title);
          }
        }
      }
    }
  },

  // Make SVG icons available for UI configuration if not already included
  // in core. Icons must be available through the Material Design Icons (MDI)
  // package: https://www.npmjs.com/package/@mdi/svg.
  // These are configured as:
  // 'reference-name-for-apostrophe': 'MaterialDesignIconsName'.
  // The example below lets this and other modules use the MDI icon "AirHorn"
  // using the keyword, `airhorn`.

  icons: {
    'airhorn': 'AirHorn'
  }

};
```

## Breaking up modules into multiple files

This is sometimes done in A2 to keep the file manageable in size. You can do the same trick in A3, breaking the module down into its sections:

```js
// modules/product/index.js
module.exports = {
  // ...
  methods: require('./methods.js'),
  apiRoutes: require('./api-routes.js')
};
```

```js
// modules/product/methods.js
module.exports = (self) => {
  return {
    async averagePrice(req) {
      // ...
    }
  };
};
```

```js
// modules/product/api-routes.js
module.exports = (self) => {
  return {
    get: {
      async cheapest(req) {
        ...
      }
    }
  };
}
```
