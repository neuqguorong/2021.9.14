var fs=require('fs');
/* //有了utf8,可以编码中文，没有utf8，不可以编码中文
fs.readFile('1.txt','utf8',function(err,data){
//fs.readFile('1.txt',function(err,data){
    if(err)
    {
        console.log(err);
    }
    else{
        console.log(data);
    }
}); */

fs.readFile('2.txt','utf8',function(err,data){
    if(err)
    {
        console.log(err);
    }
    else{
        console.log(typeof data);//string
        var json=eval('('+data+')');//把string转为json对象
        console.log(typeof json);//object
        json.a=1;
        fs.writeFile('2.txt',JSON.stringify(json),function(err){
            if(err){
                console.log(err);
            }
            else{
                console.log('save finished');
            }
        });
    }

})

//删除文件
fs.unlink('bbb.txt',function(err){
    if(err){
        console.log('delete failed,error is '+err);
    }
    else{
        console.log(delete finished);
    }
});

//修改文件名

    console.log('modify ing ,please wait');
    setTimeout(()=>{
        fs.rename('2.txt','222.txt',function(err){
        if(err)
        {
            console.log('rename failed,error is '+err);
        }
        else{
            console.log('rename success');
        }
    })
},2000);