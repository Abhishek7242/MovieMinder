let mcontainer = document.getElementById('moviecontainer');
let next = document.getElementById('nextbtnbox').querySelector('#nextbtn');
let previous = document.getElementById('nextbtnbox').querySelector('#previousbtn');

let action = [
  { movieName: "Captain Phillips (2013)", image: "https://pics.filmaffinity.com/Captain_Phillips-273270973-large.jpg", info: "IMDb : 7.8/10", link: 'https://m.vegamovies.tips/captain-phillips-2013-dual-audio-movie-480p-720p-1080p/' },
  { movieName: "Don't Listen (2020)", image: "dontlisten.jpg", info: "IMDb : 6.1/10", link: 'https://m.vegamovies.tips/download-dont-listen-2020-english-audio-480p-720p/' },
  { movieName: "In the Shadow of the Moon (2019) ", image: "https://m.media-amazon.com/images/M/MV5BN2I1MGQ2ZjMtMjc1My00YzU1LThjNzktNzJlMWRkMTc0NjZhXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg", info: "IMDb : 6.2/10", link: 'https://m.vegamovies.tips/download-in-the-shadow-of-the-moon-2019-dual-audio-hindi-480p-720p-1080p/' },
  { movieName: "Mirage (2018)", image: "mirage.jpg", info: "IMDb : 7.4/10", link: 'https://m.vegamovies.tips/download-mirage-2018-hindi-english-movie-480p-720p-1080p/' },
  { movieName: "No Time to Die (2021)", image: "https://m.media-amazon.com/images/M/MV5BYWQ2NzQ1NjktMzNkNS00MGY1LTgwMmMtYTllYTI5YzNmMmE0XkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_.jpg", info: "IMDb : 7.3/10", link: 'https://m.vegamovies.tips/download-no-time-to-die-2021-dual-audio-full-movie-480p-720p-1080p/' },
  { movieName: "No Escape (2015) ", image: "https://m.media-amazon.com/images/M/MV5BMjE0MDI3NTE5NF5BMl5BanBnXkFtZTgwNzI3ODM2NjE@._V1_.jpg", info: "IMDb : 6.7/10", link: 'https://m.vegamovies.tips/download-no-escape-2015-dual-audio-hindi-english-movie-480p-720p-1080p/' },
  { movieName: "The Invisible Guest (2016)", image: "theinvisibleguest.jpg", info: "IMDb : 8/10", link: 'https://m.vegamovies.tips/download-the-invisible-guest-2016-hindi-dual-audio-full-movie/' },
  { movieName: "The Unhealer (2020) ", image: "https://m.media-amazon.com/images/M/MV5BNWFjMTA0Y2UtMTMyNC00NWMxLTliNTYtMDRhNWRjZmYyOWU5XkEyXkFqcGdeQXVyMjI0MDA1MA@@._V1_FMjpg_UX1000_.jpg", info: "IMDb : 5.6/10", link: 'https://www.google.com/search?q=the+unhealer+movie+download&source=lmns&bih=752&biw=1536&hl=en&sa=X&ved=2ahUKEwi-zL_Yt-D_AhWriGMGHWTXA6AQ_AUoAHoECAEQAA' },
  { movieName: "Taken All Movie Collection (2008-2014) ", image: "https://www.tvguide.com/a/img/catalog/provider/1/2/1-8853215891.jpg", info: "IMDb : 7.8/10", link: 'https://m.vegamovies.tips/download-taken-3-movie-collection-2008-2014-english-with-subtitles-480p-720p-1080p-bluray/' },
  { movieName: "X-MEN All Movie Collection", image: "https://upload.wikimedia.org/wikipedia/en/8/81/X-MenfilmPoster.jpg", info: "", link: 'https://m.vegamovies.tips/?s=x-men' },



  // ... rest of the movie data ...
];
let limit = 20;
let i = 0;
if (limit >= action.length) {
    next.style.display = 'none';
}
previous.style.display = 'none';

next.addEventListener('click', () => {
    i = limit;
    limit += 20;
    mcontainer.innerHTML=''
    previous.style.display = 'flex';
  if (limit >= action.length) {
    next.style.display = 'none';

    for (i; i < limit; i++) {
        let div = document.createElement('div');
        div.classList.add('imgbox');
        div.style.margin = '22px';
        div.style.background = 'black';
    
        let a = document.createElement('a');
        a.classList.add('link');
        a.href = action[i].link;
    
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
