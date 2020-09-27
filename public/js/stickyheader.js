(function(){
  'use strict'
  document.addEventListener('DOMContentLoaded', function(){
    var h = document.getElementById("header");
    // var readout = document.getElementById("readout");
    var stuck = false;
    var stickPoint = getDistance();

    const botonMenuMovil = document.querySelector('.menu-movil')
    const menuMovil = document.querySelector('.navegacion-principal')
    console.log(menuMovil)
    botonMenuMovil.addEventListener('click', (e)=>{
      e.preventDefault()
      console.log('click')
      menuMovil.classList.toggle('ocultar')
    })

    function getDistance() {
      var topDist = h.offsetTop;
      return topDist;
    }
    
    window.onscroll = function(e) {
      var distance = getDistance() - window.pageYOffset;
      var offset = window.pageYOffset;
      // readout.innerHTML = stickPoint + '   ' + distance + '   ' + offset + '   ' + stuck;
      if ( (distance <= 0) && !stuck) {
        h.style.position = 'fixed';
        h.style.top = '0px';
        stuck = true;
      } else if (stuck && (offset <= stickPoint)){
        h.style.position = 'static';
        stuck = false;
      }
    }
  })
})()