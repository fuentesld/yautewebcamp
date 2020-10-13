(function(){
  'use strict'
  document.addEventListener('DOMContentLoaded', function(){

    // let forma = document.querySelector('#registro')
    let regalo = document.querySelector('#regalo')
    // ? Datos de usuario
    let nombre = document.querySelector('#nombre')
    let apellido = document.querySelector('#apellido')
    let email = document.querySelector('#email')

    // ? Campos pase
    let paseDia = document.querySelector('#pase-dia')
    let paseCompleto = document.querySelector('#pase-completo')
    let paseDosdias = document.querySelector('#pase-dosdias')

    // ? botones y divs
    let calcular = document.querySelector('#calcular')
    let listaProductosHTML = document.querySelector('#lista-productos')
    let sumaTotal = document.querySelector('#suma-total')
    let errorDiv = document.querySelector('#error')
    let registro = document.querySelector('#btn-registro')

    // ? extras
    let camisas = document.querySelector('#camisa-evento')
    let etiquetas = document.querySelector('#etiquetas')

    registro.disabled = true

    // forma.submit(e => {
      // e.preventDefault()
    // })

    const calcularMontos = (e)=>{
      e.preventDefault()
      if (regalo.value === ''){
        alert("debes elejir un reglo")
        regalo.focus()
      } else {
        let boletosDia = parseInt(paseDia.value, 10) || 0
        let boletosCompleto = parseInt(paseCompleto.value,10) || 0
        let boletosDosdias = parseInt(paseDosdias.value,10) || 0
        let cantCamisas = parseInt(camisas.value, 10) || 0
        let cantEtiquetas = parseInt(etiquetas.value, 10) || 0

        console.log(`Boletos dia -> ${boletosDia}`)
        console.log(`Boletos completos -> ${boletosCompleto}`)
        console.log(`Boletos 2 dia -> ${boletosDosdias}`)

        let totalPagar = 
          boletosDia * 30 + 
          boletosCompleto * 50 + 
          boletosDosdias * 45 +
          cantCamisas * 10 * (1 - .07) +
          cantEtiquetas * 2

        console.log(`Total pagar -> ${totalPagar}`)
        let regaloStr
        switch (regalo.value) {
          case '0': 
            regaloStr = 'Pulsera de regalo'
            break;
          case '1': 
            regaloStr = 'Etiquetas de regalo'
            break;
          case '2': 
            regaloStr = 'Plumas de regalo'
            break;
          default:
            regaloStr = 'Sin Regalo'
            break;
        }

        let listadoProductos = []
        if(boletosDia > 0){
          listadoProductos.push(`${boletosDia} Pases por Dia`)
        } 
        if(boletosDosdias > 0){
        listadoProductos.push(`${boletosDosdias} Pases por 2 Dias`)
        }
        if(boletosCompleto > 0){
        listadoProductos.push(`${boletosCompleto} Pases completos`)
        }
        if(cantCamisas > 0){
          listadoProductos.push(`${cantCamisas} Camisas`)
        }
        if(cantEtiquetas > 0){
        listadoProductos.push(`${cantEtiquetas} Etiquetas`)}

        if(totalPagar > 0){
          listadoProductos.push(`${regaloStr}`)
        }
        listaProductosHTML.style.display= 'block'
        listaProductosHTML.innerHTML = ''
        listadoProductos.forEach(producto => {
          listaProductosHTML.innerHTML =  listaProductosHTML.innerHTML + `${producto} <br>`
        });
        sumaTotal.innerHTML = `$ ${totalPagar.toFixed(2)}`
        registro.disabled = false
        document.querySelector('#total-pedido').value = totalPagar.toFixed(2)
      }
    }

    const mostrarDias = ()=>{
      let boletosDia = parseInt(paseDia.value, 10) || 0
      let boletosCompleto = parseInt(paseCompleto.value,10) || 0
      let boletosDosdias = parseInt(paseDosdias.value,10) || 0

      let diasElegidos = ['viernes','sabado', 'domingo']
      document.querySelector('#eventos').style.display = 'none'
      diasElegidos.forEach(dia => document.querySelector(`#${dia}`).style.display='none')
      diasElegidos = []

      if (boletosCompleto > 0){
        diasElegidos.push('viernes','sabado', 'domingo')
      } else if (boletosDosdias > 0){
        diasElegidos.push('viernes','sabado')
      } else if (boletosDia > 0){
        diasElegidos.push('viernes')
      }
      ( boletosCompleto > 0 || boletosDosdias > 0 || boletosDia > 0 ) && (document.querySelector('#eventos').style.display = 'block')
      diasElegidos.forEach(dia => document.querySelector(`#${dia}`).style.display='block')

    }

    function validaCampo() {

      if (this.value === ''){
        errorDiv.style.display = 'block'
        errorDiv.innerHTML = 'Campo Obligatorio'
        this.style.border = '1px solid red'
      } else {
        errorDiv.style.display = 'none'
        this.style.border = '1px solid black'
      }
    }

    function validaEmail() {
      // const emailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      const emailFormat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      if (this.value.match(emailFormat))
      {
        errorDiv.style.display = 'none'
        this.style.border = '1px solid black'
      } else {
        errorDiv.style.display = 'block'
        errorDiv.innerHTML = 'Email inválido'
        this.style.border = '1px solid red'
      }
    }

    nombre.addEventListener('blur', validaCampo)
    apellido.addEventListener('blur', validaCampo)
    email.addEventListener('blur', validaEmail)
    calcular.addEventListener('click', calcularMontos)
    paseDia.addEventListener('blur', mostrarDias)
    paseDosdias.addEventListener('blur', mostrarDias)
    paseCompleto.addEventListener('blur', mostrarDias)
  })
})()