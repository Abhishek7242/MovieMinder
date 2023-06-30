let mcontainer = document.getElementById('moviecontainer');
let next = document.getElementById('nextbtnbox').querySelector('#nextbtn');
let previous = document.getElementById('nextbtnbox').querySelector('#previousbtn');

let action = [
  { movieName: "Elektra (2005) ", image: "https://upload.wikimedia.org/wikipedia/en/thumb/2/21/Elektra_teaser.jpg/220px-Elektra_teaser.jpg", info: "IMDb : 4.7/10", link: 'https://m.vegamovies.tips/download-elektra-2005-dual-audio-hindi-movie-480p-720p/' },
  { movieName: "Gods of Egypt (2016) ", image: "https://upload.wikimedia.org/wikipedia/en/2/2f/Gods_of_Egypt_poster.jpg", info: "IMDb : 5.4/10", link: 'https://m.vegamovies.tips/download-gods-of-egypt-2016-dual-audio-hindi-movie-480p-720p-1080p/' },
  { movieName: "Jungle Cruise (2021)", image: "https://lumiere-a.akamaihd.net/v1/images/p_junglecruise_21740_v2_bb7f0ae4.jpeg", info: "IMDb : 6.6/10", link: 'https://m.vegamovies.tips/download-jungle-cruise-dual-audio-bluray-full-movie/' },
  { movieName: "Suicide Squad (2016) ", image: "https://m.media-amazon.com/images/M/MV5BMjM1OTMxNzUyM15BMl5BanBnXkFtZTgwNjYzMTIzOTE@._V1_.jpg", info: "IMDb : 5.9/10", link: 'https://m.vegamovies.tips/download-suicide-squad-2016-hindi-org-dubbed-bluray-480p-720p-1080p/' },
  { movieName: "X-MEN All Movie Collection", image: "https://upload.wikimedia.org/wikipedia/en/8/81/X-MenfilmPoster.jpg", info: "", link: 'https://m.vegamovies.tips/?s=x-men' },



  // ... rest of the movie data ...
];
