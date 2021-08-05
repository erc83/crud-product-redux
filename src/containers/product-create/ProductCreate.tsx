import { useDispatch } from 'react-redux'
import useInput from '../../hooks/userInput'
import { Link , useHistory } from 'react-router-dom'
import { createProductAction } from '../../store/products/actions'

const ProductCreate = () => {
    const [precio, handlerPrecio] = useInput('')
    const [nombre, handlerNombre] = useInput('')
    const [descripcion, handlerDescripcion] = useInput('')
    const [color, handlerColor] = useInput('')

    const dispatch = useDispatch()
    const history = useHistory()

    const handlerSave = (event: any) => {
        event.preventDefault()
        dispatch(createProductAction({
            id: new Date().getTime(),
            precio,
            nombre,
            descripcion,
            color
        }))
        history.push('/products')
    }

    return (
        <div className="row">
            <div className="col">
                <div className="card">
                    <div className="card-header">
                        Nuevo Producto
                        <div className="btn-group">
                            <Link className="btn btn-link" to="/products">
                                Lista de productos
                            </Link>
                        </div>
                    </div>
                    <form onSubmit={handlerSave}>
                        <div className="card-body">
                            <label>Nombre</label>
                            <input  className="form-control"
                                    type="text"
                                    value={nombre}
                                    onChange={handlerNombre} 
                            />
                            <label>Precio</label>
                            <input  className="form-control"
                                    type="number"
                                    value={precio}
                                    onChange={handlerPrecio} 
                            />

                            <label>Descripcion</label>
                            <textarea
                                    className="form-control"
                                    value={descripcion}
                                    onChange={handlerDescripcion}
                            />

                            <label>color</label>
                            <input  className="form-control"
                                    type="text"
                                    value={color}
                                    onChange={handlerColor} 
                            />
                        </div>
                        <div className="card-footer">
                            <button className="btn btn-primary mt-3"
                                    disabled={nombre === '' || precio === '' || descripcion === '' || color === '' }
                            > Guardar </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ProductCreate