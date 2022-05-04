//从这出去,一个出口
exports.sum=function () {
    var re=0;
    for(var i=0;i<arguments.length;i++)
    {
        re+=arguments[i];
    }
    return re;
}
    
