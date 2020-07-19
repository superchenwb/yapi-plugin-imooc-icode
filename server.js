const yapi = require('yapi.js');
const axios = require('axios');

module.exports = function () {
  //保存获取token的任务
  this.bindHook('mock_after', async function (context) {
    let { ctx, mockJson } = context;
    // yapi.commons.log(ctx.header, 'log');
    yapi.commons.log('ctx.header.icode:' + ctx.header.icode, 'log');
    let result = await axios.get('https://apis.imooc.com?icode=' + ctx.header.icode);
    yapi.commons.log(result.data, 'log');
    if (result.data.code !== 1000) {
      mockJson.status = -100;
      mockJson.msg = '请在请求头中添加本门课程的icode';
      mockJson.data = null;
    }
  });
};
