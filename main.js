let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<soam style="color: #b74e51"> Desarrollo sitios web y escribo artículos sobre programación.')
  .pauseFor(200)
  .deleteChars(10)
  .start();
