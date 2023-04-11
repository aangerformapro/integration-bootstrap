const blog = document.querySelector('.blog');




addEventListener('click', e => {
    if (e.target.closest('.scroll-down')) {

        location.hash = 'blog';

    }
});