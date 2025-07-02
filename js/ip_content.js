//获取当前IP地址和浏览器标识

// const $$ = document;




function getBrowserInfo() {
    var agent = navigator.userAgent.toLowerCase();

    var regStr_ie = /msie [\d.]+;/gi;
    var regStr_ff = /firefox\/[\d.]+/gi
    var regStr_chrome = /chrome\/[\d.]+/gi;
    var regStr_saf = /safari\/[\d.]+/gi;




    //IE
    if (agent.indexOf("msie") > 0) {
        // return agent.match(regStr_ie);
        return 'IE'
    }

    //firefox
    if (agent.indexOf("firefox") > 0) {
        // return agent.match(regStr_ff);
        return 'Firefox'
    }

    //Chrome
    if (agent.indexOf("chrome") > 0) {
        // return agent.match(regStr_chrome);
        return 'Chrome'
    }

    //Safari
    if (agent.indexOf("safari") > 0 && agent.indexOf("chrome") < 0) {
        // return agent.match(regStr_saf);
        return 'Safari'
    }
}




// function getIPinfo(){
//    const resp=fetch('https://ip.tryxd.cn', {
//         method: 'GET'
//       })
//       .then(res => res.data.json())
//       .then(res => {
//         if (res.data.ip) {

//             const dip=res.data.ip
//          return res
//         } else {
//           return "???"
//         }
//         // this.loading = false
//       })
//     console.log(resp);
//     return resp

// }

// async function getIPinfo(){ 
//     let res = await fetch("https://ip.tryxd.cn")
//     let result = await res.data.json()
//     // console.log(result)
//     if (ip_content != null && typeof (result.ip) != undefined) {
//     ip_content.innerHTML = '欢迎来自: <span class="p ipred">' + result.addr+result.info + "</span> 的小伙伴<br>" + "访问IP为： <span class='p cyan'>" + result.ip+ "</span><br>浏览器版本：<span class='p blue'>" + getBrowserInfo() + '</span>';
// }
//     // return result
// }
(async () => {
    // (function () {
    // const result = await fetch('https://forge.speedtest.cn/api/location/info')
    fetch('https://pubstatic.b0.upaiyun.com/?_upnode')
        .then(res => res.json())
        .then(res => {
            console.log(res);
            // if (ip_content != null && typeof (result.ip) != undefined) {
            var ip_content = document.querySelector(".ip_content");
            ip_content.innerHTML = '欢迎来自: <span class="p ipred">' + res.remote_addr_location.country + res.remote_addr_location.province + res.remote_addr_location.city + res.remote_addr_location.isp + "</span> 的小伙伴<br>" + "访问IP为： <span class='p cyan'>" + res.remote_addr + "</span><br>浏览器版本：<span class='p blue'>" + getBrowserInfo() + '</span>';
            // }
            // var ipinfo = "你的ip: " + res.data.ip + ' ' + res.data.province + res.data.city +res.data.distinct + ' ' + res.data.net_str
            // console.log(ipinfo)
            // var ipinfoNode = document.getElementById("ipinfo")
            // ipinfoNode.innerHTML = ipinfo
        })
        .catch(err => {
            console.log(err);
        })
})();


// getIPinfo()



