
const express = require('express');
const Router = express.Router();

//引入商品路由
const goods = require('./goods');

//引入注册路由
const reg = require('./reg');

//格式化
Router.use(express.json(),express.urlencoded());

//cors解决跨域
Router.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin","http://127.0.0.1:2020")
    res.header("Access-Control-Allow-Headers","Content-Type,Content-Length,Authorization,Accept,X-Requested-With")
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,ORTIONS")
    next()
})

//数据接口
Router.use('/goods',goods)
Router.use('/reg',reg)


module.exports = Router;