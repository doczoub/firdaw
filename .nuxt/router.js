import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6d6667a6 = () => interopDefault(import('..\\pages\\admin.vue' /* webpackChunkName: "pages/admin" */))
const _4ea8e7e0 = () => interopDefault(import('..\\pages\\blog-details.vue' /* webpackChunkName: "pages/blog-details" */))
const _6e822134 = () => interopDefault(import('..\\pages\\blog-one.vue' /* webpackChunkName: "pages/blog-one" */))
const _1c960899 = () => interopDefault(import('..\\pages\\cart.vue' /* webpackChunkName: "pages/cart" */))
const _7968220d = () => interopDefault(import('..\\pages\\categories\\index.vue' /* webpackChunkName: "pages/categories/index" */))
const _7bfeff3f = () => interopDefault(import('..\\pages\\checkout.vue' /* webpackChunkName: "pages/checkout" */))
const _0bd16437 = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact" */))
const _1806500c = () => interopDefault(import('..\\pages\\diction-three.vue' /* webpackChunkName: "pages/diction-three" */))
const _3c2c62b0 = () => interopDefault(import('..\\pages\\diction-two.vue' /* webpackChunkName: "pages/diction-two" */))
const _552326fc = () => interopDefault(import('..\\pages\\gallery-one.vue' /* webpackChunkName: "pages/gallery-one" */))
const _059eb6c0 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _6254445d = () => interopDefault(import('..\\pages\\products.vue' /* webpackChunkName: "pages/products" */))
const _0adbe35e = () => interopDefault(import('..\\pages\\signup.vue' /* webpackChunkName: "pages/signup" */))
const _50045841 = () => interopDefault(import('..\\pages\\latest-products\\Index.vue' /* webpackChunkName: "pages/latest-products/Index" */))
const _74c143b5 = () => interopDefault(import('..\\pages\\categories\\_id.vue' /* webpackChunkName: "pages/categories/_id" */))
const _a33641ee = () => interopDefault(import('..\\pages\\latest-products\\_id.vue' /* webpackChunkName: "pages/latest-products/_id" */))
const _3bf713a9 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _6d6667a6,
    name: "admin"
  }, {
    path: "/blog-details",
    component: _4ea8e7e0,
    name: "blog-details"
  }, {
    path: "/blog-one",
    component: _6e822134,
    name: "blog-one"
  }, {
    path: "/cart",
    component: _1c960899,
    name: "cart"
  }, {
    path: "/categories",
    component: _7968220d,
    name: "categories"
  }, {
    path: "/checkout",
    component: _7bfeff3f,
    name: "checkout"
  }, {
    path: "/contact",
    component: _0bd16437,
    name: "contact"
  }, {
    path: "/diction-three",
    component: _1806500c,
    name: "diction-three"
  }, {
    path: "/diction-two",
    component: _3c2c62b0,
    name: "diction-two"
  }, {
    path: "/gallery-one",
    component: _552326fc,
    name: "gallery-one"
  }, {
    path: "/login",
    component: _059eb6c0,
    name: "login"
  }, {
    path: "/products",
    component: _6254445d,
    name: "products"
  }, {
    path: "/signup",
    component: _0adbe35e,
    name: "signup"
  }, {
    path: "/latest-products/Index",
    component: _50045841,
    name: "latest-products-Index"
  }, {
    path: "/categories/:id",
    component: _74c143b5,
    name: "categories-id"
  }, {
    path: "/latest-products/:id?",
    component: _a33641ee,
    name: "latest-products-id"
  }, {
    path: "/",
    component: _3bf713a9,
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
