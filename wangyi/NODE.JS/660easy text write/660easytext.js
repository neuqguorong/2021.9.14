var fs=require('fs');
var http1 = require('http');
var urllib=require('url');
http1.createServer(function(request,response){
    response.setHeader('Access-Control-Allow-Origin','*');
    var json=urllib.parse(request.url,true).query;
    fs.readFile('all filename.txt','utf8',function(err,data){
        if(err){
            console.log(err);
        }
        else{
            //console.log(data,typeof data);
            //var arr=eval('('+data+')');

            //以下是把 中文的类似数组，转为真正的数组，主要是符号的转换
           /*  var l=tostring(data,'‘');
            var r=tostring(l,'’');
            console.log(r); */

            //console.log(tostr2(data));
            var str=tostr2(data);
            response.write(str);//把数组里存放的文章名，发给前台解析
            response.end();
        }
    });
}).listen(1116)


var http2 = require('http');
http2.createServer(function(request,response){
    response.setHeader('Access-Control-Allow-Origin','*');
    var json=urllib.parse(request.url,true).query;
    fs.readFile('all filename.txt','utf8',function(err,data){
        if(err){
            console.log(err);
        }
        else{
            if(data!=''){
                var str=tostr2(data);
                var arr=eval(str);

                if(arr.includes(json.filename)==false)
                {
                    arr.push(json.filename); 
                    var str=JSON.stringify(arr);
                    fs.writeFile('all filename.txt',str ,function(err,data){
                        if(err)
                        {
                            console.log(err);
                        }
                        else{
                            console.log('add filename finished',arr);
                            //写入文章内容,放在文件夹里
                            fs.writeFile('all file content/'+json.filename,json.filecon,function(err){
                                if(err)
                                {
                                    console.log(err);
                                }
                                else{
                                    console.log(json.filename,json.filecon +' add finished');
                                }
                            })
                            response.write(str);//把数组里存放的文章名，发给前台解析
                            response.end();
                        }
                    }) 
                
                }
                else{
                    console.log('!! filename  repeat,please change filename');
                    response.write('!! filename  repeat,please change filename');//把数组里存放的文章名，发给前台解析
                    response.end();
                }
            }
            else{
                var arr=[];
                fs.writeFile('all filename.txt',JSON.stringify(arr.push(json.filename)) ,function(err,data){
                    if(err)
                    {
                        console.log(err);
                    }
                    else{
                        console.log('add filename finished',arr);
                        response.write(arr);//把数组里存放的文章名，发给前台解析
                        response.end();
                    }
                }) 
            }
            
        }
    });


}).listen(1117)


var http3 = require('http');
http3.createServer(function(request,response){
    response.setHeader('Access-Control-Allow-Origin','*');
    var json=urllib.parse(request.url,true).query;
    fs.readFile('all file content/'+json.filename,'utf8',function(err,data){
        if(err)
        {
            console.log(err);
        }
        else{
            //console.log(data);
            response.write(data);
            response.end();
        }
    })
}).listen(1118)

//删除文件
var http4 = require('http');
http4.createServer(function(request,response){
    response.setHeader('Access-Control-Allow-Origin','*');
    var json=urllib.parse(request.url,true).query;
    fs.unlink('all file content/'+json.filename,function(err,data){
        if(err)
        {
            console.log(err);
        }
        else{
            console.log('delete '+json.filename+' finished');
            fs.readFile('all filename.txt','utf8',function(err,data){
                if(err){
                    console.log(err);
                }
                else{
                    
                    var str=tostr2(data);
                    var arr=eval(str);
                    arr.splice(arr.indexOf(json.filename), 1);
                    var str=JSON.stringify(arr);
                    fs.writeFile('all filename.txt',str ,function(err,data){
                        if(err)
                        {
                            console.log(err);
                        }
                        else{
                            console.log('delete filename finished',arr);
                            response.write(str);//把数组里存放的文章名，发给前台解析
                            response.end();
                        }
                    }) 
                }
            })
        }
    })
}).listen(1119)

function tostring(str,x){
    if(str.indexOf('【')!=-1)
    {
        str=str.replace('【','[');
        str=str.replace('】',']');
        return tostring(str,x);
    }
    if(str.indexOf(x)!=-1)
    {
        str=str.replace(x,'"');
        return tostring(str,x);
    }
    else{
        return str;
    }
}

function tostr2(str){
    if(str.indexOf('【')!=-1 || str.indexOf('‘')!=-1 || str.indexOf('，')!=-1 )
    {
        str=str.replace('【','[');
        str=str.replace('】',']');
        str=str.replace('‘','"');
        str=str.replace('’','"');
        str=str.replace('，',',');
        return tostr2(str);
    }
    else{
        return str;
    }
    

}
