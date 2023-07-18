import NavBar from '../components/navbar';
import Search from '../components/search';

function Projects() {
  return (
    <>
      <NavBar />
      <div className="font-barlow pt-48 flex flex-col gap-52">
        <header className="px-72 font-inter flex flex-col items-center gap-24">
          <h1 className="text-9xl font-bold">PROJETOS</h1>
          <p className="text-5xl text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            represhenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </header>
        <main>
          <Search />
          <section id="projetos-principais"></section>
          <div id="divider"></div>
          <section id="outros-projetos"></section>
        </main>
      </div>
      {/* <p className="">Click on the Vite and React logos to learn more</p> */}
    </>
  );
}

export default Projects;
