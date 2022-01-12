let textContent = ""
let text1 = document.querySelector('.test1').innerHTML.split('')
let body = document.querySelector('body')


text1.forEach(item => {
   textContent = textContent + `<span>${item}</span>`
});
body.innerHTML = textContent

const spans = document.querySelectorAll('span')
spans.forEach(span => {
   span.addEventListener('mouseover', (e) => {
      e.target.style.color = 'green'
   })
   span.addEventListener('click', (e) => {
      e.target.classList.add('hidden')
   })
})
addEventListener('keydown', (e)=>{
   if (e.keyCode == 0 || e.keyCode == 32) {
     body.innerHTML = "";
   } 
})

