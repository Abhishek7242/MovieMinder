let mcontainer = document.getElementById('moviecontainer');
let next = document.getElementById('nextbtnbox').querySelector('#nextbtn');
let previous = document.getElementById('nextbtnbox').querySelector('#previousbtn');

let action = [
  { movieName: "13B: Fear Has a New Address (2009) ", image: "https://m.media-amazon.com/images/M/MV5BMTY3MTE4MzkxNl5BMl5BanBnXkFtZTcwNzU5ODYzMg@@._V1_.jpg", info: "IMDb : 7.3/10", link: 'https://dotmovies.wiki/download-13b-fear-has-a-new-address-yavarum-nalam-2009-hindi-movie-bluray-480p-720p-1080p/' },
  { movieName: "Pari (2018)", image: "https://upload.wikimedia.org/wikipedia/en/c/c2/Pari_-_Poster.jpg", info: "IMDb : 6.6/10", link: 'https://dotmovies.wiki/download-pari-2018-hindi-movie-480p-720p-1080p/' },
  { movieName: "Tumbbad (2018)", image: "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Tumbbad_poster.jpg/220px-Tumbbad_poster.jpg", info: "IMDb : 8.2/10", link: 'https://dotmovies.wiki/download-tumbbad-2018-bluray-hindi-movie/' },
  { movieName: "The House Next Door (2017)", image: "https://i.ytimg.com/vi/8057SK3KJjo/movieposter.jpg", info: "IMDb : 6.7/10", link: 'https://www.google.com/search?q=The+House+Next+Door++movie+download&rlz=1C1ONGR_enIN1031IN1031&sxsrf=APwXEdfI6FLIAPbnppGAGX5vJp3CZXYR-Q%3A1688098575232&ei=D1eeZIHwDauN4-EPlceN-AY&ved=0ahUKEwjBs7Cfker_AhWrxjgGHZVjA28Q4dUDCA8&uact=5&oq=The+House+Next+Door++movie+download&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIKCAAQRxDWBBCwAzIKCAAQRxDWBBCwAzIKCAAQRxDWBBCwAzIKCAAQRxDWBBCwAzIKCAAQRxDWBBCwAzIKCAAQRxDWBBCwAzIKCAAQRxDWBBCwAzIKCAAQRxDWBBCwA0oECEEYAFDAAVi2EWC0FWgBcAF4AIAB6weIAesHkgEDNy0xmAEAoAEBwAEByAEI&sclient=gws-wiz-serp' },
  // { movieName: "(2019) ", image: "", info: "IMDb : /10", link: '' },



  // ... rest of the movie data ...
];
