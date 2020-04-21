import {sleep,wrapPromise} from '@huxy/utils';
import React from 'react';
import { UserOutlined, PoweroffOutlined } from '@ant-design/icons';
import fetcher from './fetcher';

const avatar='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAnCAYAAACMo1E1AAAFSklEQVRYR7VYWU8bVxQ+157FNniHhqVvgaQKEIUojRohhBqpitSXSP2blVI1iiJFqvJQRWqTh8RNnprGoYBZVGwz3me8TfWdYYjBM5fBmIMQPMw997vf2Y+wbdumgNLv98k0Tf7tdDoU9Gg4HCZN0ygajfLfoCKCgOt2u9RoNKjVap3S2+v3ye73qW/b5DzReafAjxAkQoJCoRCFhDg5B6ATExMMFN/IRAoOTNXrdWo2myc6er0edbs96vZ6QQlgcGElTAAWDoX4HP6Px+MUiUR89fiCsyyLKpUKASAE7LU73cCm9LtRCYdJURQKhx2Quq5TMplkhs+KJ7harcZmhICpdqdD/X5g1wzEqKoopKoKmxYsplIpUlX11NkhcGDL9S2wZbU7gS7DR2C53W4zy67gYkVVCWCGmBGCdE1lcAAJgGDSlVPgXGDgyDItgsPLpNFsUrlcpiPDYKbhCn4Si8VocWGB0qnU0Ce6ppGiOADT6fRJRJ+Ac02JqDMt09eMSB//HR5SoVCgWr0emFV8iMBYXV2l+OSkFGA2m2W/ZHB48dHRER8wJYxVazX6++PHE3+8ELLjj7OZDK0sL3sedRkEMAAUvV7PLhaL7C8yH9vb26N/8vlLRyucfu3BA993RSI6pxu4gTAMw0YAICpNq+15aHd3l4GNQ+BXcPpEPM4+eDZCkVKiEScoxP7+PueIVsvkTH9WKtUq5XK549w/DnhfdGTSabq9suLhf6rjcwAnM+fbd+8IvnZV8t39+55VIhqJOOCaLdPTl1Dg/3zz5qpwsd7lpSWaymaH7tBUlcTOTsG22t6+Vq1W6W0ud6Xgvrl5k2auXRu6gxuHzX+3bASDl4yLOTh5BJlfCG633HqNO5du3aLpqSnP+8Wn/Gffogklv796xQcRYT88fHiqzUFCrjcanPdwKSoK/BdgkLPQdaSSSW6R3PYIOv/68IHzJeTu6ipHrpdIweHAH69fc1m6sbhId+/cGYuJi6US/fbyJetaX1vj2joSOLwS1WNjfZ1mZ2bGAg6+/PzFC5qIxejbe/d8dZ7L3Kd8nnb39uinx4+HEuaoSJH0f332jL6en6eF69dHB3dYLNJOoUA/Pno0KpahcwjAn588kfobDp3LHBx8a3tbWg9HQf3L06f0/cYGB5KfnAsO7U1+c5Nu+3QSowDDmdz793RjYUFafaTgUELQ38O0frloVHAYnCYnJ7lR9WtSpeDQe6FrQD47b4wbFSTa+vJxL3lWhxTcV9PTnlPRqEC8ziE4YJkL5zm0NBeZ0EcBzV24YXiDy3/e9B36AQwDyVWZFO4Ck2K14cnc1ta23RkY5c5+hKYPmRzrg3EKtgiY3vyaDs5zhcKubUpGOhcQei4AHYeAqVK5LFWFOYKbTdnE5WpA1CJ6LyswJYANDt5eOnVdc8DJhpvBg1i6oAW6jMjymqvXHXLEwcEBB4RltQNtjgAwmUhcOEhwh1GpSLcCLriIrjkrinq9bmPaRxPYMv3XCYNswffQIAZNM0gXGJJkzu/qh27sT8AeT/ylUonDGXs3v3nCy5QYQhKJhG+gQCdA+aWKoYogBPHUJYjLJoPDizD1g/qLAoSJ/dIM0kXQsRK5FOZkf4tGv4DDC0C9YRjHAIOvvsBcLBp1dngYlLBvC4W4JmO2CLLs4S2ABj9zzmUyGWdtO1ge0KFiDQaRMYgtAB6CdhvswBUGJyqc5yFH1zmBY9BBKcRfL1O6jMHfAMzdcg4tD9H8ASBMDHNjeej+j3YdC50gSdvLR2Gu+bk5mpudZQDYyWmqxj4GxrCbG1y//g882xLEfhMNzQAAAABJRU5ErkJggg==';

const navDrop=[
  {
    name:'个人中心',
    icon:<UserOutlined />,
    path:'',
  },
  {
    name:'退出',
    icon:<PoweroffOutlined />,
    path:'/user/login',
  },
];

const user={
  id:'0',
  name:'bigdata',
  age:18,
  role:5,
  email:'bigdata@gmail.com',
  addr:'wuhan',
  avatar:avatar,
  nav:navDrop,
};

export const fetchUserInfo=async (params)=>{
  await sleep();
  return {
    code:200,
    msg:'success',
    data:user,
  };
};

const sysUrl='/api/system';

export const login=data=>wrapPromise(fetcher.post(`${sysUrl}/oauth/token`,{data}));

export const getUserInfo=()=>wrapPromise(fetcher.get(`${sysUrl}/oauth/token`));

export const getUserDetail=id=>wrapPromise(fetcher.get(`${sysUrl}/system/user/${id}/info`));





