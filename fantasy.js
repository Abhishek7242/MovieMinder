let mcontainer = document.getElementById('moviecontainer');
let next = document.getElementById('nextbtnbox').querySelector('#nextbtn');
let previous = document.getElementById('nextbtnbox').querySelector('#previousbtn');

let action = [
  { movieName: "Clash of the Titans (2010)", image: "https://m.media-amazon.com/images/M/MV5BMTYxNjg4MzU5OV5BMl5BanBnXkFtZTcwOTA3NTUwMw@@._V1_.jpg", info: "IMDb : 5.9/10", link: 'https://m.vegamovies.tips/clash-of-the-titans-2010-hindi-dubbed-english-movie/' },
  { movieName: "Hercules (2014)", image: "https://static.tvtropes.org/pmwiki/pub/images/eba1adc7_2778_4f11_a80f_b23d91f75449.jpeg", info: "IMDb : 6/10", link: 'https://m.vegamovies.tips/hercules-2014-hindi-english-movie/' },
  { movieName: "Mortal Kombat (2021)", image: "https://m.media-amazon.com/images/M/MV5BYjZmMjdlNDEtOGE0NC00MmQyLWIyNTgtMzc1NWRjYTYzMWZmXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg", info: "IMDb : 6.1/10", link: 'https://m.vegamovies.tips/download-mortal-kombat-2021-dual-audio-hindi-bluray-480p-720p-1080p-2160p/' },
  { movieName: "Samaritan (2022)", image: "https://m.vegamovies.tips/download-samaritan-2022-dual-audio-hindi-480p-720p-1080p/", info: "IMDb : 5.7/10", link: 'https://upload.wikimedia.org/wikipedia/en/d/de/Samaritan2022Poster.jpg' },
  { movieName: "The Suicide Squad (2021)", image: "https://images.moviesanywhere.com/d139775114b50558dafa489f9b2c0036/9ad4852f-53e6-47c3-bf71-83a11a2607cc.jpg", info: "IMDb : 7.2/10", link: 'https://m.vegamovies.tips/download-the-suicide-squad-2021-dual-audio-hindi-480p-720p-1080p/' },
  { movieName: "Warcraft (2016) ", image: "https://m.media-amazon.com/images/M/MV5BMjIwNTM0Mzc5MV5BMl5BanBnXkFtZTgwMDk5NDU1ODE@._V1_.jpg", info: "IMDb : 6.7/10", link: 'https://m.vegamovies.tips/download-warcraft-2016-dual-audio-hindi-bluray-480p-720p-1080p-2160p/' },
  { movieName: "X-MEN All Movie Collection", image: "https://upload.wikimedia.org/wikipedia/en/8/81/X-MenfilmPoster.jpg", info: "", link: 'https://m.vegamovies.tips/?s=x-men' },



  // ... rest of the movie data ...
];
