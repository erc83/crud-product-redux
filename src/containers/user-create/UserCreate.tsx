import { useDispatch } from 'react-redux'
import useInput from '../../hooks/userInput'
import { Link, useHistory } from 'react-router-dom'
import { createUserAction } from '../../store/users/actions'


const UserCreate = () => {
    const [name, handlerName] = useInput('')
    const [email, handlerEmail] = useInput('')
    const dispatch = useDispatch()
    const history = useHistory()

    const handlerSave = (event: any) => {
        event.preventDefault()
        dispatch(createUserAction({
            id: new Date().getTime(),
            name,
            email
        }))
        history.push('/')
    }

    return (
        <div className="row">
            <div className="col">
                <div className="card">
                    <div className="card-header">
                        Nuevo Usuario
                        <div className="btn-group">
                            <Link className="btn btn-link" to="/">
                                Listado
                            </Link>
                        </div>
                    </div>
                    <form onSubmit={handlerSave}>
                        <div className="card-body">
                            <label>Nombre</label>
                            <input  className="form-control" 
                                    type="text"
                                    value={name}
                                    onChange={handlerName}      
                            />
                            <label>Email</label>
                            <input  className="form-control"
                                    type="email"
                                    value={email}
                                    onChange={handlerEmail} 
                            />
                        </div>
                        <div className="card-footer">
                            <button className="btn btn-primary mt-3"
                                    disabled={name === '' || email ===''}
                            > Guardar </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default UserCreate