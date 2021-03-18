const item1 = document.querySelector('.item1')
const item2 = document.querySelector('.item2')
const background = document.querySelector('.background')
const arrow = document.querySelector('.arrow')


const change = () => {
item1.classList.toggle('hide')
if (item1.classList.contains('hide')){
    arrow.style.transform = 'rotate(180deg)'
}else{
    arrow.style.transform = 'rotate(0deg)'
}
}

arrow.addEventListener('click', change)

