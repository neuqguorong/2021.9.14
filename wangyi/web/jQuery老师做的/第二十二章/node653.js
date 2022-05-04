var http=require('http');
http.createServer(function(request,response){
    response.setHeader('Access-Control-Allow-Origin','*');
    //监听send传过来的数据
    var str='';
    request.on('data',function(data){
        str+=data;
    });
    //监听结束，再把完整的数据打印出来
    var querystr=require('querystring');
    request.on('end',function(){
        //console.log(str);
        var json=querystr.parse(str);console.log(json);//{ user: 'leo', pass: '123456' }
        if(json.user=='leo' && json.pass=='123456')
        {
            response.write('success');
        }
        else{
            response.write('fail');
        }
        response.end();
    });
    
}).listen(9218);
