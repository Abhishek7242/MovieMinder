let mcontainer = document.getElementById('moviecontainer');
let next = document.getElementById('nextbtnbox').querySelector('#nextbtn');
let previous = document.getElementById('nextbtnbox').querySelector('#previousbtn');

let action = [
  // { movieName: "All Ladies Do It (1992) ", image: "https://www.themoviedb.org/t/p/w500/sVOdtRA4bwZmrVE3qzdJH73jOhL.jpg", info: "IMDb : 5.2/10", link: 'https://m.vegamovies.tips/download-18-all-ladies-do-it-1992-adult-movie/' },
  // { movieName: "Benedetta (2021)", image: "benedetta.jpg", info: "IMDb : 6.7/10", link: 'https://www.jalshamoviez.com.de/file/12765/benedetta-2021-hindi-vo-dubbed-full-movie-web-dl.mp4.html' },
  // { movieName: "Basic Instinct (1992)", image: "basicinstinct.jpg", info: "IMDb : 7/10", link: 'https://m.vegamovies.tips/download-basic-instinct-1992-hindi-dubbed-english-movie/' },
  // { movieName: "Basic Instinct 2 (2006)", image: "basicinstinct2.jpg", info: "IMDb : 4.4/10", link: 'https://m.vegamovies.tips/basic-instinct-2-2006-hindi-dubbed-english-movie/' },
  // { movieName: "Bambola (1996)", image: "bambola.jpg", info: "IMDb : 4.5/10", link: 'https://www.google.com/search?q=bambola+movie+download&source=lmns&bih=752&biw=1536&rlz=1C1ONGR_enIN1031IN1031&hl=en&sa=X&ved=2ahUKEwi73tmk2OL_AhXWqGMGHQ5TBFgQ_AUoAHoECAEQAA' },
  // { movieName: "Curiosa (2019)", image: "https://resizing.flixster.com/7sf_A31zaHOQV24vZ4DymB9wRqo=/206x305/v2/https://resizing.flixster.com/EDnZlOeYxyhGBS9o_puR3LQx4ME=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzAyZWUxMzMxLTk3Y2YtNDE5My05YzU4LTQyZWJhZWUyZmI1Yy5qcGc=", info: "IMDb : 5.4/10", link: 'https://hdmoviearea.info/download-curiosa-full-movie-hindi-720p/' },
  // { movieName: "Come Play with Me (1977)", image: "https://m.media-amazon.com/images/M/MV5BZjY2YTIzNmItNTdiMS00MWE0LWEyZGUtNzYyMmRhYThlYmZmXkEyXkFqcGdeQXVyNjUwMzI2NzU@._V1_.jpg", info: "IMDb : 3.7/10", link: 'https://m.vegamovies.tips/download-18-come-play-with-me-1977-hdrip-english-full-movie-720p-hevc-hdrip/' },
  // { movieName: "Cashback (2006)", image: "https://m.media-amazon.com/images/M/MV5BZjhiZmYwMWEtZmZiOC00NDhhLWFhMjQtZmQ5Mjc0NjZhZjFmXkEyXkFqcGdeQXVyMTMxMTY0OTQ@._V1_FMjpg_UX1000_.jpg", info: "IMDb : 7.1/10", link: 'https://m.vegamovies.tips/cashback-2006-download-in-english-adult-movie-720p/' },
  // { movieName: "Dressed to Kill (1980) ", image: "https://s3.amazonaws.com/criterion-production/films/119ede93fcbb25f2a775ccf8cbe1d765/MZJJifQQcL1ioSEvZzaO0kYWvcpAhH_large.jpg", info: "IMDb : 7.1/10", link: 'https://www.google.com/search?q=Dressed+to+Kill+%281980%29+movie+download&bih=752&biw=1536&rlz=1C1ONGR_enIN1031IN1031&hl=en&sxsrf=APwXEdd8H6wyEGYsCoISSiHbVcnBP7xFdQ%3A1688010401541&ei=of6cZKbGIJyMseMP-tiHuAU&ved=0ahUKEwjmmvHiyOf_AhUcRmwGHXrsAVcQ4dUDCA8&uact=5&oq=Dressed+to+Kill+%281980%29+movie+download&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIGCAAQFhAeMgYIABAWEB4yBggAEBYQHjIICAAQigUQhgMyCAgAEIoFEIYDOgoIABBHENYEELADOgUILhCABDoFCAAQgAQ6EwguEIAEEJcFENwEEN4EEOAEGAE6CAgAEBYQHhAPSgQIQRgAUP4RWKc4YM05aAFwAXgAgAHaC4gB1yeSAQ0yLTQuMi4xLjEuMS4xmAEAoAECoAEBwAEByAEI2gEGCAEQARgU&sclient=gws-wiz-serp' },
  // { movieName: "Eva (2021)", image: "eva.jpg", info: "IMDb : 5.1/10", link: 'https://hdmoviearea.info/download-eva-full-movie-hindi-480p/' },
  // { movieName: "Elegy (2008)", image: "elegy.jpg", info: "IMDb : 6.7/10", link: 'gugueuduyefuy' },
  // { movieName: "Fifty Shades Movies Collection (2015-2018)", image: "https://upload.wikimedia.org/wikipedia/en/7/73/Fifty_Shades_of_Grey_poster.jpg", info: "IMDb : 5/10", link: 'https://m.vegamovies.tips/download-fifty-shades-movie-all-parts-collection-in-hindi-480p-720p-1080p/' },
  // { movieName: "Jailbait (2014)", image: "jailbait.jpg", info: "IMBb : 4.5/10", link: 'https://m.vegamovies.tips/jailbait-2014-dual-audio-hindi-english-480p-720p-1080p/' },
  // { movieName: "Janom Jamon (1992)", image: "janomjanom.jpg", info: "IMDb : 6.4/10", link: 'https://m.vegamovies.tips/download-jamon-jamon-1992-adult-movie/' },
  // { movieName: "Killing Me Softly (2002) ", image: "https://m.media-amazon.com/images/M/MV5BNmM1MTNkZGYtZWZiZS00MTcwLWJjYTItZTc2MTEyOTA2MTBiXkEyXkFqcGdeQXVyNjU0NTI0Nw@@._V1_UY1200_CR85,0,630,1200_AL_.jpg", info: "IMDb : 5.4/10", link: 'https://m.vegamovies.tips/download-18-killing-me-softly-2002-adult-movie/' },
  // { movieName: "Little Thirteen (2012)", image: "littlethirteen.jpg", info: "IMDb : 5.3/10", link: 'https://m.vegamovies.tips/download-18-little-thirteen-2012-dual-audio-hindi-movie-480p-720p/' },
  // { movieName: "Lemon Popsicle (1978) ", image: "https://m.media-amazon.com/images/M/MV5BOWZkZjUwOTgtYWFlYy00YmQ5LTk3NzUtYmRhOWFjMDAzYWVkXkEyXkFqcGdeQXVyMjMyMzI4MzY@._V1_.jpg", info: "IMDb : 6.4/10", link: 'https://m.vegamovies.tips/download-lemon-popsicle-eskimo-limon-1978-dual-audio-hindi-480p-720p/' },
  // { movieName: "Malena (2000)", image: "malena.jpg", info: "IMDb : 7.4/10", link: 'https://m.vegamovies.tips/download-malena-2000-hindi-dual-audio-full-movie-480p-720p/' },
  // { movieName: "Maniac (2012)", image: "https://upload.wikimedia.org/wikipedia/en/e/ee/Maniac_%282012_film%29.jpg", info: "IMDb : 6.1/10", link: 'https://hdmoviearea.info/download-maniac-full-movie-720p/' },
  // { movieName: "Natalie (2010) ", image: "https://m.media-amazon.com/images/M/MV5BNGJmZTkyNTktNDUyZi00YmRmLTg1YWUtOTQ3NWNjMWRhYWQ4XkEyXkFqcGdeQXVyMzY2MDk0MTk@._V1_.jpg", info: "IMDb : 4.6/10", link: 'https://m.vegamovies.tips/download-natalie-2010-hindi-dubbed-480p-720p-webrip/' },
  // { movieName: "Nymphomaniac: Vol.I(2013) ", image: "https://upload.wikimedia.org/wikipedia/en/e/e5/Nymphomaniac_Vol._I_%26_II.jpg", info: "IMDb : 6.9/10", link: 'https://m.vegamovies.tips/download-nymphomaniac-vol-1-2013-dual-audio-hindi-movie-480p-720p-1080p/' },
  // { movieName: "Nymphomaniac: Vol. II (2013)", image: "https://i0.wp.com/newcelluloid.com/wp-content/uploads/2016/04/nymphomaniac-vol-ii.jpg", info: "IMDb : 6.6/10", link: 'https://m.vegamovies.tips/download-nymphomaniac-vol-2-2013-full-movie-in-english-480p-720p-1080p/' },
  // { movieName: "Playing With Dolls (2015)", image: "playingwithdolls.jpg", info: "IMDb : 2.6/10", link: 'gugueuduyefuy' },
  // { movieName: "Pleasure (2021)", image: "pleasure.jpg", info: "IMDb : 6.4/10", link: 'https://m.vegamovies.tips/download-pleasure-2021-hindi-dubbed-480p-720p-hd/' },
  // { movieName: "Pirates (2005)", image: "pirates.jpg", info: "IMDb : 7/10  ", link: 'https://themoviesmod.net.in/download-18-pirates-2005-hindi-480p-720p/' },
  // { movieName: "Puppylove (2013)", image: "https://m.media-amazon.com/images/M/MV5BNTUzNjU1MTk2Nl5BMl5BanBnXkFtZTgwNzQ4MzM0MzE@._V1_.jpg", info: "IMDb : 5.7/10", link: 'https://www.google.com/search?q=puppy+love+movie+download&bih=752&biw=1536&rlz=1C1ONGR_enIN1031IN1031&hl=en&sxsrf=APwXEdezjlFIIf6Chb-Ah-gMtAZ6GKyl0A%3A1688011959971&ei=twSdZJHdOsKCoATJyL3ACw&ved=0ahUKEwjRlIDKzuf_AhVCAYgKHUlkD7gQ4dUDCA8&uact=5&oq=puppy+love+movie+download&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzoKCAAQRxDWBBCwAzoKCAAQigUQsAMQQzoNCAAQ5AIQ1gQQsAMYAToPCC4QigUQyAMQsAMQQxgCOgUIABCABDoGCAAQFhAeOggIABCKBRCGA0oECEEYAFC8AViOE2DJFGgBcAF4AYABuwaIAe0XkgELMi01LjAuMi4wLjGYAQCgAQHAAQHIARHaAQYIARABGAnaAQYIAhABGAg&sclient=gws-wiz-serp' },
  // { movieName: "Romance (1999)", image: "https://pics.filmaffinity.com/Romance_X-404923264-large.jpg", info: "IMDb : 5.2/10", link: 'https://m.vegamovies.tips/download-18-romance-1999-dual-audio-hindi-480p-720p/' },
  // { movieName: "Student Services (TV Movie 2010)", image: "https://images.jdmagicbox.com/comp/jd_social/news/2018jul19/image-102486-yxzakncmb1.jpg", info: "IMDb : 6.1/10", link: 'https://www.google.com/search?q=student+services+movie+download+in+hindi&bih=752&biw=1536&rlz=1C1ONGR_enIN1031IN1031&hl=en&sxsrf=APwXEdeGtxMlDBXIVDz3I3RfdqiCsjnI2Q%3A1688013086577&ei=HgmdZLHsItm7seMP4fqH6AY&ved=0ahUKEwix85rj0uf_AhXZXWwGHWH9AW0Q4dUDCA8&uact=5&oq=student+services+movie+download+in+hindi&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIFCAAQgAQyCAgAEIAEEMsBOgQIABBHOggIABCKBRCGAzoHCCMQigUQJzoGCAAQFhAeSgQIQRgAUA1YlhRg0xdoAHACeACAAeYDiAHsE5IBBzItNC4zLjGYAQCgAQHAAQHIAQg&sclient=gws-wiz-serp' },
  // { movieName: "Sleepaway Camp (1983)", image: "sleepawaycamp.jpg", info: "IMDb : 6.2/10", link: 'gugueuduyefuy' },
  // { movieName: "Sleepaway Camp 2 (1988)", image: "sleepawaycamp2.jpg", info: "IMDb : 5.5/10", link: 'gugueuduyefuy' },
  // { movieName: "Sleepaway Camp 3 (1989)", image: "sleepawaycamp3.jpg", info: "IMDb : 5/10", link: 'gugueuduyefuy' },
  // { movieName: "Stealing Beauty (1996)", image: "https://images.moviesanywhere.com/13e5df85df1e753084717223ea5c7d22/44d0604a-22ee-4c4f-8e01-9ec484fe4e2c.jpg", info: "IMDb : 6.5/10", link: 'https://www.google.com/search?q=stealing+beauty+movie+download&bih=752&biw=1536&rlz=1C1ONGR_enIN1031IN1031&hl=en&sxsrf=APwXEdfpWXsXrynXw8Zb88ovfnsVjqujjw%3A1688014113032&ei=IQ2dZP_RAbWNseMPiYmxoAM&ved=0ahUKEwi_5tTM1uf_AhW1RmwGHYlEDDQQ4dUDCA8&uact=5&oq=stealing+beauty+movie+download&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIFCAAQgAQyCAgAEIoFEIYDMggIABCKBRCGAzIICAAQigUQhgMyCAgAEIoFEIYDOggIABCABBCwAzoHCAAQHhCwAzoNCC4QgAQQyAMQsAMYAToFCC4QgARKBAhBGAFQgAJYqhNg9RRoAHAAeACAAZ4CiAGQEJIBBTAuMS44mAEAoAEBwAEByAEK2gEECAEYCA&sclient=gws-wiz-serp' },
  // { movieName: "The Dreamers (2003)", image: "thedreamer.jpg", info: "IMDb : 7.1/10", link: 'https://m.vegamovies.tips/the-dreamers-2003-dual-audio-hindi-movie/' },
  // { movieName: "The Key (1983)", image: "https://m.media-amazon.com/images/M/MV5BOWE1MDRiOTgtNTcxYi00M2U5LWE1YmYtZDY4ZmE2MTc0ZWRkXkEyXkFqcGdeQXVyNDE5MTU2MDE@._V1_.jpg", info: "IMDb : 5.4/10", link: 'https://hdmoviearea.info/download-the-key-full-movie-hindi-720p/' },
  // { movieName: "The Entity (1982) ", image: "https://m.media-amazon.com/images/M/MV5BMTk2Nzc4Njg2OF5BMl5BanBnXkFtZTcwMDMzNjgyMQ@@._V1_.jpg", info: "IMDb : 6.7/10", link: 'https://www.google.com/search?q=the+entity+movie+movie+download&bih=752&biw=1536&rlz=1C1ONGR_enIN1031IN1031&hl=en&sxsrf=APwXEdfx-t7htI2swjAXOa2SwBCDwiq7Xg%3A1688011667691&ei=kwOdZIvtKZn5hwOL9YTYCg&ved=0ahUKEwjLgtG-zef_AhWZ_GEKHYs6AasQ4dUDCA8&uact=5&oq=the+entity+movie+movie+download&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIHCCEQoAEQCjIICCEQFhAeEB0yCAghEBYQHhAdMggIIRAWEB4QHTIICCEQFhAeEB06CggAEEcQ1gQQsAM6CggAEIoFELADEEM6DQgAEOQCENYEELADGAE6DwguEIoFEMgDELADEEMYAjoHCC4QigUQQzoFCAAQgAQ6BwgAEIoFEEM6FQguEIoFEEMQlwUQ3AQQ3gQQ4AQYAzoFCCEQoAE6BggAEBYQHjoICAAQigUQhgNKBAhBGABQvQFYwyxgvS5oAnAAeACAAf8CiAH6JZIBBjItMTAuNpgBAKABAcABAcgBE9oBBggBEAEYCdoBBggCEAEYCNoBBggDEAEYFA&sclient=gws-wiz-serp' },
  // { movieName: "The Man in the Moon (1991) ", image: "https://pics.filmaffinity.com/The_Man_in_the_Moon-235521733-large.jpg", info: "IMDb : 7.3/10", link: 'https://www.google.com/search?q=the+man+in+the+moon+movie+dowmload%0D%0A&bih=752&biw=1536&rlz=1C1ONGR_enIN1031IN1031&hl=en&sxsrf=APwXEdeBbYNpJC9ZXJ3UYYVlVG95VBm5pg%3A1688010766477&ei=DgCdZIbnHOK4seMPoJqW8Ag&ved=0ahUKEwiGpvOQyuf_AhViXGwGHSCNBY4Q4dUDCA8&oq=the+man+in+the+moon+movie+dowmload%0D%0A&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQDEoECEEYAFAAWABgAGgAcAF4AIABAIgBAJIBAJgBAA&sclient=gws-wiz-serp' },
  // { movieName: "The Final Girl (2010)", image: "https://m.media-amazon.com/images/M/MV5BNDAzNjI2NjM1OV5BMl5BanBnXkFtZTcwNTI5NjM2Mw@@._V1_.jpg", info: "IMDb : 3.6/10", link: 'https://www.google.com/search?q=the+final+girl+2010+movie+download+in+english+&bih=752&biw=1536&rlz=1C1ONGR_enIN1031IN1031&hl=en&sxsrf=APwXEddrFVE3dNEbO-tCSKdRM7ILWXq96Q%3A1688011013979&ei=BQGdZISmO7rgseMPgc2m-A4&ved=0ahUKEwjEvPWGy-f_AhU6cGwGHYGmCe8Q4dUDCA8&uact=5&oq=the+final+girl+2010+movie+download+in+english+&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIFCCEQoAEyBQghEKABMgUIIRCgAToICCEQFhAeEB06BwghEKABEApKBAhBGAFQ6QFY3SBgkSJoAXAAeACAAdoFiAGJI5IBCzItNi4yLjAuMS4ymAEAoAEBwAEB&sclient=gws-wiz-serp' },
  // { movieName: "The Life and Death of a Porno Gang (2009)", image: "https://upload.wikimedia.org/wikipedia/en/8/89/The_Life_and_Death_of_a_Porno_Gang_Poster.jpg", info: "IMDb : 6/10", link: 'https://www.google.com/search?q=life+and+death+of+a+porno+gang+movie+download+&rlz=1C1ONGR_enIN1031IN1031&sxsrf=APwXEde3bCQ4MEreM_0u-MybkMhRDQgTLw%3A1688008965078&ei=BfmcZOmnBMflseMP8bGY2AU&ved=0ahUKEwipvva1w-f_AhXHcmwGHfEYBlsQ4dUDCA8&uact=5&oq=life+and+death+of+a+porno+gang+movie+download+&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQA0oECEEYAVDSAViqC2DdD2gBcAB4AIAB6AGIAdQMkgEFMC40LjSYAQCgAQHAAQE&sclient=gws-wiz-serp' },
  // { movieName: "The Shining (1980) ", image: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1d/The_Shining_%281980%29_U.K._release_poster_-_The_tide_of_terror_that_swept_America_IS_HERE.jpg/220px-The_Shining_%281980%29_U.K._release_poster_-_The_tide_of_terror_that_swept_America_IS_HERE.jpg", info: "IMDb : 8.4/10", link: 'https://m.vegamovies.tips/download-the-shining-1980-english-movie-480p-720p-1080p/' },
  // { movieName: "Young Adam(2003) ", image: "https://m.media-amazon.com/images/M/MV5BMTMzMjUxMzU5M15BMl5BanBnXkFtZTcwMzc2NTUyMQ@@._V1_.jpg", info: "IMDb : 6.4/10", link: 'https://www.google.com/search?q=ypung+adam+movie+download&rlz=1C1ONGR_enIN1031IN1031&oq=ypung+adam+movie+download&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIJCAEQABgNGIAEMggIAhAAGBYYHjIICAMQABgWGB4yCAgEEAAYFhgeMggIBRAAGBYYHjIICAYQABgWGB4yCggHEAAYhgMYigXSAQ04NzkyNjIwMGowajE1qAIAsAIA&sourceid=chrome&ie=UTF-8' },
  // // { movieName: "XConfessions Vol.(2-6)All Movie Cllection", image: "https://image.pmgstatic.com/cache/resized/w420/files/images/film/posters/159/486/159486858_8479c4.jpg", info: "IMDb : 5.41/10", link: 'https://m.vegamovies.tips/?s=X-Confessions+' },
  // // // { movieName: "(2019) ", image: "", info: "IMDb : /10", link: '' },


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
