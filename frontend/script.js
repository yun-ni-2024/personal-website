function animateBox() {
    const box = document.getElementById('box');
    box.style.transform = box.style.transform === 'translateY(100px)' ? 'translateY(0)' : 'translateY(100px)';
}
