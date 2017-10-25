### VueBrowserstore Usage
*It's so easy!*

##### Installation
```sh
$ npm install -S vue-browserstore
```

##### In your main Vue file...

```js
import Vue from 'vue'
import VueBrowserstore from 'vue-browserstore'

Vue.use(VueBrowserstore)
```

##### *Methods*

> call methods with standard VueJS plugin convention `Vue.$browserStore` or `this.$browserStore` or `vm.$browserStore`

###### `local()`
takes no arguments  
returns localStorage object

###### `session()`
takes no arguments  
returns sessionStorage Object

###### `setLocal(key: string, val: any)`
takes two arguments (string, any)  
returns true
###### `setSession(key: string, val: any)`
takes two arguments (string, any)  
returns true
###### `getLocal(key: string)`
takes single argument (string)  
returns value from entry
###### `getSession(key: string)`  
takes single argument (string)  
returns value from entry
###### `removeLocal(key: string)`
takes single argument (string)  
returns true
###### `removeSession(key: string)`
takes single argument (string)  
returns true
###### `clearLocal()`
takes no arguments  
returns true
###### `clearSession()`
takes no arguments   
returns true
###### `getBrowserState()`  
returns browser state Object created within Vue context
