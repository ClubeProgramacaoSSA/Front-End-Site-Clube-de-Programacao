import React, { useEffect, useRef } from "react";
import falconsIcon from '../../assets/svg/falconsIcon.svg'

export function Login() {
	const usernameRef = useRef<string>('');
	useEffect(() => {
		const body = document.getElementById('body');
		if(body) {
			body.style.backgroundImage = falconsIcon;
		}
		debugger;
	},[])

	return( 
		<main className='px-20 py-10 max-w-xl mx-auto my-20 bg-slate-800 rounded-lg'>
			<div className="text-center font-Roboto text-2xl mb-10">
				<h2 className="font-bold text-stone-500">Sign <span className="text-orange">In</span></h2>
				<p className="text-stone-400">The clube is very porreta</p>
			</div>
			<div className="text-gray-900 mb-2">
				<div className="flex items-center text-sm">
					{/* <label className="text-base text-orange flex-[.2] inline-block h-full mr-1 font-bold " htmlFor="username">{`USERNAME:`}</label> */}
					<input className="w-full placeholder:text-center bg-gray-300 border border-gray-300 rounded-sm focus:ring-blue-500 focus:border-blue-500 p-1.5"  
						type="text" 
						name="username"
						id="user"
						placeholder="Username"
					/>
				</div>
			</div>
			<div className="mb-10">
					<div className="flex items-center text-sm">
						{/* <label className="text-orange text-base flex-[.2] inline-block h-full mr-1 font-bold " htmlFor="username">{`SENHA:`}</label> */}

						<input className=" w-full bg-gray-300 border border-gray-300 placeholder:text-center rounded-sm focus:ring-blue-500 focus:border-blue-500 p-1.5"
							type="password" 
							name="password" 
							id="passwd" 
							placeholder="Password"
						/>
					</div>
			</div>
			<div className="flex justify-between ">
				<button className="bg-orange px-2 py-1 rounded-lg inline-block transition-opacityhover:text-yellow-50">Sign In!</button>
				<div className="font-semibold text-stone-400 ">
					<p>Don`t registered yet?</p> 
					<span onClick={() => console.log('Sign-Up!')} className="border-b-2 border-orange cursor-pointer ">
						Sign Up!
					</span>
				</div>
			</div>
		</main>
	);
}
