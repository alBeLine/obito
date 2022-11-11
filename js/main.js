window.addEventListener('load', function(){
    /* 背景流星雨制作 */
    let starM = document.querySelector('.shooting-star');
    let contain = document.querySelector('.cover-mask');

    function getRdNum() {
        let rdStep = Math.ceil(Math.random() * 10);
        console.log(rdStep);
        let top = 35 - 5*rdStep +'%';
        let right = 5 + 3*rdStep + '%';
        return [top, right];
    }

    setInterval(function() {
        let star = starM.cloneNode(true);

        let top, right;
        [top, right] = getRdNum();
        top < 0 || right < 8 ? [top] = getRdNum() : top;        
        star.style.top = top
        star.style.right = right;
        contain.removeChild(contain.children[0]);
        contain.appendChild(star);
    }, 3000);
})