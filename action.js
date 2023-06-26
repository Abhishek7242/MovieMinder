let mcontainer = document.getElementById('moviecontainer');
let next = document.getElementById('nextbtnbox').querySelector('#nextbtn');
let previous = document.getElementById('nextbtnbox').querySelector('#previousbtn');

let action = [
  { movieName: "The Flash (2023)", image: "flash.jpg", info: "IMDb : 7.3/10 ", link: 'https://m.vegamovies.tips/download-the-flash-2023-hdts-hindi-dubbed-clear-audio-480p-720p-1080p/' },
  { movieName: "Shazam: Fury of the Gods (2023)", image: "shazam2.jpg", info: 'IMDb : 6/10' , link: 'https://m.vegamovies.tips/download-shazam-fury-of-the-gods-2023-hindi-5-1-org-480p-720p-1080p-2160p/' },
  { movieName: "John Wick Chapter 4 (2023)", image: "johnwick4.jpg", info:  'IMDb : 7.9/10', link: 'https://m.vegamovies.tips/download-john-wick-chapter-4-2023-hindi-org-dubbed-bluray-480p-720p-1080p-2160p-4k/' },
  { movieName: "The Last Witch Hunter (2015) ", image: "https://www.themoviedb.org/t/p/w500/qXvOpA2nhK5HQ6I95sN3nnMtfjH.jpg", info: "IMDb : 9.4/10", link: 'https://m.vegamovies.tips/download-the-last-witch-hunter-2015-dual-audio-hindi-english-movie-480p-720p-1080p/' },
  { movieName: "Coma (2019) ", image: "https://m.media-amazon.com/images/M/MV5BNDE5ODg1Y2MtNmQ4MC00M2U4LTk2YTktMGI5ZGJmNTExNjE1XkEyXkFqcGdeQXVyODc0OTEyNDU@._V1_FMjpg_UX1000_.jpg", info: "IMDb : 6.3/10", link: 'https://m.vegamovies.tips/download-coma-2019-dual-audio-hindi-bluray-480p-720p-1080p/' },
  { movieName: "Godzilla vs. Kong (2021) ", image: "https://m.media-amazon.com/images/M/MV5BMzk2ZmYxNTUtODlhMi00NzE2LTkwMTctYjg0ODQ1ZjkyNzJmXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg", info: "IMDb : 6.3/10", link: 'https://m.vegamovies.tips/download-godzilla-vs-kong-2021-3d-movie-dual-audio-hindi-bluray-720p-1080p/' },
  { movieName: "Tenet (2020) ", image: "https://upload.wikimedia.org/wikipedia/en/1/14/Tenet_movie_poster.jpg", info: "IMDb : 7.3/10", link: 'https://m.vegamovies.tips/download-tenet-2020-hindi-english-480p-720p-1080p/' },
  { movieName: "Mortal Kombat (2021)", image: "https://m.media-amazon.com/images/M/MV5BYjZmMjdlNDEtOGE0NC00MmQyLWIyNTgtMzc1NWRjYTYzMWZmXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg", info: "IMDb : 6.1/10", link: 'https://m.vegamovies.tips/download-mortal-kombat-2021-dual-audio-hindi-bluray-480p-720p-1080p-2160p/' },
  { movieName: "Mortal Engines (2018)", image: "https://upload.wikimedia.org/wikipedia/en/c/ce/Mortal_Engines_teaser_poster.jpg", info: "IMDb :6.1 /10", link: 'https://m.vegamovies.tips/download-mortal-engines-2018-dual-audio-hindi-english-movie-480p-720p-1080p/' },
  { movieName: "Alita: Battle Angel (2019) ", image: "https://m.media-amazon.com/images/M/MV5BMTQzYWYwYjctY2JhZS00NTYzLTllM2UtZWY5ZTk0NmYwYzIyXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_FMjpg_UX1000_.jpg", info: "IMDb : 7.3/10", link: 'https://m.vegamovies.tips/download-alita-battle-angel-2019-hindi-480p-720p-1080p-2160p-4k/' },
  { movieName: "Jurassic World Dominion (2022) ", image: "https://upload.wikimedia.org/wikipedia/en/c/ce/JurassicWorldDominion_Poster.jpeg", info: "IMDb : 5.9/10", link: 'https://m.vegamovies.tips/download-jurassic-world-dominion-2022-dual-audio-hindi-480p-720p-1080p-2160p-4k-hdr/' },
  { movieName: "Guardians (2017) ", image: "https://m.media-amazon.com/images/M/MV5BOTIwY2I1NDAtYjJhOS00N2Q4LWE4YjAtZDQ3ZTA4MzcwMzRkL2ltYWdlXkEyXkFqcGdeQXVyNjMxMzM3NDI@._V1_FMjpg_UX1000_.jpg", info: "IMDb : 4/10", link: 'https://m.vegamovies.tips/download-the-guardians-2017-hindi-dubbed-org-bluray-480p-720p-1080p/' },


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
