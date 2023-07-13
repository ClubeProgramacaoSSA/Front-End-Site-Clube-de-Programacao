//pagina de erro - to do
import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';

function ErrorPage() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="h-screen flex justify-center items-center flex-col">
        <h1 className="text-orange font-bold text-9xl">404</h1>
        <h2 className="text-3xl">
          Página não encontrada!{' '}
          <a href="/" className="text-orange cursor-pointer">
            Voltar para home
          </a>
        </h2>
      </div>
      {/* <p className="">Click on the Vite and React logos to learn more</p> */}
    </>
  );
}

export default ErrorPage;
