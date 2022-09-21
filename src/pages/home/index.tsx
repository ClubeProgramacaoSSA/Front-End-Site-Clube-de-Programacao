import React,{useState} from 'react';

export function Home() {
	const [state,setState] = useState(0);
  return (
	<>
	<h1>Home</h1>
	<button onClick={() => setState(old => ++old) } >{`State Count: ${state}`}</button>
   	</>
	);
}
