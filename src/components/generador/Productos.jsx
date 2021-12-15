import React,{useContext} from 'react'
import { UilCameraPlus } from '@iconscout/react-unicons';
import generadoresContext from '../../generadores/generadoresContext';


export default function Productos({producto, actualizarProducto}) {


    //extraer producto
    const {tipo, dimensiones, peso, descripcion, imagen, nombre} = producto;

    //traer producto del state
    const contextGeneradores = useContext(generadoresContext);
    const{actual, productoActual} = contextGeneradores;
    

    //Guardar lo que escribe el usuario
    const onChange = e => {
        //guardar el producto
        actualizarProducto  ({
            ...actual,
            ...producto,
            [e.target.name] : e.target.value
        })
        productoActual({
            ...producto,
            [e.target.name] : e.target.value
        })
    }   




    return (
        <div className='producto'>
            <h3 className="titulo">Producto a reciclar</h3>
                <div action="" method="post" className="productoForm flex">
                    <select 
                        name="tipo"
                        value={tipo}
                        onChange={onChange}
                        id="tipo" 
                        className="input"
                    >
                        <option value="">---Seleccione---</option>
                        <option value="plastico">Plastico</option>
                        <option value="papel">Papel</option>
                        <option value="vidrio">Vidrio</option>
                        <option value="metal">Metal</option>
                    </select>
                    <input 
                        type="text" 
                        placeholder="Producto" 
                        className="input medioInput"
                        name='nombre'
                        value={nombre}
                        onChange={onChange}
                    />

                    <input 
                        type="text" 
                        placeholder="Dimensiones en cc" 
                        className="input medioInput"
                        name='dimensiones'
                        value={dimensiones}
                        onChange={onChange}
                    />  

                    <input 
                        type="text" 
                        placeholder="Peso estimado" 
                        className="medioInput input"
                        name='peso'
                        value={peso}
                        onChange={onChange}
                    />

                    <textarea 
                        id="descripcion" 
                        cols="30" 
                        rows="2" 
                        className="input" 
                        placeholder="descripcion del producto"
                        name='descripcion'
                        value={descripcion}
                        onChange={onChange}
                    >
                    </textarea>

                    <div className="inputFile flex input">
                        <label 
                            htmlFor="imagen" 
                            className="label1"
                        >
                            {<UilCameraPlus/>}
                        </label>

                        <input 
                            type="file" 
                            name="imagen" 
                            value={imagen}
                            onChange={onChange}
                            id="imagen" 
                            accept="image/png, image/jpeg"
                            multiple
                        />
                        <label htmlFor="imagen" className="label2">Adjuntar imagen del producto</label>
                    </div>
                </div>
        </div>
    )
}
