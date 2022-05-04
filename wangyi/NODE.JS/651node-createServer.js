const { arrayBuffer } = require('stream/consumers');

var http1 = require('http'),i=0;
var urllib=require('url');
var arr1=[],arr2=[],alldata={};
http1.createServer(function(request,response){
    //i++;
    response.setHeader('Access-Control-Allow-Origin','*');
    //console.log(request.url,request.url.substring(request.url.indexOf('?')+1));
    //var str=request.url.substring(request.url.indexOf('?')+1);var json=strtoarr(str);
    var json=urllib.parse(request.url,true).query;

/*         if(JSON.stringify(alldata).includes(json.user)==false)
        //if(alldata[json.user]=='')
        {
            alldata[json.user]=json.pass;
            console.log(json.user+' register success');
            response.write(json.user+' register success');
        }
        else if(JSON.stringify(alldata).includes(json.user)==true){
        //else{
            console.log(json.user+' registered,please login');
            response.write(json.user+' registered,please login');
            
        } */

        if(JSON.stringify(alldata).includes(json.user)==false)
        //if(alldata[json.user]=='')
        {
            //alldata[json.user]=json.pass;
            alldata[Object.values(json)[0]]=Object.values(json)[1];
            console.log(Object.values(json)[0]+' register success');
            response.write(Object.values(json)[0]+' register success');
        }
        else if(JSON.stringify(alldata).includes(json.user)==true){
        //else{
            console.log(Object.values(json)[0]+' registered,please login');
            response.write(Object.values(json)[0]+' registered,please login');
            
        }

        console.log(alldata);
/*     if(json.user=='leo' && json.pass=='123456')
    {
        response.write('get 登录成功');
    }
    else{
        response.write('get 登录失败');
    } */

    /*     if(request.url.includes('index.html'))
    {
        response.write('you are visiting index.html');
    }
    else if(request.url.includes('index1.html'))
    {
        response.write('you are visiting index1.html');
    }
    else{
        response.write('404');
    } */
    //response.write('response.write');
    response.end();
}).listen(1111);

function strtoarr(str){
    var arr=str.split('&'),json={};
    for(var i=0;i<arr.length;i++)
    {

        json[arr[i].split('=')[0]]=arr[i].split('=')[1];
    }
    return json;
}



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



var http4 = require('http');
http1.createServer(function(request,response){
    response.setHeader('Access-Control-Allow-Origin','*');
    var json=urllib.parse(request.url,true).query;
    if(JSON.stringify(alldata).includes(json.user) && JSON.stringify(alldata).includes(json.pass))
    {
        console.log('get login success');
        response.write('get login success');
    }
    else if(JSON.stringify(alldata).includes(json.user) && JSON.stringify(alldata).includes(json.pass)==false)
    {
        console.log('password error,please relogin');
        response.write('password error,please relogin');
    }
    else if(JSON.stringify(alldata).includes(json.user)==false && JSON.stringify(alldata).includes(json.pass)==true){
        console.log('user error,please relogin');
        response.write('user error,please relogin');
    }
    else{
        console.log('user and password error,please relogin');
        response.write('user and password error,please relogin');
    }

}).listen(1114);
