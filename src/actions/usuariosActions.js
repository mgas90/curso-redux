import axios from 'axios'
import { TRAER_TODOS, CARGANDO, ERROR } from '../types/usuariosTypes'
// es una funcion que está retornando otra funcion 
//la segunda funcion como parametro requiere el dispatch

//se coloca el await a la funcion padre directa
export const traerTodos = () => async (dispatch) =>{
  dispatch({
    type: CARGANDO
  })
  try {
    const respuesta = await axios.get('https://jsonplaceholder.typicode.com/users');
	 
   dispatch({
     type: TRAER_TODOS,
     payload: respuesta.data 
   })
  } catch (error) {
    console.log('error', error.message)
    dispatch({
      type:ERROR,
      payload: 'Algo salio mal intente despues'
    })
  }
}