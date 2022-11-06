function animate(obj, target, callback) {
    if(obj.timer)
        clearInterval(obj.timer);
    // 绑定给对象目的是方便访问清除定时器ID, 如果是局部变量定义的话, 就访问不到了
    
    obj.timer = setInterval(function() {
        if(obj.offsetLeft == target){
            clearInterval(obj.timer)
            if(callback){
                callback();
            }
        }
        var step = (target - obj.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        obj.style.left = obj.offsetLeft + step + 'px';
    }, 30);

}