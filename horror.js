let mcontainer = document.getElementById('moviecontainer');
let next = document.getElementById('nextbtnbox').querySelector('#nextbtn');
let previous = document.getElementById('nextbtnbox').querySelector('#previousbtn');

let action = [
  { movieName: "Don't Listen (2020)", image: "dontlisten.jpg", info: "IMDb : 6.1/10", link: 'https://m.vegamovies.tips/download-dont-listen-2020-english-audio-480p-720p/' },
  { movieName: "Devil (2010)", image: "https://m.media-amazon.com/images/M/MV5BZDVmZGExMTEtNjk5OS00MTFkLWI0ZDMtNzg4YWFmNGY3NjRkXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_.jpg", info: "IMDb : 6.3/10", link: 'https://m.vegamovies.tips/download-devil-2010-hindi-dual-audio-full-movie/' },
  { movieName: "Hereditary (2018)", image: "https://m.media-amazon.com/images/M/MV5BOTU5MDg3OGItZWQ1Ny00ZGVmLTg2YTUtMzBkYzQ1YWIwZjlhXkEyXkFqcGdeQXVyNTAzMTY4MDA@._V1_.jpg", info: "IMDb : 7.3/10", link: 'https://m.vegamovies.tips/download-hereditary-2018-hindi-org-dubbed-bluray-480p-720p-1080p-2160p-4k/' },
  { movieName: "Mother! (2017)", image: "https://upload.wikimedia.org/wikipedia/en/9/94/Mother%212017.jpg", info: "IMDb : 6.6/10", link: 'https://m.vegamovies.tips/download-mother-2017-dual-audio-hindi-480p-720p-1080p/' },
  { movieName: "Nope (2022)", image: "https://www.uphe.com/sites/default/files/styles/scale__319w_/public/2022/09/Nope_DigitalArt.webp?itok=BI6vIeYH", info: "IMDb : 6.8/10", link: 'https://m.vegamovies.tips/download-nope-2022-imax-bluray-dual-audio-hindi-480p-720p-1080p-2160p-4k/' },
  { movieName: "Quarantine (2008)", image: "https://m.media-amazon.com/images/M/MV5BMjY0MDgwNTQ4OF5BMl5BanBnXkFtZTcwMzQzNjY3MQ@@._V1_FMjpg_UX1000_.jpg", info: "IMDb : 5.9/10", link: 'https://m.vegamovies.tips/quarantine-2008-dual-audio-hindi-movie/' },
  { movieName: "Quarantine 2: Terminal (2011) ", image: "https://m.media-amazon.com/images/M/MV5BMjE2MDMxODUxM15BMl5BanBnXkFtZTcwMDk4Mjk0Ng@@._V1_FMjpg_UX1000_.jpg", info: "IMDb : 5.2/10", link: 'https://bollyflix.loan/quarantine-2-terminal-2011-hindi-dubbed-movie/' },
  { movieName: "Synchronic (2019)", image: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/Synchronic_poster.jpeg/220px-Synchronic_poster.jpeg", info: "IMDb : 6.2/10", link: 'https://m.vegamovies.tips/synchronic-2020-full-movie-in-hindi-dubbed/' },
  { movieName: "The Descent (2005) ", image: "https://horroroasis.com/wp-content/uploads/2021/03/41cdS6HCODL.jpg", info: "IMDb : 7.2/10", link: 'https://www.google.com/search?q=the+descent+movie+download&bih=752&biw=1536&rlz=1C1ONGR_enIN1031IN1031&hl=en&sxsrf=APwXEdcO4q_SIphoU3TjFdmSacu5lXe0eA%3A1687927796996&ei=9LubZKyyPKzc4-EP672PmAc&ved=0ahUKEwis_PuFleX_AhUs7jgGHeveA3MQ4dUDCA8&uact=5&oq=the+descent+movie+download&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMggIABCABBDLATIICAAQgAQQywEyCAgAEIoFEIYDOgoIABBHENYEELADOgoILhCKBRCwAxBDOgcIIxCKBRAnOgcILhCKBRBDOgYIABAWEB46FQguEIoFEEMQlwUQ3AQQ3gQQ4AQYAToHCC4QigUQJzoICC4QgAQQsQM6CggAEIAEEBQQhwI6EwguEIoFEJcFENwEEN4EEOAEGAE6BQguEIAESgQIQRgAUPACWJYuYPYvaAJwAXgBgAGcCIgB-E2SAQ0yLTIuMS4xLjEuOC4xmAEAoAEBwAEByAEJ2gEGCAEQARgU&sclient=gws-wiz-serp' },
  { movieName: "The Collection (2012)", image: "https://m.media-amazon.com/images/M/MV5BZTRmOTE3MTctODZmOS00OWU4LTliMzUtYTA3ZmY4NTE2MzhiXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg", info: "IMDb : 6.1/10", link: 'https://m.vegamovies.tips/download-the-collection-2012-full-movie-hindi-dubbed-english-movie/' },
  { movieName: "The Night Eats the World (2018) ", image: "https://m.media-amazon.com/images/M/MV5BMTJlOTc3NGMtNjZkMi00NDAzLWE2YTctMDM1NzM3ZGYxMWJhXkEyXkFqcGdeQXVyODc0OTEyNDU@._V1_.jpg", info: "IMDb : 6/10", link: 'https://m.vegamovies.tips/download-the-night-eats-the-world-2018-english-movie-480p-720p-1080p/' },
  { movieName: "Us (2019)", image: "https://m.media-amazon.com/images/M/MV5BZTliNWJhM2YtNDc1MC00YTk1LWE2MGYtZmE4M2Y5ODdlNzQzXkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_FMjpg_UX1000_.jpg", info: "IMDb : 6.8/10", link: 'https://m.vegamovies.tips/download-us-2019-hindi-dubbed-480p-720p-1080p/' },



  // ... rest of the movie data ...
];
