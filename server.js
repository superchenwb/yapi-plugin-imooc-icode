const yapi = require('yapi.js');

module.exports = function () {

  //保存获取token的任务
  this.bindHook('mock_after', function (context) {
    yapi.commons.log('mock_after,' + context);
  });

};