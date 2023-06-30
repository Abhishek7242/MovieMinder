let mcontainer = document.getElementById('moviecontainer');
let next = document.getElementById('nextbtnbox').querySelector('#nextbtn');
let previous = document.getElementById('nextbtnbox').querySelector('#previousbtn');

let action = [
  { movieName: "13B: Fear Has a New Address (2009) ", image: "https://m.media-amazon.com/images/M/MV5BMTY3MTE4MzkxNl5BMl5BanBnXkFtZTcwNzU5ODYzMg@@._V1_.jpg", info: "IMDb : 7.3/10", link: 'https://dotmovies.wiki/download-13b-fear-has-a-new-address-yavarum-nalam-2009-hindi-movie-bluray-480p-720p-1080p/' },
  { movieName: "Badla (2019)", image: "badla.jpg", info: "IMDb : 7.8/10", link: 'https://m.dotmovies.boats/download-badla-2019-hindi-movie/' },
  { movieName: "Guilty (2020) ", image: "https://m.media-amazon.com/images/M/MV5BYWYxMjBlZjEtY2ZkYS00OWE1LWEzNTAtNDlkZWE5NzI1NDE1XkEyXkFqcGdeQXVyMTA5NzIyMDY5._V1_.jpg", info: "IMDb : 5.4/10", link: 'https://dotmovies.wiki/download-guilty-hindi-movie-480p-720p-1080p/' },
  { movieName: "Malang (2020)", image: "https://m.media-amazon.com/images/M/MV5BMDJiMDQyYTItZTA0NC00NmVlLTg3NGItMjQwOWI2ZjY0MmE5XkEyXkFqcGdeQXVyOTAzMTc2MjA@._V1_.jpg", info: "IMDb : 6.5/10", link: 'https://dotmovies.wiki/malang-2020-hindi-movie-download/' },
  { movieName: "Pink (2016) ", image: "https://m.media-amazon.com/images/M/MV5BNGI1MTI1YTQtY2QwYi00YzUzLTg3NWYtNzExZDlhOTZmZWU0XkEyXkFqcGdeQXVyMDkwNTkwNg@@._V1_.jpg", info: "IMDb : 8.1/10", link: 'https://dotmovies.wiki/download-pink-2016-hindi-movie-hdrip/' },
  { movieName: "Raman Raghav 2.0 (2016) ", image: "https://m.media-amazon.com/images/M/MV5BMTA2M2RmOGEtYzU3ZS00MGZiLTkwMzgtOGI5MTQzNDliYmY5XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg", info: "IMDb : 7.3/10", link: 'https://dotmovies.wiki/download-raman-raghav-2-0-2016-hindi-movie-480p-720p-1080p/' },
  { movieName: "Sherni (2021)", image: "https://m.media-amazon.com/images/M/MV5BNjJmMzYyN2ItMzU0NS00MmYyLWI0ZDQtMjFmMWJkYWQ2YjYwXkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_.jpg", info: "IMDb : 6.8/10", link: 'https://dotmovies.wiki/download-sherni-2021-hindi-movie-hdrip-1080p-480p-720p/' },
  // { movieName: "(2019) ", image: "", info: "IMDb : /10", link: '' },




  // ... rest of the movie data ...
];
