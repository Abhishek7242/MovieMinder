let mcontainer = document.getElementById('moviecontainer');
let next = document.getElementById('nextbtnbox').querySelector('#nextbtn');
let previous = document.getElementById('nextbtnbox').querySelector('#previousbtn');

let action = [
  { movieName: "127 Hours (2010)", image: "https://m.media-amazon.com/images/M/MV5BMTc2NjMzOTE3Ml5BMl5BanBnXkFtZTcwMDE0OTc5Mw@@._V1_.jpg", info: "IMDb : 7.5/10", link: 'https://vegamovies.gold/download-127-hours-2010-bluray-hindi-dubbed-full-movie-480p-720p/' },
  { movieName: "Dolittle (2020)", image: "https://m.media-amazon.com/images/M/MV5BMDNkODA5ZGQtODczOS00OTQxLThhMTItMjk0ZmNhMDM0YjNmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg", info: "IMDb : 5.6/10", link: 'https://m.vegamovies.tips/download-dolittle-dual-audio-full-movie-480p-720p-1080p/' },
  { movieName: "Elektra (2005) ", image: "https://upload.wikimedia.org/wikipedia/en/thumb/2/21/Elektra_teaser.jpg/220px-Elektra_teaser.jpg", info: "IMDb : 4.7/10", link: 'https://m.vegamovies.tips/download-elektra-2005-dual-audio-hindi-movie-480p-720p/' },
  { movieName: "Gods of Egypt (2016) ", image: "https://upload.wikimedia.org/wikipedia/en/2/2f/Gods_of_Egypt_poster.jpg", info: "IMDb : 5.4/10", link: 'https://m.vegamovies.tips/download-gods-of-egypt-2016-dual-audio-hindi-movie-480p-720p-1080p/' },
  { movieName: "Jungle Cruise (2021)", image: "https://lumiere-a.akamaihd.net/v1/images/p_junglecruise_21740_v2_bb7f0ae4.jpeg", info: "IMDb : 6.6/10", link: 'https://m.vegamovies.tips/download-jungle-cruise-dual-audio-bluray-full-movie/' },
  { movieName: "King Kong (2005)", image: "https://images.moviesanywhere.com/48097a2890c8f7fca7246973847b0ade/1259d2cf-4871-422a-9dec-1e291c2fec92.jpg", info: "IMDb : 7.2/10", link: 'https://vegamovies.gold/download-king-kong-2005-dual-audio-hindi-english-movie-480p-720p-1080p/' },
  { movieName: "Suicide Squad (2016) ", image: "https://m.media-amazon.com/images/M/MV5BMjM1OTMxNzUyM15BMl5BanBnXkFtZTgwNjYzMTIzOTE@._V1_.jpg", info: "IMDb : 5.9/10", link: 'https://m.vegamovies.tips/download-suicide-squad-2016-hindi-org-dubbed-bluray-480p-720p-1080p/' },
  { movieName: "X-MEN All Movie Collection", image: "https://upload.wikimedia.org/wikipedia/en/8/81/X-MenfilmPoster.jpg", info: "", link: 'https://m.vegamovies.tips/?s=x-men' },
  // { movieName: "(2019) ", image: "", info: "IMDb : /10", link: '' },



  // ... rest of the movie data ...
];
