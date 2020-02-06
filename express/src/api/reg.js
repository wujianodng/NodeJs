const express = require('express');
const Router = express.Router();


Router.post('/',(req,res)=>{
    res.send({
        code:200,
        data:[],
        msg:"注册成功"
    })
})


module.exports= Router;