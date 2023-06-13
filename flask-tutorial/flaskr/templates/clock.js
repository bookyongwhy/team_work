function updateTime() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    
    // 将时间格式化为字符串
    if (hours < 10) { hours = "0" + hours; }
    if (minutes < 10) { minutes = "0" + minutes; }
    if (seconds < 10) { seconds = "0" + seconds; }
    var timeString = hours + ":" + minutes + ":" + seconds;
    
    // 更新div的内容
    document.getElementById("clock").innerHTML = timeString;
}

// 每秒钟调用一次updateTime函数
setInterval(updateTime, 1000);