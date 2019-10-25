import Vue from 'vue'

//to uppercase
Vue.filter('uppercase', function(v) {
    return v.toUpperCase()
})

//reverse
Vue.filter('reverse', function(v) {
    return v
        .split('')
        .reverse()
        .join('')
})

// shorten text
Vue.filter('shorten', function(value, textLenght, synt) {
    return value.substring(0, textLenght) + synt
})
