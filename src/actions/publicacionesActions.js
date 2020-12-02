import { TRAER_TODOS, CARGANDO,ERROR } from "../types/publicacionesTypes"
import axios from 'axios';

export const traerTodos = () => async (dispatch) => {
  dispatch({
    type: CARGANDO
  })
  try{
  const respuesta = await axios.get('https://jsonplaceholder.typicode.com/posts');
	dispatch({
		type: 'traer_todos',
		payload: respuesta.data
  })  
  }
  catch(error){
    console.log('error', error.message)
    dispatch({
      type:ERROR,
      payload: 'Algo salio mal intente despues'
    })
  }
};