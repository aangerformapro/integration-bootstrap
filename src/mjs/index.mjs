const blog = document.querySelector('.blog');




addEventListener('click', e => {
    if (e.target.closest('.scroll-down')) {

        location.hash = 'blog';

    }
});




function typeLetter(elem, letter, delay) {
    return new Promise(resolve => {

        setTimeout(() => {
            elem.innerHTML += letter;
            resolve(letter);
        }, delay)

    });
}



async function type(elem, word, delay) {


    elem.innerHTML = '';

    let letters = word.split('');
    letters.push('');

    for (let i = 0; i < letters.length; i++) {
        await typeLetter(elem, letters[i], delay);
    }



    return word;

}



async function typeList(elem, list, delay) {

    while (true) {
        for (let i = 0; i < list.length; i++) {
            await type(elem, list[i], delay);



        }
    }


    return list;

}


const elem = document.querySelector('header .title'), list = ['hello', 'bonjour', 'salut'], delay = 300;

// typeList(elem, list, delay);