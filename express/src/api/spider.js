 const express = require('express')
 const request = require('request')
 const cheerio = require('cheerio')//包含jQuery核心针对服务器

 //爬取数据
 request('https://www.guojimami.com/brand-125-c0.html',(err,res,body)=>{
     const $ = cheerio.load(body);

     let goodslist = [];
     $('.bgw .gmg').each((idx,ele)=>{
         let $ele = $(ele);

         let name = $ele.find('.gn a').text();
         let price = $ele.find('.jiage .gp span').text();
         let imgurl = $ele.find('.gi img').attr('src');

         goodslist.push({
             name,
             price,
             imgurl
         })

         console.log(goodslist)
     })
 })