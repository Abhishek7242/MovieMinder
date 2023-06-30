let mcontainer = document.getElementById('moviecontainer');
let next = document.getElementById('nextbtnbox').querySelector('#nextbtn');
let previous = document.getElementById('nextbtnbox').querySelector('#previousbtn');


let action = [
  { movieName: "The Flash (2023)", image: "flash.jpg", info: "IMDb : 7.3/10 ", link: 'https://m.vegamovies.tips/download-the-flash-2023-hdts-hindi-dubbed-clear-audio-480p-720p-1080p/' },
  { movieName: "Shazam: Fury of the Gods (2023)", image: "shazam2.jpg", info: 'IMDb : 6/10' , link: 'https://m.vegamovies.tips/download-shazam-fury-of-the-gods-2023-hindi-5-1-org-480p-720p-1080p-2160p/' },
  { movieName: "John Wick Chapter 4 (2023)", image: "johnwick4.jpg", info:  'IMDb : 7.9/10', link: 'https://m.vegamovies.tips/download-john-wick-chapter-4-2023-hindi-org-dubbed-bluray-480p-720p-1080p-2160p-4k/' },
  { movieName: "Honor Society (2022)", image: "honorsociety.jpg", info: "IMDb : 6.5/10 ", link: 'https://m.vegamovies.tips/download-honor-society-2022-english-with-subtitles-480p-720p-1080p/' },
  { movieName: "Crimes of the Future (2022)", image: "https://upload.wikimedia.org/wikipedia/en/d/d4/Crimes_of_the_Future_%282022_film%29.jpg", info: "IMDb : 5.9/10", link: 'https://www.google.com/search?q=crimes+of+the+future+movie+download&bih=752&biw=1536&hl=en&sxsrf=APwXEdfi8UAEu-48ihDkjRf_mRRfYKq7CQ%3A1687762309451&ei=hTWZZMKEG4_NseMPrZSCoA0&ved=0ahUKEwiC263HrOD_AhWPZmwGHS2KANQQ4dUDCA8&uact=5&oq=crimes+of+the+future+movie+download&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQA0oECEEYAFAaWKkLYOYNaABwAXgAgAGpA4gBlgiSAQcyLTEuMC4ymAEAoAEBwAEB&sclient=gws-wiz-serp' },
  { movieName: "Jurassic World Dominion (2022) ", image: "https://upload.wikimedia.org/wikipedia/en/c/ce/JurassicWorldDominion_Poster.jpeg", info: "IMDb : 5.9/10", link: 'https://m.vegamovies.tips/download-jurassic-world-dominion-2022-dual-audio-hindi-480p-720p-1080p-2160p-4k-hdr/' },
  { movieName: "Nope (2022)", image: "https://www.uphe.com/sites/default/files/styles/scale__319w_/public/2022/09/Nope_DigitalArt.webp?itok=BI6vIeYH", info: "IMDb : 6.8/10", link: 'https://m.vegamovies.tips/download-nope-2022-imax-bluray-dual-audio-hindi-480p-720p-1080p-2160p-4k/' },
  { movieName: "The In Between (2022)", image: "https://m.media-amazon.com/images/M/MV5BNGRjNWUxMzgtM2ZhZC00NmI3LThiNWEtNGFkNDk4OWRmYWI4XkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_.jpg", info: "IMDb : 5.9/10", link: 'https://m.vegamovies.tips/download-the-in-between-2022-dual-audio-hindi-480p-720p-1080p/' },
  { movieName: "Big Bug (2022)", image: "https://www.themoviedb.org/t/p/original/jDJOojbuqgnNVGmKgmuYzBpaIgP.jpg", info: "IMDb : 5.5/10", link: 'https://m.vegamovies.tips/download-bigbug-2022-hindi-voice-over-full-movie-web-dl-720p/' },
  { movieName: "Samaritan (2022)", image: "https://m.vegamovies.tips/download-samaritan-2022-dual-audio-hindi-480p-720p-1080p/", info: "IMDb : 5.7/10", link: 'https://upload.wikimedia.org/wikipedia/en/d/de/Samaritan2022Poster.jpg' },
  { movieName: "The Adam Project (2022) ", image: "https://m.media-amazon.com/images/M/MV5BOWM0YWMwMDQtMjE5NS00ZTIwLWE1NWEtODViMWZjMWI2OTU3XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg", info: "IMDb : 6.7/10", link: 'https://m.vegamovies.tips/download-the-adam-project-2022-dual-audio-hindi-480p-720p-1080p-2160p/' },
  { movieName: "Godzilla vs. Kong (2021) ", image: "https://m.media-amazon.com/images/M/MV5BMzk2ZmYxNTUtODlhMi00NzE2LTkwMTctYjg0ODQ1ZjkyNzJmXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg", info: "IMDb : 6.3/10", link: 'https://m.vegamovies.tips/download-godzilla-vs-kong-2021-3d-movie-dual-audio-hindi-bluray-720p-1080p/' },
  { movieName: "Godzilla All Movies Collection ", image: "https://m.media-amazon.com/images/M/MV5BOGFjYWNkMTMtMTg1ZC00Y2I4LTg0ZTYtN2ZlMzI4MGQwNzg4XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg", info: "", link: 'https://m.vegamovies.tips/?s=godzilla' },
  { movieName: "Mortal Kombat (2021)", image: "https://m.media-amazon.com/images/M/MV5BYjZmMjdlNDEtOGE0NC00MmQyLWIyNTgtMzc1NWRjYTYzMWZmXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg", info: "IMDb : 6.1/10", link: 'https://m.vegamovies.tips/download-mortal-kombat-2021-dual-audio-hindi-bluray-480p-720p-1080p-2160p/' },
  { movieName: "No Time to Die (2021)", image: "https://m.media-amazon.com/images/M/MV5BYWQ2NzQ1NjktMzNkNS00MGY1LTgwMmMtYTllYTI5YzNmMmE0XkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_.jpg", info: "IMDb : 7.3/10", link: 'https://m.vegamovies.tips/download-no-time-to-die-2021-dual-audio-full-movie-480p-720p-1080p/' },
  { movieName: "The Tomorrow War (2021)", image: "https://m.media-amazon.com/images/M/MV5BNTI2YTI0MWEtNGQ4OS00ODIzLWE1MWEtZGJiN2E3ZmM1OWI1XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_FMjpg_UX1000_.jpg", info: "IMDb : 6.5/10", link: 'https://m.vegamovies.tips/download-the-tomorrow-war-2021-dual-audio-hindi-bluray-480p-720p-1080p-2160p/' },
  { movieName: "Jungle Cruise (2021)", image: "https://lumiere-a.akamaihd.net/v1/images/p_junglecruise_21740_v2_bb7f0ae4.jpeg", info: "IMDb : 6.6/10", link: 'https://m.vegamovies.tips/download-jungle-cruise-dual-audio-bluray-full-movie/' },
  { movieName: "Two (2021) ", image: "https://m.media-amazon.com/images/M/MV5BMTdkOWNjNzEtOTNjMC00NjBmLTk2ODYtZTk2NjA1NDZjYTQ2XkEyXkFqcGdeQXVyMTg4OTE4NDM@._V1_QL75_UY281_CR4,0,190,281_.jpg", info: "IMDb : 4.3/10", link: 'https://m.vegamovies.tips/download-two-netflix-original-2021-english-audio-480p-720p-1080p/' },
  { movieName: "Intrusion (2021)", image: "https://m.media-amazon.com/images/M/MV5BZTU2ZmFhZjktODFkMS00YTMyLTg2OTktMzY3Y2NkZGEwNDU1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg", info: "IMDb : 5.3/10", link: 'https://m.vegamovies.tips/download-intrusion-2021-dual-audio-hindi-480p-720p-1080p-netflix-movie/' },
  { movieName: "The Suicide Squad (2021)", image: "https://images.moviesanywhere.com/d139775114b50558dafa489f9b2c0036/9ad4852f-53e6-47c3-bf71-83a11a2607cc.jpg", info: "IMDb : 7.2/10", link: 'https://m.vegamovies.tips/download-the-suicide-squad-2021-dual-audio-hindi-480p-720p-1080p/' },
  { movieName: "The Unhealer (2020) ", image: "https://m.media-amazon.com/images/M/MV5BNWFjMTA0Y2UtMTMyNC00NWMxLTliNTYtMDRhNWRjZmYyOWU5XkEyXkFqcGdeQXVyMjI0MDA1MA@@._V1_FMjpg_UX1000_.jpg", info: "IMDb : 5.6/10", link: 'https://www.google.com/search?q=the+unhealer+movie+download&source=lmns&bih=752&biw=1536&hl=en&sa=X&ved=2ahUKEwi-zL_Yt-D_AhWriGMGHWTXA6AQ_AUoAHoECAEQAA' },
  { movieName: "Surrogates (2020)", image: "surrogates.jpg", info: "IMDb : 6.3/10", link: 'https://m.vegamovies.tips/download-surrogates-2009-dual-audio-hindi-movie-480p-720p-bluray/' },
  { movieName: "Don't Listen (2020)", image: "dontlisten.jpg", info: "IMDb : 6.1/10", link: 'https://m.vegamovies.tips/download-dont-listen-2020-english-audio-480p-720p/' },
  { movieName: "Tenet (2020) ", image: "https://upload.wikimedia.org/wikipedia/en/1/14/Tenet_movie_poster.jpg", info: "IMDb : 7.3/10", link: 'https://m.vegamovies.tips/download-tenet-2020-hindi-english-480p-720p-1080p/' },
  { movieName: "Surrogates (2020)", image: "surrogates.jpg", info: "IMDb : 6.3/10", link: 'https://m.vegamovies.tips/download-surrogates-2009-dual-audio-hindi-movie-480p-720p-bluray/' },
  { movieName: "Synchronic (2019)", image: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/Synchronic_poster.jpeg/220px-Synchronic_poster.jpeg", info: "IMDb : 6.2/10", link: 'https://m.vegamovies.tips/synchronic-2020-full-movie-in-hindi-dubbed/' },
  { movieName: "Only (2019) ", image: "https://upload.wikimedia.org/wikipedia/en/2/22/Only_poster.jpg", info: "IMDb : 5.1/10", link: 'https://m.vegamovies.tips/download-only-2020-hindi-dual-audio-full-movie/' },
  { movieName: "Coma (2019) ", image: "https://m.media-amazon.com/images/M/MV5BNDE5ODg1Y2MtNmQ4MC00M2U4LTk2YTktMGI5ZGJmNTExNjE1XkEyXkFqcGdeQXVyODc0OTEyNDU@._V1_FMjpg_UX1000_.jpg", info: "IMDb : 6.3/10", link: 'https://m.vegamovies.tips/download-coma-2019-dual-audio-hindi-bluray-480p-720p-1080p/' },
  { movieName: "The Wandering Earth (2019) ", image: "https://m.media-amazon.com/images/M/MV5BMWQ1ZTI1ZjEtM2RkNC00MDIxLWI2NTMtMjgyN2ZkZjYwMDYwXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg", info: "IMDb : 5.9/10", link: 'https://m.vegamovies.tips/download-the-wandering-earth-2019-english-movie-480p-720p-1080p/' },
  { movieName: "Alita: Battle Angel (2019) ", image: "https://m.media-amazon.com/images/M/MV5BMTQzYWYwYjctY2JhZS00NTYzLTllM2UtZWY5ZTk0NmYwYzIyXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_FMjpg_UX1000_.jpg", info: "IMDb : 7.3/10", link: 'https://m.vegamovies.tips/download-alita-battle-angel-2019-hindi-480p-720p-1080p-2160p-4k/' },
  { movieName: "Code 8 (2019) ", image: "https://static.tvtropes.org/pmwiki/pub/images/f14b02ac_922c_483a_a928_4c6975fe04d9.png", info: "IMDb : 6.1/10", link: 'https://m.vegamovies.tips/download-code-8-2019-hindi-dubbed-480p-720p-1080p/' },
  { movieName: "Ready or Not (2019)", image: "https://m.media-amazon.com/images/M/MV5BYzBkMzAyMDUtZTFkZS00OWUyLTgwM2ItNGI3MTQ5NzA3NTVkXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg", info: "IMDb : 6.8/10", link: 'https://m.vegamovies.tips/ready-or-not-2019-dual-audio-hindi-movie-bluray/' },
  { movieName: "Vivarium (2019) ", image: "https://m.media-amazon.com/images/M/MV5BNjljN2JiOGItNTg0Yi00YTI2LWFjMTYtODMzOGI3MGVhMmZmXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg", info: "IMDb : 5.9/10", link: 'https://m.vegamovies.tips/download-vivarium-2019-dual-audio-hindi-480p-720p-1080p/' },
  { movieName: "Us (2019)", image: "https://m.media-amazon.com/images/M/MV5BZTliNWJhM2YtNDc1MC00YTk1LWE2MGYtZmE4M2Y5ODdlNzQzXkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_FMjpg_UX1000_.jpg", info: "IMDb : 6.8/10", link: 'https://m.vegamovies.tips/download-us-2019-hindi-dubbed-480p-720p-1080p/' },
  { movieName: "In the Shadow of the Moon (2019) ", image: "https://m.media-amazon.com/images/M/MV5BN2I1MGQ2ZjMtMjc1My00YzU1LThjNzktNzJlMWRkMTc0NjZhXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg", info: "IMDb : 6.2/10", link: 'https://m.vegamovies.tips/download-in-the-shadow-of-the-moon-2019-dual-audio-hindi-480p-720p-1080p/' },
  { movieName: "Mirage (2018)", image: "mirage.jpg", info: "IMDb : 7.4/10", link: 'https://m.vegamovies.tips/download-mirage-2018-hindi-english-movie-480p-720p-1080p/' },
  { movieName: "Hereditary (2018)", image: "https://m.media-amazon.com/images/M/MV5BOTU5MDg3OGItZWQ1Ny00ZGVmLTg2YTUtMzBkYzQ1YWIwZjlhXkEyXkFqcGdeQXVyNTAzMTY4MDA@._V1_.jpg", info: "IMDb : 7.3/10", link: 'https://m.vegamovies.tips/download-hereditary-2018-hindi-org-dubbed-bluray-480p-720p-1080p-2160p-4k/' },
  { movieName: "Endless Loop (2018)", image: "endlessloop.jpg", info: "IMDb : 5.4/10 ", link: 'https://www.google.com/search?q=endless+loop+2018+movie+download&rlz=1C1ONGR_enIN1031IN1031&oq=endless+loop+2018+movie+download&aqs=chrome..69i57j0i390i650l3.440993560j0j15&sourceid=chrome&ie=UTF-8' },
  { movieName: "Look Away (2018)", image: "https://m.media-amazon.com/images/M/MV5BMTEzOTY0MDI3MTdeQTJeQWpwZ15BbWU4MDk5NDAyNDYz._V1_.jpg", info: "IMDb : 5.8/10", link: 'https://hdmoviearea.info/look-away-full-movie-download/' },
  { movieName: "The Night Eats the World (2018) ", image: "https://m.media-amazon.com/images/M/MV5BMTJlOTc3NGMtNjZkMi00NDAzLWE2YTctMDM1NzM3ZGYxMWJhXkEyXkFqcGdeQXVyODc0OTEyNDU@._V1_.jpg", info: "IMDb : 6/10", link: 'https://m.vegamovies.tips/download-the-night-eats-the-world-2018-english-movie-480p-720p-1080p/' },
  { movieName: "The Pool (2018) ", image: "https://m.media-amazon.com/images/M/MV5BYzRlYzJlZTktNjY1NC00NGZmLThjYzQtOGUyMWZmZWFkZWUxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg", info: "IMDb : 5.3/10", link: 'https://www.google.com/search?q=the+pool+movie+movie+download+in+hindi&source=lmns&bih=752&biw=1536&rlz=1C1ONGR_enIN1031IN1031&hl=en&sa=X&ved=2ahUKEwihl83YoOX_AhWjyKACHZHpBPgQ_AUoAHoECAEQAA' },
  { movieName: "Mortal Engines (2018)", image: "https://upload.wikimedia.org/wikipedia/en/c/ce/Mortal_Engines_teaser_poster.jpg", info: "IMDb :6.1 /10", link: 'https://m.vegamovies.tips/download-mortal-engines-2018-dual-audio-hindi-english-movie-480p-720p-1080p/' },
  { movieName: "Guardians (2017) ", image: "https://m.media-amazon.com/images/M/MV5BOTIwY2I1NDAtYjJhOS00N2Q4LWE4YjAtZDQ3ZTA4MzcwMzRkL2ltYWdlXkEyXkFqcGdeQXVyNjMxMzM3NDI@._V1_FMjpg_UX1000_.jpg", info: "IMDb : 4/10", link: 'https://m.vegamovies.tips/download-the-guardians-2017-hindi-dubbed-org-bluray-480p-720p-1080p/' },
  { movieName: "Mother! (2017)", image: "https://upload.wikimedia.org/wikipedia/en/9/94/Mother%212017.jpg", info: "IMDb : 6.6/10", link: 'https://m.vegamovies.tips/download-mother-2017-dual-audio-hindi-480p-720p-1080p/' },
  { movieName: "Blood Hunt (2017) ", image: "https://m.media-amazon.com/images/M/MV5BZmFlNzg5MjctNjJkMS00YjRhLWJjYmMtYzdhOWE0NGE3OGVmXkEyXkFqcGdeQXVyMTk5MDk1OQ@@._V1_.jpg", info: "IMDb : 4.7/10", link: 'https://www.google.com/search?q=blood+hunt+movie+download&bih=752&biw=1536&rlz=1C1ONGR_enIN1031IN1031&hl=en&sxsrf=APwXEdeGfnD5P37w9GvQGPiOGacbprkdrA%3A1687929937226&ei=UcSbZMm5DZrI1e8P2Omp2AU&oq=blood+hunt+movie+do&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQARgAMgUIABCABDIFCAAQgAQyCAgAEBYQHhAKMgYIABAWEB4yBggAEBYQHjIGCAAQFhAeMgYIABAWEB4yBggAEBYQHjIICAAQigUQhgMyCAgAEIoFEIYDOgoIABBHENYEELADOgQIIxAnSgQIQRgAUIABWN0QYO4caAZwAHgBgAHgAYgBgwWSAQMyLTOYAQCgAQHAAQHIAQg&sclient=gws-wiz-serp' },
  { movieName: "Logan (2017)", image: "https://m.media-amazon.com/images/M/MV5BYzc5MTU4N2EtYTkyMi00NjdhLTg3NWEtMTY4OTEyMzJhZTAzXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_FMjpg_UX1000_.jpg", info: "IMDb : 8.1/10", link: 'https://m.vegamovies.tips/download-logan-2017-dual-audio-hindi-movie-480p-720p-1080p/' },
  { movieName: "X-MEN All Movie Collection", image: "https://upload.wikimedia.org/wikipedia/en/8/81/X-MenfilmPoster.jpg", info: "", link: 'https://m.vegamovies.tips/?s=x-men' },
  { movieName: "Ride Along 2 (2016) ", image: "https://m.media-amazon.com/images/M/MV5BMTU4ODAzMzcxOV5BMl5BanBnXkFtZTgwODkxMDI1NjE@._V1_.jpg", info: "IMDb : 5.9/10", link: 'https://m.vegamovies.tips/ride-along-2-2016-dual-audio-hindi-english-movie-480p-720p-1080p/' },
  { movieName: "Warcraft (2016) ", image: "https://m.media-amazon.com/images/M/MV5BMjIwNTM0Mzc5MV5BMl5BanBnXkFtZTgwMDk5NDU1ODE@._V1_.jpg", info: "IMDb : 6.7/10", link: 'https://m.vegamovies.tips/download-warcraft-2016-dual-audio-hindi-bluray-480p-720p-1080p-2160p/' },
  { movieName: "Gods of Egypt (2016) ", image: "https://upload.wikimedia.org/wikipedia/en/2/2f/Gods_of_Egypt_poster.jpg", info: "IMDb : 5.4/10", link: 'https://m.vegamovies.tips/download-gods-of-egypt-2016-dual-audio-hindi-movie-480p-720p-1080p/' },
  { movieName: "Suicide Squad (2016) ", image: "https://m.media-amazon.com/images/M/MV5BMjM1OTMxNzUyM15BMl5BanBnXkFtZTgwNjYzMTIzOTE@._V1_.jpg", info: "IMDb : 5.9/10", link: 'https://m.vegamovies.tips/download-suicide-squad-2016-hindi-org-dubbed-bluray-480p-720p-1080p/' },
  { movieName: "The Invisible Guest (2016)", image: "theinvisibleguest.jpg", info: "IMDb : 8/10", link: 'https://m.vegamovies.tips/download-the-invisible-guest-2016-hindi-dual-audio-full-movie/' },
  { movieName: "No Escape (2015) ", image: "https://m.media-amazon.com/images/M/MV5BMjE0MDI3NTE5NF5BMl5BanBnXkFtZTgwNzI3ODM2NjE@._V1_.jpg", info: "IMDb : 6.7/10", link: 'https://m.vegamovies.tips/download-no-escape-2015-dual-audio-hindi-english-movie-480p-720p-1080p/' },
  { movieName: "The Last Witch Hunter (2015) ", image: "https://www.themoviedb.org/t/p/w500/qXvOpA2nhK5HQ6I95sN3nnMtfjH.jpg", info: "IMDb : 5.9/10", link: 'https://m.vegamovies.tips/download-the-last-witch-hunter-2015-dual-audio-hindi-english-movie-480p-720p-1080p/' },
  { movieName: "Ride Along (2014)", image: "https://m.media-amazon.com/images/M/MV5BNjU4NzYzOTY1MF5BMl5BanBnXkFtZTgwMTAyNTc1MDE@._V1_.jpg", info: "IMDb : 6.1/10", link: 'https://m.vegamovies.tips/ride-along-2014-dual-audio-hindi-movie/' },
  { movieName: "Edge of Tomorrow (2014)", image: "https://m.media-amazon.com/images/M/MV5BMTc5OTk4MTM3M15BMl5BanBnXkFtZTgwODcxNjg3MDE@._V1_FMjpg_UX1000_.jpg", info: "IMDb : 7.9/10", link: 'https://m.vegamovies.tips/edge-of-tomorrow-2014-dual-audio-hindi-english-movie/' },
  { movieName: "Deadly Virtues (2014) ", image: "https://m.media-amazon.com/images/M/MV5BNzVlYzEwNmUtNjhlMy00ZTczLWI1MWQtMTBkMGVlMDQyOTM5XkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_.jpg", info: "IMDb : 4.8/10", link: 'https://www.google.com/search?q=Deadly+Virtues+movie+download+in+Hindi+&bih=752&biw=1536&rlz=1C1ONGR_enIN1031IN1031&hl=en&sxsrf=APwXEdeJuSBvMvh5gNb58wScWne11ZYkqQ%3A1687930632058&ei=CMebZL-RA4qX-AbH94qIAg&ved=0ahUKEwi_terNn-X_AhWKC94KHce7AiEQ4dUDCA8&uact=5&oq=Deadly+Virtues+movie+download+in+Hindi+&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIFCAAQgAQyCAgAEIAEEMsBMggIABCKBRCGAzIICAAQigUQhgMyCAgAEIoFEIYDMggIABCKBRCGAzoJCAAQCBAeELADOgYIABAWEB46CAghEBYQHhAdOgUIABCiBDoFCCEQoAE6BwghEKABEAo6BAghEBU6BAghEApKBAhBGAFQxgJYyUlgmUxoAnAAeAGAAeICiAGeIJIBBjItMTIuM5gBAKABAcABAcgBAQ&sclient=gws-wiz-serp' },
  { movieName: "Hercules (2014)", image: "https://static.tvtropes.org/pmwiki/pub/images/eba1adc7_2778_4f11_a80f_b23d91f75449.jpeg", info: "IMDb : 6/10", link: 'https://m.vegamovies.tips/hercules-2014-hindi-english-movie/' },
  { movieName: "Lucy (2014)", image: "https://movieguide.b-cdn.net/wp-content/uploads/2014/07/lucy_ver2.jpg", info: "IMDb : 6.4/10", link: 'https://m.vegamovies.tips/download-lucy-2014-dual-audio-hindi-english-movie-480p-720p-1080p/' },
  { movieName: "The World's End (2013) ", image: "https://m.media-amazon.com/images/M/MV5BNzA1MTk1MzY0OV5BMl5BanBnXkFtZTgwNjkzNTUwMDE@._V1_FMjpg_UX1000_.jpg", info: "IMDb : 6.9/10", link: 'https://m.vegamovies.tips/download-the-worlds-end-2013-dual-audio-hindi-480p-720p-1080p/' },
  { movieName: "Plush (2013)", image: "https://m.media-amazon.com/images/M/MV5BNjQ4MTQ0MTA5Ml5BMl5BanBnXkFtZTgwMzY3MTYwMDE@._V1_FMjpg_UX1000_.jpg", info: "IMDb : 5.2/10", link: 'https://m.vegamovies.tips/download-plush-2013-english-full-movie-480p-720p-1080p/' },
  { movieName: "Captain Phillips (2013)", image: "https://pics.filmaffinity.com/Captain_Phillips-273270973-large.jpg", info: "IMDb : 7.8/10", link: 'https://m.vegamovies.tips/captain-phillips-2013-dual-audio-movie-480p-720p-1080p/' },
  { movieName: "Lone Survivor (2013) ", image: "https://m.media-amazon.com/images/M/MV5BMjA0NTgwOTk5Ml5BMl5BanBnXkFtZTcwMjE3NDc5OQ@@._V1_.jpg", info: "IMDb : 7.5/10", link: 'https://m.vegamovies.tips/lone-survivor-2013-dual-audio-hindi-480p-720p-1080p/' },
  { movieName: "The Collection (2012)", image: "https://m.media-amazon.com/images/M/MV5BZTRmOTE3MTctODZmOS00OWU4LTliMzUtYTA3ZmY4NTE2MzhiXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg", info: "IMDb : 6.1/10", link: 'https://m.vegamovies.tips/download-the-collection-2012-full-movie-hindi-dubbed-english-movie/' },
  { movieName: "Quarantine 2: Terminal (2011) ", image: "https://m.media-amazon.com/images/M/MV5BMjE2MDMxODUxM15BMl5BanBnXkFtZTcwMDk4Mjk0Ng@@._V1_FMjpg_UX1000_.jpg", info: "IMDb : 5.2/10", link: 'https://bollyflix.loan/quarantine-2-terminal-2011-hindi-dubbed-movie/' },
  { movieName: "The Clinic (2010)", image: "https://m.media-amazon.com/images/M/MV5BNDc2NzE1MzA2OF5BMl5BanBnXkFtZTcwNTY5MzYyNQ@@._V1_.jpg", info: "IMDb : 5.3/10", link: 'https://www.google.com/search?q=the+clinic+movie+download+in+hindi&bih=752&biw=1536&rlz=1C1ONGR_enIN1031IN1031&hl=en&sxsrf=APwXEdfYm1Z2eWTJmsRuYyM3tx6e3a5glQ%3A1687932300937&ei=jM2bZNzkOLTZseMPw8-b6Ao&ved=0ahUKEwjc2s7ppeX_AhW0bGwGHcPnBq0Q4dUDCA8&uact=5&oq=the+clinic+movie+download+in+hindi&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIFCCEQoAEyBQghEKABMggIIRAWEB4QHTIICCEQFhAeEB0yCAghEBYQHhAdMggIIRAWEB4QHTIICCEQFhAeEB0yCAghEBYQHhAdMggIIRAWEB4QHToGCAAQFhAeOgcIIRCgARAKSgQIQRgAUNABWM8SYNgYaABwAXgAgAHqBIgByheSAQswLjEuMy4zLjEuMZgBAKABAcABAQ&sclient=gws-wiz-serp' },
  { movieName: "Clash of the Titans (2010)", image: "https://m.media-amazon.com/images/M/MV5BMTYxNjg4MzU5OV5BMl5BanBnXkFtZTcwOTA3NTUwMw@@._V1_.jpg", info: "IMDb : 5.9/10", link: 'https://m.vegamovies.tips/clash-of-the-titans-2010-hindi-dubbed-english-movie/' },
  { movieName: "Devil (2010)", image: "https://m.media-amazon.com/images/M/MV5BZDVmZGExMTEtNjk5OS00MTFkLWI0ZDMtNzg4YWFmNGY3NjRkXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_.jpg", info: "IMDb : 6.3/10", link: 'https://m.vegamovies.tips/download-devil-2010-hindi-dual-audio-full-movie/' },
  { movieName: "TRON: Legacy (2010) ", image: "https://upload.wikimedia.org/wikipedia/en/c/c2/Tron_Legacy_poster.jpg", info: "IMDb : 6.8/10", link: 'https://m.vegamovies.tips/download-tron-legacy-2010-dual-audio-hindi-english-480p-720p-1080p/' },
  { movieName: "The Descent: Part 2 (2009) ", image: "https://m.media-amazon.com/images/M/MV5BMTcxMDUxMjQyOF5BMl5BanBnXkFtZTcwNzk0NzgxMw@@._V1_.jpg", info: "IMDb : 5.7/10", link: 'https://m.vegamovies.tips/download-the-descent-part-2-2009-dual-audio-hindi-480p-720p-1080p/' },
  { movieName: "The Last House on the Left (2009)", image: "https://m.media-amazon.com/images/M/MV5BMTI4NDE5MDU0MF5BMl5BanBnXkFtZTcwMTE0NTkxMg@@._V1_.jpg", info: "IMDb : 6.5/10", link: 'https://m.vegamovies.tips/download-the-last-house-on-the-left-2009-hindi-dubbed-480p-720p-1080p/' },
  { movieName: "Quarantine (2008)", image: "https://m.media-amazon.com/images/M/MV5BMjY0MDgwNTQ4OF5BMl5BanBnXkFtZTcwMzQzNjY3MQ@@._V1_FMjpg_UX1000_.jpg", info: "IMDb : 5.9/10", link: 'https://m.vegamovies.tips/quarantine-2008-dual-audio-hindi-movie/' },
  { movieName: "Taken All Movie Collection (2008-2014) ", image: "https://www.tvguide.com/a/img/catalog/provider/1/2/1-8853215891.jpg", info: "IMDb : 7.8/10", link: 'https://m.vegamovies.tips/download-taken-3-movie-collection-2008-2014-english-with-subtitles-480p-720p-1080p-bluray/' },
  { movieName: "Elektra (2005) ", image: "https://upload.wikimedia.org/wikipedia/en/thumb/2/21/Elektra_teaser.jpg/220px-Elektra_teaser.jpg", info: "IMDb : 4.7/10", link: 'https://m.vegamovies.tips/download-elektra-2005-dual-audio-hindi-movie-480p-720p/' },
  { movieName: "The Descent (2005) ", image: "https://horroroasis.com/wp-content/uploads/2021/03/41cdS6HCODL.jpg", info: "IMDb : 7.2/10", link: 'https://www.google.com/search?q=the+descent+movie+download&bih=752&biw=1536&rlz=1C1ONGR_enIN1031IN1031&hl=en&sxsrf=APwXEdcO4q_SIphoU3TjFdmSacu5lXe0eA%3A1687927796996&ei=9LubZKyyPKzc4-EP672PmAc&ved=0ahUKEwis_PuFleX_AhUs7jgGHeveA3MQ4dUDCA8&uact=5&oq=the+descent+movie+download&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMggIABCABBDLATIICAAQgAQQywEyCAgAEIoFEIYDOgoIABBHENYEELADOgoILhCKBRCwAxBDOgcIIxCKBRAnOgcILhCKBRBDOgYIABAWEB46FQguEIoFEEMQlwUQ3AQQ3gQQ4AQYAToHCC4QigUQJzoICC4QgAQQsQM6CggAEIAEEBQQhwI6EwguEIoFEJcFENwEEN4EEOAEGAE6BQguEIAESgQIQRgAUPACWJYuYPYvaAJwAXgBgAGcCIgB-E2SAQ0yLTIuMS4xLjEuOC4xmAEAoAEBwAEByAEJ2gEGCAEQARgU&sclient=gws-wiz-serp' },
  // { movieName: "(2019) ", image: "", info: "IMDb : /10", link: '' },
  // { movieName: "(2019) ", image: "", info: "IMDb : /10", link: '' },


  // ... rest of the movie data ...
];
let limit = 20;
let i = 0;
if (limit >= action.length) {
    next.style.display = 'none';
}
previous.style.display = 'none';

next.addEventListener('click', () => {
    i = limit;
    limit += 20;
    mcontainer.innerHTML=''
    previous.style.display = 'flex';
  if (limit >= action.length) {
    next.style.display = 'none';

    for (i; i < limit; i++) {
        let div = document.createElement('div');
        div.classList.add('imgbox');
        div.style.margin = '22px';
        div.style.background = 'black';
    
        let a = document.createElement('a');
        a.classList.add('link');
        a.href = action[i].link;
    
        let img = document.createElement('img');
        img.src = action[i].image;
        img.classList.add('imgsize');
    
        let p = document.createElement('p');
        p.innerText = action[i].movieName;
    
        let p1 = document.createElement('p');
        p1.innerText = action[i].info;
        p1.style.textAlign = 'center';
    
        mcontainer.appendChild(div);
        div.appendChild(a);
        a.appendChild(img);
        a.appendChild(p);
        a.appendChild(p1);
      }
    return;
  }

  for (i; i < limit; i++) {
    let div = document.createElement('div');
    div.classList.add('imgbox');
    div.style.margin = '22px';
    div.style.background = 'black';

    let a = document.createElement('a');
    a.classList.add('link');
    a.href = action[i].link;

    let img = document.createElement('img');
    img.src = action[i].image;
    img.classList.add('imgsize');

    let p = document.createElement('p');
    p.innerText = action[i].movieName;

    let p1 = document.createElement('p');
    p1.innerText = action[i].info;
    p1.style.textAlign = 'center';

    mcontainer.appendChild(div);
    div.appendChild(a);
    a.appendChild(img);
    a.appendChild(p);
    a.appendChild(p1);
  }


});

previous.addEventListener('click', () => {
    i = limit - 40;
    limit -= 20;
    mcontainer.innerHTML = '';
  
    if (i <= 0) {
      previous.style.display = 'none';
    next.style.display = 'flex';

      i = 0;
    }
  
    for (i; i < limit; i++) {
      let div = document.createElement('div');
      div.classList.add('imgbox');
      div.style.margin = '22px';
      div.style.background = 'black';
  
      let a = document.createElement('a');
      a.classList.add('link');
      a.href = action[i].link;
  
      let img = document.createElement('img');
      img.src = action[i].image;
      img.classList.add('imgsize');
  
      let p = document.createElement('p');
      p.innerText = action[i].movieName;
  
      let p1 = document.createElement('p');
      p1.innerText = action[i].info;
      p1.style.textAlign = 'center';
  
      mcontainer.appendChild(div);
      div.appendChild(a);
      a.appendChild(img);
      a.appendChild(p);
      a.appendChild(p1);
    }
  
    next.style.display = 'block';
  });
  

// Initial movie display
for (i; i < Math.min(limit, action.length); i++) {
  let div = document.createElement('div');
  div.classList.add('imgbox');
  div.style.margin = '22px';
  div.style.background = 'black';

  let a = document.createElement('a');
  a.classList.add('link');
  a.href = action[i].link;

  let img = document.createElement('img');
  img.src = action[i].image;
  img.classList.add('imgsize');

  let p = document.createElement('p');
  p.innerText = action[i].movieName;

  let p1 = document.createElement('p');
  p1.innerText = action[i].info;
  p1.style.textAlign = 'center';

  mcontainer.appendChild(div);
  div.appendChild(a);
  a.appendChild(img);
  a.appendChild(p);
  a.appendChild(p1);
}
