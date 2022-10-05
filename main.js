document.getElementById('button').addEventListener('click', function () {
    if (this.classList.contains('active')) {
        this.classList.remove('active');
        this.classList.add('not-active');
    }
    else {
        this.classList.add('active');
        this.classList.remove('not-active');
    }
})