const yapi = require('yapi.js');
const axios = require('axios');

module.exports = function () {
  //保存获取token的任务
  this.bindHook('mock_after', async function (context) {
    yapi.commons.log('mock_after,' + context);
    const { ctx, mockJson } = context;
    let result = await axios.get('https://apis.imooc.com?icode=' + ctx.header.icode);
    if (result.code !== 1000) {
      mockJson = {
        status: -1000,
        msg: '请输入您的慕课网icode',
      };
    }
  });
};