const express = require('express');
const router = express.Router();



//获取全部商品
router.get('/',(req,res)=>{
    res.send({
        code:200,
        data:[],
        msg:"获取全部商品"
    })
})



//获取单个商品
router.get('/:id',(req,res)=>{
    let {id} = req.params;
    res.send({
        code:200,
        data:[],
        msg:`获取id为${id}的商品`
    })
})


//增加单个商品
router.post('/',(req,res)=>{
    let {id} = req.body;
    console.log(id,"body")
    res.send({
        code:200,
        data:[],
        msg:`增加id为${id}的商品`
    })
})


//删除单个商品
router.delete('/:id',(req,res)=>{
    let {id} = req.body;
    res.send({
        code:200,
        data:[],
        msg:`删除id为${id}的商品`
    })
})

module.exports= router