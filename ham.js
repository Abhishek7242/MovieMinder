document.querySelector('#ham').addEventListener('click', ()=>{
    document.getElementById('navbar').classList.toggle('sidego')
    if(document.getElementById('navbar').classList.contains('sidego')){
        document.getElementById('cross').style.display='none'
        setTimeout(()=>{
      
      
        document.getElementById('ham').style.display='inline'
        document.getElementById('logoname').style.display='inline'
    },300)
    
}
else{
    document.getElementById('ham').style.display='none'
    // document.getElementById('logoname').style.display='none'
    setTimeout(()=>{
        document.getElementById('cross').style.display='inline'
    },300)
    
}
// document.getElementById('cross').classList.add('sidego')
})
document.querySelector('#cross').addEventListener('click', ()=>{
    document.getElementById('navbar').classList.toggle('sidego')
    if(document.getElementById('navbar').classList.contains('sidego')){
        document.getElementById('cross').style.display='none'
        setTimeout(()=>{
            
            
            document.getElementById('ham').style.display='inline'
            document.getElementById('logoname').style.display='inline'
        },300)

    }
    else{
        document.getElementById('ham').style.display='none'
        document.getElementById('logoname').style.display='none'
        setTimeout(()=>{
        document.getElementById('cross').style.display='inline'
        },300)

    }
    // document.getElementById('cross').classList.add('sidego')
})