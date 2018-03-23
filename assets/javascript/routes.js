routes = [
  {
    path: '/',
    url: './index.html',
  },
  {
    path: '/ratePage/:sVal/:sID/:sCmtID/',
    componentUrl: './assets/pages/rate.html',
  },
  {
    path: '/page-loader-component/:user/:userId/:posts/:postId/',
    componentUrl: './assets/pages/page-loader-component.html',
  },
  // Default route (404 page). MUST BE THE LAST
  {
    path: '(.*)',
    url: './pages/404.html',
  },
];