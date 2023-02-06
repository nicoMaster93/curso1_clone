import React from "react";
import '../estilos/Testimonio.css';
/* Exportacion Nombrada */
export function Testimonio(props){
  return(
    <div className="contenedor-testi">
      <img src={require(`../imagenes/${props.imagen}`)} alt={`Foto de ${props.nombre}`} className="imagen-testi" />
      <div className="contenedor-texto" >
        <p className="nombre-testi" >{props.nombre} <b>{props.empresa}</b></p>
        <p className="cargo-testi">{props.cargo}</p>
        <p className="texto-testi">{props.texto}</p>
      </div>
    </div>
  );
}
