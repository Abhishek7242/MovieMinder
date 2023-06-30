let mcontainer = document.getElementById('moviecontainer');
let next = document.getElementById('nextbtnbox').querySelector('#nextbtn');
let previous = document.getElementById('nextbtnbox').querySelector('#previousbtn');


let action = [
  { movieName: "Adipurush (2023)", image: "adipurush.jpg", info: "IMDb : 4.6/10", link: 'https://m.dotmovies.boats/download-adipurush-2023-hdts-hindi-480p-720p-1080p/' },
  { movieName: "I Love You (2023)", image: "iloveyou.jpg", info: "IMDb : 7.5/10", link: 'https://m.dotmovies.boats/download-i-love-you-2023-hindi-full-movie-480p-720p-1080p/' },
  { movieName: "Bloody Daddy (2023)", image: "bloodydaddy.jpg", info: "IMDb : 7.1/10", link: 'https://m.dotmovies.boats/download-bloody-daddy-2023-hindi-full-movie-480p-720p-1080p/' },
  { movieName: "GoodBye (2022)", image: "goodbye.jpg", info: "IMDb : 6.8/10", link: 'https://m.dotmovies.boats/download-goodbye-2022-hindi-movie-480p-720p-1080p-web-dl/' },
  { movieName: "Tadap (2021)", image: "tadap.jpg", info: "IMDb : 5.1/10", link: 'https://m.dotmovies.boats/tadap-2021-hindi-movie/' },
  { movieName: "Sandeep Aur Pinky Faraar (2021)", image: "https://m.media-amazon.com/images/M/MV5BZGIwZmMyMTEtMjk0Zi00Yjk1LTlkNjMtZWQ5ZDQwZmE0NTkyXkEyXkFqcGdeQXVyNTkzNDQ4ODc@._V1_FMjpg_UX1000_.jpg", info: "IMDb : 6.3/10", link: 'https://dotmovies.wiki/download-sandeep-aur-pinky-faraar-2021-hindi-movie-480p-720p-1080p-bluray-hd/' },
  { movieName: "Sherni (2021)", image: "https://m.media-amazon.com/images/M/MV5BNjJmMzYyN2ItMzU0NS00MmYyLWI0ZDQtMjFmMWJkYWQ2YjYwXkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_.jpg", info: "IMDb : 6.8/10", link: 'https://dotmovies.wiki/download-sherni-2021-hindi-movie-hdrip-1080p-480p-720p/' },
  { movieName: "Malang (2020)", image: "https://m.media-amazon.com/images/M/MV5BMDJiMDQyYTItZTA0NC00NmVlLTg3NGItMjQwOWI2ZjY0MmE5XkEyXkFqcGdeQXVyOTAzMTc2MjA@._V1_.jpg", info: "IMDb : 6.5/10", link: 'https://dotmovies.wiki/malang-2020-hindi-movie-download/' },
  { movieName: "Dil Bechara (2020) ", image: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/25e98289942817.5e0705a50d2d2.png", info: "IMDb : 8.4/10", link: 'https://dotmovies.wiki/dil-bechara-2020-hindi-movie/' },
  { movieName: "Guilty (2020) ", image: "https://m.media-amazon.com/images/M/MV5BYWYxMjBlZjEtY2ZkYS00OWE1LWEzNTAtNDlkZWE5NzI1NDE1XkEyXkFqcGdeQXVyMTA5NzIyMDY5._V1_.jpg", info: "IMDb : 5.4/10", link: 'https://dotmovies.wiki/download-guilty-hindi-movie-480p-720p-1080p/' },
  { movieName: "Section 375 (2019)", image: "https://static.toiimg.com/photo/msid-70803155/70803155.jpg", info: "IMDb : 8.1/10", link: 'https://dotmovies.wiki/download-section-375-2019-hindi-full-movie-480p-720p-1080p-web-dl/' },
  { movieName: "Badla (2019)", image: "badla.jpg", info: "IMDb : 7.8/10", link: 'https://m.dotmovies.boats/download-badla-2019-hindi-movie/' },
  { movieName: "Tumbbad (2018)", image: "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Tumbbad_poster.jpg/220px-Tumbbad_poster.jpg", info: "IMDb : 8.2/10", link: 'https://dotmovies.wiki/download-tumbbad-2018-bluray-hindi-movie/' },
  { movieName: "Pari (2018)", image: "https://upload.wikimedia.org/wikipedia/en/c/c2/Pari_-_Poster.jpg", info: "IMDb : 6.6/10", link: 'https://dotmovies.wiki/download-pari-2018-hindi-movie-480p-720p-1080p/' },

  { movieName: "Raid (2018) ", image: "https://upload.wikimedia.org/wikipedia/en/2/28/Ajay_Devgn%27s_Raid_poster.jpg", info: "IMDb : 7.4/10", link: 'https://dotmovies.wiki/raid-2018-hindi-full-movie/' },
  { movieName: "Karwaan (2018)", image: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/3169a5186af3b6d958efa9d66b5d5f5e56c8a1c238cee16f8d1ae6d3e9481490._RI_TTW_.jpg", info: "IMDb : 7.6/10", link: 'https://dotmovies.wiki/karwaan-2018-hindi-movie-hdrip-download-480p-720p-1080p/' },
  { movieName: "Sanju (2018)", image: "https://upload.wikimedia.org/wikipedia/en/8/85/Sanju_poster.jpg", info: "IMDb : 7.6/10", link: 'https://dotmovies.wiki/sanju-2018-hindi-full-movie-480p-720p-1080p/' },
  { movieName: "The House Next Door (2017)", image: "https://i.ytimg.com/vi/8057SK3KJjo/movieposter.jpg", info: "IMDb : 6.7/10", link: 'https://www.google.com/search?q=The+House+Next+Door++movie+download&rlz=1C1ONGR_enIN1031IN1031&sxsrf=APwXEdfI6FLIAPbnppGAGX5vJp3CZXYR-Q%3A1688098575232&ei=D1eeZIHwDauN4-EPlceN-AY&ved=0ahUKEwjBs7Cfker_AhWrxjgGHZVjA28Q4dUDCA8&uact=5&oq=The+House+Next+Door++movie+download&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIKCAAQRxDWBBCwAzIKCAAQRxDWBBCwAzIKCAAQRxDWBBCwAzIKCAAQRxDWBBCwAzIKCAAQRxDWBBCwAzIKCAAQRxDWBBCwAzIKCAAQRxDWBBCwAzIKCAAQRxDWBBCwA0oECEEYAFDAAVi2EWC0FWgBcAF4AIAB6weIAesHkgEDNy0xmAEAoAEBwAEByAEI&sclient=gws-wiz-serp' },
  { movieName: "Raman Raghav 2.0 (2016) ", image: "https://m.media-amazon.com/images/M/MV5BMTA2M2RmOGEtYzU3ZS00MGZiLTkwMzgtOGI5MTQzNDliYmY5XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg", info: "IMDb : 7.3/10", link: 'https://dotmovies.wiki/download-raman-raghav-2-0-2016-hindi-movie-480p-720p-1080p/' },
  { movieName: "Pink (2016) ", image: "https://m.media-amazon.com/images/M/MV5BNGI1MTI1YTQtY2QwYi00YzUzLTg3NWYtNzExZDlhOTZmZWU0XkEyXkFqcGdeQXVyMDkwNTkwNg@@._V1_.jpg", info: "IMDb : 8.1/10", link: 'https://dotmovies.wiki/download-pink-2016-hindi-movie-hdrip/' },
  { movieName: "The Lunchbox (2013) ", image: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/7aec4fae737e79192c19ace8a152e9b003926bc5dc36e0f6a1a195ccfeca0984._RI_TTW_.jpg", info: "IMDb : 7.8/10", link: 'https://dotmovies.wiki/download-the-lunchbox-2013-hindi-movie-480p-720p-1080p/' },
  { movieName: "Badmaash Company (2010)", image: "https://upload.wikimedia.org/wikipedia/en/2/2e/Badmaash_Company_poster.jpg", info: "IMDb : 6.1/10", link: 'https://dotmovies.wiki/download-badmaash-company-2010-hindi-movie-480p-720p-1080p/' },
  { movieName: "13B: Fear Has a New Address (2009) ", image: "https://m.media-amazon.com/images/M/MV5BMTY3MTE4MzkxNl5BMl5BanBnXkFtZTcwNzU5ODYzMg@@._V1_.jpg", info: "IMDb : 7.3/10", link: 'https://dotmovies.wiki/download-13b-fear-has-a-new-address-yavarum-nalam-2009-hindi-movie-bluray-480p-720p-1080p/' }



  // ... rest of the movie data ...
];
