var fs=require('fs');
var http=require('http');
var url=require('url');
var querystr=require('querystring');

http.createServer(function(request,response){
    response.setHeader('Access-Control-Allow-Origin','*');
    //console.log(request.url);
    //var urlname=request.url;console.log('urlname is '+urlname);
    if(request.url.indexOf('html')!=-1)
    {
        //console.log('request.url.substring(1) is ' +request.url.substring(1));
        fs.readFile(request.url.substring(1),function(err,data){
            if(err)
            {
                fs.readFile('404.html',function(err,data){
                    if(err)
                    {
                        console.log(err);
                    }
                    else{
                        response.write(data);
                        response.end();
                    }
                });
            }
            else{
                response.write(data);
                response.end();
            }
        });
    }





/*     if(request.url=='/index.html')//对
    //if(request.url.includes('/index.html'))//对
    {
        fs.readFile('.'+request.url,function(err,data){//对
        //fs.readFile('./index.html',function(err,data){//对
        //fs.readFile('index.html',function(err,data){//对
            if(err){
                console.log('error');
            }
            else{
                response.write(data);
                response.end();
            }
        });
    }
    else{
        fs.readFile('./404.html',function(err,data){
            if(err){
                console.log('error');
            }
            else{
                response.write(data);
                response.end();
            }
        });
    } */


/*     var req=request,res=response;
    console.log(req.url)
	var urlName = req.url;
    if(req.url =='/index.html'){
		fs.readFile('.'+req.url,function(err,data){
			if(err)console.log(err);
			res.write(data);
			res.end();
		})
	}
	else{
		fs.readFile('./404.html',function(err,data){
			if(err)console.log(err);
			res.write(data);
			res.end();
		})
	} */
    
}).listen(1112);