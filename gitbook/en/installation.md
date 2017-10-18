# Installation

### Direct Download / CDN

https://unpkg.com/vue-browserstore/dist/vue-browserstore

[unpkg.com](https://unpkg.com) provides NPM-based CDN links. The above link will always point to the latest release on NPM. You can also use a specific version/tag via URLs like https://unpkg.com/vue-browserstore@0.1.0/dist/vue-browserstore.js
 
Include vue-browserstore after Vue and it will install itself automatically:

```html
<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/vue-browserstore/dist/vue-browserstore.js"></script>
```

### NPM

    $ npm install vue-browserstore

### Yarn

    $ yarn add vue-browserstore

When used with a module system, you must explicitly install the `vue-browserstore` via `Vue.use()`:

```javascript
import Vue from 'vue'
import VueBrowserstore from 'vue-browserstore'

Vue.use(VueBrowserstore)
```

You don't need to do this when using global script tags.

### Dev Build

You will have to clone directly from GitHub and build `vue-browserstore` yourself if
you want to use the latest dev build.

    $ git clone https://github.com/gvost/vue-browserstore.git node_modules/vue-browserstore
    $ cd node_modules/vue-browserstore
    $ npm install
    $ npm run build
