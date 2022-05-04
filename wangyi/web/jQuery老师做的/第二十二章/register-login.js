var http=require('http');
var url=require('url');
var alldata={};
http.createServer(function(request,response){
    response.setHeader('Access-Control-Allow-Origin','*');
    var json=url.parse(request.url,true).query;
    if(alldata[json.user])
    {
        response.write('this account has been registered');
    }
    else{
        alldata[json.user]=json.pass;
        response.write('register finished');
    }
    response.end();
    
}).listen(1113);

http.createServer(function(request,response){
    response.setHeader('Access-Control-Allow-Origin','*');
    var json=url.parse(request.url,true).query;
    var alluser=[],j=0;
    for(var i in alldata)
    {
        alluser.push(i);
        if(i==json.user){j++;}
        if(i==json.user && alldata[json.user]!=json.pass)
        {
            response.write('password is error');
        }
    }
    if(j==0)
    {
        response.write('this account has not been registered');
    }
    else if(alldata[json.user]==json.pass){
        
        response.write('login finished');
    }
    response.end();
    
}).listen(1114);