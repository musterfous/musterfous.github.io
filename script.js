const header = document.querySelector('.header')
header.addEventListener('mouseenter', function(){
    header.style.color='red'
    header.style.fontFamily='faster one'
    header.style.wordSpacing='4px'
})
const header1 = document.querySelector('.header')
header1.addEventListener('mouseleave', function(){
    header1.style.color='blue'
    header1.style.fontFamily='geo'
})