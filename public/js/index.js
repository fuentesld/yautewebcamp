(function(){
  'use strict'
  document.addEventListener('DOMContentLoaded', function(){
    // var map = L.map('mapa').setView([18.88576875363526,  -99.06087882106033], 17);
    var map = L.map('mapa',
      {
        center: [18.88576875363526,  -99.06087882106033], 
        zoom: 17
      });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(map);

    L.marker([18.88576875363526, -99.06087882106033]).addTo(map)
      .bindPopup('Yaute WebCamp<br>No Faltes.')
      .openPopup();
  })

  // * MENU PROGRAMA

  const menuPrograma = document.querySelectorAll('.menu-programa a')
  const talleres = document.querySelector('#talleres')
  const conferencias = document.querySelector('#conferencias')
  const seminarios = document.querySelector('#seminarios')
  menuProgramaActual(0)
  menuPrograma.forEach((programa,index) => programa.addEventListener('click', (e)=> {
    e.preventDefault()
    menuProgramaActual(index)
  }))

  function menuProgramaActual(menu){
    // console.log('click ->', menu)
    talleres.classList.add('ocultar')
    conferencias.classList.add('ocultar')
    seminarios.classList.add('ocultar')

    menuPrograma[0].classList.remove('activo')
    menuPrograma[1].classList.remove('activo')
    menuPrograma[2].classList.remove('activo')
    menuPrograma[menu].classList.add('activo')
    if (menu === 0) {
      // talleres.classList.add('show')
      // talleres.classList.remove('hide')
      // conferencias.classList.add('hide')
      // conferencias.classList.remove('show')
      seminarios.classList.toggle('ocultar')
    }
    if (menu === 1) {
      conferencias.classList.toggle('ocultar')
    }
    if (menu === 2) {
      talleres.classList.toggle('ocultar')
    }
  }

  // * NUMERALIA DEL SITIO
  const counters = document.querySelectorAll('.resumen-evento .numeralia');
  // console.log(counters)
  const speed = 4000; // The lower the slower

  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;
      // console.log(target, count)
		  // Lower inc to slow and higher to slow
      const inc = target / speed;

		  // console.log(inc);
		  // console.log(count);

		  // Check if target is reached
      if (count < target) {
			  // Add inc to count and output in counter
        counter.innerText = Math.ceil(count + inc) ;
			  // Call function every ms
        setTimeout(updateCount, 1);
      } else {
        counter.innerText = target;
      }
    };

    updateCount();
  });


  // * COUNTDOWN TIMER
  // <!-- Display the countdown timer in an element -->
  {/* <p id="demo"></p> */}

  {/* <script> */}
  // Set the date we're counting down to
  // var countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();
  var countDownDate = new Date();
  countDownDate.setDate(countDownDate.getDate() +15)
    let camposFecha = document.querySelectorAll('.cuenta-regresiva p')
// Update the count down every 1 second
  var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    // document.getElementById("demo").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  
    camposFecha[0].innerHTML = days
    camposFecha[1].innerHTML = hours
    camposFecha[2].innerHTML = minutes
    camposFecha[3].innerHTML = seconds
    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "EXPIRED";
    }
  }, 1000);
  // </script>

})()