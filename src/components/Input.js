import { useContext } from "react"
import { OptionContext } from "../contexts/OptionContext"

const Input = () => {


    const { isSelected, setIsSelected } = useContext(OptionContext)

    const handleChange = (event) => {
        setIsSelected(event.target.value)
        console.log(isSelected)
    }

    return (
        <div className='input'>
            <label htmlFor="sort" className='input__title'>Ordenar</label>

            <select name="sort" value={isSelected} onChange={handleChange} className='input__options'>
                <option value="release" className='input__options__release'>Lançamento</option>
                <option value="price" className='input__options__price'>Preço</option>
            </select>
        </div>
    )
}





export default Input