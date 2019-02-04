
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'battery', component: () => import('pages/Battery.vue') },
      { path: 'camera', component: () => import('pages/Camera.vue') },
      { path: 'escposprinter', component: () => import('pages/EscPosPrinter.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
