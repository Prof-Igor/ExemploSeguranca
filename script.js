document.body.addEventListener('mousemove', function() {
    document.body.style.backgroundColor = "#000000"; // Muda para laranja ao passar o mouse
});

var pointer = document.documentElement;        pointer.addEventListener('mousemove', m => {
    pointer.style.setProperty('--x', m.clientX + 'px');
    pointer.style.setProperty('--y', m.clientY + 'px');
})