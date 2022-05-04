var fs= require('fs');
var http1 = require('http');
var urllib=require('url');
var alldata={};
var vip={'guorong':'123'};
http1.createServer(function(request,response){
    response.setHeader('Access-Control-Allow-Origin','*');
    var json=urllib.parse(request.url,true).query;
    
    fs.readFile('alluserpass.txt','utf8',function(err,data){
        if(err)console.log(err);
        else{
            alldata=JSON.parse(data);
            //console.log(alldata,typeof alldata);
            if(alldata[json.user]||vip[json.user]){
                response.write('username has been registered,please change username');
                response.end();
            }
            else{
                alldata[json.user]=json.pass;
                fs.writeFile('alluserpass.txt',JSON.stringify(alldata),function(err){
                    if(err)console.log(err);
                    else{
                        console.log('add '+json.user+' regiister finished',alldata);
                        response.write('add '+json.user+' regiister finished');
                        response.end();
                    }    
                });
            }
            
        }
    })
    
}).listen(1664)


var http2 = require('http');
http2.createServer(function(request,response){
    response.setHeader('Access-Control-Allow-Origin','*');
    var json=urllib.parse(request.url,true).query;//console.log(json);
    if(vip[json.user]==json.pass)
    {
        response.write('大人，您可回来了');
        response.end();
        return;
    }
    fs.readFile('alluserpass.txt','utf8',function(err,data){
        if(err)console.log(err);
        else{
            var alldata1=JSON.parse(data);//console.log(alldata1);
            //console.log(alldata,typeof alldata);
            if(alldata1[json.user]==json.pass){
                response.write('login success');
                response.end();
            }
            else{
                response.write('username or password error,please re-enter');
                response.end();
            }   
        }
    }) 
}).listen(1665)


http2.createServer(function(request,response){
    response.setHeader('Access-Control-Allow-Origin','*');
    var json=urllib.parse(request.url,true).query;//console.log(json);   
    fs.readFile('664textlist.txt','utf8',function(err,data){
        if(err)console.log(err);
        else{
            var arr=eval('('+data+')');//console.log(arr.indexOf(Object.values(json)[0]));
            if(arr.indexOf(Object.values(json)[0])==-1)
            {
                arr.push(Object.values(json)[0]);
                fs.writeFile('664textlist.txt',JSON.stringify(arr),function(err){
                    if(err)console.log(err);
                    else{
                        response.write(JSON.stringify(arr));
                        response.end();

                        fs.writeFile('./664alltextcontent/'+Object.values(json)[0],Object.values(json)[1],function(err){
                            if(err)console.log(err);
                            else{
                                //response.write('write filecontent success');
                                //response.end();
                            }
                        })
                    }
                })
            }
            else{
                response.write('filename repeat,please change filename');
                response.end();
            }  
        }
    }) 
}).listen(1666)


http2.createServer(function(request,response){
    response.setHeader('Access-Control-Allow-Origin','*');
    //var json=urllib.parse(request.url,true).query;console.log(json);   
    fs.readFile('664textlist.txt','utf8',function(err,data){
        if(err)console.log(err);
        else{
            response.write(data);
            response.end();
        }   
    })
}).listen(1667);

http2.createServer(function(request,response){
    response.setHeader('Access-Control-Allow-Origin','*');
    var json=urllib.parse(request.url,true).query;console.log(json);   
    fs.readFile('./664alltextcontent/'+Object.values(json)[0],function(err,data){
        if(err)console.log(err);
        else{
            response.write(data);
            response.end();
        }
    })
}).listen(1668);

http2.createServer(function(request,response){
    response.setHeader('Access-Control-Allow-Origin','*');
    fs.readFile('alluserpass.txt','utf8',function(err,data){
        if(err)console.log(err);
        else{
            var json2=JSON.parse(data);//console.log(json2);
            response.write(JSON.stringify(Object.keys(json2)));
            response.end();   
        }
    }) 
}).listen(1669);

http2.createServer(function(request,response){
    response.setHeader('Access-Control-Allow-Origin','*');
    var json3=urllib.parse(request.url,true).query;
    fs.readFile('alluserpass.txt','utf8',function(err,data){
        if(err)console.log(err);
        else{
            var json2=JSON.parse(data);//console.log(json2);
            delete json2[json3.user];
            response.write(JSON.stringify(Object.keys(json2)));
            response.end();   

            fs.writeFile('alluserpass.txt',JSON.stringify(json2),function(err){
                if(err)console.log(err);
                else{
                    console.log('delete '+json3.user+' regiister finished',json2);
                    //response.write('delete '+json3.user+' regiister finished');
                    //response.end();
                }    
            });

        }
    }) 
}).listen(1670);

http2.createServer(function(request,response){
    response.setHeader('Access-Control-Allow-Origin','*');
    var json=urllib.parse(request.url,true).query;//console.log(json,Object.values(json)[0]);   
    fs.readFile('664textlist.txt','utf8',function(err,data){
        if(err)console.log(err);
        else{
            var arr=eval('('+data+')');//console.log(arr.indexOf(Object.values(json)[0]));
            arr.splice(arr.indexOf(Object.values(json)[0]),1);
            fs.writeFile('664textlist.txt',JSON.stringify(arr),function(err){
                if(err)console.log(err);
                else{
                    //console.log(arr,JSON.stringify(arr));
                    response.write(JSON.stringify(arr));
                    response.end();

                    fs.unlink('./664alltextcontent/'+Object.values(json)[0],function(err){
                        if(err)console.log(err);
                        else{
                            response.write(Object.values(json)[0]+' content delete success');
                            response.end();
                        }
                    })
                }
            })
        }
    }) 
}).listen(1671)
