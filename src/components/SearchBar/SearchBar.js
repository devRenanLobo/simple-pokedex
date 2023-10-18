import './SearchBar.css';

const SearchBar = () => {
    return (
        <div className="wrapper">
            <label>
               <input placeholder="Digite o nome do pokemon"/>
            </label>
            <button>
                Procurar
            </button>
        </div>
    )
}

export default SearchBar;