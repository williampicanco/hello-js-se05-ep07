// main.js
//const foo = require("./mymodule1")
//const bar = require("./anothermodule").bar

//foo(2)
//console.log(bar(3))

//alert("hello from browserify")
require("./main.css")

const routes = require('./routes')
const Vue = require("vue")
const VueRouter = require("vue-router")
const VueMaterial = require("vue-material")

Vue.use(VueRouter)
Vue.use(VueMaterial)

Vue.component("hello-vue", require("./hello.vue"))

new Vue({
  el: "#mountpoint",
  router: new VueRouter(router),
  render: r => r(require("./spa.vue"))
})