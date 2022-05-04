var http=require('http');
http.createServer(function(request,response){
    response.setHeader('Access-Control-Allow-Origin','*');
    console.log('request.url is '+request.url);
    response.write('this is 通过ajax访问indexhtml对应的js文件.js   \n');

    //把favicon.ico过滤掉
    var url=request.url;
    if(url.indexOf('html')!=-1)
    {
        console.log('url.indexOf("html")!=-1 is' +url);
        response.write('you want to open '+url.substring(1)+' page');
    }
    else{

    }

    //console.log('someone accessed~~~~');
    
    response.end();
}).listen(1115);