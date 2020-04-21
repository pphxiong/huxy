const router={
  path:'/style',
  redirect:'/style/anicon',
  name:'style',
  icon:'icon-boat',
  children:[
    {
      path:'/anicon',
      name:'anicon',
      icon:'icon-th-list',
      component:()=>import('./anicon'),
    },
    {
      path:'/icons',
      name:'icons',
      icon:'ico-block',
      component:()=>import('./icons'),
    },
  ],
};
export default router;