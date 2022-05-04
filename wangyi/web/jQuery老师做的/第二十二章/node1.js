/* console.log('fsfedgrfdhjgk');
console.log(1+2); */
var http=require('http');
/* const { url } = require('inspector');
const { json } = require('stream/consumers'); */
http.createServer(function(request,response){
    //console.log(request);
    response.setHeader('Access-Control-Allow-Origin','*');
    console.log(request.url);//显示端口号之后的地址，例如 baidu.com?mmm，就返回mmm
    var reurl=request.url.substring(2);
    console.log(reurl);
    var arr=[],json={};
    arr=reurl.split('&');//['user=leo','pass=123456']
    for(var i=0;i<arr.length;i++)
    {
        json[arr[i].split('=')[0]]=arr[i].split('=')[1];
    }
    console.log(json);//{ user: 'leo', pass: '123456' }
    
    if(json['user']=='leo'&& json['pass']=='123456')
    {
        response.write('login success');
    }
    else{
        response.write('login fail');
    }
  
    /*  //console.log('someone access ');
    var reurl=request.url;
    if(reurl.indexOf('html')!=-1)
    {
        if(reurl=='/index.html')
        {
            response.write('this is index html');
        }
        else if(reurl=='/index2.html'){
            response.write('this is index2.html');
        }
        else{
            response.write('404');
        }

    }
    response.write('dsfgfdghfew'); */
    response.end();
}).listen(9217);