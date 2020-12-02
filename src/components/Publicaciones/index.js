import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as usuariosActions from '../../actions/usuariosActions';
import * as publicacionesActions from '../../actions/publicacionesActions';

const { traerTodos: usuariosTraerTodos } = usuariosActions;
const { traerTodos: publicacionesTraerTodos } = publicacionesActions;

class Publicaciones extends Component{

  componentDidMount(){
    //tenemos que especificar ahora a que reducer nos estamos refiriendo 
    if (!this.props.usuariosReducer.usuarios.length) {
			this.props.usuariosTraerTodos();
		}
  }
  render(){
    console.log(this.props)
    return(
      <div>
        <h1>
          Publicaciones de
        </h1>
        { this.props.match.params.key }
      </div>
    )
  }
}

const mapStateToProps = ({usuariosReducer, publicacionesReducer }) => {
  return {
    usuariosReducer, 
    publicacionesReducer
  };
};
//me va a entregar todo lo de usuariosActions y publicacionesActions

const mapDispatchToProps = {
	usuariosTraerTodos,
	publicacionesTraerTodos
};

export default connect(mapStateToProps, mapDispatchToProps)(Publicaciones);