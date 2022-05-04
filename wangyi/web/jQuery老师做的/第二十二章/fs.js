/* var fs=require('fs');
fs.writeFile('a.txt','good',function(err){
    if(err)
    {
        console.log('error');
    }
    else{
        console.log('write finish');
    }
})

fs.writeFile('a.html','<p>tomorrow</p>',function(err){
    if(err)
    {
        console.log('error');
    }
    else{
        console.log('write finish');
    }
}) */

/* var http=require('http');
http.createServer(function(request,response){
    response.setHeader('Access-Control-Allow-Origin','*');
    var url=require('url');
    var json=url.parse(request.url,true).query;
    var fs=require('fs');
    fs.writeFile(json.user,json.pass,function(err){
        if(err)
        {
            console.log('error');
        }
        else{
            console.log('write finish');
        }

    });
}).listen(1111); */



var fs=require('fs');
//fs.readFile('./1.jpg',function(err,data){
fs.readFile('1.jpg',function(err,data){
    if(err)
    {
        console.log('error');
    }
    fs.writeFile('3.png',data,function(err){
        if(err)
        {
            console.log('error');
        } 
    });
});