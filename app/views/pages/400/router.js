const router=[
  {
    path:'/401',
    name:'401',
    icon:'icon-sign-in',
    component:()=>import('./401'),
  },
  {
    path:'/403',
    name:'403',
    icon:'icon-sign-in',
    component:()=>import('./403'),
  },
  {
    path:'/404',
    name:'404',
    icon:'icon-sign-in',
    component:()=>import('./404'),
  },
];
export default router;