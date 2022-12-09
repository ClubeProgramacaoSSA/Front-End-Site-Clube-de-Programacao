import React, { useEffect, useRef } from "react";
import './styles.css';

export function Login() {
	const usernameRef = useRef<string>('');

	return (
		<div style={{minHeight:'100vh',display:'flex',alignItems:'center', justifyContent:'center' }}>
			<main className='px-20 py-10 max-w-2xl mx-auto bg-slate-800 rounded-lg xsm:w-full xsm:h-full xsm:absolute'>
					<div className="text-center font-Roboto text-2xl mb-10 text-stone-500">
						<h2 className=" font-bold ">Sign <span className="text-orange">In</span></h2>
						<p>The clube is very porreta</p>
					</div>
					<div className="text-gray-900 mb-2">
						<div className="flex items-center text-sm">
							{/* <label className="text-base text-orange flex-[.2] inline-block h-full mr-1 font-bold " htmlFor="username">{`USERNAME:`}</label> */}
							<input className="	w-full 
												placeholder:text-center 
												bg-gray-300 
												border-2 
												border-gray-300 
												rounded-sm
												focus:border-3
												focus:border-orange 
												p-1.5
											"  
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

								<input className="	w-full 
												placeholder:text-center 
												bg-gray-300 
												border-2 
												border-gray-300 
												rounded-sm
												focus:border-3
												focus:border-orange 
												p-1.5
											"  
									type="password" 
									name="password" 
									id="passwd" 
									placeholder="Password"
								/>
							</div>
					</div>
					<div className="flex justify-between text-stone-400 font-bold">
						{/* <button className="bg-orange  px-4 font-bold py-0 rounded-lg inline-block ease-in-out hover:text-yellow-50">Sign In!</button> */}
						<a 
						href="#"
						className="px-4 py-1 sm:px-4 xsm:px-4 sm:py-1 xsm:py-1 gap-3 flex items-center border-solid border-2 rounded-lg 
						border-orange hover:scale-110 hover:bg-orange duration-300 hover:text-yellow-50"
						>
							Login
						</a>
						<div className="font-semibold text-stone-400 ">
							<p>Don`t registered yet?</p> 
							<span onClick={() => console.log('Sign-Up!')} className="px-4 py-1 sm:px-4 xsm:px-4 sm:py-1 xsm:py-1 gap-3 flex items-center border-solid border-2 rounded-lg 
						border-orange hover:scale-110 hover:bg-orange duration-300 hover:text-yellow-50 ">
								Sign Up!
							</span>
						</div>
					</div>
			</main>

			<div className="wave xsm:hidden">
				<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
					<path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
					<path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
					<path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
				</svg>
			</div>
		</div>
	);
}
