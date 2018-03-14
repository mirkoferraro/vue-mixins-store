export default {
    install(Vue, options) {

        let store = {}
    
        Vue.registerMixin = (name, mixin) => {
            store[name] = mixin
        }
    
        Vue.prototype.$mixins = store
    }
}