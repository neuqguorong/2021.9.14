//post方式解析send发送过来的内容
var http2 = require('http');
var querystr=require('querystring');
http2.createServer(function(request,response){
    response.setHeader('Access-Control-Allow-Origin','*');
    var str='';
    request.on('data',function(data){
        str+=data;
    })
    request.on('end',function(){
        //console.log(str);
        var json=querystr.parse(str);console.log(json);
        if(json.user=='leo' && json.pass=='123456')
        {
            response.write('post success');
        }
        else{
            response.write('post error');
        }
        response.end();
    }) 
}).listen(1112);