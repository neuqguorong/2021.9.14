var fs=require('fs');
var http1 = require('http');
var urllib=require('url');
http1.createServer(function(request,response){
    response.setHeader('Access-Control-Allow-Origin','*');
    //console.log(urllib.parse(request.url),request.url,request.url.substring(1,request.url.indexOf('html')+4));
    if(request.url.indexOf('html')!=-1)
    {
        fs.readFile(request.url.substring(1,request.url.indexOf('html')+4),function(err,data){
            if(err)
            {
                console.log(err);
                fs.readFile('404.html',function(err,data){
                    response.write(data);
                    response.end();
                });
            }
            else{
               /*  console.log(request.url.substring(1,request.url.indexOf('html')+4)+' read finished');
                response.write(request.url.substring(1,request.url.indexOf('html')+4)+' read finished');
                fs.readFile(request.url.substring(1,request.url.indexOf('html')+4),function(err,data){
                    response.write(data);
                    response.end();
                })  */

                response.write(data);
                    response.end();
            }
        })
    }

/*     if(request.url=='/index.html')
    {
        fs.readFile('index.html',function(err,data){
        if(err)console.log(err);
        else{
            console.log('index.html read finished');
            response.write('index.html read finished');
            response.end();
        }
    }); */


/*     var json=urllib.parse(request.url,true).query;
    fs.writeFile(json.filename,json.conte,function(err){
        if(err)console.log(err);
        else{
            console.log(json.filename+' write finished,please view');
            response.write(json.filename+' write finished,please view');
        }
    })
    response.end(); */
}).listen(1113);


/* fs.readFile('1.png',function(err,data){
    if(err)console.log(err);
    else{
        fs.writeFile('2.png',data,function(err){
            if(err)console.log(err);
            else{
                console.log('2.png write finished,please view');
            }
        })
    }
}); */