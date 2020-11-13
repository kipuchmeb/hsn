function a(){
   let random = ['Уедешь в Южную Корею', 'Появятся много денег']
   let out = document.querySelector('.out');
   console.log(out);
   out.innerHTML = random[Math.floor(Math.random() * random.length)];

   


}