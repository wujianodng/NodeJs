/**
 * 引入模块 
*/
const http = require('http');
//url模块，用于URL地址格式化 
const url = require('url');

const path = require('path')

//引入fs模块   文件处理
const fs = require('fs');

//引入mine类型
const mime = require('./js/mime.js')

http.createServer((req,res)=>{

    //格式化URL，结构文件路径
    let {pathname} = url.parse(req.url,true);

    //获取真实路径
    let realpath = path.join(__dirname,pathname)

    // console.log(realpath,"真实路径")
    
    let extname = path.extname(pathname).substring(1);
    
    //利用fs模块读取pathname内容    异步版本的读取文件方法
    fs.readFile(realpath,(err,data)=>{
        if(err) {
            res.writeHead(200,{
                'content-type':'text/html;charset=utf8'
            })
            res.end("<h1>吴建栋的个人服务器</h1>")


            //如果文件读取错误，则抛出404
            // res.writeHead(404,{"content-type":"text/html;charset=utf8"})
            // res.end(`您访问的地址${realpath}不存在`)
            // fs.readFile('./satatic/404.html',function(err,data) {
            //     if(err) {
            //         throw err;
            //         return
            //     }
            //     res.end(data)
            // });
            return
        }


        //正确读取文件
        res.writeHead(200,{"Content-type":mime[extname] + ';charset=utf8'});
        res.end(data)
    })


    
}).listen(2020,()=>{
    console.log("正在启动服务器...")
    setTimeout(()=>{
        console.log("服务器启动成功！！")
    },1500)
})