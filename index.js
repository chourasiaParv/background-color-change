const btn = document.querySelector('.btn')
const bodyyy = document.querySelector('body')
const color = ['red','white','green','blue','yellow','pink','black']

btn.addEventListener('click',event=>{
    const colorIndex =parseInt(Math.random()*color.length)
    bodyyy.style.backgroundColor = color[colorIndex]

})