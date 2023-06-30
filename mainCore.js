let limit = 20;
let i = 0;
if (limit >= action.length) {
    next.style.display = 'none';
}
previous.style.display = 'none';

next.addEventListener('click', () => {
    i = limit;
    limit += 20;
    mcontainer.innerHTML = ''
    previous.style.display = 'flex';
    if (limit >= action.length) {
        next.style.display = 'none';

        for (i; i < action.length; i++) {
            let div = document.createElement('div');
            div.classList.add('imgbox');
            // div.style.margin = '22px';
            div.style.background = 'black';

            let a = document.createElement('a');
            a.classList.add('link');
            a.href = action[i].link;
            // a.target = '_blank';


            let img = document.createElement('img');
            img.src = action[i].image;
            img.classList.add('imgsize');

            let p = document.createElement('p');
            p.innerText = action[i].movieName;
            // p.classList.add('fontsize')

            let p1 = document.createElement('p');
            p1.innerText = action[i].info;
            p1.style.textAlign = 'center';
            // p1.classList.add('fontsize')

            mcontainer.appendChild(div);
            div.appendChild(a);
            a.appendChild(img);
            a.appendChild(p);
            a.appendChild(p1);
        }
        return;
    }

    for (i; i < limit; i++) {
        let div = document.createElement('div');
        div.classList.add('imgbox');
        div.style.margin = '22px';
        div.style.background = 'black';

        let a = document.createElement('a');
        a.classList.add('link');
        a.href = action[i].link;
        // a.target = '_blank';


        let img = document.createElement('img');
        img.src = action[i].image;
        img.classList.add('imgsize');

        let p = document.createElement('p');
        p.innerText = action[i].movieName;

        let p1 = document.createElement('p');
        p1.innerText = action[i].info;
        p1.style.textAlign = 'center';

        mcontainer.appendChild(div);
        div.appendChild(a);
        a.appendChild(img);
        a.appendChild(p);
        a.appendChild(p1);
    }


});

previous.addEventListener('click', () => {
    i = limit - 40;
    limit -= 20;
    mcontainer.innerHTML = '';

    if (i <= 0) {
        previous.style.display = 'none';
        next.style.display = 'flex';

        i = 0;
    }

    for (i; i < limit; i++) {
        let div = document.createElement('div');
        div.classList.add('imgbox');
        div.style.margin = '22px';
        div.style.background = 'black';

        let a = document.createElement('a');
        a.classList.add('link');
        a.href = action[i].link;
        // a.target = '_blank';

        let img = document.createElement('img');
        img.src = action[i].image;
        img.classList.add('imgsize');

        let p = document.createElement('p');
        p.innerText = action[i].movieName;

        let p1 = document.createElement('p');
        p1.innerText = action[i].info;
        p1.style.textAlign = 'center';

        mcontainer.appendChild(div);
        div.appendChild(a);
        a.appendChild(img);
        a.appendChild(p);
        a.appendChild(p1);
    }

    next.style.display = 'block';
});


// Initial movie display
for (i; i < Math.min(limit, action.length); i++) {
    let div = document.createElement('div');
    div.classList.add('imgbox');
    div.style.margin = '22px';
    div.style.background = 'black';

    let a = document.createElement('a');
    a.classList.add('link');
    a.href = action[i].link;
    // a.target = '_blank';


    let img = document.createElement('img');
    img.src = action[i].image;
    img.classList.add('imgsize');

    let p = document.createElement('p');
    p.innerText = action[i].movieName;

    let p1 = document.createElement('p');
    p1.innerText = action[i].info;
    p1.style.textAlign = 'center';

    mcontainer.appendChild(div);
    div.appendChild(a);
    a.appendChild(img);
    a.appendChild(p);
    a.appendChild(p1);
}
// Set a cookie with SameSite attribute


// 
