const Input = () => (
    <div className='input'>
        <label htmlFor="sort" className='input__title'>Ordenar</label>

        <select name="sort" id="sort" className='input__options'>
            <option value="release" className='input__options__release'>Lançamento</option>
            <option value="price" className='input__options__price'>Preço</option>
        </select>
    </div>
)



export default Input