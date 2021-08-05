import { useState } from 'react' 

const useInput = (initialState: string) => {
    const [val, setVal] = useState<any>(initialState)

    const handlerChange = (event: any) => {
        setVal(event.target.value)
    }

    return[val, handlerChange, setVal]
}

export default useInput
