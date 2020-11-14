function a() {
   let random = ['Уедешь в Южную Корею', 'Появятся много денег', 'Будешь счастливой',
      'Сделаешь тату', 'Отправишься в путешествие', 'Будешь пить больше воды', 'Выучишь английский', 'Купишь новый дом',
      'Научишься играть на пианино']
   let out = document.querySelector('.out');
   console.log(out);
   out.innerHTML = random[Math.floor(Math.random() * random.length)];




}