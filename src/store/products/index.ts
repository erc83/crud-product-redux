const initialState = {
    data:[]
}

const reducerProduct = (prevState = initialState, action: {payload: any, type:string}) =>{
    switch (action.type){
        case 'PRODUCT_CREATE':
            return {
                data: [...prevState.data, action.payload]
            }
        case 'PRODUCT_DELETE':
            return {
                data: prevState.data.filter((p: any) => p.id !== action.payload),
            }
        case 'PRODUCT_UPDATE':
            return {
                data: prevState.data.map((p:any) => {
                    if(p.id === action.payload.id) return action.payload
                    return p
                })
            }
        default:
            return prevState
    }
}

export default reducerProduct