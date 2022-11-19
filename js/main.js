const courseObj = {
    6: [
        '计算机网络',
        '概率论与数理统计',
        'web实验'
    ]
}

window.addEventListener('load', function(){
    // 名字滚动视差设置
    /* const nameMask = this.document.querySelector('.mask');
    console.log(nameMask);
    this.document.addEventListener('scroll', function() {
        const scrollY = window.scrollY + 'px';
        console.log('on');
        if(scrollY !== 0){
            // 死活设置不了, 666
            nameMask.style.backgroundPosition = `60% center`;
            // nameMask.style.display = 'none';
            console.log(scrollY);
        }
        else 
            nameMask.style.backgroundPosition = ``;

    }) */

    // 搜索功能
    let ipt = this.document.querySelector('.search-ipt');
    let search = this.document.querySelector('#search');
    let form = this.document.querySelector('#srch-form');
    ipt.addEventListener('keyup', function(e) {
        if(e.key === 'Enter') {
            search.value = ipt.value;
            form.submit();
        }
    })

    // 日期和渲染课程表功能
    let date = new Date();
    let dateBox = this.document.querySelector('#date');
    dateBox.innerHTML = dateFormat(date);

    // 滚动课程栏功能
    let courseBox = this.document.querySelector('.courseBox');
    let lessons = this.document.querySelector('#lessons');
    console.log(lessons.offsetTop);

    lessons.isLoading = false;
    courseBox.addEventListener('wheel', function(e) {
        e.preventDefault();
        let maxLen = lessons.offsetHeight - courseBox.offsetHeight;
        // 目的让用户总共滑5次就能看到所有, 而因为一个课是5的倍数所以可以整除
        let step = Math.ceil(maxLen / 5);
        // 如果达到最大范围就不再响应
        if(e.deltaY < 0) {
            if(lessons.offsetTop >= 0) {
                console.log('滑到头了哦...');
                return;
            }
            // 因为top自带px不方便参与计算, 所以用offsetTop
            lessons.style.top = lessons.offsetTop + step + 'px';
            // animate(lessons, false, lessons.offsetTop, courseBox)
        }
        else{
            if(Math.abs(lessons.offsetTop) >= maxLen) {
                console.log('你已经拉到底啦...');
                return;
            }
            lessons.style.top = lessons.offsetTop - step + 'px';
        }
    })

    // 固定课程栏位置
    // this.document.addEventListener('scroll', function() {
    //     if(window.scrollY >= 350) {
    //         let left = courseBox.offsetLeft;

    //         courseBox.style.position = 'fixed';
    //         courseBox.top = 75 + 'px';
    //         courseBox.left = left + 'px';

    //         console.log('已固定侧边栏');
    //     }
    // })
})

const dateFormat = (date) => {
    if(date){
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();
        // 得到今天是星期几
        let weekday = date.getDay();
        let wkDayArr = ['日', '一', '二', '三', '四', '五', '六'];

        return `${year}年${month}月${day}号 星期${wkDayArr[weekday]}`;
    }

    return '日期请求出错...'
}