let mcontainer = document.getElementById('moviecontainer');
let next = document.getElementById('nextbtnbox').querySelector('#nextbtn');
let previous = document.getElementById('nextbtnbox').querySelector('#previousbtn');

let action = [
  { movieName: "After (2019) ", image: "https://m.media-amazon.com/images/M/MV5BOGUwMjk3YzktNDI0Yy00MzFiLWFjNmEtYTA2ODVjMzNhODhjXkEyXkFqcGdeQXVyOTQ1MDI4MzY@._V1_.jpg", info: "IMDb : 5.3/10", link: 'https://m.vegamovies.tips/download-after-2019-org-dual-audio-hindi-bluray-480p-720p-1080p/' },
  { movieName: "After We Fell (2021)", image: "https://m.media-amazon.com/images/M/MV5BMTEzN2MxZWUtYTJkYS00NjU5LTk0ZjgtNzc1OTMwNWNjZGFkXkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_.jpg", info: "IMDb : 4.7/10", link: 'https://m.vegamovies.tips/download-after-we-fell-2021-english-480p-720p-1080p/' },
  { movieName: "After Ever Happy (2022)", image: "https://m.vegamovies.tips/download-after-ever-happy-2022-english-movie-480p-720p-1080p/", info: "IMDb : 4.6/10", link: 'https://m.vegamovies.tips/download-after-ever-happy-2022-voice-over-full-movie-480p-720p-1080p/' },
  { movieName: "Deadly Virtues (2014) ", image: "https://m.media-amazon.com/images/M/MV5BNzVlYzEwNmUtNjhlMy00ZTczLWI1MWQtMTBkMGVlMDQyOTM5XkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_.jpg", info: "IMDb : 4.8/10", link: 'https://www.google.com/search?q=Deadly+Virtues+movie+download+in+Hindi+&bih=752&biw=1536&rlz=1C1ONGR_enIN1031IN1031&hl=en&sxsrf=APwXEdeJuSBvMvh5gNb58wScWne11ZYkqQ%3A1687930632058&ei=CMebZL-RA4qX-AbH94qIAg&ved=0ahUKEwi_terNn-X_AhWKC94KHce7AiEQ4dUDCA8&uact=5&oq=Deadly+Virtues+movie+download+in+Hindi+&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIFCAAQgAQyCAgAEIAEEMsBMggIABCKBRCGAzIICAAQigUQhgMyCAgAEIoFEIYDMggIABCKBRCGAzoJCAAQCBAeELADOgYIABAWEB46CAghEBYQHhAdOgUIABCiBDoFCCEQoAE6BwghEKABEAo6BAghEBU6BAghEApKBAhBGAFQxgJYyUlgmUxoAnAAeAGAAeICiAGeIJIBBjItMTIuM5gBAKABAcABAcgBAQ&sclient=gws-wiz-serp' },
  { movieName: "Indecent Proposal (1993)", image: "https://m.media-amazon.com/images/M/MV5BODk3OWJhMTUtMTU2MC00ZjJmLTk2OGYtN2NiZGMxNmY4NzU3L2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg", info: "IMDb : 6/10", link: 'https://m.vegamovies.tips/download-indecent-proposal-1993-dual-audio-hindi-480p-720p-1080p/' },
  { movieName: "Mirage (2018)", image: "mirage.jpg", info: "IMDb : 7.4/10", link: 'https://m.vegamovies.tips/download-mirage-2018-hindi-english-movie-480p-720p-1080p/' },
  { movieName: "The Adam Project (2022) ", image: "https://m.media-amazon.com/images/M/MV5BOWM0YWMwMDQtMjE5NS00ZTIwLWE1NWEtODViMWZjMWI2OTU3XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg", info: "IMDb : 6.7/10", link: 'https://m.vegamovies.tips/download-the-adam-project-2022-dual-audio-hindi-480p-720p-1080p-2160p/' },
  { movieName: "The Wandering Earth (2019) ", image: "https://m.media-amazon.com/images/M/MV5BMWQ1ZTI1ZjEtM2RkNC00MDIxLWI2NTMtMjgyN2ZkZjYwMDYwXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg", info: "IMDb : 5.9/10", link: 'https://m.vegamovies.tips/download-the-wandering-earth-2019-english-movie-480p-720p-1080p/' },



  // ... rest of the movie data ...
];
