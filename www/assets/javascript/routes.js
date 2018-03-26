routes = [
  {
    path: '/',
    url: './index.html',
  },
  {
    path: '/userInfo',
    componentUrl: './www/assets/pages/userInfo.html',
  },
  {
    path: '/bSList',
    componentUrl: './assets/pages/bodySystems.html',
  },
  {
    path: '/rateSymp/:r8Index/:sVal/:sID/:sCmtID/',
    componentUrl: './www/assets/pages/rate.html',
  },
  {
    path: '/ratePage/:bSVal/:sVal/:bSID/:sID/',
    componentUrl: './www/assets/pages/rate.html',
  },  
  {
    path: '/translate/:bsCount',
    componentUrl: './www/assets/pages/translate.html',
  },
  // Default route (404 page). MUST BE THE LAST
  {
    path: '(.*)',
    url: './www/assets/pages/404.html',
  },
];