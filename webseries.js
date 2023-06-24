let mcontainer = document.getElementById('moviecontainer');
let next = document.getElementById('nextbtnbox').querySelector('#nextbtn');
let previous = document.getElementById('nextbtnbox').querySelector('#previousbtn');

let action = [
  { movieName: "18+ The Idol (2023)", image: "theidol.jpg", info: "IMDb : 5.5/10", link: 'https://m.vegamovies.tips/download-the-idol-2023-season-1-hbo-original-web-series-720p-1080p-web-dl/' },
  { movieName: "The Wheel of Time (2021) ", image: "https://assets.gadgets360cdn.com/pricee/assets/product/202111/The-Wheel-of-Time-250_1636990069.jpg", info: "(Seasons 1) IMDb : 7.1/10", link: 'https://m.vegamovies.tips/download-the-wheel-of-time-2021-season-1-dual-audio-hindi-480p-720p-1080p/' },
  { movieName: "Dexter: New Blood (2021) ", image: "https://m.media-amazon.com/images/M/MV5BNzEzNjg1NmEtZjRiMy00OTQyLTk1MGItMmU0N2VkNWRhYzYzXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg", info: "(Seasons 1) IMDb : 8.1/10", link: 'https://m.vegamovies.tips/download-dexter-new-blood-season-1-2021-hindi-dubbed-tv-series-480p-720p-1080p-web-dl/' },
  { movieName: "Pati Patni or Panga (2020)", image: "patipatniorpanga.jpg", info: "IMDb : 6.2/10 Season (1)", link: 'https://m.dotmovies.boats/download-pati-patni-aur-panga-2020-season-1-hindi-complete-mx-original-web-series-480p-720p-hdrip/' },
  { movieName: "It's Okay to Not Be Okay (2020) ", image: "https://m.media-amazon.com/images/M/MV5BYTk0Nzk5ZWYtYTNlZi00YjBjLWJhYjctMWMwMmYyMDA5ZjJmXkEyXkFqcGdeQXVyNDY5MjMyNTg@._V1_FMjpg_UX1000_.jpg", info: "(Seasons 1) IMDb : 8.6/10", link: 'https://m.vegamovies.tips/download-its-okay-to-not-be-okay-season-1-dual-audio-hindi-dubbed-complete-series-480p-720p/' },
  { movieName: "Unbelievable (2019) ", image: "https://m.media-amazon.com/images/M/MV5BN2Q3OWQ1Y2UtN2E3OS00ODA2LWE1Y2EtYmY5OWMzNWYzMDZmXkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_.jpg", info: "(Seasons 1) IMDb : 8.4/10", link: 'https://m.vegamovies.tips/download-unbelievable-season-1-hindi-720p/' },
  { movieName: "The Umbrella Academy (2019) ", image: "https://assets.gadgets360cdn.com/pricee/assets/product/202202/The-Umbrella-Academy-S1-poster_1644778965.jpg", info: "(Seasons 1-3) IMDb : 7.9/10", link: 'https://m.vegamovies.tips/download-the-umbrella-academy-season-3-dual-audio-hindi-org-dubbed-complete-series-480p-720p-1080p/' },
  { movieName: "The Witcher (2019) ", image: "https://assets.gadgets360cdn.com/pricee/assets/product/202112/MV5BOGE4MmVjMDgtMzIzYy00NjEwLWJl_1638548306.jpg", info: "(Seasons 1) IMDb : 8.1/10", link: 'https://m.vegamovies.tips/download-the-witcher-season-1-dual-audio-hindi/' },
  { movieName: "Crash Landing on You (2019) ", image: "https://m.media-amazon.com/images/M/MV5BZWQyZTkwMTMtYTJiZS00MGNlLThhN2EtYzEzOGQzYjFiZGQxXkEyXkFqcGdeQXVyMTEzMjQ4NzEw._V1_.jpg", info: "(Seasons 1) IMDb : 8.7/10", link: 'https://m.vegamovies.tips/download-crash-landing-on-you-2019-season-1-hindi-dubbed-complete-netflix-original-web-series-480p-720p-web-dl/' },
  { movieName: "The Boys (2019) ", image: "https://assets.gadgets360cdn.com/pricee/assets/product/202111/theboys-250_1636632874.jpg", info: "(Seasons 1-3) IMDb : 8.7/10", link: 'https://m.vegamovies.tips/?s=the+boys' },
  { movieName: "Sex Education (2019) ", image: "https://assets.gadgets360cdn.com/pricee/assets/product/202205/Sex-Education-Season-4-Poster_1651691067.jpg", info: "(Seasons 1-3) IMDb : 8.3/10", link: 'https://m.vegamovies.tips/download-sex-education-season-1-3-hindi-dubbed-netflix-web-series-480p-720p-1080p/' },
  { movieName: "Altered Carbon (2018) ", image: "https://m.media-amazon.com/images/M/MV5BMjU2ZGQwYTctNTk2Ny00ODNmLTkzNDQtMWY2ZjM4MDI5ZmM5XkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_.jpg", info: "(Seasons 1-2) IMDb : 7.9/10", link: 'https://m.vegamovies.tips/download-netflix-altered-carbon-hindi-dubbed-all-episodes-480p-720p/' },
  { movieName: "The Haunting of Hill House (2018) ", image: "https://m.media-amazon.com/images/M/MV5BMTU4NzA4MDEwNF5BMl5BanBnXkFtZTgwMTQxODYzNjM@._V1_.jpg", info: "(Seasons 1) IMDb : 8.6/10", link: 'https://m.vegamovies.tips/download-the-haunting-of-hill-house-season-1-hindi-netflix-series/' },
  { movieName: "The Terror (2018) ", image: "https://flxt.tmsimg.com/assets/p17055838_b_v13_ab.jpg", info: "(Seasons 1-2) IMDb : 7.9/10", link: 'https://m.vegamovies.tips/the-terror-amazon-season-1-all-episodes/' },
  { movieName: "Mindhunter (2017)", image: "https://m.media-amazon.com/images/M/MV5BNWNmYzQ1ZWUtYTQ3ZS00Y2UwLTlkMDctZThlOTJkMGJiNzBiXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_.jpg", info: "(Seasons 1-2) IMDb : 8.6/10", link: 'https://m.vegamovies.tips/mind-hunter-season-1-2-hindi-dubbed-complete-netflix-web-series-480p-720p/' },
  { movieName: "Crown (2017) ", image: "https://assets.gadgets360cdn.com/pricee/assets/product/202202/CROWN_S2_Vertical_Main_PRE_UK_1_1644594166.jpg", info: "(Seasons 1-5) IMDb : 8.6/10", link: 'https://m.vegamovies.tips/download-the-crown-season-1-5-hindi-dubbed-web-series-480p-720p/' },
  { movieName: "Ozark (2017) ", image: "https://assets.gadgets360cdn.com/pricee/assets/product/202201/Ozark1_Vertical-Main_PRE_UK_1_1642178186.jpg", info: "(Seasons 1-4) IMDb : 8.5/10", link: 'https://m.vegamovies.tips/download-netflix-ozark-season-1-3-hindi-dubbed-480p-720p-1080p-bluray-hd/' },
  { movieName: "The Shannara Chronicles (2016) ", image: "https://m.media-amazon.com/images/M/MV5BMTkxNjEwOTY4M15BMl5BanBnXkFtZTgwNTA2ODk0NzE@._V1_FMjpg_UX1000_.jpg", info: "(Seasons 1-2) IMDb : 7.1/10", link: 'https://m.vegamovies.tips/download-the-shannara-chronicles-season-1-2-dual-audio-hindi-english-480p-720p/' },
  { movieName: "My Love from the Star (2013) ", image: "https://upload.wikimedia.org/wikipedia/en/b/ba/You_Who_Came_From_the_Stars_Cover.jpg", info: "(Seasons 1) IMDb : 8.2/10", link: 'https://m.vegamovies.tips/download-my-love-from-the-star-season-1-hindi-dubbed-complete-kdrama-series-480p-720p/' },
  { movieName: "Orange Is the New Black (2013) ", image: "https://m.media-amazon.com/images/M/MV5BNzcyNjAxM2YtYTJkNS00YWRiLWFiM2ItM2E1NGQ4MDg2ZTVjXkEyXkFqcGdeQXVyMTAzOTY3ODM2._V1_QL75_UX140_CR0,0,140,207_.jpg", info: "(Seasons 1-7) IMDb : 8.1/10", link: 'https://m.vegamovies.tips/download-orange-is-the-new-black-season-1-7-dual-audio-hindi-dubbed-complete-series-480p-720p/' },
  { movieName: "Vikings (2013) ", image: "https://m.media-amazon.com/images/M/MV5BODk4ZjU0NDUtYjdlOS00OTljLTgwZTUtYjkyZjk1NzExZGIzXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg", info: "(Seasons 1-6) IMDb : 8.5/10", link: 'https://m.vegamovies.tips/download-vikings-season-1-6-hindi-org-dubbed-complete-series-480p-720p/' },
  { movieName: "Prision Break (2005) ", image: "https://flxt.tmsimg.com/assets/p7894205_b_v8_aa.jpg", info: "(Seasons 1-5) IMDb : 8.3/10", link: 'https://www.google.com/search?q=prison+break+web+series+download+&bih=687&biw=614&rlz=1C1ONGR_enIN1031IN1031&hl=en&sxsrf=APwXEdd4MjDbtsztefxv_MMbfgbNACwQRA%3A1687584334259&ei=Tn6WZMvCD8fnwQPH4YjwBA&ved=0ahUKEwjLoZbGldv_AhXHc3AKHccwAk4Q4dUDCA8&uact=5&oq=prison+break+web+series+download+&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIFCAAQgAQyCAgAEIAEEMsBMgYIABAWEB4yBggAEBYQHjIGCAAQFhAeMgYIABAWEB4yBggAEBYQHjIGCAAQFhAeOgoIABBHENYEELADOgoIABCKBRCwAxBDOg0IABDkAhDWBBCwAxgBOhIILhCKBRDUAhDIAxCwAxBDGAI6DwguEIoFEMgDELADEEMYAjoHCCMQigUQJzoOCC4QgwEQ1AIQsQMQgAQ6BwgAEIoFEEM6CwgAEIAEELEDEIMBSgQIQRgAUPMCWONiYK9oaARwAXgAgAGGEYgBn02SAQsyLTkuNy0xLjAuM5gBAKABAcABAcgBD9oBBggBEAEYCdoBBggCEAEYCA&sclient=gws-wiz-serp' },

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
        // div.style.margin = '22px';
        div.style.background = 'black';
    
        let a = document.createElement('a');
        a.classList.add('link');
        a.href = action[i].link;
    
        let img = document.createElement('img');
        img.src = action[i].image;
        img.classList.add('imgsize');
    
        let p = document.createElement('p');
        p.innerText = action[i].movieName;
        p.classList.add('fontsize')
        
        let p1 = document.createElement('p');
        p1.innerText = action[i].info;
        p1.style.textAlign = 'center';
        p1.classList.add('fontsize')
    
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
    // div.style.margin = '22px';
    div.style.background = 'black';

    let a = document.createElement('a');
    a.classList.add('link');
    a.href = action[i].link;

    let img = document.createElement('img');
    img.src = action[i].image;
    img.classList.add('imgsize');

    let p = document.createElement('p');
    p.innerText = action[i].movieName;
    p.classList.add('fontsize')

    let p1 = document.createElement('p');
    p1.innerText = action[i].info;
    p1.style.textAlign = 'center';
    p1.classList.add('fontsize')

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
      // div.style.margin = '22px';
      div.style.background = 'black';
  
      let a = document.createElement('a');
      a.classList.add('link');
      a.href = action[i].link;
  
      let img = document.createElement('img');
      img.src = action[i].image;
      img.classList.add('imgsize');
  
      let p = document.createElement('p');
      p.innerText = action[i].movieName;
      p.classList.add('fontsize')
  
      let p1 = document.createElement('p');
      p1.innerText = action[i].info;
      p1.style.textAlign = 'center';
      p1.classList.add('fontsize')
  
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
  // div.style.margin = '22px';
  div.style.background = 'black';

  let a = document.createElement('a');
  a.classList.add('link');
  a.href = action[i].link;

  let img = document.createElement('img');
  img.src = action[i].image;
  img.classList.add('imgsize');

  let p = document.createElement('p');
  p.innerText = action[i].movieName;
  p.classList.add('fontsize')

  let p1 = document.createElement('p');
  p1.innerText = action[i].info;
  p1.style.textAlign = 'center';
  p1.classList.add('fontsize')

  mcontainer.appendChild(div);
  div.appendChild(a);
  a.appendChild(img);
  a.appendChild(p);
  a.appendChild(p1);
}
