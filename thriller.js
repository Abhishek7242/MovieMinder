let mcontainer = document.getElementById('moviecontainer');
let next = document.getElementById('nextbtnbox').querySelector('#nextbtn');
let previous = document.getElementById('nextbtnbox').querySelector('#previousbtn');

let action = [
  { movieName: "Blood Hunt (2017) ", image: "https://m.media-amazon.com/images/M/MV5BZmFlNzg5MjctNjJkMS00YjRhLWJjYmMtYzdhOWE0NGE3OGVmXkEyXkFqcGdeQXVyMTk5MDk1OQ@@._V1_.jpg", info: "IMDb : 4.7/10", link: 'https://www.google.com/search?q=blood+hunt+movie+download&bih=752&biw=1536&rlz=1C1ONGR_enIN1031IN1031&hl=en&sxsrf=APwXEdeGfnD5P37w9GvQGPiOGacbprkdrA%3A1687929937226&ei=UcSbZMm5DZrI1e8P2Omp2AU&oq=blood+hunt+movie+do&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQARgAMgUIABCABDIFCAAQgAQyCAgAEBYQHhAKMgYIABAWEB4yBggAEBYQHjIGCAAQFhAeMgYIABAWEB4yBggAEBYQHjIICAAQigUQhgMyCAgAEIoFEIYDOgoIABBHENYEELADOgQIIxAnSgQIQRgAUIABWN0QYO4caAZwAHgBgAHgAYgBgwWSAQMyLTOYAQCgAQHAAQHIAQg&sclient=gws-wiz-serp' },
  { movieName: "Captain Phillips (2013)", image: "https://pics.filmaffinity.com/Captain_Phillips-273270973-large.jpg", info: "IMDb : 7.8/10", link: 'https://m.vegamovies.tips/captain-phillips-2013-dual-audio-movie-480p-720p-1080p/' },
  { movieName: "Code 8 (2019) ", image: "https://static.tvtropes.org/pmwiki/pub/images/f14b02ac_922c_483a_a928_4c6975fe04d9.png", info: "IMDb : 6.1/10", link: 'https://m.vegamovies.tips/download-code-8-2019-hindi-dubbed-480p-720p-1080p/' },
  { movieName: "Don't Listen (2020)", image: "dontlisten.jpg", info: "IMDb : 6.1/10", link: 'https://m.vegamovies.tips/download-dont-listen-2020-english-audio-480p-720p/' },
  { movieName: "Devil (2010)", image: "https://m.media-amazon.com/images/M/MV5BZDVmZGExMTEtNjk5OS00MTFkLWI0ZDMtNzg4YWFmNGY3NjRkXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_.jpg", info: "IMDb : 6.3/10", link: 'https://m.vegamovies.tips/download-devil-2010-hindi-dual-audio-full-movie/' },
  { movieName: "Deadly Virtues (2014) ", image: "https://m.media-amazon.com/images/M/MV5BNzVlYzEwNmUtNjhlMy00ZTczLWI1MWQtMTBkMGVlMDQyOTM5XkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_.jpg", info: "IMDb : 4.8/10", link: 'https://www.google.com/search?q=Deadly+Virtues+movie+download+in+Hindi+&bih=752&biw=1536&rlz=1C1ONGR_enIN1031IN1031&hl=en&sxsrf=APwXEdeJuSBvMvh5gNb58wScWne11ZYkqQ%3A1687930632058&ei=CMebZL-RA4qX-AbH94qIAg&ved=0ahUKEwi_terNn-X_AhWKC94KHce7AiEQ4dUDCA8&uact=5&oq=Deadly+Virtues+movie+download+in+Hindi+&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIFCAAQgAQyCAgAEIAEEMsBMggIABCKBRCGAzIICAAQigUQhgMyCAgAEIoFEIYDMggIABCKBRCGAzoJCAAQCBAeELADOgYIABAWEB46CAghEBYQHhAdOgUIABCiBDoFCCEQoAE6BwghEKABEAo6BAghEBU6BAghEApKBAhBGAFQxgJYyUlgmUxoAnAAeAGAAeICiAGeIJIBBjItMTIuM5gBAKABAcABAcgBAQ&sclient=gws-wiz-serp' },
  { movieName: "In the Shadow of the Moon (2019) ", image: "https://m.media-amazon.com/images/M/MV5BN2I1MGQ2ZjMtMjc1My00YzU1LThjNzktNzJlMWRkMTc0NjZhXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg", info: "IMDb : 6.2/10", link: 'https://m.vegamovies.tips/download-in-the-shadow-of-the-moon-2019-dual-audio-hindi-480p-720p-1080p/' },
  { movieName: "Intrusion (2021)", image: "https://m.media-amazon.com/images/M/MV5BZTU2ZmFhZjktODFkMS00YTMyLTg2OTktMzY3Y2NkZGEwNDU1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg", info: "IMDb : 5.3/10", link: 'https://m.vegamovies.tips/download-intrusion-2021-dual-audio-hindi-480p-720p-1080p-netflix-movie/' },
  { movieName: "Hereditary (2018)", image: "https://m.media-amazon.com/images/M/MV5BOTU5MDg3OGItZWQ1Ny00ZGVmLTg2YTUtMzBkYzQ1YWIwZjlhXkEyXkFqcGdeQXVyNTAzMTY4MDA@._V1_.jpg", info: "IMDb : 7.3/10", link: 'https://m.vegamovies.tips/download-hereditary-2018-hindi-org-dubbed-bluray-480p-720p-1080p-2160p-4k/' },
  { movieName: "Look Away (2018)", image: "https://m.media-amazon.com/images/M/MV5BMTEzOTY0MDI3MTdeQTJeQWpwZ15BbWU4MDk5NDAyNDYz._V1_.jpg", info: "IMDb : 5.8/10", link: 'https://hdmoviearea.info/look-away-full-movie-download/' },
  { movieName: "Mirage (2018)", image: "mirage.jpg", info: "IMDb : 7.4/10", link: 'https://m.vegamovies.tips/download-mirage-2018-hindi-english-movie-480p-720p-1080p/' },
  { movieName: "Mother! (2017)", image: "https://upload.wikimedia.org/wikipedia/en/9/94/Mother%212017.jpg", info: "IMDb : 6.6/10", link: 'https://m.vegamovies.tips/download-mother-2017-dual-audio-hindi-480p-720p-1080p/' },
  { movieName: "No Time to Die (2021)", image: "https://m.media-amazon.com/images/M/MV5BYWQ2NzQ1NjktMzNkNS00MGY1LTgwMmMtYTllYTI5YzNmMmE0XkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_.jpg", info: "IMDb : 7.3/10", link: 'https://m.vegamovies.tips/download-no-time-to-die-2021-dual-audio-full-movie-480p-720p-1080p/' },
  { movieName: "No Escape (2015) ", image: "https://m.media-amazon.com/images/M/MV5BMjE0MDI3NTE5NF5BMl5BanBnXkFtZTgwNzI3ODM2NjE@._V1_.jpg", info: "IMDb : 6.7/10", link: 'https://m.vegamovies.tips/download-no-escape-2015-dual-audio-hindi-english-movie-480p-720p-1080p/' },
  { movieName: "Plush (2013)", image: "https://m.media-amazon.com/images/M/MV5BNjQ4MTQ0MTA5Ml5BMl5BanBnXkFtZTgwMzY3MTYwMDE@._V1_FMjpg_UX1000_.jpg", info: "IMDb : 5.2/10", link: 'https://m.vegamovies.tips/download-plush-2013-english-full-movie-480p-720p-1080p/' },
  { movieName: "Quarantine (2008)", image: "https://m.media-amazon.com/images/M/MV5BMjY0MDgwNTQ4OF5BMl5BanBnXkFtZTcwMzQzNjY3MQ@@._V1_FMjpg_UX1000_.jpg", info: "IMDb : 5.9/10", link: 'https://m.vegamovies.tips/quarantine-2008-dual-audio-hindi-movie/' },
  { movieName: "Quarantine 2: Terminal (2011) ", image: "https://m.media-amazon.com/images/M/MV5BMjE2MDMxODUxM15BMl5BanBnXkFtZTcwMDk4Mjk0Ng@@._V1_FMjpg_UX1000_.jpg", info: "IMDb : 5.2/10", link: 'https://bollyflix.loan/quarantine-2-terminal-2011-hindi-dubbed-movie/' },
  { movieName: "Ready or Not (2019)", image: "https://m.media-amazon.com/images/M/MV5BYzBkMzAyMDUtZTFkZS00OWUyLTgwM2ItNGI3MTQ5NzA3NTVkXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg", info: "IMDb : 6.8/10", link: 'https://m.vegamovies.tips/ready-or-not-2019-dual-audio-hindi-movie-bluray/' },
  { movieName: "Two (2021) ", image: "https://m.media-amazon.com/images/M/MV5BMTdkOWNjNzEtOTNjMC00NjBmLTk2ODYtZTk2NjA1NDZjYTQ2XkEyXkFqcGdeQXVyMTg4OTE4NDM@._V1_QL75_UY281_CR4,0,190,281_.jpg", info: "IMDb : 4.3/10", link: 'https://m.vegamovies.tips/download-two-netflix-original-2021-english-audio-480p-720p-1080p/' },
  { movieName: "The Invisible Guest (2016)", image: "theinvisibleguest.jpg", info: "IMDb : 8/10", link: 'https://m.vegamovies.tips/download-the-invisible-guest-2016-hindi-dual-audio-full-movie/' },
  { movieName: "The Unhealer (2020) ", image: "https://m.media-amazon.com/images/M/MV5BNWFjMTA0Y2UtMTMyNC00NWMxLTliNTYtMDRhNWRjZmYyOWU5XkEyXkFqcGdeQXVyMjI0MDA1MA@@._V1_FMjpg_UX1000_.jpg", info: "IMDb : 5.6/10", link: 'https://www.google.com/search?q=the+unhealer+movie+download&source=lmns&bih=752&biw=1536&hl=en&sa=X&ved=2ahUKEwi-zL_Yt-D_AhWriGMGHWTXA6AQ_AUoAHoECAEQAA' },
  { movieName: "The Clinic (2010)", image: "https://m.media-amazon.com/images/M/MV5BNDc2NzE1MzA2OF5BMl5BanBnXkFtZTcwNTY5MzYyNQ@@._V1_.jpg", info: "IMDb : 5.3/10", link: 'https://www.google.com/search?q=the+clinic+movie+download+in+hindi&bih=752&biw=1536&rlz=1C1ONGR_enIN1031IN1031&hl=en&sxsrf=APwXEdfYm1Z2eWTJmsRuYyM3tx6e3a5glQ%3A1687932300937&ei=jM2bZNzkOLTZseMPw8-b6Ao&ved=0ahUKEwjc2s7ppeX_AhW0bGwGHcPnBq0Q4dUDCA8&uact=5&oq=the+clinic+movie+download+in+hindi&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIFCCEQoAEyBQghEKABMggIIRAWEB4QHTIICCEQFhAeEB0yCAghEBYQHhAdMggIIRAWEB4QHTIICCEQFhAeEB0yCAghEBYQHhAdMggIIRAWEB4QHToGCAAQFhAeOgcIIRCgARAKSgQIQRgAUNABWM8SYNgYaABwAXgAgAHqBIgByheSAQswLjEuMy4zLjEuMZgBAKABAcABAQ&sclient=gws-wiz-serp' },
  { movieName: "The Descent (2005) ", image: "https://horroroasis.com/wp-content/uploads/2021/03/41cdS6HCODL.jpg", info: "IMDb : 7.2/10", link: 'https://www.google.com/search?q=the+descent+movie+download&bih=752&biw=1536&rlz=1C1ONGR_enIN1031IN1031&hl=en&sxsrf=APwXEdcO4q_SIphoU3TjFdmSacu5lXe0eA%3A1687927796996&ei=9LubZKyyPKzc4-EP672PmAc&ved=0ahUKEwis_PuFleX_AhUs7jgGHeveA3MQ4dUDCA8&uact=5&oq=the+descent+movie+download&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMggIABCABBDLATIICAAQgAQQywEyCAgAEIoFEIYDOgoIABBHENYEELADOgoILhCKBRCwAxBDOgcIIxCKBRAnOgcILhCKBRBDOgYIABAWEB46FQguEIoFEEMQlwUQ3AQQ3gQQ4AQYAToHCC4QigUQJzoICC4QgAQQsQM6CggAEIAEEBQQhwI6EwguEIoFEJcFENwEEN4EEOAEGAE6BQguEIAESgQIQRgAUPACWJYuYPYvaAJwAXgBgAGcCIgB-E2SAQ0yLTIuMS4xLjEuOC4xmAEAoAEBwAEByAEJ2gEGCAEQARgU&sclient=gws-wiz-serp' },
  { movieName: "The Descent: Part 2 (2009) ", image: "https://m.media-amazon.com/images/M/MV5BMTcxMDUxMjQyOF5BMl5BanBnXkFtZTcwNzk0NzgxMw@@._V1_.jpg", info: "IMDb : 5.7/10", link: 'https://m.vegamovies.tips/download-the-descent-part-2-2009-dual-audio-hindi-480p-720p-1080p/' },
  { movieName: "The Last House on the Left (2009)", image: "https://m.media-amazon.com/images/M/MV5BMTI4NDE5MDU0MF5BMl5BanBnXkFtZTcwMTE0NTkxMg@@._V1_.jpg", info: "IMDb : 6.5/10", link: 'https://m.vegamovies.tips/download-the-last-house-on-the-left-2009-hindi-dubbed-480p-720p-1080p/' },
  { movieName: "The Night Eats the World (2018) ", image: "https://m.media-amazon.com/images/M/MV5BMTJlOTc3NGMtNjZkMi00NDAzLWE2YTctMDM1NzM3ZGYxMWJhXkEyXkFqcGdeQXVyODc0OTEyNDU@._V1_.jpg", info: "IMDb : 6/10", link: 'https://m.vegamovies.tips/download-the-night-eats-the-world-2018-english-movie-480p-720p-1080p/' },
  { movieName: "The Collection (2012)", image: "https://m.media-amazon.com/images/M/MV5BZTRmOTE3MTctODZmOS00OWU4LTliMzUtYTA3ZmY4NTE2MzhiXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg", info: "IMDb : 6.1/10", link: 'https://m.vegamovies.tips/download-the-collection-2012-full-movie-hindi-dubbed-english-movie/' },
  { movieName: "The Pool (2018) ", image: "https://m.media-amazon.com/images/M/MV5BYzRlYzJlZTktNjY1NC00NGZmLThjYzQtOGUyMWZmZWFkZWUxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg", info: "IMDb : 5.3/10", link: 'https://www.google.com/search?q=the+pool+movie+movie+download+in+hindi&source=lmns&bih=752&biw=1536&rlz=1C1ONGR_enIN1031IN1031&hl=en&sa=X&ved=2ahUKEwihl83YoOX_AhWjyKACHZHpBPgQ_AUoAHoECAEQAA' },
  { movieName: "Taken All Movie Collection (2008-2014) ", image: "https://www.tvguide.com/a/img/catalog/provider/1/2/1-8853215891.jpg", info: "IMDb : 7.8/10", link: 'https://m.vegamovies.tips/download-taken-3-movie-collection-2008-2014-english-with-subtitles-480p-720p-1080p-bluray/' },
  { movieName: "X-MEN All Movie Collection", image: "https://upload.wikimedia.org/wikipedia/en/8/81/X-MenfilmPoster.jpg", info: "", link: 'https://m.vegamovies.tips/?s=x-men' },
  { movieName: "Vivarium (2019) ", image: "https://m.media-amazon.com/images/M/MV5BNjljN2JiOGItNTg0Yi00YTI2LWFjMTYtODMzOGI3MGVhMmZmXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg", info: "IMDb : 5.9/10", link: 'https://m.vegamovies.tips/download-vivarium-2019-dual-audio-hindi-480p-720p-1080p/' },
  { movieName: "Us (2019)", image: "https://m.media-amazon.com/images/M/MV5BZTliNWJhM2YtNDc1MC00YTk1LWE2MGYtZmE4M2Y5ODdlNzQzXkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_FMjpg_UX1000_.jpg", info: "IMDb : 6.8/10", link: 'https://m.vegamovies.tips/download-us-2019-hindi-dubbed-480p-720p-1080p/' },
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
