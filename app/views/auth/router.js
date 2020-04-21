const router=[
  {
    path:'/auth',
    name:'auth',
    icon:'icon-id-card',
    component:()=>import('./'),
    denied:true,
  },
];
export default router;