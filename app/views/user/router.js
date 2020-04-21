import {fetchUsers,fetchUserSrc,fetchUserSrcList} from '@app/api';
const router=[
  {
    path:'/user',
    name:'用户管理',
    icon:'icon-id-card',
    component:()=>import('./user'),
    resolve:{
      users:fetchUsers,
    },
  },
  {
    path:'/user/:id',
    name:'src',
    icon:'icon-th-list',
    component:()=>import('./user/src'),
    loadData:{
      src:fetchUserSrc,
    },
  },
  {
    path:'/user/:id/:type',
    name:'srcList',
    icon:'icon-th-list',
    component:()=>import('./user/srcList'),
    loadData:{
      srcList:fetchUserSrcList,
    },
  },
];
export default router;