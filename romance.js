let mcontainer = document.getElementById('moviecontainer');
let next = document.getElementById('nextbtnbox').querySelector('#nextbtn');
let previous = document.getElementById('nextbtnbox').querySelector('#previousbtn');

let action = [
  { movieName: "After (2019) ", image: "https://m.media-amazon.com/images/M/MV5BOGUwMjk3YzktNDI0Yy00MzFiLWFjNmEtYTA2ODVjMzNhODhjXkEyXkFqcGdeQXVyOTQ1MDI4MzY@._V1_.jpg", info: "IMDb : 5.3/10", link: 'https://m.vegamovies.tips/download-after-2019-org-dual-audio-hindi-bluray-480p-720p-1080p/' },
  { movieName: "After We Fell (2021)", image: "https://m.media-amazon.com/images/M/MV5BMTEzN2MxZWUtYTJkYS00NjU5LTk0ZjgtNzc1OTMwNWNjZGFkXkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_.jpg", info: "IMDb : 4.7/10", link: 'https://m.vegamovies.tips/download-after-we-fell-2021-english-480p-720p-1080p/' },
  { movieName: "After Ever Happy (2022)", image: "https://m.vegamovies.tips/download-after-ever-happy-2022-english-movie-480p-720p-1080p/", info: "IMDb : 4.6/10", link: 'https://m.vegamovies.tips/download-after-ever-happy-2022-voice-over-full-movie-480p-720p-1080p/' },
  { movieName: "Fifty Shades Movies Collection (2015-2018)", image: "https://upload.wikimedia.org/wikipedia/en/7/73/Fifty_Shades_of_Grey_poster.jpg", info: "IMDb : 5/10", link: 'https://m.vegamovies.tips/download-fifty-shades-movie-all-parts-collection-in-hindi-480p-720p-1080p/' },
  { movieName: "Indecent Proposal (1993)", image: "https://m.media-amazon.com/images/M/MV5BODk3OWJhMTUtMTU2MC00ZjJmLTk2OGYtN2NiZGMxNmY4NzU3L2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg", info: "IMDb : 6/10", link: 'https://m.vegamovies.tips/download-indecent-proposal-1993-dual-audio-hindi-480p-720p-1080p/' },
  { movieName: "Oh, Ramona! (2019)", image: "https://m.media-amazon.com/images/M/MV5BZmU1YmM2MTQtMDI2Zi00ZDNkLWExYWItMGU4NjA3NjA2MWU4XkEyXkFqcGdeQXVyNjU4MjE5Njk@._V1_.jpg", info: "IMDb : 4.8/10", link: 'https://m.vegamovies.tips/download-netflix-oh-ramona-2019-full-movie-hd-in-english/' },
  { movieName: "Passengers (2016)", image: "https://images.moviesanywhere.com/39c15a3ca232fb9edc5b07e2050ca49a/a9105114-4a28-48df-b2ac-c2367276b369.jpg", info: "IMDb : 7/10", link: 'https://vegamovies.gold/passengers-2016-dual-audio-full-movie-480p-720p-1080p/' },
  { movieName: "The Escort (2015)", image: "https://m.media-amazon.com/images/M/MV5BNTgzNDgzNDAyMF5BMl5BanBnXkFtZTgwMTgxOTkzNjE@._V1_FMjpg_UX1000_.jpg", info: "IMDb : 6/10", link: 'https://www.google.com/search?q=The+Escort+(2015)movie+download&rlz=1C1ONGR_enIN1031IN1031&oq=The+Escort+(2015)movie+download&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRhA0gEOMjcwMzAxNDg5ajBqMTWoAgCwAgA&sourceid=chrome&ie=UTF-8' },
  { movieName: "The In Between (2022)", image: "https://m.media-amazon.com/images/M/MV5BNGRjNWUxMzgtM2ZhZC00NmI3LThiNWEtNGFkNDk4OWRmYWI4XkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_.jpg", info: "IMDb : 5.9/10", link: 'https://m.vegamovies.tips/download-the-in-between-2022-dual-audio-hindi-480p-720p-1080p/' },
  // { movieName: "(2019) ", image: "", info: "IMDb : /10", link: '' },



  // ... rest of the movie data ...
];
