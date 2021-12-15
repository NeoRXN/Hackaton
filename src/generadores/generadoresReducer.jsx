import { 
    AGREGAR_PRODUCTO,
    MOSTRAR_BOTONES,
    SELECCIONAR_ACTUAL,
    OBTENER_PRODUCTOS,
    MOSTRAR_CARDS,
    SELECCIONAR_PRODUCTO,
    REINICIAR_FORMULARIO
} from '../types';


const generadoresReducer = (state, action) => {
    switch(action.type){
        case AGREGAR_PRODUCTO:
            return{
                ...state,
                listadoproductos: [...state.listadoproductos, action.payload]
            }
        case MOSTRAR_BOTONES:
            return{
                ...state,
                botones: action.payload
            }
        case SELECCIONAR_ACTUAL:
            return{
                ...state,
                actual: action.payload
            }
        case OBTENER_PRODUCTOS:
            console.log(action.payload)
            return{
                ...state,
                listadoproductos: [...state.listadoproductos, action.payload]
            }
        case MOSTRAR_CARDS:
            return{
                ...state,
                cards: action.payload
            }
        case SELECCIONAR_PRODUCTO:
            return{
                ...state,
                seleccion: state.listadoproductos.filter(producto => producto.id === action.payload.id)
            }
        case REINICIAR_FORMULARIO:
            return{
                ...state,
                reiniciar: action.payload
            }

        default:    
        return state;
    }
}

export default generadoresReducer;
