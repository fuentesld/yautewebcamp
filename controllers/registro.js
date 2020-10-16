// const moment = require('moment')
const Registro = require('../models/registro')
exports.getRegistroPage = (req,res)=>{
  // res.sendFile(path.join(dirRoot, 'views', 'index.html'))
  res.render('registro', {pageTitle: 'Reservaciones'})
}

exports.validarRegistro = async (req,res,next)=>{

  const datos = req.body
  // console.log(datos)
  const compra={}
  parseInt(datos.pase_undia) > 0 && (compra.undia = parseInt(datos.pase_undia)) 
  parseInt(datos.pase_2dias) > 0 && (compra.dosDias = parseInt(datos.pase_2dias)) 
  parseInt(datos.pase_completo) > 0 && (compra.completo = parseInt(datos.pase_completo)) 
  parseInt(datos.pedido_camisas) > 0 && (compra.camisas = parseInt(datos.pedido_camisas)) 
  parseInt(datos.pedido_etiquetas) > 0 && (compra.etiquetas = parseInt(datos.pedido_etiquetas))
  compra.registro = datos.registro
  compra.regalo = parseInt(datos.regalo)

  let registro = new Registro(null, datos.nombre, datos.apellido, datos.email, new Date().toISOString(), JSON.stringify(compra), Number(datos.total_pedido))

  try {
    results = await registro.save()
    // console.log(results)
    datos.id = results.rows[0].registro_id
    // console.log(datos)
    
    // res.render('validarRegistro', {pageTitle:'Validar Registro', datosRegistro: datos})
    return res.redirect(`/muestraregistro/${datos.id}`)

  } catch (error) {
    console.log(error)
  }
}

exports.muestraRegistro = async (req,res,next)=>{
  
  const id = req.params.id
  
  try {
    result = await Registro.getRegistroById(id)
    const datos = result.rows[0]
    // console.log(datos);
    return res.render('validarRegistro', {pageTitle:'Carrito Registro', datos})
  } catch (error) {
    console.log(error)
  }
  
}

