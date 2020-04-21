import {fetchUser} from './api';
const router={
  path:'/dashboard',
  redirect:'/dashboard/app1',
  name:'Dashboard',
  icon:'icon-dashboard',
  children:[
    {
      path:'/app1',
      name:'app1',
      icon:'icon-th-list',
      component:()=>import('./app1'),
      resolve:{
        users:fetchUser,
      },
    },
    {
      path:'/app2',
      name:'app2',
      icon:'icon-th-list',
      component:()=>import('./app2'),
    },
    {
      path:'/app3',
      name:'app3',
      icon:'icon-th-list',
      component:()=>import('./app3'),
      resolve:{
        users1:fetchUser,
        // user:fetchUser,
      },
      loadData:{
        users1:fetchUser,
      },
    },
    {
      path:'/app4',
      name:'admin',
      icon:'icon-th-list',
      component:()=>import('./app4'),
    },
  ],
};
export default router;