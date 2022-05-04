var fs=require('fs');
var http=require('http');
var url=require('url');


//先读取数据，已有的文件，显示出来
http.createServer(function(request,response){
    response.setHeader('Access-Control-Allow-Origin','*');
    var json=url.parse(request.url,true).query;
    //console.log(json);

    fs.readFile('660输入文章老师版.txt','utf8',function(err,data){
        if(err)
            {
                console.log(err);
            }
        else{
                //console.log(data,typeof data,'tostr(data) is '+tostr(data));
                response.write(tostr(data));
                response.end();
            }
        });

}).listen(1117);


function tostr(da){
   
    if(da.indexOf('‘')!=-1)
    //if(da.includes('【')||da.includes('】')||da.includes('’')||da.includes('‘'))
    {
        //da=da.replace('【','[');
        //da=da.replace('】',']');
        da=da.replace('‘','"').replace('’','"');
        return tostr(da);
    }
    else{
        return da;
    }  
}

//点击提交按钮时，写入新的文件名和文件内容，
http.createServer(function(request,response){
    response.setHeader('Access-Control-Allow-Origin','*');
    var json=url.parse(request.url,true).query;
    //console.log(json);

    fs.writeFile('660/'+json.textname+'.txt',json.textcontent,function(err){
        if(err)
            {
                console.log(err);
            }
        else{
                response.write(json.textname+'.txt write finished');
                response.end();

                fs.readFile('660输入文章老师版.txt','utf8',function(err,data){
                    if(err)
                    {
                        console.log(err);
                    }
                    else{
                        console.log(data,typeof data,'tostr(data) is '+tostr(data));
                        var data1=tostr(data);
                        var arr=JSON.parse(data1);
                        console.log(data,typeof data,'tostr(data) is '+tostr(data),arr);
                        arr.push(json.textname);
                        fs.writeFile('660输入文章老师版.txt',JSON.stringify(arr),function(err){
                            if(err)
                            {
                                console.log(err);
                            }
                            else{
                                console.log('660输入文章老师版.txt write finished');
                            }
                        });
                       /*  response.write(JSON.stringify(arr));
                        response.end(); */
                    }
                });
            }
        });

}).listen(1118);

//发送文件名字，返回文件内容
http.createServer(function(request,response){
    response.setHeader('Access-Control-Allow-Origin','*');
    var json=url.parse(request.url,true).query;
    //console.log(json);

    fs.readFile('660/'+json.textname+'.txt',function(err,data){
        if(err)
            {
                console.log(err);
            }
        else{
                response.write(data);
                response.end();
            }
        });

}).listen(1119);

//点击某个li,删除这个文件和文件名
http.createServer(function(request,response){
    response.setHeader('Access-Control-Allow-Origin','*');
    var json=url.parse(request.url,true).query;
    //console.log(json);

    fs.readFile('660/'+json.textname+'.txt','utf8',function(err,data){
        if(err)
        {
            console.log(err);
        }
        else{
            fs.unlink(json.textname+'.txt',function(err){
                if(err)
                {
                    console.log('err: '+err);
                }
            });
            response.write(data);
            response.end();
        }
    });

    fs.readFile('660输入文章老师版.txt','utf8',function(err,data){
        if(err)
        {
            console.log(err);
        }
        else{
            //console.log(data,typeof data,'tostr(data) is '+tostr(data));
            data=data.substring(0,data.indexOf(json.textname)-1)+data.substring(data.indexOf(json.textname)+3);
            fs.writeFile('660输入文章老师版.txt',data,function(err){
                if(err)
                {
                    console.log(err);
                }
            });
            response.write(tostr(data));
            response.end();
        }
    });

}).listen(1120);

