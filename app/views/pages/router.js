import children from './400/router';
const router={
  path:'/pages',
  name:'页面管理',
  title:'页面管理',
  icon:'icon-desktop',
  redirect:'/pages/400',
  children:[
    {
      path:'/400',
      name:'400',
      icon:'icon-th-list',
      redirect:'/pages/400/401',
      children,
    },
    {
      path:'/500',
      name:'500',
      icon:'icon-th-list',
      component:()=>import('./500'),
    },
  ],
};
export default router;