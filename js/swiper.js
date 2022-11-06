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
        clearInterval(timer);
    })
    swiper.addEventListener('mouseleave', function() {
        leftCon.style.display = 'none';
        rightCon.style.display = 'none';
        setTimer();
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
            
            // 同步左右控件和控件引起的小圆点变化
            circle = num = index;

            // 这里应该用clientWidth而不是offsetWidth, 因为offsetWidth会多移动边框的距离
            var focusWidth = swiper.clientWidth;
            animate(imgBox, -index * focusWidth);
        })
    }
    // 让圆点区域居中
    dotArea.style.marginLeft = -1 * dotArea.clientWidth / 2 + 'px'
    // 默认选中第一个圆点
    dotArea.children[0].className = 'current';

    // 克隆第一张图片 <!-- 目的是使在直接跳转第一张的时候图片无变化效果 -->
    var first = imgBox.children[0].cloneNode(true);
    imgBox.appendChild(first);
    // 实现左右控件移动图片效果(和小圆点的data逻辑分开或许会使代码结构更清楚)
    var num = 0;
    // 控制小圆点的变量(太多变量了, 是否可以将index, num, circle共用一套逻辑呢)
    // 如果共用一套逻辑, 改了一处全部都要改
    // 分开定义的话, 有助于维护代码, 反而共用的优点除了省一点空间就没啥作用了
    // 综合来看, 还是分开逻辑, 代码层次更加清晰!
    var circle = 0;
    rightCon.addEventListener('click', function() {
        /* 
            如果走到了最后一张, 说明此时应该换到第一张了, 应该重置left=0, 
            再滑动到第二张, 就看起来像从后面一直循环滚动来的
            如果克隆最后一张, 放在第一张前面, 也是一样的道理
            又因为前后两张是同样的, 在直接设置left=0时反差就不会太大
        */
        if(num == imgBox.children.length - 1) {
            imgBox.style.left = 0;
            num = 0;
        }
        // 每向右移动num++, 取反盒子向左移动
        num++;
        animate(imgBox, -num*swiper.clientWidth);

        // 控制小圆点变化
        circle++;
        // 循环变化
        circle = circle % dotArea.children.length;
        // 排他思想
        setCircle(circle);
    });
    leftCon.addEventListener('click', function() {
        if(num == 0) {
            // 跳转最后一张图
            num = imgBox.children.length - 1;
            imgBox.style.left = -num*imgBox.clientWidth + 'px';
        }
        // 每向右移动num++, 取反盒子向左移动
        num--;
        animate(imgBox, -num*swiper.clientWidth);

        // 控制小圆点变化
        circle--;
        // 循环变化
        if(circle < 0) {
            // 设置为最后一个
            circle = dotArea.children.length - 1;
        }
        // 排他思想
        setCircle(circle);
    });
    function setCircle(circle) {
        for(var i = 0; i < dotArea.children.length; i++) {
            dotArea.children[i].className = '';
        }
        dotArea.children[circle].className = 'current';
    }

    // 设置定时器
    var timer = null;
    function setTimer() {
        timer = setInterval(() => {
                rightCon.click();
        }, 3000);
    }
    // 初始化计时器
    setTimer();
})