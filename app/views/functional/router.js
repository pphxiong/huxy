const router={
  path:'/functional',
  redirect:'/functional/curry',
  name:'functional',
  icon:'icon-life-bouy',
  children:[
    {
      path:'/curry',
      name:'curry',
      icon:'icon-th-list',
      component:()=>import('./curry'),
    },
  ],
};
export default router;