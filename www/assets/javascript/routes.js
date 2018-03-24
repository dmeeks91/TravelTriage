routes = [
  {
    path: '/',
    url: './index.html',
  },
  {
    path: '/userInfo',
    componentUrl: './assets/pages/userInfo.html',
  },
  {
    path: '/bSList/:user/',
    componentUrl: './assets/pages/bodySystems.html',
  },
  {
    path: '/ratePage/:bSVal/:sVal/:sID/:sCmtID/',
    componentUrl: './assets/pages/rate.html',
  },
  {
    path: '/translate/:bsCount',
    componentUrl: './assets/pages/translate.html',
  },
  // Default route (404 page). MUST BE THE LAST
  {
    path: '(.*)',
    url: './assets/pages/404.html',
  },
];