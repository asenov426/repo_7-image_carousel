const imgsContainer = document.getElementById('imgsContainer');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');
const imgs = document.querySelectorAll('img');

let idx = 0;

rightBtn.addEventListener('click', () => {
    idx++;

    if(idx < imgs.length - 1) {
        leftBtn.disabled = false;
        rightBtn.disabled = false;
    } else if(idx === imgs.length - 1) {
        leftBtn.disabled = false;
        rightBtn.disabled = true;
    }

    imgsContainer.style.transform = `translate(${-idx * 500}px)`;
});

leftBtn.addEventListener('click', () => {
    idx--;

    if(idx > 0) {
        leftBtn.disabled = false;
        rightBtn.disabled = false;
    } else if(idx === 0) {
        leftBtn.disabled = true;
        rightBtn.disabled = false;
    }

    imgsContainer.style.transform = `translate(${-idx * 500}px)`;
});
