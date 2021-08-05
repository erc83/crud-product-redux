import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteUserAction } from '../../store/users/actions'
import { userListSelector } from '../../store/users/selectors'
 
const UserList = () => {
    const userList = useSelector(userListSelector)
    const dispatch = useDispatch()

    const handlerDelete = (id: any) => {
        dispatch(deleteUserAction(id))
    }
    return (
        <div className="row">
            <div className="col">
                <div className="card">
                    <div className="card-header">
                        Listado
                        <div className="btn-group">
                            <Link className="btn btn-link" to="/create">Nuevo</Link>
                        </div>
                    </div>
                    <div className="card-body">
                        {userList.length > 0 ? (<table className="table">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Nombre</th>
                                    <th>Email</th>
                                    <th className="text-end">
                                        Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {userList.map((u: any) => (
                                    <tr>
                                        <td>
                                            <div className="badge bg-dark">
                                                {u.id}
                                            </div>
                                        </td>
                                        <td>{u.name}</td>
                                        <td>{u.email}</td>
                                        <td className="text-end">
                                            <div className="btn-group">
                                                <button className="btn btn-sm btn-danger"
                                                    onClick={() => handlerDelete(u.id)}
                                                >Eliminar</button>
                                                
                                                <Link className="btn btn-sm btn-primary" to={`/detail/${u.id}`}
                                                >Detalle</Link>
                                            </div>
                                        </td>

                                    </tr>
                                ))}

                            </tbody>
                        </table>) : (
                            <div className="alert alert-danger">
                                No existen Elementos
                            </div>
                        )}
                    </div>
                </div>
            </div>            
        </div>
    )
}

export default UserList
