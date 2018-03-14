# Vue Mixins Store

Vue plugin that store mixins

## Why
The Vue.mixin() function register a globally mixin that isn't the best for performance.
This plugin provides a way to register mixins, keep them in a defined store and use them when needed.


## Installation
```shell
$ npm install vue-mixins-store
```

## Usage

### Load the store
```js
import Vue from 'vue'
import VueMixinsStore from 'vue-mixins-store'
Vue.use(VueMixinsStore)
```

## Register a mixin
```js
Vue.registerMixin('myMixin', { ... })
```

## Use a registered mixin
```js
export default {
    mixins: [
        this.$mixins.myMixin
    ]
}
```