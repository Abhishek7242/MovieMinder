let mcontainer = document.getElementById('moviecontainer');
let next = document.getElementById('nextbtnbox').querySelector('#nextbtn');
let previous = document.getElementById('nextbtnbox').querySelector('#previousbtn');

let action = [
  { movieName: "Anti Matter (2016)", image: "https://upload.wikimedia.org/wikipedia/en/3/38/Anti_Matter_DVD_cover.jpg", info: "IMDb : 5.7/10", link: 'https://m.vegamovies.tips/download-anti-matter-2016-hindi-dubbed-movie-480p-720p/' },
  { movieName: "Death on the Nile (2022)", image: "https://lumiere-a.akamaihd.net/v1/images/p_20cs_deathonthenile_22532_4516b236.jpeg?region=0%2C0%2C540%2C810", info: "IMDb : 6.3/10", link: 'https://m.vegamovies.tips/download-death-on-the-nile-2022-dual-audio-hindi-480p-720p-1080p/' },
  { movieName: "The Invisible Guest (2016)", image: "theinvisibleguest.jpg", info: "IMDb : 8/10", link: 'https://m.vegamovies.tips/download-the-invisible-guest-2016-hindi-dual-audio-full-movie/' },
  { movieName: "Two (2021) ", image: "https://m.media-amazon.com/images/M/MV5BMTdkOWNjNzEtOTNjMC00NjBmLTk2ODYtZTk2NjA1NDZjYTQ2XkEyXkFqcGdeQXVyMTg4OTE4NDM@._V1_QL75_UY281_CR4,0,190,281_.jpg", info: "IMDb : 4.3/10", link: 'https://m.vegamovies.tips/download-two-netflix-original-2021-english-audio-480p-720p-1080p/' },
  { movieName: "Vivarium (2019) ", image: "https://m.media-amazon.com/images/M/MV5BNjljN2JiOGItNTg0Yi00YTI2LWFjMTYtODMzOGI3MGVhMmZmXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg", info: "IMDb : 5.9/10", link: 'https://m.vegamovies.tips/download-vivarium-2019-dual-audio-hindi-480p-720p-1080p/' },
  // { movieName: "(2019) ", image: "", info: "IMDb : /10", link: '' },




  // ... rest of the movie data ...
];
