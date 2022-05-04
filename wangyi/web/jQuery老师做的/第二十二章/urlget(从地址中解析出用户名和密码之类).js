var url=require('url');
var http=require('http');
http.createServer(function(request,response){
    response.setHeader('Access-Control-Allow-Origin','*');
    var json=url.parse(request.url,true).query;
    if(json.user=='leo' && json.pass=='123456')
    {
        response.write('8120success');
    }
    else{
        response.write('8120fail');
    }
    response.end();
}).listen(8120);