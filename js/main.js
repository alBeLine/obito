window.addEventListener('loaded', function(){
    // const cvs = document.querySelector('#cvs');
    //     const ctx = cvs.getContext('2d');
    //     const {clientWidth: width, clientHeight: height} = document.documentElement;
    //     cvs.width = width;
    //     cvs.height = height;
    //     // 填充白色的雪点
    //     ctx.fillStyle = '#ffffff';
    //     // 生成雪点随机位置数组
    //     const bgColors = Array.from(new Array(400)).map(item => {
    //         return {
    //             x: Math.random() * width,
    //             y: Math.random() * height,
    //             // 定义每个雪点的下降速度
    //             step: Math.random() * 2.5 + 0.5
    //         }
    //     });
    //     const render = () => {
    //         ctx.clearRect(0, 0, width, height);
    //         ctx.beginPath();
    //         bgColors.forEach(item => {
    //             // 如果超出页面就重置为0, 否则按速度下降
    //             item.y = item.y > height ? 0 : (item.y + item.step)
    //             //绘制雪点
    //             ctx.rect(item.x, item.y, 3, 3);
    //         })
    //         ctx.fill();
    //         // 递归实现循环绘制
    //         requestAnimationFrame(render);
    //     }
    //     // 调用render
    //     render();

        // (function(){
        //     var music = document.querySelector('audio');
        //     music.play();
        // }())
})