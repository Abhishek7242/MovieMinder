let mcontainer = document.getElementById('moviecontainer');
let next = document.getElementById('nextbtnbox').querySelector('#nextbtn');
let previous = document.getElementById('nextbtnbox').querySelector('#previousbtn');

let action = [
  { movieName: "Pirates (2005)", image: "pirates.jpg", info: "IMDb : 7/10  ", link: 'gugueuduyefuy' },
  { movieName: "Jailbait (2014)", image: "jailbait.jpg", info: "IMBb : 4.5/10", link: 'gugueuduyefuy' },
  { movieName: "Basic Instinct (1992)", image: "basicinstinct.jpg", info: "IMDb : 7/10", link: 'gugueuduyefuy' },
  { movieName: "Basic Instinct 2 (2006)", image: "basicinstinct2.jpg", info: "IMDb : 4.4/10", link: 'gugueuduyefuy' },
  { movieName: "Playing With Dolls (2015)", image: "playingwithdolls.jpg", info: "IMDb : 2.6/10", link: 'gugueuduyefuy' },
  { movieName: "The Dreamers (2003)", image: "thedreamer.jpg", info: "IMDb : 7.1/10", link: 'gugueuduyefuy' },
  { movieName: "Eva (2021)", image: "eva.jpg", info: "IMDb : 5.1/10", link: 'gugueuduyefuy' },
  { movieName: "Pleasure (2021)", image: "pleasure.jpg", info: "IMDb : 6.4/10", link: 'gugueuduyefuy' },
  { movieName: "Little Thirteen (2012)", image: "littlethirteen.jpg", info: "IMDb : 5.3/10", link: 'gugueuduyefuy' },
  { movieName: "Elegy (2008)", image: "elegy.jpg", info: "IMDb : 6.7/10", link: 'gugueuduyefuy' },
  { movieName: "Sleepaway Camp (1983)", image: "sleepawaycamp.jpg", info: "IMDb : 6.2/10", link: 'gugueuduyefuy' },
  { movieName: "Sleepaway Camp 2 (1988)", image: "sleepawaycamp2.jpg", info: "IMDb : 5.5/10", link: 'gugueuduyefuy' },
  { movieName: "Sleepaway Camp 3 (1989)", image: "sleepawaycamp3.jpg", info: "IMDb : 5/10", link: 'gugueuduyefuy' },
  { movieName: "Malena (2000)", image: "malena.jpg", info: "IMDb : 7.4/10", link: 'gugueuduyefuy' },
  { movieName: "Bambola (1996)", image: "bambola.jpg", info: "IMDb : 4.5/10", link: 'gugueuduyefuy' },
  { movieName: "Benedetta (2021)", image: "benedetta.jpg", info: "IMDb : 6.7/10", link: 'gugueuduyefuy' },
  { movieName: "Janom Jamon (1992)", image: "janomjanom.jpg", info: "IMDb : 6.4/10", link: 'gugueuduyefuy' },


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
