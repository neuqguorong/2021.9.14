var url=require('url');
var str='https://www.baidu.com/s?wd=%E5%8F%8C%E6%96%B9%E7%9A%84&rsv_spt=1&rsv_iqid=0xd62b394300298355&issp=1&f=8&rsv_bp=1&rsv_idx=2&ie=utf-8&tn=54093922_19_hao_pg&rsv_enter=1&rsv_dl=tb&rsv_sug3=5&rsv_sug1=2&rsv_sug7=100&rsv_sug2=0&rsv_btype=i&prefixsug=%25E5%258F%258C%25E6%2596%25B9%25E7%259A%2584&rsp=6&inputT=2226&rsv_sug4=3695';
console.log(url.parse(str));
console.log(url.parse(str,true).query);