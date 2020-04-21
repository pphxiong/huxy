const router={
  path:'/use',
  redirect:'/use/fetch',
  name:'use',
  icon:'icon-sitemap',
  children:[
    {
      path:'/fetch',
      name:'useFetch',
      icon:'icon-th-list',
      component:()=>import('./fetch'),
    },
    {
      path:'/search',
      name:'useSearch',
      icon:'icon-th-list',
      component:()=>import('./search'),
    },
    {
      path:'/viewSize',
      name:'useViewSize',
      icon:'icon-th-list',
      component:()=>import('./viewSize'),
    },

    {
      path:'/eleResize',
      name:'useEleSize',
      icon:'icon-th-list',
      component:()=>import('./viewSize/eleResize'),
    },
    {
      path:'/style',
      name:'useStyle',
      icon:'icon-th-list',
      // denied:true,
      component:()=>import('./style'),
    },
    {
      path:'/message',
      name:'useMessage',
      icon:'icon-th-list',
      component:()=>import('./message'),
    },
  ],
};
export default router;