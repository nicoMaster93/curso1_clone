import React from "react";
import '../estilos/Testimonio.css';
/* Exportacion Nombrada */
class Testimonio extends React.Component {
  render(){
    return(
      <div className="contenedor-testi">
        <img src={require(`../imagenes/${this.props.imagen}`)} alt={`Foto de ${this.props.nombre}`} className="imagen-testi" />
        <div className="contenedor-texto" >
          <p className="nombre-testi" >{this.props.nombre} <b>{this.props.empresa}</b></p>
          <p className="cargo-testi">{this.props.cargo}</p>
          <p className="texto-testi">{this.props.texto}</p>
        </div>
      </div>
    );
  }
}
export default Testimonio;