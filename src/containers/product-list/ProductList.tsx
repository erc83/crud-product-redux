
import {  useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { productListSelector } from '../../store/products/selectors'
import { deleteProductAction } from '../../store/products/actions'


const ProductList = () => {
    const productList = useSelector(productListSelector)
    const dispatch = useDispatch()

    const handlerDelete = (id:any) => {
        dispatch(deleteProductAction(id))
    }

    return (
        <div className="row">
            <div className="col">
                <div className="card">
                    <div className="card-header">
                        Listado de Productos
                        <div className="btn-group">
                            <Link className="btn btn-link" to="/products/create">
                                Nuevo Producto
                            </Link>
                        </div>
                    </div>
                    <div className="card-body">
                        { productList.length > 0 ? (<table className="table">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Nombre</th>
                                            <th>Precio</th>
                                            <th>Descripcion</th>
                                            <th>Color</th>
                                            <th className="text-end">Acciones </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {productList.map((p: any) => (   
                                            <tr>
                                                <td>
                                                    <div className="badge bg-dark">
                                                        {p.id}
                                                    </div>
                                                </td>
                                                <td>{p.nombre}</td>
                                                <td>{p.precio}</td>
                                                <td>{p.descripcion}</td>
                                                <td>{p.color}</td>
                                                <td className="text-end">
                                                    <div className="btn-group">
                                                        <button className="btn btn-sm btn-danger"
                                                                onClick={()=> handlerDelete(p.id)}
                                                        > Eliminar </button>

                                                        <Link className="btn btn-sm btn-primary" to={`/products/detail`}>
                                                            Detalle
                                                        </Link>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}

                                    </tbody>
                                </table>) : (
                                    <div className="alert alert-danger">
                                        No existen Productos
                                    </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductList
