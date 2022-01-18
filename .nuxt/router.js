import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6a081565 = () => interopDefault(import('..\\pages\\admin.vue' /* webpackChunkName: "pages/admin" */))
const _413db971 = () => interopDefault(import('..\\pages\\blog-details.vue' /* webpackChunkName: "pages/blog-details" */))
const _713c2715 = () => interopDefault(import('..\\pages\\blog-one.vue' /* webpackChunkName: "pages/blog-one" */))
const _143826fa = () => interopDefault(import('..\\pages\\cart.vue' /* webpackChunkName: "pages/cart" */))
const _0bb0294c = () => interopDefault(import('..\\pages\\categories\\index.vue' /* webpackChunkName: "pages/categories/index" */))
const _7eb90520 = () => interopDefault(import('..\\pages\\checkout.vue' /* webpackChunkName: "pages/checkout" */))
const _66be9e36 = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact" */))
const _c49f528e = () => interopDefault(import('..\\pages\\diction-three.vue' /* webpackChunkName: "pages/diction-three" */))
const _2f9bf127 = () => interopDefault(import('..\\pages\\diction-two.vue' /* webpackChunkName: "pages/diction-two" */))
const _23208f01 = () => interopDefault(import('..\\pages\\gallery-one.vue' /* webpackChunkName: "pages/gallery-one" */))
const _0240647f = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _650e4a3e = () => interopDefault(import('..\\pages\\products.vue' /* webpackChunkName: "pages/products" */))
const _dbb3cf1c = () => interopDefault(import('..\\pages\\signup.vue' /* webpackChunkName: "pages/signup" */))
const _482a0062 = () => interopDefault(import('..\\pages\\latest-products\\Index.vue' /* webpackChunkName: "pages/latest-products/Index" */))
const _5e325a2c = () => interopDefault(import('..\\pages\\categories\\sous_category\\_sousCategory.vue' /* webpackChunkName: "pages/categories/sous_category/_sousCategory" */))
const _7f900eb4 = () => interopDefault(import('..\\pages\\categories\\_id.vue' /* webpackChunkName: "pages/categories/_id" */))
const _cb2fc92c = () => interopDefault(import('..\\pages\\latest-products\\_id.vue' /* webpackChunkName: "pages/latest-products/_id" */))
const _3898c168 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/admin",
    component: _6a081565,
    name: "admin"
  }, {
    path: "/blog-details",
    component: _413db971,
    name: "blog-details"
  }, {
    path: "/blog-one",
    component: _713c2715,
    name: "blog-one"
  }, {
    path: "/cart",
    component: _143826fa,
    name: "cart"
  }, {
    path: "/categories",
    component: _0bb0294c,
    name: "categories"
  }, {
    path: "/checkout",
    component: _7eb90520,
    name: "checkout"
  }, {
    path: "/contact",
    component: _66be9e36,
    name: "contact"
  }, {
    path: "/diction-three",
    component: _c49f528e,
    name: "diction-three"
  }, {
    path: "/diction-two",
    component: _2f9bf127,
    name: "diction-two"
  }, {
    path: "/gallery-one",
    component: _23208f01,
    name: "gallery-one"
  }, {
    path: "/login",
    component: _0240647f,
    name: "login"
  }, {
    path: "/products",
    component: _650e4a3e,
    name: "products"
  }, {
    path: "/signup",
    component: _dbb3cf1c,
    name: "signup"
  }, {
    path: "/latest-products/Index",
    component: _482a0062,
    name: "latest-products-Index"
  }, {
    path: "/categories/sous_category/:sousCategory?",
    component: _5e325a2c,
    name: "categories-sous_category-sousCategory"
  }, {
    path: "/categories/:id",
    component: _7f900eb4,
    name: "categories-id"
  }, {
    path: "/latest-products/:id?",
    component: _cb2fc92c,
    name: "latest-products-id"
  }, {
    path: "/",
    component: _3898c168,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
