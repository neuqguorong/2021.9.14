var fs=require('fs');
//var http1 = require('http');
fs.unlink('1.txt',function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log('1.txt deleted');
    }
})