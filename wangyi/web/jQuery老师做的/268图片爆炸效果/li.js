//服务器接收数据
/* this.onmessage=(res)=>{
    var data=res.data;//这个数据看不见
    console.log(data);
    this.postMessage(data[0].toUpperCase()+data.substring(1));
} */

this.onmessage=function(res){
    var data=res.data;//这个数据看不见
    console.log(data);
    this.postMessage(data[0].toUpperCase()+data.substring(1));
}