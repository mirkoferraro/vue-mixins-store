export default {
    install(Vue, options) {

        let store = {}
        let oldMixinFunction = Vue.mixin
        
        Vue.mixin = (arg1, arg2) => {
            if ('string' === typeof arg1) {
                store[arg1] = arg2
            } else {
                oldMixinFunction.apply(Vue, [arg1])
            }
        }
    
        Vue.$mixins = store
    }
}