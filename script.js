var pointer = document.documentElement;        pointer.addEventListener('mousemove', m => {
    pointer.style.setProperty('--x', m.clientX + 'px');
    pointer.style.setProperty('--y', m.clientY + 'px');
})