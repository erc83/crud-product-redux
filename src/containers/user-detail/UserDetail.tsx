import React,  { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import useInput from '../../hooks/userInput'
import { Link, useHistory, useParams } from "react-router-dom"
import { updateUserAction } from '../../store/users/actions'
import { userListSelector } from '../../store/users/selectors'

const UserDetail = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const { id }: any  = useParams()
    const userList = useSelector(userListSelector)

    const [name, handlerName, setName] = useInput('')
    const [email, handlerEmail, setEmail] = useInput('')

    useEffect(() => {
        const u = userList.find(e => e.id === Number.parseInt(id))
        if (u) {
            setName(u.name)
            setEmail(u.email)
        }
    },[userList, id, setEmail, setName])

    const handlerSave = (event: any) => {
        event.preventDefault()
        dispatch(updateUserAction({
            id: Number.parseInt(id),
            name,
            email
        }))
        history.push('/')
    }

    return  userList.find(e=> e.id === Number.parseInt(id)) ? (
        <div className="row">
            <div className="col">
                <div className="card">
                    <div className="card-header">
                        Actualizar usuario
                        <div className="btn-group">
                            <Link className="btn btn-link" to="/" 
                            > Listado </Link>
                        </div>
                    </div>
                    <form onSubmit={handlerSave}>
                        <div className="card-body">
                            <label>Nombre</label>
                            <input  className="form-control"
                                    type="text"
                                    value={name}
                                    onChange={handlerName}      />
                            <label>Email</label>
                            <input  className="form-control" 
                                    type="email"
                                    value={email}
                                    onChange={handlerEmail}     />
                        </div>
                        <div className="card-footer">
                            <button className="btn btn-primary mt-3"
                                    disabled={name === '' || email === ''}
                            > Guardar </button>
                        </div>
                    </form>
                </div>
            </div>           
        </div>
    ) : (
        <div>Loading...</div>
    )
}

export default UserDetail
