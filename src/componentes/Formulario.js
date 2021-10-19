import React, {useState} from 'react';

const Formulario = ({cantidad, guardarCantidad, plazo, guardarPlazo}) => {

    //Definir el state
    const [error, guardarError] = useState(false);

    //Cuando el usuario hace submit
    const calcularPrestamo = (e) => {
        e.preventDefault();
    
        //Validar
        if(cantidad === 0 || plazo === ''){
            guardarError(true);
        }

        //Realizar el calculo
    
    }

    return ( 
        <form onSubmit={calcularPrestamo}>
            <div className="row">
                <div>
                    <label>Cantidad Prestamo</label>
                    <input 
                        className="u-full-width" 
                        type="number" 
                        placeholder="Ejemplo: 3000"
                        onChange={
                            e => guardarCantidad(parseInt(e.target.value))
                        } 
                    />
                </div>
                <div>
                    <label>Plazo para Pagar</label>
                    <select 
                        className="u-full-width"
                        onChange={
                            e => guardarPlazo(parseInt(e.target.value))
                        }
                    >
                        <option value="">Seleccionar</option>
                        <option value="3">3 meses</option>
                        <option value="6">6 meses</option>
                        <option value="12">12 meses</option>
                        <option value="24">24 meses</option>
                    </select>
                </div>
                <div>
                    <input 
                        type="submit" 
                        value="Calcular" 
                        className="button-primary u-full-width" 
                    />
                </div>
            </div>
        </form>
    );
}

export default Formulario;