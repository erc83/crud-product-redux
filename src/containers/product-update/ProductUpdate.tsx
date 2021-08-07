import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import useInput from "../../hooks/userInput"
import { Link, useHistory, useParams } from "react-router-dom"
import { updateProductAction } from "../../store/products/actions"
import { productListSelector } from "../../store/products/selectors"


const ProductUpdate = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const { id }: any = useParams()
    const productList = useSelector(productListSelector)

    const [nombre, handlerNombre, setNombre] = useInput('')
    const [precio, handlerPrecio, setPrecio] = useInput('')
    const [descripcion, handlerDescripcion, setDescripcion] =useInput('')
    const [color, handlerColor, setColor] = useInput('')

    useEffect(() => {
        const u = productList.find(e => e.id === Number.parseInt(id))
        if(u) {
            setNombre(u.nombre)
            setPrecio(u.precio)
            setDescripcion(u.descripcion)
            setColor(u.color)
        }
    }, [productList, id, setNombre, setPrecio, setDescripcion, setColor])

    const handlerSave = (event:any) => {
        event.preventDefault()
        dispatch(updateProductAction({
            id: Number.parseInt(id),
            nombre,
            precio,
            descripcion,
            color
        }))
        history.push('/products')
    }

    return productList.find(e => e.id === Number.parseInt(id)) ? (
        <div className="row">
            <div className="col">
                <div className="card">
                    <div className="card-header">
                        Actualizar Producto
                        <div className="btn-group">
                            <Link className="btn btn-link" to="/products">Listado Productos</Link>
                        </div>
                    </div>
                    <form onSubmit={handlerSave}>
                        <div className="card-body">
                            <label>Nombre</label>
                            <input className="form-control" type="text" value={nombre} onChange={handlerNombre}    />
                            
                            <label>Precio</label>
                            <input className="form-control" type="number" value={precio} onChange={handlerPrecio}    />
                            
                            <label>Descripcion</label>
                            <input className="form-control" type="text" value={descripcion} onChange={handlerDescripcion}    />
                            
                            <label>Color</label>
                            <input className="form-control" type="text" value={color} onChange={handlerColor}    />
                        </div>
                        <div className="card-footer">
                            <button className="btn btn-primary mt-3"
                                disabled={ nombre==='' || precio ==='' || descripcion === '' || color === ''}

                            >Actualizar</button>

                        </div>
                    </form>
                </div>
            </div>
        </div>


    ) : (
        <div>Loading...</div>
    )
}

export default ProductUpdate
