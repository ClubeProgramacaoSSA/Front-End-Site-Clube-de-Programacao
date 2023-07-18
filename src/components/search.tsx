import filterIcon from '/svg/filter-icon.svg';
import searchIcon from '/svg/search-icon.svg';

// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';

// Componente de barra de pesquisa de projetos e workshop
function Search() {
  return (
    <>
      <form className="mx-52 flex font-inter gap-16 text-4xl relative">
        <input
          className="w-full px-5 py-4 bg-black border-b-2"
          type="text"
          placeholder="Pesquisar"
        />
        <button className="absolute right-64 top-4">
          <img src={searchIcon} alt="Search icon" />
        </button>
        <button className="flex items-center gap-4 border justify-center px-6 rounded-3xl">
          <img src={filterIcon} alt="Filter icon" className="w-8" />
          <p>Filtros</p>
        </button>
      </form>
      {/* <p className="">Click on the Vite and React logos to learn more</p> */}
    </>
  );
}

export default Search;
