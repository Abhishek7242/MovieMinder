let mcontainer = document.getElementById('moviecontainer');
let next = document.getElementById('nextbtnbox').querySelector('#nextbtn');
let previous = document.getElementById('nextbtnbox').querySelector('#previousbtn');

let action = [
  { movieName: "Tadap (2021)", image: "tadap.jpg", info: "IMDb : 5.1/10", link: 'https://m.dotmovies.boats/tadap-2021-hindi-movie/' },
  { movieName: "Malang (2020)", image: "https://m.media-amazon.com/images/M/MV5BMDJiMDQyYTItZTA0NC00NmVlLTg3NGItMjQwOWI2ZjY0MmE5XkEyXkFqcGdeQXVyOTAzMTc2MjA@._V1_.jpg", info: "IMDb : 6.5/10", link: 'https://dotmovies.wiki/malang-2020-hindi-movie-download/' },
  { movieName: "Raid (2018) ", image: "https://upload.wikimedia.org/wikipedia/en/2/28/Ajay_Devgn%27s_Raid_poster.jpg", info: "IMDb : 7.4/10", link: 'https://dotmovies.wiki/raid-2018-hindi-full-movie/' },
  // { movieName: "Raid (2018) ", image: "", info: "IMDb : /10", link: '' },


  // ... rest of the movie data ...
];
