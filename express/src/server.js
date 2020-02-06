/**
 * 利用express制作服务器 
*/

//引入express模块
const express = require('express');

//引入代理服务器
const proxy = require('http-proxy-middleware')

//引入路由
const Router = require('./api');

//利用express模块创建服务器 
const app = express();

//把当前目录指定为静态资源服务器
app.use(express.static('./'));

//代理服务器
app.use('/api/*',proxy({
    target:'https://h5api.m.taobao.com',
    changeOrigin:true,
    pathRewrite:{
        '^/api':'/'
    }
}))

//使用路由
app.use(Router);


//监听端口
app.listen(2020,()=>[
    console.log('server is running on http://localhost:2020')
])