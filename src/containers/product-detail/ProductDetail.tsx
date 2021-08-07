import React, { useEffect } from "react"
import { useDispatch, useSelector} from 'react-redux'
import useInput from "../../hooks/userInput"
import { Link, useHistory, useParams } from "react-router-dom"
import { deleteProductAction } from "../../store/products/actions"
import { productListSelector } from "../../store/products/selectors"


const ProductDetail = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const { id }: any = useParams()
    const productList = useSelector(productListSelector)

    const [nombre, handlerNombre, setNombre] = useInput('')
    const [precio, handlerPrecio, setPrecio] = useInput('')
    const [descripcion, handlerDescripcion, setDescripcion] = useInput('')
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

    const handlerDelete = (id:any) => {
        dispatch(deleteProductAction(id))
        history.push('/products')
    }

    return productList.find(e => e.id === Number.parseInt(id)) ?  (
        <div className="row">
            <div className="col">
                <div className="card">
                    <div className="card-header">
                        Detalle Producto
                        <div className="btn-group">
                            <Link className="btn btn-link" to="/products">Listado Productos</Link>
                        </div>
                    </div>
                    <div className="card-body">
                        <ul>
                            <li>{id}</li>
                            <li>{nombre}</li>
                            <li>{precio}</li>
                            <li>{descripcion}</li>
                            <li>{color}</li>
                        </ul>

                    </div>
                    <div className="card-footer">
                         <div className="btn-group">
                         <button
								className="btn btn-sm btn-outline-danger"
                                onClick={() => handlerDelete(parseInt(id))}> Delete </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) : (
        <div className="alert alert-danger">
            No hay detalle de producto
        </div>
    )
}

export default ProductDetail
