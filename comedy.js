let mcontainer = document.getElementById('moviecontainer');
let next = document.getElementById('nextbtnbox').querySelector('#nextbtn');
let previous = document.getElementById('nextbtnbox').querySelector('#previousbtn');

let action = [
  { movieName: "Big Bug (2022)", image: "https://www.themoviedb.org/t/p/original/jDJOojbuqgnNVGmKgmuYzBpaIgP.jpg", info: "IMDb : 5.5/10", link: 'https://m.vegamovies.tips/download-bigbug-2022-hindi-voice-over-full-movie-web-dl-720p/' },
  { movieName: "Dumb and Dumber (1994)", image: "https://m.media-amazon.com/images/M/MV5BZDQwMjNiMTQtY2UwYy00NjhiLTk0ZWEtZWM5ZWMzNGFjNTVkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg", info: "IMDb : 7.3/10", link: 'https://m.vegamovies.tips/download-dumb-and-dumber-1994-dual-audio-hindi-english-movie-480p-720p-1080p/' },
  { movieName: "Fired Up! (2009)", image: "https://www.sonypictures.com/sites/default/files/styles/max_560x840/public/title-key-art/230700_FIRED%20UP%21_1400x2100_English.jpg?itok=7wHZ8Kpp", info: "IMDb : 6.1/10", link: 'https://www.google.com/search?q=Fired+Up%21+%282009%29+movie+download+in+hindi&rlz=1C1ONGR_enIN1031IN1031&sxsrf=AB5stBgAiYDBURenBtHnjRMd20ilso5tvQ%3A1688193289936&ei=CcmfZMflOMTU4-EPyu-iiA0&ved=0ahUKEwiHju-K8uz_AhVE6jgGHcq3CNEQ4dUDCA8&uact=5&oq=Fired+Up%21+%282009%29+movie+download+in+hindi&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQA0oECEEYAFAAWABg-wZoAHABeACAAY0CiAGNApIBAzItMZgBAKABAqABAcABAQ&sclient=gws-wiz-serp' },
  { movieName: "Dolittle (2020)", image: "https://m.media-amazon.com/images/M/MV5BMDNkODA5ZGQtODczOS00OTQxLThhMTItMjk0ZmNhMDM0YjNmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg", info: "IMDb : 5.6/10", link: 'https://m.vegamovies.tips/download-dolittle-dual-audio-full-movie-480p-720p-1080p/' },
  { movieName: "Honor Society (2022)", image: "honorsociety.jpg", info: "IMDb : 6.5/10 ", link: 'https://m.vegamovies.tips/download-honor-society-2022-english-with-subtitles-480p-720p-1080p/' },
  { movieName: "Oh, Ramona! (2019)", image: "https://m.media-amazon.com/images/M/MV5BZmU1YmM2MTQtMDI2Zi00ZDNkLWExYWItMGU4NjA3NjA2MWU4XkEyXkFqcGdeQXVyNjU4MjE5Njk@._V1_.jpg", info: "IMDb : 4.8/10", link: 'https://m.vegamovies.tips/download-netflix-oh-ramona-2019-full-movie-hd-in-english/' },
  { movieName: "Ride Along (2014)", image: "https://m.media-amazon.com/images/M/MV5BNjU4NzYzOTY1MF5BMl5BanBnXkFtZTgwMTAyNTc1MDE@._V1_.jpg", info: "IMDb : 6.1/10", link: 'https://m.vegamovies.tips/ride-along-2014-dual-audio-hindi-movie/' },
  { movieName: "Ride Along 2 (2016) ", image: "https://m.media-amazon.com/images/M/MV5BMTU4ODAzMzcxOV5BMl5BanBnXkFtZTgwODkxMDI1NjE@._V1_.jpg", info: "IMDb : 5.9/10", link: 'https://m.vegamovies.tips/ride-along-2-2016-dual-audio-hindi-english-movie-480p-720p-1080p/' },
  { movieName: "The World's End (2013) ", image: "https://m.media-amazon.com/images/M/MV5BNzA1MTk1MzY0OV5BMl5BanBnXkFtZTgwNjkzNTUwMDE@._V1_FMjpg_UX1000_.jpg", info: "IMDb : 6.9/10", link: 'https://m.vegamovies.tips/download-the-worlds-end-2013-dual-audio-hindi-480p-720p-1080p/' },
  { movieName: "The Escort (2015)", image: "https://m.media-amazon.com/images/M/MV5BNTgzNDgzNDAyMF5BMl5BanBnXkFtZTgwMTgxOTkzNjE@._V1_FMjpg_UX1000_.jpg", info: "IMDb : 6/10", link: 'https://www.google.com/search?q=The+Escort+(2015)movie+download&rlz=1C1ONGR_enIN1031IN1031&oq=The+Escort+(2015)movie+download&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRhA0gEOMjcwMzAxNDg5ajBqMTWoAgCwAgA&sourceid=chrome&ie=UTF-8' },
  { movieName: "That's My Boy (2012)", image: "https://m.media-amazon.com/images/M/MV5BMTM3NDMyNzgzMV5BMl5BanBnXkFtZTcwMjIyMTA1Nw@@._V1_.jpg", info: "IMDb : 5.5/10", link: 'https://bollyflix.loan/thats-my-boy-2012-dual-audio-hindi-english-movie/' },
  { movieName: "The Sex Trip (2016)", image: "https://m.media-amazon.com/images/M/MV5BZTBhOThhM2UtNDM0Ny00NDY3LWFjN2MtYjE4ZjViZjVlMTNhXkEyXkFqcGdeQXVyNjk2MjA4MDY@._V1_.jpg", info: "IMDb : 4.4/10", link: 'https://m.vegamovies.tips/download-the-sex-trip-2016-480p-720p/' },
  // { movieName: "(2019) ", image: "", info: "IMDb : /10", link: '' },




  // ... rest of the movie data ...
];
