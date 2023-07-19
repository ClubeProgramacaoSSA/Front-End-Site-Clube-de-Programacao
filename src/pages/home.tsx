import landingBanner1 from '/png/landing12.png';
import landingBanner2 from '/png/landing2.png';
import dividerBanner from '/png/Divider.png';
import logoSenai from '/png/logosenai.png';
import logoRedbull from '/png/logo-red-bull.png';
import logoNike from '/png/logo-nike.png';
import logoRiot from '/png/logo-riot.png';
import Carousel from '../components/carousel';
import carouselData from '../assets/exampleCarouselData.json';
import NavBar from '../components/navbar';

function Home() {
  // const [count, setCount] = useState(0);

  // console.log(carouselData.);

  return (
    <>
      <NavBar />
      <div className="font-barlow h-max flex flex-col z-0 gap-24 overflow-x-hidden">
        <header className="relative mt-48">
          <div className="absolute left-12 top-24 flex flex-col gap-8">
            <h1 className="font-bold text-9xl">
              "Não seja um <span className="text-orange">PATO</span>"
            </h1>
            <p className="text-6xl ml-8">~Mestre Facundes</p>
          </div>
          <img src={landingBanner1} alt="Banner do time" />
        </header>
        <main className="flex flex-col gap-24">
          <section>
            <div className="flex flex-col px-24 gap-8">
              <h2 className="font-bold  text-9xl self-end">
                SOBRE <span className="text-orange">NÓS</span>
              </h2>
              <p className="text-5xl text-right">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <img src={landingBanner2} alt="Banner do time 2" />
          </section>
          <section className="flex flex-col gap-32">
            <div className="px-24 flex flex-col gap-8">
              <h2 className="text-9xl font-bold">
                <span className="text-orange">NOSSA</span> EQUIPE
              </h2>
              <p className="text-5xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
                ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <Carousel data={carouselData} />
          </section>
          <img src={dividerBanner} alt="" />
          <section className="flex flex-col items-center px-24 gap-12">
            <h2 className="text-9xl font-bold">
              NOSSOS <span className="text-orange">APOIADORES</span>
            </h2>
            <ul className="flex justify-between items-center w-full">
              <li>
                <img src={logoSenai} alt="Logo senai" className="w-[32rem]" />
              </li>
              <li>
                <img src={logoNike} alt="Logo nike" className="w-72" />
              </li>
              <li>
                <img src={logoRedbull} alt="Logo RedBull" className="w-72" />
              </li>
              <li>
                <img src={logoRiot} alt="Logo Riot" className="w-72" />
              </li>
            </ul>
          </section>
        </main>
        <footer className="bg-[url(/png/footer2.png)] flex items-end bg-[length:100%_100%] bg-no-repeat justify-center h-[44rem] pb-24">
          <div className="flex flex-col items-center">
            <h2 className="text-8xl">Entre em contato:</h2>
            <a href="" className="text-5xl">
              algumemailrandom@email.com
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Home;
