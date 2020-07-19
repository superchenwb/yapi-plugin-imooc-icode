const yapi = require('yapi.js');
const axios = require('axios');

module.exports = function () {
  //保存获取token的任务
  this.bindHook('mock_after', async function (context) {
    yapi.commons.log('mock_after,' + context);
    let { ctx, mockJson } = context;
    let result = await axios.get('https://apis.imooc.com?icode=' + ctx.header.icode);
    if (result.code !== 1000) {
      mockJson.status = -100;
      mockJson.msg = '请在请求头中添加本门课程的icode';
      mockJson.data = null;
    }
  });
};
