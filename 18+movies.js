let mcontainer = document.getElementById('moviecontainer');
let next = document.getElementById('nextbtnbox').querySelector('#nextbtn');
let previous = document.getElementById('nextbtnbox').querySelector('#previousbtn');

let action = [
  { movieName: "Benedetta (2021)", image: "benedetta.jpg", info: "IMDb : 6.7/10", link: 'https://www.jalshamoviez.com.de/file/12765/benedetta-2021-hindi-vo-dubbed-full-movie-web-dl.mp4.html' },
  { movieName: "Basic Instinct (1992)", image: "basicinstinct.jpg", info: "IMDb : 7/10", link: 'https://m.vegamovies.tips/download-basic-instinct-1992-hindi-dubbed-english-movie/' },
  { movieName: "Basic Instinct 2 (2006)", image: "basicinstinct2.jpg", info: "IMDb : 4.4/10", link: 'https://m.vegamovies.tips/basic-instinct-2-2006-hindi-dubbed-english-movie/' },
  { movieName: "Bambola (1996)", image: "bambola.jpg", info: "IMDb : 4.5/10", link: 'https://www.google.com/search?q=bambola+movie+download&source=lmns&bih=752&biw=1536&rlz=1C1ONGR_enIN1031IN1031&hl=en&sa=X&ved=2ahUKEwi73tmk2OL_AhXWqGMGHQ5TBFgQ_AUoAHoECAEQAA' },
  { movieName: "Eva (2021)", image: "eva.jpg", info: "IMDb : 5.1/10", link: 'gugueuduyefuy' },
  { movieName: "Elegy (2008)", image: "elegy.jpg", info: "IMDb : 6.7/10", link: 'gugueuduyefuy' },
  { movieName: "Fifty Shades Movies Collection (2015-2018)", image: "https://upload.wikimedia.org/wikipedia/en/7/73/Fifty_Shades_of_Grey_poster.jpg", info: "IMDb : 5/10", link: 'https://m.vegamovies.tips/download-fifty-shades-movie-all-parts-collection-in-hindi-480p-720p-1080p/' },
  { movieName: "Jailbait (2014)", image: "jailbait.jpg", info: "IMBb : 4.5/10", link: 'https://m.vegamovies.tips/jailbait-2014-dual-audio-hindi-english-480p-720p-1080p/' },
  { movieName: "Janom Jamon (1992)", image: "janomjanom.jpg", info: "IMDb : 6.4/10", link: 'https://m.vegamovies.tips/download-jamon-jamon-1992-adult-movie/' },
  { movieName: "Little Thirteen (2012)", image: "littlethirteen.jpg", info: "IMDb : 5.3/10", link: 'https://m.vegamovies.tips/download-18-little-thirteen-2012-dual-audio-hindi-movie-480p-720p/' },
  { movieName: "Malena (2000)", image: "malena.jpg", info: "IMDb : 7.4/10", link: 'https://m.vegamovies.tips/download-malena-2000-hindi-dual-audio-full-movie-480p-720p/' },
  { movieName: "Playing With Dolls (2015)", image: "playingwithdolls.jpg", info: "IMDb : 2.6/10", link: 'gugueuduyefuy' },
  { movieName: "Pleasure (2021)", image: "pleasure.jpg", info: "IMDb : 6.4/10", link: 'https://m.vegamovies.tips/download-pleasure-2021-hindi-dubbed-480p-720p-hd/' },
  { movieName: "Pirates (2005)", image: "pirates.jpg", info: "IMDb : 7/10  ", link: 'https://themoviesmod.net.in/download-18-pirates-2005-hindi-480p-720p/' },
  { movieName: "Sleepaway Camp (1983)", image: "sleepawaycamp.jpg", info: "IMDb : 6.2/10", link: 'gugueuduyefuy' },
  { movieName: "Sleepaway Camp 2 (1988)", image: "sleepawaycamp2.jpg", info: "IMDb : 5.5/10", link: 'gugueuduyefuy' },
  { movieName: "Sleepaway Camp 3 (1989)", image: "sleepawaycamp3.jpg", info: "IMDb : 5/10", link: 'gugueuduyefuy' },
  { movieName: "The Dreamers (2003)", image: "thedreamer.jpg", info: "IMDb : 7.1/10", link: 'https://m.vegamovies.tips/the-dreamers-2003-dual-audio-hindi-movie/' },
  // { movieName: "XConfessions Vol.(2-6)All Movie Cllection", image: "https://image.pmgstatic.com/cache/resized/w420/files/images/film/posters/159/486/159486858_8479c4.jpg", info: "IMDb : 5.41/10", link: 'https://m.vegamovies.tips/?s=X-Confessions+' },
  { movieName: "Curiosa (2019)", image: "https://resizing.flixster.com/7sf_A31zaHOQV24vZ4DymB9wRqo=/206x305/v2/https://resizing.flixster.com/EDnZlOeYxyhGBS9o_puR3LQx4ME=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzAyZWUxMzMxLTk3Y2YtNDE5My05YzU4LTQyZWJhZWUyZmI1Yy5qcGc=", info: "IMDb : 5.4/10", link: 'https://hdmoviearea.info/download-curiosa-full-movie-hindi-720p/' },
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
