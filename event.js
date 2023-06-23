let genreimg = document.getElementById('genreimg');
let genre = document.getElementById('genre');
let innernav = document.getElementById('innernav');


genre.addEventListener('mouseover',()=>{
    genreimg.classList.add('rotate')
    innernav.style.display='flex'
})
genreimg.addEventListener('mouseover',()=>{
    genreimg.classList.add('rotate')
    innernav.style.display='flex'
})
genre.addEventListener('mouseout',()=>{
    genreimg.classList.remove('rotate')
    innernav.style.display='none'
})