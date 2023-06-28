let mcontainer = document.getElementById('moviecontainer');
let next = document.getElementById('nextbtnbox').querySelector('#nextbtn');
let previous = document.getElementById('nextbtnbox').querySelector('#previousbtn');

let action = [
  { movieName: "Alita: Battle Angel (2019) ", image: "https://m.media-amazon.com/images/M/MV5BMTQzYWYwYjctY2JhZS00NTYzLTllM2UtZWY5ZTk0NmYwYzIyXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_FMjpg_UX1000_.jpg", info: "IMDb : 7.3/10", link: 'https://m.vegamovies.tips/download-alita-battle-angel-2019-hindi-480p-720p-1080p-2160p-4k/' },
  { movieName: "Big Bug (2022)", image: "https://www.themoviedb.org/t/p/original/jDJOojbuqgnNVGmKgmuYzBpaIgP.jpg", info: "IMDb : 5.5/10", link: 'https://m.vegamovies.tips/download-bigbug-2022-hindi-voice-over-full-movie-web-dl-720p/' },
  { movieName: "Crimes of the Future (2022)", image: "https://upload.wikimedia.org/wikipedia/en/d/d4/Crimes_of_the_Future_%282022_film%29.jpg", info: "IMDb : 5.9/10", link: 'https://www.google.com/search?q=crimes+of+the+future+movie+download&bih=752&biw=1536&hl=en&sxsrf=APwXEdfi8UAEu-48ihDkjRf_mRRfYKq7CQ%3A1687762309451&ei=hTWZZMKEG4_NseMPrZSCoA0&ved=0ahUKEwiC263HrOD_AhWPZmwGHS2KANQQ4dUDCA8&uact=5&oq=crimes+of+the+future+movie+download&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQA0oECEEYAFAaWKkLYOYNaABwAXgAgAGpA4gBlgiSAQcyLTEuMC4ymAEAoAEBwAEB&sclient=gws-wiz-serp' },
  { movieName: "Code 8 (2019) ", image: "https://static.tvtropes.org/pmwiki/pub/images/f14b02ac_922c_483a_a928_4c6975fe04d9.png", info: "IMDb : 6.1/10", link: 'https://m.vegamovies.tips/download-code-8-2019-hindi-dubbed-480p-720p-1080p/' },
  { movieName: "Coma (2019) ", image: "https://m.media-amazon.com/images/M/MV5BNDE5ODg1Y2MtNmQ4MC00M2U4LTk2YTktMGI5ZGJmNTExNjE1XkEyXkFqcGdeQXVyODc0OTEyNDU@._V1_FMjpg_UX1000_.jpg", info: "IMDb : 6.3/10", link: 'https://m.vegamovies.tips/download-coma-2019-dual-audio-hindi-bluray-480p-720p-1080p/' },
  { movieName: "Endless Loop (2018)", image: "endlessloop.jpg", info: "IMDb : 5.4/10 ", link: 'https://www.google.com/search?q=endless+loop+2018+movie+download&rlz=1C1ONGR_enIN1031IN1031&oq=endless+loop+2018+movie+download&aqs=chrome..69i57j0i390i650l3.440993560j0j15&sourceid=chrome&ie=UTF-8' },
  { movieName: "Edge of Tomorrow (2014)", image: "https://m.media-amazon.com/images/M/MV5BMTc5OTk4MTM3M15BMl5BanBnXkFtZTgwODcxNjg3MDE@._V1_FMjpg_UX1000_.jpg", info: "IMDb : 7.9/10", link: 'https://m.vegamovies.tips/edge-of-tomorrow-2014-dual-audio-hindi-english-movie/' },
  { movieName: "Godzilla All Movies Collection ", image: "https://m.media-amazon.com/images/M/MV5BOGFjYWNkMTMtMTg1ZC00Y2I4LTg0ZTYtN2ZlMzI4MGQwNzg4XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg", info: "", link: 'https://m.vegamovies.tips/?s=godzilla' },
  { movieName: "Guardians (2017) ", image: "https://m.media-amazon.com/images/M/MV5BOTIwY2I1NDAtYjJhOS00N2Q4LWE4YjAtZDQ3ZTA4MzcwMzRkL2ltYWdlXkEyXkFqcGdeQXVyNjMxMzM3NDI@._V1_FMjpg_UX1000_.jpg", info: "IMDb : 4/10", link: 'https://m.vegamovies.tips/download-the-guardians-2017-hindi-dubbed-org-bluray-480p-720p-1080p/' },
  { movieName: "Godzilla vs. Kong (2021) ", image: "https://m.media-amazon.com/images/M/MV5BMzk2ZmYxNTUtODlhMi00NzE2LTkwMTctYjg0ODQ1ZjkyNzJmXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg", info: "IMDb : 6.3/10", link: 'https://m.vegamovies.tips/download-godzilla-vs-kong-2021-3d-movie-dual-audio-hindi-bluray-720p-1080p/' },
  { movieName: "In the Shadow of the Moon (2019) ", image: "https://m.media-amazon.com/images/M/MV5BN2I1MGQ2ZjMtMjc1My00YzU1LThjNzktNzJlMWRkMTc0NjZhXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg", info: "IMDb : 6.2/10", link: 'https://m.vegamovies.tips/download-in-the-shadow-of-the-moon-2019-dual-audio-hindi-480p-720p-1080p/' },
  { movieName: "Jurassic World Dominion (2022) ", image: "https://upload.wikimedia.org/wikipedia/en/c/ce/JurassicWorldDominion_Poster.jpeg", info: "IMDb : 5.9/10", link: 'https://m.vegamovies.tips/download-jurassic-world-dominion-2022-dual-audio-hindi-480p-720p-1080p-2160p-4k-hdr/' },
  { movieName: "Logan (2017)", image: "https://m.media-amazon.com/images/M/MV5BYzc5MTU4N2EtYTkyMi00NjdhLTg3NWEtMTY4OTEyMzJhZTAzXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_FMjpg_UX1000_.jpg", info: "IMDb : 8.1/10", link: 'https://m.vegamovies.tips/download-logan-2017-dual-audio-hindi-movie-480p-720p-1080p/' },
  { movieName: "Lucy (2014)", image: "https://movieguide.b-cdn.net/wp-content/uploads/2014/07/lucy_ver2.jpg", info: "IMDb : 6.4/10", link: 'https://m.vegamovies.tips/download-lucy-2014-dual-audio-hindi-english-movie-480p-720p-1080p/' },
  { movieName: "Mortal Kombat (2021)", image: "https://m.media-amazon.com/images/M/MV5BYjZmMjdlNDEtOGE0NC00MmQyLWIyNTgtMzc1NWRjYTYzMWZmXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg", info: "IMDb : 6.1/10", link: 'https://m.vegamovies.tips/download-mortal-kombat-2021-dual-audio-hindi-bluray-480p-720p-1080p-2160p/' },
  { movieName: "Mortal Engines (2018)", image: "https://upload.wikimedia.org/wikipedia/en/c/ce/Mortal_Engines_teaser_poster.jpg", info: "IMDb :6.1 /10", link: 'https://m.vegamovies.tips/download-mortal-engines-2018-dual-audio-hindi-english-movie-480p-720p-1080p/' },
  { movieName: "Nope (2022)", image: "https://www.uphe.com/sites/default/files/styles/scale__319w_/public/2022/09/Nope_DigitalArt.webp?itok=BI6vIeYH", info: "IMDb : 6.8/10", link: 'https://m.vegamovies.tips/download-nope-2022-imax-bluray-dual-audio-hindi-480p-720p-1080p-2160p-4k/' },
  { movieName: "Only (2019) ", image: "https://upload.wikimedia.org/wikipedia/en/2/22/Only_poster.jpg", info: "IMDb : 5.1/10", link: 'https://m.vegamovies.tips/download-only-2020-hindi-dual-audio-full-movie/' },
  { movieName: "Shazam: Fury of the Gods (2023)", image: "shazam2.jpg", info: 'IMDb : 6/10' , link: 'https://m.vegamovies.tips/download-shazam-fury-of-the-gods-2023-hindi-5-1-org-480p-720p-1080p-2160p/' },
  { movieName: "Synchronic (2019)", image: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/Synchronic_poster.jpeg/220px-Synchronic_poster.jpeg", info: "IMDb : 6.2/10", link: 'https://m.vegamovies.tips/synchronic-2020-full-movie-in-hindi-dubbed/' },
  { movieName: "Surrogates (2020)", image: "surrogates.jpg", info: "IMDb : 6.3/10", link: 'https://m.vegamovies.tips/download-surrogates-2009-dual-audio-hindi-movie-480p-720p-bluray/' },
  { movieName: "TRON: Legacy (2010) ", image: "https://upload.wikimedia.org/wikipedia/en/c/c2/Tron_Legacy_poster.jpg", info: "IMDb : 6.8/10", link: 'https://m.vegamovies.tips/download-tron-legacy-2010-dual-audio-hindi-english-480p-720p-1080p/' },
  { movieName: "The Adam Project (2022) ", image: "https://m.media-amazon.com/images/M/MV5BOWM0YWMwMDQtMjE5NS00ZTIwLWE1NWEtODViMWZjMWI2OTU3XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg", info: "IMDb : 6.7/10", link: 'https://m.vegamovies.tips/download-the-adam-project-2022-dual-audio-hindi-480p-720p-1080p-2160p/' },
  { movieName: "The Flash (2023)", image: "flash.jpg", info: "IMDb : 7.3/10 ", link: 'https://m.vegamovies.tips/download-the-flash-2023-hdts-hindi-dubbed-clear-audio-480p-720p-1080p/' },
  { movieName: "The In Between (2022)", image: "https://m.media-amazon.com/images/M/MV5BNGRjNWUxMzgtM2ZhZC00NmI3LThiNWEtNGFkNDk4OWRmYWI4XkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_.jpg", info: "IMDb : 5.9/10", link: 'https://m.vegamovies.tips/download-the-in-between-2022-dual-audio-hindi-480p-720p-1080p/' },
  { movieName: "The Tomorrow War (2021)", image: "https://m.media-amazon.com/images/M/MV5BNTI2YTI0MWEtNGQ4OS00ODIzLWE1MWEtZGJiN2E3ZmM1OWI1XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_FMjpg_UX1000_.jpg", info: "IMDb : 6.5/10", link: 'https://m.vegamovies.tips/download-the-tomorrow-war-2021-dual-audio-hindi-bluray-480p-720p-1080p-2160p/' },
  { movieName: "The Wandering Earth (2019) ", image: "https://m.media-amazon.com/images/M/MV5BMWQ1ZTI1ZjEtM2RkNC00MDIxLWI2NTMtMjgyN2ZkZjYwMDYwXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg", info: "IMDb : 5.9/10", link: 'https://m.vegamovies.tips/download-the-wandering-earth-2019-english-movie-480p-720p-1080p/' },
  { movieName: "Tenet (2020) ", image: "https://upload.wikimedia.org/wikipedia/en/1/14/Tenet_movie_poster.jpg", info: "IMDb : 7.3/10", link: 'https://m.vegamovies.tips/download-tenet-2020-hindi-english-480p-720p-1080p/' },
  { movieName: "The Unhealer (2020) ", image: "https://m.media-amazon.com/images/M/MV5BNWFjMTA0Y2UtMTMyNC00NWMxLTliNTYtMDRhNWRjZmYyOWU5XkEyXkFqcGdeQXVyMjI0MDA1MA@@._V1_FMjpg_UX1000_.jpg", info: "IMDb : 5.6/10", link: 'https://www.google.com/search?q=the+unhealer+movie+download&source=lmns&bih=752&biw=1536&hl=en&sa=X&ved=2ahUKEwi-zL_Yt-D_AhWriGMGHWTXA6AQ_AUoAHoECAEQAA' },
  { movieName: "The World's End (2013) ", image: "https://m.media-amazon.com/images/M/MV5BNzA1MTk1MzY0OV5BMl5BanBnXkFtZTgwNjkzNTUwMDE@._V1_FMjpg_UX1000_.jpg", info: "IMDb : 6.9/10", link: 'https://m.vegamovies.tips/download-the-worlds-end-2013-dual-audio-hindi-480p-720p-1080p/' },
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
