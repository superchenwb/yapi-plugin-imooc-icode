# yapi-plugin-interface-oauth2-token

> 慕课网icode拦截插件


### 安装插件

> 要使用安装插件的yapi，需要先安装 `yapi-cli`

```shell
npm install yapi-cli -g

yapi plugin --name yapi-plugin-imooc-icode
```

### 升级插件

我的升级过程不一定是最好的方法

1. 修改 `package.json` 和 `package-lock.json` 中的 `yapi-plugin-imooc-icode` 的版本号为 `1.2.3`

2. 删除 `node_modules`，然后重新 `npm install`

3. 然后先卸载插件，再重新安装插件

```shell

yapi unplugin --name yapi-plugin-imooc-icode

yapi plugin --name yapi-plugin-imooc-icode

```

## 重启服务

不论你使用什么启动的 `YApi`，你需要重新启动下
