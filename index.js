const buscadorHidden = document.getElementById('search_hidden');
const buscador = document.getElementById('search');
const container = document.getElementById('container');
const lupaOculta = document.getElementById('lupa_oculta');
const contBarraBusqueda = document.getElementById('conteiner_barra_busqueda');
const navLateralSegSeccionMostrar = document.getElementById('nav_icon_seg_secc_mostrar_secc_oculta');
const navIconSegSeccOculto = document.getElementById('nav_icon_expand_seg_secc_oculto');
const icoMenuLateral = document.getElementById('ico_menu_lat')
const navOculta = document.getElementById('nav_oculto');
const navShow = document.getElementById('nav_show');
const selecciones = document.getElementById('selecciones')
const seccVideos = document.getElementById('secc_vid');
const contenVideos = document.getElementById('conten_vid');
const arrVideo = document.querySelectorAll('.video') 
let validadorNavLateral = 1

/**
 * Evento de escucha de click, cuando esta selecc la barra de busqueda 
 * realiza acciones de cambio de clase y cambios de estilos
 */
document.addEventListener('click', () => {
   if (document.activeElement.type === 'search'){
   //buscadorHidden.style.display = 'flex'
      container.classList.add('input_Hidden')
      lupaOculta.style.display = 'flex'
      buscador.style.backgroundColor = 'rgb(0,0,0)'
      contBarraBusqueda.style.marginLeft ='0%'
      contBarraBusqueda.style.width = '81%'  
   }else{
      container.classList.remove('input_Hidden')
      lupaOculta.style.display = 'none'
      buscador.style.backgroundColor = 'rgb(17,17,17)'
      contBarraBusqueda.style.marginLeft ='6%'
      contBarraBusqueda.style.width = '75%'  
   }
})

icoMenuLateral.addEventListener('click',() =>{
   
   if (validadorNavLateral === 1){
   navOculta.style.display = 'inherit';
   navShow.style.display = 'none';
   selecciones.style.width = '96.33%';
   seccVideos.style.width = '96.33%';
   childVid();
   contenVideos.style.padding = '30px 30px';
   validadorNavLateral = 0;
   }else{
      navOculta.style.display = 'none'
      navShow.style.display = 'inherit'
      selecciones.style.width = '87.5%'
      seccVideos.style.width = '87.5%';
      childVid();
      contenVideos.style.padding = '30px 50px'
      validadorNavLateral = 1;
   }
})



/*
*Funcion que escucha el click en la seg seccion de la barrra lateral
*/
function mostrarSecOcultaNav(){
   navIconSegSeccOculto.style.display = 'inline'
   navLateralSegSeccionMostrar.style.display = 'none'
}
function ocultarSeccNav(){
   navIconSegSeccOculto.style.display = 'none'
   navLateralSegSeccionMostrar.style.display = 'flex'
}

/**
 * Funcion para recorrer los elemntos del cont vid 
 */

function childVid(){
   
   for(let i = 0; i< arrVideo.length; i++){
      if (validadorNavLateral === 1){
      arrVideo[i] = arrVideo[i].style.width = '350px'
      }else{
      arrVideo[i] = arrVideo[i].style.width = '370px'
      }
   }
}