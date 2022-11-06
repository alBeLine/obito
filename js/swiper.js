/* 
    优点:
    1. 图片是全部加载好, 通过移动的方式来更换, 避免了重新加载的速度慢问题
    2. 因为是要加载好图片在执行轮播图操作, 所以是load事件内执行函数
    3. 根据图片的张数动态生成小圆点
    4. 通过类名来修改小圆点的样式, 似乎比修改style属性快

*/

window.addEventListener('load', function() {
    var leftCon = document.querySelector('.left');
    var rightCon = document.querySelector('.right');
    var swiper = document.querySelector('.swiper');
    // 实现经过显示离开关闭控件功能
    swiper.addEventListener('mouseenter', function() {
        leftCon.style.display = 'block';
        rightCon.style.display = 'block';
    })
    swiper.addEventListener('mouseleave', function() {
        leftCon.style.display = 'none';
        rightCon.style.display = 'none';
    })
    // 根据图片个数动态生成小圆点
    var imgBox = document.querySelector('.imgBox');
    var dotArea = document.querySelector('.dotArea');
    // console.log(imgBox.children.length);
    for(var i = 0; i < imgBox.children.length; i++) {
        // 创建li
        var li = document.createElement('li');
        // 添加index属性记录小圆圈的索引值, 方便移动
        li.setAttribute('index', i);
        // 添加进圆点区域
        dotArea.appendChild(li);
        // 同时添加点击事件
        li.addEventListener('click', function() {
            // 排他思想
            for(var i = 0; i < dotArea.children.length; i++) {
                dotArea.children[i].className = '';
            }
            this.className = 'current';

            // 实现点击切换图片功能
            // 获取li的索引值
            var index = this.getAttribute('index');
            // 这里应该用clientWidth而不是offsetWidth, 因为offsetWidth会多移动边框的距离
            var focusWidth = swiper.clientWidth;
            animate(imgBox, -index * focusWidth);
        })
    }
    // 让圆点区域居中
    dotArea.style.marginLeft = -1 * dotArea.clientWidth / 2 + 'px'
    // 默认选中第一个圆点
    dotArea.children[0].className = 'current';
})