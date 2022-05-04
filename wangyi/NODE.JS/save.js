var fs= require('fs');
var http=require('http');
var urllib=require('url');
http.createServer(function(req,res){
    res.setHeader('Access-Control-Allow-Origin','*');
    fs.readFile('save1.txt','utf8',function(err,data){
        if(err){
            console.log(err);
        }
        else{
            var json=eval('('+data+')');
            json.a=30;
            fs.writeFile('save.txt',JSON.stringify(json),function(err){
                if(err){
                    console.log(err);
                }
                else{
                    console.log('save finished');
                }
            });
        }
    })
    

}).listen(1115)