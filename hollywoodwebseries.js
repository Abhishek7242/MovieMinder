let mcontainer = document.getElementById('moviecontainer');
let next = document.getElementById('nextbtnbox').querySelector('#nextbtn');
let previous = document.getElementById('nextbtnbox').querySelector('#previousbtn');

let action = [
  { movieName: "Arcane (2021) ", image: "https://m.media-amazon.com/images/M/MV5BM2MyOWYwYjAtNWNiYS00NWI4LTkwNjYtYzU1NGEyYzMwYzliXkEyXkFqcGdeQXVyODc0OTEyNDU@._V1_.jpg", info: "(Seasons 1) IMDb : 9/10", link: 'https://m.vegamovies.tips/download-arcane-season-1-dual-audio-hindi-hq-dubbed-series-480p-720p/' },
  { movieName: "Arrow (2012) ", image: "https://upload.wikimedia.org/wikipedia/en/7/7f/Arrow_%28cast%29.jpg", info: "(Seasons 1-8) IMDb : 7.5/10", link: 'https://m.vegamovies.tips/download-arrow-season-1-to-8-english-with-subtitles-tv-series-complete-720p-web-dl/' },
  { movieName: "Altered Carbon (2018) ", image: "https://m.media-amazon.com/images/M/MV5BMjU2ZGQwYTctNTk2Ny00ODNmLTkzNDQtMWY2ZjM4MDI5ZmM5XkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_.jpg", info: "(Seasons 1-2) IMDb : 7.9/10", link: 'https://m.vegamovies.tips/download-netflix-altered-carbon-hindi-dubbed-all-episodes-480p-720p/' },
  { movieName: "Breaking Bad (2008) ", image: "https://m.media-amazon.com/images/M/MV5BYmQ4YWMxYjUtNjZmYi00MDQ1LWFjMjMtNjA5ZDdiYjdiODU5XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_.jpg", info: "(Seasons 1-5) IMDb : 9.5/10", link: 'https://m.vegamovies.tips/download-breaking-bad-season-1-5/' },
  { movieName: "Chernobyl(2019) ", image: "https://upload.wikimedia.org/wikipedia/en/a/a7/Chernobyl_2019_Miniseries.jpg", info: "(Seasons 1) IMDb : 9.4/10", link: 'https://m.vegamovies.tips/chernobyl-season-1-dual-audio-hindi-english-720p/' },
  { movieName: "Crash Landing on You (2019) ", image: "https://m.media-amazon.com/images/M/MV5BZWQyZTkwMTMtYTJiZS00MGNlLThhN2EtYzEzOGQzYjFiZGQxXkEyXkFqcGdeQXVyMTEzMjQ4NzEw._V1_.jpg", info: "(Seasons 1) IMDb : 8.7/10", link: 'https://m.vegamovies.tips/download-crash-landing-on-you-2019-season-1-hindi-dubbed-complete-netflix-original-web-series-480p-720p-web-dl/' },
  { movieName: "Crown (2017) ", image: "https://assets.gadgets360cdn.com/pricee/assets/product/202202/CROWN_S2_Vertical_Main_PRE_UK_1_1644594166.jpg", info: "(Seasons 1-5) IMDb : 8.6/10", link: 'https://m.vegamovies.tips/download-the-crown-season-1-5-hindi-dubbed-web-series-480p-720p/' },
  { movieName: "Cursed (2020) ", image: "https://m.media-amazon.com/images/M/MV5BNTQyMGY0NjctMDJjZS00MzAzLWFiZDUtNWRiNTBiMzNjYmJlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg", info: "(Seasons 1) IMDb : 6/10", link: 'https://m.vegamovies.tips/download-cursed-2020-season-1-dual-audio-hindi-english-480p-720p-web-dl/' },
  { movieName: "Dexter: New Blood (2021) ", image: "https://m.media-amazon.com/images/M/MV5BNzEzNjg1NmEtZjRiMy00OTQyLTk1MGItMmU0N2VkNWRhYzYzXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg", info: "(Seasons 1) IMDb : 8.1/10", link: 'https://m.vegamovies.tips/download-dexter-new-blood-season-1-2021-hindi-dubbed-tv-series-480p-720p-1080p-web-dl/' },
  { movieName: "Daredevil (2015) ", image: "https://www.tvguide.com/a/img/catalog/provider/1/1/1-6640132459.jpg", info: "(Seasons 1-3) IMDb : 8.6/10", link: 'https://m.vegamovies.tips/download-daredevil-season-3-hindi-dubbed-complete-series-480p-720p/' },
  { movieName: "Easy (2016) ", image: "https://m.media-amazon.com/images/M/MV5BMjIzMzA3MzQ1N15BMl5BanBnXkFtZTgwODYxOTkwMzE@._V1_.jpg", info: "(Seasons 1-3) IMDb : 6.9/10", link: 'https://www.google.com/search?q=easy+web+series+download&bih=752&biw=1536&hl=en&sxsrf=APwXEddEhWu17ru4eqt0q8rAixv9N3QnXQ%3A1687671431632&ei=h9KXZNChJs_8wAP08K-YDQ&oq=EASY++web+series+D&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQARgAMgUIABCABDIFCAAQgAQyBQgAEIAEMgYIABAWEB4yBggAEBYQHjIGCAAQFhAeMgYIABAWEB4yBggAEBYQHjIGCAAQFhAeOgcIIxCKBRAnOggIABCKBRCRAjoKCAAQgAQQFBCHAkoECEEYAFBNWN0OYJQcaAFwAHgAgAHyB4gBthOSAQkyLTUuMS43LTGYAQCgAQHAAQE&sclient=gws-wiz-serp' },
  { movieName: "Friends (1994) ", image: "https://flxt.tmsimg.com/assets/p183931_b_v8_ac.jpg", info: "(Seasons 1-10) IMDb : 8.9/10", link: 'https://m.vegamovies.tips/download-friends-season-1-to-10-english-with-subtitles-complete-tv-series-720p/' },
  { movieName: "Fear The Walking Dead (2015) ", image: "https://upload.wikimedia.org/wikipedia/en/thumb/a/aa/Fear_the_Walking_Dead_Season_1.jpg/220px-Fear_the_Walking_Dead_Season_1.jpg", info: "(Seasons 1-7) IMDb : 6.8/10", link: 'https://m.vegamovies.tips/download-fear-the-walking-dead-season-7-hindi-dubbed-480p-720p/' },
  { movieName: "Grand Army(2020) ", image: "https://m.media-amazon.com/images/M/MV5BNTAwNTc1YTQtNjg5OS00OWUzLWFkMmUtMDk0ZmNmMWI2NTQyXkEyXkFqcGdeQXVyODQyNDI4ODg@._V1_.jpg", info: "(Seasons 1) IMDb : 7.5/10", link: 'https://m.vegamovies.tips/download-grand-army-2020-season-1-netflix-series/' },
  { movieName: "House of dragons(2022) ", image: "https://m.media-amazon.com/images/M/MV5BZjBiOGIyY2YtOTA3OC00YzY1LThkYjktMGRkYTNhNTExY2I2XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg", info: "(Seasons 1) IMDb : 8.5/10", link: 'https://m.vegamovies.tips/download-house-of-the-dragon-2022-season-1-hindi-dubbed-480p-720p-1080p-web-dl/' },
  { movieName: "It's Okay to Not Be Okay (2020) ", image: "https://m.media-amazon.com/images/M/MV5BYTk0Nzk5ZWYtYTNlZi00YjBjLWJhYjctMWMwMmYyMDA5ZjJmXkEyXkFqcGdeQXVyNDY5MjMyNTg@._V1_FMjpg_UX1000_.jpg", info: "(Seasons 1) IMDb : 8.6/10", link: 'https://m.vegamovies.tips/download-its-okay-to-not-be-okay-season-1-dual-audio-hindi-dubbed-complete-series-480p-720p/' },
  { movieName: "Lucifer (2016) ", image: "https://m.media-amazon.com/images/M/MV5BNDJjMzc4NGYtZmFmNS00YWY3LThjMzQtYzJlNGFkZGRiOWI1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg", info: "(Seasons 1-6) IMDb : 8.1/10", link: 'https://m.vegamovies.tips/?s=lucifer' },
  { movieName: "Love, Death & Robots (2019) ", image: "https://assets.gadgets360cdn.com/pricee/assets/product/202205/Love-Death-Robots-poster_1653211170.jpg", info: "(Seasons 1-3) IMDb : 8.4/10", link: 'https://m.vegamovies.tips/love-death-robots-season-1-hindi-dubbed-720p/' },
  { movieName: "Lost in Space (2018) ", image: "https://flxt.tmsimg.com/assets/p15197696_b_v13_aa.jpg", info: "(Seasons 1-3) IMDb : 7.3/10", link: 'https://m.vegamovies.tips/?s=lost+in+space' },
  { movieName: "Mindhunter (2017) ", image: "https://m.media-amazon.com/images/M/MV5BNWNmYzQ1ZWUtYTQ3ZS00Y2UwLTlkMDctZThlOTJkMGJiNzBiXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_.jpg", info: "(Seasons 1-2) IMDb : 8.6/10", link: 'https://m.vegamovies.tips/mind-hunter-season-1-2-hindi-dubbed-complete-netflix-web-series-480p-720p/' },
  { movieName: "My Love from the Star (2013) ", image: "https://upload.wikimedia.org/wikipedia/en/b/ba/You_Who_Came_From_the_Stars_Cover.jpg", info: "(Seasons 1) IMDb : 8.2/10", link: 'https://m.vegamovies.tips/download-my-love-from-the-star-season-1-hindi-dubbed-complete-kdrama-series-480p-720p/' },
  { movieName: "Manifest (2018) ", image: "https://m.media-amazon.com/images/M/MV5BZGIxNDUzMDktYTg1ZC00OGRiLTliNWUtZmY4NTE0MDU0YWU4XkEyXkFqcGdeQXVyODUxOTU0OTg@._V1_.jpg", info: "(Seasons 1-4) IMDb : 7.1/10", link: 'https://m.vegamovies.tips/download-manifest-season-1-to-4-english-with-subtitles-complete-series-720p/' },
  { movieName: "Narcos (2015) ", image: "https://flxt.tmsimg.com/assets/p11993086_b_v13_ag.jpg", info: "(Seasons 1-3) IMDb : 8.8/10", link: 'https://m.vegamovies.tips/download-narcos-season-3-dual-audio-hindi-dubbed-complete-netflix-series-480p-720p/' },
  { movieName: "Ozark (2017) ", image: "https://assets.gadgets360cdn.com/pricee/assets/product/202201/Ozark1_Vertical-Main_PRE_UK_1_1642178186.jpg", info: "(Seasons 1-4) IMDb : 8.5/10", link: 'https://m.vegamovies.tips/download-netflix-ozark-season-1-3-hindi-dubbed-480p-720p-1080p-bluray-hd/' },
  { movieName: "Orange Is the New Black (2013) ", image: "https://m.media-amazon.com/images/M/MV5BNzcyNjAxM2YtYTJkNS00YWRiLWFiM2ItM2E1NGQ4MDg2ZTVjXkEyXkFqcGdeQXVyMTAzOTY3ODM2._V1_QL75_UX140_CR0,0,140,207_.jpg", info: "(Seasons 1-7) IMDb : 8.1/10", link: 'https://m.vegamovies.tips/download-orange-is-the-new-black-season-1-7-dual-audio-hindi-dubbed-complete-series-480p-720p/' },
  { movieName: "Prision Break (2005) ", image: "https://flxt.tmsimg.com/assets/p7894205_b_v8_aa.jpg", info: "(Seasons 1-5) IMDb : 8.3/10", link: 'https://www.google.com/search?q=prison+break+web+series+download+&bih=687&biw=614&rlz=1C1ONGR_enIN1031IN1031&hl=en&sxsrf=APwXEdd4MjDbtsztefxv_MMbfgbNACwQRA%3A1687584334259&ei=Tn6WZMvCD8fnwQPH4YjwBA&ved=0ahUKEwjLoZbGldv_AhXHc3AKHccwAk4Q4dUDCA8&uact=5&oq=prison+break+web+series+download+&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIFCAAQgAQyCAgAEIAEEMsBMgYIABAWEB4yBggAEBYQHjIGCAAQFhAeMgYIABAWEB4yBggAEBYQHjIGCAAQFhAeOgoIABBHENYEELADOgoIABCKBRCwAxBDOg0IABDkAhDWBBCwAxgBOhIILhCKBRDUAhDIAxCwAxBDGAI6DwguEIoFEMgDELADEEMYAjoHCCMQigUQJzoOCC4QgwEQ1AIQsQMQgAQ6BwgAEIoFEEM6CwgAEIAEELEDEIMBSgQIQRgAUPMCWONiYK9oaARwAXgAgAGGEYgBn02SAQsyLTkuNy0xLjAuM5gBAKABAcABAcgBD9oBBggBEAEYCdoBBggCEAEYCA&sclient=gws-wiz-serp' },
  { movieName: "Queens Gambit (2019) ", image: "https://m.media-amazon.com/images/M/MV5BM2EwMmRhMmUtMzBmMS00ZDQ3LTg4OGEtNjlkODk3ZTMxMmJlXkEyXkFqcGdeQXVyMjM5ODk1NDU@._V1_FMjpg_UX1000_.jpg", info: "(Seasons 1) IMDb : 8.6/10", link: 'https://m.vegamovies.tips/download-the-queens-gambit-2020-season-1-hindi-dubbed-480p-720p-webdl/' },
  { movieName: "Squid Game(2021) ", image: "https://m.media-amazon.com/images/M/MV5BYWE3MDVkN2EtNjQ5MS00ZDQ4LTliNzYtMjc2YWMzMDEwMTA3XkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_FMjpg_UX1000_.jpg", info: "(Seasons 1) IMDb : 8/10", link: 'https://m.vegamovies.tips/download-squid-game-2021-s01-hindi-dubbed-netflix-web-series-480p-720p-hdrip/' },
  { movieName: "Stranger Things (2016) ", image: "https://upload.wikimedia.org/wikipedia/en/thumb/7/78/Stranger_Things_season_4.jpg/220px-Stranger_Things_season_4.jpg", info: "(Seasons 1-4) IMDb : 8.7/10", link: 'https://m.vegamovies.tips/?s=stranger+things' },
  { movieName: "Sex Education (2019) ", image: "https://assets.gadgets360cdn.com/pricee/assets/product/202205/Sex-Education-Season-4-Poster_1651691067.jpg", info: "(Seasons 1-3) IMDb : 8.3/10", link: 'https://m.vegamovies.tips/download-sex-education-season-1-3-hindi-dubbed-netflix-web-series-480p-720p-1080p/' },
  { movieName: "The Shannara Chronicles (2016) ", image: "https://m.media-amazon.com/images/M/MV5BMTkxNjEwOTY4M15BMl5BanBnXkFtZTgwNTA2ODk0NzE@._V1_FMjpg_UX1000_.jpg", info: "(Seasons 1-2) IMDb : 7.1/10", link: 'https://m.vegamovies.tips/download-the-shannara-chronicles-season-1-2-dual-audio-hindi-english-480p-720p/' },
  { movieName: "The Terror (2018) ", image: "https://flxt.tmsimg.com/assets/p17055838_b_v13_ab.jpg", info: "(Seasons 1-2) IMDb : 7.9/10", link: 'https://m.vegamovies.tips/the-terror-amazon-season-1-all-episodes/' },
  { movieName: "The Wheel of Time (2021) ", image: "https://assets.gadgets360cdn.com/pricee/assets/product/202111/The-Wheel-of-Time-250_1636990069.jpg", info: "(Seasons 1) IMDb : 7.1/10", link: 'https://m.vegamovies.tips/download-the-wheel-of-time-2021-season-1-dual-audio-hindi-480p-720p-1080p/' },
  { movieName: "18+ The Idol (2023)", image: "theidol.jpg", info: "IMDb : 5.5/10", link: 'https://m.vegamovies.tips/download-the-idol-2023-season-1-hbo-original-web-series-720p-1080p-web-dl/' },
  { movieName: "The Witcher (2019) ", image: "https://assets.gadgets360cdn.com/pricee/assets/product/202112/MV5BOGE4MmVjMDgtMzIzYy00NjEwLWJl_1638548306.jpg", info: "(Seasons 1) IMDb : 8.1/10", link: 'https://m.vegamovies.tips/download-the-witcher-season-1-dual-audio-hindi/' },
  { movieName: "The Umbrella Academy (2019) ", image: "https://assets.gadgets360cdn.com/pricee/assets/product/202202/The-Umbrella-Academy-S1-poster_1644778965.jpg", info: "(Seasons 1-3) IMDb : 7.9/10", link: 'https://m.vegamovies.tips/download-the-umbrella-academy-season-3-dual-audio-hindi-org-dubbed-complete-series-480p-720p-1080p/' },
  { movieName: "The Boys (2019) ", image: "https://assets.gadgets360cdn.com/pricee/assets/product/202111/theboys-250_1636632874.jpg", info: "(Seasons 1-3) IMDb : 8.7/10", link: 'https://m.vegamovies.tips/?s=the+boys' },
  { movieName: "The Haunting of Hill House (2018) ", image: "https://m.media-amazon.com/images/M/MV5BMTU4NzA4MDEwNF5BMl5BanBnXkFtZTgwMTQxODYzNjM@._V1_.jpg", info: "(Seasons 1) IMDb : 8.6/10", link: 'https://m.vegamovies.tips/download-the-haunting-of-hill-house-season-1-hindi-netflix-series/' },
  { movieName: "The Purge (2018) ", image: "https://m.media-amazon.com/images/M/MV5BNWE4YWNhYzMtMjM2My00Y2MzLTk1ZjItNjgwMjRmMWE1MTRlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg", info: "(Seasons 1-2) IMDb : 6.5/10", link: 'https://m.vegamovies.tips/download-the-purge-season-1-and-2-dual-audio-hindi-english-480p-720p/' },
  { movieName: "Unbelievable (2019) ", image: "https://m.media-amazon.com/images/M/MV5BN2Q3OWQ1Y2UtN2E3OS00ODA2LWE1Y2EtYmY5OWMzNWYzMDZmXkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_.jpg", info: "(Seasons 1) IMDb : 8.4/10", link: 'https://m.vegamovies.tips/download-unbelievable-season-1-hindi-720p/' },
  { movieName: "Vikings (2013) ", image: "https://m.media-amazon.com/images/M/MV5BODk4ZjU0NDUtYjdlOS00OTljLTgwZTUtYjkyZjk1NzExZGIzXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg", info: "(Seasons 1-6) IMDb : 8.5/10", link: 'https://m.vegamovies.tips/download-vikings-season-1-6-hindi-org-dubbed-complete-series-480p-720p/' },
  { movieName: "West World (2016) ", image: "https://m.media-amazon.com/images/M/MV5BZDg1OWRiMTktZDdiNy00NTZlLTg2Y2EtNWRiMTcxMGE5YTUxXkEyXkFqcGdeQXVyMTM2MDY0OTYx._V1_FMjpg_UX1000_.jpg", info: "(Seasons 1-4) IMDb : 8.5/10", link: 'https://m.vegamovies.tips/download-westworld-2022-season-4-hbomax/' },
  // { movieName: "(2019) ", image: "", info: "(Seasons 1) IMDb : 9.4/10", link: '' },

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
