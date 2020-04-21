const configs=require('../configs');

const {PROXY_URI}=configs;

const proxyOptions={
  target: PROXY_URI,//'http://172.24.9.62:8059',
  changeOrigin: true,
  // pathRewrite: {'^/riskWarning':''},
};

const proxyCfg={
  proxyPath:'/risk-warning',
  proxyOptions,
};

module.exports=proxyCfg;







