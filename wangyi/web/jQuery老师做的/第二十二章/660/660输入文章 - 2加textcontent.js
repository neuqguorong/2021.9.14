var fs=require('fs');
var http=require('http');
var url=require('url');
var arr=[];


http.createServer(function(request,response){
    response.setHeader('Access-Control-Allow-Origin','*');
    var json=url.parse(request.url,true).query;
    console.log(json);

    //当arr数组长度不为0时，说明已经有文章题目在文件里面，需要传输到前端页面
    
        fs.readFile('alltextname.txt','utf8',function(err,data){
            
            if(err)
            {
                console.log(err);
            }
            else{
                arr=data.split('\n');
                response.write(data);
                response.end();
            }
        });

    if(json.textname!='')
    {
        arr.push(json.textname);
        console.log(arr);
        fs.writeFile('alltextname.txt',arr.join('\n'),function(err){
            if(err){
                console.log(err);
            }
            else{
                response.write(arr.join('\n'));
                response.end();
            }
        });
    }

}).listen(1116);
