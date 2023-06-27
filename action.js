let mcontainer = document.getElementById('moviecontainer');
let next = document.getElementById('nextbtnbox').querySelector('#nextbtn');
let previous = document.getElementById('nextbtnbox').querySelector('#previousbtn');

let action = [
  { movieName: "Alita: Battle Angel (2019) ", image: "https://m.media-amazon.com/images/M/MV5BMTQzYWYwYjctY2JhZS00NTYzLTllM2UtZWY5ZTk0NmYwYzIyXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_FMjpg_UX1000_.jpg", info: "IMDb : 7.3/10", link: 'https://m.vegamovies.tips/download-alita-battle-angel-2019-hindi-480p-720p-1080p-2160p-4k/' },
  { movieName: "Coma (2019) ", image: "https://m.media-amazon.com/images/M/MV5BNDE5ODg1Y2MtNmQ4MC00M2U4LTk2YTktMGI5ZGJmNTExNjE1XkEyXkFqcGdeQXVyODc0OTEyNDU@._V1_FMjpg_UX1000_.jpg", info: "IMDb : 6.3/10", link: 'https://m.vegamovies.tips/download-coma-2019-dual-audio-hindi-bluray-480p-720p-1080p/' },
  { movieName: "Captain Phillips (2013)", image: "https://pics.filmaffinity.com/Captain_Phillips-273270973-large.jpg", info: "IMDb : 7.8/10", link: 'https://m.vegamovies.tips/captain-phillips-2013-dual-audio-movie-480p-720p-1080p/' },
  { movieName: "Clash of the Titans (2010)", image: "https://m.media-amazon.com/images/M/MV5BMTYxNjg4MzU5OV5BMl5BanBnXkFtZTcwOTA3NTUwMw@@._V1_.jpg", info: "IMDb : 5.9/10", link: 'https://m.vegamovies.tips/clash-of-the-titans-2010-hindi-dubbed-english-movie/' },
  { movieName: "Elektra (2005) ", image: "https://upload.wikimedia.org/wikipedia/en/thumb/2/21/Elektra_teaser.jpg/220px-Elektra_teaser.jpg", info: "IMDb : 4.7/10", link: 'https://m.vegamovies.tips/download-elektra-2005-dual-audio-hindi-movie-480p-720p/' },
  { movieName: "Edge of Tomorrow (2014)", image: "https://m.media-amazon.com/images/M/MV5BMTc5OTk4MTM3M15BMl5BanBnXkFtZTgwODcxNjg3MDE@._V1_FMjpg_UX1000_.jpg", info: "IMDb : 7.9/10", link: 'https://m.vegamovies.tips/edge-of-tomorrow-2014-dual-audio-hindi-english-movie/' },
  { movieName: "Shazam: Fury of the Gods (2023)", image: "shazam2.jpg", info: 'IMDb : 6/10' , link: 'https://m.vegamovies.tips/download-shazam-fury-of-the-gods-2023-hindi-5-1-org-480p-720p-1080p-2160p/' },
  { movieName: "Godzilla vs. Kong (2021) ", image: "https://m.media-amazon.com/images/M/MV5BMzk2ZmYxNTUtODlhMi00NzE2LTkwMTctYjg0ODQ1ZjkyNzJmXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg", info: "IMDb : 6.3/10", link: 'https://m.vegamovies.tips/download-godzilla-vs-kong-2021-3d-movie-dual-audio-hindi-bluray-720p-1080p/' },
  { movieName: "Guardians (2017) ", image: "https://m.media-amazon.com/images/M/MV5BOTIwY2I1NDAtYjJhOS00N2Q4LWE4YjAtZDQ3ZTA4MzcwMzRkL2ltYWdlXkEyXkFqcGdeQXVyNjMxMzM3NDI@._V1_FMjpg_UX1000_.jpg", info: "IMDb : 4/10", link: 'https://m.vegamovies.tips/download-the-guardians-2017-hindi-dubbed-org-bluray-480p-720p-1080p/' },
  { movieName: "Gods of Egypt (2016) ", image: "https://upload.wikimedia.org/wikipedia/en/2/2f/Gods_of_Egypt_poster.jpg", info: "IMDb : 5.4/10", link: 'https://m.vegamovies.tips/download-gods-of-egypt-2016-dual-audio-hindi-movie-480p-720p-1080p/' },
  { movieName: "Hercules (2014)", image: "https://static.tvtropes.org/pmwiki/pub/images/eba1adc7_2778_4f11_a80f_b23d91f75449.jpeg", info: "IMDb : 6/10", link: 'https://m.vegamovies.tips/hercules-2014-hindi-english-movie/' },
  { movieName: "John Wick Chapter 4 (2023)", image: "johnwick4.jpg", info:  'IMDb : 7.9/10', link: 'https://m.vegamovies.tips/download-john-wick-chapter-4-2023-hindi-org-dubbed-bluray-480p-720p-1080p-2160p-4k/' },
  { movieName: "Jungle Cruise (2021)", image: "https://lumiere-a.akamaihd.net/v1/images/p_junglecruise_21740_v2_bb7f0ae4.jpeg", info: "IMDb : 6.6/10", link: 'https://m.vegamovies.tips/download-jungle-cruise-dual-audio-bluray-full-movie/' },
  { movieName: "Jurassic World Dominion (2022) ", image: "https://upload.wikimedia.org/wikipedia/en/c/ce/JurassicWorldDominion_Poster.jpeg", info: "IMDb : 5.9/10", link: 'https://m.vegamovies.tips/download-jurassic-world-dominion-2022-dual-audio-hindi-480p-720p-1080p-2160p-4k-hdr/' },
  { movieName: "Logan (2017)", image: "https://m.media-amazon.com/images/M/MV5BYzc5MTU4N2EtYTkyMi00NjdhLTg3NWEtMTY4OTEyMzJhZTAzXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_FMjpg_UX1000_.jpg", info: "IMDb : 8.1/10", link: 'https://m.vegamovies.tips/download-logan-2017-dual-audio-hindi-movie-480p-720p-1080p/' },
  { movieName: "Lucy (2014)", image: "https://movieguide.b-cdn.net/wp-content/uploads/2014/07/lucy_ver2.jpg", info: "IMDb : 6.4/10", link: 'https://m.vegamovies.tips/download-lucy-2014-dual-audio-hindi-english-movie-480p-720p-1080p/' },
  { movieName: "Lone Survivor (2013) ", image: "https://m.media-amazon.com/images/M/MV5BMjA0NTgwOTk5Ml5BMl5BanBnXkFtZTcwMjE3NDc5OQ@@._V1_.jpg", info: "IMDb : 7.5/10", link: 'https://m.vegamovies.tips/lone-survivor-2013-dual-audio-hindi-480p-720p-1080p/' },
  { movieName: "Mortal Kombat (2021)", image: "https://m.media-amazon.com/images/M/MV5BYjZmMjdlNDEtOGE0NC00MmQyLWIyNTgtMzc1NWRjYTYzMWZmXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg", info: "IMDb : 6.1/10", link: 'https://m.vegamovies.tips/download-mortal-kombat-2021-dual-audio-hindi-bluray-480p-720p-1080p-2160p/' },
  { movieName: "Mortal Engines (2018)", image: "https://upload.wikimedia.org/wikipedia/en/c/ce/Mortal_Engines_teaser_poster.jpg", info: "IMDb :6.1 /10", link: 'https://m.vegamovies.tips/download-mortal-engines-2018-dual-audio-hindi-english-movie-480p-720p-1080p/' },
  { movieName: "No Escape (2015) ", image: "https://m.media-amazon.com/images/M/MV5BMjE0MDI3NTE5NF5BMl5BanBnXkFtZTgwNzI3ODM2NjE@._V1_.jpg", info: "IMDb : 6.7/10", link: 'https://m.vegamovies.tips/download-no-escape-2015-dual-audio-hindi-english-movie-480p-720p-1080p/' },
  { movieName: "No Time to Die (2021)", image: "https://m.media-amazon.com/images/M/MV5BYWQ2NzQ1NjktMzNkNS00MGY1LTgwMmMtYTllYTI5YzNmMmE0XkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_.jpg", info: "IMDb : 7.3/10", link: 'https://m.vegamovies.tips/download-no-time-to-die-2021-dual-audio-full-movie-480p-720p-1080p/' },
  { movieName: "Ride Along (2014)", image: "https://m.media-amazon.com/images/M/MV5BNjU4NzYzOTY1MF5BMl5BanBnXkFtZTgwMTAyNTc1MDE@._V1_.jpg", info: "IMDb : 6.1/10", link: 'https://m.vegamovies.tips/ride-along-2014-dual-audio-hindi-movie/' },
  { movieName: "Ride Along 2 (2016) ", image: "https://m.media-amazon.com/images/M/MV5BMTU4ODAzMzcxOV5BMl5BanBnXkFtZTgwODkxMDI1NjE@._V1_.jpg", info: "IMDb : 5.9/10", link: 'https://m.vegamovies.tips/ride-along-2-2016-dual-audio-hindi-english-movie-480p-720p-1080p/' },
  { movieName: "Suicide Squad (2016) ", image: "https://m.media-amazon.com/images/M/MV5BMjM1OTMxNzUyM15BMl5BanBnXkFtZTgwNjYzMTIzOTE@._V1_.jpg", info: "IMDb : 5.9/10", link: 'https://m.vegamovies.tips/download-suicide-squad-2016-hindi-org-dubbed-bluray-480p-720p-1080p/' },
  { movieName: "Samaritan (2022)", image: "https://upload.wikimedia.org/wikipedia/en/d/de/Samaritan2022Poster.jpg", info: "IMDb : 5.7/10", link: 'https://m.vegamovies.tips/download-samaritan-2022-dual-audio-hindi-480p-720p-1080p/' },
  { movieName: "The Tomorrow War (2021)", image: "https://m.media-amazon.com/images/M/MV5BNTI2YTI0MWEtNGQ4OS00ODIzLWE1MWEtZGJiN2E3ZmM1OWI1XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_FMjpg_UX1000_.jpg", info: "IMDb : 6.5/10", link: 'https://m.vegamovies.tips/download-the-tomorrow-war-2021-dual-audio-hindi-bluray-480p-720p-1080p-2160p/' },
  { movieName: "Taken All Movie Collection (2008-2014) ", image: "https://www.tvguide.com/a/img/catalog/provider/1/2/1-8853215891.jpg", info: "IMDb : 7.8/10", link: 'https://m.vegamovies.tips/download-taken-3-movie-collection-2008-2014-english-with-subtitles-480p-720p-1080p-bluray/' },
  { movieName: "TRON: Legacy (2010) ", image: "https://upload.wikimedia.org/wikipedia/en/c/c2/Tron_Legacy_poster.jpg", info: "IMDb : 6.8/10", link: 'https://m.vegamovies.tips/download-tron-legacy-2010-dual-audio-hindi-english-480p-720p-1080p/' },
  { movieName: "Tenet (2020) ", image: "https://upload.wikimedia.org/wikipedia/en/1/14/Tenet_movie_poster.jpg", info: "IMDb : 7.3/10", link: 'https://m.vegamovies.tips/download-tenet-2020-hindi-english-480p-720p-1080p/' },
  { movieName: "The Flash (2023)", image: "flash.jpg", info: "IMDb : 7.3/10 ", link: 'https://m.vegamovies.tips/download-the-flash-2023-hdts-hindi-dubbed-clear-audio-480p-720p-1080p/' },
  { movieName: "The Last Witch Hunter (2015) ", image: "https://www.themoviedb.org/t/p/w500/qXvOpA2nhK5HQ6I95sN3nnMtfjH.jpg", info: "IMDb : 9.4/10", link: 'https://m.vegamovies.tips/download-the-last-witch-hunter-2015-dual-audio-hindi-english-movie-480p-720p-1080p/' },
  { movieName: "The Suicide Squad (2021)", image: "https://images.moviesanywhere.com/d139775114b50558dafa489f9b2c0036/9ad4852f-53e6-47c3-bf71-83a11a2607cc.jpg", info: "IMDb : 7.2/10", link: 'https://m.vegamovies.tips/download-the-suicide-squad-2021-dual-audio-hindi-480p-720p-1080p/' },
  { movieName: "Warcraft (2016) ", image: "https://m.media-amazon.com/images/M/MV5BMjIwNTM0Mzc5MV5BMl5BanBnXkFtZTgwMDk5NDU1ODE@._V1_.jpg", info: "IMDb : 6.7/10", link: 'https://m.vegamovies.tips/download-warcraft-2016-dual-audio-hindi-bluray-480p-720p-1080p-2160p/' },
  { movieName: "X-MEN All Movie Collection", image: "https://upload.wikimedia.org/wikipedia/en/8/81/X-MenfilmPoster.jpg", info: "", link: 'https://m.vegamovies.tips/?s=x-men' },
  // { movieName: "(2019) ", image: "", info: "IMDb : /10", link: '' },


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
