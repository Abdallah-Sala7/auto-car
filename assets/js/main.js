const question = document.querySelectorAll('.clint-contint .question-title'),
      answer = document.querySelectorAll('.clint-contint .question-data');

question.forEach(e =>{
  e.addEventListener('click',(ev)=>{
    ev.preventDefault();
    e.classList.toggle('active');  
  })
})