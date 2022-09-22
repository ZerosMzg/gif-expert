import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue ] = useState('')

    const onInputChange =({target}) =>{
        setInputValue(target.value)
    }
    const onSubmit = (e) =>{

        e.preventDefault();
        if(!inputValue){
            console.log('no hay categoria')
        }else{
            onNewCategory(inputValue)
            setInputValue('')
        }
        
    }

  return (
    <form onSubmit={(e) => onSubmit(e)}>
        <input
        type='text'
        placeholder="Buscar Categoria"
        value={inputValue}
        onChange={onInputChange}
        />

    </form>
    
  )
}
